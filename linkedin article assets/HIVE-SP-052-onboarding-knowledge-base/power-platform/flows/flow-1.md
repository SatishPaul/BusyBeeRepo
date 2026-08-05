## 1 · History Ingestion Flow · Power Automate + Microsoft Fabric

#### Context
**Persona:** Data engineer. **Problem:** engagement history is scattered across systems. **Success criteria:** a flow gathers and normalizes the record into one place for structuring.

#### Data model
Use `proserv_lesson`, `proserv_engagement`, and `proserv_accessscope`.

#### Components
Cloud flow, Fabric pipelines, source connectors, and Dataverse writes.

#### Build steps
1. Trigger on new or historical engagement records.
2. Gather documents, reviews, and notes.
3. Normalize them in Fabric.
4. Tag each with its source and scope.
5. Hand off to structuring.

#### Demo script
Years of scattered files land in one normalized store. **Wow moment:** the raw history is finally in one place.
