# Deployable Solution: Long-Form Content to Research Notes

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that ingests long-form content, extracts the signal, structures it into research notes, and cites every point to its timestamp.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-055-content-to-research-notes/`. Licensed Apache-2.0.

A research playbook; adapt to your own sources.

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
  tables/source.yaml
  tables/note.yaml
  tables/claim.yaml
  flows/ingestion-transcription.md
  flows/extraction-citation.md
  flows/coverage-dashboard.md
/copilot-studio
  agent-research-notes.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_source`, `proserv_transcript`, `proserv_topic`, `proserv_note`, `proserv_claim`, and `proserv_distribution` with source, type, transcript link, theme, claim, number, timestamp citation, audience, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for transcription and structuring, Azure AI Search for extraction and citation, Dataverse for the notes, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot Studio hosts the note agent; Power BI hosts the coverage dashboard.

## Copilot Studio agent config
Create a research-note agent with a scoped identity. Instruct it to transcribe long-form content, extract the signal from the filler, structure it into themes, claims, and numbers, cite every point to its timestamp, omit any claim the content does not support, and leave interpretation to a human.

## Flows
1. Ingestion and transcription flow captures and transcribes sources.
2. Extraction and citation flow structures notes with timestamped citations.
3. Coverage dashboard flow refreshes Power BI.
4. Distribution flow routes notes to the right teams.
5. Coverage tracking flow measures sources covered and hours saved.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Register the sources to monitor.
5. Import flows disabled.
6. Configure the Copilot Studio agent and citation model.
7. Enable flows.
8. Run smoke tests including an unsupported-claim omission case.

## Definition of done
- Long-form content is ingested and transcribed at scale.
- The signal is extracted and structured into themes, claims, and numbers.
- Every point is cited to its timestamp; unsupported claims are omitted.
- Notes are delivered while the content is still current.
- Power BI shows sources covered, hours saved, turnaround, and reach.
