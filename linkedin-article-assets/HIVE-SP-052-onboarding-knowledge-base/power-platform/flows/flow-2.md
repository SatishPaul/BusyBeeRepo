## 2 · Indexing & Retrieval Flow · Power Automate + Azure AI Search

#### Context
**Persona:** Knowledge engineer. **Problem:** lessons are structured but not retrievable. **Success criteria:** a flow indexes lessons and answers a question with cited retrieval.

#### Data model
Use `proserv_lesson`, `proserv_query`, and `proserv_answer`.

#### Components
Cloud flow, Azure AI Search index, Foundry answering, and Dataverse writes.

#### Build steps
1. Trigger when lessons are structured.
2. Index them for semantic retrieval.
3. On a question, retrieve the relevant lessons.
4. Compose a grounded, cited answer.
5. Enforce access scope on retrieval.

#### Demo script
A question returns a cited answer scoped to the asker. **Wow moment:** the base answers only what the person may see.
