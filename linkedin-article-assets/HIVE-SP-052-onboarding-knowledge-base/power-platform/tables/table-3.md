## 3 · Ramp Tracker · Dynamics 365 Project Operations

#### Context
**Persona:** People lead. **Problem:** no one can see whether the knowledge base is ramping new staff. **Success criteria:** a record tracks question volume, answer coverage, and ramp time for new hires.

#### Data model
Create `proserv_ramp`, `proserv_query`, and `proserv_lesson` tables with hire, questions asked, answered rate, ramp week, and reuse columns.

#### Components
Project Operations onboarding, a ramp-review app, Teams review, and a Power BI ramp view.

#### Build steps
1. Create tables and relate ramp to queries and lessons.
2. Track questions asked by new hires.
3. Measure answer coverage from the base.
4. Track ramp time over cohorts.
5. Report lesson reuse.

#### Demo script
New hires ramp faster as more of their questions are answered. **Wow moment:** ramp time becomes a visible, falling number.
