import type { FlightAssignment, Push } from "../../types/dispatch";
import { FlightPuck } from "./FlightPuck";
import { PushBlock } from "./PushBlock";
import { useTimelineScale } from "./TimelineScaleContext";
import { rowHeight, timelineWidth } from "./timelineUtils";

export function OpenFlightsLane({ flights, pushes = [] }: { flights: FlightAssignment[]; pushes?: Push[] }) {
  const scale = useTimelineScale();
  const openItemCount = pushes.length > 0 ? pushes.length : flights.length;
  const laneHeight = pushes.length > 0
    ? Math.max(rowHeight * 1.9, pushes.length * (rowHeight + 8) + 8)
    : Math.max(rowHeight * 1.9, flights.length * 22 + 16);

  return (
    <div className="flex border-t border-slate-200 bg-white">
      <div className="flex w-[380px] shrink-0 items-center justify-between border-r border-slate-200 px-6 text-sm font-semibold text-ink">
        <span>Unplanned / Open</span>
        <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">{openItemCount}</span>
      </div>
      <div className="relative bg-slate-50" style={{ height: laneHeight, width: timelineWidth(scale) }}>
        {pushes.length > 0
          ? pushes.map((push, index) => (
            <div key={push.id} className="absolute left-0" style={{ top: index * (rowHeight + 8) + 6, width: timelineWidth(scale), height: rowHeight }}>
              <PushBlock push={push} />
            </div>
          ))
          : flights.map((flight, index) => <div key={flight.id} className="absolute left-0" style={{ top: index * 22 + 8 }}><FlightPuck flight={flight} /></div>)}
      </div>
    </div>
  );
}
