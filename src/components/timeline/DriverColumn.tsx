import type { Driver, Push } from "../../types/dispatch";
import { resourceIds } from "../../utils/resources";
import { plannedShiftForDriver } from "./shiftPlanning";
import { rowHeight } from "./timelineUtils";

export function DriverColumn({ drivers, pushes = [], driverLabelMode = "actual", showRadio = true }: { drivers: Driver[]; pushes?: Push[]; driverLabelMode?: "actual" | "sequential"; showRadio?: boolean }) {
  const sequenceCounts = { mainline: 0, express: 0, other: 0 };

  return (
    <div className="w-[380px] shrink-0 border-r border-slate-200 bg-white">
      {drivers.map((driver, index) => {
        const plannedShift = plannedShiftForDriver(driver, pushes.filter((push) => resourceIds(push.driverId).includes(driver.id)));
        const driverLabel = driverLabelMode === "sequential" ? sequentialDriverLabel(driver, index, sequenceCounts) : driver.name;
        return (
          <div
            key={driver.id}
            className={`grid ${showRadio ? "grid-cols-[1.4fr_0.65fr_0.65fr_0.8fr_0.8fr]" : "grid-cols-[1.6fr_0.75fr_0.8fr_0.8fr]"} items-center gap-2 border-b border-slate-100 px-4 text-xs`}
            style={{ height: rowHeight }}
          >
            <div className="flex min-w-0 items-center gap-2"><span className={`h-2 w-2 shrink-0 rounded-full ${plannedShift.overflowMinutes > 0 ? "bg-red-500" : "bg-emerald-500"}`} /><span className="truncate font-semibold text-ink">{driverLabel}</span></div>
            <span className="text-slate-600">{driver.truck}</span>
            {showRadio && <span className="text-slate-600">{driver.radio}</span>}
            <span className="text-slate-600">{plannedShift.start}</span><span className={plannedShift.overflowMinutes > 0 ? "font-semibold text-red-700" : "text-slate-600"}>{plannedShift.end}</span>
          </div>
        );
      })}
    </div>
  );
}

function sequentialDriverLabel(driver: Driver, fallbackIndex: number, sequenceCounts: { mainline: number; express: number; other: number }) {
  if (driver.name.startsWith("Bullpen")) return driver.name;

  if (driver.id.startsWith("express-")) {
    sequenceCounts.express += 1;
    return `Express Driver ${sequenceCounts.express}`;
  }

  if (driver.id.startsWith("mainline-")) {
    sequenceCounts.mainline += 1;
    return `Driver ${sequenceCounts.mainline}`;
  }

  sequenceCounts.other += 1;
  return `Driver ${fallbackIndex + 1}`;
}
