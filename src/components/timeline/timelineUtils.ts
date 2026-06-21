import type { ServiceType } from "../../types/dispatch";

export const timelineStart = "00:00";
export const timelineEnd = "27:30";
export const pixelsPerMinute = 1.8;
export const rowHeight = 36;

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function displayTimelineTime(minutes: number) {
  const dayOffset = Math.floor(minutes / 1440);
  const hour = Math.floor((minutes % 1440) / 60);
  const minute = minutes % 60;
  const label = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  return dayOffset > 0 ? `${label} +${dayOffset}` : label;
}

export function minutesFromStart(time: string) {
  return timeToMinutes(time) - timeToMinutes(timelineStart);
}

export function durationMinutes(start: string, end: string) {
  return Math.max(18, timeToMinutes(end) - timeToMinutes(start));
}

export function timelineWidth(scale = 1) {
  return (timeToMinutes(timelineEnd) - timeToMinutes(timelineStart)) * pixelsPerMinute * scale;
}

export function serviceStyle(serviceType: ServiceType) {
  return {
    "load-ua": "border-blue-300 bg-blue-200 text-blue-950",
    "load-other": "border-violet-300 bg-violet-200 text-violet-950",
    positioning: "border-teal-300 bg-teal-200 text-teal-950",
    "other-work": "border-amber-300 bg-amber-200 text-amber-950",
    "intl-strip": "border-orange-400 bg-orange-200 text-orange-950",
    break: "border-slate-300 bg-slate-200 text-slate-700",
    unplanned: "border-red-400 bg-white text-red-700",
  }[serviceType];
}

export const serviceLabels: Record<ServiceType, string> = {
  "load-ua": "Load (UA)",
  "load-other": "Load (Other)",
  positioning: "Positioning / Drive",
  "other-work": "Other Work",
  "intl-strip": "INTL STRIP",
  break: "Break",
  unplanned: "Unplanned",
};
