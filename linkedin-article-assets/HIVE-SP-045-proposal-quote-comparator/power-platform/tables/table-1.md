## 1 · Proposal Register · Dynamics 365 Customer Service

#### Context
**Persona:** Advisory lead. **Problem:** proposals arrive in scattered formats and are never captured comparably. **Success criteria:** every provider proposal is a structured record with terms, pricing basis, and source.

#### Data model
Create `proserv_proposal`, `proserv_provider`, and `proserv_term` tables with provider, pricing basis, term text, source link, and normalized-value columns.

#### Components
Customer Service intake, a proposal-review app, Teams routing for missing terms, and a Power BI coverage view.

#### Build steps
1. Create tables and relate proposals to providers and terms.
2. Capture each proposal with its raw terms and source.
3. Extract pricing basis and key terms.
4. Flag missing or ambiguous terms.
5. Report coverage across providers.

#### Demo script
Twenty proposals land as structured, comparable records. **Wow moment:** coverage stops being limited to the usual three.
