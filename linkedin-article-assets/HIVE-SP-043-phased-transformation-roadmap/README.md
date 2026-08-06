# Clients Do Not Buy the Report. They Buy the Plan to Get There.

A Built-in-the-Hive playbook: an agent that generates a phased transformation roadmap covering design, phased builds, budget, milestones, and maintenance. Built on Copilot Studio, Foundry, and Project Operations.

Companion article: "Clients Do Not Buy the Report. They Buy the Plan to Get There." (Built in the Hive, HIVE-SP-043).

## Business value

A findings deck tells a client what is wrong. It is often brilliant, and it often ends the conversation, because nobody funds a diagnosis. What gets funded is the plan: a phased, budgeted, sequenced roadmap that shows exactly how the client gets from where they are to where they want to be, what each phase costs, what it delivers, and in what order. Most firms are excellent at the diagnosis and slow at the plan, so the best insight stalls between the readout and the statement of work. This pattern uses an agent to turn the current-state analysis into a phased transformation roadmap, complete with sequencing, budgets, milestones, dependencies, and a maintenance plan, so the thing that actually closes the engagement is ready when the insight lands.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `phased-transformation-roadmap` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/phased-transformation-roadmap/`.

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
