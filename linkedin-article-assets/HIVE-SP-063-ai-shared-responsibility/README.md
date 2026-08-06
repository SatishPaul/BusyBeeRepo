# The Model Is Their Job. The Risk Is Yours.

A Built-in-the-Hive playbook: the AI shared responsibility model shows which duties the provider performs and which stay with the customer across IaaS, PaaS, and SaaS. This shows professional-services teams how to map the split, own the duties that never transfer (identity, data governance, usage policy, accountability), and add the guardrails that make a stochastic model safer. Built on Microsoft Entra, Purview, Foundry, and Defender. An AI-literacy playbook.

Companion article: "The Model Is Their Job. The Risk Is Yours." (Built in the Hive, HIVE-SP-063).

## Business value

Every firm putting AI to work is standing on a divided line: some of the safety, security, and governance is handled by the provider, and some of it is, permanently, yours. That line moves depending on the layer you operate at. Bring your own model on raw infrastructure and you own almost everything. Build on a platform like Azure AI Foundry and the provider takes on more. Consume a finished product like Microsoft 365 Copilot and Microsoft handles most of the stack. But no matter how far toward finished software you go, a set of responsibilities never transfers: identity and access, data governance, usage policy, and accountability for the outcome. The firms that stay safe are the ones that read the model correctly, own their side of the line, and build the guardrails their layer demands.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `ai-shared-responsibility` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/ai-shared-responsibility/`.

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
