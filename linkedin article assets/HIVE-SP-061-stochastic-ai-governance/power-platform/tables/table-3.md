## 3 · Human Approval Gate · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement lead. **Problem:** AI outputs that file, send, or advise need human sign-off, but approvals are ad hoc and unlogged. **Success criteria:** any consequential AI action pauses for a tiered human approval with a full audit trail.

#### Data model
Create `proserv_approvalgate`, `proserv_aioutput`, and `proserv_auditlog` tables with action type, risk tier, approver, decision, and timestamp columns.

#### Components
Project Operations task context, an approval app, Teams sign-off, and a Power BI approval-SLA view.

#### Build steps
1. Create tables and relate gates to outputs and audit entries.
2. Classify each AI action by risk tier.
3. Route high-risk actions to the right approver.
4. Record the decision and reasoning with a full audit trail.
5. Report approval SLAs and gate coverage.

#### Demo script
An AI-drafted client filing pauses at the gate until a partner signs, with the whole trail logged. **Wow moment:** judgment stays with the professional, and it is documented.
