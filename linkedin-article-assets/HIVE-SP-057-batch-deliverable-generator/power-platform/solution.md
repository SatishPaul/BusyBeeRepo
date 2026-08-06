# Deployable Solution: Governed Batch Deliverable Generator

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that generates many client-ready variants from one approved master, verifies each against the standard, and gates the batch behind human sign-off.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-057-batch-deliverable-generator/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own deliverables.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/network.bicep
/power-platform
  tables/master.yaml
  tables/variant.yaml
  tables/verification.yaml
  flows/batch-generation.md
  flows/verification.md
  flows/throughput-dashboard.md
/copilot-studio
  agent-batch-generator.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_master`, `proserv_variantspec`, `proserv_variant`, `proserv_verification`, and `proserv_batchapproval` with master, approval status, variation axis, value set, consistency score, rule pass, deviation, approver, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for generation and evaluation, Dataverse for the master and variant records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot holds the master; Purview gates and classifies; Power BI hosts the throughput dashboard.

## Copilot Studio agent config
Create a batch-generator agent with a scoped identity. Instruct it to generate each variant from the approved master and variation spec, verify every output against the master's standard, flag any deviation rather than shipping it, require human sign-off on the batch, and never release an unverified or unapproved set.

## Flows
1. Batch generation flow produces the variant set from the master.
2. Verification flow checks each variant against the standard.
3. Throughput dashboard flow refreshes Power BI.
4. Deviation flow routes flagged variants for attention.
5. Approval flow gates the batch for release.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Register the master and variation spec.
5. Import flows disabled.
6. Configure the Copilot Studio agent and standard checks.
7. Enable flows.
8. Run smoke tests including a deviating-variant flag case.

## Definition of done
- Variants are generated from one approved master and a variation spec.
- Each variant is verified against the master's standard for consistency and rules.
- Deviating outputs are flagged, never shipped.
- The whole batch passes a human gate before release.
- Power BI shows cost per variant, throughput, quality variance, and time to full set.
