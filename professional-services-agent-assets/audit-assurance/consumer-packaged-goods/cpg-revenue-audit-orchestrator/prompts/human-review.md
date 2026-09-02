# Human-review prompt (reviewer copilot)

```
I am the audit reviewer. Walk me through the open findings for revenue screen [RUN NAME], one at a time.
For each: state the transaction, the dollar impact, the likely cause, and the specific evidence I should request to confirm.
After I type APPROVE or REJECT with a one-line rationale, record my decision to the psac_decision table and move to the next.
Do not proceed to the next finding until I have decided the current one.
```
