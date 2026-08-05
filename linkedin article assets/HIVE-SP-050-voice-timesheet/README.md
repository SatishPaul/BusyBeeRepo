# Timesheets Are Where Billable Hours Go to Die.

A Built-in-the-Hive playbook: voice-logged daily activity becomes structured, billable-ready time and matter entries. Built on Copilot, Power Automate, and Dataverse.

Companion article: "Timesheets Are Where Billable Hours Go to Die." (Built in the Hive, HIVE-SP-050).

## Business value

The billable hour is the atom of professional-services revenue, and the timesheet is where a shocking amount of it quietly disappears. Not through fraud or laziness, but through memory. Work happens all day, in fragments, across clients, and the timesheet gets filled in on Friday from recollection, which means the small entries get rounded down, the context-switches get forgotten, and a real slice of billable work simply never gets recorded. This pattern moves capture to the moment: a professional speaks a short note as the work happens, and an agent turns it into a structured, matter-coded, billable-ready time entry. The Friday reconstruction, and the revenue it loses, goes away.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `voice-timesheet` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/voice-timesheet/`.

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

**Low.** See `recipe.yaml` for the drivers.

## License

Apache-2.0. See repository `LICENSE` and `NOTICE`.
