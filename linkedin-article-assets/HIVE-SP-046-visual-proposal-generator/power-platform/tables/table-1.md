## 1 · Proposal Substance Register · Dynamics 365 Project Operations

#### Context
**Persona:** Engagement lead. **Problem:** proposal material is scattered across scoping notes and findings, so building the decision slide starts from zero every time. **Success criteria:** the value, scope, and proof for a proposal are structured records ready to visualize.

#### Data model
Create `proserv_proposal`, `proserv_valuepoint`, and `proserv_evidence` tables with claim, value metric, scope item, evidence link, and slide-role columns.

#### Components
Project Operations opportunity context, a substance-review app, Teams routing, and a Power BI value view.

#### Build steps
1. Create tables and relate value points to evidence.
2. Capture the scope, value, and proof for the proposal.
3. Tag the candidate decision-slide claim.
4. Link evidence to each claim.
5. Report the value story and its support.

#### Demo script
Scattered scoping notes become a structured value story. **Wow moment:** the decision slide has a foundation before design starts.
