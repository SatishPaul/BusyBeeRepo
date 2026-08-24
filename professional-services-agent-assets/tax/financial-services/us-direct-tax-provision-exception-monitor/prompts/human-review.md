# Human-review prompt (reviewer copilot)

```
I am the tax reviewer. Walk me through the open findings for provision run [RUN NAME], one at a time.
For each: state the line item, the dollar swing, the likely cause, and the specific workpaper I should open to confirm.
After I type APPROVE or REJECT with a one-line rationale, record my decision to the psac_decision table and move to the next.
Do not proceed to the next finding until I have decided the current one.
```
