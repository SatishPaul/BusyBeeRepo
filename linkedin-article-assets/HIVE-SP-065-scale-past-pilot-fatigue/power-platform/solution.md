# Deployable Solution: Scale Past AI Pilot Fatigue

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Dataverse, and Copilot Studio reference app that turns the seven-move reset into a governed pilot-to-production pipeline, so a workflow cannot advance until the human decisions (outcome, data, sign-off, scope) are recorded, and a proven pilot is promoted with the process and the tool changing together.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin-article-assets/HIVE-SP-065-scale-past-pilot-fatigue/`. Licensed Apache-2.0.

The seven-move reset is a rewording of a framework a Deloitte chief executive described publicly.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/copilotstudio.bicep
  modules/purview.bicep
  modules/network.bicep
/power-platform
  tables/pilot.yaml
  tables/outcome.yaml
  tables/readiness.yaml
  tables/signoff.yaml
  tables/friction.yaml
  tables/adoption.yaml
  flows/friction-capture.md
  flows/scoped-build-guard.md
  flows/pilot-to-production.md
/copilot-studio
  agent-pilot-reset.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_pilot`, `proserv_outcome`, `proserv_metric`, `proserv_datasource`, `proserv_readiness`, `proserv_owner`, `proserv_signoff`, `proserv_scope`, `proserv_friction`, and `proserv_adoption`. Capture: pilot stage, sponsor, target metric with baseline and target, data source with named owner and quality verdict, approver and accountable owner, one-sentence scope with in and out-of-scope actions, ranked frontline friction, and post-launch adoption with reversion signals. Enforce stage gates so a pilot cannot leave one stage without the prior move's record complete.

## Infrastructure
Deploy Copilot Studio for the reset agent, Dataverse for the pilot register and gates, Purview for data readiness and sensitivity, Power BI for the outcome scoreboard and adoption dashboard, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Power Automate runs the stage gates and promotion.

## Copilot Studio agent config
Create a pilot-reset agent with a scoped identity. Instruct it to run the seven moves in order, refuse to advance a pilot without a metric, a data owner, and a sign-off, decline to propose more than one production workflow at a time, read its scope from the pilot record to bound its own behaviour, and treat "buy another tool" as a non-answer.

## Flows
1. Friction-capture flow collects frontline input and ranks candidate workflows by time and cost.
2. Scoped-build-guard flow bounds the build to one workflow and logs any scope change as an approved decision.
3. Pilot-to-production flow gates promotion on metric plus sign-off, embeds the new step in the team's existing tool, and starts adoption tracking.
4. Stage-gate flow blocks any pilot advancing past a move whose record is incomplete.
5. Adoption-watch flow alerts the owner when usage slides back toward the manual way.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables and stage gates.
4. Configure the Copilot Studio pilot-reset agent.
5. Import flows disabled.
6. Wire Purview readiness and Power BI dashboards.
7. Enable flows.
8. Run smoke tests: a pilot with no metric is blocked, a pilot with a met metric and sign-off is promoted, and an adoption-stall alert fires.

## Definition of done
- No pilot advances without a named metric, a data owner, and an accountable sign-off.
- Exactly one workflow is carried to production at a time.
- The scope sentence bounds the agent, and scope changes are recorded approvals.
- Promotion embeds the new step where the work already happens and starts adoption tracking.
- Power BI shows outcomes against baseline, pilots blocked by move, and post-launch adoption with reversion signals.
