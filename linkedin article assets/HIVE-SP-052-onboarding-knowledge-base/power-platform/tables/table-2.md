## 2 · Grounded Answer Service · Dynamics 365 + Foundry

#### Context
**Persona:** New staff. **Problem:** questions that were answered years ago get re-asked. **Success criteria:** a new hire asks a question and gets a grounded, cited answer from firm history.

#### Data model
Create `proserv_query`, `proserv_lesson`, and `proserv_answer` tables with question, retrieved lessons, answer, citations, and confidence columns.

#### Components
Foundry answering, Azure AI Search retrieval, a Q&A app, and a Power BI usage view.

#### Build steps
1. Create tables and relate answers to queries and lessons.
2. Retrieve relevant lessons for a question.
3. Compose a grounded answer with citations.
4. Say so when the history has no answer.
5. Report questions answered and gaps.

#### Demo script
A new hire's question is answered from a three-year-old engagement, cited. **Wow moment:** the firm's memory answers, not a colleague.
