## 2 · Extraction & Mapping Model · Dynamics 365 + Foundry

#### Context
**Persona:** Data quality lead. **Problem:** OCR output is not mapped to the right record. **Success criteria:** the agent reads the image and maps content to the correct structured fields, flagging low confidence.

#### Data model
Create `proserv_extraction`, `proserv_capture`, and `proserv_recordfield` tables with element, type, mapped field, confidence, and flag columns.

#### Components
Foundry multimodal read, a mapping-review app, Teams routing, and a Power BI accuracy view.

#### Build steps
1. Create tables and relate extraction to captures and fields.
2. Read text, tables, handwriting, and diagrams.
3. Map each element to a record field.
4. Flag low-confidence reads.
5. Report mapping accuracy.

#### Demo script
A handwritten table maps cleanly into structured fields. **Wow moment:** comprehension, not just character recognition.
