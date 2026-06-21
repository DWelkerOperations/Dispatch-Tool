import type { AircraftCategory } from "../types/dispatch";

export type AircraftInterpretation = {
  inputName: string;
  standardName: string;
  category: AircraftCategory;
  preferredOnMinutes: number;
  serviceMinutes: number;
  truckRule: string;
};

export const aircraftInterpretations: AircraftInterpretation[] = [
  { inputName: "320", standardName: "Airbus A320", category: "narrowbody", preferredOnMinutes: 50, serviceMinutes: 25, truckRule: "1 truck" },
  { inputName: "32N", standardName: "Airbus A321neo", category: "narrowbody", preferredOnMinutes: 50, serviceMinutes: 25, truckRule: "1 truck" },
  { inputName: "7M9", standardName: "Boeing 737 MAX 9", category: "narrowbody", preferredOnMinutes: 50, serviceMinutes: 25, truckRule: "1 truck" },
  { inputName: "73W", standardName: "Boeing 737-700", category: "narrowbody", preferredOnMinutes: 50, serviceMinutes: 25, truckRule: "1 truck" },
  { inputName: "757", standardName: "Boeing 757", category: "narrowbody", preferredOnMinutes: 65, serviceMinutes: 40, truckRule: "1 truck" },
  { inputName: "75B", standardName: "Boeing 757-200", category: "narrowbody", preferredOnMinutes: 65, serviceMinutes: 40, truckRule: "1 truck" },
  { inputName: "75E", standardName: "Boeing 757-200", category: "narrowbody", preferredOnMinutes: 65, serviceMinutes: 40, truckRule: "1 truck" },
  { inputName: "75S", standardName: "Boeing 757-200", category: "narrowbody", preferredOnMinutes: 65, serviceMinutes: 40, truckRule: "1 truck" },
  { inputName: "75T", standardName: "Boeing 757-300", category: "narrowbody", preferredOnMinutes: 65, serviceMinutes: 40, truckRule: "1 truck" },
  { inputName: "76L", standardName: "Boeing 767-300", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "1 x 22 ft truck" },
  { inputName: "76Q", standardName: "Boeing 767-300", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "1 x 22 ft truck" },
  { inputName: "76U", standardName: "Boeing 767-300", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "1 x 22 ft truck" },
  { inputName: "76W", standardName: "Boeing 767-300", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "1 x 22 ft truck" },
  { inputName: "772", standardName: "Boeing 777-200", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "772A", standardName: "Boeing 777-200", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "77E", standardName: "Boeing 777-200", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "77G", standardName: "Boeing 777-200", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "77W", standardName: "Boeing 777-300", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "78H", standardName: "Boeing 787-8", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "78HI", standardName: "Boeing 787-8", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "78J", standardName: "Boeing 787-10", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "78P", standardName: "Boeing 787-9", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "78X", standardName: "Boeing 787-10", category: "widebody", preferredOnMinutes: 90, serviceMinutes: 50, truckRule: "2 x 22 ft trucks" },
  { inputName: "8EP/8WP", standardName: "Boeing 737-800", category: "narrowbody", preferredOnMinutes: 50, serviceMinutes: 25, truckRule: "1 truck" },
  { inputName: "E175", standardName: "Embraer E175", category: "regional", preferredOnMinutes: 40, serviceMinutes: 10, truckRule: "Express truck" },
  { inputName: "CRJ", standardName: "Bombardier CRJ", category: "regional", preferredOnMinutes: 40, serviceMinutes: 10, truckRule: "Express truck" },
];

const aircraftCodeMap = aircraftInterpretations.reduce<Record<string, string>>((map, aircraft) => {
  map[aircraft.inputName] = aircraft.standardName;
  return map;
}, {});

export function normalizeAircraftType(rawCode: string) {
  const code = rawCode.trim().toUpperCase();
  return aircraftCodeMap[code] ?? code;
}

export function categoryForAircraft(aircraft: string): AircraftCategory {
  const standardName = normalizeAircraftType(aircraft);
  const explicit = aircraftInterpretations.find((item) => item.standardName === standardName || item.inputName === aircraft.trim().toUpperCase());
  if (explicit) return explicit.category;

  const code = standardName.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!code || code === "-" || code === "UNKNOWN" || code === "TBD") return "unknown";
  if (
    code.includes("777") ||
    code.includes("787") ||
    code.includes("767") ||
    code.includes("A33") ||
    code.includes("330") ||
    code.includes("332") ||
    code.includes("333") ||
    code.includes("350") ||
    code.startsWith("33") ||
    code.startsWith("77") ||
    code.startsWith("78") ||
    code.startsWith("76")
  ) return "widebody";
  if (
    code.includes("E1") ||
    code.includes("E7") ||
    code.includes("ERJ") ||
    code.includes("CRJ") ||
    code.includes("CR5") ||
    code.includes("C5G") ||
    code.includes("REGIONAL")
  ) return "regional";
  return "narrowbody";
}

export function is757Aircraft(aircraft: string) {
  const code = cleanAircraftCode(aircraft);
  return code.includes("757") || code.startsWith("75");
}

export function isTwoTruckWidebodyAircraft(aircraft: string) {
  const code = cleanAircraftCode(aircraft);
  return code.includes("777") || code.includes("787") || code.startsWith("77") || code.startsWith("78");
}

function cleanAircraftCode(aircraft: string) {
  return aircraft.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
