## 1 · Voice Capture Flow · Power Automate

#### Context
**Persona:** AI platform engineer. **Problem:** voice observations are not reliably captured and routed. **Success criteria:** a flow ingests a voice note, transcribes it, and triggers structuring.

#### Data model
Use `proserv_observation`, `proserv_finding`, and `proserv_auditarea`.

#### Components
Cloud flow, Copilot transcription, Foundry structuring, and Dataverse writes.

#### Build steps
1. Trigger when a voice note is submitted from the field.
2. Transcribe the note.
3. Send it to the structuring service.
4. Write the raw note and structured finding.
5. Notify the auditor to confirm.

#### Demo script
A voice memo from the floor lands as a review-ready finding. **Wow moment:** capture takes one sentence and no keyboard.
