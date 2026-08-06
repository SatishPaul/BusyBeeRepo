# Which AI Model Should You Bet On? The Antifragile One.

A Built-in-the-Hive playbook: the open-weight versus closed-weight model debate has three possible endings, closed wins, open wins, or a hybrid, and nobody can predict which. This shows professional-services teams how to stop betting on one model and build a governed, model-agnostic stack, gateway, routing, grounding, observability, and security, that adopts whatever wins and runs across cloud, on-prem, and edge. Built on Copilot Studio, Azure AI Foundry, Azure AI Search, Dataverse, and Purview. Generalized from an industry research note; an AI-strategy playbook, not investment advice.

Companion article: "Which AI Model Should You Bet On? The Antifragile One." (Built in the Hive, HIVE-SP-064).

## Business value

The AI world is in the middle of a genuine argument with no settled answer: will the future belong to closed-weight models, the proprietary frontier systems you rent by the token, or to open-weight models, the ones you can download, customize, and run wherever you like? There are credible cases for three different endings, closed wins, open wins, or a durable hybrid of both, and nobody can honestly tell you which. So stop asking which model to bet on and bet on a property instead: antifragility. A fragile firm standardizes on one model and breaks when the field shifts. An antifragile firm builds a governed, model-agnostic stack, a gateway and router in front of many models, with grounding, observability, and security, so every new model, price crash, or open-weight release becomes a free upgrade it routes to rather than a threat it absorbs. Volatility stops being a risk and becomes a supply of improvements.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `model-agnostic-ai-stack` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/model-agnostic-ai-stack/`.

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
