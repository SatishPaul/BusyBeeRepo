# ROI Model

{{svg:v66-roi}}

Every pack ships with a measurement model, not a promise. These are **sample assumptions** for the bundled Consumer Packaged Goods scenario; replace each with a measured value from your first live audit. The `roi/roi-model.csv` file in the repo holds the same numbers so you can plug in your own.

## Per-screen (one engagement, one quarter)

| Measure | Before | After |
|---|---|---|
| Human minutes (sample + tie-out) | 300 | 35 |
| Handoffs between people | 7 | 0 |
| Transactions reviewed by a human | 40 (sample) | 3 (exceptions only) |
| Population coverage | ~2% sample | 100% |
| Compute cost per run | n/a | ~$3.10 |
| First-pass acceptance of findings | n/a | target > 90% |

## Per-engagement (a client with several revenue streams, four quarters)

Multiply the per-screen saving by the number of revenue streams and quarters. For a client screened across 4 quarters with interim reviews, 265 minutes saved per screen is roughly **35 to 50 hours a year** returned to judgment work, at a compute cost measured in single-digit dollars per run.

## Annualized practice view

Across a book of, say, 30 revenue-audit engagements, the same 265-minute saving is on the order of **130+ hours per quarter** freed from sample tie-out, with the reviewer's attention concentrated on the small set of real exceptions. The value is not only speed: full-population testing catches the period-end distributor load that a forty-item sample can miss entirely.

## What to measure in your environment

Human minutes before and after, agent runtime, review time, rework rate, exception rate, cycle-time reduction, handoffs removed, cost per execution, Copilot-credit consumption, percentage requiring human intervention, evidence completeness, and first-pass acceptance rate. Publish three views: per transaction, per engagement, and annualized. Label every unmeasured figure as a sample assumption.
