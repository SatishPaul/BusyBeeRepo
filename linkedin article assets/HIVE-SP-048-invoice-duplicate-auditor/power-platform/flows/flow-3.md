## 3 · Recovery Dashboard · Power BI

#### Context
**Persona:** Finance leadership. **Problem:** leaders cannot see AP leakage or what was recovered. **Success criteria:** a dashboard shows coverage, flagged anomalies, confirmed exceptions, and recovered value.

#### Data model
Use `proserv_invoice`, `proserv_anomaly`, and `proserv_exception`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by vendor.

#### Build steps
1. Model invoices, anomalies, and exceptions.
2. Show coverage: read versus sampled.
3. Break anomalies down by type and vendor.
4. Track confirmed recoveries.
5. Flag vendors with recurring anomalies.

#### Demo script
Leadership sees leakage caught and recovered, by vendor. **Wow moment:** an invisible leak becomes a managed recovery number.
