## 3 · Realization File · Dynamics 365 Project Operations

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see how much billable time is captured versus lost. **Success criteria:** a record shows capture rate, realization, and where time leaks by person and matter.

#### Data model
Create `proserv_realization`, `proserv_timeentry`, and `proserv_matter` tables with captured hours, billed hours, leakage, and period columns.

#### Components
Project Operations billing, a realization-review app, Teams review, and a Power BI realization view.

#### Build steps
1. Create tables and relate realization to entries and matters.
2. Compare captured to billed hours.
3. Surface leakage by person and matter.
4. Track realization over time.
5. Report recovered billable value.

#### Demo script
Leadership sees realization climb as capture moves to the moment. **Wow moment:** lost time becomes a recovered number.
