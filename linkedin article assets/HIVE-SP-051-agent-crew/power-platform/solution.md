# Deployable Solution: Governed Agent Crew

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Entra reference app that runs a delivery engagement as a crew of role-specialized agents, each with a scoped identity, coordinated by an orchestrator and governed to its lane.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-051-agent-crew/`. Licensed Apache-2.0.

A delivery playbook; adapt the roles to your own engagements.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/entra.bicep
  modules/network.bicep
/power-platform
  tables/crewrole.yaml
  tables/orchestration.yaml
  tables/boundaryaudit.yaml
  flows/role-provisioning.md
  flows/crew-orchestration.md
  flows/governance-dashboard.md
/copilot-studio
  agent-orchestrator.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_crewrole`, `proserv_engagement`, `proserv_rolescope`, `proserv_orchestration`, `proserv_handoff`, `proserv_boundaryaudit`, and `proserv_auditlog` with role, lane, permitted actions, identity, step, predecessor, in-scope flag, decision, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry to run and orchestrate the agents, Microsoft Entra for per-role scoped identities, Dataverse for the crew and audit records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview governs boundaries; Power BI hosts the governance dashboard.

## Copilot Studio agent config
Create an orchestrator with a scoped identity. Instruct it to assign work to role-specialized agents, sequence the handoffs, enforce that each agent acts only within its lane, refuse and log out-of-lane attempts, keep the plan auditable, and require a human to direct and review the crew.

## Flows
1. Role provisioning flow gives each role a scoped identity.
2. Crew orchestration flow runs the plan across the crew.
3. Governance dashboard flow refreshes Power BI.
4. Boundary audit flow checks and logs every action against scope.
5. Delivery flow records the engagement outcome.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Define the crew roles and scopes.
5. Import flows disabled.
6. Configure the orchestrator and identities.
7. Enable flows.
8. Run smoke tests including an out-of-lane refusal case.

## Definition of done
- Each engagement runs as a crew of role-specialized agents.
- Every agent has a scoped identity with least-privilege access to its lane.
- The orchestrator assigns work, sequences handoffs, and keeps an auditable plan.
- Out-of-lane actions are refused and logged, never allowed.
- Power BI shows in-lane compliance, boundary refusals, and delivery progress by role.
