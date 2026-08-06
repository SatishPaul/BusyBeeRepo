# Your AI Won't Give the Same Answer Twice. Ship It Anyway.

A Built-in-the-Hive playbook: Gen AI is stochastic, so the same input gives a similar but never identical output. This shows professional-services teams how to govern that randomness, with grounding, low temperature, evals, and human gates, so AI output becomes reproducible and defensible. Built on Copilot Studio, Azure AI Search, Foundry, Dataverse, and Purview. An AI-literacy playbook, not a model.

Companion article: "Your AI Won't Give the Same Answer Twice. Ship It Anyway." (Built in the Hive, HIVE-SP-061).

## Business value

Classic software is deterministic: the same input always returns the same output, which is why a professional can trust a formula that says 2 plus 2 is 4 every single time. Generative AI does not work that way. It is stochastic, so the same prompt returns a similar but never quite identical answer, and sometimes a confidently wrong one. For firms whose entire value rests on being reproducible and defensible, that randomness feels disqualifying. It is not. The move is to stop trying to make the model deterministic and instead wrap it in controls, tight scope, grounding in your own data, low temperature, automated evaluation, and a human gate on anything risky, so the output becomes something you can sign.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `stochastic-ai-governance` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/stochastic-ai-governance/`.

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
