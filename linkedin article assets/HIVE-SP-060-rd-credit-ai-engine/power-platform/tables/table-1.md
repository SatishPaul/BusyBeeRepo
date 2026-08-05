## 1 · Qualifying Activity Register · Dynamics 365 Project Operations

#### Context
**Persona:** R&D tax credit lead. **Problem:** qualifying AI and development activity is scattered and never catalogued, so eligible work is missed. **Success criteria:** every candidate activity is a record with a four-part-test result, owner, and evidence links.

#### Data model
Create `proserv_rdactivity`, `proserv_fourparttest`, and `proserv_evidence` tables with activity, project, uncertainty, experimentation, technological nature, permitted purpose, result, and evidence-link columns.

#### Components
Project Operations projects mapped to activities, a qualification-review app, Teams routing for borderline items, and a Power BI eligibility dashboard.

#### Build steps
1. Create tables and relate activities to test results and evidence.
2. Import candidate activities from project and code systems.
3. Record the four-part-test outcome per activity.
4. Link supporting evidence or flag the gap.
5. Report eligible activity and estimated value by project.

#### Demo script
A backlog of AI projects surfaces as a catalogued list of qualifying activities with test results. **Wow moment:** nothing eligible is missed, and each call is documented.
