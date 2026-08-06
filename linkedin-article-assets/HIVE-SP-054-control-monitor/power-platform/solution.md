# Deployable Solution: Always-On Control Monitor

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Fabric, Azure AI, and Power Platform reference app that watches control signals continuously, tests controls as events happen, detects exceptions and drift, and flags them early to a human owner.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-054-control-monitor/`. Licensed Apache-2.0.

A technology playbook, not a controls opinion.

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
  tables/control.yaml
  tables/exception.yaml
  tables/response.yaml
  flows/continuous-test.md
  flows/early-alert.md
  flows/control-dashboard.md
/copilot-studio
  agent-control-monitor.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_control`, `proserv_signal`, `proserv_exception`, `proserv_response`, and `proserv_auditlog` with control, test logic, signal source, threshold, exception type, evidence, severity, owner, resolution, and audit-log columns.

## Infrastructure
Deploy Microsoft Fabric to stream and watch control signals, Azure AI Foundry for detection, Dataverse for the governed records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview classifies and governs; Power BI hosts the control-health dashboard.

## Copilot Studio agent config
Create a control-monitor agent with a scoped, read-only identity. Instruct it to evaluate each relevant event against the control continuously, detect failures and drift, flag exceptions early with the triggering evidence, never raise an exception it cannot substantiate, and route every flag to a human owner to confirm.

## Flows
1. Continuous test flow evaluates each event against the control.
2. Early alert flow notifies the owner the moment an exception is detected.
3. Control dashboard flow refreshes Power BI.
4. Detection flow catches failures and drift.
5. Response flow records confirmation and resolution.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and connect Fabric streams.
4. Define the controls and thresholds.
5. Import flows disabled.
6. Configure the Copilot Studio agent and severity model.
7. Enable flows.
8. Run smoke tests including an unsubstantiated-flag and an early-exception case.

## Definition of done
- Each control is tested continuously against its signals, not on a cadence.
- Exceptions and drift are detected and flagged early with evidence.
- No exception is raised that cannot be substantiated.
- Every flag is routed to a human owner to confirm and resolve.
- Power BI shows live control health, open exceptions, time to detect, and resolution.
