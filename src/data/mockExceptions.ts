import type { ExceptionItem } from "../types/dispatch";

export const mockExceptions: ExceptionItem[] = [
  { id: "e1", type: "OT violation", severity: "High", owner: "Demo Driver 008", detail: "UA3686 pushes route 22 minutes beyond scheduled shift end.", time: "12:10" },
  { id: "e2", type: "Missing lunch", severity: "High", owner: "Demo Driver 003", detail: "No 30-minute lunch gap found in the shift.", time: "10:45" },
  { id: "e3", type: "Late load risk", severity: "Medium", owner: "Demo Driver 004", detail: "UA2137 has a narrow return-to-load margin after prior assignment.", time: "11:30" },
  { id: "e4", type: "Truck conflict", severity: "Medium", owner: "Truck 035", detail: "Two planned demo uses overlap.", time: "08:55" },
  { id: "e5", type: "Unplanned flight", severity: "Low", owner: "Open lane", detail: "UA1221 was added after the morning plan was published.", time: "11:38" },
];
