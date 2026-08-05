## 1 · Invoice Ingestion Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** AP automation owner. **Problem:** invoices arrive across email and systems and are never fully read. **Success criteria:** a flow ingests and parses every invoice into structured ledger records.

#### Data model
Use `proserv_invoice`, `proserv_lineitem`, and `proserv_vendor`.

#### Components
Cloud flow, email and AP intake, Foundry extraction, and Dataverse writes.

#### Build steps
1. Trigger on each incoming invoice or email.
2. Extract vendor, amount, line items, and PO reference.
3. Write the structured invoice record.
4. Update the AP ledger.
5. Hand off to matching.

#### Demo script
Every invoice in the inbox becomes a structured ledger line. **Wow moment:** full coverage without a data-entry team.
