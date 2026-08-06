## 2 · Orchestration Plan · Dynamics 365 + Foundry

#### Context
**Persona:** Automation architect. **Problem:** scoped agents do not coordinate into a delivery. **Success criteria:** an orchestration plan assigns work, sequences handoffs, and holds the engagement together.

#### Data model
Create `proserv_orchestration`, `proserv_crewrole`, and `proserv_handoff` tables with step, role, predecessor, artifact, and status columns.

#### Components
Foundry orchestrator, a plan-review app, Teams routing, and a Power BI progress view.

#### Build steps
1. Create tables and relate the plan to roles and handoffs.
2. Sequence the work across the crew.
3. Assign each step to a role.
4. Define the handoff between steps.
5. Report engagement progress by role.

#### Demo script
The crew runs an engagement, each role picking up its part. **Wow moment:** specialists coordinate into one delivery.
