## 3 · Control Health Dashboard · Power BI

#### Context
**Persona:** Risk leadership. **Problem:** leaders see control health only at quarter-end. **Success criteria:** a dashboard shows live control health, open exceptions, time to detect, and resolution.

#### Data model
Use `proserv_control`, `proserv_exception`, and `proserv_response`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by control.

#### Build steps
1. Model controls, exceptions, and responses.
2. Show live control health.
3. Track open exceptions by severity.
4. Report time to detect and to resolve.
5. Flag controls trending toward failure.

#### Demo script
Leadership sees control health live, not quarterly. **Wow moment:** control assurance becomes real-time.
