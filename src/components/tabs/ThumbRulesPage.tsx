import { useEffect, useMemo, useState } from "react";
import { Clock3, MapPinned, Plane, RotateCcw, Save, Settings2, SlidersHorizontal, Unlock } from "lucide-react";
import { openRuleQuestions, ruleItemsFromPlanningRules } from "../../data/mockRules";
import { sampleAirportOptions } from "../../data/airports";
import { aircraftInterpretations } from "../../import/aircraftMap";
import type { AircraftCategory, PlanningRules, SitePlanningRules } from "../../types/dispatch";
import { Badge } from "../ui/Badge";
import { Panel } from "../ui/Panel";

type ThumbRulesPageProps = {
  rules: PlanningRules;
  onRulesChange: (rules: PlanningRules) => void;
};

type RuleSection = "task-times" | "sites" | "aircraft" | "settings";

const sectionTabs: Array<{ id: RuleSection; label: string; icon: typeof Clock3 }> = [
  { id: "task-times", label: "Task Times", icon: Clock3 },
  { id: "sites", label: "Drive Times", icon: MapPinned },
  { id: "aircraft", label: "Aircraft", icon: Plane },
  { id: "settings", label: "Settings", icon: Settings2 },
];

export function ThumbRulesPage({ rules, onRulesChange }: ThumbRulesPageProps) {
  const [activeSection, setActiveSection] = useState<RuleSection>("sites");
  const [selectedSite, setSelectedSite] = useState("ORD");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [draftRules, setDraftRules] = useState<PlanningRules>(rules);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const displayedRules = useMemo(() => ruleItemsFromPlanningRules(rules), [rules]);
  const siteCodes = useMemo(
    () => Array.from(new Set([...sampleAirportOptions, ...Object.keys(draftRules.siteOverrides ?? {})])).sort(),
    [draftRules.siteOverrides],
  );
  const hasPendingChanges = useMemo(() => JSON.stringify(draftRules) !== JSON.stringify(rules), [draftRules, rules]);

  useEffect(() => {
    if (!isUnlocked) setDraftRules(rules);
  }, [isUnlocked, rules]);

  function handleUnlock() {
    setDraftRules(rules);
    setIsUnlocked(true);
    setSaveMessage(null);
    setSaveError(null);
  }

  function handleCancelRules() {
    setDraftRules(rules);
    setSaveMessage(null);
    setSaveError(null);
  }

  function handleSaveRules() {
    const validation = validateRules(draftRules);
    if (!validation.ok) {
      setSaveError(validation.error);
      setSaveMessage(null);
      return;
    }

    onRulesChange(draftRules);
    setSaveError(null);
    setSaveMessage("V2 rule updates saved for this session. Rebuild guidance to apply them.");
  }

  function updateRule<Key extends keyof PlanningRules>(key: Key, value: PlanningRules[Key]) {
    setDraftRules((current) => ({ ...current, [key]: value }));
    setSaveMessage(null);
    setSaveError(null);
  }

  function updateServiceTime(category: AircraftCategory, value: number) {
    setDraftRules((current) => ({
      ...current,
      serviceMinutesByAircraftCategory: {
        ...current.serviceMinutesByAircraftCategory,
        [category]: value,
      },
    }));
    setSaveMessage(null);
    setSaveError(null);
  }

  function updateSelectedSiteRule<Key extends keyof SitePlanningRules>(key: Key, value: SitePlanningRules[Key]) {
    setDraftRules((current) => ({
      ...current,
      siteOverrides: {
        ...current.siteOverrides,
        [selectedSite]: {
          ...(current.siteOverrides?.[selectedSite] ?? {}),
          [key]: value,
        },
      },
    }));
    setSaveMessage(null);
    setSaveError(null);
  }

  const selectedSiteRules = draftRules.siteOverrides?.[selectedSite] ?? {};

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Thumb Rules</h2>
            <Badge tone="blue">V2</Badge>
          </div>
          <p className="mt-1 text-sm text-slate-500">Rule controls for task timing, site drive assumptions, aircraft service standards, and scheduler limits.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {!isUnlocked ? (
            <button type="button" onClick={handleUnlock} className="inline-flex items-center gap-2 rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              <Unlock size={16} />
              Edit Rules
            </button>
          ) : (
            <>
              <button type="button" onClick={handleSaveRules} disabled={!hasPendingChanges} className="inline-flex items-center gap-2 rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300">
                <Save size={16} />
                Save
              </button>
              <button type="button" onClick={handleCancelRules} disabled={!hasPendingChanges} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-300">
                <RotateCcw size={16} />
                Revert
              </button>
            </>
          )}
        </div>
      </div>

      {(saveMessage || saveError) && (
        <div className={`rounded-lg border px-4 py-3 text-sm font-semibold ${saveError ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
          {saveError ?? saveMessage}
        </div>
      )}

      <Panel className="overflow-hidden">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-2">
          {sectionTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSection(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-white text-blue-700 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-white/70"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="p-5">
          {activeSection === "task-times" && (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <NumberField label="Block size" suffix="min" value={draftRules.blockMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("blockMinutes", value)} />
              <NumberField label="Target complete before departure" suffix="min" value={draftRules.targetCompletionBeforeDepartureMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("targetCompletionBeforeDepartureMinutes", value)} />
              <NumberField label="Hard minimum before departure" suffix="min" value={draftRules.hardMinimumCompletionBeforeDepartureMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("hardMinimumCompletionBeforeDepartureMinutes", value)} />
              <NumberField label="Earliest catering before departure" suffix="min" value={draftRules.earliestCateringBeforeDepartureMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("earliestCateringBeforeDepartureMinutes", value)} />
              <NumberField label="Max kitchen departure before departure" suffix="min" value={draftRules.maxKitchenDepartureBeforeDepartureMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("maxKitchenDepartureBeforeDepartureMinutes", value)} />
              <NumberField label="Load / dock prep" suffix="min" value={draftRules.firstAircraftSetupMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("firstAircraftSetupMinutes", value)} />
              <NumberField label="Turns inbound ready buffer" suffix="min" value={draftRules.turnsInboundReadyBufferMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("turnsInboundReadyBufferMinutes", value)} />
            </div>
          )}

          {activeSection === "sites" && (
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <NumberField label="Mainline drive out" suffix="min" value={draftRules.mainlineDriveOutMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("mainlineDriveOutMinutes", value)} />
                <NumberField label="Mainline return" suffix="min" value={draftRules.mainlineReturnMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("mainlineReturnMinutes", value)} />
                <NumberField label="Express drive out" suffix="min" value={draftRules.expressDriveOutMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("expressDriveOutMinutes", value)} />
                <NumberField label="Express return" suffix="min" value={draftRules.expressReturnMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("expressReturnMinutes", value)} />
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <label className="block min-w-[180px] text-sm font-semibold text-slate-700">
                    Site override
                    <select
                      value={selectedSite}
                      onChange={(event) => setSelectedSite(event.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                    >
                      {siteCodes.map((site) => <option key={site} value={site}>{site}</option>)}
                    </select>
                  </label>
                  <Badge tone={draftRules.siteOverrides?.[selectedSite] ? "green" : "gray"}>{draftRules.siteOverrides?.[selectedSite] ? "Configured" : "Uses global defaults"}</Badge>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <NumberField label="Drive out" suffix="min" value={selectedSiteRules.driveOutMinutes ?? draftRules.mainlineDriveOutMinutes} disabled={!isUnlocked} onChange={(value) => updateSelectedSiteRule("driveOutMinutes", value)} />
                  <NumberField label="Return" suffix="min" value={selectedSiteRules.returnMinutes ?? draftRules.mainlineReturnMinutes} disabled={!isUnlocked} onChange={(value) => updateSelectedSiteRule("returnMinutes", value)} />
                  <NumberField label="Gate to gate move" suffix="min" value={selectedSiteRules.gateToGateMoveMinutes ?? draftRules.gateToGateMoveMinutes} disabled={!isUnlocked} onChange={(value) => updateSelectedSiteRule("gateToGateMoveMinutes", value)} />
                  <NumberField label="Seal break" suffix="min" value={selectedSiteRules.sealBreakMinutes ?? 0} disabled={!isUnlocked} min={0} onChange={(value) => updateSelectedSiteRule("sealBreakMinutes", value)} />
                  <NumberField label="Site max flights per push" value={selectedSiteRules.maxFlightsPerPush ?? draftRules.maxFlightsPerPush} disabled={!isUnlocked} onChange={(value) => updateSelectedSiteRule("maxFlightsPerPush", value)} />
                  <NumberField label="Site group window" suffix="min" value={selectedSiteRules.groupWindowMinutes ?? draftRules.groupWindowMinutes} disabled={!isUnlocked} onChange={(value) => updateSelectedSiteRule("groupWindowMinutes", value)} />
                  <NumberField label="Site max workload" value={selectedSiteRules.maxWorkloadUnitsPerPush ?? draftRules.maxWorkloadUnitsPerPush} disabled={!isUnlocked} step={0.5} onChange={(value) => updateSelectedSiteRule("maxWorkloadUnitsPerPush", value)} />
                  <NumberField label="Dock to final service cap" suffix="min" value={selectedSiteRules.maxDockDepartureToFinalServiceEndMinutes ?? draftRules.earliestCateringBeforeDepartureMinutes - draftRules.firstAircraftSetupMinutes} disabled={!isUnlocked} onChange={(value) => updateSelectedSiteRule("maxDockDepartureToFinalServiceEndMinutes", value)} />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <BooleanField label="Shared resource pool" checked={selectedSiteRules.sharedResourcePool ?? false} disabled={!isUnlocked} onChange={(checked) => updateSelectedSiteRule("sharedResourcePool", checked)} />
                  <BooleanField label="Allow shift stretch" checked={selectedSiteRules.allowShiftStretch ?? false} disabled={!isUnlocked} onChange={(checked) => updateSelectedSiteRule("allowShiftStretch", checked)} />
                  <BooleanField label="Separate UA and other airlines" checked={selectedSiteRules.separateUnitedAndOtherAirlines ?? false} disabled={!isUnlocked} onChange={(checked) => updateSelectedSiteRule("separateUnitedAndOtherAirlines", checked)} />
                </div>
              </div>
            </div>
          )}

          {activeSection === "aircraft" && (
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <NumberField label="Regional service" suffix="min" value={draftRules.serviceMinutesByAircraftCategory.regional} disabled={!isUnlocked} onChange={(value) => updateServiceTime("regional", value)} />
                <NumberField label="Narrowbody service" suffix="min" value={draftRules.serviceMinutesByAircraftCategory.narrowbody} disabled={!isUnlocked} onChange={(value) => updateServiceTime("narrowbody", value)} />
                <NumberField label="Widebody service" suffix="min" value={draftRules.serviceMinutesByAircraftCategory.widebody} disabled={!isUnlocked} onChange={(value) => updateServiceTime("widebody", value)} />
                <NumberField label="Unknown aircraft service" suffix="min" value={draftRules.serviceMinutesByAircraftCategory.unknown} disabled={!isUnlocked} onChange={(value) => updateServiceTime("unknown", value)} />
              </div>
              <AircraftInterpretationTable />
            </div>
          )}

          {activeSection === "settings" && (
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <NumberField label="Max flights per push" value={draftRules.maxFlightsPerPush} disabled={!isUnlocked} onChange={(value) => updateRule("maxFlightsPerPush", value)} />
                <NumberField label="Group window" suffix="min" value={draftRules.groupWindowMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("groupWindowMinutes", value)} />
                <NumberField label="Max workload per push" value={draftRules.maxWorkloadUnitsPerPush} disabled={!isUnlocked} step={0.5} onChange={(value) => updateRule("maxWorkloadUnitsPerPush", value)} />
                <NumberField label="Standard shift" suffix="hr" value={draftRules.standardShiftHours} disabled={!isUnlocked} step={0.5} onChange={(value) => updateRule("standardShiftHours", value)} />
                <NumberField label="Lunch duration" suffix="min" value={draftRules.lunchMinutes} disabled={!isUnlocked} onChange={(value) => updateRule("lunchMinutes", value)} />
                <NumberField label="Ideal lunch before" suffix="hr" value={draftRules.idealLunchBeforeHour} disabled={!isUnlocked} step={0.5} onChange={(value) => updateRule("idealLunchBeforeHour", value)} />
              </div>
              <BooleanField label="Mainline helper required" checked={draftRules.helperRequiredForMainline} disabled={!isUnlocked} onChange={(checked) => updateRule("helperRequiredForMainline", checked)} />
            </div>
          )}
        </div>
      </Panel>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <Panel className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
            <div>
              <h3 className="text-base font-semibold text-ink">Rule Summary</h3>
              <p className="mt-1 text-sm text-slate-500">Current saved assumptions used by regenerated plans.</p>
            </div>
            <Badge tone="gray">{displayedRules.length} rules</Badge>
          </div>
          <div className="max-h-[520px] overflow-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="sticky top-0 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr><th className="px-5 py-3">Category</th><th className="px-5 py-3">Setting</th><th className="px-5 py-3">Current standard</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedRules.map((rule) => (
                  <tr key={rule.id}>
                    <td className="px-5 py-4"><Badge tone="blue">{rule.category}</Badge></td>
                    <td className="px-5 py-4 font-semibold text-ink">{rule.setting}</td>
                    <td className="px-5 py-4 text-slate-700">{rule.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
            <div>
              <h3 className="text-base font-semibold text-ink">Open Questions</h3>
              <p className="mt-1 text-sm text-slate-500">Operational answers still needed for future rule authority.</p>
            </div>
            <Badge tone="orange">{openRuleQuestions.length} unresolved</Badge>
          </div>
          <div className="divide-y divide-slate-100">
            {openRuleQuestions.map((question) => (
              <div key={question.id} className="space-y-2 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge tone="orange">{question.category}</Badge>
                  <span className="text-xs font-semibold text-slate-400">{question.id.toUpperCase()}</span>
                </div>
                <div className="font-semibold text-ink">{question.setting}</div>
                <p className="text-sm text-slate-600">{question.value}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  disabled: boolean;
  suffix?: string;
  min?: number;
  step?: number;
};

function NumberField({ label, value, onChange, disabled, suffix, min = 1, step = 1 }: NumberFieldProps) {
  return (
    <label className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        <SlidersHorizontal size={14} className="shrink-0" />
        <span className="truncate">{label}</span>
      </span>
      <span className="flex shrink-0 items-center gap-2">
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-8 w-20 rounded-lg border border-slate-200 bg-white px-2 text-sm font-semibold text-ink shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
        />
        {suffix && <span className="w-7 text-xs font-semibold text-slate-500">{suffix}</span>}
      </span>
    </label>
  );
}

type BooleanFieldProps = {
  label: string;
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
};

function BooleanField({ label, checked, disabled, onChange }: BooleanFieldProps) {
  return (
    <label className="flex min-h-[54px] items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
      />
    </label>
  );
}

function AircraftInterpretationTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3">Schedule input</th>
            <th className="px-4 py-3">Standard aircraft name</th>
            <th className="px-4 py-3">Task category</th>
            <th className="px-4 py-3">Preferred on</th>
            <th className="px-4 py-3">Service time</th>
            <th className="px-4 py-3">Truck rule</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {aircraftInterpretations.map((aircraft) => (
            <tr key={aircraft.inputName} className="bg-white">
              <td className="px-4 py-3 font-semibold text-ink">{aircraft.inputName}</td>
              <td className="px-4 py-3 text-slate-700">{aircraft.standardName}</td>
              <td className="px-4 py-3"><Badge tone={categoryTone(aircraft.category)}>{categoryLabel[aircraft.category]}</Badge></td>
              <td className="px-4 py-3 font-semibold text-slate-700">D-{aircraft.preferredOnMinutes}</td>
              <td className="px-4 py-3 font-semibold text-slate-700">{aircraft.serviceMinutes} min</td>
              <td className="px-4 py-3 text-slate-700">{aircraft.truckRule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const categoryLabel: Record<AircraftCategory, string> = {
  regional: "Regional",
  narrowbody: "Narrowbody",
  widebody: "Widebody",
  unknown: "Unknown",
};

function categoryTone(category: AircraftCategory) {
  if (category === "regional") return "green";
  if (category === "narrowbody") return "blue";
  if (category === "widebody") return "orange";
  return "red";
}

function validateRules(rules: PlanningRules): { ok: true } | { ok: false; error: string } {
  const positiveValues: Array<[string, number]> = [
    ["Block size", rules.blockMinutes],
    ["Target completion", rules.targetCompletionBeforeDepartureMinutes],
    ["Hard minimum", rules.hardMinimumCompletionBeforeDepartureMinutes],
    ["Earliest catering", rules.earliestCateringBeforeDepartureMinutes],
    ["Latest kitchen departure", rules.maxKitchenDepartureBeforeDepartureMinutes],
    ["Mainline drive out", rules.mainlineDriveOutMinutes],
    ["Mainline return", rules.mainlineReturnMinutes],
    ["Express drive out", rules.expressDriveOutMinutes],
    ["Express return", rules.expressReturnMinutes],
    ["Load / dock prep", rules.firstAircraftSetupMinutes],
    ["Turns inbound ready buffer", rules.turnsInboundReadyBufferMinutes],
    ["Gate to gate move", rules.gateToGateMoveMinutes],
    ["Max flights per push", rules.maxFlightsPerPush],
    ["Group window", rules.groupWindowMinutes],
    ["Max workload", rules.maxWorkloadUnitsPerPush],
    ["Standard shift", rules.standardShiftHours],
    ["Lunch duration", rules.lunchMinutes],
    ["Ideal lunch before", rules.idealLunchBeforeHour],
    ["Regional service", rules.serviceMinutesByAircraftCategory.regional],
    ["Narrowbody service", rules.serviceMinutesByAircraftCategory.narrowbody],
    ["Widebody service", rules.serviceMinutesByAircraftCategory.widebody],
    ["Unknown aircraft service", rules.serviceMinutesByAircraftCategory.unknown],
  ];
  const invalidValue = positiveValues.find(([, value]) => !Number.isFinite(value) || value <= 0);
  if (invalidValue) return { ok: false, error: `${invalidValue[0]} needs a value greater than zero.` };

  for (const [site, siteRules] of Object.entries(rules.siteOverrides ?? {})) {
    const optionalPositiveValues: Array<[string, number | undefined]> = [
      ["drive out", siteRules.driveOutMinutes],
      ["return", siteRules.returnMinutes],
      ["gate to gate move", siteRules.gateToGateMoveMinutes],
      ["site max flights", siteRules.maxFlightsPerPush],
      ["site group window", siteRules.groupWindowMinutes],
      ["site max workload", siteRules.maxWorkloadUnitsPerPush],
      ["dock to final service cap", siteRules.maxDockDepartureToFinalServiceEndMinutes],
    ];
    const invalidSiteValue = optionalPositiveValues.find(([, value]) => value !== undefined && (!Number.isFinite(value) || value <= 0));
    if (invalidSiteValue) return { ok: false, error: `${site} ${invalidSiteValue[0]} needs a value greater than zero.` };
    if (siteRules.sealBreakMinutes !== undefined && (!Number.isFinite(siteRules.sealBreakMinutes) || siteRules.sealBreakMinutes < 0)) {
      return { ok: false, error: `${site} seal break needs a value of zero or greater.` };
    }
  }

  return { ok: true };
}
