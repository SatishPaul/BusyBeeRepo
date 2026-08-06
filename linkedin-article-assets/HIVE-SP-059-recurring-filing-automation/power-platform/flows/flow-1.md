## 1 · Input Gathering Flow · Power Automate + Microsoft Fabric

#### Context
**Persona:** Operations engineer. **Problem:** filing inputs are collected by hand each cycle. **Success criteria:** a flow gathers the inputs a recurring filing needs on schedule.

#### Data model
Use `proserv_filing`, `proserv_filinginput`, and `proserv_filingrule`.

#### Components
Cloud flow, Fabric data sources, receipt and record connectors, and Dataverse writes.

#### Build steps
1. Trigger on the filing schedule.
2. Gather receipts, data, and prior filings.
3. Normalize the inputs.
4. Write them to the filing record.
5. Hand off to preparation.

#### Demo script
A filing's inputs assemble themselves on the due date. **Wow moment:** the gathering step disappears.
