## 3 · Coherence Dashboard · Power BI

#### Context
**Persona:** Program leadership. **Problem:** leaders cannot see engagement coherence or memory use. **Success criteria:** a dashboard shows relitigation, recall use, drift, and context-transfer time.

#### Data model
Use `proserv_decision`, `proserv_recall`, and `proserv_coherence`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by engagement.

#### Build steps
1. Model decisions, recalls, and coherence.
2. Show relitigation over time.
3. Track recall use by the team.
4. Report context-transfer time for new members.
5. Flag decisions drifting from settled.

#### Demo script
Leadership sees relitigation fall and recall rise. **Wow moment:** engagement coherence becomes a managed metric.
