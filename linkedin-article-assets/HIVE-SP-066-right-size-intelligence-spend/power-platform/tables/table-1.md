## 1 · Model & Tier Registry · Dynamics 365 Project Operations

#### Context
**Persona:** AI platform owner. **Problem:** teams reach for the most capable model by default, with no inventory of cheaper options or their cost. **Success criteria:** every available model is a record with its tier, cost per token, capability tags, deployment (cloud, local, on-device), and status.

#### Data model
Create `proserv_model`, `proserv_tier`, and `proserv_capability` tables with model, tier (frontier, mid open-weight, small/local, deterministic), cost per unit, capability tags, hosting, latency, and status columns.

#### Components
Project Operations AI context, a model-review app, Teams routing for evaluation, and a Power BI portfolio view of models by tier and cost.

#### Build steps
1. Create the tables and relate models to tiers and capabilities.
2. Register each candidate model, including small, local, and deterministic options.
3. Record cost per unit, latency, and hosting for each.
4. Tag the capability ceiling and known limits per model.
5. Report the portfolio so the cheapest capable option is visible for any task.

#### Demo script
The firm sees a full ladder of options, not just the frontier. **Wow moment:** for most tasks, a cheaper tier already clears the bar.
