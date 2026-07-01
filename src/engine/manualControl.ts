import type {
  AircraftCategory,
  Flight,
  ManualExceptionCode,
  ManualFlightOverride,
  ManualPlanSnapshot,
  ManualPlanState,
  ManualPushOverride,
  PlanningRules,
  Push,
  RiskSeverity,
  ScheduleResult,
  ServiceEvent,
} from "../types/dispatch";

const snapMinutes = 5;
const kitchenUnloadMinutes = 15;

export function snapToFiveMinutes(minutes: number) {
  return Math.round(minutes / snapMinutes) * snapMinutes;
}

export function createManualPlanState(result: ScheduleResult): ManualPlanState {
  const baseline = cloneResult(result);
  return {
    baseline,
    ...snapshotFromResult(cloneResult(result), {}, {}),
    history: [],
  };
}

export function resetManualPlan(state: ManualPlanState): ManualPlanState {
  return createManualPlanState(state.baseline);
}

export function undoManualMove(state: ManualPlanState): ManualPlanState {
  const previous = state.history[state.history.length - 1];
  if (!previous) return state;
  return {
    baseline: state.baseline,
    result: previous.result,
    flightOverrides: previous.flightOverrides,
    pushOverrides: previous.pushOverrides,
    history: state.history.slice(0, -1),
  };
}

export function movePushByMinutes(state: ManualPlanState, pushId: string, deltaMinutes: number, rules: PlanningRules): ManualPlanState {
  const snappedDelta = snapToFiveMinutes(deltaMinutes);
  if (snappedDelta === 0) return state;

  return commitManualChange(state, (snapshot) => {
    const push = snapshot.result.pushes.find((item) => item.id === pushId);
    if (!push) throw new Error(`Manual control could not find push ${pushId}.`);

    const originalStart = snapshot.pushOverrides[pushId]?.manualStart ?? push.kitchenDepartureTime;
    const manualKitchenDeparture = Math.max(0, timeToMinutes(originalStart) + snappedDelta);
    const recalculated = recalculatePush(push, push.flights, rules, {
      manualKitchenDeparture,
      gapMinutes: rules.gateToGateMoveMinutes,
      modifiedFlightIds: new Set(push.flights.map((flight) => flight.id)),
    });

    replacePush(snapshot, pushId, recalculated);
    snapshot.pushOverrides[pushId] = pushOverrideFor(push, recalculated, []);
    annotateFlightOverrides(snapshot, push, recalculated, pushId);
    validateManualPlan(snapshot.result, snapshot.flightOverrides, snapshot.pushOverrides, rules);
  });
}

export function moveFlightToPush(
  state: ManualPlanState,
  flightId: string,
  targetPushId: string,
  targetSequence: number,
  rules: PlanningRules,
  options: { gapMinutes?: number } = {},
): ManualPlanState {
  return commitManualChange(state, (snapshot) => {
    const sourcePush = snapshot.result.pushes.find((push) => push.flights.some((flight) => flight.id === flightId));
    const targetPush = snapshot.result.pushes.find((push) => push.id === targetPushId);
    if (!sourcePush) throw new Error(`Manual control could not find flight ${flightId}.`);
    if (!targetPush) throw new Error(`Manual control could not find target push ${targetPushId}.`);

    const movedFlight = sourcePush.flights.find((flight) => flight.id === flightId);
    if (!movedFlight) throw new Error(`Manual control could not resolve flight ${flightId}.`);

    const reducedGap = options.gapMinutes !== undefined ? snapToFiveMinutes(options.gapMinutes) : rules.gateToGateMoveMinutes;
    const sourceFlights = sourcePush.flights.filter((flight) => flight.id !== flightId);
    const targetWithoutFlight = targetPush.id === sourcePush.id ? sourceFlights : targetPush.flights.filter((flight) => flight.id !== flightId);
    const insertIndex = Math.max(0, Math.min(targetSequence, targetWithoutFlight.length));
    const targetFlights = [
      ...targetWithoutFlight.slice(0, insertIndex),
      movedFlight,
      ...targetWithoutFlight.slice(insertIndex),
    ];

    if (sourcePush.id === targetPush.id) {
      const recalculated = recalculatePush(targetPush, targetFlights, rules, {
        manualKitchenDeparture: timeToMinutes(targetPush.kitchenDepartureTime),
        gapMinutes: reducedGap,
        modifiedFlightIds: new Set(targetFlights.map((flight) => flight.id)),
      });
      replacePush(snapshot, targetPush.id, recalculated);
      snapshot.pushOverrides[targetPush.id] = pushOverrideFor(targetPush, recalculated, reducedGap < rules.gateToGateMoveMinutes ? ["reduced-gap"] : []);
      annotateFlightOverrides(snapshot, targetPush, recalculated, targetPush.id, reducedGap);
    } else {
      const nextPushes = snapshot.result.pushes.filter((push) => push.id !== sourcePush.id || sourceFlights.length > 0);
      snapshot.result = { ...snapshot.result, pushes: nextPushes };

      if (sourceFlights.length > 0) {
        const recalculatedSource = recalculatePush(sourcePush, sourceFlights, rules, {
          manualKitchenDeparture: timeToMinutes(sourcePush.kitchenDepartureTime),
          gapMinutes: rules.gateToGateMoveMinutes,
          modifiedFlightIds: new Set(sourceFlights.map((flight) => flight.id)),
        });
        replacePush(snapshot, sourcePush.id, recalculatedSource);
        snapshot.pushOverrides[sourcePush.id] = pushOverrideFor(sourcePush, recalculatedSource, []);
        annotateFlightOverrides(snapshot, sourcePush, recalculatedSource, sourcePush.id);
      }

      const recalculatedTarget = recalculatePush(targetPush, targetFlights, rules, {
        manualKitchenDeparture: timeToMinutes(targetPush.kitchenDepartureTime),
        gapMinutes: reducedGap,
        modifiedFlightIds: new Set(targetFlights.map((flight) => flight.id)),
      });
      replacePush(snapshot, targetPush.id, recalculatedTarget);
      snapshot.pushOverrides[targetPush.id] = pushOverrideFor(targetPush, recalculatedTarget, reducedGap < rules.gateToGateMoveMinutes ? ["reduced-gap"] : []);
      annotateFlightOverrides(snapshot, targetPush, recalculatedTarget, targetPush.id, reducedGap);
    }

    validateManualPlan(snapshot.result, snapshot.flightOverrides, snapshot.pushOverrides, rules);
    snapshot.result = {
      ...snapshot.result,
      pushes: snapshot.result.pushes,
      summary: summarizeManualResult(snapshot.result),
    };
  });
}

function commitManualChange(state: ManualPlanState, applyChange: (snapshot: ManualPlanSnapshot) => void): ManualPlanState {
  const previous = snapshotFromResult(cloneResult(state.result), cloneFlightOverrides(state.flightOverrides), clonePushOverrides(state.pushOverrides));
  const snapshot = snapshotFromResult(cloneResult(state.result), cloneFlightOverrides(state.flightOverrides), clonePushOverrides(state.pushOverrides));
  applyChange(snapshot);
  return {
    baseline: state.baseline,
    result: snapshot.result,
    flightOverrides: snapshot.flightOverrides,
    pushOverrides: snapshot.pushOverrides,
    history: [...state.history, previous],
  };
}

function recalculatePush(
  originalPush: Push,
  flights: Flight[],
  rules: PlanningRules,
  options: { manualKitchenDeparture: number; gapMinutes: number; modifiedFlightIds: Set<string> },
): Push {
  if (flights.length === 0) throw new Error(`Manual control cannot recalculate empty push ${originalPush.id}.`);

  const driveOutMinutes = driveMinutesForSite(flights[0]?.originAirport, rules);
  const returnMinutes = returnMinutesForSite(flights[0]?.originAirport, rules);
  const sealBreakMinutes = sealBreakMinutesForSite(flights[0]?.originAirport, rules);
  const outboundDriveAndSealMinutes = driveOutMinutes + sealBreakMinutes;
  const standardGap = gateMoveMinutesForSite(flights[0]?.originAirport, rules);
  const gapMinutes = Math.max(0, snapToFiveMinutes(options.gapMinutes));
  let currentStart = options.manualKitchenDeparture + outboundDriveAndSealMinutes;
  const idleMinutes = 0;
  let utilizationMinutes = outboundDriveAndSealMinutes + returnMinutes;
  let isFeasible = true;
  const riskFlags: string[] = [];
  const serviceEvents: ServiceEvent[] = [];

  flights.forEach((flight, index) => {
    if (index > 0) {
      currentStart += gapMinutes;
      utilizationMinutes += gapMinutes;
      if (gapMinutes < standardGap) {
        riskFlags.push(`Standard gap is ${standardGap} min; manual adjustment set gap to ${gapMinutes} min.`);
      }
    }

    const earliestStart = earliestServiceStart(flight, rules);
    if (currentStart < earliestStart) {
      riskFlags.push(`${flight.flightNumber} starts before inbound-ready window by ${earliestStart - currentStart} min.`);
      isFeasible = false;
    }

    if (currentStart < timeToMinutes(flight.loadWindowStart)) {
      riskFlags.push(`${flight.flightNumber} starts before food-safety window.`);
      isFeasible = false;
    }

    const duration = serviceMinutesForFlight(flight, rules);
    const serviceEnd = currentStart + duration;
    utilizationMinutes += duration;
    const hardEnd = timeToMinutes(flight.hardLatestCompletion);
    const hardMarginMinutes = hardEnd - serviceEnd;
    const riskStatus = flight.aircraftCategory === "unknown"
      ? "unknown-aircraft"
      : hardMarginMinutes < 0
        ? "late-risk"
        : hardMarginMinutes <= 5
          ? "urgent-risk"
          : hardMarginMinutes <= 10
            ? "watch"
            : "normal";

    if (serviceEnd > hardEnd) {
      riskFlags.push(`${flight.flightNumber} misses hard completion cutoff by ${Math.abs(hardMarginMinutes)} min.`);
      isFeasible = false;
    }

    if (riskStatus === "unknown-aircraft") riskFlags.push(`${flight.flightNumber} needs an aircraft type before this plan is trusted.`);

    const modified = options.modifiedFlightIds.has(flight.id);
    serviceEvents.push({
      flightId: flight.id,
      flightNumber: flight.flightNumber,
      gate: flight.gate,
      aircraftType: flight.aircraft,
      serviceType: flight.serviceType,
      destinationAirport: flight.destinationAirport,
      departureTime: flight.etd,
      aircraftArrivalTime: flight.inboundEta,
      serviceStart: minutesToTime(currentStart),
      serviceEnd: minutesToTime(serviceEnd),
      serviceDurationMinutes: duration,
      riskStatus,
      riskSeverity: serviceRiskSeverity(riskStatus),
      originalPushId: flight.originalPushId ?? originalPush.originalPushId ?? originalPush.id,
      currentPushId: originalPush.id,
      originalSequence: flight.originalSequence,
      currentSequence: index,
      originalStart: flight.originalStart,
      originalEnd: flight.originalEnd,
      manualStart: modified ? minutesToTime(currentStart) : undefined,
      manualEnd: modified ? minutesToTime(serviceEnd) : undefined,
      manualGapOverride: index > 0 && gapMinutes < standardGap ? gapMinutes : undefined,
      manualExceptionFlags: index > 0 && gapMinutes < standardGap ? ["reduced-gap"] : [],
      modifiedByManualControl: modified,
    });

    currentStart = serviceEnd;
  });

  const loadStart = Math.max(0, options.manualKitchenDeparture - rules.firstAircraftSetupMinutes);
  const returnKitchen = currentStart + returnMinutes;
  const aircraftCategory = commonAircraftCategory(flights);
  const flags = [...new Set(riskFlags)];
  const severity = riskSeverityForFlags(flags, serviceEvents);

  return {
    ...originalPush,
    flights: flights.map((flight, index) => ({
      ...flight,
      currentPushId: originalPush.id,
      currentSequence: index,
      manualStart: serviceEvents[index]?.manualStart,
      manualEnd: serviceEvents[index]?.manualEnd,
      manualGapOverride: serviceEvents[index]?.manualGapOverride,
      manualExceptionFlags: serviceEvents[index]?.manualExceptionFlags,
      modifiedByManualControl: serviceEvents[index]?.modifiedByManualControl,
    })),
    aircraftCategory,
    loadStartTime: minutesToTime(loadStart),
    loadEndTime: minutesToTime(options.manualKitchenDeparture),
    loadDurationMinutes: options.manualKitchenDeparture - loadStart,
    kitchenDepartureTime: minutesToTime(options.manualKitchenDeparture),
    gateServiceTime: minutesToTime(options.manualKitchenDeparture + driveOutMinutes),
    arriveFirstGateTime: minutesToTime(options.manualKitchenDeparture + driveOutMinutes),
    serviceEvents,
    returnTime: minutesToTime(returnKitchen),
    totalDurationMinutes: returnKitchen + kitchenUnloadMinutes - options.manualKitchenDeparture,
    utilizationMinutes: utilizationMinutes + kitchenUnloadMinutes,
    idleMinutes,
    isFeasible,
    riskFlags: flags,
    riskSeverity: severity,
    pairingScore: flights.length * 100 - idleMinutes - flags.length * 50,
    explanation: `${originalPush.explanation} Manual adjustment recalculated this push.`,
    exceptionFlags: flags,
    manualStart: minutesToTime(options.manualKitchenDeparture),
    manualEnd: minutesToTime(returnKitchen + kitchenUnloadMinutes),
    manualExceptionFlags: manualExceptionCodes(flags),
    modifiedByManualControl: true,
  };
}

function validateManualPlan(
  result: ScheduleResult,
  flightOverrides: Record<string, ManualFlightOverride>,
  pushOverrides: Record<string, ManualPushOverride>,
  rules: PlanningRules,
) {
  const pushes = result.pushes;
  const byDriver = new Map<string, Push[]>();
  const byTruck = new Map<string, Push[]>();

  for (const push of pushes) {
    const flags = new Set(push.manualExceptionFlags ?? []);
    const categories = new Set(push.flights.map((flight) => flight.aircraftCategory));
    if (categories.has("regional") && (categories.has("narrowbody") || categories.has("widebody"))) flags.add("regional-mainline-mix");
    if (push.flights.some(isUnitedFlight) && push.flights.some((flight) => !isUnitedFlight(flight))) flags.add("ua-other-mix");
    if (push.flights.some((flight) => flight.aircraftCategory === "widebody") && !push.truckId?.includes(",")) flags.add("widebody-truck-requirement");
    if (push.flights.some((flight) => is757Aircraft(flight.aircraft)) && push.flights.length > 1) flags.add("757-single-flight-rule");

    const standardGap = gateMoveMinutesForSite(push.flights[0]?.originAirport, rules);
    for (let index = 1; index < push.serviceEvents.length; index += 1) {
      const gap = timeToMinutes(push.serviceEvents[index].serviceStart) - timeToMinutes(push.serviceEvents[index - 1].serviceEnd);
      if (gap < standardGap) flags.add("reduced-gap");
      if (gap < 0) flags.add("service-time-conflict");
    }

    push.manualExceptionFlags = [...flags];
    push.exceptionFlags = [...new Set([...push.exceptionFlags, ...labelsForManualFlags(push.manualExceptionFlags)])];
    push.riskSeverity = riskSeverityForFlags(push.exceptionFlags, push.serviceEvents);

    for (const event of push.serviceEvents) {
      const eventFlags = new Set(event.manualExceptionFlags ?? []);
      if (timeToMinutes(event.serviceStart) < earliestServiceStart(push.flights.find((flight) => flight.id === event.flightId)!, rules)) eventFlags.add("inbound-ready");
      event.manualExceptionFlags = [...eventFlags];
      const existingOverride = flightOverrides[event.flightId];
      if (existingOverride) {
        flightOverrides[event.flightId] = {
          ...existingOverride,
          exceptionFlags: [...new Set([...existingOverride.exceptionFlags, ...event.manualExceptionFlags])],
        };
      }
    }

    const pushOverride = pushOverrides[push.id];
    if (pushOverride) {
      pushOverrides[push.id] = {
        ...pushOverride,
        exceptionFlags: [...new Set([...pushOverride.exceptionFlags, ...push.manualExceptionFlags])],
      };
    }

    if (push.driverId) {
      byDriver.set(push.driverId, [...(byDriver.get(push.driverId) ?? []), push]);
    }
    if (push.truckId) {
      byTruck.set(push.truckId, [...(byTruck.get(push.truckId) ?? []), push]);
    }
  }

  for (const grouped of [...byDriver.values(), ...byTruck.values()]) {
    const sorted = grouped.sort((a, b) => timeToMinutes(a.kitchenDepartureTime) - timeToMinutes(b.kitchenDepartureTime));
    for (let index = 1; index < sorted.length; index += 1) {
      const previous = sorted[index - 1];
      const current = sorted[index];
      if (timeToMinutes(previous.returnTime) + kitchenUnloadMinutes > timeToMinutes(current.kitchenDepartureTime)) {
        previous.manualExceptionFlags = mergeManualFlags(previous.manualExceptionFlags, ["driver-truck-overlap"]);
        current.manualExceptionFlags = mergeManualFlags(current.manualExceptionFlags, ["driver-truck-overlap"]);
        previous.exceptionFlags = [...new Set([...previous.exceptionFlags, "Manual driver/truck overlap."])];
        current.exceptionFlags = [...new Set([...current.exceptionFlags, "Manual driver/truck overlap."])];
        previous.riskSeverity = "critical";
        current.riskSeverity = "critical";
      }
    }
  }
}

function mergeManualFlags(current: ManualExceptionCode[] | undefined, next: ManualExceptionCode[]) {
  return [...new Set([...(current ?? []), ...next])];
}

function annotateFlightOverrides(
  snapshot: ManualPlanSnapshot,
  originalPush: Push,
  recalculated: Push,
  currentPushId: string,
  gapMinutes?: number,
) {
  recalculated.serviceEvents.forEach((event, index) => {
    const original = originalFlightPosition(snapshot.result, event.flightId) ?? originalFlightPosition({ ...snapshot.result, pushes: [originalPush] }, event.flightId);
    const existing = snapshot.flightOverrides[event.flightId];
    snapshot.flightOverrides[event.flightId] = {
      flightId: event.flightId,
      originalPushId: existing?.originalPushId ?? original?.pushId ?? originalPush.id,
      currentPushId,
      originalSequence: existing?.originalSequence ?? original?.sequence ?? index,
      currentSequence: index,
      originalStart: existing?.originalStart ?? original?.start ?? event.serviceStart,
      originalEnd: existing?.originalEnd ?? original?.end ?? event.serviceEnd,
      manualStart: event.serviceStart,
      manualEnd: event.serviceEnd,
      manualGapOverride: event.manualGapOverride ?? gapMinutes,
      exceptionFlags: event.manualExceptionFlags ?? [],
      modifiedByManualControl: true,
    };
  });
}

function pushOverrideFor(originalPush: Push, recalculated: Push, extraFlags: ManualExceptionCode[]): ManualPushOverride {
  return {
    pushId: recalculated.id,
    originalStart: originalPush.kitchenDepartureTime,
    originalEnd: minutesToTime(timeToMinutes(originalPush.returnTime) + kitchenUnloadMinutes),
    manualStart: recalculated.kitchenDepartureTime,
    manualEnd: minutesToTime(timeToMinutes(recalculated.returnTime) + kitchenUnloadMinutes),
    manualGapOverride: extraFlags.includes("reduced-gap") ? gapOverrideFromPush(recalculated) : undefined,
    exceptionFlags: [...new Set([...(recalculated.manualExceptionFlags ?? []), ...extraFlags])],
    modifiedByManualControl: true,
  };
}

function replacePush(snapshot: ManualPlanSnapshot, pushId: string, push: Push) {
  snapshot.result = {
    ...snapshot.result,
    pushes: snapshot.result.pushes.map((item) => item.id === pushId ? push : item),
  };
}

function snapshotFromResult(
  result: ScheduleResult,
  flightOverrides: Record<string, ManualFlightOverride>,
  pushOverrides: Record<string, ManualPushOverride>,
): ManualPlanSnapshot {
  return { result, flightOverrides, pushOverrides };
}

function cloneResult(result: ScheduleResult): ScheduleResult {
  return structuredClone(result);
}

function cloneFlightOverrides(overrides: Record<string, ManualFlightOverride>) {
  return structuredClone(overrides);
}

function clonePushOverrides(overrides: Record<string, ManualPushOverride>) {
  return structuredClone(overrides);
}

function summarizeManualResult(result: ScheduleResult) {
  const pushes = result.pushes;
  const flights = pushes.flatMap((push) => push.flights);
  return {
    ...result.summary,
    totalFlights: flights.filter((flight) => flight.serviceType !== "intl-strip").length,
    totalStripTasks: flights.filter((flight) => flight.serviceType === "intl-strip").length,
    totalPushes: pushes.length,
    maxTrucksRequired: maxConcurrentPushes(pushes),
    flightsScheduledNormally: pushes.reduce((total, push) => total + push.flights.filter((flight) => (flight.manualExceptionFlags ?? []).length === 0).length, 0),
    flightsWithExceptions: pushes.reduce((total, push) => total + push.flights.filter((flight) => (flight.manualExceptionFlags ?? []).length > 0).length, 0),
    watchPushes: pushes.filter((push) => push.riskSeverity === "watch").length,
    urgentPushes: pushes.filter((push) => push.riskSeverity === "urgent").length,
    criticalPushes: pushes.filter((push) => push.riskSeverity === "critical").length,
  };
}

function maxConcurrentPushes(pushes: Push[]) {
  const points = pushes.flatMap((push) => [
    { time: timeToMinutes(push.kitchenDepartureTime), delta: 1 },
    { time: timeToMinutes(push.returnTime) + kitchenUnloadMinutes, delta: -1 },
  ]).sort((a, b) => a.time === b.time ? a.delta - b.delta : a.time - b.time);
  let active = 0;
  let max = 0;
  for (const point of points) {
    active += point.delta;
    max = Math.max(max, active);
  }
  return max;
}

function originalFlightPosition(result: ScheduleResult, flightId: string) {
  for (const push of result.pushes) {
    const eventIndex = push.serviceEvents.findIndex((event) => event.flightId === flightId);
    if (eventIndex >= 0) {
      const event = push.serviceEvents[eventIndex];
      return { pushId: push.id, sequence: eventIndex, start: event.serviceStart, end: event.serviceEnd };
    }
  }
  return null;
}

function manualExceptionCodes(flags: string[]): ManualExceptionCode[] {
  const codes: ManualExceptionCode[] = [];
  if (flags.some((flag) => /food-safety/i.test(flag))) codes.push("food-safety-window");
  if (flags.some((flag) => /inbound-ready|starts before/i.test(flag))) codes.push("inbound-ready");
  if (flags.some((flag) => /standard gap/i.test(flag))) codes.push("reduced-gap");
  if (flags.some((flag) => /hard completion|hardMargin/i.test(flag))) codes.push("service-time-conflict");
  return [...new Set(codes)];
}

function labelsForManualFlags(flags: ManualExceptionCode[]) {
  return flags.map((flag) => manualFlagLabels[flag]);
}

const manualFlagLabels: Record<ManualExceptionCode, string> = {
  "food-safety-window": "Manual food-safety window violation.",
  "inbound-ready": "Manual start before inbound-ready +10.",
  "reduced-gap": "Manual reduced between-aircraft gap.",
  "service-time-conflict": "Manual aircraft/service time conflict.",
  "driver-truck-overlap": "Manual driver/truck overlap.",
  "regional-mainline-mix": "Manual regional/mainline mix.",
  "ua-other-mix": "Manual UA/non-UA mix.",
  "widebody-truck-requirement": "Manual widebody truck requirement issue.",
  "757-single-flight-rule": "Manual 757 one-flight/one-truck rule issue.",
};

function gapOverrideFromPush(push: Push) {
  return push.serviceEvents.find((event) => event.manualGapOverride !== undefined)?.manualGapOverride;
}

function riskSeverityForFlags(flags: string[], events: ServiceEvent[]): RiskSeverity {
  if (flags.some((flag) => /overlap|misses|critical|unknown/i.test(flag)) || events.some((event) => event.riskSeverity === "critical")) return "critical";
  if (events.some((event) => event.riskSeverity === "urgent")) return "urgent";
  if (flags.length > 0 || events.some((event) => event.riskSeverity === "watch")) return "watch";
  return "normal";
}

function serviceRiskSeverity(status: ServiceEvent["riskStatus"]): RiskSeverity {
  if (status === "late-risk" || status === "unknown-aircraft") return "critical";
  if (status === "urgent-risk") return "urgent";
  if (status === "watch") return "watch";
  return "normal";
}

function commonAircraftCategory(flights: Flight[]): AircraftCategory {
  const categories = new Set(flights.map((flight) => flight.aircraftCategory));
  if (categories.size === 1) return flights[0]?.aircraftCategory ?? "unknown";
  if (categories.has("widebody")) return "widebody";
  if (categories.has("narrowbody")) return "narrowbody";
  if (categories.has("regional")) return "regional";
  return "unknown";
}

function earliestServiceStart(flight: Flight, rules: PlanningRules) {
  if (flight.serviceType === "intl-strip") return timeToMinutes(flight.loadWindowStart);
  const windowStart = timeToMinutes(flight.loadWindowStart);
  const inboundReady = validTime(flight.inboundEta) ? timeToMinutes(flight.inboundEta) + 10 : windowStart;
  if (flight.aircraftCategory === "regional") return Math.max(inboundReady, timeToMinutes(flight.etd) - rules.earliestCateringBeforeDepartureMinutes);
  return Math.max(windowStart, inboundReady);
}

function serviceMinutesForFlight(flight: Flight, rules: PlanningRules) {
  if (is757Aircraft(flight.aircraft)) return 40;
  return rules.serviceMinutesByAircraftCategory[flight.aircraftCategory];
}

function driveMinutesForSite(originAirport: Flight["originAirport"], rules: PlanningRules) {
  return rules.siteOverrides?.[originAirport ?? ""]?.driveOutMinutes ?? rules.mainlineDriveOutMinutes;
}

function returnMinutesForSite(originAirport: Flight["originAirport"], rules: PlanningRules) {
  return rules.siteOverrides?.[originAirport ?? ""]?.returnMinutes ?? rules.mainlineReturnMinutes;
}

function sealBreakMinutesForSite(originAirport: Flight["originAirport"], rules: PlanningRules) {
  return rules.siteOverrides?.[originAirport ?? ""]?.sealBreakMinutes ?? 0;
}

function gateMoveMinutesForSite(originAirport: Flight["originAirport"], rules: PlanningRules) {
  return rules.siteOverrides?.[originAirport ?? ""]?.gateToGateMoveMinutes ?? rules.gateToGateMoveMinutes;
}

function isUnitedFlight(flight: Flight) {
  return flight.serviceType === "load-ua" || /^UA/i.test(flight.flightNumber.replace(/^INTL STRIP\s+/i, "").trim());
}

function is757Aircraft(aircraft: string) {
  return /(^|\s|-)75(7|2|3)|757/i.test(aircraft);
}

function validTime(time: string) {
  return /^\d{1,2}:\d{2}$/.test(time);
}

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number) {
  const normalized = Math.max(0, Math.trunc(totalMinutes));
  return `${String(Math.floor(normalized / 60)).padStart(2, "0")}:${String(normalized % 60).padStart(2, "0")}`;
}
