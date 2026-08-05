## 3 · Comparison Dashboard · Power BI

#### Context
**Persona:** Advisory leadership. **Problem:** the comparison must be presented as a clear, defensible ranking. **Success criteria:** a dashboard shows the ranked shortlist, scores by criterion, and the evidence behind each.

#### Data model
Use `proserv_proposal`, `proserv_score`, and `proserv_recommendation`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by criterion.

#### Build steps
1. Model proposals, scores, and the recommendation.
2. Show the ranked shortlist with weighted scores.
3. Break scores down by criterion.
4. Surface the evidence behind each score.
5. Present a client-ready comparison.

#### Demo script
The client sees a ranked comparison they can drill into by criterion. **Wow moment:** the recommendation is transparent, not a black box.
