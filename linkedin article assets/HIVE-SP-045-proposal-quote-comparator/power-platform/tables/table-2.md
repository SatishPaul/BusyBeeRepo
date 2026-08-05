## 2 · Normalization & Scoring Model · Dynamics 365 + Foundry

#### Context
**Persona:** Procurement advisor. **Problem:** proposals use incompatible pricing bases and cannot be scored fairly. **Success criteria:** all terms are normalized to one basis and scored against the firm's rubric.

#### Data model
Create `proserv_normalizedterm`, `proserv_criterion`, and `proserv_score` tables with normalized value, criterion, weight, score, and evidence-reference columns.

#### Components
Foundry normalization, a scoring-review app, Teams approval for weightings, and a Power BI score view.

#### Build steps
1. Create tables and relate scores to criteria and terms.
2. Normalize each proposal's terms to a common basis.
3. Apply the firm's criteria and weights.
4. Attach the evidence behind each score.
5. Report scores by criterion and provider.

#### Demo script
A per-seat and a per-transaction quote become directly comparable and scored. **Wow moment:** the apples-to-oranges problem disappears.
