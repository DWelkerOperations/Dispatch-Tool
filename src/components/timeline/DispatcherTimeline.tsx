import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { mockDrivers } from "../../data/mockDrivers";
import { mockFlights } from "../../data/mockFlights";
import type { Driver, FlightAssignment, Push } from "../../types/dispatch";
import { Panel } from "../ui/Panel";
import { DriverColumn } from "./DriverColumn";
import { OpenFlightsLane } from "./OpenFlightsLane";
import { TimelineGrid } from "./TimelineGrid";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineLegend } from "./TimelineLegend";
import { TimelineScaleContext } from "./TimelineScaleContext";
import { timelineWidth } from "./timelineUtils";

export function DispatcherTimeline({
  flights: sourceFlights = mockFlights,
  drivers = mockDrivers,
  pushes = [],
  driverLabelMode = "actual",
  showDriverRadio = true,
}: {
  flights?: FlightAssignment[];
  drivers?: Driver[];
  pushes?: Push[];
  driverLabelMode?: "actual" | "sequential";
  showDriverRadio?: boolean;
}) {
  const [flights, setFlights] = useState<FlightAssignment[]>(sourceFlights);
  const [timelineScale, setTimelineScale] = useState(1);

  useEffect(() => {
    setFlights(sourceFlights);
  }, [sourceFlights]);

  function handleDragEnd(event: DragEndEvent) {
    const flightId = String(event.active.id);
    const newDriverId = event.over?.id ? String(event.over.id) : null;
    if (!newDriverId) return;
    setFlights((currentFlights) => currentFlights.map((flight) => flight.id === flightId ? { ...flight, driverId: newDriverId, edited: true } : flight));
  }

  const assignedFlights = flights.filter((flight) => flight.driverId);
  const openFlights = flights.filter((flight) => !flight.driverId);
  const assignedPushes = pushes.filter((push) => push.driverId);
  const openPushes = pushes.filter((push) => !push.driverId);
  const workBlockCount = pushes.length > 0 ? pushes.length : assignedFlights.length;
  const openItemCount = pushes.length > 0 ? openPushes.length : openFlights.length;
  const zoomPercent = Math.round(timelineScale * 100);
  const riskCounts = {
    watch: pushes.filter((push) => push.riskSeverity === "watch").length,
    urgent: pushes.filter((push) => push.riskSeverity === "urgent").length,
    critical: pushes.filter((push) => push.riskSeverity === "critical").length,
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <TimelineScaleContext.Provider value={timelineScale}>
      <Panel className="overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-slate-200 bg-white px-5 py-2.5">
          <div>
            <h2 className="text-sm font-semibold text-ink">Driver Timeline</h2>
            <p className="mt-0.5 text-xs text-slate-500">Driver pairing view · {workBlockCount} planned push blocks · {openItemCount} open items</p>
          </div>
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold text-slate-600 shadow-sm">
            <button
              type="button"
              onClick={() => setTimelineScale((current) => Math.max(0.6, Number((current - 0.1).toFixed(2))))}
              className="h-7 w-7 rounded-full bg-white text-slate-700 shadow-sm transition hover:bg-slate-100"
              aria-label="Zoom timeline out"
            >
              -
            </button>
            <span className="w-12 text-center">{zoomPercent}%</span>
            <button
              type="button"
              onClick={() => setTimelineScale((current) => Math.min(1.35, Number((current + 0.1).toFixed(2))))}
              className="h-7 w-7 rounded-full bg-white text-slate-700 shadow-sm transition hover:bg-slate-100"
              aria-label="Zoom timeline in"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">Shift span visible</span>
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-red-700">Overflow visible</span>
          </div>
        </div>
        <TimelineRiskNotice watch={riskCounts.watch} urgent={riskCounts.urgent} critical={riskCounts.critical} />
        <TimelineLegend />
        <div className="overflow-auto">
          <div style={{ minWidth: 380 + timelineWidth(timelineScale) }}>
            <TimelineHeader showDriverRadio={showDriverRadio} />
            <div className="flex"><DriverColumn drivers={drivers} pushes={assignedPushes} driverLabelMode={driverLabelMode} showRadio={showDriverRadio} /><TimelineGrid drivers={drivers} flights={pushes.length > 0 ? [] : assignedFlights} pushes={assignedPushes} /></div>
            {openItemCount > 0 && <OpenFlightsLane flights={pushes.length > 0 ? [] : openFlights} pushes={openPushes} />}
          </div>
        </div>
      </Panel>
      </TimelineScaleContext.Provider>
    </DndContext>
  );
}

function TimelineRiskNotice({ watch, urgent, critical }: { watch: number; urgent: number; critical: number }) {
  const total = watch + urgent + critical;
  if (total === 0) return null;

  const elevated = critical + urgent;
  const tone = elevated > 0
    ? "border-red-200 bg-red-50 text-red-800"
    : "border-amber-200 bg-amber-50 text-amber-800";

  return (
    <div className={`flex items-center justify-between gap-3 border-b px-5 py-2 text-xs font-medium ${tone}`}>
      <span>
        {elevated > 0 ? "Action needed" : "Watch items"}: {critical} critical · {urgent} urgent · {watch} watch push{total === 1 ? "" : "es"}
      </span>
      <span className="text-[11px] opacity-80">Outlined blocks show timing, coverage, aircraft, or shift-risk exceptions.</span>
    </div>
  );
}
