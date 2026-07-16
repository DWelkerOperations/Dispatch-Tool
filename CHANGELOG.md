# Changelog

## Unreleased - Dispatch Tool Beta Stabilization

### Added

- Current approved SkyChefs wordmark and Pride Red application accents.
- Volare actuals import and scheduled-versus-actual retrospective planning.
- Editable ORD fixed start waves and fixed-resource Goal staffing.
- SFO shared-resource planning across mainline and express work.

### Corrected

- Fixed-resource shortages remain visible instead of cascading assignments beyond the supported operating day.
- Retrospective time comparisons preserve midnight operating-day offsets.
- Volare report dates require deterministic month/year context rather than inference from the computer clock.
- Manual-control summary and overlap validation stay aligned after edits.

### Known Prototype Constraints

- Approved TripMaster reference data remains embedded for the beta review workflow and increases the initial bundle size.
- Excel parsing still uses `xlsx@0.18.5` with the documented prototype guardrails and ignored known advisories.

## v1.0 - Stable Generic Dispatch Planner Baseline

Baseline commit: `9cd1e6f` (`Stabilize generic dispatch planner prototype`)

### Included

- Generic frontend dispatch/resource planning prototype.
- Resource Guide with sample/reference schedules, guidance creation, pairing quality, timeline review, exceptions, and Excel export.
- Planning Tool and Dispatch Tool workflows.
- Staffing, Fleet, Exceptions, Dashboard, Tour Sheet, and Thumb Rules views.
- Excel import with generic 3-4 character site-code support and row-level warnings.
- Site-specific scheduler behavior configured through `planningRules.siteOverrides`.
- Scheduler test harness covering pairing, risk, shortages, site overrides, shared resource pools, lunch guardrails, and critical rejection.
- Passing `pnpm typecheck`, `pnpm test`, and `pnpm build` at the v1.0 checkpoint.

### Sample Data

- PDX June 11, 2026 and ORD May 14, 2026 are sample/reference datasets only.

### Known Limitations

- No backend, database, persistence, web authentication, or production deployment workflow.
- Driver iPhone app and Apple TV dashboard remain separate, non-integrated prototypes.
- Internal `kitchen*` model fields remain for compatibility.
- Scheduler tests are useful but not exhaustive.

### Recommended Tag

```bash
git tag -a v1.0 -m "Dispatch Tool v1.0 - Stable generic dispatch planner baseline"
git push origin v1.0
```
