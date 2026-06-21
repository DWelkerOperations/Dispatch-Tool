import { useEffect, useMemo, useState } from "react";
import { Clock3, UserCheck, UserX, Users } from "lucide-react";
import { sampleAirportOptions } from "../../data/airports";
import { staffRoles, staffStatuses } from "../../data/mockStaffing";
import { availableCdlScheduleDates, hasCdlScheduleForDate, ordCdlStaffForDate } from "../../data/ordCdlDrivers";
import type { AirportCode, OperationType, StaffMember, StaffRole, StaffStatus } from "../../types/dispatch";
import { KpiCard } from "../ui/KpiCard";
import { Panel } from "../ui/Panel";

type StaffFilter = "All";

export function StaffingPage({ activeAirport, activeDate, onDateChange }: { activeAirport: AirportCode; activeDate: string; onDateChange: (date: string) => void }) {
  const sourceStaff = useMemo(() => ordCdlStaffForDate(activeDate), [activeDate]);
  const [staff, setStaff] = useState<StaffMember[]>(sourceStaff);
  const [locationFilter, setLocationFilter] = useState<AirportCode | StaffFilter>(activeAirport);
  const [roleFilter, setRoleFilter] = useState<StaffRole | StaffFilter>("All");
  const [operationFilter, setOperationFilter] = useState<OperationType | StaffFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StaffStatus | StaffFilter>("All");
  const [shiftFilter, setShiftFilter] = useState<string>("All");

  useEffect(() => {
    setLocationFilter(activeAirport);
  }, [activeAirport]);

  useEffect(() => {
    setStaff(sourceStaff);
  }, [sourceStaff]);

  const shiftStarts = useMemo(() => Array.from(new Set(staff.map((member) => member.shift.start))), [staff]);
  useEffect(() => {
    if (shiftFilter !== "All" && !shiftStarts.includes(shiftFilter)) setShiftFilter("All");
  }, [shiftFilter, shiftStarts]);

  const filteredStaff = useMemo(() => staff.filter((member) => {
    const locationMatches = locationFilter === "All" || member.location === locationFilter;
    const roleMatches = roleFilter === "All" || member.role === roleFilter;
    const operationMatches = operationFilter === "All" || member.operationType === operationFilter;
    const statusMatches = statusFilter === "All" || member.status === statusFilter;
    const shiftMatches = shiftFilter === "All" || member.shift.start === shiftFilter;
    return locationMatches && roleMatches && operationMatches && statusMatches && shiftMatches;
  }), [locationFilter, operationFilter, roleFilter, shiftFilter, staff, statusFilter]);

  const staffingCounts = useMemo(() => ({
    driversAvailable: staff.filter((member) => member.role === "Driver" && member.status === "Available").length,
    helpersAvailable: staff.filter((member) => member.role === "Helper" && member.status === "Available").length,
    unavailable: staff.filter((member) => member.status === "Unavailable" || member.status === "Call Out").length,
  }), [staff]);
  const staffingByStart = useMemo(
    () => shiftStarts.map((start) => `${start}: ${staff.filter((member) => member.shift.start === start).length}`).join(" · "),
    [shiftStarts, staff],
  );

  function updateStatus(employeeId: string, status: StaffStatus) {
    setStaff((currentStaff) =>
      currentStaff.map((member) => member.id === employeeId ? { ...member, status } : member),
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Staffing</h2>
            <p className="mt-1 text-sm text-slate-500">
              Sample CDL driver list from the reference scheduler. {hasCdlScheduleForDate(activeDate) ? `Showing loaded shifts for ${activeDate}.` : `No shift rows for ${activeDate}; showing CDL roster only.`}
            </p>
          </div>
          <DateFilter value={activeDate} onChange={onDateChange} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <KpiCard label="Total CDL Drivers" value={String(staff.length)} helper={hasCdlScheduleForDate(activeDate) ? "Scheduled shift rows" : "Roster records"} icon={<Users size={20} />} />
        <KpiCard label="Drivers Available" value={String(staffingCounts.driversAvailable)} helper="Status = available" icon={<UserCheck size={20} />} />
        <KpiCard label="Helpers Available" value={String(staffingCounts.helpersAvailable)} helper="Status = available" icon={<UserCheck size={20} />} />
        <KpiCard label="Unavailable / Call Out" value={String(staffingCounts.unavailable)} helper="Manual status driven" icon={<UserX size={20} />} />
      </div>

      <Panel className="p-4">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_2fr] items-end gap-4">
          <FilterSelect label="Location" value={locationFilter} options={["All", ...siteOptions(activeAirport)]} onChange={(value) => setLocationFilter(value as AirportCode | StaffFilter)} />
          <FilterSelect label="Role" value={roleFilter} options={["All", ...staffRoles]} onChange={(value) => setRoleFilter(value as StaffRole | StaffFilter)} />
          <FilterSelect label="Operation" value={operationFilter} options={["All", "mainline", "express"]} onChange={(value) => setOperationFilter(value as OperationType | StaffFilter)} />
          <FilterSelect label="Status" value={statusFilter} options={["All", ...staffStatuses]} onChange={(value) => setStatusFilter(value as StaffStatus | StaffFilter)} />
          <FilterSelect label="Shift Start" value={shiftFilter} options={["All", ...shiftStarts]} onChange={setShiftFilter} />
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
            <div className="flex items-center gap-2 font-semibold text-slate-700"><Clock3 size={15} /> Staffing by start time</div>
            <div className="mt-1">{staffingByStart}</div>
            {!hasCdlScheduleForDate(activeDate) && <div className="mt-1 text-slate-500">Loaded dates: {availableCdlScheduleDates.join(", ")}</div>}
          </div>
        </div>
      </Panel>

      <Panel className="overflow-hidden">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Employee</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Operation</th>
              <th className="px-4 py-3">Shift</th>
              <th className="px-4 py-3">Length</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Assigned Push</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredStaff.map((member) => (
              <tr key={member.id} className="bg-white">
                <td className="px-4 py-3"><div className="font-semibold text-ink">{member.name}</div><div className="text-xs text-slate-500">{member.id}</div></td>
                <td className="px-4 py-3 font-semibold text-slate-700">{member.location}</td>
                <td className="px-4 py-3 text-slate-700">{member.role}</td>
                <td className="px-4 py-3 text-slate-700 capitalize">{member.operationType}</td>
                <td className="px-4 py-3 text-slate-700">{member.shift.start} - {member.shift.end}</td>
                <td className="px-4 py-3 text-slate-700">{member.shift.lengthHours} hrs</td>
                <td className="px-4 py-3"><StatusSelect value={member.status} onChange={(status) => updateStatus(member.id, status)} /></td>
                <td className="px-4 py-3 text-slate-700">{member.assignedPush ?? "-"}</td>
                <td className="px-4 py-3 text-slate-500">{member.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}

function siteOptions(activeAirport: AirportCode) {
  return sampleAirportOptions.includes(activeAirport) ? sampleAirportOptions : [activeAirport, ...sampleAirportOptions];
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

function DateFilter({ value, onChange }: { value: string; onChange: (date: string) => void }) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
      Staffing Date
      <input
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-transparent text-sm font-semibold text-ink outline-none"
      />
    </label>
  );
}

function StatusSelect({ value, onChange }: { value: StaffStatus; onChange: (value: StaffStatus) => void }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value as StaffStatus)} className="w-full min-w-[130px] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100">
      {staffStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
    </select>
  );
}
