## 3 · Roadmap Presentation Dashboard · Power BI

#### Context
**Persona:** Engagement partner. **Problem:** the roadmap must be presented as a fundable decision, not a spreadsheet. **Success criteria:** a dashboard shows phases, budgets, milestones, and the critical path in a client-ready view.

#### Data model
Use `proserv_roadmap`, `proserv_phase`, and `proserv_phasebudget`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by phase.

#### Build steps
1. Model roadmap, phases, and budgets.
2. Show the phased timeline with costs and milestones.
3. Highlight the critical path and dependencies.
4. Summarize total investment and phase-one ask.
5. Present a client-ready roadmap view.

#### Demo script
The partner presents a phased, costed roadmap the client can approve on the spot. **Wow moment:** the plan looks funded before the meeting ends.
