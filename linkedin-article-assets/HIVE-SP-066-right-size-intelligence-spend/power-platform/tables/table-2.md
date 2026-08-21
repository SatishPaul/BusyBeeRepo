## 2 · Routing Policy & Threshold Map · Dynamics 365 + Foundry

#### Context
**Persona:** AI architect. **Problem:** every task hits the same frontier model regardless of difficulty, so simple work pays frontier rates. **Success criteria:** each task class is mapped to the cheapest model that clears its intelligence threshold, with a fallback.

#### Data model
Create `proserv_taskclass`, `proserv_routingpolicy`, and `proserv_threshold` tables with task class, difficulty, threshold tier, chosen model, fallback, escalation rule, and rationale columns.

#### Components
Foundry model routing, a policy-review app, Teams approval for changes, and a Power BI routing view by tier.

#### Build steps
1. Create the tables and relate task classes to thresholds and models.
2. Classify each task class by difficulty and how often the answer is genuinely novel.
3. Route each class to the cheapest tier that clears its threshold.
4. Define escalation: when confidence is low or the case is novel, step up a tier.
5. Report routing decisions and the share of calls served below the frontier.

#### Demo script
A high-volume task routes to a local model; a genuinely novel one steps up to frontier. **Wow moment:** the frontier is the exception, not the default.
