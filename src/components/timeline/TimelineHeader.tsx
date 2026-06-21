import { displayTimelineTime, timeToMinutes, timelineEnd, timelineStart, timelineWidth, pixelsPerMinute } from "./timelineUtils";
import { useTimelineScale } from "./TimelineScaleContext";

export function TimelineHeader({ showDriverRadio = true }: { showDriverRadio?: boolean }) {
  const scale = useTimelineScale();
  const minuteWidth = pixelsPerMinute * scale;
  const start = timeToMinutes(timelineStart);
  const end = timeToMinutes(timelineEnd);
  const hours = [];

  for (let minute = Math.ceil(start / 60) * 60; minute <= end; minute += 60) {
    hours.push(minute);
  }

  return (
    <div className="sticky top-0 z-20 flex h-[46px] border-b border-slate-200 bg-white">
      <div
        className={`grid w-[380px] shrink-0 ${showDriverRadio ? "grid-cols-[1.4fr_0.65fr_0.65fr_0.8fr_0.8fr]" : "grid-cols-[1.6fr_0.75fr_0.8fr_0.8fr]"} items-end gap-2 border-r border-slate-200 px-4 pb-2.5 text-xs font-semibold text-slate-500`}
      >
        <span>Driver</span><span>Truck</span>{showDriverRadio && <span>Radio</span>}<span>Start</span><span>End</span>
      </div>
      <div className="relative h-full" style={{ width: timelineWidth(scale) }}>
        <div className="absolute right-4 top-1.5 text-xs font-medium text-slate-500">Operational day</div>
        {hours.map((minute) => (
          <div key={minute} className="absolute bottom-2.5 -translate-x-1/2 text-sm font-semibold text-slate-700" style={{ left: (minute - start) * minuteWidth }}>
            {displayTimelineTime(minute)}
          </div>
        ))}
      </div>
    </div>
  );
}
