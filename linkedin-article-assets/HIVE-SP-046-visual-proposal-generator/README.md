# Your Proposal Is 40 Pages. The Decision Was Made on One Slide.

A Built-in-the-Hive playbook: an agent that turns a 40-page proposal into the one visual, evidence-backed page that actually closes. Built on Copilot, Foundry, and Power BI.

Companion article: "Your Proposal Is 40 Pages. The Decision Was Made on One Slide." (Built in the Hive, HIVE-SP-046).

## Business value

Firms pour days into proposals that run forty pages, and then the client decides in the first two minutes, on a single slide, if there even is one. Buyers do not read proposals cover to cover; they scan for the one view that answers "what will this do for us, and why should I believe you." The appendix exists to defend that view, not to make the case. This pattern uses an agent to invert the usual process: pull the substance from scope and findings, identify the single decision slide, back its central claim with cited evidence, generate the whole thing as a visual rather than a wall of text, and assemble a client-ready deck a partner signs off. The proposal leads with the answer and holds the proof behind it, which is how proposals actually close.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `visual-proposal-generator` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/visual-proposal-generator/`.

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
