## 2 · Data Readiness Check · Dynamics 365 + Purview

#### Context
**Persona:** Data owner. **Problem:** pilots greenlight on data that is scattered, unowned, or dirty, and stall the moment they hit real inputs. **Success criteria:** each use case has a recorded data-readiness verdict, exists, owned, clean, before build (move 2).

#### Data model
Create `proserv_datasource`, `proserv_readiness`, and `proserv_owner` tables. Columns: source system, dataset, named owner, sensitivity label, completeness score, freshness, quality issues, remediation task, and verdict (ready, remediate, blocked).

#### Components
Purview scan results, a readiness-review app, Teams routing to the data owner, and a Power BI readiness heatmap by pilot.

#### Build steps
1. Create the tables and relate each pilot to the data sources it depends on.
2. Pull sensitivity, lineage, and quality signals from Purview into the readiness record.
3. Require a named owner per source before a verdict can be set.
4. Set the verdict and open remediation tasks for anything below threshold.
5. Gate the pilot's greenlight on a ready verdict across all required sources.

#### Demo script
A pilot on unowned, dirty data cannot pass go. **Wow moment:** the real blocker surfaces before a line of the tool is built.
