## 1 · Crew Role Register · Dynamics 365 Project Operations

#### Context
**Persona:** Delivery lead. **Problem:** agent work has no defined roles or ownership. **Success criteria:** each engagement has a crew of roles, each with a scope, owner, and limits.

#### Data model
Create `proserv_crewrole`, `proserv_engagement`, and `proserv_rolescope` tables with role, lane, permitted actions, identity, and owner columns.

#### Components
Project Operations engagements, a crew-design app, Teams routing, and a Power BI crew view.

#### Build steps
1. Create tables and relate roles to engagements and scopes.
2. Define the roles a delivery needs.
3. Scope each role's lane and permitted actions.
4. Assign an identity per role.
5. Report the crew and its boundaries.

#### Demo script
An engagement gets a defined crew with clear lanes. **Wow moment:** every agent has an owner and a boundary.
