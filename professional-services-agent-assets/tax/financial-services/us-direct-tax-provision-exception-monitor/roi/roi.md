# ROI Model

{{svg:v65-roi}}

Every pack ships with a measurement model, not a promise. These are **sample assumptions** for the bundled Financial-Services scenario; replace each with a measured value from your first live close. The `roi/roi-model.csv` file in the repo holds the same numbers so you can plug in your own.

## Per-provision (one entity, one quarter)

| Measure | Before | After |
|---|---|---|
| Human minutes (screen + tie-out) | 240 | 25 |
| Handoffs between people | 6 | 0 |
| Lines reviewed by a human | 12 (all) | 3 (exceptions only) |
| Compute cost per run | n/a | ~$2.14 |
| First-pass acceptance of findings | n/a | target > 90% |

## Per-engagement (a client with several entities, four quarters)

Multiply the per-provision saving by the number of entities and quarters. For a client with 5 entities across 4 quarters, 215 minutes saved per screen is roughly **72 hours a year** returned to judgment work, at a compute cost measured in single-digit dollars per run.

## Annualized practice view

Across a book of, say, 40 provision entities, the same 215-minute saving is on the order of **570+ hours per quarter** freed from manual tie-out, with the reviewer's attention concentrated on the small set of real exceptions. The value is not only speed: full-population screening catches anomalies a sampled human tie-out can miss.

## What to measure in your environment

Human minutes before and after, agent runtime, review time, rework rate, exception rate, cycle-time reduction, handoffs removed, cost per execution, Copilot-credit consumption, percentage requiring human intervention, evidence completeness, and first-pass acceptance rate. Publish three views: per transaction, per engagement, and annualized. Label every unmeasured figure as a sample assumption.
