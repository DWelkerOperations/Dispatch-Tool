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
- Import a file with the wrong extension, an empty workbook file, or a workbook larger than 64 MB.
  - Expected: a red import error explains why the file was rejected before schedule data is loaded.
- Import a Volare actuals workbook.
  - Expected: the detected format is Volare actuals.
  - Expected: the report month/year must be reviewed before the schedule can be loaded.
  - Expected: changing the report month updates every displayed departure date deterministically.

## Resource Planning

- Click Create Guidance on the Resource Guide with a sample schedule.
  - Expected: summary cards, resource guidance, timeline, push table, and exception table render.
- Toggle Mainline, Express, and All.
  - Expected: each view updates counts/timeline without console errors.
- Click Export Excel after guidance is created.
  - Expected: browser downloads a workbook named `Resource Plan <date> <view>.xlsx`.

## Secondary Tabs

- Planning Tool: create pairings from the ORD sample schedule.
- Retrospective: verify Create Retrospective is unavailable when no flights contain scheduled and actual comparison times.
- Retrospective: import Volare actuals, build scheduled and actual plans, toggle between them without rebuilding, and verify a departure crossing midnight moves by its delay rather than by almost 24 hours.
- Retrospective: after both modes are built, change the site, reference schedule, or imported/custom schedule.
  - Expected: both cached retrospective plans clear and no guidance from the previous schedule remains visible.
- Retrospective: use a deliberately under-staffed fixed-resource plan and verify uncovered work is reported without an invalid-time error.
- ORD Planner: edit a fixed start time with the keyboard and verify focus remains in the time field.
- Manual Control: drag a push and verify timing-risk summary counts update; undo and reset must restore the generated plan.
- Dispatch Tool: load from planning, then refresh pairings after changing resource counts.
- Staffing/Fleet: change filters and confirm the lists update without blank states or console errors.
