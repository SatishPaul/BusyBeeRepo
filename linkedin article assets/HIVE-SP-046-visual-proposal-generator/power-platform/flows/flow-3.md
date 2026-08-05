## 3 · Proposal Performance Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see whether visual, decision-led proposals convert better or build faster. **Success criteria:** a dashboard relates proposal style to close rate and build time.

#### Data model
Use `proserv_proposaldeck`, `proserv_decisionslide`, and `proserv_proposal`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by engagement.

#### Build steps
1. Model proposals, decks, and outcomes.
2. Show close rate by proposal style.
3. Track build time per proposal.
4. Compare decision-led versus text-heavy decks.
5. Flag proposals missing a grounded decision slide.

#### Demo script
Leadership sees decision-led decks convert faster and build quicker. **Wow moment:** proposal quality becomes a measurable return.
