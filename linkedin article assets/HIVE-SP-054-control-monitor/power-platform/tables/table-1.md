## 1 · Control Register · Dynamics 365 Field Service

#### Context
**Persona:** Controls owner. **Problem:** controls are defined but only tested periodically. **Success criteria:** each control is a record with its test logic, signals, threshold, and owner for continuous evaluation.

#### Data model
Create `proserv_control`, `proserv_signal`, and `proserv_owner` tables with control, test logic, signal source, threshold, frequency, and owner columns.

#### Components
Field Service control context, a control-review app, Teams routing, and a Power BI health view.

#### Build steps
1. Create tables and relate controls to signals and owners.
2. Define each control's test logic and signals.
3. Set the threshold and evaluation frequency.
4. Assign an owner per control.
5. Report control coverage and health.

#### Demo script
Controls move from a quarterly checklist to continuous definitions. **Wow moment:** every control is ready to be watched live.
