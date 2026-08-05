## 1 · Image Capture Flow · Power Automate + M365 Copilot

#### Context
**Persona:** Field professional. **Problem:** photos are captured but not turned into records. **Success criteria:** a flow ingests an image and routes it to extraction.

#### Data model
Use `proserv_capture`, `proserv_recordfield`, and `proserv_extraction`.

#### Components
Cloud flow, mobile capture, Copilot intake, and Dataverse writes.

#### Build steps
1. Trigger when an image is submitted from the field.
2. Store the image with its context.
3. Queue it for extraction.
4. Write the capture record.
5. Hand off to reading.

#### Demo script
A field photo lands ready for extraction. **Wow moment:** capture starts the record, not a data-entry queue.
