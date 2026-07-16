import type { OperationType, StaffMember, StaffRole, StaffStatus } from "../types/dispatch";

const shiftStarts = ["04:00", "05:00", "06:00", "07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];
const locations = ["ORD", "SAN", "SEA", "DFW", "DEN", "LAX", "IAH"] as const;

const statusCycle: StaffStatus[] = [
  "Available",
  "Available",
  "Available",
  "Assigned",
  "On Push",
  "Lunch",
  "Off Shift",
  "Call Out",
  "Unavailable",
];

export const staffStatuses: StaffStatus[] = [
  "Available",
  "Assigned",
  "On Push",
  "Lunch",
  "Off Shift",
  "Call Out",
  "Unavailable",
];

export const staffRoles: StaffRole[] = ["Driver", "Helper"];

export const mockStaffing: StaffMember[] = Array.from({ length: 200 }, (_, index) => {
  const number = index + 1;
  const role: StaffRole = index % 4 === 0 ? "Helper" : "Driver";
  const operationType: OperationType = index % 5 === 0 ? "express" : "mainline";
  const shiftStart = shiftStarts[index % shiftStarts.length];
  const status = statusCycle[index % statusCycle.length];

  return {
    id: `EMP-${String(number).padStart(4, "0")}`,
    name: `Demo Staff ${String(number).padStart(3, "0")}`,
    role,
    location: locations[index % locations.length],
    operationType,
    shift: {
      start: shiftStart,
      end: addMinutes(shiftStart, 510),
      lengthHours: 8.5,
    },
    status,
    assignedPush: status === "Assigned" || status === "On Push" ? `P-${String((index % 45) + 1).padStart(3, "0")}` : null,
    notes: `${operationType === "mainline" ? "Mainline" : "Express"} mock ${role.toLowerCase()} roster record`,
  };
});

function addMinutes(time: string, minutesToAdd: number) {
  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const endHours = Math.floor(totalMinutes / 60) % 24;
  const endMinutes = totalMinutes % 60;
  return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
}
