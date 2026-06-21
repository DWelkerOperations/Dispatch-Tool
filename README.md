# Dispatch Tool

Modern frontend prototype for airline catering dispatch and transportation resource planning.

## v1.0 Baseline

Dispatch Tool v1.0 is the stable generic dispatch/resource planner prototype baseline, anchored at commit `9cd1e6f` (`Stabilize generic dispatch planner prototype`). It is a return point for future work, not a finished production system.

## Current v1.0 Scope

- React + TypeScript + Tailwind CSS
- Frontend only
- Excel schedule import
- Resource Guide for imported/sample schedules, recommended resource starts, pairing quality, risk definitions, timeline, push plan, exceptions, and Excel export
- Planning Tool for full-day pairing/resource-plan review
- Dispatch Tool for loading a planning result or recalculating from available resource counts
- Staffing, Fleet, Exceptions, Dashboard, Tour Sheet, and Thumb Rules views
- Thumb-rule driven resource guidance
- Generic site support with site-specific behavior in `planningRules.siteOverrides`
- Scheduler test harness covering core pairing, risk, shortage, site override, shared resource pool, lunch-window, and critical-rejection behavior
- `pnpm typecheck`, `pnpm test`, and `pnpm build` pass for the v1.0 baseline
- Live dispatching is intentionally out of scope for now
- Embedded PDX and ORD schedules are sample/reference data, not product-specific scope

## Known v1.0 Limitations

- No backend, database, or persistence
- No web authentication
- No production deployment workflow
- Driver iPhone app is a separate prototype and is not integrated
- Apple TV dashboard is a separate prototype and is not integrated
- Internal `kitchen*` model field names remain for compatibility; see [model compatibility notes](docs/model-compatibility.md)
- Scheduler tests are useful but not exhaustive
- PDX June 11, 2026 and ORD May 14, 2026 are sample/reference datasets only

## Local development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm typecheck
pnpm test
pnpm build
```

## Tagging v1.0

After committing this documentation alignment, create and push the v1.0 tag:

```bash
git tag -a v1.0 -m "Dispatch Tool v1.0 - Stable generic dispatch planner baseline"
git push origin v1.0
```
