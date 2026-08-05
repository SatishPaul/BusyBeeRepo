## 3 · Confirmation File · Dynamics 365 Field Service

#### Context
**Persona:** Reviewer. **Problem:** a captured record must be confirmed before it is filed. **Success criteria:** each draft record is verified by a human, with flagged items resolved, and committed with a trail.

#### Data model
Create `proserv_confirmation`, `proserv_capture`, and `proserv_auditlog` tables with reviewer, resolved flags, decision, and audit-log columns.

#### Components
Field Service context, a confirmation-review app, Teams sign-off, and a Power BI integrity view.

#### Build steps
1. Create tables and relate confirmations to captures and audit entries.
2. Present the draft record with flagged items.
3. Have the reviewer resolve uncertainties.
4. Record the confirmation and trail.
5. File the governed record.

#### Demo script
A reviewer resolves two flags and files the record, with a trail. **Wow moment:** capture is fast and the record is trusted.
