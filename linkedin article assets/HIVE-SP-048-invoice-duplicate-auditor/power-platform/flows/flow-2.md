## 2 · Matching & Flagging Flow · Power Automate + Microsoft Fabric

#### Context
**Persona:** Controls engineer. **Problem:** matching each invoice against history is not done at scale. **Success criteria:** a flow matches every line and flags duplicates and price creep with evidence.

#### Data model
Use `proserv_anomaly`, `proserv_invoice`, and `proserv_lineitem`.

#### Components
Cloud flow, Fabric matching, threshold rules, and Dataverse writes.

#### Build steps
1. Trigger when an invoice is ingested.
2. Match line items against AP history.
3. Detect duplicates and price increases.
4. Attach evidence to each flag.
5. Route flags for human review.

#### Demo script
A new invoice is checked against all history and flagged if it duplicates. **Wow moment:** matching runs on every line, every time.
