# Deployable Solution: Invoice Duplicate & Price-Creep Auditor

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that reads every AP invoice, maintains a living ledger, matches each line against history, and flags duplicates, price creep, and unauthorized charges for human review.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-048-invoice-duplicate-auditor/`. Licensed Apache-2.0.

A technology playbook, not a controls opinion.

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
  tables/invoice.yaml
  tables/anomaly.yaml
  tables/exception.yaml
  flows/invoice-ingestion.md
  flows/matching-flagging.md
  flows/recovery-dashboard.md
/copilot-studio
  agent-ap-auditor.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_invoice`, `proserv_vendor`, `proserv_lineitem`, `proserv_anomaly`, `proserv_exception`, and `proserv_auditlog` with vendor, amount, date, line item, PO reference, anomaly type, matched invoice, delta, evidence link, reviewer, recovery amount, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for invoice reading and matching, Microsoft Fabric for line-level comparison against history, Dataverse for the governed ledger, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview classifies financial data; Power BI hosts the recovery dashboard.

## Copilot Studio agent config
Create an AP-auditor agent with a scoped, read-only identity over AP sources. Instruct it to read every invoice and its emails, maintain the ledger, match each line against history, flag duplicates, price creep, and unauthorized charges with evidence, surface ambiguous matches rather than forcing them, and route every flag to a human before any dispute.

## Flows
1. Invoice ingestion flow parses every invoice into ledger records.
2. Matching and flagging flow checks each line and flags anomalies.
3. Recovery dashboard flow refreshes Power BI.
4. Review routing flow sends flags to a human to confirm.
5. Recovery tracking flow records confirmed clawbacks.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and connect Fabric.
4. Connect AP and email sources.
5. Import flows disabled.
6. Configure the Copilot Studio agent and thresholds.
7. Enable flows.
8. Run smoke tests including an ambiguous-match and a confirmed-duplicate case.

## Definition of done
- Every invoice and its emails are read into a maintained ledger.
- Each line is matched against history for duplicates and price creep.
- Anomalies are flagged with evidence; ambiguous matches are surfaced, not forced.
- Every flag is confirmed by a human before any dispute; nothing is automatic.
- Power BI shows coverage, anomalies by type and vendor, and recovered value.
