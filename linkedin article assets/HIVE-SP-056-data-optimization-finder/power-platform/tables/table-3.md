## 3 · Savings Plan File · Dynamics 365 Customer Service

#### Context
**Persona:** Engagement lead. **Problem:** opportunities must be assembled into a defensible, client-ready plan. **Success criteria:** a ranked savings plan with evidence per opportunity, ready to present.

#### Data model
Create `proserv_savingsplan`, `proserv_opportunity`, and `proserv_evidence` tables with rank, saving, effort, evidence link, and decision-status columns.

#### Components
Customer Service context, a plan-review app, Teams sign-off, and a Power BI plan view.

#### Build steps
1. Create tables and relate the plan to opportunities and evidence.
2. Rank opportunities by saving and effort.
3. Attach evidence per opportunity.
4. Record the advisor's recommendation.
5. Present the client-ready savings plan.

#### Demo script
A ranked, evidence-backed savings plan is ready to present. **Wow moment:** the recommendation defends itself with the client's data.
