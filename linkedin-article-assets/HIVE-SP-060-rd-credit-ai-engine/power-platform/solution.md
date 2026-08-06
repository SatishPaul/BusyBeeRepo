# Deployable Solution: R&D Credit Documentation Engine

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Fabric, and Azure reference app that discovers qualifying AI and development activity, applies the four-part test, assembles evidence from existing data, and maps qualified costs into a defensible R&D credit position.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `recipes/tax/rd-credit-ai-engine/`. Licensed Apache-2.0.

Not tax advice; eligibility and amounts depend on your facts and applicable law.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/fabric.bicep
  modules/network.bicep
/power-platform
  tables/rdactivity.yaml
  tables/qualifiedcost.yaml
  tables/creditposition.yaml
  flows/activity-discovery.md
  flows/evidence-assembly.md
  flows/credit-value-dashboard.md
/copilot-studio
  agent-rd-credit.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_rdactivity`, `proserv_fourparttest`, `proserv_evidence`, `proserv_qualifiedcost`, `proserv_costsource`, and `proserv_creditposition` with activity, project, four-part-test fields, evidence link, cost type, amount, source, allocation basis, tax year, documentation status, and audit-log columns.

## Infrastructure
Deploy Microsoft Fabric to unify project, code, and financial data, Azure AI Foundry for classification and four-part-test reasoning, Azure AI Search for evidence retrieval, Dataverse for the governed position, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview supplies citation metadata and classification; Power BI hosts the credit-value dashboard.

## Copilot Studio agent config
Create an R&D credit agent with a scoped, read-only identity over the source systems. Instruct it to discover candidate activities, apply the four-part test with documented reasoning, assemble cited evidence from existing data, map qualified costs to source records, and never assert an unsubstantiated claim or an estimated cost without flagging it.

## Flows
1. Activity discovery flow scans repos, tickets, and project tools for candidates.
2. Evidence assembly flow links supporting artifacts and flags gaps.
3. Credit value dashboard flow refreshes Power BI.
4. Cost mapping flow traces qualified costs to activities.
5. Readiness flow reports documentation completeness and exam readiness.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the evidence search index.
4. Connect Fabric to project, code, and finance sources.
5. Import flows disabled.
6. Configure the Copilot Studio agent and sources.
7. Enable flows.
8. Run smoke tests including a flagged missing-evidence case.

## Definition of done
- Candidate activities are discovered from source systems on a schedule.
- Each activity carries a documented four-part-test result.
- Evidence is assembled from existing data and cited, with gaps flagged, never fabricated.
- Qualified costs are traced to source records, not estimated.
- Power BI shows eligible activity, qualified cost, documentation completeness, and estimated credit over time.
