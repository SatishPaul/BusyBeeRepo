# Deployable Solution: Methodology-to-Skill Factory

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform, Azure AI, and Dataverse reference app that captures a partner's methodology, structures it into a spec, builds it into an installable skill, tests it against known cases, and tracks its use.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `linkedin article assets/HIVE-SP-049-methodology-to-skill/`. Licensed Apache-2.0.

A delivery playbook; adapt to your own methodologies.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/infra
  main.bicep
  modules/foundry.bicep
  modules/network.bicep
/power-platform
  tables/methodology.yaml
  tables/testcase.yaml
  tables/skillusage.yaml
  flows/method-structuring.md
  flows/skill-test.md
  flows/coverage-dashboard.md
/copilot-studio
  agent-skill-factory.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_methodology`, `proserv_methodstep`, `proserv_sourcematerial`, `proserv_testcase`, `proserv_testresult`, `proserv_skillusage`, and `proserv_rampmetric` with step, judgment note, input, expected output, skill output, match score, user, supervision level, ramp week, and audit-log columns.

## Infrastructure
Deploy Azure AI Foundry for structuring and evaluation, Dataverse for the method and test records, Storage, Key Vault, Application Insights, and optional Azure Virtual Network with private endpoints controlled by `enablePrivateNetworking bool = false`. Copilot Studio builds and hosts the skill; Power BI hosts the coverage dashboard.

## Copilot Studio agent config
Create a skill-factory agent with a scoped identity. Instruct it to structure captured material into an explicit method spec, build it into an installable skill, run the skill against the test-case bank, gate release on reproducing the expert's result, cite its reasoning, flag uncertainty rather than bluffing, and require supervised use.

## Flows
1. Method structuring flow turns capture material into a spec.
2. Skill test flow validates the skill against known cases.
3. Coverage dashboard flow refreshes Power BI.
4. Release gate flow ships only skills that pass.
5. Usage tracking flow records supervised runs and ramp.

## Deployment order
1. Run `azd provision`.
2. Import the Power Platform solution.
3. Publish Dataverse tables.
4. Load the method capture and test cases.
5. Import flows disabled.
6. Configure the Copilot Studio agent and evals.
7. Enable flows.
8. Run smoke tests including a failing-skill refinement case.

## Definition of done
- A partner's method is captured and structured into an explicit spec.
- The spec is built into an installable, runnable skill.
- The skill is tested against known cases and only ships if it reproduces the result.
- The skill cites its reasoning, flags uncertainty, and runs under supervision.
- Power BI shows how many can run each method, ramp times, and remaining key-person risk.
