# Deployable Solution: Data Optimization Finder

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Fabric, Azure AI, and Power Platform reference app that unifies a client's data, analyzes it for optimization patterns, quantifies each opportunity, and grounds every one in the source data.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-056-data-optimization-finder/`. Licensed Apache-2.0.

A technology playbook; adapt to your own data model.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/fabric.bicep
  modules/foundry.bicep
  modules/network.bicep
/power-platform
  tables/opportunity.yaml
  tables/pattern.yaml
  tables/savingsplan.yaml
  flows/data-unification.md
  flows/opportunity-analysis.md
  flows/savings-dashboard.md
/copilot-studio
  agent-optimization-finder.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_opportunity`, `proserv_datasource`, `proserv_pattern`, `proserv_evidence`, and `proserv_savingsplan` with pattern, estimated saving, confidence, source data, magnitude, rank, effort, evidence link, and audit-log columns.

## Infrastructure
Deploy Microsoft Fabric to unify operational and spend data, Azure AI Foundry for pattern analysis, Azure AI Search to cite evidence, Dataverse for the opportunity records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power BI hosts the savings dashboard.

## Copilot Studio agent config
Create an optimization-finder agent with a scoped, read-only identity over the client's data. Instruct it to analyze unified data for waste and mismatch, quantify each opportunity, cite the supporting figures, flag any saving the data does not fully support rather than inflating it, and leave the recommendation to a human advisor.

## Flows
1. Data unification flow builds one analyzable view.
2. Opportunity analysis flow sizes and cites opportunities.
3. Savings dashboard flow refreshes Power BI.
4. Pattern flow surfaces waste and drift.
5. Plan flow assembles the ranked savings plan.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and connect Fabric.
4. Connect the client's data sources.
5. Import flows disabled.
6. Configure the Copilot Studio agent and grounding.
7. Enable flows.
8. Run smoke tests including an unsupported-saving flag case.

## Definition of done
- The client's operational and spend data is unified into one view.
- Patterns of waste and mismatch are surfaced from the data.
- Each opportunity is quantified and cited to its source figures.
- Savings the data does not support are flagged, never inflated.
- Power BI presents a ranked, evidence-backed savings plan.
