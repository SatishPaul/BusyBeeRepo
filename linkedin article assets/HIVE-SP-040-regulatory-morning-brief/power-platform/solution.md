# Deployable Solution: Regulatory Morning Brief Agent

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform and Azure reference app for a scheduled research agent that scans regulatory sources overnight, scores each item against the client list, and delivers a ranked, cited morning brief plus a coverage dashboard.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `recipes/tax/regulatory-morning-brief/`. Licensed Apache-2.0.

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
  tables/regchange.yaml
  tables/authority.yaml
  tables/clientimpact.yaml
  flows/overnight-scan.md
  flows/relevance-scoring.md
  flows/brief-compose.md
/copilot-studio
  agent-regulatory-watch.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_regchange`, `proserv_authority`, `proserv_source`, `proserv_engagement`, `proserv_relevancescore`, `proserv_clientimpact`, `proserv_brief`, and `proserv_briefitem` with change summary, source URL, jurisdiction, effective date, engagement profile, relevance score, factors, citation, rank, and action-status columns.

## Infrastructure
Deploy Azure Logic Apps for the overnight schedule, Azure AI Search for grounding and dedupe over the firm authority base, Azure AI Foundry for scoring and brief composition, OneLake and SharePoint for the authority corpus, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview supplies citation metadata and classification; Power BI hosts the coverage dashboard.

## Copilot Studio agent config
Create a regulatory-watch agent with a scoped, read-only identity over the sources. Instruct it to scan on schedule, ground each item against the authority index, dedupe, score against every engagement profile, cite every item or mark it unconfirmed, and never fabricate a source.

## Flows
1. Overnight scan flow sweeps sources, grounds and dedupes, writes change records.
2. Relevance scoring flow scores each change against every engagement and flags items above threshold.
3. Brief compose flow ranks the top items, attaches citations, and delivers before standup.
4. Coverage flow updates the Power BI dashboard.
5. Escalation flow alerts owners of high-impact changes.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the authority search index.
4. Ingest and classify the authority corpus.
5. Import flows disabled.
6. Configure the Copilot Studio agent and sources.
7. Enable flows.
8. Run smoke tests including a forced unconfirmed-source case.

## Definition of done
- The overnight scan runs on schedule and grounds and dedupes every item.
- Each change is scored against every engagement with explainable factors.
- Every brief item carries a citation, or is clearly marked unconfirmed.
- The brief is delivered before the first standup, ranked by client relevance.
- Power BI shows coverage, reading hours saved, and time-to-client over time.
