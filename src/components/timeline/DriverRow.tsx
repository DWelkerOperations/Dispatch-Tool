import { useDroppable } from "@dnd-kit/core";
import type { Driver, FlightAssignment } from "../../types/dispatch";
import { FlightPuck } from "./FlightPuck";
import { minutesFromStart, pixelsPerMinute, rowHeight, timeToMinutes, timelineEnd, timelineStart, timelineWidth } from "./timelineUtils";

export function DriverRow({ driver, flights }: { driver: Driver; flights: FlightAssignment[] }) {
  const { setNodeRef, isOver } = useDroppable({ id: driver.id });
  const shiftStart = Math.max(0, minutesFromStart(driver.shiftStart) * pixelsPerMinute);
  const shiftEnd = Math.min(timelineWidth(), minutesFromStart(driver.shiftEnd) * pixelsPerMinute);
  const rowMinutes = timeToMinutes(timelineEnd) - timeToMinutes(timelineStart);

  return (
    <div ref={setNodeRef} className={`relative border-b border-slate-100 transition ${isOver ? "bg-blue-50" : "bg-white"}`} style={{ height: rowHeight, width: timelineWidth() }}>
      <div className="absolute inset-y-0 left-0 bg-slate-100/70" style={{ width: shiftStart }} />
      <div className="absolute inset-y-0 bg-emerald-50/60" style={{ left: shiftStart, width: Math.max(0, shiftEnd - shiftStart) }} />
      {Array.from({ length: Math.floor(rowMinutes / 30) + 1 }).map((_, index) => <div key={index} className="absolute inset-y-0 border-l border-dashed border-slate-300/70" style={{ left: index * 30 * pixelsPerMinute }} />)}
      {flights.map((flight) => <FlightPuck key={flight.id} flight={flight} driver={driver} />)}
    </div>
  );
}
