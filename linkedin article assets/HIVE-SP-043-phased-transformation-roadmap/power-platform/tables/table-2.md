## 2 · Phase Budget Model · Dynamics 365 Project Operations

#### Context
**Persona:** Delivery lead. **Problem:** phases are proposed without defensible cost and effort, so the roadmap is not fundable. **Success criteria:** each phase carries effort, cost, and a milestone traced to the firm's delivery rates.

#### Data model
Create `proserv_phasebudget`, `proserv_phase`, and `proserv_rate` tables with role mix, hours, rate, cost, milestone, and confidence columns.

#### Components
Project Operations estimating, a budget-review app, Teams approval, and a Power BI budget view.

#### Build steps
1. Create tables and relate budgets to phases and rates.
2. Estimate role mix and hours per phase.
3. Apply the firm's rates to produce cost.
4. Attach a delivery milestone per phase.
5. Report budget by phase with a confidence range.

#### Demo script
Each phase shows a defensible cost and milestone, not a round number. **Wow moment:** the roadmap becomes fundable, not aspirational.
