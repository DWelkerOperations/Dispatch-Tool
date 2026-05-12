import type { OperationType } from "../../types/dispatch";

type OperationToggleProps = {
  value: OperationType;
  onChange: (value: OperationType) => void;
};

export function OperationToggle({ value, onChange }: OperationToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      {(["mainline", "express"] as OperationType[]).map((operation) => (
        <button
          key={operation}
          onClick={() => onChange(operation)}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold capitalize transition ${
            value === operation ? "bg-ink text-white" : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          {operation}
        </button>
      ))}
    </div>
  );
}
