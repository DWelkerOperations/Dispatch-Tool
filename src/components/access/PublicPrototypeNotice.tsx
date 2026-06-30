import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ShieldAlert } from "lucide-react";

const NOTICE_STORAGE_KEY = "dispatch-tool-public-notice-acknowledged";

type PublicPrototypeNoticeProps = {
  children: ReactNode;
};

export function PublicPrototypeNotice({ children }: PublicPrototypeNoticeProps) {
  const [hasAcknowledged, setHasAcknowledged] = useState(false);

  useEffect(() => {
    setHasAcknowledged(window.localStorage.getItem(NOTICE_STORAGE_KEY) === "true");
  }, []);

  function handleContinue() {
    window.localStorage.setItem(NOTICE_STORAGE_KEY, "true");
    setHasAcknowledged(true);
  }

  if (hasAcknowledged) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-mist px-6 py-10">
      <main className="w-full max-w-[520px] rounded-[18px] border border-slate-200 bg-white p-7 shadow-soft">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <ShieldAlert className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-950">Public Prototype Notice</h1>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This static planning prototype does not provide authentication, authorization, or data protection. Use sample or approved non-sensitive data only.
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
          <p>Anyone with the site URL can inspect downloaded code and embedded data.</p>
          <p>Do not import or commit secrets, employee records, customer data, private schedules, or sensitive operational information.</p>
        </div>

        <button
          className="mt-5 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          type="button"
          onClick={handleContinue}
        >
          Continue with sample data
        </button>
      </main>
    </div>
  );
}
