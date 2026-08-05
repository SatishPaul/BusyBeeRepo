## 1 · Call Capture Flow · Power Automate

#### Context
**Persona:** AI platform engineer. **Problem:** call content is not reliably captured or routed for extraction. **Success criteria:** a flow ingests each call's notes or transcript and triggers commitment extraction.

#### Data model
Use `proserv_call`, `proserv_extraction`, and `proserv_commitment`.

#### Components
Cloud flow, Copilot transcript source, Foundry extraction call, and Dataverse writes.

#### Build steps
1. Trigger when a call transcript or note is filed.
2. Send the content to commitment extraction.
3. Write proposed commitments with owner and due date.
4. Notify the advisor to confirm.
5. Log the source call for traceability.

#### Demo script
A filed call note produces a review-ready commitment list minutes later. **Wow moment:** capture happens without anyone taking notes.
