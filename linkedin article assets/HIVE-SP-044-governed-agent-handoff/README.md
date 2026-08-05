# Your Agents Do Great Work and Hand It to Nobody.

A Built-in-the-Hive playbook: a governed multi-agent handoff where each stage signals completion and the next picks up, so agent work never dead-ends. Built on Foundry, Copilot Studio, and Dataverse.

Companion article: "Your Agents Do Great Work and Hand It to Nobody." (Built in the Hive, HIVE-SP-044).

## Business value

The first wave of agent projects gave every team a set of capable agents that each do good work in isolation and then drop it into a void. One agent drafts, another reviews, a third files, but nothing connects them, so the "team" is really three soloists who never pass the baton. The value in multi-agent work is not the agents; it is the handoff. This pattern builds a governed relay where each agent finishes its scoped lane, emits a completion signal, has its output verified at the pass, and hands a typed artifact to the next agent, with the whole chain logged. The result is a multi-step job that actually completes, instead of a pile of half-finished outputs that a human has to stitch together by hand.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `governed-agent-handoff` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/governed-agent-handoff/`.

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
