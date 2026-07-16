import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { FlightAssignment } from "../src/types/dispatch";
import { scheduledDepartureDayOffsetForFlight, shiftFlightToDepartureTime } from "../src/utils/retrospectiveTime";

const midnightFlight: FlightAssignment = {
  id: "volare-midnight",
  driverId: null,
  flightNumber: "UA1815",
  departureDate: "2026-06-08",
  gate: "F17",
  start: "22:36",
  end: "23:26",
  etd: "00:01",
  eta: "-",
  inboundEta: "-",
  aircraft: "7M9",
  serviceType: "load-ua",
  originAirport: "SFO",
  destinationAirport: "BNA",
  actualDepartureTime: "00:01",
  scheduledDepartureTime: "23:59",
  scheduledDepartureDayOffset: -1,
  departureDelayMinutes: 2,
  notes: "Imported Volare row.",
};

describe("retrospective departure timing", () => {
  it("moves a delayed-after-midnight flight two minutes earlier across the date boundary", () => {
    const dayOffset = scheduledDepartureDayOffsetForFlight(midnightFlight);
    const shifted = shiftFlightToDepartureTime(midnightFlight, midnightFlight.scheduledDepartureTime ?? midnightFlight.etd, dayOffset);

    assert.equal(dayOffset, -1);
    assert.equal(shifted.departureDate, "2026-06-07");
    assert.equal(shifted.etd, "23:59");
    assert.equal(shifted.start, "22:34");
    assert.equal(shifted.end, "23:24");
    assert.equal(timestampFor(shifted) - timestampFor(midnightFlight), -2 * 60 * 1000);
  });

  it("derives the previous-day offset from actual, scheduled, and delay values for older imports", () => {
    const legacyFlight = { ...midnightFlight, scheduledDepartureDayOffset: undefined };
    assert.equal(scheduledDepartureDayOffsetForFlight(legacyFlight), -1);
  });

  it("preserves a next-day offset when an early flight crosses midnight", () => {
    const earlyFlight: FlightAssignment = {
      ...midnightFlight,
      start: "22:34",
      end: "23:24",
      etd: "23:59",
      actualDepartureTime: "23:59",
      scheduledDepartureTime: "00:01",
      scheduledDepartureDayOffset: 1,
      departureDelayMinutes: -2,
    };
    const shifted = shiftFlightToDepartureTime(earlyFlight, "00:01", scheduledDepartureDayOffsetForFlight(earlyFlight));

    assert.equal(shifted.departureDate, "2026-06-09");
    assert.equal(shifted.start, "22:36");
    assert.equal(timestampFor(shifted) - timestampFor(earlyFlight), 2 * 60 * 1000);
  });
});

function timestampFor(flight: FlightAssignment) {
  return Date.parse(`${flight.departureDate}T${flight.etd}:00Z`);
}
