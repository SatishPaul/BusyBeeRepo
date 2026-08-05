## 1 · Data Unification Flow · Power Automate + Microsoft Fabric

#### Context
**Persona:** Data engineer. **Problem:** client data is siloed, so cross-system patterns stay hidden. **Success criteria:** a flow unifies operational and spend data into one analyzable view.

#### Data model
Use `proserv_datasource`, `proserv_opportunity`, and `proserv_pattern`.

#### Components
Cloud flow, Fabric pipelines, source connectors, and Dataverse writes.

#### Build steps
1. Trigger on a new data source or refresh.
2. Ingest operational and spend data.
3. Normalize and unify in Fabric.
4. Prepare the analyzable view.
5. Hand off to analysis.

#### Demo script
Siloed client feeds resolve into one analyzable dataset. **Wow moment:** patterns that span systems become findable.
