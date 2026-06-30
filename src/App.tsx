import { useMemo, useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { DashboardPage } from "./components/tabs/DashboardPage";
import { DispatchToolPage } from "./components/tabs/DispatchToolPage";
import { ExceptionsPage } from "./components/tabs/ExceptionsPage";
import { FleetPage } from "./components/tabs/FleetPage";
import { PlanningToolPage } from "./components/tabs/PlanningToolPage";
import { StaffingPage } from "./components/tabs/StaffingPage";
import { ThumbRulesPage } from "./components/tabs/ThumbRulesPage";
import { TourSheetPage } from "./components/tabs/TourSheetPage";
import { ordJuneTripmasterDefaultAirport, ordJuneTripmasterDefaultDate, ordJuneTripmasterFileName, ordJuneTripmasterFlights } from "./data/ordJuneTripmasterFlights";
import { planningRules as defaultPlanningRules } from "./data/planningRules";
import { ordJuneTripmasterReferenceId, referenceSchedules, type ReferenceSchedule } from "./data/referenceSchedules";
import { exportResourceGuideWorkbook } from "./export/resourceGuideExport";
import type { AirportCode, AppTab, FlightAssignment, OperationView, PlanningRules, ScheduleResult } from "./types/dispatch";
import type { FlightTaskTypeChange } from "./utils/taskTypeUpdates";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("resource-guide");
  const [planningAirport, setPlanningAirport] = useState<AirportCode>(ordJuneTripmasterDefaultAirport);
  const [planningDate, setPlanningDate] = useState(ordJuneTripmasterDefaultDate);
  const [planningFlights, setPlanningFlights] = useState<FlightAssignment[]>(ordJuneTripmasterFlights);
  const [planningFileName, setPlanningFileName] = useState<string>(ordJuneTripmasterFileName);
  const [planningReferenceScheduleId, setPlanningReferenceScheduleId] = useState(ordJuneTripmasterReferenceId);
  const [planningOperationType, setPlanningOperationType] = useState<OperationView>("mainline");
  const [planningResult, setPlanningResult] = useState<ScheduleResult | null>(null);
  const [activeRules, setActiveRules] = useState<PlanningRules>(defaultPlanningRules);
  const [resourceGuideAirport, setResourceGuideAirport] = useState<AirportCode>(ordJuneTripmasterDefaultAirport);
  const [resourceGuideDate, setResourceGuideDate] = useState(ordJuneTripmasterDefaultDate);
  const [resourceGuideFlights, setResourceGuideFlights] = useState<FlightAssignment[]>(ordJuneTripmasterFlights);
  const [resourceGuideFileName, setResourceGuideFileName] = useState<string>(ordJuneTripmasterFileName);
  const [resourceGuideReferenceScheduleId, setResourceGuideReferenceScheduleId] = useState(ordJuneTripmasterReferenceId);
  const [resourceGuideOperationType, setResourceGuideOperationType] = useState<OperationView>("mainline");
  const [resourceGuideResult, setResourceGuideResult] = useState<ScheduleResult | null>(null);
  const [resourceGuideMaxStartTimes, setResourceGuideMaxStartTimes] = useState(12);
  const [ordPlannerAirport, setOrdPlannerAirport] = useState<AirportCode>(ordJuneTripmasterDefaultAirport);
  const [ordPlannerDate, setOrdPlannerDate] = useState(ordJuneTripmasterDefaultDate);
  const [ordPlannerFlights, setOrdPlannerFlights] = useState<FlightAssignment[]>(ordJuneTripmasterFlights);
  const [ordPlannerFileName, setOrdPlannerFileName] = useState<string>(ordJuneTripmasterFileName);
  const [ordPlannerReferenceScheduleId, setOrdPlannerReferenceScheduleId] = useState(ordJuneTripmasterReferenceId);
  const [ordPlannerOperationType, setOrdPlannerOperationType] = useState<OperationView>("mainline");
  const [ordPlannerResult, setOrdPlannerResult] = useState<ScheduleResult | null>(null);
  const [ordPlannerMaxStartTimes, setOrdPlannerMaxStartTimes] = useState(12);
  const [ordPlannerStartTimeMode, setOrdPlannerStartTimeMode] = useState<"dynamic" | "fixed" | "fixed-resource">("dynamic");
  const planningVisibleFlights = useMemo(
    () => planningFlights.filter((flight) => flightMatchesSelectedSchedule(flight, planningAirport, planningDate)),
    [planningAirport, planningDate, planningFlights],
  );
  const resourceGuideVisibleFlights = useMemo(
    () => resourceGuideFlights.filter((flight) => flightMatchesSelectedSchedule(flight, resourceGuideAirport, resourceGuideDate)),
    [resourceGuideAirport, resourceGuideDate, resourceGuideFlights],
  );
  const ordPlannerVisibleFlights = useMemo(
    () => ordPlannerFlights.filter((flight) => flightMatchesSelectedSchedule(flight, ordPlannerAirport, ordPlannerDate)),
    [ordPlannerAirport, ordPlannerDate, ordPlannerFlights],
  );
  const activeSchedule = activeTab === "resource-guide"
    ? { airport: resourceGuideAirport, date: resourceGuideDate, flights: resourceGuideFlights, visibleFlights: resourceGuideVisibleFlights, fileName: resourceGuideFileName, referenceScheduleId: resourceGuideReferenceScheduleId }
    : activeTab === "ord-planner"
      ? { airport: ordPlannerAirport, date: ordPlannerDate, flights: ordPlannerFlights, visibleFlights: ordPlannerVisibleFlights, fileName: ordPlannerFileName, referenceScheduleId: ordPlannerReferenceScheduleId }
    : { airport: planningAirport, date: planningDate, flights: planningFlights, visibleFlights: planningVisibleFlights, fileName: planningFileName, referenceScheduleId: planningReferenceScheduleId };

  function handleScheduleImport(flights: FlightAssignment[], fileName: string, selectedDate?: string) {
    const firstImportedDate = selectedDate || flights.find((flight) => flight.departureDate)?.departureDate;
    const firstImportedAirport = flights.find((flight) => (!firstImportedDate || flight.departureDate === firstImportedDate) && flight.originAirport)?.originAirport
      ?? flights.find((flight) => flight.originAirport)?.originAirport;
    if (activeTab === "resource-guide") {
      setResourceGuideFlights(flights);
      setResourceGuideFileName(fileName);
      setResourceGuideReferenceScheduleId(ordJuneTripmasterReferenceId);
      setResourceGuideResult(null);
      if (firstImportedAirport) setResourceGuideAirport(firstImportedAirport);
      if (firstImportedDate) setResourceGuideDate(firstImportedDate);
      return;
    }
    if (activeTab === "ord-planner") {
      setOrdPlannerFlights(flights);
      setOrdPlannerFileName(fileName);
      setOrdPlannerReferenceScheduleId(ordJuneTripmasterReferenceId);
      setOrdPlannerResult(null);
      setOrdPlannerAirport("ORD");
      if (firstImportedDate) setOrdPlannerDate(firstImportedDate);
      return;
    }

    setPlanningFlights(flights);
    setPlanningFileName(fileName);
    setPlanningReferenceScheduleId(ordJuneTripmasterReferenceId);
    setPlanningResult(null);
    if (firstImportedAirport) setPlanningAirport(firstImportedAirport);
    if (firstImportedDate) setPlanningDate(firstImportedDate);
  }

  function handleScheduleClear() {
    if (activeTab === "resource-guide") {
      setResourceGuideFlights(ordJuneTripmasterFlights);
      setResourceGuideFileName(ordJuneTripmasterFileName);
      setResourceGuideReferenceScheduleId("");
      setResourceGuideAirport(ordJuneTripmasterDefaultAirport);
      setResourceGuideDate(ordJuneTripmasterDefaultDate);
      setResourceGuideResult(null);
      return;
    }
    if (activeTab === "ord-planner") {
      setOrdPlannerFlights(ordJuneTripmasterFlights);
      setOrdPlannerFileName(ordJuneTripmasterFileName);
      setOrdPlannerReferenceScheduleId("");
      setOrdPlannerAirport(ordJuneTripmasterDefaultAirport);
      setOrdPlannerDate(ordJuneTripmasterDefaultDate);
      setOrdPlannerResult(null);
      return;
    }

    setPlanningFlights(ordJuneTripmasterFlights);
    setPlanningFileName(ordJuneTripmasterFileName);
    setPlanningReferenceScheduleId("");
    setPlanningAirport(ordJuneTripmasterDefaultAirport);
    setPlanningDate(ordJuneTripmasterDefaultDate);
    setPlanningResult(null);
  }

  function handleAirportChange(airport: AirportCode) {
    if (activeTab === "resource-guide") {
      setResourceGuideAirport(airport);
      setResourceGuideResult(null);
      return;
    }
    if (activeTab === "ord-planner") {
      setOrdPlannerAirport(airport);
      setOrdPlannerResult(null);
      return;
    }

    setPlanningAirport(airport);
    setPlanningResult(null);
  }

  function handleReferenceScheduleLoad(schedule: ReferenceSchedule) {
    if (activeTab === "resource-guide") {
      setResourceGuideFlights(schedule.flights);
      setResourceGuideFileName(schedule.fileName);
      setResourceGuideReferenceScheduleId(schedule.id);
      setResourceGuideAirport(schedule.airport);
      setResourceGuideDate(schedule.date);
      setResourceGuideResult(null);
      return;
    }
    if (activeTab === "ord-planner") {
      setOrdPlannerFlights(schedule.flights);
      setOrdPlannerFileName(schedule.fileName);
      setOrdPlannerReferenceScheduleId(schedule.id);
      setOrdPlannerAirport(schedule.airport);
      setOrdPlannerDate(schedule.date);
      setOrdPlannerResult(null);
      return;
    }

    setPlanningFlights(schedule.flights);
    setPlanningFileName(schedule.fileName);
    setPlanningReferenceScheduleId(schedule.id);
    setPlanningAirport(schedule.airport);
    setPlanningDate(schedule.date);
    setPlanningResult(null);
  }

  function handleDateChange(date: string) {
    setPlanningDate(date);
    setPlanningResult(null);
  }

  function handleResourceGuideDateChange(date: string) {
    setResourceGuideDate(date);
    setResourceGuideResult(null);
  }

  function handleResourceGuideMaxStartTimesChange(value: number) {
    setResourceGuideMaxStartTimes(value);
    setResourceGuideResult(null);
  }

  function handleOrdPlannerDateChange(date: string) {
    setOrdPlannerDate(date);
    setOrdPlannerResult(null);
  }

  function handleOrdPlannerMaxStartTimesChange(value: number) {
    setOrdPlannerMaxStartTimes(value);
    setOrdPlannerResult(null);
  }

  function handleOrdPlannerStartTimeModeChange(mode: "dynamic" | "fixed" | "fixed-resource") {
    setOrdPlannerStartTimeMode(mode);
    setOrdPlannerResult(null);
  }

  function handleOperationTypeChange(operationType: OperationView) {
    setPlanningOperationType(operationType);
  }

  function handlePlanningFlightTaskTypeChange(change: FlightTaskTypeChange) {
    setPlanningFlights((currentFlights) => currentFlights.map((flight) => (
      flight.id === change.flightId ? { ...flight, serviceType: change.serviceType, edited: true } : flight
    )));
  }

  function handleRulesChange(nextRules: PlanningRules) {
    setActiveRules(nextRules);
    setPlanningResult(null);
    setResourceGuideResult(null);
    setOrdPlannerResult(null);
  }

  return (
    <AppShell
      activeTab={activeTab}
      activeAirport={activeSchedule.airport}
      importedFileName={activeSchedule.fileName}
      importedFlightCount={activeSchedule.flights.length}
      referenceSchedules={referenceSchedules}
      selectedReferenceScheduleId={activeSchedule.referenceScheduleId}
      visibleFlightCount={activeSchedule.visibleFlights.length}
      onAirportChange={handleAirportChange}
      onReferenceScheduleLoad={handleReferenceScheduleLoad}
      onScheduleClear={handleScheduleClear}
      onScheduleImport={handleScheduleImport}
      onTabChange={setActiveTab}
    >
      {activeTab === "planning" && (
        <PlanningToolPage
          flights={planningVisibleFlights}
          operationType={planningOperationType}
          rules={activeRules}
          result={planningResult}
          selectedDate={planningDate}
          resourcePlanPosition="above-timeline"
          disallowCriticalPairings
          enforcePairingQuality
          showPairingQuality
          showIterationControls
          showRiskDefinitions
          timelineDriverLabelMode="sequential"
          showTimelineDriverRadio={false}
          onDateChange={handleDateChange}
          onFlightTaskTypeChange={handlePlanningFlightTaskTypeChange}
          onOperationTypeChange={handleOperationTypeChange}
          onResultChange={setPlanningResult}
        />
      )}
      {activeTab === "resource-guide" && (
        <PlanningToolPage
          flights={resourceGuideVisibleFlights}
          operationType={resourceGuideOperationType}
          rules={activeRules}
          result={resourceGuideResult}
          selectedDate={resourceGuideDate}
          title="Resource Guide"
          description="Import an Excel flight schedule, apply the thumb rules, and create optimized driver, helper, and truck resource guidance."
          readyTitle="Ready to Build Resource Guidance"
          readyDescription={`${resourceGuideVisibleFlights.length} flights are loaded for ${resourceGuideDate}. Import the schedule you want to plan, confirm the site and date, then create guidance to see the recommended resource levels and start waves.`}
          createButtonLabel="Create Guidance"
          assumptionTitle="Guidelines Applied"
          assumptionDescription={`This guidance uses the loaded flight schedule as the demand source, not an existing driver schedule. It plans mainline and express independently unless the active site's rules define a shared resource pool, then shows ${resourceGuideOperationType === "all" ? "the combined total" : `the ${resourceGuideOperationType} view`}. It protects required completion times, drive time, food safety windows, and a 30-minute lunch gap with no protection window, then chooses up to ${resourceGuideMaxStartTimes} hour or half-hour start waves.`}
          resourcePlanPosition="above-timeline"
          resourcePlanTitle="Resource Guidance"
          resourcePlanDescription="Recommended driver, helper, and truck needs by start wave."
          disallowCriticalPairings
          preventUrgentPairings
          showPairingQuality
          showRiskDefinitions
          timelineDriverLabelMode="sequential"
          showTimelineDriverRadio={false}
          exportButtonLabel="Export Excel"
          maxAllowedStartTimes={resourceGuideMaxStartTimes}
          onDateChange={handleResourceGuideDateChange}
          onExport={(payload) => exportResourceGuideWorkbook({
            ...payload,
            sourceFileName: resourceGuideFileName,
          })}
          onMaxAllowedStartTimesChange={handleResourceGuideMaxStartTimesChange}
          onOperationTypeChange={setResourceGuideOperationType}
          onResultChange={setResourceGuideResult}
        />
      )}
      {activeTab === "ord-planner" && (
        <PlanningToolPage
          flights={ordPlannerVisibleFlights}
          operationType={ordPlannerOperationType}
          rules={activeRules}
          result={ordPlannerResult}
          selectedDate={ordPlannerDate}
          title="ORD Planner"
          description="Import the UA turns report for ORD to plan from outbound flight demand, aircraft type, strip requests, and planned inbound arrival time."
          readyTitle="Ready to Build ORD Guidance"
          readyDescription={`${ordPlannerVisibleFlights.length} ORD flights are loaded for ${ordPlannerDate}. Import the UA turns report, pick the date, then create guidance to use planned inbound arrivals as the earliest catering-ready time.`}
          createButtonLabel="Create ORD Guidance"
          assumptionTitle="UA Turns Logic"
          assumptionDescription={ordPlannerAssumptionDescription(ordPlannerStartTimeMode, ordPlannerMaxStartTimes)}
          resourcePlanPosition="above-timeline"
          resourcePlanTitle="ORD Resource Guidance"
          resourcePlanDescription={ordPlannerResourcePlanDescription(ordPlannerStartTimeMode)}
          keepExceptionPushes
          showPairingQuality
          showRiskDefinitions
          timelineDriverLabelMode="sequential"
          showTimelineDriverRadio={false}
          exportButtonLabel="Export Excel"
          fixedStartResources={ordGoalStartResources}
          fixedStartTimes={ordFixedStartTimes}
          maxAllowedStartTimes={ordPlannerMaxStartTimes}
          startTimeMode={ordPlannerStartTimeMode}
          onDateChange={handleOrdPlannerDateChange}
          onExport={(payload) => exportResourceGuideWorkbook({
            ...payload,
            sourceFileName: ordPlannerFileName,
          })}
          onMaxAllowedStartTimesChange={handleOrdPlannerMaxStartTimesChange}
          onOperationTypeChange={setOrdPlannerOperationType}
          onResultChange={setOrdPlannerResult}
          onStartTimeModeChange={handleOrdPlannerStartTimeModeChange}
        />
      )}
      {activeTab === "dispatch" && (
        <DispatchToolPage
          flights={planningVisibleFlights}
          planningOperationType={planningOperationType}
          planningResult={planningResult}
          rules={activeRules}
          selectedDate={planningDate}
          onDateChange={handleDateChange}
        />
      )}
      {activeTab === "staffing" && <StaffingPage activeAirport={planningAirport} activeDate={planningDate} onDateChange={handleDateChange} />}
      {activeTab === "fleet" && <FleetPage activeAirport={planningAirport} />}
      {activeTab === "exceptions" && <ExceptionsPage />}
      {activeTab === "tour-sheet" && <TourSheetPage />}
      {activeTab === "dashboard" && <DashboardPage />}
      {activeTab === "thumb-rules" && <ThumbRulesPage rules={activeRules} onRulesChange={handleRulesChange} />}
    </AppShell>
  );
}

const ordFixedStartTimes = ["02:30", "04:00", "05:30", "06:30", "08:30", "11:00", "13:00", "14:30", "16:30", "18:30"];
const ordGoalStartResources = [
  { startTime: "02:30", resources: 8 },
  { startTime: "04:00", resources: 28 },
  { startTime: "05:30", resources: 2 },
  { startTime: "06:30", resources: 13 },
  { startTime: "08:30", resources: 22 },
  { startTime: "11:00", resources: 23 },
  { startTime: "13:00", resources: 16 },
  { startTime: "14:30", resources: 15 },
  { startTime: "16:30", resources: 12 },
  { startTime: "18:30", resources: 8 },
];

function ordPlannerAssumptionDescription(mode: "dynamic" | "fixed" | "fixed-resource", maxStartTimes: number) {
  const baseDescription = "This ORD plan reads outbound flight, destination, and departure time from the UA turns report, uses the aircraft shown on the turn, and treats the inbound arrival time as the earliest aircraft-ready constraint. Rows with a strip value are planned as protected strip work. It preserves a 30-minute lunch between shift hours 3 and 5";
  if (mode === "fixed-resource") {
    return `${baseDescription}, then uses the Goal row as fixed staffing by start wave: ${ordGoalStartResources.map((item) => `${item.startTime} ${item.resources}`).join(", ")}.`;
  }
  if (mode === "fixed") {
    return `${baseDescription}, then models the current-state ORD start pattern exactly: ${ordFixedStartTimes.join(", ")}.`;
  }
  return `${baseDescription}, then chooses up to ${maxStartTimes} hour or half-hour start waves for driver, helper, and truck guidance.`;
}

function ordPlannerResourcePlanDescription(mode: "dynamic" | "fixed" | "fixed-resource") {
  if (mode === "fixed-resource") return "Best ORD plan using the Goal row as fixed driver and helper staffing by start wave.";
  if (mode === "fixed") return "Recommended ORD needs using the fixed current-state start waves.";
  return "Recommended ORD driver, helper, and truck needs by start wave.";
}

function flightMatchesSelectedSchedule(flight: FlightAssignment, airport: AirportCode, date: string) {
  return flight.originAirport === airport && flight.departureDate === date;
}
