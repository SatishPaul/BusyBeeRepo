# Testing and evaluation

```
Evaluate the Reconciliation and Non-Response Agents against the seeded scenario.
1. Confirm Reconciliation flags the bank confirmation whose confirmed amount differs from the recorded balance and does NOT flag confirmations that match within tolerance.
2. Confirm Non-Response flags the customer confirmation past its due date and proposes an alternate procedure.
3. Verify no finding was written for a clean, matched, in-tolerance confirmation (no false positives on the thirty-seven clean items).
4. Report precision and recall against the three seeded anomalies.
Return a pass/fail per check and the token cost of the run.
```
