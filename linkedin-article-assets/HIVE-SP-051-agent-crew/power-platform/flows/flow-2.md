## 2 · Crew Orchestration Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Automation architect. **Problem:** scoped agents need coordinating into a delivery. **Success criteria:** a flow runs the orchestration plan, assigning work and passing handoffs.

#### Data model
Use `proserv_orchestration`, `proserv_crewrole`, and `proserv_handoff`.

#### Components
Cloud flow, Foundry orchestrator, and Dataverse writes.

#### Build steps
1. Trigger when an engagement starts.
2. Assign each step to its role.
3. Run the role and capture its output.
4. Pass the handoff to the next role.
5. Track progress across the crew.

#### Demo script
The crew executes an engagement end to end. **Wow moment:** specialists deliver together, coordinated.
