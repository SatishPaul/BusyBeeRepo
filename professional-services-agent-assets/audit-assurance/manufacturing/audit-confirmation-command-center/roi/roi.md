# ROI Model

{{svg:v67-roi}}

Every pack ships with a measurement model, not a promise. These are **sample assumptions** for the bundled Manufacturing scenario; replace each with a measured value from your first live audit. The `roi/roi-model.csv` file in the repo holds the same numbers so you can plug in your own.

## Per-cycle (one engagement, one confirmation cycle)

| Measure | Before | After |
|---|---|---|
| Human minutes (track, match, chase, reconcile) | 240 | 30 |
| Handoffs between people | 6 | 0 |
| Confirmations reviewed by a human | 40 (all) | 3 (exceptions only) |
| Population coverage | manual, lagging | 100%, continuous |
| Compute cost per run | n/a | ~$2.60 |
| First-pass acceptance of findings | n/a | target > 90% |

## Per-engagement (a client with several balances, one busy season)

Multiply the per-cycle saving by the number of confirmation refreshes across fieldwork. For a client whose confirmations are chased and reconciled repeatedly over a busy season, 210 minutes saved per cycle is roughly **25 to 40 hours a year** returned to judgment work, at a compute cost measured in single-digit dollars per run.

## Annualized practice view

Across a book of, say, 40 audits that rely on external confirmations, the same 210-minute saving is on the order of **130+ hours per busy season** freed from confirmation tracking, with the reviewer's attention concentrated on the small set of real exceptions. The value is not only speed: continuous tracking catches the non-response that a lagging spreadsheet can miss until it is too late to run alternate procedures.

## What to measure in your environment

Human minutes before and after, agent runtime, review time, rework rate, exception rate, non-response cycle time, handoffs removed, cost per execution, Copilot-credit consumption, percentage requiring human intervention, evidence completeness, and first-pass acceptance rate. Publish three views: per confirmation, per engagement, and annualized. Label every unmeasured figure as a sample assumption.
