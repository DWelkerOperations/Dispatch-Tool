import { FormEvent, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { LockKeyhole } from "lucide-react";

const ACCESS_STORAGE_KEY = "dispatch-tool-access-granted";
const ACCESS_PASSWORD = "SkyChefs2026";

type PasswordGateProps = {
  children: ReactNode;
};

export function PasswordGate({ children }: PasswordGateProps) {
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setHasAccess(window.localStorage.getItem(ACCESS_STORAGE_KEY) === "true");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === ACCESS_PASSWORD) {
      window.localStorage.setItem(ACCESS_STORAGE_KEY, "true");
      setHasAccess(true);
      setPassword("");
      setError("");
      return;
    }

    setError("That password did not work. Please check it and try again.");
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-mist px-6 py-10">
      <main className="w-full max-w-[420px] rounded-[18px] border border-slate-200 bg-white p-7 shadow-soft">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <LockKeyhole className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-950">Resource Planning Access</h1>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Enter the shared access password to open the planning workspace.
            </p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-700" htmlFor="resource-planning-password">
            Password
          </label>
          <input
            id="resource-planning-password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-200"
            type="password"
            value={password}
            autoComplete="current-password"
            autoFocus
            onChange={(event) => {
              setPassword(event.target.value);
              if (error) setError("");
            }}
          />
          {error && <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
          <button
            className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
            type="submit"
          >
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}
