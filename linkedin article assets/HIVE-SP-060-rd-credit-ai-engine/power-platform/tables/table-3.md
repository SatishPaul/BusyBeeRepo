## 3 · Credit Position File · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement lead. **Problem:** even good activity and cost data must be assembled into a defensible, examinable position. **Success criteria:** a governed credit file links activities, tests, evidence, and costs with a full audit trail.

#### Data model
Create `proserv_creditposition`, `proserv_rdactivity`, and `proserv_qualifiedcost` tables with tax year, activity set, cost set, documentation status, and audit-log columns.

#### Components
Project Operations closeout, a position-review app, Teams sign-off, and a Power BI readiness view.

#### Build steps
1. Create tables and relate positions to activities and costs.
2. Assemble the position for a tax year.
3. Check every activity has test result and evidence.
4. Record a full audit trail per position.
5. Report documentation completeness and exam readiness.

#### Demo script
A tax-year position shows every activity tested, evidenced, and costed, ready to file. **Wow moment:** filing is a review, not an excavation.
