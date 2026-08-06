## 2 · Artifact Verification Gate · Dynamics 365 + Foundry evals

#### Context
**Persona:** Quality lead. **Problem:** a bad artifact from one agent silently corrupts everything downstream. **Success criteria:** every handoff artifact is schema- and quality-checked before the next agent receives it.

#### Data model
Create `proserv_artifact`, `proserv_verification`, and `proserv_handoff` tables with artifact, schema-valid flag, quality score, failure reason, and gate-status columns.

#### Components
Foundry evaluation, a gate-review app, Teams alerts on failed gates, and a Power BI quality view.

#### Build steps
1. Create tables and relate verifications to artifacts and handoffs.
2. Validate each artifact against its schema.
3. Score quality and completeness.
4. Block the pass and flag failures instead of forwarding junk.
5. Report gate pass and failure rates by step.

#### Demo script
A malformed artifact is caught at the pass, not three steps later. **Wow moment:** bad work stops where it starts.
