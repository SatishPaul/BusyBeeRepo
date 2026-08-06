## 3 · Exception Review File · Dynamics 365 Finance

#### Context
**Persona:** AP manager. **Problem:** flags without governance become noise no one acts on. **Success criteria:** each flagged exception is confirmed by a human with a full trail before any dispute.

#### Data model
Create `proserv_exception`, `proserv_anomaly`, and `proserv_auditlog` tables with reviewer, decision, recovery amount, and audit-log columns.

#### Components
Finance context, an exception-review app, Teams sign-off, and a Power BI recovery view.

#### Build steps
1. Create tables and relate exceptions to anomalies and audit entries.
2. Route each flagged anomaly for review.
3. Record the reviewer's decision and reasoning.
4. Track recovery amount per confirmed exception.
5. Report caught and recovered value.

#### Demo script
A flagged duplicate is confirmed and clawed back, with a trail. **Wow moment:** the catch is governed, not automatic.
