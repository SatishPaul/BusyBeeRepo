# Deployable Solution: Governed Agent Handoff Runtime

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app where specialized agents pass verified, typed artifacts through a governed relay, with a completion signal, a verification gate, and a full chain log at every handoff.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-044-governed-agent-handoff/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own agents and estate.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/network.bicep
/power-platform
  tables/handoff.yaml
  tables/artifact.yaml
  tables/chainlog.yaml
  flows/completion-signal.md
  flows/verification-gate.md
  flows/chain-health-dashboard.md
/copilot-studio
  agent-orchestrator.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_handoff`, `proserv_agentrun`, `proserv_artifact`, `proserv_verification`, and `proserv_chainlog` with from-agent, to-agent, artifact type, schema-valid flag, quality score, chain-id, step order, timestamp, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry to run the agents and evaluations, Dataverse for the handoff and chain records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot Studio orchestrates signals; Purview traces; Power BI hosts the chain-health dashboard.

## Copilot Studio agent config
Create an orchestrator with a scoped identity. Instruct it to route work between specialized agents, require a completion signal and a typed artifact at each handoff, run the verification gate before the next agent starts, halt and flag any invalid artifact rather than forwarding it, and log every pass to the chain.

## Flows
1. Completion signal flow emits a done event with a typed artifact.
2. Verification gate flow validates an artifact before the next agent.
3. Chain health dashboard flow refreshes Power BI.
4. Receive flow starts the next agent on a verified artifact.
5. Trace flow appends every pass to the chain log.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Register the agents and their lanes.
5. Import flows disabled.
6. Configure the orchestrator and gates.
7. Enable flows.
8. Run smoke tests including a blocked-artifact case.

## Definition of done
- Each agent emits a completion signal with a typed artifact.
- Every handoff passes a schema and quality gate before the next agent starts.
- Invalid artifacts halt the chain and are flagged, never forwarded.
- Every pass is logged, so any job's full chain is reconstructable.
- Power BI shows completion, stall points, gate failures, and traceability by chain.
