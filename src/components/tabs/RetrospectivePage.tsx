import { useMemo } from "react";
import { Clock3 } from "lucide-react";
import type { FlightAssignment, OperationView, PlanningRules, ScheduleResult } from "../../types/dispatch";
import { scheduledDepartureDayOffsetForFlight, shiftFlightToDepartureTime } from "../../utils/retrospectiveTime";
import { Panel } from "../ui/Panel";
import { PlanningToolPage, type FixedStartResource } from "./PlanningToolPage";

export type RetrospectiveTimeMode = "scheduled" | "actual";

type RetrospectivePageProps = {
  flights: FlightAssignment[];
  fixedStartResources: FixedStartResource[];
  operationType: OperationView;
  rules: PlanningRules;
  result: ScheduleResult | null;
  results: Partial<Record<RetrospectiveTimeMode, ScheduleResult | null>>;
  selectedDate: string;
  timeMode: RetrospectiveTimeMode;
  onDateChange: (date: string) => void;
  onFixedStartResourcesChange: (fixedStartResources: FixedStartResource[]) => void;
  onOperationTypeChange: (operationType: OperationView) => void;
  onResultChange: (result: ScheduleResult | null) => void;
  onResultsChange: (results: Partial<Record<RetrospectiveTimeMode, ScheduleResult | null>>) => void;
  onTimeModeChange: (mode: RetrospectiveTimeMode) => void;
};

export function RetrospectivePage({
  flights,
  fixedStartResources,
  operationType,
  rules,
  result,
  results,
  selectedDate,
  timeMode,
  onDateChange,
  onFixedStartResourcesChange,
  onOperationTypeChange,
  onResultChange,
  onResultsChange,
  onTimeModeChange,
}: RetrospectivePageProps) {
  const retrospectiveFlights = useMemo(
    () => ({
      scheduled: flights.map((flight) => shiftFlightToDepartureTime(
        flight,
        flight.scheduledDepartureTime ?? flight.etd,
        flight.scheduledDepartureTime ? scheduledDepartureDayOffsetForFlight(flight) : 0,
      )),
      actual: flights.map((flight) => shiftFlightToDepartureTime(flight, flight.actualDepartureTime ?? flight.etd)),
    }),
    [flights],
  );
  const adjustedFlights = retrospectiveFlights[timeMode];
  const flightsWithComparisonTimes = flights.filter((flight) => flight.actualDepartureTime && flight.scheduledDepartureTime).length;
  const delayedFlights = flights.filter((flight) => (flight.departureDelayMinutes ?? 0) > 0).length;
  const earlyFlights = flights.filter((flight) => (flight.departureDelayMinutes ?? 0) < 0).length;
  const totalDelayMinutes = flights.reduce((total, flight) => total + Math.max(0, flight.departureDelayMinutes ?? 0), 0);
  const configuredStartTotal = fixedStartResources.reduce((total, item) => total + item.resources, 0);
  const selectedWeekday = weekdayForDate(selectedDate);

  return (
    <div className="space-y-5">
      <Panel className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Clock3 size={20} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink">Retrospective</h2>
              <p className="text-sm text-slate-500">
                {flightsWithComparisonTimes} flights have actual and scheduled departure times for delta review.
              </p>
              {results.scheduled && results.actual && (
                <p className="mt-1 text-xs font-semibold text-emerald-700">Scheduled and actual plans are ready. Toggle without rebuilding.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <RetrospectiveModeToggle value={timeMode} onChange={onTimeModeChange} />
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
              <Metric value={delayedFlights} label="Delayed" />
              <Metric value={earlyFlights} label="Early" />
              <Metric value={`${Math.round(totalDelayMinutes / 60)}h`} label="Delay" />
            </div>
          </div>
        </div>
        {flightsWithComparisonTimes === 0 && (
          <div role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            No flights on this date have both scheduled and actual departure times. Import a Volare actuals report before creating a retrospective.
          </div>
        )}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="min-w-[120px]">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Retrospective staffing</div>
              <div className="text-lg font-semibold text-ink">{configuredStartTotal} starts</div>
              <div className="text-[11px] text-slate-500">Initialized from Thursday OT{selectedWeekday ? ` · applied to ${selectedWeekday}` : ""}</div>
            </div>
            <div className="grid flex-1 grid-cols-6 gap-2 xl:grid-cols-11">
              {fixedStartResources.map((item) => (
                <div key={item.startTime} className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-center shadow-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{item.startTime}</div>
                  <div className="text-sm font-semibold text-ink">{item.resources}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <PlanningToolPage
        flights={adjustedFlights}
        operationType={operationType}
        rules={rules}
        result={result}
        selectedDate={selectedDate}
        title="Retrospective Flow"
        description="Toggle the imported schedule between calculated scheduled departures and actual departure times to compare the ideal plan against the day-of-reality plan."
        readyTitle="Ready for Retrospective"
        readyDescription={`${adjustedFlights.length} flights are loaded for ${selectedDate}. Click Create Retrospective once to build both scheduled and actual plans, then use the toggle to compare views.`}
        createButtonLabel="Create Retrospective"
        createDisabled={flightsWithComparisonTimes === 0}
        assumptionTitle="Retrospective Logic"
        assumptionDescription="Scheduled departure time is calculated from the Volare actual departure by subtracting Delay Dep. Actual mode uses the ETD/ACT value as imported."
        resourcePlanPosition="above-timeline"
        resourcePlanTitle="Retrospective Resource Guidance"
        resourcePlanDescription={`Editable retrospective staffing applied to the ${timeMode === "scheduled" ? "calculated scheduled" : "actual"} departure view${selectedWeekday ? ` for ${selectedWeekday}` : ""}.`}
        disallowCriticalPairings
        preventUrgentPairings
        showPairingQuality
        showRiskDefinitions
        timelineDriverLabelMode="sequential"
        showTimelineDriverRadio={false}
        startTimeMode="fixed-resource"
        fixedStartResources={fixedStartResources}
        allowShiftOverflow
        pairedBuilds={[
          { id: "scheduled", flights: retrospectiveFlights.scheduled },
          { id: "actual", flights: retrospectiveFlights.actual },
        ]}
        onDateChange={onDateChange}
        onFixedStartResourcesChange={onFixedStartResourcesChange}
        onOperationTypeChange={onOperationTypeChange}
        onResultChange={onResultChange}
        onPairedResultsChange={(nextResults) => onResultsChange({
          scheduled: nextResults.scheduled,
          actual: nextResults.actual,
        })}
      />
    </div>
  );
}

function RetrospectiveModeToggle({ value, onChange }: { value: RetrospectiveTimeMode; onChange: (mode: RetrospectiveTimeMode) => void }) {
  return (
    <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm" aria-label="Retrospective time mode">
      {(["scheduled", "actual"] as const).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => onChange(mode)}
          className={`rounded-lg px-3 py-2 text-sm font-semibold capitalize transition ${
            value === mode ? "bg-ink text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}

function Metric({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="min-w-[70px] rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="text-sm font-semibold text-ink">{value}</div>
      <div>{label}</div>
    </div>
  );
}

function weekdayForDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return "";
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "UTC" }).format(parsed);
}
