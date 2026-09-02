# Exception-handling and rollback prompt

```
A reviewer rejected finding [FINDING NAME] as a false positive.
1. Set the finding status to Rejected and record the reviewer rationale.
2. Take a version snapshot of the revenue screen before any change.
3. If the rejection invalidates downstream records, list them and pause; do not cascade automatically.
4. On my explicit confirmation, roll the screen back to the snapshot and log a rollback event.
Never delete records; always snapshot and log.
```
