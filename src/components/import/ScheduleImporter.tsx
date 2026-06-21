import { Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import type { FlightAssignment } from "../../types/dispatch";

type ScheduleImporterProps = {
  onImport: (flights: FlightAssignment[], fileName: string) => void;
};

export function ScheduleImporter({ onImport }: ScheduleImporterProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [importWarning, setImportWarning] = useState<string | null>(null);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setImportError(null);
      setImportWarning(null);
      const { parseScheduleFile } = await import("../../import/scheduleImport");
      const { flights, warnings } = await parseScheduleFile(file);
      onImport(flights, file.name);
      if (warnings.length > 0) {
        const visibleWarnings = warnings.slice(0, 2).join(" ");
        const remainingCount = warnings.length - 2;
        setImportWarning(`${flights.length} valid rows imported. Skipped ${warnings.length} row(s): ${visibleWarnings}${remainingCount > 0 ? ` ${remainingCount} more row(s) skipped.` : ""}`);
      }
    } catch (error) {
      setImportError(error instanceof Error ? error.message : "Could not read schedule file.");
      setImportWarning(null);
    } finally {
      event.target.value = "";
    }
  }

  return (
    <div className="flex items-center gap-3">
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
  );
}
