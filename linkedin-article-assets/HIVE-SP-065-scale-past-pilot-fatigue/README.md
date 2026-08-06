# Firms Are Tired of AI Pilot Fatigue. The Fix Is 7 Moves.

A Built-in-the-Hive playbook: firms launch a swarm of AI pilots, none scale, and teams quietly slide back to the manual way. A consulting leader named this pattern AI pilot fatigue in a public interview and shared a seven-move reset to beat it. This shows professional-services teams how to run that reset, name the outcome first, prove the data, assign sign-off, scope to one workflow, and change the tool and the process together, so one workflow reaches production instead of ten stalling. Six of the seven moves are about people, not technology. Built on Copilot, Copilot Studio, Power BI, Dataverse, and Purview.

Companion article: "Firms Are Tired of AI Pilot Fatigue. The Fix Is 7 Moves." (Built in the Hive, HIVE-SP-065).

## Business value

A Deloitte chief executive said publicly what many leaders felt but had not named: clients are tired of AI, not the idea, the pattern. Teams launch a swarm of pilots, none scale, and everyone slides back to the manual way. He called it AI pilot fatigue and laid out a seven-move reset to beat it. The twist: six of the seven moves are about people and process, not technology. Name the outcome before the tool, prove the data can carry the use case, decide who signs off before launch, say what the AI will and will not do in one sentence, ask the people doing the work what slows them, stop building for everyone, and change the process and the tool together. This playbook turns that reset into a governed pattern on the Microsoft stack, so one workflow reaches production instead of ten stalling.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `scale-past-pilot-fatigue` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/scale-past-pilot-fatigue/`.

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
