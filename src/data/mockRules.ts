import type { RuleItem } from "../types/dispatch";

export const mockRules: RuleItem[] = [
  { id: "r1", category: "Completion", setting: "Target completion before ETD", value: "30 min" },
  { id: "r2", category: "Completion", setting: "Hard minimum completion before ETD", value: "10 min" },
  { id: "r3", category: "Shift lengths", setting: "Standard driver shift", value: "8 hr" },
  { id: "r4", category: "Lunch windows", setting: "Ideal lunch before", value: "5th hour" },
  { id: "r5", category: "Pretrip times", setting: "Truck pretrip", value: "20 min" },
  { id: "r6", category: "Service times", setting: "Regional / narrowbody / widebody", value: "15 / 20 / 35 min" },
  { id: "r7", category: "Helpers", setting: "Mainline helper required", value: "Yes" },
  { id: "r8", category: "Planning priority", setting: "Optimization order", value: "No delays, drivers, idle, OT, trucks" },
];
