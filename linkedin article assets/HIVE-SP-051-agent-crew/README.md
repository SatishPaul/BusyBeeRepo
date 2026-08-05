# You Do Not Need One Genius Agent. You Need a Crew That Knows Its Lane.

A Built-in-the-Hive playbook: a crew of role-specialized agents runs a delivery engagement, each governed to its lane, instead of one overloaded generalist. Built on Foundry, Copilot Studio, Entra, and Purview.

Companion article: "You Do Not Need One Genius Agent. You Need a Crew That Knows Its Lane." (Built in the Hive, HIVE-SP-051).

## Business value

The instinct with agents is to build one that can do everything, and it is the wrong instinct. A single do-it-all agent is a bottleneck with no clear ownership and a governance nightmare, because when it can touch anything, it must be trusted with everything. Real delivery organizations do not work that way; they work as crews of specialists, each owning a lane, each accountable for their part. This pattern builds the same thing with agents: define the roles a delivery needs, scope each agent to its lane with its own identity and limits, coordinate them under an orchestrator, govern the boundaries so none strays, and deliver the engagement as a team. The result is more work done, more safely, because specialization and governance replace one overloaded generalist.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `agent-crew` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/agent-crew/`.

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
