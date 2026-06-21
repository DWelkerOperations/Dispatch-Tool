import { timeToMinutes } from "../engine/scheduler";
import { categoryForAircraft } from "../import/aircraftMap";
import type { FlightAssignment, OperationView, ScheduleException, ScheduleResult } from "../types/dispatch";
import type { WorkBook } from "xlsx";

type StartWaveExport = {
  startTime: string;
  driverStarts: number;
};

type ResourceGuideExportPayload = {
  result: ScheduleResult;
  startWaves: StartWaveExport[];
  flights: FlightAssignment[];
  selectedDate: string;
  operationType: OperationView;
  sourceFileName: string;
};

export async function exportResourceGuideWorkbook({
  result,
  startWaves,
  flights,
  selectedDate,
  operationType,
  sourceFileName,
}: ResourceGuideExportPayload) {
  const XLSX = await import("xlsx");
  const workbook = XLSX.utils.book_new();
  const fileDate = selectedDate || new Date().toISOString().slice(0, 10);
  const viewLabel = operationType === "all" ? "All Operations" : titleCase(operationType);
  const sourceFlights = flightsForOperation(flights, operationType);

  appendSheet(XLSX, workbook, "Review Summary", [
    ["Resource Planning Review"],
    ["Planning Date", selectedDate],
    ["View", viewLabel],
    ["Source Schedule", sourceFileName || "Imported schedule"],
    [],
    ["Metric", "Value"],
    ["Flights", result.summary.totalFlights],
    ["Strip Tasks", result.summary.totalStripTasks],
    ["Pushes", result.summary.totalPushes],
    ["Drivers Needed", result.summary.driversRequired],
    ["Helpers Needed", result.summary.helpersRequired],
    ["Peak Trucks Needed", result.summary.maxTrucksRequired],
    ["Shift Utilization", `${result.summary.shiftUtilizationPercent}%`],
    ["Normal Flights", result.summary.flightsScheduledNormally],
    ["Flights With Exceptions", result.summary.flightsWithExceptions],
    ["Unscheduled Flights", result.summary.unscheduledFlights],
    ["Watch Pairings", result.summary.watchPushes],
    ["Urgent Pairings", result.summary.urgentPushes],
    ["Critical Pairings", result.summary.criticalPushes],
  ], [28, 24]);

  appendStartWaveChartSheet(XLSX, workbook, startWaves, viewLabel);

  appendSheet(XLSX, workbook, "Resource Guidance", [
    ["Start Time", "Driver Starts"],
    ...startWaves.map((wave) => [wave.startTime, wave.driverStarts]),
  ], [16, 16]);

  appendSheet(XLSX, workbook, "Push Plan", [
    ["Push", "Flights", "Dispatch Depart", "Service Sequence", "Return", "Release After Unload", "Duration", "Driver", "Helper", "Truck", "Status", "Flags", "Explanation"],
    ...[...result.pushes]
      .sort((a, b) => timeToMinutes(a.kitchenDepartureTime) - timeToMinutes(b.kitchenDepartureTime))
      .map((push) => [
        push.id,
        push.flights.map((flight) => `${flight.flightNumber} ${flight.gate}`).join(", "),
        push.kitchenDepartureTime,
        push.serviceEvents.map((event) => `${event.flightNumber}: ${event.serviceStart}-${event.serviceEnd}`).join("\n"),
        push.returnTime,
        addMinutes(push.returnTime, kitchenUnloadMinutes),
        `${push.totalDurationMinutes}m`,
        push.driverId ?? "Open",
        push.helperId ?? "-",
        push.truckId ?? "Open",
        titleCase(push.riskSeverity),
        [...push.riskFlags, ...push.exceptionFlags].join("\n"),
        push.explanation,
      ]),
  ], [14, 28, 16, 28, 14, 20, 14, 22, 22, 22, 14, 34, 58]);

  appendSheet(XLSX, workbook, "Exceptions", [
    ["Flight", "Issue", "Cause", "Recommended Action"],
    ...exceptionRows(result.exceptions),
  ], [16, 34, 22, 58]);

  appendSheet(XLSX, workbook, "Source Flights", [
    ["Flight", "Date", "Origin", "Destination", "Gate", "ETD", "ETA", "Inbound ETA", "Aircraft", "Service Type", "Notes"],
    ...sourceFlights
      .slice()
      .sort((a, b) => timeToMinutes(a.etd) - timeToMinutes(b.etd))
      .map((flight) => [
        flight.flightNumber,
        flight.departureDate ?? selectedDate,
        flight.originAirport ?? "",
        flight.destinationAirport ?? "",
        flight.gate,
        flight.etd,
        flight.eta,
        flight.inboundEta,
        flight.aircraft,
        flight.serviceType,
        flight.notes,
      ]),
  ], [14, 14, 12, 14, 12, 10, 10, 14, 14, 18, 36]);

  XLSX.writeFile(workbook, `Resource Plan ${fileDate} ${viewLabel}.xlsx`, { compression: true });
}

const kitchenUnloadMinutes = 15;

type XlsxModule = typeof import("xlsx");

function appendSheet(XLSX: XlsxModule, workbook: WorkBook, name: string, rows: unknown[][], columnWidths: number[]) {
  const sheet = XLSX.utils.aoa_to_sheet(rows);
  sheet["!cols"] = columnWidths.map((wch) => ({ wch }));
  XLSX.utils.book_append_sheet(workbook, sheet, name);
}

function appendStartWaveChartSheet(XLSX: XlsxModule, workbook: WorkBook, startWaves: StartWaveExport[], viewLabel: string) {
  const maxDrivers = Math.max(1, ...startWaves.map((wave) => wave.driverStarts));
  const rows = [
    [`Resource Wave Bar Chart - ${viewLabel}`],
    ["Each bar represents recommended driver starts by shift wave."],
    [],
    ["Start Time", "Driver Starts", "Visual Bar"],
    ...(startWaves.length > 0
      ? startWaves.map((wave) => [
        wave.startTime,
        wave.driverStarts,
        textBar(wave.driverStarts, maxDrivers),
      ])
      : [["No start waves generated", 0, ""]]),
  ];

  appendSheet(XLSX, workbook, "Start Wave Chart", rows, [16, 16, 52]);
}

function exceptionRows(exceptions: ScheduleException[]) {
  if (exceptions.length === 0) return [["No exceptions for this run.", "", "", ""]];

  return exceptions.map((item) => [
    item.flightNumber ?? "",
    item.issue,
    item.cause.split("-").join(" "),
    item.recommendedAction,
  ]);
}

function titleCase(value: string) {
  return value
    .split(/[-\s]/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function textBar(value: number, maxValue: number) {
  const maxBarWidth = 40;
  const width = value > 0 ? Math.max(1, Math.round((value / maxValue) * maxBarWidth)) : 0;
  return `${"#".repeat(width)} ${value}`;
}

function addMinutes(time: string, minutesToAdd: number) {
  const total = timeToMinutes(time) + minutesToAdd;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function flightsForOperation(flights: FlightAssignment[], operationType: OperationView) {
  if (operationType === "all") return flights;
  return flights.filter((flight) => operationTypeForFlightAssignment(flight) === operationType);
}

function operationTypeForFlightAssignment(flight: FlightAssignment) {
  return categoryForAircraft(flight.aircraft) === "regional" ? "express" : "mainline";
}
