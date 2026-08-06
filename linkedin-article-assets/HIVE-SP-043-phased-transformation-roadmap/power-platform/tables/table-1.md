## 1 · Phased Roadmap Register · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement partner. **Problem:** findings turn into roadmaps by hand, slowly and inconsistently. **Success criteria:** every engagement has a phased roadmap record with phases, budgets, milestones, and dependencies.

#### Data model
Create `proserv_roadmap`, `proserv_phase`, and `proserv_dependency` tables with phase name, sequence, effort, cost, milestone, predecessor, and status columns.

#### Components
Project Operations projects mapped to phases, a roadmap-review app, Teams sign-off, and a Power BI roadmap view.

#### Build steps
1. Create tables and relate phases to dependencies and milestones.
2. Import findings and generate candidate phases.
3. Attach effort, cost, and a milestone to each phase.
4. Map predecessors to build the critical path.
5. Report the phased, budgeted roadmap by engagement.

#### Demo script
A findings set becomes a sequenced, costed roadmap a client can approve. **Wow moment:** the plan that used to take weeks assembles in a session.
