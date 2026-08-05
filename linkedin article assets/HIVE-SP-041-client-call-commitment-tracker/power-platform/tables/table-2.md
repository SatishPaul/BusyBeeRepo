## 2 · Commitment Extractor · Dynamics 365 Customer Service

#### Context
**Persona:** Advisor. **Problem:** turning a call into commitments by hand is slow and lossy. **Success criteria:** the agent extracts every commitment from a call with owner and due date, ready for review.

#### Data model
Create `proserv_call`, `proserv_extraction`, and `proserv_commitment` tables with transcript reference, extracted item, confidence, owner, and due-date columns.

#### Components
Customer Service intake queue, an extraction-review app, Teams approval, and a Power BI extraction-quality view.

#### Build steps
1. Create tables and relate calls to extracted commitments.
2. Run each call through commitment extraction.
3. Propose owner and due date per item.
4. Route the list to the advisor for one-click confirm.
5. Report extraction accuracy over time.

#### Demo script
A ten-minute call becomes four clean, owned commitments in seconds. **Wow moment:** the note-taking that never happened now happens automatically.
