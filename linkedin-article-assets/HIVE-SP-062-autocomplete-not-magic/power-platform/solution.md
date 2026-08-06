# Deployable Solution: Context Engineering Platform

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that assembles context profiles, grounds completions in firm data, gives the model governed tools to act, and shows that context, not model choice, drives quality.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-062-autocomplete-not-magic/`. Licensed Apache-2.0.

An AI-literacy playbook; adapt to your own estate and risk posture.

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
  tables/contextprofile.yaml
  tables/groundingsource.yaml
  tables/outputlog.yaml
  tables/toolaction.yaml
  flows/context-assembly.md
  flows/grounding-retrieval.md
  flows/context-roi-dashboard.md
/copilot-studio
  agent-context-engineered.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_contextprofile`, `proserv_promptpattern`, `proserv_groundingsource`, `proserv_outputlog`, `proserv_toolaction`, and `proserv_approvalgate` with role, instructions, data-source links, memory scope, completion, citations, tool, inputs, approver, and result columns.

## Infrastructure
Deploy Azure AI Search for grounding retrieval, Azure AI Foundry for completion, Dataverse for context profiles and logs, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Purview supplies classification and citation metadata; Power BI hosts the context ROI dashboard.

## Copilot Studio agent config
Create a context-engineered agent with a scoped identity. Instruct it to load the matching context profile, answer only from retrieved, cited context, carry the defined memory scope, use governed tools to act rather than describe, and route any consequential action through a human approval gate.

## Flows
1. Context assembly flow builds the prompt from a profile, data, and memory.
2. Grounding retrieval flow returns cited context from the search index.
3. Context ROI dashboard flow refreshes Power BI.
4. Tool-action flow logs and gates model actions.
5. Profile performance flow tracks which profiles perform best.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and the grounding search index.
4. Connect the search index to firm documents.
5. Import flows disabled.
6. Configure the Copilot Studio agent, profiles, and tools.
7. Enable flows.
8. Run smoke tests including a profiled-versus-ad-hoc comparison and a gated tool action.

## Definition of done
- Common tasks have reusable context profiles that any user can apply.
- Every completion is grounded in retrieved sources and cited.
- The model acts through governed, logged, approved tools, not guesses.
- Ungrounded claims are flagged, never fabricated.
- Power BI shows output quality against context completeness across tasks and teams.
