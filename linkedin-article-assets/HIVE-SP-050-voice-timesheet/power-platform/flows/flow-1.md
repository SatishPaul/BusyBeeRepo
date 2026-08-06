## 1 · Voice Capture Flow · Power Automate + M365 Copilot

#### Context
**Persona:** Mobile professional. **Problem:** logging time mid-task is too slow, so it waits. **Success criteria:** a flow ingests a spoken note and transcribes it into raw activity.

#### Data model
Use `proserv_timeentry`, `proserv_matter`, and `proserv_task`.

#### Components
Cloud flow, Copilot transcription, mobile capture, and Dataverse writes.

#### Build steps
1. Trigger when a voice note is submitted.
2. Transcribe the note.
3. Extract candidate duration and task.
4. Write the raw activity record.
5. Hand off to structuring.

#### Demo script
A spoken sentence in the car becomes a captured activity. **Wow moment:** logging takes a breath, not a form.
