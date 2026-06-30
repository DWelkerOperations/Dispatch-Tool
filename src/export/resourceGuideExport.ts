import { timeToMinutes } from "../engine/scheduler";
import { categoryForAircraft } from "../import/aircraftMap";
import type { Driver, FlightAssignment, OperationView, Push, ScheduleException, ScheduleResult } from "../types/dispatch";
import { resourceIds } from "../utils/resources";
import type { WorkBook } from "xlsx";

type StartWaveExport = {
  startTime: string;
  driverStarts: number;
};

type ResourceGuideExportPayload = {
  result: ScheduleResult;
  startWaves: StartWaveExport[];
  flights: FlightAssignment[];
  drivers: Driver[];
  selectedDate: string;
  operationType: OperationView;
  sourceFileName: string;
};

export async function exportResourceGuideWorkbook({
  result,
  startWaves,
  flights,
  drivers,
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
  appendTimelineVisualSheet(XLSX, workbook, result, drivers, viewLabel, selectedDate);

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
const timelineStartMinutes = 0;
const timelineEndMinutes = 27 * 60 + 30;
const timelineBucketMinutes = 15;

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

function appendTimelineVisualSheet(XLSX: XlsxModule, workbook: WorkBook, result: ScheduleResult, drivers: Driver[], viewLabel: string, selectedDate: string) {
  const timeColumns = timelineTimeColumns();
  const rows: unknown[][] = [
    [`Resource Timeline Visual - ${viewLabel}`],
    ["Planning Date", selectedDate || ""],
    ["Each row mirrors the detail timeline. Columns are 15-minute buckets; labels mark the dominant task in that bucket."],
    [],
    ["Legend", "SHIFT = scheduled shift", "LOAD = load/prep", "OUT = dispatch to first gate", "SVC = gate service", "RTRN = return/unload", "LUNCH = scheduled lunch", "OT = overtime"],
    [],
    ["Driver", "Shift", "Truck", "Pushes", ...timeColumns.map(displayTimelineTime)],
  ];

  const sortedDrivers = drivers.length > 0 ? drivers : driversFromPushes(result.pushes);
  if (sortedDrivers.length === 0) {
    rows.push(["No assigned resource rows for this run.", "", "", "", ...timeColumns.map(() => "")]);
  } else {
    for (const driver of sortedDrivers) {
      const pushes = pushesForDriver(result.pushes, driver.id);
      rows.push(driverTimelineRow(driver, pushes, timeColumns));
    }
  }

  const sheet = XLSX.utils.aoa_to_sheet(rows);
  sheet["!cols"] = [
    { wch: 24 },
    { wch: 15 },
    { wch: 10 },
    { wch: 28 },
    ...timeColumns.map(() => ({ wch: 5 })),
  ];
  sheet["!rows"] = rows.map((_, index) => ({ hpt: index >= 6 ? 26 : 18 }));
  sheet["!autofilter"] = { ref: `A7:${XLSX.utils.encode_cell({ r: rows.length - 1, c: timeColumns.length + 3 })}` };
  XLSX.utils.book_append_sheet(workbook, sheet, "Timeline Visual");
}

function driverTimelineRow(driver: Driver, pushes: Push[], timeColumns: number[]) {
  const shiftStart = timeToMinutes(driver.shiftStart);
  const shiftEnd = timeToMinutes(driver.shiftEnd);
  const lunch = scheduledLunch(pushes, shiftStart, shiftEnd);
  const cells = timeColumns.map((bucketStart) => {
    const bucketEnd = bucketStart + timelineBucketMinutes;
    const labels = new Set<string>();

    if (bucketStart >= shiftStart && bucketStart < shiftEnd) labels.add("SHIFT");
    if (lunch && rangesOverlap(bucketStart, bucketEnd, lunch.start, lunch.end)) labels.add("LUNCH");

    for (const push of pushes) {
      if (rangesOverlap(bucketStart, bucketEnd, timeToMinutes(push.loadStartTime), timeToMinutes(push.loadEndTime))) {
        labels.add(labelForRangeStart(bucketStart, push.loadStartTime, `${push.id} LOAD`, "LOAD"));
      }
      if (rangesOverlap(bucketStart, bucketEnd, timeToMinutes(push.kitchenDepartureTime), timeToMinutes(push.arriveFirstGateTime))) {
        labels.add(labelForRangeStart(bucketStart, push.kitchenDepartureTime, `${push.id} OUT`, "OUT"));
      }
      for (const event of push.serviceEvents) {
        if (rangesOverlap(bucketStart, bucketEnd, timeToMinutes(event.serviceStart), timeToMinutes(event.serviceEnd))) {
          labels.add(labelForRangeStart(bucketStart, event.serviceStart, `${event.flightNumber} SVC`, "SVC"));
        }
      }
      if (rangesOverlap(bucketStart, bucketEnd, latestServiceEnd(push), timeToMinutes(push.returnTime) + kitchenUnloadMinutes)) {
        labels.add(labelForRangeStart(bucketStart, push.returnTime, `${push.id} RTRN`, "RTRN"));
      }
    }

    if (bucketStart >= shiftEnd && labels.size > 0) labels.add("OT");
    return compactTimelineLabels(labels);
  });

  const shiftLabel = `${driver.displayShiftStart ?? driver.shiftStart}-${driver.displayShiftEnd ?? driver.shiftEnd}`;
  return [
    driver.name,
    shiftLabel,
    driver.truck || "",
    pushes.map((push) => push.id).join(", "),
    ...cells,
  ];
}

function timelineTimeColumns() {
  const columns: number[] = [];
  for (let minutes = timelineStartMinutes; minutes <= timelineEndMinutes; minutes += timelineBucketMinutes) {
    columns.push(minutes);
  }
  return columns;
}

function displayTimelineTime(minutes: number) {
  const dayOffset = Math.floor(minutes / 1440);
  const hour = Math.floor((minutes % 1440) / 60);
  const minute = minutes % 60;
  const label = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  return dayOffset > 0 ? `${label}+${dayOffset}` : label;
}

function pushesForDriver(pushes: Push[], driverId: string) {
  return pushes
    .filter((push) => resourceIds(push.driverId).includes(driverId))
    .sort((a, b) => timeToMinutes(a.kitchenDepartureTime) - timeToMinutes(b.kitchenDepartureTime));
}

function driversFromPushes(pushes: Push[]): Driver[] {
  return [...new Set(pushes.flatMap((push) => resourceIds(push.driverId)))]
    .sort()
    .map((driverId) => ({
      id: driverId,
      name: driverId,
      truck: "",
      radio: "",
      shiftStart: "00:00",
      shiftEnd: "27:30",
      displayShiftStart: "00:00",
      displayShiftEnd: "03:30 +1",
    }));
}

function rangesOverlap(leftStart: number, leftEnd: number, rightStart: number, rightEnd: number) {
  return leftStart < rightEnd && rightStart < leftEnd;
}

function labelForRangeStart(bucketStart: number, rangeStart: string, startLabel: string, continuationLabel: string) {
  return Math.abs(bucketStart - timeToMinutes(rangeStart)) < timelineBucketMinutes ? startLabel : continuationLabel;
}

function latestServiceEnd(push: Push) {
  return Math.max(...push.serviceEvents.map((event) => timeToMinutes(event.serviceEnd)));
}

function compactTimelineLabels(labels: Set<string>) {
  if (labels.size === 0) return "";
  const ordered = ["LUNCH", "OT", ...[...labels].filter((label) => !["SHIFT", "LUNCH", "OT"].includes(label)), "SHIFT"]
    .filter((label) => labels.has(label));
  return ordered.slice(0, 2).join(" / ");
}

function scheduledLunch(pushes: Push[], shiftStart: number, shiftEnd: number) {
  const lunchMinutes = 30;
  const sortedPushes = [...pushes].sort((a, b) => timeToMinutes(a.kitchenDepartureTime) - timeToMinutes(b.kitchenDepartureTime));
  let bestGap: { start: number; end: number; idleMinutes: number } | null = null;
  let availableStart = shiftStart;

  for (const push of sortedPushes) {
    const pushStart = timeToMinutes(push.loadStartTime);
    const pushEnd = timeToMinutes(push.returnTime) + kitchenUnloadMinutes;
    const gapStart = Math.max(availableStart, shiftStart);
    const gapEnd = Math.min(pushStart, shiftEnd);
    const idleMinutes = gapEnd - gapStart;

    if (idleMinutes >= lunchMinutes && (!bestGap || idleMinutes < bestGap.idleMinutes)) {
      bestGap = { start: gapStart, end: gapEnd, idleMinutes };
    }

    if (pushEnd >= availableStart) availableStart = pushEnd;
  }

  const finalGapStart = Math.max(availableStart, shiftStart);
  const finalIdleMinutes = shiftEnd - finalGapStart;
  if (finalIdleMinutes >= lunchMinutes && (!bestGap || finalIdleMinutes < bestGap.idleMinutes)) {
    bestGap = { start: finalGapStart, end: shiftEnd, idleMinutes: finalIdleMinutes };
  }

  if (!bestGap) return null;

  const start = Math.min(bestGap.start + Math.floor((bestGap.idleMinutes - lunchMinutes) / 2), bestGap.end - lunchMinutes);
  return { start, end: start + lunchMinutes };
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
