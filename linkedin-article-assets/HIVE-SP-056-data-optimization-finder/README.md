# Your Client's Biggest Savings Hide in Data They Already Have.

A Built-in-the-Hive playbook: an agent that analyzes a client's own operational and spend data to surface savings and optimization opportunities they already own. Built on Fabric, Foundry, and Power BI.

Companion article: "Your Client's Biggest Savings Hide in Data They Already Have." (Built in the Hive, HIVE-SP-056).

## Business value

Most organizations are sitting on their own biggest savings and cannot see them. The optimization, the overspend, the mismatched capacity, the process that costs three times what it should, is already visible in the operational and spend data they collect every day. But collecting data and analyzing it for opportunity are different things, and most firms do the first and never quite get to the second. This pattern uses an agent to close that gap: it unifies the client's existing data, analyzes it for patterns of waste and inefficiency, quantifies each opportunity, and backs it with evidence traced to the source, producing a ranked, defensible savings plan built entirely from data the client already owns. No new instrumentation, no new collection, just the insight that was always latent in what they already have.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `data-optimization-finder` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/data-optimization-finder/`.

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
