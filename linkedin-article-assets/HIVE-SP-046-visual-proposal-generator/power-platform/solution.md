# Deployable Solution: Visual Proposal Generator

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Power BI reference app that turns engagement substance into a visual, evidence-backed proposal built around the single decision slide.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-046-visual-proposal-generator/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own proposal style and brand.

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
  tables/decisionslide.yaml
  tables/evidence.yaml
  flows/substance-extraction.md
  flows/visual-generation.md
  flows/proposal-dashboard.md
/copilot-studio
  agent-proposal-generator.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_proposal`, `proserv_valuepoint`, `proserv_decisionslide`, `proserv_evidence`, and `proserv_proposaldeck` with claim, value metric, scope item, evidence link, slide role, visual type, approval status, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for substance extraction and layout, Azure AI Search to cite evidence, Dataverse for the proposal records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power BI generates the visuals; Purview gates sensitive content.

## Copilot Studio agent config
Create a proposal-generator agent with a scoped identity. Instruct it to extract scope, value, and proof from engagement material, identify the single decision slide, ground its central claim in cited evidence, generate the proposal as visuals rather than text, flag any claim the substance does not support, and route the deck to a partner for sign-off.

## Flows
1. Substance extraction flow structures scope, value, and proof.
2. Visual generation flow builds the decision slide and supporting visuals.
3. Proposal dashboard flow refreshes Power BI.
4. Assembly flow leads with the decision and holds the depth behind it.
5. Approval flow gates the deck for partner sign-off.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the evidence index.
4. Connect the engagement material sources.
5. Import flows disabled.
6. Configure the Copilot Studio agent and grounding.
7. Enable flows.
8. Run smoke tests including an unsupported-claim flag case.

## Definition of done
- Engagement substance is extracted into structured value points with evidence.
- The single decision slide is identified and grounded in cited evidence.
- The proposal is generated as visuals leading with the decision.
- Claims the substance does not support are flagged, never inflated.
- Power BI relates proposal style to close rate and build time.
