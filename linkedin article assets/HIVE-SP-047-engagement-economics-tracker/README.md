# You Audit Everyone's Books but Your Own Engagement Economics.

A Built-in-the-Hive playbook: an agent-maintained engagement P&L and budget-vs-actual tracker, so the firm audits its own economics as well as its clients'. Built on Dataverse, Fabric, and Power BI.

Companion article: "You Audit Everyone's Books but Your Own Engagement Economics." (Built in the Hive, HIVE-SP-047).

## Business value

Professional-services firms scrutinize every client's numbers for a living, and then run their own engagements on a P and L nobody sees until quarter-end. By the time the margin report lands, the leak has already happened: the overrun, the scope creep absorbed for free, the staffing mix that quietly ate the profit. The information existed the whole time, scattered across time entries, cost systems, and billing, but nobody assembled it while it still mattered. This pattern puts an agent in charge of a live engagement ledger: it unifies the financial signals, keeps a continuous budget-versus-actual view, and flags margin erosion early enough to do something about it. The firm finally gives its own economics the same real-time scrutiny it gives every client.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `engagement-economics-tracker` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/engagement-economics-tracker/`.

## Step-by-step

1. Install the skill (see `install/how-to-install-a-skill.md`) or paste `prompt.md` into a Cowork task.
2. Answer the discovery questions, or point the recipe at the Dataverse tables in `power-platform/`.
3. To stand up the governed version, build `power-platform/solution.md` in your tenant.

## Expected output

A governed, review-ready result the professional signs off on, plus the durable Dataverse records and dashboards described in the solution. The agent cites its sources and never fabricates; where it can act, risky actions are gated behind approvals.

## Assets included

- `prompt.md` - runnable copy-paste prompt.
- `skill/` - installable Cowork skill (manifest + instructions).
- `power-platform/` - Dataverse tables, flows, and Copilot Studio build spec.
- `recipe.yaml` - metadata.

## Cost tier

**Medium.** See `recipe.yaml` for the drivers.

## License

Apache-2.0. See repository `LICENSE` and `NOTICE`.
