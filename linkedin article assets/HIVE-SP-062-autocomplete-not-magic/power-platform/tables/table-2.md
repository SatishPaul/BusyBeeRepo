## 2 · Grounded Completion Register · Dynamics 365 Customer Service

#### Context
**Persona:** Engagement lead. **Problem:** AI completions are used in client work with no record of the context that produced them, so they are not reproducible. **Success criteria:** each completion stores its context profile, retrieved sources, and citations.

#### Data model
Create `proserv_outputlog`, `proserv_contextprofile`, and `proserv_groundingsource` tables with completion, profile used, source links, citation text, and review-status columns.

#### Components
Customer Service context, a completion-review app, Teams routing, and a Power BI grounding view.

#### Build steps
1. Create tables and relate completions to profiles and sources.
2. Capture each completion with the context profile it used.
3. Store the retrieved sources and citations.
4. Flag any completion that cited nothing.
5. Report grounding coverage by task type.

#### Demo script
A client-facing answer opens with the context profile and citations that produced it. **Wow moment:** the answer is reproducible because the context is on record.
