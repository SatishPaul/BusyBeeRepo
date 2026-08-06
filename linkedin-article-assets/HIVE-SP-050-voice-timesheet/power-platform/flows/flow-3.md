## 3 · Realization Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see billable leakage. **Success criteria:** a dashboard shows capture rate, realization, and leakage by person and matter.

#### Data model
Use `proserv_timeentry`, `proserv_realization`, and `proserv_matter`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by person.

#### Build steps
1. Model entries, realization, and matters.
2. Show capture rate over time.
3. Compare captured to billed hours.
4. Surface leakage by person and matter.
5. Report recovered billable value.

#### Demo script
Leadership watches realization rise as capture moves in-moment. **Wow moment:** billable leakage becomes a managed metric.
