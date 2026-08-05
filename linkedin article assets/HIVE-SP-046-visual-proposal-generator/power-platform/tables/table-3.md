## 3 · Proposal Assembly File · Dynamics 365 Project Operations

#### Context
**Persona:** Delivery lead. **Problem:** assembling the full deck around the decision slide is slow and inconsistent. **Success criteria:** a client-ready, visual proposal is assembled and gated for partner sign-off.

#### Data model
Create `proserv_proposaldeck`, `proserv_decisionslide`, and `proserv_evidence` tables with section, visual, evidence link, approval status, and version columns.

#### Components
Project Operations opportunity, an assembly-review app, Teams sign-off, and a Power BI proposal view.

#### Build steps
1. Create tables and relate the deck to the slide and evidence.
2. Assemble the deck leading with the decision slide.
3. Attach the supporting depth behind it.
4. Gate for partner approval.
5. Report proposal status and version.

#### Demo script
A client-ready, decision-led deck assembles and awaits partner sign-off. **Wow moment:** days of assembly become a review.
