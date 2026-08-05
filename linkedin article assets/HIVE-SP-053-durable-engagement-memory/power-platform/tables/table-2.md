## 2 · Context Recall Service · Dynamics 365 + Foundry

#### Context
**Persona:** Team member. **Problem:** the reasoning behind a past decision cannot be recalled on demand. **Success criteria:** a question returns the relevant decision and its rationale, cited.

#### Data model
Create `proserv_recall`, `proserv_decision`, and `proserv_rationale` tables with question, retrieved decision, answer, citation, and confidence columns.

#### Components
Foundry recall, Azure AI Search retrieval, a recall app, and a Power BI usage view.

#### Build steps
1. Create tables and relate recall to decisions.
2. Retrieve the relevant decision for a question.
3. Return its rationale with a citation.
4. Say so when no decision matches.
5. Report recall coverage.

#### Demo script
A month-four question returns the month-one reasoning, cited. **Wow moment:** the engagement remembers itself.
