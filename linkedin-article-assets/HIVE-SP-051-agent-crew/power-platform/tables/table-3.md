## 3 · Boundary Audit File · Dynamics 365 Project Operations

#### Context
**Persona:** Governance lead. **Problem:** without enforcement, agents drift out of their lanes. **Success criteria:** every action is checked against the role's scope, and out-of-lane attempts are refused and logged.

#### Data model
Create `proserv_boundaryaudit`, `proserv_crewrole`, and `proserv_auditlog` tables with role, attempted action, in-scope flag, decision, and timestamp columns.

#### Components
Project Operations context, a boundary-review app, Teams alerts, and a Power BI governance view.

#### Build steps
1. Create tables and relate audits to roles and logs.
2. Check each action against the role's scope.
3. Refuse and log out-of-lane attempts.
4. Alert on repeated boundary breaches.
5. Report in-lane compliance by role.

#### Demo script
An agent reaching outside its lane is refused and logged. **Wow moment:** the crew stays governed, automatically.
