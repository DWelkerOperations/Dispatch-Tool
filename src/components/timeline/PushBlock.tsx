import type { Driver, Push, RiskSeverity } from "../../types/dispatch";
import { isInternationalDestination } from "../../utils/destinations";
import { resourceIds } from "../../utils/resources";
import { useTimelineScale } from "./TimelineScaleContext";
import { minutesFromStart, pixelsPerMinute, timeToMinutes } from "./timelineUtils";

const kitchenUnloadMinutes = 15;

type PushBlockProps = {
  push: Push;
  driver?: Driver;
  shiftLabel?: string;
};

export function PushBlock({ push, driver, shiftLabel }: PushBlockProps) {
  const scale = useTimelineScale();
  const minuteWidth = pixelsPerMinute * scale;
  const loadLeft = minutesFromStart(push.loadStartTime) * minuteWidth;
  const loadWidth = Math.max(24, push.loadDurationMinutes * minuteWidth);
  const left = minutesFromStart(push.kitchenDepartureTime) * minuteWidth;
  const width = Math.max(40, push.totalDurationMinutes * minuteWidth);
  const start = timeToMinutes(push.kitchenDepartureTime);
  const firstServiceStart = Math.min(...push.serviceEvents.map((event) => timeToMinutes(event.serviceStart)));
  const gateWaitMinutes = Math.max(0, firstServiceStart - timeToMinutes(push.arriveFirstGateTime));
  const releaseTime = minutesToTime(timeToMinutes(push.returnTime) + kitchenUnloadMinutes);
  const assignedDriverCount = resourceIds(push.driverId).length;
  const assignedTruckCount = resourceIds(push.truckId).length;
  const multiTruckPush = assignedDriverCount > 1 || assignedTruckCount > 1;
  const tone = pushRiskTone[push.riskSeverity];

  return (
    <>
      {push.loadDurationMinutes > 0 && (
        <div
          className="group/load absolute top-1.5 z-20 flex h-5 items-center justify-center rounded-sm border border-slate-300 bg-white/90 bg-[repeating-linear-gradient(135deg,rgba(148,163,184,0.45)_0,rgba(148,163,184,0.45)_3px,transparent_3px,transparent_6px)] px-1 text-[9px] font-semibold text-slate-700 shadow-sm"
          style={{ left: loadLeft, width: loadWidth }}
          title={`Load/prep ${push.loadStartTime}-${push.loadEndTime}`}
        >
          <span className="truncate">Load</span>
        </div>
      )}
      <div
        className={`group/push absolute top-1 z-30 h-7 rounded-lg border shadow-sm hover:z-[900] ${tone}`}
        style={{ left, width }}
      >
        <div className="group/label absolute inset-y-0 left-0 z-[980] flex min-w-[44px] items-center px-2 text-[11px] font-semibold">
          <span className="rounded bg-white/85 px-1 shadow-sm">{push.id}</span>
          <div className="pointer-events-none absolute left-0 top-8 z-[2000] hidden w-80 rounded-xl border border-slate-200 bg-white p-3 text-left text-xs font-normal text-slate-600 shadow-2xl group-hover/label:block">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold text-ink">{push.id}</div>
                <div className="mt-0.5 text-slate-500">{push.flights.map((flight) => `${flight.flightNumber} ${flight.gate}`).join(" · ")}</div>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${riskBadgeTone[push.riskSeverity]}`}>
                {riskLabel[push.riskSeverity]}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
              <span>Load/prep</span><strong className="text-right text-slate-800">{push.loadStartTime}-{push.loadEndTime}</strong>
              <span>Dispatch depart</span><strong className="text-right text-slate-800">{push.kitchenDepartureTime}</strong>
              <span>Arrive first gate</span><strong className="text-right text-slate-800">{push.arriveFirstGateTime}</strong>
              {gateWaitMinutes > 0 && <><span>Gate wait</span><strong className="text-right text-slate-800">{gateWaitMinutes} min</strong></>}
              {multiTruckPush && (
                <>
                  <span>Widebody resources</span><strong className="text-right text-slate-800">{assignedTruckCount || 2} trucks · {assignedDriverCount || 2} drivers</strong>
                </>
              )}
              <span>Return site</span><strong className="text-right text-slate-800">{push.returnTime}</strong>
              <span>Release after unload</span><strong className="text-right text-slate-800">{releaseTime}</strong>
              <span>Push duration</span><strong className="text-right text-slate-800">{push.totalDurationMinutes} min</strong>
            </div>
            <div className="mt-3 border-t border-slate-100 pt-2">
              <div className="mb-1 font-semibold text-ink">Service windows</div>
              <div className="space-y-1">
                {push.serviceEvents.map((event) => (
                  <div key={event.flightId} className="grid grid-cols-[1fr_auto] gap-3">
                    <span className="truncate">{event.flightNumber} · Gate {event.gate}</span>
                    <strong className="text-slate-800">{event.serviceStart}-{event.serviceEnd}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {push.serviceEvents.map((event) => {
          const eventLeft = (timeToMinutes(event.serviceStart) - start) * minuteWidth;
          const eventWidth = Math.max(26, event.serviceDurationMinutes * minuteWidth);
          const international = isInternationalDestination(event.destinationAirport);
          const eventTone = event.flightNumber.startsWith("INTL STRIP")
            ? "bg-orange-500 text-white"
            : international ? "bg-green-500 text-white" : "bg-blue-500 text-white";
          const eventRiskTone = eventRiskRing[event.riskSeverity];
          return (
            <div
              key={event.flightId}
              className={`group/event absolute top-1 z-40 flex h-5 items-center justify-center rounded-md px-1 text-[10px] font-semibold hover:z-[950] ${eventTone} ${eventRiskTone}`}
              style={{ left: eventLeft, width: eventWidth }}
            >
              <span className="truncate">{event.flightNumber} {event.gate}</span>
              <div className="pointer-events-none absolute left-0 top-7 z-[999] hidden w-72 rounded-xl border border-slate-200 bg-white p-3 text-left text-xs font-normal text-slate-600 shadow-xl group-hover/event:block">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-ink">{event.flightNumber}</div>
                    <div className="mt-0.5 text-slate-500">Gate {event.gate} · {event.aircraftType}</div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-600">{event.flightNumber.startsWith("INTL STRIP") ? "INTL STRIP" : international ? "International" : "Domestic"}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
                  <span>Destination</span><strong className="text-right text-slate-800">{event.destinationAirport ?? "Domestic"}</strong>
                  <span>Aircraft arrival</span><strong className="text-right text-slate-800">{event.aircraftArrivalTime}</strong>
                  <span>Departure</span><strong className="text-right text-slate-800">{event.departureTime}</strong>
                  <span>Service</span><strong className="text-right text-slate-800">{event.serviceStart}-{event.serviceEnd}</strong>
                  <span>Duration</span><strong className="text-right text-slate-800">{event.serviceDurationMinutes} min</strong>
                  <span>Timing</span><strong className="text-right text-slate-800">{event.riskStatus.split("-").join(" ")}</strong>
                  <span>Risk level</span><strong className="text-right text-slate-800">{riskLabel[event.riskSeverity]}</strong>
                  <span>Push</span><strong className="text-right text-slate-800">{push.id}</strong>
                  <span>Driver shift</span><strong className="text-right text-slate-800">{shiftLabel ?? (driver ? `${driver.displayShiftStart ?? driver.shiftStart}-${driver.displayShiftEnd ?? driver.shiftEnd}` : "Open")}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function minutesToTime(totalMinutes: number) {
  return `${String(Math.floor(totalMinutes / 60)).padStart(2, "0")}:${String(totalMinutes % 60).padStart(2, "0")}`;
}

const pushRiskTone: Record<RiskSeverity, string> = {
  normal: "border-blue-300 bg-blue-50 text-blue-950",
  watch: "border-amber-400 bg-blue-50 text-blue-950 shadow-amber-100",
  urgent: "border-red-500 bg-blue-50 text-blue-950 shadow-red-100 ring-2 ring-red-200",
  critical: "border-red-700 bg-red-50 text-red-950 shadow-red-200 ring-2 ring-red-300",
};

const eventRiskRing: Record<RiskSeverity, string> = {
  normal: "ring-1 ring-white/60",
  watch: "ring-2 ring-amber-300",
  urgent: "ring-2 ring-red-500",
  critical: "ring-2 ring-red-800",
};

const riskBadgeTone: Record<RiskSeverity, string> = {
  normal: "bg-emerald-100 text-emerald-700",
  watch: "bg-amber-100 text-amber-800",
  urgent: "bg-red-100 text-red-700",
  critical: "bg-red-700 text-white",
};

const riskLabel: Record<RiskSeverity, string> = {
  normal: "Normal",
  watch: "Watch",
  urgent: "Urgent",
  critical: "Critical",
};
