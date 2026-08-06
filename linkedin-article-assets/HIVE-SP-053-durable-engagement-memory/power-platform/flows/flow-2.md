## 2 · Memory Index Flow · Power Automate + Azure AI Search

#### Context
**Persona:** Knowledge engineer. **Problem:** captured decisions are not recallable across months. **Success criteria:** a flow indexes decisions and answers recall questions with citations.

#### Data model
Use `proserv_decision`, `proserv_recall`, and `proserv_rationale`.

#### Components
Cloud flow, Azure AI Search index, Foundry recall, and Dataverse writes.

#### Build steps
1. Trigger when a decision is captured.
2. Index it for semantic recall.
3. On a question, retrieve the relevant decision.
4. Return the rationale with a citation.
5. Enforce engagement scope on recall.

#### Demo script
A recall question returns a cited decision scoped to the engagement. **Wow moment:** memory answers only within its bounds.
