import type { ScheduleResult, ServiceType } from "../types/dispatch";

export type FlightTaskTypeChange = {
  flightId: string;
  serviceType: ServiceType;
};

export function applyFlightTaskTypeChange(result: ScheduleResult, change: FlightTaskTypeChange): ScheduleResult {
  let changed = false;

  const pushes = result.pushes.map((push) => {
    let pushChanged = false;
    const flights = push.flights.map((flight) => {
      if (flight.id !== change.flightId || flight.serviceType === change.serviceType) return flight;
      changed = true;
      pushChanged = true;
      return { ...flight, serviceType: change.serviceType };
    });

    const serviceEvents = push.serviceEvents.map((event) => {
      if (event.flightId !== change.flightId || event.serviceType === change.serviceType) return event;
      changed = true;
      pushChanged = true;
      return { ...event, serviceType: change.serviceType };
    });

    return pushChanged ? { ...push, flights, serviceEvents } : push;
  });

  if (!changed) return result;

  return {
    ...result,
    pushes,
    summary: {
      ...result.summary,
      totalStripTasks: pushes.flatMap((push) => push.flights).filter((flight) => flight.serviceType === "intl-strip").length,
    },
  };
}
