## 3 · Field Coverage Dashboard · Power BI

#### Context
**Persona:** Audit leadership. **Problem:** leadership cannot see whether field observations are being captured and closed. **Success criteria:** a dashboard shows observations captured, structured, filed, and closed over time.

#### Data model
Use `proserv_observation`, `proserv_finding`, and `proserv_workpaper`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by engagement.

#### Build steps
1. Model observations, findings, and workpapers.
2. Show capture-to-file conversion.
3. Trend observations recovered versus historical loss.
4. Drill into any engagement's coverage.
5. Flag findings without evidence or owners.

#### Demo script
Leadership sees the hallway-leak gap closing engagement over engagement. **Wow moment:** captured insight becomes a measurable audit-quality metric.
