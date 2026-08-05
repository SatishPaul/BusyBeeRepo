## 3 · Batch Approval File · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement lead. **Problem:** a large batch needs a governed sign-off, not a rubber stamp. **Success criteria:** the verified set is gated behind human approval with a full trail.

#### Data model
Create `proserv_batchapproval`, `proserv_variant`, and `proserv_auditlog` tables with batch, approver, decision, exceptions, and audit-log columns.

#### Components
Project Operations context, an approval-review app, Teams sign-off, and a Power BI release view.

#### Build steps
1. Create tables and relate approval to variants and audit entries.
2. Present the verified batch for sign-off.
3. Surface any flagged variants for attention.
4. Record the approval decision and trail.
5. Release the approved set.

#### Demo script
A hundred verified variants are approved in one governed step. **Wow moment:** sign-off scales without losing control.
