## 1 · Capture Register · Dynamics 365 Field Service

#### Context
**Persona:** Field professional. **Problem:** photographed artifacts are re-typed at the desk. **Success criteria:** each image becomes a structured draft record with mapped fields and flagged uncertainties.

#### Data model
Create `proserv_capture`, `proserv_recordfield`, and `proserv_uncertainty` tables with image, extracted content, mapped field, confidence, and status columns.

#### Components
Field Service capture context, a capture-review app, Teams routing, and a Power BI capture view.

#### Build steps
1. Create tables and relate captures to fields and uncertainties.
2. Ingest the field image.
3. Extract text, tables, and diagrams.
4. Map content to record fields.
5. Report captures and their confidence.

#### Demo script
A photo of a document becomes a structured draft record. **Wow moment:** the record is born from the image, not a keyboard.
