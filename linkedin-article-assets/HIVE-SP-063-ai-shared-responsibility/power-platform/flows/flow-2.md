## 2 · Data Boundary Flow · Power Automate + Purview

#### Context
**Persona:** Data governance lead. **Problem:** what an AI can see and where its outputs go is a never-transfer duty, but boundaries are not enforced. **Success criteria:** a flow applies classification and DLP so sensitive data stays in bounds around every AI call.

#### Data model
Use `proserv_neverTransfer`, `proserv_controlevidence`, and `proserv_aideployment`.

#### Components
Cloud flow, Purview labels and DLP, Dataverse writes, and Teams exception routing.

#### Build steps
1. Trigger when data enters or leaves an AI workflow.
2. Check classification against the data policy.
3. Block or route anything out of bounds.
4. Record the enforcement as control evidence.
5. Report data-boundary posture.

#### Demo script
A prompt with confidential data is caught and re-scoped before it reaches the model. **Wow moment:** the data layer stays yours, enforced not assumed.
