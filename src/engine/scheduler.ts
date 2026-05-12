import { planningRules } from "../data/planningRules";
import type { AircraftCategory, Driver, Flight, FlightAssignment, Helper, OperationType, PlanningRules, Push, ResourceInputs, ScheduleException, ScheduleResult, ServiceType, Truck } from "../types/dispatch";

type ResourcePoolItem = { id: string; availableAt: number };
type ScheduleOptions = { operationType?: OperationType; rules?: PlanningRules };

export function createPlanningSchedule(assignments: FlightAssignment[], drivers: Driver[], helpers: Helper[], trucks: Truck[], options: ScheduleOptions = {}): ScheduleResult {
  const rules = options.rules ?? planningRules;
  const flights = toFlights(assignments, rules, options.operationType);
  const candidatePushes = buildCandidatePushes(flights, rules);
  const scheduledPushes = assignUnlimitedResources(candidatePushes, drivers, helpers, trucks, rules);
  return buildResult("planning", scheduledPushes, []);
}

export function createDispatchSchedule(assignments: FlightAssignment[], drivers: Driver[], helpers: Helper[], trucks: Truck[], resources: ResourceInputs, options: ScheduleOptions = {}): ScheduleResult {
  const rules = options.rules ?? planningRules;
  const flights = toFlights(assignments, rules, options.operationType);
  const candidatePushes = buildCandidatePushes(flights, rules);
  const exceptions: ScheduleException[] = [];
  const scheduledPushes = assignLimitedResources(candidatePushes, drivers.slice(0, resources.availableDrivers), helpers.slice(0, resources.availableHelpers), trucks.slice(0, resources.availableTrucks), exceptions, rules);
  return buildResult("dispatch", scheduledPushes, exceptions);
}

function toFlights(assignments: FlightAssignment[], rules: PlanningRules, operationType?: OperationType): Flight[] {
  return assignments
    .filter((flight) => flight.serviceType !== "break")
    .map((flight) => {
      const etdMinutes = timeToMinutes(flight.etd);
      const aircraftCategory = categorizeAircraft(flight.aircraft);
      const flightOperationType: OperationType = aircraftCategory === "regional" ? "express" : "mainline";
      return {
        id: flight.id,
        flightNumber: flight.flightNumber,
        gate: flight.gate,
        etd: flight.etd,
        eta: flight.eta,
        inboundEta: flight.inboundEta,
        aircraft: flight.aircraft,
        serviceType: flight.serviceType,
        aircraftCategory,
        operationType: flightOperationType,
        loadWindowStart: minutesToTime(etdMinutes - rules.earliestCateringBeforeDepartureMinutes),
        loadWindowEnd: minutesToTime(etdMinutes - rules.targetCompletionBeforeDepartureMinutes),
        hardLatestCompletion: minutesToTime(etdMinutes - rules.hardMinimumCompletionBeforeDepartureMinutes),
        workloadUnits: workloadFor(flight.serviceType, aircraftCategory),
      };
    })
    .filter((flight) => !operationType || flight.operationType === operationType)
    .sort((a, b) => timeToMinutes(a.etd) - timeToMinutes(b.etd));
}

function buildCandidatePushes(flights: Flight[], rules: PlanningRules): Push[] {
  const pushes: Push[] = [];
  let current: Flight[] = [];

  for (const flight of flights) {
    if (current.length === 0) {
      current = [flight];
      continue;
    }

    const firstEtd = timeToMinutes(current[0].etd);
    const nextEtd = timeToMinutes(flight.etd);
    const currentWorkload = current.reduce((total, item) => total + item.workloadUnits, 0);
    const sameOperation = current.every((item) => item.operationType === flight.operationType);
    const canGroup = sameOperation && current.length < rules.maxFlightsPerPush && nextEtd - firstEtd <= rules.groupWindowMinutes && currentWorkload + flight.workloadUnits <= rules.maxWorkloadUnitsPerPush;

    if (canGroup) {
      current.push(flight);
    } else {
      pushes.push(createPush(pushes.length + 1, current, rules));
      current = [flight];
    }
  }

  if (current.length > 0) pushes.push(createPush(pushes.length + 1, current, rules));
  return pushes;
}

function createPush(pushNumber: number, flights: Flight[], rules: PlanningRules): Push {
  const earliestLoadEnd = Math.min(...flights.map((flight) => timeToMinutes(flight.loadWindowEnd)));
  const operationType = flights[0]?.operationType ?? "mainline";
  const driveOutMinutes = operationType === "express" ? rules.expressDriveOutMinutes : rules.mainlineDriveOutMinutes;
  const returnMinutes = operationType === "express" ? rules.expressReturnMinutes : rules.mainlineReturnMinutes;
  const serviceMinutes = flights.reduce((total, flight) => total + rules.serviceMinutesByAircraftCategory[flight.aircraftCategory], 0);
  const totalDuration = driveOutMinutes + serviceMinutes + returnMinutes;
  const departure = snapDown(earliestLoadEnd - driveOutMinutes - serviceMinutes, rules);
  const gateService = departure + driveOutMinutes;
  const returnTime = departure + totalDuration;
  const hasMainlineFlight = flights.some((flight) => flight.operationType === "mainline");
  const needsHelper = rules.helperRequiredForMainline && hasMainlineFlight;

  return { id: `P${String(pushNumber).padStart(3, "0")}`, driverId: null, helperId: needsHelper ? "needed" : null, truckId: null, flights, kitchenDepartureTime: minutesToTime(departure), gateServiceTime: minutesToTime(gateService), returnTime: minutesToTime(returnTime), totalDurationMinutes: totalDuration, exceptionFlags: [] };
}

function assignUnlimitedResources(pushes: Push[], drivers: Driver[], helpers: Helper[], trucks: Truck[], rules: PlanningRules) {
  return assignPushes(pushes, createDriverPool(drivers), createHelperPool(helpers), createTruckPool(trucks), [], rules);
}

function assignLimitedResources(pushes: Push[], drivers: Driver[], helpers: Helper[], trucks: Truck[], exceptions: ScheduleException[], rules: PlanningRules) {
  return assignPushes(pushes, createDriverPool(drivers), createHelperPool(helpers), createTruckPool(trucks), exceptions, rules);
}

function assignPushes(pushes: Push[], driverPool: ResourcePoolItem[], helperPool: ResourcePoolItem[], truckPool: ResourcePoolItem[], exceptions: ScheduleException[], rules: PlanningRules) {
  return pushes.map((push) => assignResourcesToPush(push, driverPool, helperPool, truckPool, exceptions, rules));
}

function assignResourcesToPush(push: Push, driverPool: ResourcePoolItem[], helperPool: ResourcePoolItem[], truckPool: ResourcePoolItem[], exceptions: ScheduleException[], rules: PlanningRules): Push {
  const originalDeparture = timeToMinutes(push.kitchenDepartureTime);
  const driver = earliestAvailable(driverPool);
  const truck = earliestAvailable(truckPool);
  const helperNeeded = push.helperId === "needed";
  const helper = helperNeeded ? earliestAvailable(helperPool) : undefined;
  const assignedPush = { ...push, exceptionFlags: [...push.exceptionFlags] };

  if (!driver) markException(assignedPush, exceptions, "No driver available", "driver-shortage", "Add a driver or split later flights to another bank.");
  if (!truck) markException(assignedPush, exceptions, "No truck available", "truck-shortage", "Add a truck or delay a lower-priority push.");
  if (helperNeeded && !helper) markException(assignedPush, exceptions, "Helper needed but unavailable", "helper-shortage", "Assign a helper or split this push into smaller work.");

  const resourceReadyTime = Math.max(driver?.availableAt ?? originalDeparture, truck?.availableAt ?? originalDeparture, helperNeeded ? helper?.availableAt ?? originalDeparture : originalDeparture);
  const actualDeparture = snapUp(Math.max(originalDeparture, resourceReadyTime), rules);
  const delay = actualDeparture - originalDeparture;
  if (delay > 0) shiftPush(assignedPush, delay);

  const targetLoadEnd = Math.min(...assignedPush.flights.map((flight) => timeToMinutes(flight.loadWindowEnd)));
  const hardLatestCompletion = Math.min(...assignedPush.flights.map((flight) => timeToMinutes(flight.hardLatestCompletion)));
  const serviceEnd = timeToMinutes(assignedPush.gateServiceTime) + assignedPush.flights.reduce((total, flight) => total + rules.serviceMinutesByAircraftCategory[flight.aircraftCategory], 0);
  if (serviceEnd > hardLatestCompletion) markException(assignedPush, exceptions, "Unacceptable delay risk", "delayed-flight-risk", "Add resources or rebuild this push. Do not choose a plan that delays a flight.");
  else if (serviceEnd > targetLoadEnd) markException(assignedPush, exceptions, "Target completion miss", "food-safety-window", "Operationally possible but outside the preferred 30-minute completion target.");

  if (driver) { assignedPush.driverId = driver.id; driver.availableAt = timeToMinutes(assignedPush.returnTime); }
  if (truck) { assignedPush.truckId = truck.id; truck.availableAt = timeToMinutes(assignedPush.returnTime); }
  if (helperNeeded && helper) { assignedPush.helperId = helper.id; helper.availableAt = timeToMinutes(assignedPush.returnTime); } else if (!helperNeeded) { assignedPush.helperId = null; }
  return assignedPush;
}

function createDriverPool(drivers: Driver[]) { return drivers.map((driver) => ({ id: driver.id, availableAt: timeToMinutes(driver.shiftStart) })); }
function createHelperPool(helpers: Helper[]) { return helpers.map((helper) => ({ id: helper.id, availableAt: timeToMinutes(helper.shiftStart) })); }
function createTruckPool(trucks: Truck[]) { return trucks.map((truck) => ({ id: truck.id, availableAt: 0 })); }
function earliestAvailable(pool: ResourcePoolItem[]) { return pool.length === 0 ? undefined : pool.reduce((earliest, item) => (item.availableAt < earliest.availableAt ? item : earliest)); }

function markException(push: Push, exceptions: ScheduleException[], issue: string, cause: ScheduleException["cause"], recommendedAction: string) {
  push.exceptionFlags.push(issue);
  for (const flight of push.flights) {
    exceptions.push({ id: `${push.id}-${flight.id}-${cause}`, flightId: flight.id, flightNumber: flight.flightNumber, pushId: push.id, issue, cause, recommendedAction });
  }
}

function shiftPush(push: Push, delayMinutes: number) {
  push.kitchenDepartureTime = minutesToTime(timeToMinutes(push.kitchenDepartureTime) + delayMinutes);
  push.gateServiceTime = minutesToTime(timeToMinutes(push.gateServiceTime) + delayMinutes);
  push.returnTime = minutesToTime(timeToMinutes(push.returnTime) + delayMinutes);
}

function buildResult(mode: "planning" | "dispatch", pushes: Push[], exceptions: ScheduleException[]): ScheduleResult {
  const exceptionFlightIds = new Set(exceptions.map((item) => item.flightId).filter(Boolean));
  const allFlights = pushes.flatMap((push) => push.flights);
  const driverIds = new Set(pushes.map((push) => push.driverId).filter(Boolean));
  const helperIds = new Set(pushes.map((push) => push.helperId).filter(Boolean));
  const bottlenecks = [...new Set(exceptions.map((item) => humanCause(item.cause)))];

  return { mode, pushes, exceptions, summary: { totalFlights: allFlights.length, totalPushes: pushes.length, driversRequired: driverIds.size, helpersRequired: helperIds.size, maxTrucksRequired: maxConcurrentPushes(pushes), flightsScheduledNormally: allFlights.length - exceptionFlightIds.size, flightsWithExceptions: exceptionFlightIds.size, unscheduledFlights: pushes.filter((push) => !push.driverId || !push.truckId).flatMap((push) => push.flights).length }, resourceBottlenecks: bottlenecks };
}

function maxConcurrentPushes(pushes: Push[]) {
  let max = 0;
  for (const push of pushes) {
    const active = pushes.filter((other) => timeToMinutes(other.kitchenDepartureTime) < timeToMinutes(push.returnTime) && timeToMinutes(other.returnTime) > timeToMinutes(push.kitchenDepartureTime)).length;
    max = Math.max(max, active);
  }
  return max;
}

function workloadFor(serviceType: ServiceType, aircraftCategory: AircraftCategory) {
  if (aircraftCategory === "widebody") return 2;
  if (aircraftCategory === "narrowbody") return 1.5;
  if (aircraftCategory === "regional") return 1;
  if (serviceType === "load-ua") return 1.5;
  if (serviceType === "load-other") return 1.25;
  if (serviceType === "unplanned") return 1.5;
  return 1;
}

function humanCause(cause: ScheduleException["cause"]) {
  return { "driver-shortage": "Driver shortage", "helper-shortage": "Helper shortage", "truck-shortage": "Truck shortage", "timing-conflict": "Timing conflict", "food-safety-window": "Food safety window issue", "delayed-flight-risk": "Unacceptable delay risk" }[cause];
}

function categorizeAircraft(aircraft: string): AircraftCategory {
  const code = aircraft.toUpperCase();
  if (code.includes("777") || code.includes("787") || code.includes("767") || code.includes("330") || code.includes("350")) return "widebody";
  if (code.includes("E1") || code.includes("E7") || code.includes("CRJ") || code.includes("REGIONAL")) return "regional";
  return "narrowbody";
}

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number) {
  const normalized = Math.max(0, totalMinutes);
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function snapDown(minutes: number, rules: PlanningRules) { return Math.floor(minutes / rules.blockMinutes) * rules.blockMinutes; }
function snapUp(minutes: number, rules: PlanningRules) { return Math.ceil(minutes / rules.blockMinutes) * rules.blockMinutes; }
