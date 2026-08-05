# How to import a BusyBee Power Platform solution

Each recipe's `power-platform/` folder is a build spec, Dataverse tables, Power Automate flows, and a Copilot Studio agent config, written as Copilot-ready prompts so you can generate the solution in your own tenant.

## Build it with Copilot

1. Open the recipe's `power-platform/solution.md` (the full implementation brief).
2. Paste it into GitHub Copilot or Copilot in Power Platform as the build prompt.
3. It uses publisher prefix `proserv_`. Confirm before changing table or column names.
4. Keep all assets in one unmanaged solution.

## Deployment order (typical)

1. Provision Azure infrastructure (`azd provision`) if the recipe includes `/infra`.
2. Import or generate the Power Platform solution.
3. Publish Dataverse tables and any search index.
4. Import flows disabled, configure connections, then enable.
5. Configure the Copilot Studio agent and its sources.
6. Run the smoke tests in the recipe's definition of done.

## Guardrails

- Default `enablePrivateNetworking` to false unless your environment requires private endpoints.
- Read-only recipes never write back. Write-back recipes gate risky actions behind approvals.
- Every recipe lists a cost tier and its drivers so you know what a run commits you to.
