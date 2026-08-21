## 3 · Cost-per-Outcome Ledger · Dynamics 365 Project Operations

#### Context
**Persona:** Finance and AI operations. **Problem:** dashboards report tokens consumed, which is a vendor metric, not a business one. **Success criteria:** every unit of work is logged with model tier, cost, and whether it produced a verified successful outcome, so cost per outcome is measurable and falling.

#### Data model
Create `proserv_workunit`, `proserv_modelcall`, and `proserv_outcome` tables with task class, model tier, tokens, cost, escalation flag, verified-outcome flag, and time-to-done columns.

#### Components
Project Operations context, an operations app, Teams alerts on cost spikes, and a Power BI cost-per-outcome dashboard.

#### Build steps
1. Create the tables and relate each work unit to its model calls and outcome.
2. Log tier, tokens, and cost for every call, including escalations.
3. Record whether the work unit reached a verified successful outcome.
4. Compute cost per successful outcome and tokens per resolution by task class.
5. Report the trend so leadership can see intelligence-per-outcome falling over time.

#### Demo script
Leadership sees cost per resolved outcome, not raw tokens. **Wow moment:** the CFO finally gets the metric the vendor dashboard never showed.
