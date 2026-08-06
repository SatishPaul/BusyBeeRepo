# Deployable Solution: Stochastic AI Governance Rail

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that grounds generative outputs in firm data, evaluates them for grounding, consistency, and error, and gates consequential actions behind human approval.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-061-stochastic-ai-governance/`. Licensed Apache-2.0.

An AI-literacy playbook; adapt controls to your own risk posture.

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
  tables/aioutput.yaml
  tables/groundingsource.yaml
  tables/evalresult.yaml
  tables/approvalgate.yaml
  flows/grounding-retrieval.md
  flows/output-evaluation.md
  flows/reliability-dashboard.md
/copilot-studio
  agent-governed-generation.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_aioutput`, `proserv_groundingsource`, `proserv_evalresult`, `proserv_approvalgate`, `proserv_variancelog`, and `proserv_auditlog` with prompt, output, source links, citation text, eval scores, hallucination flag, risk tier, approver, decision, and audit-log columns.

## Infrastructure
Deploy Azure AI Search for grounding retrieval, Azure AI Foundry for generation and evaluation, Dataverse for the governed records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview supplies classification and citation metadata; Power BI hosts the reliability dashboard.

## Copilot Studio agent config
Create a governed-generation agent with a scoped identity. Instruct it to answer only from retrieved, cited context, to flag any claim it cannot substantiate rather than assert it, to run at low temperature for consequential tasks, and to route any filing, send, payment, or advice through a human approval gate.

## Flows
1. Grounding retrieval flow returns cited context from the search index.
2. Output evaluation flow scores grounding, consistency, and error.
3. Reliability dashboard flow refreshes Power BI.
4. Approval gate flow routes risky actions to a human with an audit trail.
5. Drift monitor flow runs the control set and alerts on threshold breach.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the grounding search index.
4. Connect the search index to firm documents.
5. Import flows disabled.
6. Configure the Copilot Studio agent and evals.
7. Enable flows.
8. Run smoke tests including a hallucination-flag and a blocked-action case.

## Definition of done
- Every AI output is grounded in retrieved sources and cited.
- Ungrounded or unsupported claims are flagged, never fabricated.
- Outputs are scored for grounding, consistency, and error on generation.
- Consequential actions pause for a tiered human approval with a full audit trail.
- Power BI shows grounding coverage, consistency, hallucination rate, and approval SLAs over time.
