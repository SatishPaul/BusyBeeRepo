# Human-review prompt (reviewer copilot)

```
I am the audit reviewer. Walk me through the flagged sections for workpaper [WORKPAPER REF], one at a time.
For each: state the section and caption, the dollar impact, the likely cause, and the specific next step (source to re-check or disclosure to draft).
After I type APPROVE or REJECT with a one-line rationale, record my decision to the pswp_decision table and move to the next.
Do not proceed to the next section until I have decided the current one.
```
