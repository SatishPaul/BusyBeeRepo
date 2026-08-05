## 1 · Field Observation Register · Dynamics 365 Field Service

#### Context
**Persona:** Audit senior on-site. **Problem:** observations made in the field are lost or vaguely recorded by the time they reach the file. **Success criteria:** every spoken observation becomes a structured record with area, risk, evidence link, and owner.

#### Data model
Create `proserv_observation`, `proserv_auditarea`, and `proserv_evidence` tables with observation text, audit area, risk level, evidence reference, owner, and status columns.

#### Components
Field Service work orders for observations, a review app, Teams routing for high-risk items, and a Power BI coverage view.

#### Build steps
1. Create tables and relate observations to audit areas and evidence.
2. Capture each observation with area and risk.
3. Link or request supporting evidence.
4. Assign an owner and due date.
5. Report observations captured versus closed.

#### Demo script
A spoken note on the floor becomes a classified, owned observation in the file. **Wow moment:** nothing dies on the walk back.
