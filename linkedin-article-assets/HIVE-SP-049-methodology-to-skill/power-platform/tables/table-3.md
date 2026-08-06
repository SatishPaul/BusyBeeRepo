## 3 · Ramp & Usage Tracker · Dynamics 365 Project Operations

#### Context
**Persona:** People lead. **Problem:** no one can see whether the skill is actually ramping new staff. **Success criteria:** a record tracks who runs the skill, on what, and how quickly they become productive.

#### Data model
Create `proserv_skillusage`, `proserv_methodology`, and `proserv_rampmetric` tables with user, engagement, run count, supervision level, and ramp-week columns.

#### Components
Project Operations staffing, a usage-review app, Teams supervision routing, and a Power BI ramp view.

#### Build steps
1. Create tables and relate usage to the method and users.
2. Record each run and its supervision level.
3. Track new-staff ramp over time.
4. Report coverage: who can run the method.
5. Flag where supervision can be reduced.

#### Demo script
New staff run the method and ramp in weeks, tracked. **Wow moment:** expertise coverage becomes a visible number.
