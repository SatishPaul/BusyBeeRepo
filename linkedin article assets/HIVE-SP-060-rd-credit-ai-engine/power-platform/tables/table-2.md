## 2 · Qualified Cost Mapper · Dynamics 365 Finance

#### Context
**Persona:** Tax and finance lead. **Problem:** qualifying costs (wages, contractors, cloud, supplies) are not connected to qualifying activities, so the claim is weak or estimated. **Success criteria:** each qualified cost is traced to a specific qualifying activity with source data.

#### Data model
Create `proserv_qualifiedcost`, `proserv_rdactivity`, and `proserv_costsource` tables with cost type, amount, source record, allocation basis, and activity-link columns.

#### Components
Finance cost data, a cost-review app, Teams approval for allocations, and a Power BI qualified-cost view.

#### Build steps
1. Create tables and relate costs to activities and sources.
2. Pull wage, contractor, and cloud costs from finance systems.
3. Allocate each cost to the qualifying activities it supports.
4. Trace every allocation to a source record, no estimates.
5. Report qualified costs by activity and category.

#### Demo script
Cloud spend and engineer time trace cleanly to specific qualifying projects. **Wow moment:** the cost side of the claim is documented, not guessed.
