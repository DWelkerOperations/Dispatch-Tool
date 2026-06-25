import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createManualPlanState, moveFlightToPush, movePushByMinutes, resetManualPlan, snapToFiveMinutes, undoManualMove } from "../src/engine/manualControl";
import { createPlanningSchedule } from "../src/engine/scheduler";
import { planningRules } from "../src/data/planningRules";
import type { Driver, FlightAssignment, Helper, Truck } from "../src/types/dispatch";

const drivers: Driver[] = [
  { id: "d1", name: "Driver 1", truck: "T1", radio: "R1", shiftStart: "06:00", shiftEnd: "14:30" },
  { id: "d2", name: "Driver 2", truck: "T2", radio: "R2", shiftStart: "06:00", shiftEnd: "14:30" },
];

const helpers: Helper[] = [
  { id: "h1", name: "Helper 1", shiftStart: "06:00", shiftEnd: "14:30" },
  { id: "h2", name: "Helper 2", shiftStart: "06:00", shiftEnd: "14:30" },
];

const trucks: Truck[] = [
  { id: "t1", truckNumber: "T1" },
  { id: "t2", truckNumber: "T2" },
];

function flight(overrides: Partial<FlightAssignment>): FlightAssignment {
  return {
    id: "f1",
    driverId: null,
    flightNumber: "UA100",
    departureDate: "2026-06-11",
    gate: "A1",
    start: "08:00",
    end: "09:00",
    etd: "10:00",
    eta: "-",
    inboundEta: "-",
    aircraft: "737",
    serviceType: "load-ua",
    originAirport: "ORD",
    destinationAirport: "DEN",
    notes: "Test flight",
    ...overrides,
  };
}

function planForManualControl() {
  return createPlanningSchedule(
    [
      flight({ id: "f1", flightNumber: "UA100", etd: "12:00", gate: "A1", aircraft: "737" }),
      flight({ id: "f2", flightNumber: "UA101", etd: "12:35", gate: "A2", aircraft: "737" }),
      flight({ id: "f3", flightNumber: "UA102", etd: "14:30", gate: "A3", aircraft: "737" }),
    ],
    drivers,
    helpers,
    trucks,
    { rules: planningRules, operationType: "mainline" },
  );
}

function minutesBetween(start: string, end: string) {
  return timeToMinutes(end) - timeToMinutes(start);
}

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

describe("manual planning control", () => {
  it("snaps drag deltas to 5-minute increments", () => {
    assert.equal(snapToFiveMinutes(2), 0);
    assert.equal(snapToFiveMinutes(3), 5);
    assert.equal(snapToFiveMinutes(12), 10);
    assert.equal(snapToFiveMinutes(-8), -10);
  });

  it("drags a push horizontally and recalculates all push timing", () => {
    const generated = planForManualControl();
    const state = createManualPlanState(generated);
    const push = state.result.pushes[0];
    assert.ok(push);

    const next = movePushByMinutes(state, push.id, 7, planningRules);
    const moved = next.result.pushes.find((item) => item.id === push.id);

    assert.ok(moved);
    assert.equal(minutesBetween(push.kitchenDepartureTime, moved.kitchenDepartureTime), 5);
    assert.notEqual(moved.returnTime, push.returnTime);
    assert.equal(next.pushOverrides[push.id]?.modifiedByManualControl, true);
  });

  it("moves a flight to another push and recalculates source and destination pushes", () => {
    const generated = planForManualControl();
    const state = createManualPlanState(generated);
    const source = state.result.pushes.find((push) => push.flights.length > 1);
    const target = state.result.pushes.find((push) => push.id !== source?.id);
    assert.ok(source);
    assert.ok(target);
    const movedFlight = source.flights[0];

    const next = moveFlightToPush(state, movedFlight.id, target.id, 1, planningRules);
    const nextSource = next.result.pushes.find((push) => push.id === source.id);
    const nextTarget = next.result.pushes.find((push) => push.id === target.id);

    assert.ok(nextSource);
    assert.ok(nextTarget);
    assert.equal(nextSource.flights.some((flight) => flight.id === movedFlight.id), false);
    assert.equal(nextTarget.flights[1]?.id, movedFlight.id);
    assert.equal(next.flightOverrides[movedFlight.id]?.currentPushId, target.id);
    assert.equal(next.flightOverrides[movedFlight.id]?.currentSequence, 1);
    assert.notEqual(nextSource.returnTime, source.returnTime);
    assert.notEqual(nextTarget.returnTime, target.returnTime);
  });

  it("flags a reduced standard gap as a manual exception", () => {
    const generated = planForManualControl();
    const state = createManualPlanState(generated);
    const source = state.result.pushes.find((push) => push.flights.length > 1);
    const target = state.result.pushes.find((push) => push.id !== source?.id);
    assert.ok(source);
    assert.ok(target);

    const next = moveFlightToPush(state, source.flights[0].id, target.id, 1, planningRules, { gapMinutes: 5 });
    const nextTarget = next.result.pushes.find((push) => push.id === target.id);

    assert.ok(nextTarget);
    assert.ok(nextTarget.manualExceptionFlags?.includes("reduced-gap"));
    assert.ok(nextTarget.exceptionFlags.some((flag) => /reduced between-aircraft gap/i.test(flag)));
  });

  it("undo and reset restore generated recommendations", () => {
    const generated = planForManualControl();
    const state = createManualPlanState(generated);
    const push = state.result.pushes[0];
    assert.ok(push);

    const moved = movePushByMinutes(state, push.id, 10, planningRules);
    assert.notEqual(moved.result.pushes[0]?.kitchenDepartureTime, generated.pushes[0]?.kitchenDepartureTime);

    const undone = undoManualMove(moved);
    assert.equal(undone.result.pushes[0]?.kitchenDepartureTime, generated.pushes[0]?.kitchenDepartureTime);

    const reset = resetManualPlan(moved);
    assert.equal(reset.result.pushes[0]?.kitchenDepartureTime, generated.pushes[0]?.kitchenDepartureTime);
    assert.equal(Object.keys(reset.flightOverrides).length, 0);
  });
});
