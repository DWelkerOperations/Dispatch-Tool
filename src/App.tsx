import { useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { DashboardPage } from "./components/tabs/DashboardPage";
import { DispatchToolPage } from "./components/tabs/DispatchToolPage";
import { ExceptionsPage } from "./components/tabs/ExceptionsPage";
import { FleetPage } from "./components/tabs/FleetPage";
import { PlanningToolPage } from "./components/tabs/PlanningToolPage";
import { StaffingPage } from "./components/tabs/StaffingPage";
import { ThumbRulesPage } from "./components/tabs/ThumbRulesPage";
import { TourSheetPage } from "./components/tabs/TourSheetPage";
import { DispatcherTimeline } from "./components/timeline/DispatcherTimeline";
import { mockFlights } from "./data/mockFlights";
import type { AirportCode, AppTab, FlightAssignment } from "./types/dispatch";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("planning");
  const [activeAirport, setActiveAirport] = useState<AirportCode>("ORD");
  const [activeDate, setActiveDate] = useState("2026-01-23");
  const [scheduleFlights, setScheduleFlights] = useState<FlightAssignment[]>(mockFlights);
  const [importedFileName, setImportedFileName] = useState<string>();
  const visibleFlights = scheduleFlights.filter((flight) => (flight.originAirport ?? "ORD") === activeAirport && (flight.departureDate ?? "2026-01-23") === activeDate);

  function handleScheduleImport(flights: FlightAssignment[], fileName: string) {
    setScheduleFlights(flights);
    setImportedFileName(fileName);
    const firstImportedAirport = flights.find((flight) => flight.originAirport)?.originAirport;
    const firstImportedDate = flights.find((flight) => flight.departureDate)?.departureDate;
    if (firstImportedAirport) setActiveAirport(firstImportedAirport);
    if (firstImportedDate) setActiveDate(firstImportedDate);
    setActiveTab("planning");
  }

  return (
    <AppShell
      activeTab={activeTab}
      activeAirport={activeAirport}
      importedFileName={importedFileName}
      importedFlightCount={scheduleFlights.length}
      visibleFlightCount={visibleFlights.length}
      onAirportChange={setActiveAirport}
      onScheduleImport={handleScheduleImport}
      onTabChange={setActiveTab}
    >
      {activeTab === "planning" && <PlanningToolPage flights={visibleFlights} selectedDate={activeDate} onDateChange={setActiveDate} />}
      {activeTab === "dispatch" && <DispatchToolPage flights={visibleFlights} selectedDate={activeDate} onDateChange={setActiveDate} />}
      {activeTab === "timeline" && <DispatcherTimeline flights={visibleFlights} />}
      {activeTab === "staffing" && <StaffingPage activeAirport={activeAirport} />}
      {activeTab === "fleet" && <FleetPage activeAirport={activeAirport} />}
      {activeTab === "exceptions" && <ExceptionsPage />}
      {activeTab === "tour-sheet" && <TourSheetPage />}
      {activeTab === "dashboard" && <DashboardPage />}
      {activeTab === "thumb-rules" && <ThumbRulesPage />}
    </AppShell>
  );
}
