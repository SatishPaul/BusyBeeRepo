# Your AI Isn't Thinking. It's Autocomplete With a PhD.

A Built-in-the-Hive playbook: a generative model is powerful autocomplete that predicts the next word from patterns and context, so quality is engineered in the context around it, not wished into the model. Shows professional-services teams how to engineer context, grounding, tools, and guardrails to turn prediction into dependable automation. Built on Copilot Studio, Azure AI Search, Foundry, Power Automate, and Purview. An AI-literacy playbook.

Companion article: "Your AI Isn't Thinking. It's Autocomplete With a PhD." (Built in the Hive, HIVE-SP-062).

## Business value

Strip away the hype and a generative model does exactly one thing: it predicts the next word, then the next, based on patterns in its training data and whatever you put in front of it. That is it. It is autocomplete, scaled to something astonishing, but autocomplete all the same. Understanding this is not deflating, it is liberating, because it tells you exactly where the leverage is. You cannot make the model smarter by wishing, and you rarely need a bigger one. You make it useful by engineering what surrounds it: the role you give it, the data you ground it in, the memory you carry, the tools you hand it, and the guardrails that keep it in bounds. The firms that internalize this stop chasing models and start engineering context.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `autocomplete-not-magic` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/autocomplete-not-magic/`.

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
