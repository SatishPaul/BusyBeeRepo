## 2 · Visual Generation Flow · Power Automate + Power BI

#### Context
**Persona:** Proposal designer. **Problem:** turning value points into clear visuals is slow and inconsistent. **Success criteria:** a flow generates the decision slide and supporting visuals from structured value points.

#### Data model
Use `proserv_decisionslide`, `proserv_valuepoint`, and `proserv_evidence`.

#### Components
Cloud flow, Power BI visual generation, Foundry layout support, and Dataverse writes.

#### Build steps
1. Trigger when the decision slide is chosen.
2. Generate the visual for the central claim.
3. Build supporting visuals from value points.
4. Attach citations to each visual.
5. Assemble the visual set.

#### Demo script
Value points become a decision slide and backing visuals. **Wow moment:** charts carry the argument, not paragraphs.
