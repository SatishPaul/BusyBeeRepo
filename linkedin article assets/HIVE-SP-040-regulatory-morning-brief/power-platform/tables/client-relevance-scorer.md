## 2 · Client Relevance Scorer · Dynamics 365 Customer Service

#### Context
**Persona:** Engagement lead. **Problem:** a change may be new but irrelevant, and staff waste time triaging low-value items. **Success criteria:** each change is scored against every open engagement so only relevant, high-impact items reach a person.

#### Data model
Create `proserv_engagement`, `proserv_relevancescore`, and `proserv_scoringfactor` tables with engagement profile, change reference, score, factors, and threshold columns.

#### Components
Customer Service triage queue, a relevance-review app, Teams escalation for high scores, and a Power BI relevance view.

#### Build steps
1. Create tables and relate engagements to relevance scores.
2. Profile each engagement by jurisdiction, industry, and entity type.
3. Score each change against every engagement profile.
4. Route only items above a threshold to a person.
5. Report score distribution and false-positive rate.

#### Demo script
A change scores high for two clients and near zero for forty others, so only two land on a desk. **Wow moment:** the brief is short because the scoring did the triage.
