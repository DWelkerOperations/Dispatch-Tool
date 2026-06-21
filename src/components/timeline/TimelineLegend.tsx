import type { ServiceType } from "../../types/dispatch";
import { serviceLabels, serviceStyle } from "./timelineUtils";

const serviceTypes: ServiceType[] = ["load-ua", "load-other", "intl-strip", "positioning", "other-work", "break", "unplanned"];

export function TimelineLegend() {
  return (
    <div className="flex items-center justify-between gap-6 border-t border-slate-200 bg-white px-6 py-3">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border border-blue-500 bg-blue-500" />
          Domestic flight
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border border-green-500 bg-green-500" />
          International flight
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border border-blue-300 bg-blue-50" />
          Normal push
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border border-slate-300 bg-[repeating-linear-gradient(135deg,rgba(148,163,184,0.45)_0,rgba(148,163,184,0.45)_3px,transparent_3px,transparent_6px)]" />
          Pre-load
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border-2 border-amber-400 bg-blue-50" />
          Watch
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border-2 border-red-500 bg-blue-50" />
          Urgent
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border-2 border-red-700 bg-red-50" />
          Critical
        </div>
        {serviceTypes.map((serviceType) => (
          <div key={serviceType} className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <span className={`h-3 w-3 rounded-full border ${serviceStyle(serviceType)}`} />
            {serviceLabels[serviceType]}
          </div>
        ))}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border border-emerald-200 bg-emerald-50" />
          Shift span
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border border-red-300 bg-red-100" />
          Overflow risk
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded border-2 border-blue-500 bg-blue-100" />
          Dispatcher edit
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="h-3 w-7 rounded-full border border-slate-300 bg-white" />
          Scheduled lunch
        </div>
      </div>
      <div className="shrink-0 text-xs font-medium text-slate-500">Sample plan · morning bank</div>
    </div>
  );
}
