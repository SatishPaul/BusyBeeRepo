# Deployable Solution: Right-Size Your Intelligence Spend

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI Foundry, and Dataverse reference app that puts a gateway and a right-sizing router in front of many model tiers, so each unit of work runs on the cheapest system that clears its threshold and cost per successful outcome is measured and falls.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin-article-assets/HIVE-SP-066-right-size-intelligence-spend/`. Licensed Apache-2.0.

Figures referenced in the companion article are illustrative or drawn from public industry data.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/localinference.bicep
  modules/network.bicep
/power-platform
  tables/model.yaml
  tables/tier.yaml
  tables/taskclass.yaml
  tables/routingpolicy.yaml
  tables/workunit.yaml
  tables/outcome.yaml
  flows/intelligence-gateway.md
  flows/right-sizing-router.md
  flows/hybrid-decompose-execute.md
/copilot-studio
  agent-right-sizing.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_model`, `proserv_tier`, `proserv_capability`, `proserv_taskclass`, `proserv_threshold`, `proserv_routingpolicy`, `proserv_workunit`, `proserv_modelcall`, and `proserv_outcome`. Capture model tier and cost per unit, task-class difficulty and threshold, chosen model and fallback, per-call tokens and cost, escalation and verified-outcome flags, and time to done, so cost per successful outcome is computed per task class.

## Infrastructure
Deploy Azure AI Foundry for model routing across tiers, a local or small-model inference option for cheap and private work, Dataverse for the registry and ledger, Power BI for the cost-per-outcome dashboard, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. A gateway standardizes access and enforces budget and residency; Purview secures and labels data across cloud and local.

## Copilot Studio agent config
Create a right-sizing agent with a scoped identity. Instruct it to size each request to the cheapest tier that clears its threshold, escalate a tier only on low confidence or a novel case, keep sensitive or regulated work local, apply overthinking caps so simple tasks cannot spawn long loops, and log tier and cost for every call.

## Flows
1. Intelligence gateway enforces budget, security, and residency on every call.
2. Right-sizing router sends each unit of work to the cheapest capable tier with escalation.
3. Hybrid decompose-and-execute uses a frontier model to plan and small local models to execute.
4. Ledger flow logs tier, tokens, cost, and outcome per work unit.
5. Cost-per-outcome flow refreshes the Power BI dashboard.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Register model tiers, thresholds, and routing policies.
5. Import flows disabled.
6. Configure the Copilot Studio right-sizing agent and the gateway.
7. Enable flows.
8. Run smoke tests: a simple task resolves on a local tier, a novel task escalates to frontier, and the cost-per-outcome dashboard updates.

## Definition of done
- A gateway and router front every model call, and each request runs on the cheapest tier that clears its threshold.
- Sensitive or regulated work stays local unless an explicit residency decision allows otherwise.
- Overthinking caps stop simple tasks from spawning long agent loops.
- Every call is logged with tier and cost, and cost per successful outcome is computed per task class.
- Power BI shows the share of calls served below the frontier and intelligence consumed per outcome falling over time.
