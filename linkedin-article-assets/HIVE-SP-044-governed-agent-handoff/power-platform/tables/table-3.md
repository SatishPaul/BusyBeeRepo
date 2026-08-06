## 3 · Chain Audit Trail · Dynamics 365 Project Operations

#### Context
**Persona:** Delivery lead. **Problem:** a multi-agent job is a black box, so no one can explain what happened or defend it. **Success criteria:** the full chain of passes is logged and reconstructable for any job.

#### Data model
Create `proserv_chainlog`, `proserv_handoff`, and `proserv_agentrun` tables with chain-id, step order, agent, action, artifact reference, and timestamp columns.

#### Components
Project Operations job context, a chain-audit app, Teams review, and a Power BI trace view.

#### Build steps
1. Create tables and relate the chain log to handoffs and runs.
2. Append an entry at every pass in the chain.
3. Reconstruct the full sequence for any job.
4. Surface where a job stalled or failed.
5. Report end-to-end traceability coverage.

#### Demo script
Any multi-agent job replays its full chain of passes on demand. **Wow moment:** the black box becomes an auditable record.
