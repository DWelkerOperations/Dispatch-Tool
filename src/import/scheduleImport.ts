import type { AirportCode, FlightAssignment, ServiceType } from "../types/dispatch";
import { normalizeAirportCode } from "../data/airports";
import { normalizeAircraftType } from "./aircraftMap";

type ScheduleRow = {
  sourceRowNumber: number;
  departureDate: string;
  airline: string;
  flightNumber: string;
  fieldDepartureTime: string;
  aircraftType: string;
  originKitchen: string;
  destination: string;
};

export type ScheduleImportResult = {
  flights: FlightAssignment[];
  warnings: string[];
};

const standardColumnMap = {
  departureDate: 0,
  airline: 1,
  flightNumber: 2,
  fieldDepartureTime: 4,
  aircraftType: 8,
  originKitchen: 9,
  destination: 10,
};

const kitchenColumnMap = {
  departureDate: 0,
  flight: 1,
  fieldDepartureTime: 2,
  kitchenDepartureTime: 4,
  aircraftType: 5,
  originKitchen: 6,
  destination: 7,
};

export async function parseScheduleFile(file: File): Promise<ScheduleImportResult> {
  const XLSX = await import("xlsx");
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  if (!sheet) throw new Error("The workbook does not contain a readable schedule sheet.");
  const rows = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, raw: false, defval: "" });
  const validationErrors: string[] = [];

  const format = detectScheduleFormat(rows[0]);
  const flights = rows
    .slice(1)
    .map((row, index) => readScheduleRow(row, index + 2, format))
    .filter((row) => isNonEmptyScheduleRow(row))
    .filter((row) => {
      const rowErrors = validateScheduleRow(row);
      validationErrors.push(...rowErrors);
      return rowErrors.length === 0;
    })
    .map(toFlightAssignment);

  if (flights.length === 0 && validationErrors.length > 0) {
    const visibleErrors = validationErrors.slice(0, 3).join(" ");
    const remainingCount = validationErrors.length - 3;
    throw new Error(`${visibleErrors}${remainingCount > 0 ? ` ${remainingCount} more row(s) failed validation.` : ""}`);
  }

  if (flights.length === 0) throw new Error("No valid flight rows were found in the schedule.");

  return {
    flights,
    warnings: validationErrors,
  };
}

function detectScheduleFormat(headerRow: unknown[] | undefined) {
  const headers = (headerRow ?? []).map((value) => cellText(value).toLowerCase());
  if (headers[1] === "flight" && headers[4] === "kitchen" && headers[6] === "from" && headers[7] === "to") return "kitchen" as const;
  return "standard" as const;
}

function readScheduleRow(row: unknown[], sourceRowNumber: number, format: ReturnType<typeof detectScheduleFormat>): ScheduleRow {
  if (format === "kitchen") {
    const flightParts = splitFlight(cellText(row[kitchenColumnMap.flight]));
    return {
      sourceRowNumber,
      departureDate: cellText(row[kitchenColumnMap.departureDate]),
      airline: flightParts.airline,
      flightNumber: flightParts.flightNumber,
      fieldDepartureTime: normalizeTime(cellText(row[kitchenColumnMap.fieldDepartureTime])),
      aircraftType: normalizeAircraftType(cleanAircraftCode(cellText(row[kitchenColumnMap.aircraftType]), flightParts.airline)),
      originKitchen: cellText(row[kitchenColumnMap.originKitchen]),
      destination: cellText(row[kitchenColumnMap.destination]),
    };
  }

  return {
    sourceRowNumber,
    departureDate: cellText(row[standardColumnMap.departureDate]),
    airline: cellText(row[standardColumnMap.airline]),
    flightNumber: cellText(row[standardColumnMap.flightNumber]),
    fieldDepartureTime: normalizeTime(cellText(row[standardColumnMap.fieldDepartureTime])),
    aircraftType: normalizeAircraftType(cellText(row[standardColumnMap.aircraftType])),
    originKitchen: cellText(row[standardColumnMap.originKitchen]),
    destination: cellText(row[standardColumnMap.destination]),
  };
}

function isNonEmptyScheduleRow(row: ScheduleRow) {
  return Boolean(row.departureDate || row.airline || row.flightNumber || row.fieldDepartureTime || row.aircraftType || row.originKitchen || row.destination);
}

function validateScheduleRow(row: ScheduleRow) {
  const errors: string[] = [];
  const rowLabel = `Row ${row.sourceRowNumber}`;

  if (!row.airline) errors.push(`${rowLabel}: missing airline.`);
  if (!row.flightNumber) errors.push(`${rowLabel}: missing flight number.`);
  if (!row.fieldDepartureTime) errors.push(`${rowLabel}: missing departure time.`);
  else if (!isValidTime(row.fieldDepartureTime)) errors.push(`${rowLabel}: invalid departure time "${row.fieldDepartureTime}".`);
  if (!row.originKitchen) errors.push(`${rowLabel}: missing origin site.`);
  else if (!normalizeAirport(row.originKitchen)) errors.push(`${rowLabel}: invalid origin site "${row.originKitchen}". Use a 3-4 character airport/site code.`);
  if (row.departureDate && !normalizeDate(row.departureDate)) errors.push(`${rowLabel}: invalid departure date "${row.departureDate}".`);

  return errors;
}

function toFlightAssignment(row: ScheduleRow, index: number): FlightAssignment {
  const serviceType: ServiceType = row.airline.toUpperCase() === "UA" ? "load-ua" : "load-other";
  const start = addMinutes(row.fieldDepartureTime, -85);
  const end = addMinutes(row.fieldDepartureTime, -35);

  return {
    id: `import-${index + 1}`,
    driverId: null,
    flightNumber: `${row.airline}${row.flightNumber}`,
    departureDate: normalizeDate(row.departureDate),
    gate: row.destination || "TBD",
    start,
    end,
    etd: row.fieldDepartureTime,
    eta: "-",
    inboundEta: "-",
    aircraft: row.aircraftType || "Unknown",
    serviceType,
    originAirport: normalizeAirport(row.originKitchen),
    destinationAirport: row.destination,
    notes: `Imported ${row.departureDate}. From ${row.originKitchen} to ${row.destination}.`,
  };
}

function normalizeAirport(value: string): AirportCode | undefined {
  return normalizeAirportCode(value);
}

function splitFlight(value: string) {
  const match = value.trim().match(/^([A-Z]{1,3})\s*([A-Z0-9]+)$/i);
  if (!match) return { airline: "", flightNumber: value.trim() };
  return { airline: match[1].toUpperCase(), flightNumber: match[2].toUpperCase() };
}

function cleanAircraftCode(value: string, airline: string) {
  const aircraft = value.trim().toUpperCase();
  if (!airline) return aircraft;
  return aircraft.replace(new RegExp(`^${airline}\\s+`, "i"), "");
}

function normalizeDate(value: string) {
  const date = value.trim();
  const slashDate = date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashDate) {
    const [, month, day, year] = slashDate;
    return validDateParts(year, month, day) ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}` : "";
  }

  const isoDate = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoDate) {
    const [, year, month, day] = isoDate;
    return validDateParts(year, month, day) ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}` : "";
  }

  return "";
}

function cellText(value: unknown) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function normalizeTime(value: string) {
  const match = value.match(/(\d{1,2}):(\d{2})/);
  if (!match) return value;
  return `${match[1].padStart(2, "0")}:${match[2]}`;
}

function addMinutes(time: string, minutesToAdd: number) {
  const [hours, minutes] = time.split(":").map(Number);
  const total = Math.max(0, hours * 60 + minutes + minutesToAdd);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function isValidTime(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return false;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  return Number.isInteger(hours) && Number.isInteger(minutes) && hours >= 0 && hours <= 47 && minutes >= 0 && minutes <= 59;
}

function validDateParts(year: string, month: string, day: string) {
  const normalized = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  const parsed = new Date(`${normalized}T00:00:00`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(normalized);
}
