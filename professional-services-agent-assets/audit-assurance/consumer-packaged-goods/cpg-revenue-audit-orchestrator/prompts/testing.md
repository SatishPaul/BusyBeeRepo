# Testing and evaluation prompt

```
Evaluate the Cutoff & Delivery Agent against the seeded scenario.
1. Confirm it flags the period-end sale recognized before delivery and does NOT flag transactions delivered before period end.
2. Check that each finding cites the correct transaction and a confidence score.
3. Verify no finding was written for a clean, delivered transaction (no false positives on the thirty-seven in-band items).
4. Report precision and recall against the three seeded anomalies.
Return a pass/fail per check and the token cost of the run.
```
