import type { Driver, FlightAssignment } from "../../types/dispatch";

type FlightHoverCardProps = {
  flight: FlightAssignment;
  driver?: Driver;
};

export function FlightHoverCard({ flight, driver }: FlightHoverCardProps) {
  return (
    <div className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-3 hidden w-72 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 text-left text-xs text-slate-600 shadow-xl group-hover:block">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">{flight.flightNumber}</p>
          <p className="text-slate-500">Gate {flight.gate}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-600">{flight.aircraft}</span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        <span>ETD</span><strong className="text-right text-slate-800">{flight.etd}</strong>
        <span>ETA</span><strong className="text-right text-slate-800">{flight.eta}</strong>
        <span>Inbound ETA</span><strong className="text-right text-slate-800">{flight.inboundEta}</strong>
        <span>Driver</span><strong className="text-right text-slate-800">{driver?.name ?? "Unassigned"}</strong>
        <span>Truck</span><strong className="text-right text-slate-800">{driver?.truck ?? "Open"}</strong>
      </div>
      <p className="mt-3 rounded-lg bg-slate-50 p-2 leading-relaxed text-slate-600">{flight.notes}</p>
    </div>
  );
}
