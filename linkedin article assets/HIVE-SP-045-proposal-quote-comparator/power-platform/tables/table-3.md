## 3 · Ranked Recommendation File · Dynamics 365 Customer Service

#### Context
**Persona:** Engagement lead. **Problem:** even a good comparison must be presented as a defensible recommendation. **Success criteria:** a ranked shortlist with cited evidence per score, ready for the client.

#### Data model
Create `proserv_recommendation`, `proserv_score`, and `proserv_proposal` tables with rank, rationale, evidence link, and decision-status columns.

#### Components
Customer Service context, a recommendation-review app, Teams sign-off, and a Power BI ranking view.

#### Build steps
1. Create tables and relate the recommendation to scores and proposals.
2. Rank providers by weighted score.
3. Attach the cited evidence behind each rank.
4. Record the partner's decision and rationale.
5. Report the ranked shortlist for the client.

#### Demo script
A ranked shortlist shows why each provider placed where it did, with citations. **Wow moment:** the recommendation defends itself.
