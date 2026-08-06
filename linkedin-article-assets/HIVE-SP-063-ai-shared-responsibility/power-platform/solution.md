# Deployable Solution: AI Shared Responsibility Guardrail Platform

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Entra, and Purview reference app that maps each AI deployment to its layer, assigns an owner to every control, tracks the duties that never transfer, and documents the customer-side guardrails.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-063-ai-shared-responsibility/`. Licensed Apache-2.0.

An AI-literacy playbook; adapt controls to your own estate and policy.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/entra.bicep
  modules/purview.bicep
  modules/network.bicep
/power-platform
  tables/aideployment.yaml
  tables/responsibility.yaml
  tables/nevertransfer.yaml
  tables/guardrailposture.yaml
  flows/access-boundary.md
  flows/data-boundary.md
  flows/responsibility-posture-dashboard.md
/copilot-studio
  agent-responsibility-mapper.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_aideployment`, `proserv_responsibility`, `proserv_controlowner`, `proserv_nevertransfer`, `proserv_guardrailposture`, `proserv_controlevidence`, and `proserv_auditlog` with deployment, layer, control area, owner, provider-or-customer, duty, guardrail type, evidence link, and audit-log columns.

## Infrastructure
Deploy Microsoft Entra for identity and access, Purview for classification and DLP, Dataverse for the responsibility records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Azure AI Foundry supplies model-side safety controls; Power BI hosts the responsibility posture dashboard.

## Copilot Studio agent config
Create a responsibility-mapper agent with a scoped, read-only identity. Instruct it to classify a deployment by layer, map each control to a provider or customer owner, confirm the four never-transfer duties are owned with evidence, and flag any control assumed covered but unowned rather than asserting coverage.

## Flows
1. Access boundary flow provisions and reviews AI access against role.
2. Data boundary flow applies classification and DLP around AI calls.
3. Responsibility posture dashboard flow refreshes Power BI.
4. Duty confirmation flow checks the four never-transfer duties per deployment.
5. Guardrail review flow records customer-side guardrails with evidence.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Connect Entra and Purview policies.
5. Import flows disabled.
6. Configure the Copilot Studio agent and the responsibility map.
7. Enable flows.
8. Run smoke tests including an assumed-covered gap and a blocked data boundary.

## Definition of done
- Every AI deployment is classified by layer with an owner for each control.
- The four never-transfer duties are tracked as owned controls with evidence.
- Controls assumed covered but unowned are flagged, never asserted as safe.
- Customer-side guardrails are documented with a full audit trail.
- Power BI shows ownership coverage, never-transfer duties, and guardrail completeness by layer.
