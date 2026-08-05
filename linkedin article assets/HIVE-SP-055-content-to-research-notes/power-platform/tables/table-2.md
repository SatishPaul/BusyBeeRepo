## 2 · Research Note Model · Dynamics 365 + Foundry

#### Context
**Persona:** Analyst. **Problem:** transcripts are not structured, cited research. **Success criteria:** each source becomes a note of themes, claims, and numbers, each cited to its timestamp.

#### Data model
Create `proserv_note`, `proserv_source`, and `proserv_claim` tables with theme, claim, number, timestamp citation, and confidence columns.

#### Components
Foundry structuring, a note-review app, Teams sharing, and a Power BI note view.

#### Build steps
1. Create tables and relate notes to sources and claims.
2. Extract the signal from the transcript.
3. Structure it into themes and claims.
4. Cite each point to its timestamp.
5. Omit claims the content does not support.

#### Demo script
A ten-hour set of calls becomes a page of cited claims. **Wow moment:** the note is verifiable, not a paraphrase.
