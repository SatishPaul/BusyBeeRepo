## 1 · Regulatory Change Register · Dynamics 365 Customer Service

#### Context
**Persona:** Tax knowledge and risk lead. **Problem:** regulatory changes are tracked in inboxes and spreadsheets, so no one can prove which clients were assessed for a given change. **Success criteria:** every change is a record, linked to the authority, the affected clients, and an action status.

#### Data model
Create `proserv_regchange`, `proserv_authority`, and `proserv_clientimpact` tables with change summary, source URL, jurisdiction, effective date, client, relevance score, and action status columns.

#### Components
Customer Service queues for regulatory triage, a change-review app, Teams routing for high-impact changes, and a Power BI coverage dashboard.

#### Build steps
1. Create tables and relate changes to authorities and client impacts.
2. Log each change with its source, jurisdiction, and effective date.
3. Relate a change to every affected client with a relevance score.
4. Track an action status per client impact.
5. Report coverage by jurisdiction, client, and status.

#### Demo script
A new ruling lands as a change record, auto-linked to the three clients it touches with scores and open actions. **Wow moment:** "did we assess this for every client" becomes one dashboard, not a memory test.
