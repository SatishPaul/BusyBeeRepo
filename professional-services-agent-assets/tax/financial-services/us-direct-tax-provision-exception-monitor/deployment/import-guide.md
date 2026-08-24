# Deploy

Stand the pack up in your own tenant. The bundled solution was built and verified in a live Power Platform developer environment, so these steps are the ones that actually ran, not a theoretical guide.

## Prerequisites

- A Power Platform environment with Dataverse (a Developer environment is fine).
- Microsoft 365 Copilot and Copilot Studio access.
- Microsoft Scout (preview) for scheduling and orchestration, or another supported scheduler.
- The Power Platform CLI (`pac`) and, for scripted schema, the Dataverse Web API.

## Option A: import the solution (fastest)

1. Download `dataverse/psacProvisionExceptionMonitor_unmanaged.zip` from the repo.
2. In the maker portal, Solutions > Import solution > choose the zip.
3. Publish all customizations.
4. Load sample data: run `sample-data/load-sample-data` (the included script) or import the CSVs.
5. Open the model-driven app and confirm the FY26-Q3 run shows 12 line items and 3 findings.

## Option B: build from prompts (scripted)

1. Paste Prompt 6 (GitHub Copilot build) to generate the solution and app.
2. Paste Prompt 7 (Dataverse Skills) to create the tables and sample data.
3. Configure the Copilot Studio agents with Prompt 3 (master) and Prompt 4 (child), grounded on the tables.
4. Wire the Scout schedule to invoke the master agent on your close cadence.

## Configure and run

1. Set the environment variables in `dataverse/env-variables.md` (confidence threshold, cost ceiling, approver).
2. Apply the security roles in `dataverse/security-roles.md` (least privilege, read-only defaults).
3. Trigger a run. The master creates a provision run, the specialists screen the lines, findings appear, and an approval is opened.
4. Work the exceptions in the approval inbox; approve or reject each; roll back if needed.

## Verify

- The run shows the correct exception count and confidence.
- Every finding cites a line item and a confidence score.
- No finding was written for an in-band line (no false positives).
- The approval gate blocked any consequential action until a human decided.

## Known limitations and preview dependencies

Microsoft Scout is a preview product; its scheduling, delegation, and export behavior can change, so the Scout portions may need adjustment as the product evolves. The ROI figures are sample assumptions until measured. The agents screen and explain; they do not file the provision, by design. Use synthetic data only in any shared or public copy of this pack.
