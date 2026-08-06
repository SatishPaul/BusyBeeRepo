# You're Building AI. You're Also Building an R&D Credit You Never Claim.

A Built-in-the-Hive playbook: use AI and the firm's existing data to discover qualifying AI and development activity, apply the four-part test, assemble evidence, and map qualified costs into a defensible, sustainable R&D tax credit position. Built on Fabric, Foundry, Dataverse, Purview, and Power BI. Inspired by a Forvis Mazars CPE session; a technology playbook, not tax advice.

Companion article: "You're Building AI. You're Also Building an R&D Credit You Never Claim." (Built in the Hive, HIVE-SP-060).

## Business value

Firms are pouring effort into AI, building models, wiring agents, transforming data, and most of that work is exactly the kind of technical experimentation the R&D tax credit exists to reward. Yet a large share of the value goes unclaimed, not because the work does not qualify, but because the contemporaneous documentation that makes a credit defensible was never captured. The pattern here flips that: use AI and the firm's existing data to discover the qualifying activity, test it against the four-part test, assemble the evidence from records you already hold, map the qualified costs, and stand up a sustainable, audit-ready credit position, with far less disruption than the manual scramble it replaces.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `rd-credit-ai-engine` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/rd-credit-ai-engine/`.

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

**High.** See `recipe.yaml` for the drivers.

## License

Apache-2.0. See repository `LICENSE` and `NOTICE`.
