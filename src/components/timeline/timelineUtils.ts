import type { ServiceType } from "../../types/dispatch";

export const timelineStart = "06:30";
export const timelineEnd = "12:30";
export const pixelsPerMinute = 3.2;
export const rowHeight = 44;

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function minutesFromStart(time: string) {
  return timeToMinutes(time) - timeToMinutes(timelineStart);
}

export function durationMinutes(start: string, end: string) {
  return Math.max(18, timeToMinutes(end) - timeToMinutes(start));
}

export function timelineWidth() {
  return (timeToMinutes(timelineEnd) - timeToMinutes(timelineStart)) * pixelsPerMinute;
}

export function serviceStyle(serviceType: ServiceType) {
  return {
    "load-ua": "border-blue-300 bg-blue-200 text-blue-950",
    "load-other": "border-violet-300 bg-violet-200 text-violet-950",
    positioning: "border-teal-300 bg-teal-200 text-teal-950",
    "other-work": "border-amber-300 bg-amber-200 text-amber-950",
    break: "border-slate-300 bg-slate-200 text-slate-700",
    unplanned: "border-red-400 bg-white text-red-700",
  }[serviceType];
}

export const serviceLabels: Record<ServiceType, string> = {
  "load-ua": "Load (UA)",
  "load-other": "Load (Other)",
  positioning: "Positioning / Drive",
  "other-work": "Other Work",
  break: "Break",
  unplanned: "Unplanned",
};
