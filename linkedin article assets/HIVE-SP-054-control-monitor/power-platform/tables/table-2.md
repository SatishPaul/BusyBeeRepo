## 2 · Exception Detector · Dynamics 365 + Foundry

#### Context
**Persona:** Risk analyst. **Problem:** exceptions and drift are found late. **Success criteria:** each event is evaluated against the control and exceptions are flagged early with evidence.

#### Data model
Create `proserv_exception`, `proserv_control`, and `proserv_signal` tables with exception type, control, evidence, severity, and status columns.

#### Components
Foundry detection, an exception-review app, Teams alerts, and a Power BI exception view.

#### Build steps
1. Create tables and relate exceptions to controls and signals.
2. Evaluate each event against the control.
3. Detect failures and drift from the norm.
4. Attach the evidence behind each flag.
5. Surface exceptions ranked by severity.

#### Demo script
A control deviation is flagged in week two with its evidence. **Wow moment:** the breach is caught before it compounds.
