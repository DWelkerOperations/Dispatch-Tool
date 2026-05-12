import type { PlanningRules } from "../types/dispatch";

export const planningRules: PlanningRules = {
  blockMinutes: 5,
  targetCompletionBeforeDepartureMinutes: 30,
  hardMinimumCompletionBeforeDepartureMinutes: 10,
  earliestCateringBeforeDepartureMinutes: 120,
  prepMinutes: 20,
  mainlineDriveOutMinutes: 15,
  expressDriveOutMinutes: 10,
  mainlineReturnMinutes: 15,
  expressReturnMinutes: 10,
  maxFlightsPerPush: 3,
  groupWindowMinutes: 60,
  maxWorkloadUnitsPerPush: 4,
  standardShiftHours: 8,
  lunchMinutes: 30,
  idealLunchBeforeHour: 5,
  serviceMinutesByAircraftCategory: {
    regional: 15,
    narrowbody: 20,
    widebody: 35,
  },
  helperRequiredForMainline: true,
  priorityOrder: [
    "No delayed flights",
    "Minimize drivers",
    "Minimize idle time",
    "Reduce overtime",
    "Minimize trucks",
    "Avoid single-flight pushes",
  ],
};
