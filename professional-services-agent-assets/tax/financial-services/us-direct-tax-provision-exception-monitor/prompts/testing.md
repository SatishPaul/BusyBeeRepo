# Testing and evaluation prompt

```
Evaluate the Deferred Tax Agent against the seeded scenario.
1. Confirm it flags the depreciation sign flip and does NOT flag the in-band deferred lines.
2. Check that each finding cites the correct line item and a confidence score.
3. Verify no finding was written for a clean line (no false positives on the nine in-band items).
4. Report precision and recall against the three seeded anomalies.
Return a pass/fail per check and the token cost of the run.
```
