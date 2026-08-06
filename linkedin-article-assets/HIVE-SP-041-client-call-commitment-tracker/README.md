# Every Client Call Has Three Action Items You Will Forget by Friday

A Built-in-the-Hive playbook: an agent that turns client-call notes into tracked commitments and surfaces recurring client themes and risks over months. Governed on Copilot, Power Automate, Dataverse, and Power BI.

Companion article: "Every Client Call Has Three Action Items You Will Forget by Friday" (Built in the Hive, HIVE-SP-041).

## Business value

Every client conversation ends with promises, send the analysis, loop in the specialist, follow up on the number, and by Friday half of them have quietly evaporated into a notebook nobody reopened. The relationship is not won in the meeting; it is won in the follow-through. The pattern here is a meeting-to-commitment agent: it captures every call, extracts who owes what by when, tracks each item to done, and, over months, surfaces the recurring themes a client keeps raising. The advisor stops relying on memory and starts running on a system that never forgets a promise.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `client-call-commitment-tracker` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/client-call-commitment-tracker/`.

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
