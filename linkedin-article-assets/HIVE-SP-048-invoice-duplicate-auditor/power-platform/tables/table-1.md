## 1 · AP Invoice Ledger · Dynamics 365 Finance

#### Context
**Persona:** AP controller. **Problem:** invoices are paid without a maintained history to check against. **Success criteria:** every invoice becomes a ledger record with vendor, amount, line items, and authorizing order.

#### Data model
Create `proserv_invoice`, `proserv_vendor`, and `proserv_lineitem` tables with vendor, amount, date, line item, PO reference, and status columns.

#### Components
Finance AP data, an invoice-review app, Teams routing for exceptions, and a Power BI coverage view.

#### Build steps
1. Create tables and relate invoices to vendors and line items.
2. Ingest every invoice and its emails.
3. Extract amount, line items, and PO reference.
4. Maintain the living AP ledger.
5. Report coverage versus spot-check.

#### Demo script
Every invoice lands in a maintained, comparable ledger. **Wow moment:** the whole population is on file, not a sample.
