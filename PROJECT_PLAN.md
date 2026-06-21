# Dispatch Tool Project Plan

## Purpose

Build a modern, frontend-only prototype for airline catering dispatch and transportation resource planning. This replaces an Excel-based planning workflow with a visual guide that imports flight schedules, applies thumb rules, and recommends driver, helper, and truck coverage.

## Current Scope

- React, TypeScript, and Tailwind CSS.
- Excel schedule import for the active planning file.
- Thumb-rule driven resource guidance and pairing quality checks.
- No backend, database, authentication, or live dispatch workflow yet.
- Desktop-first layout for transportation planning review.
- Primary focus is the Resource Guide.
- PDX June 11, 2026 and ORD May 14, 2026 are sample/reference schedules only. The tool should stay generic across sites.

## Current Screens

- Resource Guide: imported schedule, applied thumb rules, recommended resource starts, pairing quality, timing key, and planning timeline.
- Planning Tool: driver rows, shift times, timeline pucks, hover details, and pairing output.
- Exceptions: mock operational risks such as overtime, missing lunch, late load risk, truck conflict, and unplanned flights.
- Tour Sheet: print-friendly operational assignment table.
- Dashboard: mock KPI overview.
- Thumb Rules: mock settings/admin controls for planning assumptions.

## Near-Term Priorities

1. Improve resource guide usability.
   - Make shift, off-shift, overtime, lunch, edited flights, and unplanned work visually obvious.
   - Keep the grid dense enough for real planning review.

2. Strengthen imported data handling.
   - Keep driver, truck, radio, shift, flight, assignment, lunch, and exception fields easy to understand.
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

- No optimization logic.
- No pairing algorithms.
- No real airline schedule imports.
- No authentication.
- No database.
- No live dispatching.
- No deployment automation until the prototype flow is stable.

## Development Workflow

- Work from the GitHub-connected local folder: `/Users/drewwelker/Documents/Codex Projects/Dispatch Tool/Dispatch-Tool`.
- Keep changes small and build after each meaningful step.
- Push stable checkpoints to GitHub.
