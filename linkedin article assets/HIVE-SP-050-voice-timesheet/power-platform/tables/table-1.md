## 1 · Time Entry Register · Dynamics 365 Project Operations

#### Context
**Persona:** Billing professional. **Problem:** time is reconstructed on Friday and under-captured. **Success criteria:** every voice note becomes a structured entry with duration, task, and matter code.

#### Data model
Create `proserv_timeentry`, `proserv_matter`, and `proserv_task` tables with duration, task, matter code, client, billable flag, and status columns.

#### Components
Project Operations matters, a time-review app, Teams submission routing, and a Power BI realization view.

#### Build steps
1. Create tables and relate entries to matters and tasks.
2. Capture voice notes as raw activity.
3. Structure duration and task per note.
4. Apply the matter and client code.
5. Report captured versus reconstructed time.

#### Demo script
A spoken note becomes a matter-coded, billable-ready entry. **Wow moment:** the Friday scramble disappears.
