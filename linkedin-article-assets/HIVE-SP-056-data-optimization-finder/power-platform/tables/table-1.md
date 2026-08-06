## 1 · Opportunity Register · Dynamics 365 Customer Service

#### Context
**Persona:** Advisory lead. **Problem:** optimization opportunities are never captured or sized. **Success criteria:** each opportunity is a record with its pattern, size, and evidence.

#### Data model
Create `proserv_opportunity`, `proserv_datasource`, and `proserv_evidence` tables with pattern, estimated saving, confidence, source data, and status columns.

#### Components
Customer Service advisory context, an opportunity-review app, Teams routing, and a Power BI savings view.

#### Build steps
1. Create tables and relate opportunities to data and evidence.
2. Capture each detected pattern.
3. Size the potential saving.
4. Link the supporting data.
5. Report ranked opportunities.

#### Demo script
A client's data yields a ranked list of sized savings. **Wow moment:** unseen opportunities become a decision list.
