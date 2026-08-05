## 1 · Commitment Register · Dynamics 365 Customer Service

#### Context
**Persona:** Engagement or relationship lead. **Problem:** commitments made on client calls live in notebooks and memory, so follow-through depends on the individual. **Success criteria:** every commitment is a record with an owner, due date, source call, and status.

#### Data model
Create `proserv_commitment`, `proserv_call`, and `proserv_owner` tables with commitment text, client, owner, due date, source-call reference, and status columns.

#### Components
Customer Service queues for open commitments, a commitment-review app, Teams reminders, and a Power BI follow-through dashboard.

#### Build steps
1. Create tables and relate commitments to calls and owners.
2. Log each commitment with owner, due date, and source call.
3. Track status from open to done.
4. Escalate items approaching or past due.
5. Report follow-through rate by client and owner.

#### Demo script
A call ends and four commitments appear as owned, dated tasks. **Wow moment:** nothing depends on whose notebook it landed in.
