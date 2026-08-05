## 3 · Dependency & Critical Path · Dynamics 365 Project Operations

#### Context
**Persona:** Program manager. **Problem:** phases are sequenced by intuition, so the plan breaks on the first hard dependency question. **Success criteria:** every phase has explicit predecessors and the critical path is visible.

#### Data model
Create `proserv_dependency`, `proserv_phase`, and `proserv_roadmap` tables with predecessor, successor, lag, critical-path flag, and risk columns.

#### Components
Project Operations schedule, a dependency-review app, Teams routing, and a Power BI critical-path view.

#### Build steps
1. Create tables and relate dependencies to phases.
2. Capture predecessors for each phase.
3. Compute the critical path across the roadmap.
4. Flag phases that cannot start until a predecessor completes.
5. Report the sequence and critical path.

#### Demo script
The roadmap shows what must precede what, with the critical path highlighted. **Wow moment:** the sequencing holds up under the client's hardest question.
