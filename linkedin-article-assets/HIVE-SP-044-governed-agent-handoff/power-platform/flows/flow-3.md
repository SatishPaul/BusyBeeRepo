## 3 · Chain Health Dashboard · Power BI

#### Context
**Persona:** Delivery leadership. **Problem:** leaders cannot see whether multi-agent jobs complete or where they stall. **Success criteria:** a dashboard shows completion, stall points, gate failures, and traceability across chains.

#### Data model
Use `proserv_handoff`, `proserv_verification`, and `proserv_chainlog`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by chain.

#### Build steps
1. Model handoffs, verifications, and chain logs.
2. Show completion rate by chain and step.
3. Highlight where jobs stall most.
4. Track gate failure rates.
5. Report end-to-end traceability.

#### Demo script
Leadership sees which agent chains complete and which stall. **Wow moment:** multi-agent reliability becomes a managed metric.
