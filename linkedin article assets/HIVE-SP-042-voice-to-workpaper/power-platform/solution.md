# Deployable Solution: Voice-to-Workpaper Capture Engine

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that takes a spoken field observation, structures it into a classified, evidence-linked finding, and files it as an owned workpaper task.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-042-voice-to-workpaper/`. Licensed Apache-2.0.

A technology playbook; adapt to your own methodology and risk posture.

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
  tables/observation.yaml
  tables/finding.yaml
  tables/evidence.yaml
  flows/voice-capture.md
  flows/finding-structuring.md
  flows/coverage-dashboard.md
/copilot-studio
  agent-field-capture.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_observation`, `proserv_finding`, `proserv_auditarea`, `proserv_evidence`, and `proserv_fieldtask` with observation text, transcript, audit area, risk level, evidence reference, owner, due date, documentation status, and audit-log columns.

## Infrastructure
Deploy Azure AI Speech for transcription, Azure AI Foundry for structuring and classification, Dataverse for the governed records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview supplies classification and citation metadata; Power BI hosts the coverage dashboard.

## Copilot Studio agent config
Create a field-capture agent with a scoped identity. Instruct it to transcribe a voice note, structure it into a finding with area, risk, and required evidence, link or request supporting documents, assign an owner and due date, and flag any evidence it cannot confirm rather than asserting it.

## Flows
1. Voice capture flow ingests and transcribes a field note.
2. Finding structuring flow classifies the note into a finding with evidence needs.
3. Coverage dashboard flow refreshes Power BI.
4. Assignment flow gives each finding an owner and due date.
5. Evidence link flow attaches or requests supporting documents and flags gaps.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the evidence index.
4. Connect Speech and the field-capture channel.
5. Import flows disabled.
6. Configure the Copilot Studio agent and sources.
7. Enable flows.
8. Run smoke tests including a flagged missing-evidence case.

## Definition of done
- A spoken observation becomes a structured finding with area, risk, and evidence needs.
- Each finding is classified against the methodology and assigned an owner and due date.
- Evidence is linked or requested, with gaps flagged, never fabricated.
- Every entry carries a full audit trail from voice note to workpaper task.
- Power BI shows observations captured versus closed, and coverage over time.
