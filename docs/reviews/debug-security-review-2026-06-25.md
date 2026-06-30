# Dispatch Tool Debug & Security Review

## Executive Summary

* Overall status: **Red**
* Top 5 risks
  * Hardcoded browser-side access password in `src/components/access/PasswordGate.tsx:6`; the deployed static bundle cannot keep this private.
  * Hardcoded browser-side rule-edit password in `src/components/tabs/ThumbRulesPage.tsx:29`; any reviewer with dev tools can bypass it.
  * `xlsx@0.18.5` has two high-severity published advisories and is used to parse untrusted uploaded workbooks in the browser.
  * Large embedded operational/sample data is shipped in the browser bundle, including `src/data/ordJuneTripmasterFlights.ts` at about 14 MB source and an `index` build chunk of about 10.8 MB minified.
  * Rendered browser smoke testing could not be completed in the available automation path; the in-app browser crashed and standalone Playwright is not installed.
* Recommended next actions
  * Treat the GitHub Pages app as public. Remove or replace browser-side passwords before sharing any sensitive data.
  * Replace or isolate `xlsx`; if retaining it, add file size limits and document accepted workbook sources.
  * Move large/reference schedules out of the app bundle or gate them behind a non-static, authenticated data source before real data use.
  * Add a lint script and CI audit step.
  * Add a second-pass operational review of dispatch assumptions with Drew and an operations lead before using recommendations in live work.

## Environment

* Branch: `main`
* Commit: `448faad256e0b54336bb2f1d5d21bb7c2c800cf6 Tighten ORD planning driver allocation`
* Node/npm versions
  * Default shell: `node` and `pnpm` were not on `PATH`.
  * Bundled Node used for checks: `v24.14.0`
  * Bundled pnpm used for checks: `11.7.0`
  * Bundled npm executable was not present at the expected runtime path.
* Commands run
  * `git status --short --branch`
  * `git log -1 --oneline --decorate`
  * `node --version && npm --version && pnpm --version`
  * `pnpm install --frozen-lockfile`
  * `pnpm typecheck`
  * `pnpm test`
  * `pnpm build`
  * `pnpm lint`
  * `pnpm audit --prod`
  * `rg` searches for secrets, storage, import/export, console/debug markers, and external integrations
  * `curl -I http://127.0.0.1:5174/`
  * In-app browser smoke attempt against `http://127.0.0.1:5174/`

## Build/Test Results

| Command | Result | Relevant output |
| --- | --- | --- |
| `node --version && npm --version && pnpm --version` | Fail in default shell | `node: command not found`; `pnpm: command not found` |
| `pnpm install --frozen-lockfile` with bundled runtime path | Pass | `Already up to date` |
| `pnpm typecheck` without adding bundled Node to `PATH` | Fail | `node_modules/.bin/tsc: line 20: exec: node: not found` |
| `PATH=<bundled node/bin>:<bundled bin>:$PATH pnpm typecheck` | Pass | `tsc` completed |
| `PATH=<bundled node/bin>:<bundled bin>:$PATH pnpm test` | Pass | 21 tests, 2 suites, 21 pass, 0 fail |
| `PATH=<bundled node/bin>:<bundled bin>:$PATH pnpm build` | Pass with warning | Vite built successfully; warning: chunks larger than 500 kB. Largest chunk: `dist/assets/index-48219d04.js` at `10,827.16 kB`, gzip `774.06 kB`; `xlsx` chunk `429.67 kB`, gzip `143.27 kB` |
| `PATH=<bundled node/bin>:<bundled bin>:$PATH pnpm lint` | Fail | `Command "lint" not found` |
| `pnpm audit --prod` | Fail | 2 high vulnerabilities in `xlsx`: prototype pollution and ReDoS |
| `PATH=<bundled node/bin>:<bundled bin>:$PATH pnpm dev --host 127.0.0.1` | Pass / server started | Port 5173 was in use; Vite served at `http://127.0.0.1:5174/` |
| `curl -I http://127.0.0.1:5174/` | Pass | HTTP 200 |
| In-app browser smoke test | Blocked | Browser tab crashed before local page loaded. Standalone Playwright was unavailable in bundled runtime. |

## Architecture Map

The app is a frontend-only Vite + React + TypeScript + Tailwind CSS prototype. Package metadata and scripts live in `package.json`; Vite config is in `vite.config.ts`; deployment is GitHub Pages via `.github/workflows/deploy-pages.yml`.

Key entry points:

* `src/main.tsx`: mounts React and wraps the app in `PasswordGate`.
* `src/App.tsx`: top-level state coordinator for tabs, active schedules, active rules, selected dates, operation views, and planning results.
* `src/components/layout/*`: shell, sidebar, top bar, schedule importer entry.
* `src/components/tabs/*`: Resource Guide, Planning Tool, Dispatch Tool, Staffing, Fleet, Exceptions, Tour Sheet, Dashboard, Thumb Rules.
* `src/engine/scheduler.ts`: core pairing, risk, resource assignment, rejection, dispatch and planning schedule logic.
* `src/import/scheduleImport.ts`: workbook parsing and normalization.
* `src/export/resourceGuideExport.ts`: Excel export.
* `src/data/*`: embedded sample/reference schedules, staffing, fleet, airport, and planning-rule data.

Data flow:

* Embedded default ORD schedule initializes `App` state from `src/data/ordJuneTripmasterFlights.ts`.
* Users can import `.xlsx` or `.xls` files through `ScheduleImporter`; parsing happens entirely in browser memory via `xlsx`.
* Imported/embedded `FlightAssignment[]` data flows into `PlanningToolPage`.
* `PlanningToolPage` creates synthetic planning resources, calls `createPlanningSchedule`, then applies quality filters such as critical-pairing and unassigned-push rejection.
* `DispatchToolPage` can load a planning result or rebuild pairings from available driver/helper/truck counts with `createDispatchSchedule`.
* Rule edits are session-only React state changes. There is no backend persistence.

Integrations:

* No backend, database, API routes, CORS config, server storage, Supabase/Firebase/S3, or network `fetch` usage was found.
* External libraries include React, Vite, Tailwind, `@dnd-kit`, `lucide-react`, and `xlsx`.
* Deployment target is GitHub Pages static hosting with base path `/Dispatch-Tool/` when `GITHUB_PAGES=true`.

## Security Findings

### Finding S1: Browser bundle contains the shared access password

* Severity: **High**
* File/location: `src/components/access/PasswordGate.tsx:5-6`, `src/components/access/PasswordGate.tsx:17-25`, `src/main.tsx:4-11`
* Evidence: `PasswordGate` defines a hardcoded access password constant, checks it in client-side React code, and stores successful access in `localStorage` under `dispatch-tool-access-granted`.
* Risk: This is access friction, not authentication. Anyone with the static bundle or browser dev tools can recover or bypass the password. Any real company, customer, employee, or flight data in the bundle should be considered public.
* Recommended fix: Keep README's warning, but do not use this gate for sensitive data. For real sharing, move behind real authentication/authorization on a backend or private hosting layer. If the current shared password has been distributed as if private, rotate it and remove it from browser code.

### Finding S2: Thumb-rule edit lock uses a hardcoded browser-side password

* Severity: **Medium**
* File/location: `src/components/tabs/ThumbRulesPage.tsx:19-35`
* Evidence: Rule editing unlocks when the entered value matches a hardcoded literal in client-side code.
* Risk: Users can bypass the lock or directly mutate state through dev tools. Session-only edits can produce changed planning output without audit identity, authorization, or durable record.
* Recommended fix: Treat this as a UI guard only. For authoritative rule editing, use authenticated roles, server-side validation, audit logging, and a rule version/review process.

### Finding S3: Vulnerable workbook parser processes user-selected files

* Severity: **High**
* File/location: `package.json:19`, `src/import/scheduleImport.ts:195-201`, `src/export/resourceGuideExport.ts:28-109`
* Evidence: `pnpm audit --prod` reports two high-severity advisories for `xlsx@0.18.5`: prototype pollution and ReDoS. The app uses `XLSX.read` on user-selected workbook bytes and `XLSX.writeFile` for export.
* Risk: Malicious or malformed workbook files may cause denial of service or exploit known parser weaknesses. Because parsing is in the browser, the primary immediate risk is client-side compromise/hang, but this becomes higher if parsing moves server-side later.
* Recommended fix: Evaluate replacing `xlsx` with a maintained parser or upgrade path. Add file size limits, accepted MIME checks, clear trusted-source guidance, and parser error boundaries. Add dependency audit to CI.

### Finding S4: Sensitive operational/sample data is bundled into public static assets

* Severity: **High**
* File/location: `src/data/ordJuneTripmasterFlights.ts:1`, `src/data/ordCdlDrivers.ts:1`, `src/data/ordMay14Flights.ts:1`, `src/data/pdxJune11Flights.ts:1`, `README.md:91-93`
* Evidence: Large reference schedules and CDL/staffing-like data are tracked in `src/data`; `src/data/ordJuneTripmasterFlights.ts` is about 14 MB. README correctly warns not to commit real staffing, customer, schedule, or operational data.
* Risk: Every static bundle user can download embedded data. If any of these files contain real employee, customer, airline, or operationally sensitive information, Git history and deployed assets may already disclose it.
* Recommended fix: Confirm data classification. If any data is real or sensitive, remove from repository history as appropriate, rotate any exposed operational details if applicable, and replace with synthetic fixtures. Future real data should live behind authenticated access controls, not in static source.

### Finding S5: Access state persists in localStorage without expiry

* Severity: **Low**
* File/location: `src/components/access/PasswordGate.tsx:17-25`
* Evidence: Successful access stores `"true"` in local storage with no expiry or user-specific binding.
* Risk: Shared machines or reviewer devices remain unlocked indefinitely. This matters if users incorrectly believe the page is private.
* Recommended fix: If keeping a lightweight gate, add a clear logout/reset control and optional expiry. Do not treat it as a security boundary.

### Finding S6: Development server allows all hosts

* Severity: **Low**
* File/location: `vite.config.ts:31-33`
* Evidence: `server.allowedHosts` is set to `true`.
* Risk: In local development, this weakens host-header protections. It is not used by the static GitHub Pages deployment, but can matter if a developer exposes the dev server on a network.
* Recommended fix: Restrict dev host settings to the needed local hostnames unless there is a concrete reason to allow all.

## Debug/Reliability Findings

### Finding D1: Default local shell lacks required Node/pnpm commands

* Severity: **Medium**
* File/location: Environment/setup; `README.md:96-102`
* Evidence: `node --version` and `pnpm install --frozen-lockfile` failed in the default shell with command-not-found errors. Checks passed only after explicitly prepending the bundled Node/pnpm paths.
* Risk: A new reviewer following README may be blocked or get inconsistent results unless their machine already has Node and pnpm installed.
* Recommended fix: Document required Node and pnpm versions. Consider Volta, `.nvmrc`, Corepack instructions, or a setup note for Codex bundled runtimes.

### Finding D2: No lint command is configured

* Severity: **Medium**
* File/location: `package.json:6-12`
* Evidence: `pnpm lint` fails with `Command "lint" not found`.
* Risk: TypeScript catches type errors but not unused code patterns, React hook mistakes outside type checking, accessibility issues, import hygiene, or common code-quality defects.
* Recommended fix: Add ESLint or another agreed lint tool, then run it in CI before build.

### Finding D3: Production bundle is very large

* Severity: **Medium**
* File/location: `src/data/ordJuneTripmasterFlights.ts:1`, `src/App.tsx:11`, build output
* Evidence: `src/data/ordJuneTripmasterFlights.ts` is about 14 MB source. Build emits `dist/assets/index-48219d04.js` at about 10.8 MB minified and warns about chunks larger than 500 kB.
* Risk: Slow load, browser memory pressure, difficult mobile usage, and higher chance of tab crashes or blank states. It also increases accidental data exposure surface.
* Recommended fix: Move large reference data out of the initial bundle; lazy load, compress, or fetch only selected schedules. Keep sample fixtures small and synthetic.

### Finding D4: Rendered smoke test could not be completed

* Severity: **Medium**
* File/location: Runtime validation tooling
* Evidence: Vite dev server responded HTTP 200 on `http://127.0.0.1:5174/`, but the in-app browser automation tab crashed before loading the page. Standalone Playwright was not installed in the bundled runtime.
* Risk: Console errors, framework overlays, blank-screen behavior, and primary UI interactions were not verified in a real browser during this pass.
* Recommended fix: Add a lightweight Playwright smoke test or install/use the Browser plugin path successfully in a follow-up audit. Minimum smoke flow: load app, verify password gate, enter access password, create guidance, switch tabs, export workbook.

### Finding D5: Import file handling lacks explicit size/type guardrails

* Severity: **Medium**
* File/location: `src/components/import/ScheduleImporter.tsx:39-58`, `src/components/import/ScheduleImporter.tsx:87`, `src/import/scheduleImport.ts:195-201`
* Evidence: The input accepts `.xlsx,.xls`, reads the full selected file with `file.arrayBuffer()`, and parses the first workbook sheet. There is no file size limit, MIME check, workbook sheet count guard, or parse timeout.
* Risk: Large or adversarial files can hang or crash the tab, especially with the vulnerable parser dependency.
* Recommended fix: Add file size limits, visible guidance for accepted formats, parse error boundaries, and tests for large/empty/malformed workbooks.

### Finding D6: Imported selected date filtering bug risk

* Severity: **Medium**
* File/location: `src/components/import/ScheduleImporter.tsx:22-37`, `src/components/import/ScheduleImporter.tsx:61-64`
* Evidence: The preview filters `selectedSchedule.flights`, but `confirmImport` passes `pendingSchedule.flights` for all dates to `onImport`.
* Risk: If a multi-date workbook is imported and the user selects one date, the app may still load all valid rows, relying on later app-level date filtering. The confirmation message also reports all normalized rows loaded, which can confuse reviewers and hide unexpected data volume.
* Recommended fix: Decide whether import confirmation should load only the selected date or all dates. Make message and behavior match, then add a regression test.

### Finding D7: Rule-edit parser is fragile because it extracts numbers from display strings

* Severity: **Low**
* File/location: `src/components/tabs/ThumbRulesPage.tsx:240-315`
* Evidence: `parseEditableRules` pulls values with regex from human-readable strings such as `Default drive/return 15/15 min...`; `secondNumber` can select unintended numbers when extra site override text is present.
* Risk: Editing descriptive text can silently change the wrong underlying number or fail confusingly. This is especially risky if rule edits become operationally authoritative.
* Recommended fix: Replace free-text numeric parsing with structured inputs per setting.

### Finding D8: Dispatch resource inputs accept `NaN`

* Severity: **Low**
* File/location: `src/components/tabs/DispatchToolPage.tsx:181-185`
* Evidence: `Number(event.target.value)` can produce `NaN` when the field is empty even though min/max attributes exist.
* Risk: Empty or invalid input can flow into resource slicing/count logic and produce confusing dispatch results.
* Recommended fix: Clamp and validate resource inputs in React state before scheduling.

## Business Rule Findings

Implemented dispatch rules and assumptions:

* `src/data/planningRules.ts:3-27`: global block size, target/hard completion, earliest catering/dispatch windows, drive/return minutes, setup minutes, gate move minutes, max flights per push, group window, workload units, shift hours, lunch minutes, aircraft service minutes, helper requirement.
* `src/data/planningRules.ts:28-54`: site overrides for ORD, PDX, SEA, and SFO, including ORD drive/return/gate move separation and PDX shared pool/stretch behavior.
* `src/data/planningRules.ts:55-64`: priority order documented as no delays, minimize drivers, maximize utilization, prefer legal 3-flight pairings, minimize idle, reduce overtime, minimize trucks, avoid single-flight pushes.
* `src/import/aircraftMap.ts:12-39`: explicit aircraft mapping, preferred-on minutes, service minutes, and truck rules.
* `src/import/aircraftMap.ts:51-81`: fallback categorization treats unknown-looking values as unknown but otherwise defaults unmapped non-widebody/non-regional aircraft to narrowbody.
* `src/engine/scheduler.ts:14-31`: planning mode chooses shared vs independent operation schedules based on site rules.
* `src/engine/scheduler.ts:114-173`: critical pairings can be rejected into exceptions.
* `src/engine/scheduler.ts:175-210`: unassigned pushes are rejected into exceptions.
* `src/engine/scheduler.ts:236-247`: urgent pairing percentage is reduced through iterative rejection, guarded at 500 iterations.
* `src/engine/scheduler.ts:374-420`: flight windows and international strip planning are derived from ETD, aircraft, destination, inbound arrival, and rules.
* `src/engine/scheduler.ts:446-556`: pairing optimization enforces widebody standalone handling, operation grouping, group window, workload units, max flights, and 3-flight preference.
* `src/engine/scheduler.ts:596-695`: push timing applies drive, seal break, gate moves, hard margins, final-service limits, return, unload release, and scoring.
* `src/engine/scheduler.ts:722-723`: international strip timing uses fixed 15-minute arrival wait and 15-minute customs clearance assumptions.
* `src/engine/scheduler.ts:754`: international destination hard-off is 30 minutes; domestic uses configured hard minimum.
* `src/components/tabs/PlanningToolPage.tsx:520-522`: default maximum start waves, target resources per start, and shift start increment are hardcoded.
* `src/components/tabs/PlanningToolPage.tsx:674-679`: overnight coverage/display assumptions are hardcoded.
* `src/components/tabs/PlanningToolPage.tsx:736-753`: synthetic planning truck pool sizes are hardcoded.

Mismatches and concerns:

* `PROJECT_PLAN.md:66-74` says "No optimization logic" and "No pairing algorithms", but `src/engine/scheduler.ts` now contains substantial pairing/resource optimization. README is more current than `PROJECT_PLAN.md`.
* README says no persistence, but `PasswordGate` persists access state in localStorage. This is small but should be clarified as access-gate persistence, not app data persistence.
* `mockRules.ts:62-69` lists role permissions and audit requirements as open questions, yet rule editing already exists in UI.
* Aircraft fallback defaults many unmapped values to narrowbody. That may prevent an unknown aircraft from being flagged if the raw value looks plausible but is not operationally validated.
* Operational assumptions that need configurability or sign-off: international strip wait/customs minutes, 757 service minutes, helper per truck logic, 3-flight pairing target, urgent pairing tolerance, overnight display behavior, synthetic resource pool sizes, max start waves, and site-specific drive/return/move overrides.
* Unsafe/unrealistic recommendation risk: because there is no authoritative live data source, no authenticated rule versioning, no audit trail, no cancellation model, and limited validation around imported data, outputs should be treated as planning guidance only, not dispatch instructions.

## Dependency Review

Runtime dependencies:

* `@dnd-kit/core`, `@dnd-kit/utilities`
* `lucide-react`
* `react`, `react-dom`
* `xlsx`

Dev/build dependencies:

* TypeScript, Vite, React plugin, Tailwind, PostCSS, Autoprefixer, Node/React types

Audit results:

* `pnpm audit --prod` found 2 high vulnerabilities in `xlsx@0.18.5`.
* `xlsx` is also a large client bundle contributor, emitted as its own `429.67 kB` minified chunk.
* The GitHub workflow runs typecheck, test, and build, but does not run dependency audit or lint.

Risky package note:

* `xlsx` is the main dependency risk because it parses user-provided workbook bytes and has known high-severity advisories in the installed version.

## Repo Hygiene Findings

* Git state before report creation: `main...origin/main`; no tracked/untracked changes shown by `git status --short --branch`; ignored files included `.DS_Store`, `.test-build/`, `dist/`, and `node_modules/`.
* This report file is a new worktree change after creation.
* Latest commit: `448faad256e0b54336bb2f1d5d21bb7c2c800cf6 Tighten ORD planning driver allocation`.
* `.gitignore` covers `node_modules/`, `dist/`, `.DS_Store`, `.env`, `.env.local`, `.test-build/`, coverage, tsbuildinfo, and local Xcode `DerivedData`.
* Large tracked file: `src/data/ordJuneTripmasterFlights.ts` about 13,860 KB.
* Generated/ignored files created by checks: `.test-build/` and `dist/`.
* Parent workspace contains local native/build artifacts and reference files outside this web repo, including `../reference-files`, `../DerivedData-AppleTVDashboard`, and `../DerivedData-AppleTVDashboard-Final2`; they are outside `Dispatch-Tool` but should not be accidentally moved into the repo.
* `README.md` is mostly accurate for the current frontend/static/GitHub Pages posture and correctly warns that the password gate is not true security.
* `PROJECT_PLAN.md` is stale in at least these areas: it says no production deployment pipeline, no optimization logic, no pairing algorithms, and no real airline schedule imports, while the repo now has GitHub Pages deployment and implemented scheduling/pairing logic with reference schedule import support.

## Questions for Drew

* Are any embedded schedule, staffing, driver, truck, customer, or flight records real or sensitive, or are they fully synthetic/reference-safe?
* Is the GitHub Pages deployment intended to be shareable only with non-sensitive demo data, or must it protect real operational data?
* Who is allowed to edit thumb rules, and what audit trail is required for rule changes?
* Which dispatch recommendations are allowed to influence real operations today, if any?
* Should multi-date workbook imports load only the selected date or retain all valid rows for later date filtering?
