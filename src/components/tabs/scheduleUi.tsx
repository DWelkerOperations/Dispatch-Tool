import type { Driver, RiskSeverity, ScheduleException, ScheduleResult } from "../../types/dispatch";
import { timeToMinutes } from "../../engine/scheduler";
import { resourceIds } from "../../utils/resources";
import { plannedShiftForDriver } from "../timeline/shiftPlanning";
import { Badge } from "../ui/Badge";
import { KpiCard } from "../ui/KpiCard";
import { Panel } from "../ui/Panel";

export function ScheduleSummaryCards({
  result,
  drivers = [],
  configuredDriverCount,
  configuredHelperCount,
}: {
  result: ScheduleResult;
  drivers?: Driver[];
  configuredDriverCount?: number;
  configuredHelperCount?: number;
}) {
  const summary = result.summary;
  const overtime = overtimeSummaryForDrivers(drivers, result);

  return (
    <div className="grid grid-cols-4 gap-3 xl:grid-cols-12">
      <KpiCard label="Flights" value={String(summary.totalFlights)} />
      <KpiCard label="Strip Tasks" value={String(summary.totalStripTasks)} />
      <KpiCard label="Pushes" value={String(summary.totalPushes)} />
      <KpiCard
        label={configuredDriverCount === undefined ? "Drivers" : "Drivers Used"}
        value={String(summary.driversRequired)}
        helper={configuredDriverCount === undefined ? undefined : `${configuredDriverCount} configured`}
      />
      <KpiCard
        label={configuredHelperCount === undefined ? "Helpers" : "Helpers Used"}
        value={String(summary.helpersRequired)}
        helper={configuredHelperCount === undefined ? undefined : `${configuredHelperCount} configured`}
      />
      <KpiCard label="Peak Trucks" value={String(summary.maxTrucksRequired)} />
      <KpiCard label="OT Drivers" value={String(overtime.driverCount)} helper={`${formatHours(overtime.totalMinutes)} hr`} />
      <KpiCard label="OT %" value={formatPercent(overtime.percent)} helper="of scheduled driver time" />
      <KpiCard label="Shift Utilization" value={`${summary.shiftUtilizationPercent}%`} />
      <KpiCard label="Normal" value={String(summary.flightsScheduledNormally)} />
      <KpiCard label="Exception Flights" value={String(summary.flightsWithExceptions)} helper="Flight/task count" />
      <KpiCard label="Watch Timing" value={String(summary.watchPushes)} helper="Timing flags" />
      <KpiCard label="Urgent Timing" value={String(summary.urgentPushes)} helper="Timing flags" />
      <KpiCard label="Critical Timing" value={String(summary.criticalPushes)} helper="Timing flags" />
    </div>
  );
}

function overtimeSummaryForDrivers(drivers: Driver[], result: ScheduleResult) {
  const shifts = drivers.map((driver) => {
    const planned = plannedShiftForDriver(driver, result.pushes.filter((push) => resourceIds(push.driverId).includes(driver.id)));
    return {
      scheduledMinutes: Math.max(0, planned.endMinutes - planned.startMinutes),
      overflowMinutes: planned.overflowMinutes,
    };
  });
  const overtime = shifts.map((shift) => shift.overflowMinutes).filter((minutes) => minutes > 0);
  const scheduledMinutes = shifts.reduce((total, shift) => total + shift.scheduledMinutes, 0);
  const totalMinutes = overtime.reduce((total, minutes) => total + minutes, 0);

  return {
    driverCount: overtime.length,
    totalMinutes,
    percent: scheduledMinutes > 0 ? (totalMinutes / scheduledMinutes) * 100 : 0,
  };
}

function formatHours(minutes: number) {
  return (minutes / 60).toFixed(minutes % 60 === 0 ? 0 : 1);
}

function formatPercent(value: number) {
  return `${value.toFixed(value >= 10 || value === 0 ? 0 : 1)}%`;
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
  const causeCounts = exceptionCauseCounts(exceptions);
  return (
    <Panel className="overflow-hidden">
      {exceptions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs">
          <span className="font-semibold uppercase tracking-wide text-slate-500">Exception Breakdown</span>
          {causeCounts.map((item) => (
            <span key={item.cause} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-semibold text-slate-700">
              {item.label}: {item.count}
            </span>
          ))}
        </div>
      )}
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

function exceptionCauseCounts(exceptions: ScheduleException[]) {
  const counts = new Map<ScheduleException["cause"], number>();
  for (const exception of exceptions) counts.set(exception.cause, (counts.get(exception.cause) ?? 0) + 1);
  return [...counts.entries()]
    .map(([cause, count]) => ({ cause, count, label: cause.split("-").join(" ") }))
    .sort((a, b) => b.count - a.count);
}
