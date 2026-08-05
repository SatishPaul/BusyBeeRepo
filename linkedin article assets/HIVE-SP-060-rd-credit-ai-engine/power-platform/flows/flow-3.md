## 3 · Credit Value Dashboard · Power BI

#### Context
**Persona:** Tax leadership. **Problem:** leadership cannot see how much credit is discovered, documented, and defensible versus at risk. **Success criteria:** a dashboard shows eligible activity, qualified cost, documentation completeness, and estimated credit over time.

#### Data model
Use `proserv_rdactivity`, `proserv_qualifiedcost`, and `proserv_creditposition`.

#### Components
Power BI dataset, scheduled refresh from Dataverse and Fabric, and drill-through by project.

#### Build steps
1. Model activities, costs, and positions.
2. Show eligible activity and qualified cost by project.
3. Track documentation completeness and exam readiness.
4. Estimate credit value with sensitivity ranges.
5. Flag activities missing evidence or cost links.

#### Demo script
The board sees estimated credit and how much of it is fully documented versus at risk. **Wow moment:** an unclaimed number becomes a managed, defensible pipeline.
