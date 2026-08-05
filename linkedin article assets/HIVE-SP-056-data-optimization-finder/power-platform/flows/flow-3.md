## 3 · Savings Opportunity Dashboard · Power BI

#### Context
**Persona:** Advisory leadership. **Problem:** opportunities must be presented as a clear, ranked plan. **Success criteria:** a dashboard shows ranked savings, evidence, effort, and captured value.

#### Data model
Use `proserv_opportunity`, `proserv_savingsplan`, and `proserv_evidence`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by opportunity.

#### Build steps
1. Model opportunities, plan, and evidence.
2. Show ranked savings by size and effort.
3. Surface the evidence behind each.
4. Track captured versus identified savings.
5. Flag opportunities with weak support.

#### Demo script
A client sees a ranked savings plan they can drill into. **Wow moment:** unused data becomes a transparent savings pipeline.
