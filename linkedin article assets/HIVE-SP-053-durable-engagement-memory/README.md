# Your Six-Month Engagement Keeps Forgetting Its Own Decisions.

A Built-in-the-Hive playbook: a durable memory layer that holds decisions and context across a six-month engagement, so the work stops forgetting its own decisions. Built on Dataverse, Azure AI Search, and Foundry.

Companion article: "Your Six-Month Engagement Keeps Forgetting Its Own Decisions." (Built in the Hive, HIVE-SP-053).

## Business value

Long engagements have amnesia. A decision gets made in month one, carefully, with good reasons, and by month four nobody can remember why, so the team relitigates it, sometimes reversing it and then reversing back. New people rotate on and re-ask questions that were settled long ago. The rationale that would end the debate is buried in a chat thread or a document no one can find. This pattern gives a long engagement a durable memory: it captures decisions and the reasoning behind them, stores them where they persist, indexes them for recall, and answers "why did we decide this" with a grounded, cited response, all governed to the engagement. The project stops forgetting itself.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `durable-engagement-memory` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/durable-engagement-memory/`.

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
