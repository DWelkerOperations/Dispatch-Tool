import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { mockDrivers } from "../../data/mockDrivers";
import { mockFlights } from "../../data/mockFlights";
import type { FlightAssignment } from "../../types/dispatch";
import { Panel } from "../ui/Panel";
import { DriverColumn } from "./DriverColumn";
import { OpenFlightsLane } from "./OpenFlightsLane";
import { TimelineGrid } from "./TimelineGrid";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineLegend } from "./TimelineLegend";
import { timelineWidth } from "./timelineUtils";

export function DispatcherTimeline() {
  const [flights, setFlights] = useState<FlightAssignment[]>(mockFlights);

  function handleDragEnd(event: DragEndEvent) {
    const flightId = String(event.active.id);
    const newDriverId = event.over?.id ? String(event.over.id) : null;
    if (!newDriverId) return;
    setFlights((currentFlights) => currentFlights.map((flight) => flight.id === flightId ? { ...flight, driverId: newDriverId, edited: true } : flight));
  }

  const assignedFlights = flights.filter((flight) => flight.driverId);
  const openFlights = flights.filter((flight) => !flight.driverId);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Panel className="overflow-hidden">
        <div className="overflow-auto">
          <div style={{ minWidth: 380 + timelineWidth() }}>
            <TimelineHeader />
            <div className="flex"><DriverColumn drivers={mockDrivers} /><TimelineGrid drivers={mockDrivers} flights={assignedFlights} /></div>
            <OpenFlightsLane flights={openFlights} />
            <TimelineLegend />
          </div>
        </div>
      </Panel>
    </DndContext>
  );
}
