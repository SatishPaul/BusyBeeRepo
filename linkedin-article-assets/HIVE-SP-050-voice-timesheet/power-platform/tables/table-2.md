## 2 · Billing Rules Validator · Dynamics 365 + Foundry

#### Context
**Persona:** Billing manager. **Problem:** entries fail billing rules and bounce back. **Success criteria:** each entry is validated against firm billing policy and format before submission.

#### Data model
Create `proserv_billingrule`, `proserv_timeentry`, and `proserv_validation` tables with rule, entry, pass flag, reason, and status columns.

#### Components
Foundry validation, a rules-review app, Teams routing, and a Power BI compliance view.

#### Build steps
1. Create tables and relate validations to entries and rules.
2. Check each entry against billing policy.
3. Flag entries that fail format or policy.
4. Surface ambiguous coding for a human.
5. Report validation pass rates.

#### Demo script
An entry is validated and corrected before it reaches billing. **Wow moment:** rejections stop clogging the billing cycle.
