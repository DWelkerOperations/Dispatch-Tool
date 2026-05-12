import type { Driver, FlightAssignment } from "../../types/dispatch";
import { DriverRow } from "./DriverRow";
import { timelineWidth } from "./timelineUtils";

export function TimelineGrid({ drivers, flights }: { drivers: Driver[]; flights: FlightAssignment[] }) {
  return (
    <div className="relative bg-white" style={{ width: timelineWidth() }}>
      {drivers.map((driver) => <DriverRow key={driver.id} driver={driver} flights={flights.filter((flight) => flight.driverId === driver.id)} />)}
    </div>
  );
}
