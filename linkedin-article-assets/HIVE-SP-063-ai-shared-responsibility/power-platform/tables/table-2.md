## 2 · Never-Transfer Duty Tracker · Dynamics 365 Customer Service

#### Context
**Persona:** Security and compliance lead. **Problem:** the four duties that never transfer, identity, data, usage, accountability, are assumed rather than actively owned. **Success criteria:** each of the four is tracked as an owned control with evidence, for every deployment.

#### Data model
Create `proserv_neverTransfer`, `proserv_aideployment`, and `proserv_controlevidence` tables with duty, deployment, owner, control in place, evidence link, and review-status columns.

#### Components
Customer Service context, a duty-review app, Teams sign-off, and a Power BI posture view.

#### Build steps
1. Create tables and relate duties to deployments and evidence.
2. For each deployment, confirm identity, data, usage, and accountability controls.
3. Link the evidence that each control is actually in place.
4. Flag any duty without a control or evidence.
5. Report never-transfer coverage across the estate.

#### Demo script
A SaaS Copilot shows all four duties owned and evidenced, not assumed. **Wow moment:** the duties that never transfer stop being blind spots.
