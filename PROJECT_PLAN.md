# Dispatch Tool Project Plan

## v1.0 Status

Dispatch Tool v1.0 is the stable generic dispatch/resource planner prototype baseline, anchored at commit `9cd1e6f` (`Stabilize generic dispatch planner prototype`). Treat v1.0 as the current return point for future product work, not as a finished production system.

## Purpose

Build a modern, frontend-only prototype for airline catering dispatch and transportation resource planning. This replaces an Excel-based planning workflow with a visual guide that imports flight schedules, applies thumb rules, and recommends driver, helper, and truck coverage.

## Current Scope

- React, TypeScript, and Tailwind CSS.
- Excel schedule import for the active planning file.
- Thumb-rule driven resource guidance and pairing quality checks.
- No backend, database, authentication, or live dispatch workflow yet.
- GitHub Pages deployment from `main` through GitHub Actions.
- Desktop-first layout for transportation planning review.
- Primary focus is the Resource Guide.
- PDX June 11, 2026 and ORD May 14, 2026 are sample/reference schedules only. The tool should stay generic across sites.
- Generic site behavior is configured through `planningRules.siteOverrides`.
- Scheduler tests exist and the current baseline passes `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build`.

## Current Screens

- Resource Guide: imported schedule, applied thumb rules, recommended resource starts, pairing quality, timing key, and planning timeline.
- Planning Tool: driver rows, shift times, timeline pucks, hover details, and pairing output.
- Dispatch Tool: load planning results or recalculate pairings from available driver/helper/truck counts.
- Staffing: sample CDL roster and shift review.
- Fleet: sample fleet master list and status filters.
- Exceptions: mock operational risks such as overtime, missing lunch, late load risk, truck conflict, and unplanned flights.
- Tour Sheet: print-friendly operational assignment table.
- Dashboard: mock KPI overview.
- Thumb Rules: mock settings/admin controls for planning assumptions.

## v1.0 Limitations

- No backend or database.
- No app-data persistence across browser sessions.
- No web authentication.
- Driver iPhone app is not integrated with the web app.
- Apple TV dashboard is not integrated with the web app.
- Internal `kitchen*` model field names remain for compatibility; see `docs/model-compatibility.md`.
- Scheduler test coverage is useful but not exhaustive.
- Excel import still uses `xlsx@0.18.5`; guardrails are in place, but parser replacement remains a security follow-up before untrusted workbook use.

## Near-Term Priorities

1. Improve resource guide usability.
   - Make shift, off-shift, overtime, lunch, edited flights, and unplanned work visually obvious.
   - Keep the grid dense enough for real planning review.

2. Strengthen imported data handling.
   - Keep driver, truck, radio, shift, flight, assignment, lunch, and exception fields easy to understand.
   - Keep workbook file size, type, sheet-count, and row-count guardrails covered by tests.
   - Avoid backend-style complexity until the planning workflow is clearer.

3. Add planning workflow polish.
   - Improve hover details.
   - Add selected flight state.
   - Add simple filters only if they support resource planning review.

4. Prepare for real data later.
   - Document import fields.
   - Keep all data structures typed.
   - Do not add a database or API until the static workflow is validated.

## Non-Goals For Now

- No real airline schedule imports.
- No authentication.
- No database.
- No live dispatching.
- No authenticated production data workflow until the prototype flow is stable.

## Development Workflow

- Work from the GitHub-connected local folder: `/Users/drewwelker/Documents/Codex Projects/Dispatch Tool/Dispatch-Tool`.
- Keep changes small and build after each meaningful step.
- Run `pnpm lint`, `pnpm security:audit`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before publishing.
- Push stable checkpoints to GitHub.

## Recommended v1.0 Tag

After committing the v1.0 documentation alignment:

```bash
git tag -a v1.0 -m "Dispatch Tool v1.0 - Stable generic dispatch planner baseline"
git push origin v1.0
```
