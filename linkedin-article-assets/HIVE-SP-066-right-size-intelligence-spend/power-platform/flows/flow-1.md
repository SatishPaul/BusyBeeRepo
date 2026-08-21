## 1 · Intelligence Gateway · Power Automate + Azure AI Foundry

#### Context
**Persona:** AI platform engineer. **Problem:** apps call the cloud frontier API directly, with no budget, security, or residency control. **Success criteria:** one gateway fronts every model call, enforcing which tier is allowed for which class of work and stopping over-spend.

#### Data model
Use `proserv_routingpolicy`, `proserv_tier`, and `proserv_workunit`.

#### Components
Cloud flow, a gateway endpoint, Foundry connections, Purview labels, and Dataverse writes.

#### Build steps
1. Trigger on an application request for intelligence.
2. Authenticate, apply rate limits, and check the budget for that team.
3. Enforce data-residency and sensitivity rules before any cloud call.
4. Hand the request to the router with the allowed tier set.
5. Log the decision and cost for the ledger.

#### Demo script
Every call passes one gate that enforces budget and residency. **Wow moment:** sensitive or trivial work never silently leaves the tenant for a frontier model.
