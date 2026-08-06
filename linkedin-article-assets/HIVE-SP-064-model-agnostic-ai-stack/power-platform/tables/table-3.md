## 3 · Observability & Governance File · Dynamics 365 Project Operations

#### Context
**Persona:** Governance lead. **Problem:** running many models leaves cost, quality, and risk invisible. **Success criteria:** every model call is logged with cost, quality, grounding, and access, in one governed record.

#### Data model
Create `proserv_modelcall`, `proserv_routingpolicy`, and `proserv_auditlog` tables with model used, cost, quality score, grounded flag, access scope, and audit-log columns.

#### Components
Project Operations context, an observability app, Teams alerts, and a Power BI cost-quality view.

#### Build steps
1. Create tables and relate calls to policies and audit entries.
2. Log every model call with cost and quality.
3. Record grounding and access scope.
4. Flag drift or ungrounded output.
5. Report cost and quality across models.

#### Demo script
Leadership sees cost and quality across every model, live. **Wow moment:** many models, one governed view.
