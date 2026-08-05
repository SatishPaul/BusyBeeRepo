## 3 · Research Coverage Dashboard · Power BI

#### Context
**Persona:** Research leadership. **Problem:** leaders cannot see coverage or turnaround. **Success criteria:** a dashboard shows sources covered, hours saved, note turnaround, and reach.

#### Data model
Use `proserv_source`, `proserv_note`, and `proserv_distribution`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by source.

#### Build steps
1. Model sources, notes, and distribution.
2. Show sources covered over time.
3. Track hours saved per source.
4. Report note turnaround time.
5. Flag sources not yet covered.

#### Demo script
Leadership sees coverage climb and turnaround fall. **Wow moment:** research capacity becomes a visible, growing number.
