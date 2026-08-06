# The Best Audit Insight Dies in the Hallway Between the Client and Your Desk

A Built-in-the-Hive playbook: on-site voice capture becomes structured, governed workpaper tasks by morning. Built on Copilot, Dataverse, and Purview.

Companion article: "The Best Audit Insight Dies in the Hallway Between the Client and Your Desk" (Built in the Hive, HIVE-SP-042).

## Business value

The sharpest thing an auditor notices happens on the client's floor, a control that looks off, a document that does not match, an offhand comment that matters, and far too much of it evaporates on the walk back to the desk. By the time there is a keyboard, the detail is fuzzy and the moment has passed. The pattern here is voice capture to a structured record: the auditor speaks the observation on the spot, and a governed agent turns it into a classified, evidence-linked, assigned workpaper task by morning. The insight reaches the file while it is still sharp.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `voice-to-workpaper` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/voice-to-workpaper/`.

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
