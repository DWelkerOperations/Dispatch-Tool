import type { FlightAssignment } from "../types/dispatch";

const minutesPerDay = 24 * 60;

/**
 * Resolves the scheduled clock time to its calendar-day position relative to the
 * actual departure date. Imported Volare rows carry this explicitly; the delay
 * calculation remains as a compatibility fallback for older imported data.
 */
export function scheduledDepartureDayOffsetForFlight(flight: FlightAssignment) {
  if (Number.isInteger(flight.scheduledDepartureDayOffset)) return flight.scheduledDepartureDayOffset ?? 0;
  if (!flight.actualDepartureTime || !flight.scheduledDepartureTime || flight.departureDelayMinutes === undefined) return 0;

  const actualMinutes = clockTimeToMinutes(flight.actualDepartureTime);
  const scheduledMinutes = clockTimeToMinutes(flight.scheduledDepartureTime);
  const expectedScheduledMinutes = actualMinutes - flight.departureDelayMinutes;
  return Math.round((expectedScheduledMinutes - scheduledMinutes) / minutesPerDay);
}

export function shiftFlightToDepartureTime(flight: FlightAssignment, departureTime: string, dayOffset = 0): FlightAssignment {
  const originalDepartureMinutes = clockTimeToMinutes(flight.etd);
  const nextDepartureMinutes = clockTimeToMinutes(departureTime) + dayOffset * minutesPerDay;
  const deltaMinutes = nextDepartureMinutes - originalDepartureMinutes;
  return {
    ...flight,
    departureDate: flight.departureDate ? shiftIsoDate(flight.departureDate, dayOffset) : flight.departureDate,
    etd: departureTime,
    start: shiftOperatingTime(flight.start, deltaMinutes),
    end: shiftOperatingTime(flight.end, deltaMinutes),
    notes: `${flight.notes} Retrospective view: ${departureTime}${dayOffset ? ` (${formatDayOffset(dayOffset)})` : ""}.`,
  };
}

function clockTimeToMinutes(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) throw new Error(`Invalid retrospective time "${time}". Expected HH:mm.`);
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours < 0 || hours > 47 || minutes < 0 || minutes > 59) {
    throw new Error(`Invalid retrospective time "${time}". Expected HH:mm.`);
  }
  return hours * 60 + minutes;
}

function shiftOperatingTime(time: string, deltaMinutes: number) {
  let total = clockTimeToMinutes(time) + deltaMinutes;
  while (total < 0) total += minutesPerDay;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function shiftIsoDate(date: string, dayOffset: number) {
  if (dayOffset === 0) return date;
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return date;
  const [, year, month, day] = match;
  const shifted = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day) + dayOffset));
  return `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, "0")}-${String(shifted.getUTCDate()).padStart(2, "0")}`;
}

function formatDayOffset(dayOffset: number) {
  return dayOffset > 0 ? `next day +${dayOffset}` : `previous day ${dayOffset}`;
}
