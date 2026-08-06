## 1 · Grounded Answer Register · Dynamics 365 Customer Service

#### Context
**Persona:** AI workflow owner. **Problem:** AI answers are used in client work with no record of what grounded them, so nothing is reproducible or reviewable. **Success criteria:** every AI answer is a record with its prompt, retrieved sources, citations, and eval score.

#### Data model
Create `proserv_aioutput`, `proserv_groundingsource`, and `proserv_evalresult` tables with prompt, output, source links, citation text, eval scores, and review-status columns.

#### Components
Customer Service case context, a grounded-answer app, Teams routing for low-scoring outputs, and a Power BI grounding dashboard.

#### Build steps
1. Create tables and relate answers to sources and eval results.
2. Capture each AI answer with its prompt and retrieved context.
3. Store every citation the answer relied on.
4. Attach the eval score and flag ungrounded claims.
5. Report grounding coverage and review status by workflow.

#### Demo script
An AI answer opens with its citations and score attached, and an ungrounded claim is flagged for review. **Wow moment:** every answer is traceable, not a black box.
