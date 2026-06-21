import type { RiskSeverity, ScheduleException, ScheduleResult } from "../../types/dispatch";
import { timeToMinutes } from "../../engine/scheduler";
import { Badge } from "../ui/Badge";
import { KpiCard } from "../ui/KpiCard";
import { Panel } from "../ui/Panel";

export function ScheduleSummaryCards({ result }: { result: ScheduleResult }) {
  const summary = result.summary;

  return (
    <div className="grid grid-cols-4 gap-3 xl:grid-cols-9">
      <KpiCard label="Flights" value={String(summary.totalFlights)} />
      <KpiCard label="Strip Tasks" value={String(summary.totalStripTasks)} />
      <KpiCard label="Pushes" value={String(summary.totalPushes)} />
      <KpiCard label="Drivers" value={String(summary.driversRequired)} />
      <KpiCard label="Helpers" value={String(summary.helpersRequired)} />
      <KpiCard label="Peak Trucks" value={String(summary.maxTrucksRequired)} />
      <KpiCard label="Shift Utilization" value={`${summary.shiftUtilizationPercent}%`} />
      <KpiCard label="Normal" value={String(summary.flightsScheduledNormally)} />
      <KpiCard label="Exceptions" value={String(summary.flightsWithExceptions)} />
    </div>
  );
}

export function PushTable({ result }: { result: ScheduleResult }) {
  return (
    <Panel className="overflow-hidden">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3">Push</th>
            <th className="px-4 py-3">Flights</th>
            <th className="px-4 py-3">Depart</th>
            <th className="px-4 py-3">Service Sequence</th>
            <th className="px-4 py-3">Return / Release</th>
            <th className="px-4 py-3">Duration</th>
            <th className="px-4 py-3">Driver</th>
            <th className="px-4 py-3">Helper</th>
            <th className="px-4 py-3">Truck</th>
            <th className="px-4 py-3">Explanation</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[...result.pushes].sort((a, b) => timeToMinutes(a.kitchenDepartureTime) - timeToMinutes(b.kitchenDepartureTime)).map((push) => (
            <tr key={push.id} className="bg-white align-top">
              <td className="px-4 py-3 font-semibold text-ink">{push.id}</td>
              <td className="px-4 py-3 text-slate-700">{push.flights.map((flight) => `${flight.flightNumber} ${flight.gate}`).join(", ")}</td>
              <td className="px-4 py-3 text-slate-700">{push.kitchenDepartureTime}</td>
              <td className="px-4 py-3 text-slate-700">
                <div className="space-y-1">
                  {push.serviceEvents.map((event) => (
                    <div key={event.flightId}>{event.flightNumber}: {event.serviceStart}-{event.serviceEnd}</div>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3 text-slate-700">
                <div>{push.returnTime}</div>
                <div className="text-xs text-slate-500">{addMinutes(push.returnTime, 15)} after unload</div>
              </td>
              <td className="px-4 py-3 text-slate-700">{push.totalDurationMinutes}m</td>
              <td className="px-4 py-3 text-slate-700">{push.driverId ?? "Open"}</td>
              <td className="px-4 py-3 text-slate-700">{push.helperId ?? "-"}</td>
              <td className="px-4 py-3 text-slate-700">{push.truckId ?? "Open"}</td>
              <td className="max-w-sm px-4 py-3 text-xs leading-5 text-slate-600">{push.explanation}</td>
              <td className="px-4 py-3" title={push.riskFlags.join("\n")}>
                <Badge tone={statusBadgeTone[push.riskSeverity]}>{statusLabel[push.riskSeverity]}</Badge>
                {push.exceptionFlags.length > 0 && <div className="mt-1 text-xs text-slate-500">{push.exceptionFlags.length} issue</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

const statusLabel: Record<RiskSeverity, string> = {
  normal: "Normal",
  watch: "Watch",
  urgent: "Urgent",
  critical: "Critical",
};

const statusBadgeTone: Record<RiskSeverity, "green" | "orange" | "red"> = {
  normal: "green",
  watch: "orange",
  urgent: "red",
  critical: "red",
};

function addMinutes(time: string, minutesToAdd: number) {
  const total = timeToMinutes(time) + minutesToAdd;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

export function ExceptionTable({ exceptions }: { exceptions: ScheduleException[] }) {
  return (
    <Panel className="overflow-hidden">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Flight</th><th className="px-4 py-3">Issue</th><th className="px-4 py-3">Cause</th><th className="px-4 py-3">Recommended Action</th></tr></thead>
        <tbody className="divide-y divide-slate-100">
          {exceptions.length === 0 ? <tr><td colSpan={4} className="px-4 py-5 text-sm text-slate-500">No exceptions for this run.</td></tr> : exceptions.map((item) => (
            <tr key={item.id} className="bg-white align-top"><td className="px-4 py-3 font-semibold text-ink">{item.flightNumber}</td><td className="px-4 py-3 text-slate-700">{item.issue}</td><td className="px-4 py-3"><Badge tone="orange">{item.cause.split("-").join(" ")}</Badge></td><td className="px-4 py-3 text-slate-600">{item.recommendedAction}</td></tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
