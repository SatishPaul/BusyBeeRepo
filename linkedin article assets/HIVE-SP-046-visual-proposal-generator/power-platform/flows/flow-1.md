## 1 · Substance Extraction Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** AI platform engineer. **Problem:** proposal substance is scattered and manually assembled. **Success criteria:** a flow pulls scope, value, and proof from engagement material into structured value points.

#### Data model
Use `proserv_proposal`, `proserv_valuepoint`, and `proserv_evidence`.

#### Components
Cloud flow, Foundry extraction, document sources, and Dataverse writes.

#### Build steps
1. Trigger on a new proposal opportunity.
2. Pull scope, value, and findings from sources.
3. Structure them as value points.
4. Link supporting evidence.
5. Hand off to slide selection.

#### Demo script
Engagement material becomes a structured value story. **Wow moment:** the blank-page phase of proposals disappears.
