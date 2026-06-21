# Model Compatibility Notes

The current planning model still contains a few `kitchen*` field names, such as `kitchenDepartureTime` and `maxKitchenDepartureBeforeDepartureMinutes`.

These names are retained for checkpoint stability because they are shared across scheduler logic, timeline rendering, tables, exports, and tests. In the product UI, these values should be presented with generic dispatch/site language such as "Dispatch depart" or "Latest dispatch departure."

Future cleanup can add generic aliases like `dispatchDepartureTime` while continuing to read the old fields during a transition. A full rename should happen as a focused migration with regression tests around timeline positioning, export rows, and scheduler timing windows.
