## 3 · Insight Distribution File · Dynamics 365 Customer Service

#### Context
**Persona:** Advisory lead. **Problem:** research notes do not reach the people who need them in time. **Success criteria:** notes are routed to the right teams while the content is still current.

#### Data model
Create `proserv_distribution`, `proserv_note`, and `proserv_audience` tables with note, audience, sent date, relevance, and status columns.

#### Components
Customer Service context, a distribution-review app, Teams delivery, and a Power BI reach view.

#### Build steps
1. Create tables and relate distribution to notes and audiences.
2. Match each note to its relevant teams.
3. Deliver it while the content is current.
4. Track reach and relevance.
5. Report insight delivered on time.

#### Demo script
A cited note reaches the right team the day the call happens. **Wow moment:** insight arrives while it still matters.
