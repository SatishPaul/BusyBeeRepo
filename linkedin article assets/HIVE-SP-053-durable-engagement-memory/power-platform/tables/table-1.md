## 1 · Decision Register · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement lead. **Problem:** decisions and their rationale are not captured, so they get relitigated. **Success criteria:** every decision is a record with its rationale, alternatives, and owner.

#### Data model
Create `proserv_decision`, `proserv_engagement`, and `proserv_rationale` tables with decision, reasoning, alternatives, owner, date, and scope columns.

#### Components
Project Operations engagement context, a decision-review app, Teams routing, and a Power BI decision view.

#### Build steps
1. Create tables and relate decisions to engagements and rationale.
2. Capture each decision as it is made.
3. Record the reasoning and alternatives considered.
4. Assign an owner and scope.
5. Report decisions and their status.

#### Demo script
A decision is captured with its reasoning at the moment it is made. **Wow moment:** the why is recorded with the what.
