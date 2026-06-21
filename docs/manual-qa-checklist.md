# Manual QA Checklist

Use this checklist before committing a checkpoint when browser automation cannot exercise native file selection.

## Schedule Import

- Import a valid `.xlsx` schedule with at least two valid rows.
  - Expected: the active schedule name updates to the file name.
  - Expected: the visible site/date follow the first valid imported row when present.
  - Expected: the loaded flight count reflects the valid rows.
- Import a mixed-validity `.xlsx` schedule with at least one valid row and at least one bad row.
  - Expected: valid rows are imported.
  - Expected: an amber warning reports skipped rows.
  - Expected: the app remains usable and Create Guidance still works.
- Import an invalid `.xlsx` schedule with no usable rows.
  - Expected: a red import error is shown.
  - Expected: the previous active schedule remains usable.

## Resource Planning

- Click Create Guidance on the Resource Guide with a sample schedule.
  - Expected: summary cards, resource guidance, timeline, push table, and exception table render.
- Toggle Mainline, Express, and All.
  - Expected: each view updates counts/timeline without console errors.
- Click Export Excel after guidance is created.
  - Expected: browser downloads a workbook named `Resource Plan <date> <view>.xlsx`.

## Secondary Tabs

- Planning Tool: create pairings from the ORD sample schedule.
- Dispatch Tool: load from planning, then refresh pairings after changing resource counts.
- Staffing/Fleet: change filters and confirm the lists update without blank states or console errors.
