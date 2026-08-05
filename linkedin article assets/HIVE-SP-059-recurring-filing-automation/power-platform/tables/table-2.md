## 2 · Preparation & Validation Model · Dynamics 365 + Foundry

#### Context
**Persona:** Compliance preparer. **Problem:** each filing is drafted and checked by hand. **Success criteria:** the agent prepares the filing from inputs and validates it against policy before review.

#### Data model
Create `proserv_preparedfiling`, `proserv_filing`, and `proserv_validation` tables with draft, completeness, policy pass, exceptions, and status columns.

#### Components
Foundry preparation, a validation-review app, Teams routing, and a Power BI compliance view.

#### Build steps
1. Create tables and relate prepared filings to filings and validations.
2. Draft the filing from its inputs and rules.
3. Validate completeness and policy.
4. Flag exceptions for attention.
5. Report validated filings ready for approval.

#### Demo script
A filing is drafted and validated before a human sees it. **Wow moment:** what reaches the approver is already clean.
