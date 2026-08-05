## 2 · Grounding Retrieval Flow · Power Automate + Azure AI Search

#### Context
**Persona:** Knowledge engineer. **Problem:** completions answer from the model's memory, not the firm's facts. **Success criteria:** a flow retrieves relevant firm content and returns cited context the model must ground its answer in.

#### Data model
Use `proserv_groundingsource`, `proserv_outputlog`, and `proserv_contextprofile`.

#### Components
Cloud flow, Azure AI Search index over firm documents, Foundry call, and Dataverse writes.

#### Build steps
1. Trigger during context assembly.
2. Retrieve the top passages from the search index.
3. Return them as required, cited context.
4. Store the sources with the completion.
5. Reject completions that cite nothing.

#### Demo script
A completion arrives with citations pulled from the firm's own documents. **Wow moment:** the prediction is anchored to your facts, not the model's guess.
