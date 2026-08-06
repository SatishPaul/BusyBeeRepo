## 3 · Approval & Submission File · Dynamics 365 Finance

#### Context
**Persona:** Approver. **Problem:** filings must be approved and submitted with a trail, not auto-filed. **Success criteria:** each validated filing is approved by a human and submitted with a full record.

#### Data model
Create `proserv_submission`, `proserv_preparedfiling`, and `proserv_auditlog` tables with approver, decision, submission reference, and audit-log columns.

#### Components
Finance context, an approval-review app, Teams sign-off, and a Power BI submission view.

#### Build steps
1. Create tables and relate submissions to prepared filings and audit entries.
2. Present the validated filing for approval.
3. Record the approval decision.
4. Submit the approved filing.
5. Log the full trail from inputs to submission.

#### Demo script
A validated filing is approved and submitted with a trail. **Wow moment:** speed with the control fully intact.
