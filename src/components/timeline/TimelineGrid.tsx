import type { Driver, FlightAssignment, Push } from "../../types/dispatch";
import { resourceIds } from "../../utils/resources";
import { DriverRow, type LunchWindowHours } from "./DriverRow";
import { useTimelineScale } from "./TimelineScaleContext";
import { timelineWidth } from "./timelineUtils";

export function TimelineGrid({
  drivers,
  flights,
  pushes = [],
  lunchWindowHours,
  manualControlActive = false,
  onManualFlightDrop,
}: {
  drivers: Driver[];
  flights: FlightAssignment[];
  pushes?: Push[];
  lunchWindowHours?: LunchWindowHours;
  manualControlActive?: boolean;
  onManualFlightDrop?: (change: { flightId: string; targetPushId: string; targetSequence: number }) => void;
}) {
  const scale = useTimelineScale();
  return (
    <div className="relative bg-white" style={{ width: timelineWidth(scale) }}>
      {drivers.map((driver) => (
        <DriverRow
          key={driver.id}
          driver={driver}
          flights={flights.filter((flight) => flight.driverId === driver.id)}
          pushes={pushes.filter((push) => resourceIds(push.driverId).includes(driver.id))}
          lunchWindowHours={lunchWindowHours}
          manualControlActive={manualControlActive}
          onManualFlightDrop={onManualFlightDrop}
        />
      ))}
    </div>
  );
}
