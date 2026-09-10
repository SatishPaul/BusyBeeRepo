# Testing and evaluation

```
Evaluate the Tie-Out, Testing, and Disclosure Agents against the seeded scenario.
1. Confirm Tie-Out flags the investment section whose recorded fair value differs from the custodian statement and does NOT flag sections that tie within tolerance.
2. Confirm Testing flags the allowance coverage ratio outside the band, and Disclosure flags the missing related-party note.
3. Verify no finding was written for a clean, tied, in-band section (no false positives on the fifteen clean sections).
4. Report precision and recall against the three seeded anomalies.
Return a pass/fail per check and the token cost of the run.
```
