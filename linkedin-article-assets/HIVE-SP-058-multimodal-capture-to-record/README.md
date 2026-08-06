# Snap the Whiteboard. Get the Workpaper.

A Built-in-the-Hive playbook: photograph a document, whiteboard, or inventory and get a structured, governed record back. Built on Copilot, Foundry, and Dataverse.

Companion article: "Snap the Whiteboard. Get the Workpaper." (Built in the Hive, HIVE-SP-058).

## Business value

A great deal of professional work still ends with someone photographing a document, a whiteboard, an inventory shelf, a receipt, and then re-typing it into a system back at the desk. The record already exists in the room; the transcription is pure waste, and worse, it introduces errors every time a human re-keys what a camera already captured. This pattern removes the re-typing: photograph the thing, and a multimodal agent reads the image, extracts the text, tables, and diagrams, maps them to the right record fields, flags anything it could not read with confidence, and produces a draft record for a human to confirm and file. The evidence that was already in the room becomes a structured, governed workpaper, without the trip through a keyboard.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `multimodal-capture-to-record` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/multimodal-capture-to-record/`.

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
