## 3 · Engagement Margin Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see engagement margin until quarter-end. **Success criteria:** a dashboard shows live budget-versus-actual, variance, and forecast across engagements.

#### Data model
Use `proserv_engagementledger`, `proserv_variance`, and `proserv_forecast`.

#### Components
Power BI dataset, scheduled refresh from Dataverse and Fabric, and drill-through by engagement.

#### Build steps
1. Model ledger, variance, and forecast.
2. Show live margin by engagement.
3. Highlight leaks and their causes.
4. Present a rolling forecast to completion.
5. Flag engagements trending off plan.

#### Demo script
Leadership sees which engagements are eroding margin, live. **Wow moment:** margin becomes a managed metric, not a post-mortem.
