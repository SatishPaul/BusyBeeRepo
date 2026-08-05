## 2 · Consistency & Drift Monitor · Dynamics 365 + Foundry evals

#### Context
**Persona:** Quality lead. **Problem:** the same prompt can produce inconsistent answers, and no one sees drift until a client does. **Success criteria:** repeated and sampled outputs are scored for consistency and hallucination, with drift surfaced early.

#### Data model
Create `proserv_evalresult`, `proserv_aioutput`, and `proserv_variancelog` tables with run id, consistency score, hallucination flag, baseline, and delta columns.

#### Components
Foundry evaluation runs, a monitoring app, Teams alerts on threshold breach, and a Power BI reliability view.

#### Build steps
1. Create tables and relate eval runs to outputs and baselines.
2. Run repeated generations on a control set.
3. Score consistency and flag hallucinated or ungrounded claims.
4. Log variance against the baseline over time.
5. Alert when drift crosses a threshold.

#### Demo script
A model update quietly raises variance, and the monitor flags it before any client sees it. **Wow moment:** drift is caught by the rail, not by a complaint.
