## 1 · Method Structuring Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Knowledge engineer. **Problem:** captured interviews are raw and unstructured. **Success criteria:** a flow turns capture material into an explicit, repeatable method spec.

#### Data model
Use `proserv_methodology`, `proserv_methodstep`, and `proserv_sourcematerial`.

#### Components
Cloud flow, Foundry structuring, source grounding, and Dataverse writes.

#### Build steps
1. Trigger when capture material is ready.
2. Extract the repeatable steps and judgment points.
3. Structure them into a method spec.
4. Link each step to its source.
5. Hand off to skill building.

#### Demo script
Raw interviews become an explicit method spec. **Wow moment:** tacit knowledge becomes a legible pattern.
