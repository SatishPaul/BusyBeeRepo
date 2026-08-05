# One Deliverable, a Hundred Variations, Zero Extra Hours.

A Built-in-the-Hive playbook: governed batch generation of client-ready deliverables, one template into a hundred governed variants with zero extra hours. Built on Foundry, Copilot, and Purview.

Companion article: "One Deliverable, a Hundred Variations, Zero Extra Hours." (Built in the Hive, HIVE-SP-057).

## Business value

Firms produce the same deliverable in many versions all the time: a report tailored to fifty entities, a deck localized for a dozen markets, a summary segmented by audience. Traditionally each variant is hand-built, so producing a hundred costs roughly a hundred times the first, and quality drifts as fatigue sets in. This pattern breaks that link. Start from one approved master, define the axes of variation, generate the full set at scale, verify each output against the master's standard, and gate the whole batch behind human sign-off. The hundredth variant costs like the first, and the set is more consistent than a hundred hand-built copies could ever be, because every one is checked against the same standard rather than the last one someone remembered.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `batch-deliverable-generator` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/batch-deliverable-generator/`.

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
