## 3 · Crew Governance Dashboard · Power BI

#### Context
**Persona:** Governance leadership. **Problem:** leaders cannot see whether the crew stays in its lanes. **Success criteria:** a dashboard shows in-lane compliance, boundary refusals, and delivery progress by role.

#### Data model
Use `proserv_boundaryaudit`, `proserv_crewrole`, and `proserv_orchestration`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by role.

#### Build steps
1. Model roles, boundaries, and orchestration.
2. Show in-lane compliance per role.
3. Surface boundary refusals and breaches.
4. Track delivery progress by role.
5. Flag roles nearing their limits.

#### Demo script
Leadership sees the crew delivering while staying in bounds. **Wow moment:** crew governance becomes a visible metric.
