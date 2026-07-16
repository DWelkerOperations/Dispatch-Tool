import type { AirportCode } from "../types/dispatch";

export const sampleAirportOptions: AirportCode[] = ["ORD", "SFO", "SAN", "SEA", "PDX", "BWI", "JFK", "BOS", "DFW", "MIA", "DEN", "LAX", "IAH"];

export function normalizeAirportCode(value: string): AirportCode | undefined {
  const code = value.trim().toUpperCase();
  return /^[A-Z0-9]{3,4}$/.test(code) ? code : undefined;
}
