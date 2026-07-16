import { Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import { useMemo, useRef, useState } from "react";
import type { FlightAssignment } from "../../types/dispatch";
import { isVolareReferenceDateRequiredError, parseScheduleFile, type NormalizedScheduleRow, type ScheduleImportResult } from "../../import/scheduleImport";

type ScheduleImporterProps = {
  onImport: (flights: FlightAssignment[], fileName: string, selectedDate?: string) => void;
};

type PendingSchedule = ScheduleImportResult & {
  fileName: string;
};

export function ScheduleImporter({ onImport }: ScheduleImporterProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [importWarning, setImportWarning] = useState<string | null>(null);
  const [pendingSchedule, setPendingSchedule] = useState<PendingSchedule | null>(null);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [volareReferenceMonth, setVolareReferenceMonth] = useState("");
  const [volareMonthConfirmed, setVolareMonthConfirmed] = useState(false);
  const [isApplyingVolareMonth, setIsApplyingVolareMonth] = useState(false);

  const selectedSchedule = useMemo(() => {
    if (!pendingSchedule) return null;
    const date = selectedDate || pendingSchedule.availableDates[0] || "";
    const rows: NormalizedScheduleRow[] = [];
    const flights: FlightAssignment[] = [];

    pendingSchedule.normalizedRows.forEach((row, index) => {
      if (!date || row.departureDate === date) {
        rows.push(row);
        const flight = pendingSchedule.flights[index];
        if (flight) flights.push(flight);
      }
    });

    return { date, rows, flights };
  }, [pendingSchedule, selectedDate]);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setImportError(null);
      setImportWarning(null);
      setPendingSchedule(null);
      setPendingFile(file);
      setSelectedDate("");
      setVolareReferenceMonth("");
      setVolareMonthConfirmed(false);
      const result = await parseScheduleFile(file);
      preparePendingSchedule(result, file);
    } catch (error) {
      if (isVolareReferenceDateRequiredError(error)) {
        setImportError(null);
        setImportWarning("Volare actuals detected. Choose and confirm the report month before loading the schedule.");
      } else {
        setPendingFile(null);
        setImportError(error instanceof Error ? error.message : "Could not read schedule file.");
        setImportWarning(null);
      }
    } finally {
      event.target.value = "";
    }
  }

  function preparePendingSchedule(result: ScheduleImportResult, file: File) {
    setPendingSchedule({ ...result, fileName: file.name });
    setSelectedDate(defaultImportDate(result.availableDates));
    setImportWarning(importSummary(result));
    if (result.detectedFormat === "volare") {
      setVolareReferenceMonth(result.availableDates[0]?.slice(0, 7) ?? "");
      setVolareMonthConfirmed(false);
    } else {
      setPendingFile(null);
    }
  }

  async function applyVolareReferenceMonth() {
    if (!pendingFile || !/^\d{4}-\d{2}$/.test(volareReferenceMonth)) return;
    setIsApplyingVolareMonth(true);
    setImportError(null);
    try {
      const result = await parseScheduleFile(pendingFile, { referenceDate: `${volareReferenceMonth}-15` });
      setPendingSchedule({ ...result, fileName: pendingFile.name });
      setSelectedDate(defaultImportDate(result.availableDates));
      setImportWarning(importSummary(result));
      setVolareMonthConfirmed(true);
    } catch (error) {
      setVolareMonthConfirmed(false);
      setImportError(error instanceof Error ? error.message : "Could not apply the Volare report month.");
    } finally {
      setIsApplyingVolareMonth(false);
    }
  }

  function confirmImport() {
    if (!pendingSchedule || !selectedSchedule) return;
    onImport(selectedSchedule.flights, pendingSchedule.fileName, selectedSchedule.date);
    setImportWarning(`${selectedSchedule.flights.length} normalized row(s) loaded${selectedSchedule.date ? ` for ${formatDateForDisplay(selectedSchedule.date)}` : ""}.`);
    setPendingSchedule(null);
    setPendingFile(null);
    setSelectedDate("");
    setVolareReferenceMonth("");
    setVolareMonthConfirmed(false);
  }

  function cancelImport() {
    setPendingSchedule(null);
    setPendingFile(null);
    setSelectedDate("");
    setVolareReferenceMonth("");
    setVolareMonthConfirmed(false);
    setImportWarning(null);
    setImportError(null);
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Import Schedule
          <Upload size={17} />
        </button>
        <input ref={fileInputRef} type="file" accept=".xlsx,.xls" className="sr-only" onChange={handleFileChange} tabIndex={-1} />
        {importError && <span className="text-xs font-medium text-red-600">{importError}</span>}
        {!importError && importWarning && <span className="max-w-xl text-xs font-medium text-amber-700">{importWarning}</span>}
      </div>
      {pendingFile && !pendingSchedule && (
        <VolareMonthPrompt
          month={volareReferenceMonth}
          isApplying={isApplyingVolareMonth}
          onMonthChange={(month) => {
            setVolareReferenceMonth(month);
            setVolareMonthConfirmed(false);
          }}
          onApply={() => void applyVolareReferenceMonth()}
          onCancel={cancelImport}
        />
      )}
      {pendingSchedule && selectedSchedule && (
        <div className="mt-3 max-w-5xl rounded-xl border border-amber-200 bg-amber-50 p-3 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-ink">Review normalized schedule before loading</p>
              <p className="mt-1 text-xs text-slate-600">
                {pendingSchedule.fileName} · Format: {formatLabel(pendingSchedule.detectedFormat)} · {selectedSchedule.rows.length} selected · {pendingSchedule.normalizedRows.length} valid total · {pendingSchedule.skippedRowCount} skipped
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {pendingSchedule.availableDates.length > 1 && (
                <select
                  value={selectedSchedule.date}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  aria-label="Departure date"
                >
                  {pendingSchedule.availableDates.map((date) => (
                    <option key={date} value={date}>{formatDateForDisplay(date)}</option>
                  ))}
                </select>
              )}
              <button type="button" onClick={cancelImport} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50">
                Cancel
              </button>
              <button type="button" onClick={confirmImport} disabled={selectedSchedule.flights.length === 0 || (pendingSchedule.detectedFormat === "volare" && !volareMonthConfirmed)} className="rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300">
                Use This Schedule
              </button>
            </div>
          </div>
          {pendingSchedule.detectedFormat === "volare" && (
            <div className="mt-3">
              <VolareMonthPrompt
                month={volareReferenceMonth}
                confirmed={volareMonthConfirmed}
                isApplying={isApplyingVolareMonth}
                onMonthChange={(month) => {
                  setVolareReferenceMonth(month);
                  setVolareMonthConfirmed(false);
                }}
                onApply={() => void applyVolareReferenceMonth()}
              />
            </div>
          )}
          {pendingSchedule.warnings.length > 0 && (
            <div className="mt-3 rounded-lg border border-amber-200 bg-white/70 p-2 text-xs text-amber-800">
              {pendingSchedule.warnings.slice(0, 4).map((warning) => <div key={warning}>{warning}</div>)}
              {pendingSchedule.warnings.length > 4 && <div>{pendingSchedule.warnings.length - 4} more warning(s).</div>}
            </div>
          )}
          <NormalizedPreview rows={selectedSchedule.rows} />
        </div>
      )}
    </div>
  );
}

function VolareMonthPrompt({
  month,
  confirmed = false,
  isApplying,
  onMonthChange,
  onApply,
  onCancel,
}: {
  month: string;
  confirmed?: boolean;
  isApplying: boolean;
  onMonthChange: (month: string) => void;
  onApply: () => void;
  onCancel?: () => void;
}) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg border border-amber-300 bg-white px-3 py-3 text-xs text-slate-700 shadow-sm">
      <label className="flex items-center gap-2 font-semibold">
        Volare report month
        <input
          type="month"
          value={month}
          onChange={(event) => onMonthChange(event.target.value)}
          className="rounded-md border border-slate-200 bg-white px-2 py-1.5 font-semibold text-ink outline-none focus:border-pride-red focus:ring-2 focus:ring-red-100"
          aria-label="Volare report month"
        />
      </label>
      <button
        type="button"
        onClick={onApply}
        disabled={isApplying || !/^\d{4}-\d{2}$/.test(month)}
        className="rounded-md bg-pride-red px-3 py-1.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {isApplying ? "Applying..." : confirmed ? "Month confirmed" : "Apply report month"}
      </button>
      {confirmed ? (
        <span className="font-semibold text-emerald-700">Confirmed. Review the normalized dates below before loading.</span>
      ) : (
        <span className="text-amber-800">Required because the outbound-flight suffix contains only a day of month.</span>
      )}
      {onCancel && (
        <button type="button" onClick={onCancel} className="ml-auto rounded-md border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-50">
          Cancel
        </button>
      )}
    </div>
  );
}

function importSummary(result: ScheduleImportResult) {
  const warningText = result.warnings.length > 0
    ? ` ${result.warnings.length} warning(s): ${result.warnings.slice(0, 2).join(" ")}${result.warnings.length > 2 ? ` ${result.warnings.length - 2} more.` : ""}`
    : "";
  return `Detected ${formatLabel(result.detectedFormat)}. ${result.normalizedRows.length} valid row(s), ${result.skippedRowCount} skipped.${warningText}`;
}

function formatLabel(format: ScheduleImportResult["detectedFormat"]) {
  return {
    standard: "standard airline schedule",
    "combined-flight": "combined flight schedule",
    "flight-overview": "flight overview schedule",
    "operation-plan": "operation plan schedule",
    "ua-turns": "UA turns report",
    volare: "Volare actuals report",
  }[format];
}

function formatDateForDisplay(date: string) {
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;
  return `${month}/${day}/${year}`;
}

function defaultImportDate(availableDates: string[]) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
  return availableDates.includes(yesterdayKey) ? yesterdayKey : availableDates[0] ?? "";
}

function NormalizedPreview({ rows }: { rows: NormalizedScheduleRow[] }) {
  const previewRows = rows.slice(0, 8);

  return (
    <div className="mt-3 max-h-64 overflow-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left text-xs">
        <thead className="sticky top-0 bg-slate-50 text-slate-500">
          <tr>
            <th className="border-b border-slate-200 px-3 py-2">Row</th>
            <th className="border-b border-slate-200 px-3 py-2">Date</th>
            <th className="border-b border-slate-200 px-3 py-2">Flight</th>
            <th className="border-b border-slate-200 px-3 py-2">ETD</th>
            <th className="border-b border-slate-200 px-3 py-2">Aircraft</th>
            <th className="border-b border-slate-200 px-3 py-2">Site</th>
            <th className="border-b border-slate-200 px-3 py-2">Destination</th>
          </tr>
        </thead>
        <tbody>
          {previewRows.map((row) => (
            <tr key={`${row.sourceRowNumber}-${row.airline}-${row.flightNumber}`} className="odd:bg-white even:bg-slate-50/60">
              <td className="border-b border-slate-100 px-3 py-2 text-slate-500">{row.sourceRowNumber}</td>
              <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{row.departureDate}</td>
              <td className="border-b border-slate-100 px-3 py-2 font-semibold text-ink">{row.airline}{row.flightNumber}</td>
              <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{row.departureTime}</td>
              <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{row.aircraftType}</td>
              <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{row.originSite}</td>
              <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{row.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length > previewRows.length && <div className="px-3 py-2 text-xs font-medium text-slate-500">{rows.length - previewRows.length} more normalized row(s) not shown.</div>}
    </div>
  );
}
