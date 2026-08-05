## 2 · Opportunity Analysis Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Optimization analyst. **Problem:** the analysis for savings is not run at depth. **Success criteria:** a flow analyzes the data, sizes opportunities, and cites the evidence.

#### Data model
Use `proserv_opportunity`, `proserv_pattern`, and `proserv_evidence`.

#### Components
Cloud flow, Foundry analysis, Azure AI Search citation, and Dataverse writes.

#### Build steps
1. Trigger on the unified dataset.
2. Analyze for waste and mismatch.
3. Size each opportunity.
4. Cite the supporting figures.
5. Flag opportunities the data does not fully support.

#### Demo script
The flow surfaces sized, cited savings from the data. **Wow moment:** the analysis runs deep without an analyst's week.
