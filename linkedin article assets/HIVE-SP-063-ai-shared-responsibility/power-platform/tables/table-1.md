## 1 · Responsibility Map Register · Dynamics 365 Project Operations

#### Context
**Persona:** AI governance lead. **Problem:** each AI deployment sits at a different layer, and no one has written down who owns which control. **Success criteria:** every deployment is a record with its layer and a named owner for each responsibility.

#### Data model
Create `proserv_aideployment`, `proserv_responsibility`, and `proserv_controlowner` tables with deployment, layer, control area, owner, provider-or-customer, and status columns.

#### Components
Project Operations deployment records, a responsibility-mapping app, Teams routing for unowned controls, and a Power BI coverage dashboard.

#### Build steps
1. Create tables and relate deployments to controls and owners.
2. Record each deployment's layer (IaaS, PaaS, SaaS).
3. Assign an owner to every control area.
4. Flag any control assumed covered but unowned.
5. Report ownership coverage by deployment.

#### Demo script
A new Copilot rollout maps to a clear owner for every control, and one assumed-covered gap is flagged. **Wow moment:** nothing important sits in the gap between you and the provider.
