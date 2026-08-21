# Stop Buying Genius for Junior Work

A Built-in-the-Hive playbook: frontier models are astonishing, but most enterprise work is not a discovery problem, it is a context-and-execution problem. Every workload has an intelligence threshold, and past it more intelligence adds cost, not value. This shows professional-services teams how to right-size their AI spend, route each unit of work to the cheapest system that still gets it right, reserve frontier models for genuine discovery, and drive intelligence consumed per successful outcome toward zero. Built on Azure AI Foundry model routing, Copilot Studio, Dataverse, Power BI, and Purview. Figures are illustrative or drawn from public industry data.

Companion article: "Stop Buying Genius for Junior Work" (Built in the Hive, HIVE-SP-066).

## Business value

Frontier AI models are astonishing, and in the right place worth a fortune: a decades-old proof cracked, hundreds of deep software bugs found. But the public scoreboard is built from work that can be cleanly verified, and most of the economy does not work that way. A claims adjuster, a nurse, a logistics coordinator are not making discoveries; they are applying what their organization already knows across millions of decisions. Every workload has an intelligence threshold: below it the model fails, near it more intelligence is hugely valuable, and past it more intelligence adds cost, not value. Meanwhile models keep getting smarter while refund policies and invoice matching do not. The move is to right-size: route each unit of work to the cheapest system that still gets it right, reserve frontier models for the thin slice of genuine discovery, and drive intelligence consumed per successful outcome toward zero.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `right-size-intelligence-spend` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/right-size-intelligence-spend/`.

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
