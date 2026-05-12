import { timeToMinutes, timelineEnd, timelineStart, timelineWidth, pixelsPerMinute } from "./timelineUtils";

export function TimelineHeader() {
  const start = timeToMinutes(timelineStart);
  const end = timeToMinutes(timelineEnd);
  const hours = [];

  for (let minute = Math.ceil(start / 60) * 60; minute <= end; minute += 60) {
    hours.push(minute);
  }

  return (
    <div className="sticky top-0 z-20 flex h-[54px] border-b border-slate-200 bg-white">
      <div className="grid w-[380px] shrink-0 grid-cols-[1.4fr_0.65fr_0.65fr_0.8fr_0.8fr] items-end gap-2 border-r border-slate-200 px-4 pb-3 text-xs font-semibold text-slate-500">
        <span>Driver</span><span>Truck</span><span>Radio</span><span>Start</span><span>End</span>
      </div>
      <div className="relative h-full" style={{ width: timelineWidth() }}>
        <div className="absolute left-0 top-2 w-full text-center text-xs font-medium text-slate-500">Fri, Jan 23, 2026</div>
        {hours.map((minute) => (
          <div key={minute} className="absolute bottom-3 -translate-x-1/2 text-sm font-semibold text-slate-700" style={{ left: (minute - start) * pixelsPerMinute }}>
            {String(Math.floor(minute / 60)).padStart(2, "0")}:00
          </div>
        ))}
      </div>
    </div>
  );
}
