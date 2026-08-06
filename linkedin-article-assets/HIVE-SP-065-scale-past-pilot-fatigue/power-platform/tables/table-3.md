## 3 · Sign-off & Scope File · Dynamics 365 Project Operations

#### Context
**Persona:** Accountable owner. **Problem:** a working pilot sits frozen for months because nobody decided who approves it or who is accountable when it is wrong. **Success criteria:** every pilot carries a named approver, an accountable owner, and a one-sentence scope before launch (moves 3 and 4).

#### Data model
Create `proserv_signoff`, `proserv_scope`, and `proserv_accountability` tables. Columns: approver, accountable owner, escalation path, scope sentence, in-scope actions, out-of-scope actions, risk tier, approval status, and decision date.

#### Components
Project Operations context, a sign-off app, a Teams approvals inbox, and a Power BI view of pilots blocked on approval.

#### Build steps
1. Create the tables and relate each pilot to one approver and one accountable owner.
2. Require a single-sentence scope that states what the AI will and will not do.
3. Route the scope and risk tier to the approver through Teams approvals.
4. Record the decision, date, and any conditions on the pilot record.
5. Flag any pilot running without a completed sign-off record.

#### Demo script
No pilot launches without a name against the risk. **Wow moment:** the approval that used to take months is a recorded decision, not a hallway chat.
