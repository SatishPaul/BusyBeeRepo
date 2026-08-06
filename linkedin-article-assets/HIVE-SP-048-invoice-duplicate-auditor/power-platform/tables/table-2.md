## 2 · Duplicate & Creep Detector · Dynamics 365 + Foundry

#### Context
**Persona:** Internal auditor. **Problem:** duplicates and slow price creep pass unnoticed. **Success criteria:** each invoice is matched against history and anomalies are flagged with evidence.

#### Data model
Create `proserv_anomaly`, `proserv_invoice`, and `proserv_lineitem` tables with anomaly type, matched invoice, delta, evidence link, and status columns.

#### Components
Foundry matching, an anomaly-review app, Teams routing, and a Power BI exception view.

#### Build steps
1. Create tables and relate anomalies to invoices.
2. Match each line against AP history.
3. Detect duplicates, price creep, and unauthorized charges.
4. Attach the evidence behind each flag.
5. Surface ambiguous matches rather than forcing them.

#### Demo script
A duplicate and a slow price increase surface with evidence. **Wow moment:** the quiet leaks become visible flags.
