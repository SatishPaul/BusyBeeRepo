# Deployable Solution: Phased Transformation Roadmap Generator

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Project Operations reference app that turns a current-state findings set into a phased, budgeted, dependency-mapped roadmap a client can fund.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-043-phased-transformation-roadmap/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own methodology and rates.

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
  tables/roadmap.yaml
  tables/phase.yaml
  tables/dependency.yaml
  flows/findings-to-phases.md
  flows/budget-milestone.md
  flows/roadmap-dashboard.md
/copilot-studio
  agent-roadmap-generator.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_roadmap`, `proserv_phase`, `proserv_dependency`, `proserv_phasebudget`, and `proserv_rate` with phase name, sequence, effort, cost, milestone, predecessor, critical-path flag, confidence, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for phase structuring and estimation support, Azure AI Search to ground against the firm's methodology, Dataverse for the roadmap records, Project Operations for scheduling, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power BI hosts the client-ready roadmap dashboard.

## Copilot Studio agent config
Create a roadmap-generator agent with a scoped identity. Instruct it to draft sequenced phases grounded in the firm's methodology, attach effort, cost, and milestones from the firm's rates, map dependencies and the critical path, label every estimate as an estimate with its basis, and flag any phase the findings do not support rather than inventing scope.

## Flows
1. Findings-to-phases flow drafts sequenced candidate phases.
2. Budget and milestone flow costs each phase from firm rates.
3. Roadmap dashboard flow refreshes Power BI.
4. Dependency flow computes the critical path.
5. Packaging flow assembles the client-ready roadmap.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the methodology index.
4. Connect Project Operations and the rate card.
5. Import flows disabled.
6. Configure the Copilot Studio agent and grounding.
7. Enable flows.
8. Run smoke tests including an unsupported-phase flag case.

## Definition of done
- A findings set produces sequenced candidate phases grounded in the methodology.
- Each phase carries effort, cost, and a milestone traced to firm rates.
- Dependencies and the critical path are explicit.
- Estimates are labeled with their basis; unsupported phases are flagged, never invented.
- Power BI presents a client-ready phased, budgeted roadmap.
