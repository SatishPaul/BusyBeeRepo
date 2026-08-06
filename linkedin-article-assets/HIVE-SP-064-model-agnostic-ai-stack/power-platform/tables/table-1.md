## 1 · Model Registry · Dynamics 365 Project Operations

#### Context
**Persona:** AI platform owner. **Problem:** the firm is locked to one model with no inventory of alternatives. **Success criteria:** every available model, open and closed, is a record with its cost, capability, deployment, and status.

#### Data model
Create `proserv_model`, `proserv_capability`, and `proserv_deployment` tables with model, type (open/closed), cost basis, capability tags, hosting options, and status columns.

#### Components
Project Operations AI context, a model-review app, Teams routing for evaluation, and a Power BI portfolio view.

#### Build steps
1. Create tables and relate models to capabilities and deployments.
2. Register each candidate model, open and closed.
3. Record its cost basis and hosting options.
4. Tag capabilities and constraints.
5. Report the model portfolio and readiness.

#### Demo script
The firm sees a portfolio of swappable models, not one vendor. **Wow moment:** model choice becomes an inventory, not a bet.
