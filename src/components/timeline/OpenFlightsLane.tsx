import type { FlightAssignment } from "../../types/dispatch";
import { FlightPuck } from "./FlightPuck";
import { rowHeight, timelineWidth } from "./timelineUtils";

export function OpenFlightsLane({ flights }: { flights: FlightAssignment[] }) {
  return (
    <div className="flex border-t border-slate-200 bg-white">
      <div className="flex w-[380px] shrink-0 items-center border-r border-slate-200 px-6 text-sm font-semibold text-ink">Unplanned / Open</div>
      <div className="relative bg-slate-50" style={{ height: rowHeight * 2.3, width: timelineWidth() }}>
        {flights.map((flight, index) => <div key={flight.id} className="absolute left-0" style={{ top: index * 26 + 10 }}><FlightPuck flight={flight} /></div>)}
      </div>
    </div>
  );
}
