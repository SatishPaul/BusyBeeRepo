# Deployable Solution: Durable Engagement Memory

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that captures decisions and their rationale, stores them durably, indexes them for recall, and answers "why did we decide this" with grounded, cited, engagement-scoped responses.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-053-durable-engagement-memory/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own engagement structure.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/search.bicep
  modules/network.bicep
/power-platform
  tables/decision.yaml
  tables/rationale.yaml
  tables/recall.yaml
  flows/decision-capture.md
  flows/memory-index.md
  flows/coherence-dashboard.md
/copilot-studio
  agent-engagement-memory.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_decision`, `proserv_engagement`, `proserv_rationale`, `proserv_recall`, and `proserv_coherence` with decision, reasoning, alternatives, owner, scope, question, retrieved decision, citation, and audit-log columns.

## Infrastructure
Deploy Azure AI Search for recall, Azure AI Foundry for capture and answering, Dataverse for the durable memory, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot Studio hosts the recall agent; Purview governs scope; Power BI hosts the coherence dashboard.

## Copilot Studio agent config
Create an engagement-memory agent with a scoped identity. Instruct it to capture decisions with their rationale, answer recall questions only from what was captured, cite the source decision, say plainly when no decision matches rather than reconstructing one, enforce engagement scope, and leave judgment to a human.

## Flows
1. Decision capture flow records decisions and rationale from meetings and chats.
2. Memory index flow answers recall questions with citations.
3. Coherence dashboard flow refreshes Power BI.
4. Scope enforcement flow bounds recall to the engagement.
5. Coherence tracking flow measures relitigation and drift.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Index the engagement's decisions with scopes.
5. Import flows disabled.
6. Configure the Copilot Studio agent and scope model.
7. Enable flows.
8. Run smoke tests including an out-of-scope and a no-match case.

## Definition of done
- Decisions are captured with their rationale as they are made.
- Recall answers questions only from captured decisions, cited.
- No-match questions return plainly, never a reconstructed answer.
- Access is scoped to the engagement and its participants.
- Power BI shows relitigation, recall use, drift, and context-transfer time.
