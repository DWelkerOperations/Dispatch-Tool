import type { ServiceType } from "../../types/dispatch";
import { serviceLabels, serviceStyle } from "./timelineUtils";

const serviceTypes: ServiceType[] = ["load-ua", "load-other", "positioning", "other-work", "break", "unplanned"];

export function TimelineLegend() {
  return (
    <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3">
      <div className="flex flex-wrap items-center gap-4">
        {serviceTypes.map((serviceType) => <div key={serviceType} className="flex items-center gap-2 text-xs font-medium text-slate-600"><span className={`h-3 w-3 rounded-full border ${serviceStyle(serviceType)}`} />{serviceLabels[serviceType]}</div>)}
      </div>
      <div className="text-xs text-slate-500">Drag pucks vertically to reassign drivers. Times stay fixed in this prototype.</div>
    </div>
  );
}
