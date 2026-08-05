## 2 · Extraction & Citation Flow · Power Automate + Azure AI Search

#### Context
**Persona:** Knowledge engineer. **Problem:** the signal is not extracted or cited. **Success criteria:** a flow pulls the key points and cites each to its timestamp.

#### Data model
Use `proserv_note`, `proserv_claim`, and `proserv_transcript`.

#### Components
Cloud flow, Azure AI Search retrieval, Foundry structuring, and Dataverse writes.

#### Build steps
1. Trigger when a transcript is ready.
2. Extract the key claims and numbers.
3. Structure them into themes.
4. Cite each point to its timestamp.
5. Omit anything the content does not support.

#### Demo script
A transcript becomes structured, cited claims. **Wow moment:** each point links back to the exact moment it was said.
