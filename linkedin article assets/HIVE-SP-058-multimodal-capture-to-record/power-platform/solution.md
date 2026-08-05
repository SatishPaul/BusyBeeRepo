# Deployable Solution: Multimodal Capture to Record

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that reads a field photograph, extracts text, tables, and diagrams, maps them to record fields, flags uncertainty, and files a governed record on human confirmation.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-058-multimodal-capture-to-record/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own record types.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/network.bicep
/power-platform
  tables/capture.yaml
  tables/extraction.yaml
  tables/confirmation.yaml
  flows/image-capture.md
  flows/read-map.md
  flows/capture-dashboard.md
/copilot-studio
  agent-multimodal-capture.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_capture`, `proserv_recordfield`, `proserv_extraction`, `proserv_uncertainty`, and `proserv_confirmation` with image, extracted content, element type, mapped field, confidence, flag, reviewer, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for multimodal reading, Dataverse for the governed records, Storage for images, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot captures; Purview classifies and governs; Power BI hosts the capture-quality dashboard.

## Copilot Studio agent config
Create a multimodal-capture agent with a scoped identity. Instruct it to read text, tables, handwriting, and diagrams from a field image, map content to the correct record fields, flag anything it cannot read with confidence rather than guessing, and require a human to confirm before the record is filed.

## Flows
1. Image capture flow ingests a field photo.
2. Read and map flow extracts content and maps it to fields.
3. Capture dashboard flow refreshes Power BI.
4. Uncertainty flow flags low-confidence reads.
5. Confirmation flow files the record on human sign-off.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Configure the record types and field maps.
5. Import flows disabled.
6. Configure the Copilot Studio agent and confidence thresholds.
7. Enable flows.
8. Run smoke tests including a low-confidence flag case.

## Definition of done
- A field image is read for text, tables, handwriting, and diagrams.
- Content is mapped to the correct fields of the right record.
- Low-confidence reads are flagged, never guessed.
- Every record is confirmed by a human before it is filed.
- Power BI shows records per hour, transcription saved, flag rate, and error rate.
