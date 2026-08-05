## 1 · Handoff Register · Dynamics 365 Project Operations

#### Context
**Persona:** Automation owner. **Problem:** multi-agent jobs stall because no one can see where a job is or whether a step finished. **Success criteria:** every handoff is a record with the sending agent, artifact, verification result, and receiving agent.

#### Data model
Create `proserv_handoff`, `proserv_agentrun`, and `proserv_artifact` tables with from-agent, to-agent, artifact type, verification status, timestamp, and chain-id columns.

#### Components
Project Operations job context, a chain-review app, Teams routing for failed passes, and a Power BI completion view.

#### Build steps
1. Create tables and relate handoffs to agent runs and artifacts.
2. Record a completion signal when an agent finishes.
3. Capture the typed artifact and its verification result.
4. Link the receiving agent and start time.
5. Report jobs completed versus stalled by chain.

#### Demo script
A multi-agent job shows every pass, verified and logged, end to end. **Wow moment:** you can finally see where a job actually is.
