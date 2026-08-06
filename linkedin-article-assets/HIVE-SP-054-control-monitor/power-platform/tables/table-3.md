## 3 · Exception Response File · Dynamics 365 Field Service

#### Context
**Persona:** Compliance manager. **Problem:** flags without a governed response are noise. **Success criteria:** each exception is routed to an owner, confirmed, and resolved with a full trail.

#### Data model
Create `proserv_response`, `proserv_exception`, and `proserv_auditlog` tables with owner, decision, action, resolution, and audit-log columns.

#### Components
Field Service context, a response-review app, Teams sign-off, and a Power BI resolution view.

#### Build steps
1. Create tables and relate responses to exceptions and audit entries.
2. Route each exception to its owner.
3. Record the confirmation and action.
4. Track resolution and time to close.
5. Report exceptions resolved and open.

#### Demo script
A flagged exception is confirmed and resolved, with a trail. **Wow moment:** early detection turns into fast, governed response.
