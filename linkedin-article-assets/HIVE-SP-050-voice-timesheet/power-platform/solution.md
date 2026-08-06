# Deployable Solution: Voice-Logged Timesheet Engine

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that turns a spoken activity note into a structured, matter-coded, billing-validated time entry for human review.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-050-voice-timesheet/`. Licensed Apache-2.0.

A firm-operations playbook; adapt to your own billing rules.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/speech.bicep
  modules/network.bicep
/power-platform
  tables/timeentry.yaml
  tables/matter.yaml
  tables/billingrule.yaml
  flows/voice-capture.md
  flows/structuring-coding.md
  flows/realization-dashboard.md
/copilot-studio
  agent-time-capture.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_timeentry`, `proserv_matter`, `proserv_task`, `proserv_billingrule`, `proserv_validation`, and `proserv_realization` with duration, task, matter code, client, billable flag, rule, pass flag, captured hours, billed hours, and audit-log columns.

## Infrastructure
Deploy Azure AI Speech for transcription, Azure AI Foundry for structuring and coding, Dataverse for the governed entries, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power BI hosts the realization dashboard.

## Copilot Studio agent config
Create a time-capture agent with a scoped identity. Instruct it to transcribe a spoken note, structure it into duration and task, apply the correct matter code by the firm's rules, validate against billing policy, flag any time it cannot substantiate rather than inventing it, surface ambiguous coding for review, and require a human to submit.

## Flows
1. Voice capture flow transcribes a spoken note into raw activity.
2. Structuring and coding flow builds a billable-ready entry.
3. Realization dashboard flow refreshes Power BI.
4. Validation flow checks entries against billing rules.
5. Submission flow routes entries to a human to confirm.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Load the matter list and billing rules.
5. Import flows disabled.
6. Configure the Copilot Studio agent and the capture channel.
7. Enable flows.
8. Run smoke tests including an unsubstantiated-time flag case.

## Definition of done
- A spoken note becomes a structured, matter-coded time entry.
- Entries are validated against the firm's billing rules and format.
- Time that cannot be substantiated is flagged, never invented.
- Every entry is reviewed and submitted by a human, not auto-billed.
- Power BI shows capture rate, realization, and leakage by person and matter.
