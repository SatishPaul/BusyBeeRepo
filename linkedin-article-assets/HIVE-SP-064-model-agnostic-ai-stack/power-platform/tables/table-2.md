## 2 · Routing Policy Model · Dynamics 365 + Foundry

#### Context
**Persona:** AI architect. **Problem:** every task hits the same model regardless of fit. **Success criteria:** a policy routes each task to the right model on cost, capability, and latency.

#### Data model
Create `proserv_routingpolicy`, `proserv_model`, and `proserv_taskclass` tables with task class, criteria, chosen model, fallback, and rationale columns.

#### Components
Foundry routing, a policy-review app, Teams approval, and a Power BI routing view.

#### Build steps
1. Create tables and relate policies to models and task classes.
2. Classify tasks by cost sensitivity and complexity.
3. Route each class to the best-fit model.
4. Define a fallback per class.
5. Report routing decisions and cost.

#### Demo script
A high-volume task routes to a cheap open model; a complex one to a frontier model. **Wow moment:** the right model per call, automatically.
