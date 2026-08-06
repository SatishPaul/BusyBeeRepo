## 3 · Responsibility Posture Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see, across the AI estate, which controls are owned and which are assumed. **Success criteria:** a dashboard shows ownership coverage, never-transfer duties, and guardrail completeness by deployment and layer.

#### Data model
Use `proserv_aideployment`, `proserv_responsibility`, and `proserv_guardrailposture`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by layer.

#### Build steps
1. Model deployments, responsibilities, and guardrails.
2. Show ownership coverage by deployment and layer.
3. Track the four never-transfer duties per deployment.
4. Report guardrail completeness and gaps.
5. Flag any control assumed covered but unowned.

#### Demo script
Leadership sees which AI deployments are defensible and which have assumed-covered gaps. **Wow moment:** shared responsibility becomes a managed posture, not a blind spot.
