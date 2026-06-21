import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Search, Truck, Wrench } from "lucide-react";
import { sampleAirportOptions } from "../../data/airports";
import { fleetVehicleSizes, fleetVehicleStatuses, fleetVehicleTypes, mockFleet } from "../../data/mockFleet";
import type { AirportCode, FleetVehicle, FleetVehicleStatus, FleetVehicleType } from "../../types/dispatch";
import { KpiCard } from "../ui/KpiCard";
import { Panel } from "../ui/Panel";

type FleetFilter = "All";

export function FleetPage({ activeAirport }: { activeAirport: AirportCode }) {
  const [fleet, setFleet] = useState<FleetVehicle[]>(mockFleet);
  const [locationFilter, setLocationFilter] = useState<AirportCode | FleetFilter>(activeAirport);
  const [typeFilter, setTypeFilter] = useState<FleetVehicleType | FleetFilter>("All");
  const [statusFilter, setStatusFilter] = useState<FleetVehicleStatus | FleetFilter>("All");
  const [sizeFilter, setSizeFilter] = useState<FleetVehicle["size"] | FleetFilter>("All");
  const [truckSearch, setTruckSearch] = useState("");

  useEffect(() => {
    setLocationFilter(activeAirport);
  }, [activeAirport]);

  const filteredFleet = useMemo(() => fleet.filter((vehicle) => {
    const normalizedSearch = truckSearch.trim().toLowerCase();
    const truckMatches = !normalizedSearch || vehicle.truckNumber.toLowerCase().includes(normalizedSearch);
    const locationMatches = locationFilter === "All" || vehicle.location === locationFilter;
    const typeMatches = typeFilter === "All" || vehicle.type === typeFilter;
    const statusMatches = statusFilter === "All" || vehicle.status === statusFilter;
    const sizeMatches = sizeFilter === "All" || vehicle.size === sizeFilter;
    return truckMatches && locationMatches && typeMatches && statusMatches && sizeMatches;
  }), [fleet, locationFilter, sizeFilter, statusFilter, truckSearch, typeFilter]);

  const fleetCounts = useMemo(() => ({
    available: fleet.filter((vehicle) => vehicle.status === "Available").length,
    down: fleet.filter((vehicle) => vehicle.status === "Down / Unavailable" || vehicle.status === "Maintenance").length,
    active: fleet.filter((vehicle) => vehicle.status === "Assigned" || vehicle.status === "Out on Push").length,
  }), [fleet]);

  function updateStatus(vehicleId: string, status: FleetVehicleStatus) {
    setFleet((currentFleet) =>
      currentFleet.map((vehicle) => vehicle.id === vehicleId ? { ...vehicle, status } : vehicle),
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Fleet</h2>
        <p className="mt-1 text-sm text-slate-500">Mock vehicle master list for catering trucks and support vehicles.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <KpiCard label="Total Fleet" value={String(fleet.length)} helper="Mock vehicle records" icon={<Truck size={20} />} />
        <KpiCard label="Available Trucks" value={String(fleetCounts.available)} helper="Ready for assignment" icon={<CheckCircle2 size={20} />} />
        <KpiCard label="Assigned / Out" value={String(fleetCounts.active)} helper="Assigned or on push" icon={<AlertTriangle size={20} />} />
        <KpiCard label="Down / Maintenance" value={String(fleetCounts.down)} helper="Not dispatchable" icon={<Wrench size={20} />} />
      </div>

      <Panel className="p-4">
        <div className="grid grid-cols-5 gap-4">
          <TruckSearch value={truckSearch} onChange={setTruckSearch} />
          <FilterSelect label="Location" value={locationFilter} options={["All", ...siteOptions(activeAirport)]} onChange={(value) => setLocationFilter(value as AirportCode | FleetFilter)} />
          <FilterSelect label="Truck Type" value={typeFilter} options={["All", ...fleetVehicleTypes]} onChange={(value) => setTypeFilter(value as FleetVehicleType | FleetFilter)} />
          <FilterSelect label="Status" value={statusFilter} options={["All", ...fleetVehicleStatuses]} onChange={(value) => setStatusFilter(value as FleetVehicleStatus | FleetFilter)} />
          <FilterSelect label="Size" value={sizeFilter} options={["All", ...fleetVehicleSizes]} onChange={(value) => setSizeFilter(value as FleetVehicle["size"] | FleetFilter)} />
        </div>
      </Panel>

      <Panel className="overflow-hidden">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Truck</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Make / Model</th>
              <th className="px-4 py-3">Capacity</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Driver</th>
              <th className="px-4 py-3">Push</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredFleet.map((vehicle) => (
              <tr key={vehicle.id} className="bg-white">
                <td className="px-4 py-3"><div className="font-semibold text-ink">{vehicle.truckNumber}</div><div className="text-xs text-slate-500">{vehicle.id}</div></td>
                <td className="px-4 py-3 font-semibold text-slate-700">{vehicle.location}</td>
                <td className="px-4 py-3 text-slate-700">{vehicle.type}</td>
                <td className="px-4 py-3 text-slate-700">{vehicle.size}</td>
                <td className="px-4 py-3 text-slate-700">{vehicle.make} {vehicle.model}</td>
                <td className="px-4 py-3 text-slate-700">{vehicle.capacity}</td>
                <td className="px-4 py-3"><StatusSelect value={vehicle.status} onChange={(status) => updateStatus(vehicle.id, status)} /></td>
                <td className="px-4 py-3 text-slate-700">{vehicle.assignedDriver ?? "-"}</td>
                <td className="px-4 py-3 text-slate-700">{vehicle.assignedPush ?? "-"}</td>
                <td className="px-4 py-3 text-slate-500">{vehicle.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredFleet.length === 0 && (
          <div className="border-t border-slate-100 bg-white px-4 py-10 text-center text-sm font-medium text-slate-500">
            No trucks match the current search and filters.
          </div>
        )}
      </Panel>
    </div>
  );
}

function siteOptions(activeAirport: AirportCode) {
  return sampleAirportOptions.includes(activeAirport) ? sampleAirportOptions : [activeAirport, ...sampleAirportOptions];
}

function TruckSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">Truck Number</span>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-ink shadow-sm focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
        <Search size={16} className="shrink-0 text-slate-400" />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search truck"
          className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
        />
      </div>
    </label>
  );
}

function FilterSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}

function StatusSelect({ value, onChange }: { value: FleetVehicleStatus; onChange: (value: FleetVehicleStatus) => void }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value as FleetVehicleStatus)} className="w-full min-w-[150px] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100">
      {fleetVehicleStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
    </select>
  );
}
