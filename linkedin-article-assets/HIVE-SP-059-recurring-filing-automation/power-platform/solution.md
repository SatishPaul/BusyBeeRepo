# Deployable Solution: Recurring Filing Automation

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that gathers inputs for a recurring filing, prepares it to the firm's rules, validates it, routes it for human approval, and submits it with a full trail.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-059-recurring-filing-automation/`. Licensed Apache-2.0.

A firm-operations playbook; adapt to your own filings and rules.

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
  tables/filing.yaml
  tables/preparedfiling.yaml
  tables/submission.yaml
  flows/input-gathering.md
  flows/prepare-validate.md
  flows/capacity-dashboard.md
/copilot-studio
  agent-filing-automation.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_filing`, `proserv_filinginput`, `proserv_filingrule`, `proserv_preparedfiling`, `proserv_validation`, and `proserv_submission` with filing type, schedule, input source, rule set, draft, completeness, policy pass, approver, submission reference, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for preparation and validation, Microsoft Fabric to gather inputs, Dataverse for the governed records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power Automate runs the flows; Purview logs; Power BI hosts the capacity dashboard.

## Copilot Studio agent config
Create a filing-automation agent with a scoped identity. Instruct it to gather the filing's inputs, prepare the filing to the firm's rules, validate completeness and policy, flag anything incomplete or non-compliant rather than submitting it, route the prepared filing for human approval, and submit only after sign-off, logging a full trail.

## Flows
1. Input gathering flow assembles the filing's inputs on schedule.
2. Prepare and validate flow drafts and checks the filing.
3. Capacity dashboard flow refreshes Power BI.
4. Approval flow routes the validated filing for sign-off.
5. Submission flow files the approved filing and logs the trail.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and connect Fabric.
4. Register the recurring filings, schedules, and rules.
5. Import flows disabled.
6. Configure the Copilot Studio agent and approval routing.
7. Enable flows.
8. Run smoke tests including a non-compliant-filing flag case.

## Definition of done
- A recurring filing's inputs are gathered automatically on schedule.
- The filing is prepared to the firm's rules and validated against policy.
- Incomplete or non-compliant filings are flagged, never submitted.
- Nothing is submitted without human approval; every filing carries a full trail.
- Power BI shows filings automated, hours reclaimed, exceptions, and on-time rate.
