# Frontier AI Vendors and You Want Opposite Things

A Built-in-the-Hive playbook: on most professional-services work a frontier-model vendor profits when you overspend on intelligence and your firm profits when you don't, so their objectives are diametrically opposed for common use cases. Every workload has an intelligence threshold, and past it more intelligence adds cost, not value. This shows Tax, Audit, Advisory, and IT Consulting teams how to own the routing decision on Azure, the APIM GenAI gateway, the Azure AI Foundry model router, Foundry Local, Azure AI Agent Service, and Purview plus Dataverse plus Power BI, so cost per successful outcome falls. Figures are illustrative or from public industry data.

Companion article: "Frontier AI Vendors and You Want Opposite Things" (Built in the Hive, HIVE-SP-066).

## Business value

Frontier AI models are astonishing, and in the right place worth a fortune. But on most of what a professional-services firm actually bills for, the model vendor's goal and your goal are diametrically opposed: the vendor profits when you consume more intelligence, and you profit when you consume less. A tax preparer, an auditor, an advisory consultant, an IT analyst are not making discoveries; they are applying the firm's rules, precedents, and this client's data. Every workload has an intelligence threshold: below it the model fails, near it more intelligence is hugely valuable, and past it more intelligence adds cost, not value. Models keep getting smarter while refund-policy lookups and depreciation calculations do not. The move is to own the routing decision rather than leave it to whoever profits from the answer being "more": route each unit of work to the cheapest system that still gets it right, reserve frontier models for genuine novelty, and drive intelligence consumed per successful outcome toward zero. Azure ships the exact control plane to do it.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `right-size-intelligence-spend` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/right-size-intelligence-spend/`.

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
