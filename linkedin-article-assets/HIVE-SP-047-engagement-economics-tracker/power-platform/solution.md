# Deployable Solution: Engagement Economics Tracker

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Fabric, Power Platform, and Dataverse reference app that maintains a live engagement P and L, computes budget-versus-actual continuously, flags margin leaks early, and forecasts to completion.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-047-engagement-economics-tracker/`. Licensed Apache-2.0.

A firm-operations playbook; adapt to your own financial systems.

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
  tables/engagementledger.yaml
  tables/variance.yaml
  tables/forecast.yaml
  flows/financial-unification.md
  flows/variance-alert.md
  flows/margin-dashboard.md
/copilot-studio
  agent-economics-tracker.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_engagementledger`, `proserv_costentry`, `proserv_billingentry`, `proserv_variance`, `proserv_leakflag`, and `proserv_forecast` with budget, actual cost, billed, staffing mix, variance type, cause, threshold, projected margin, and audit-log columns.

## Infrastructure
Deploy Microsoft Fabric to unify time, cost, and billing data, Azure AI Foundry for variance analysis, Dataverse for the governed ledger, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power BI hosts the margin dashboard; Purview classifies financial data.

## Copilot Studio agent config
Create an economics-tracker agent with a scoped, read-only identity over financial sources. Instruct it to maintain the ledger continuously, compute budget-versus-actual, classify and flag variances by cause, forecast to completion from live actuals, and flag any figure it cannot reconcile rather than presenting a confident but wrong total.

## Flows
1. Financial unification flow keeps the ledger current from all sources.
2. Variance alert flow flags leaks above threshold.
3. Margin dashboard flow refreshes Power BI.
4. Forecast flow projects margin to completion.
5. Reconciliation flow flags figures that do not tie.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and connect Fabric.
4. Connect time, cost, and billing sources.
5. Import flows disabled.
6. Configure the Copilot Studio agent and thresholds.
7. Enable flows.
8. Run smoke tests including an unreconciled-figure flag case.

## Definition of done
- Time, cost, and billing are unified into a continuously updated ledger.
- Budget-versus-actual and variance are computed live, not at quarter-end.
- Margin leaks are flagged early with a cause.
- Unreconciled figures are flagged, never presented as confident totals.
- Power BI shows live margin, leaks, and a rolling forecast by engagement.
