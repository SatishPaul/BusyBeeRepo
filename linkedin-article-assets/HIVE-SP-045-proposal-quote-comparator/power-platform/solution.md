# Deployable Solution: Proposal & Quote Comparator

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that gathers vendor proposals, normalizes their terms to one basis, scores them against a governed rubric, and produces a ranked, cited comparison.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-045-proposal-quote-comparator/`. Licensed Apache-2.0.

A technology playbook; adapt the rubric to your own criteria.

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
  tables/proposal.yaml
  tables/normalizedterm.yaml
  tables/score.yaml
  flows/proposal-gathering.md
  flows/normalization.md
  flows/comparison-dashboard.md
/copilot-studio
  agent-comparator.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_proposal`, `proserv_provider`, `proserv_term`, `proserv_normalizedterm`, `proserv_criterion`, `proserv_score`, and `proserv_recommendation` with provider, pricing basis, term text, normalized value, criterion, weight, score, evidence reference, rank, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for extraction and normalization, Azure AI Search to cite evidence, Dataverse for the proposal and score records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power BI hosts the comparison dashboard.

## Copilot Studio agent config
Create a comparator agent with a scoped identity. Instruct it to gather proposals from every listed provider, normalize terms to one basis, score against the governed rubric with evidence per score, flag any missing term rather than inventing it, and produce a ranked shortlist a partner reviews.

## Flows
1. Proposal gathering flow ingests and structures proposals.
2. Normalization flow reduces terms to one comparable basis.
3. Comparison dashboard flow refreshes Power BI.
4. Scoring flow applies the rubric with evidence.
5. Ranking flow assembles the cited shortlist.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the evidence index.
4. Load the scoring rubric and criteria.
5. Import flows disabled.
6. Configure the Copilot Studio agent and grounding.
7. Enable flows.
8. Run smoke tests including a missing-term flag case.

## Definition of done
- Proposals are gathered from every listed provider, not a shortlist.
- Terms are normalized to one comparable basis, with the source term recorded.
- Each option is scored against the governed rubric with evidence per score.
- Missing terms are flagged, never invented.
- Power BI presents a ranked, cited comparison drillable by criterion.
