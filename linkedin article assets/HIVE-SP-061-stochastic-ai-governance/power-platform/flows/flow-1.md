## 1 · Grounding & Retrieval Flow · Power Automate + Azure AI Search

#### Context
**Persona:** AI platform engineer. **Problem:** the model answers from memory, so claims cannot be traced and vary run to run. **Success criteria:** a flow retrieves relevant firm data and returns cited context the model must answer from.

#### Data model
Use `proserv_groundingsource`, `proserv_aioutput`, and `proserv_evalresult`.

#### Components
Cloud flow, Azure AI Search index over firm documents, Foundry call, and Dataverse writes.

#### Build steps
1. Trigger on a user or agent request.
2. Retrieve the top passages from the search index.
3. Pass them as required, cited context to the model.
4. Store the answer with its source links.
5. Reject any answer that cites nothing.

#### Demo script
A question returns an answer with three citations pulled from the firm's own documents. **Wow moment:** the model stops guessing and starts quoting your data.
