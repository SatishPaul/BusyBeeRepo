## 1 · Engagement Ledger · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement manager. **Problem:** margin is assembled at quarter-end from scattered systems. **Success criteria:** every engagement has a live ledger of budget, cost, and billing that updates continuously.

#### Data model
Create `proserv_engagementledger`, `proserv_costentry`, and `proserv_billingentry` tables with budget, actual cost, billed, staffing mix, period, and variance columns.

#### Components
Project Operations engagements, a ledger-review app, Teams alerts on variance, and a Power BI margin view.

#### Build steps
1. Create tables and relate the ledger to cost and billing entries.
2. Ingest time, cost, and billing continuously.
3. Maintain budget-versus-actual per engagement.
4. Compute variance as data flows.
5. Report live engagement margin.

#### Demo script
An engagement shows its margin today, not next quarter. **Wow moment:** the number is finally early enough to act on.
