## 2 · Grounding & Orchestration Flow · Power Automate + Azure AI Search

#### Context
**Persona:** Knowledge engineer. **Problem:** answers depend on the model's memory, not the firm's data. **Success criteria:** a flow grounds each call in firm data and orchestrates multi-step work across models.

#### Data model
Use `proserv_modelcall`, `proserv_routingpolicy`, and `proserv_taskclass`.

#### Components
Cloud flow, Azure AI Search grounding, Foundry orchestration, and Dataverse writes.

#### Build steps
1. Trigger during a model request.
2. Retrieve the relevant firm data and cite it.
3. Coordinate any multi-step reasoning across models.
4. Return the grounded, cited result.
5. Record grounding for the audit trail.

#### Demo script
A workflow spans two models and stays grounded in your data. **Wow moment:** the harness is yours, the model is swappable.
