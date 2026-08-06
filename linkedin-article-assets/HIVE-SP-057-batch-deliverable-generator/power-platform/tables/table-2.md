## 2 · Output Verification Model · Dynamics 365 + Foundry evals

#### Context
**Persona:** Quality lead. **Problem:** generated variants are shipped without checking against the master. **Success criteria:** each variant is verified for consistency and rule compliance before release.

#### Data model
Create `proserv_verification`, `proserv_variant`, and `proserv_master` tables with variant, consistency score, rule pass, deviation, and status columns.

#### Components
Foundry evaluation, a verification-review app, Teams routing, and a Power BI quality view.

#### Build steps
1. Create tables and relate verifications to variants and master.
2. Check each variant against the master's standard.
3. Score consistency and rule compliance.
4. Flag deviating outputs.
5. Report the batch quality.

#### Demo script
A deviating variant is caught before the batch ships. **Wow moment:** scale does not mean unchecked output.
