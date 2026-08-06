## 2 · Decision-Slide Model · Dynamics 365 + Foundry

#### Context
**Persona:** Proposal owner. **Problem:** the single deciding view is chosen by instinct and often buried. **Success criteria:** the agent identifies and grounds the one decision slide with cited evidence.

#### Data model
Create `proserv_decisionslide`, `proserv_valuepoint`, and `proserv_evidence` tables with central claim, visual type, evidence references, and confidence columns.

#### Components
Foundry structuring, a slide-review app, Teams approval, and a Power BI proof view.

#### Build steps
1. Create tables and relate the slide to value points and evidence.
2. Identify the clearest value claim.
3. Choose the visual that carries it.
4. Attach cited evidence to the claim.
5. Flag any claim the substance does not support.

#### Demo script
The one decision slide is chosen and backed with citations. **Wow moment:** the point leads the proposal instead of hiding in it.
