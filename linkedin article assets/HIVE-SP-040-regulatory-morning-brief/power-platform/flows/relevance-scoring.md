## 2 · Relevance Scoring Flow · Power Automate

#### Context
**Persona:** Knowledge quality lead. **Problem:** scoring changes against every client by hand does not scale. **Success criteria:** a flow scores each new change against every engagement profile and flags only items above a relevance threshold.

#### Data model
Use `proserv_regchange`, `proserv_engagement`, and `proserv_relevancescore`.

#### Components
Cloud flow, Foundry scoring call, Dataverse writes, and Teams alerts.

#### Build steps
1. Trigger when new change records land.
2. Load engagement profiles from Dataverse.
3. Score the change against each profile with an explainable model.
4. Write scores and factors, and flag items above threshold.
5. Notify owners of high-relevance items.

#### Demo script
A change is scored against forty engagements in seconds, and two rise above threshold. **Wow moment:** triage that took an analyst an hour runs before breakfast.
