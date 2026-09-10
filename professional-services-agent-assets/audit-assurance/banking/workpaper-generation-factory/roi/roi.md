# ROI Model

{{svg:v68-roi}}

Every pack ships with a measurement model, not a promise. These are **sample assumptions** for the bundled Banking scenario; replace each with a measured value from your first live audit. The `roi/roi-model.csv` file in the repo holds the same numbers so you can plug in your own.

## Per-workpaper (one engagement, one workpaper file)

| Measure | Before | After |
|---|---|---|
| Human minutes (assemble, build lead sheets, tie out, draft) | 180 | 25 |
| Handoffs between people | 5 | 0 |
| Sections reviewed by a human | 18 (all) | 3 (flagged only) |
| Source assembly | manual copy between docs | Cowork, one pass |
| Compute cost per run | n/a | ~$2.40 |
| First-pass acceptance of sections | n/a | target > 90% |

## Per-engagement (a client with many workpapers, one busy season)

Multiply the per-workpaper saving by the number of workpaper files across the audit. For a bank audit with lead schedules, tie-outs, and disclosures across many areas, 155 minutes saved per file is roughly **30 to 50 hours a year** returned to judgment work, at a compute cost measured in single-digit dollars per run.

## Annualized practice view

Across a book of, say, 40 audits, the same 155-minute saving is on the order of **150+ hours per busy season** freed from workpaper preparation, with the reviewer's attention concentrated on the small set of flagged sections. The value is not only speed: continuous, agent-drafted tie-outs catch the section that quietly does not tie, which a hand-built file can miss until review.

## What to measure in your environment

Human minutes before and after, agent runtime, review time, rework rate, exception rate, sections auto-tied, handoffs removed, cost per execution, Copilot-credit consumption, percentage requiring human intervention, evidence completeness, and first-pass acceptance rate. Publish three views: per workpaper, per engagement, and annualized. Label every unmeasured figure as a sample assumption.
