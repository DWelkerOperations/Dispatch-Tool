import type { Driver } from "../../types/dispatch";
import { rowHeight } from "./timelineUtils";

export function DriverColumn({ drivers }: { drivers: Driver[] }) {
  return (
    <div className="w-[380px] shrink-0 border-r border-slate-200 bg-white">
      {drivers.map((driver) => (
        <div key={driver.id} className="grid grid-cols-[1.4fr_0.65fr_0.65fr_0.8fr_0.8fr] items-center gap-2 border-b border-slate-100 px-4 text-xs" style={{ height: rowHeight }}>
          <div className="flex min-w-0 items-center gap-2"><span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" /><span className="truncate font-semibold text-ink">{driver.name}</span></div>
          <span className="text-slate-600">{driver.truck}</span><span className="text-slate-600">{driver.radio}</span><span className="text-slate-600">{driver.shiftStart}</span><span className="text-slate-600">{driver.shiftEnd}</span>
        </div>
      ))}
    </div>
  );
}
