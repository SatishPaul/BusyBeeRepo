## 1 · Financial Unification Flow · Power Automate + Microsoft Fabric

#### Context
**Persona:** Data engineer. **Problem:** time, cost, and billing live in separate systems, so no live P and L exists. **Success criteria:** a flow unifies the sources into one continuously updated dataset.

#### Data model
Use `proserv_engagementledger`, `proserv_costentry`, and `proserv_billingentry`.

#### Components
Cloud flow, Fabric pipelines, source connectors, and Dataverse writes.

#### Build steps
1. Trigger on new time, cost, or billing data.
2. Normalize and unify the records in Fabric.
3. Update the engagement ledger.
4. Recompute budget-versus-actual.
5. Publish the live dataset.

#### Demo script
Scattered financial feeds resolve into one live ledger. **Wow moment:** the P and L is current, not quarterly.
