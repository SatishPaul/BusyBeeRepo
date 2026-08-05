# Deployable Solution: Institutional Knowledge Base

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Fabric, Azure AI, and Power Platform reference app that gathers engagement history, structures the lessons, indexes them for retrieval, and answers new-staff questions with grounded, cited, access-governed responses.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-052-onboarding-knowledge-base/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own history and access model.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/fabric.bicep
  modules/search.bicep
  modules/network.bicep
/power-platform
  tables/lesson.yaml
  tables/query.yaml
  tables/ramp.yaml
  flows/history-ingestion.md
  flows/indexing-retrieval.md
  flows/knowledge-dashboard.md
/copilot-studio
  agent-knowledge-base.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_lesson`, `proserv_engagement`, `proserv_accessscope`, `proserv_query`, `proserv_answer`, and `proserv_ramp` with lesson, context, source, tags, scope, question, retrieved lessons, citations, ramp week, and audit-log columns.

## Infrastructure
Deploy Microsoft Fabric to unify engagement history, Azure AI Search for retrieval, Azure AI Foundry for structuring and answering, Dataverse for the governed records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot Studio hosts the Q&A agent; Purview governs access; Power BI hosts the dashboard.

## Copilot Studio agent config
Create a knowledge-base agent with a scoped identity. Instruct it to answer only from retrieved, cited firm history, enforce access scope so each person reaches only what they may see, say plainly when the history has no answer rather than inventing one, and route to a human when a question needs judgment beyond the record.

## Flows
1. History ingestion flow gathers and normalizes engagement history.
2. Indexing and retrieval flow answers questions with cited retrieval.
3. Knowledge dashboard flow refreshes Power BI.
4. Access enforcement flow scopes retrieval per person.
5. Ramp tracking flow measures coverage and ramp time.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and connect Fabric.
4. Index the engagement history with access scopes.
5. Import flows disabled.
6. Configure the Copilot Studio agent and access model.
7. Enable flows.
8. Run smoke tests including an out-of-scope access and a no-answer case.

## Definition of done
- Engagement history is gathered, structured, and indexed for retrieval.
- New-staff questions are answered with grounded, cited responses.
- Access is scoped so each person reaches only what they are entitled to.
- The base says when it has no answer, never inventing one.
- Power BI shows question coverage, ramp time, lesson reuse, and knowledge gaps.
