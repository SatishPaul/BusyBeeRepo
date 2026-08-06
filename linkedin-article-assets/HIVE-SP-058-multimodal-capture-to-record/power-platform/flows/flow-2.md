## 2 · Read & Map Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Automation engineer. **Problem:** images are not read into structured fields. **Success criteria:** a flow reads the image and maps content to record fields, flagging low confidence.

#### Data model
Use `proserv_extraction`, `proserv_capture`, and `proserv_uncertainty`.

#### Components
Cloud flow, Foundry multimodal read, Dataverse writes, and Teams routing.

#### Build steps
1. Trigger on a queued capture.
2. Read text, tables, and diagrams.
3. Map content to the record fields.
4. Flag low-confidence reads.
5. Write the draft record.

#### Demo script
An image becomes a mapped draft record with two flags. **Wow moment:** structure and honesty, not a raw dump.
