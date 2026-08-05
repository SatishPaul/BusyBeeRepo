## 2 · Pattern Analysis Model · Dynamics 365 + Foundry

#### Context
**Persona:** Data analyst. **Problem:** waste and mismatch patterns are not surfaced from the data. **Success criteria:** the agent analyzes unified data and surfaces patterns of inefficiency.

#### Data model
Create `proserv_pattern`, `proserv_opportunity`, and `proserv_datasource` tables with pattern type, signal, magnitude, and confidence columns.

#### Components
Foundry analysis, a pattern-review app, Teams routing, and a Power BI pattern view.

#### Build steps
1. Create tables and relate patterns to opportunities.
2. Analyze unified operational and spend data.
3. Surface waste, drift, and mismatch.
4. Rank patterns by magnitude.
5. Flag patterns the data does not fully support.

#### Demo script
A spend anomaly surfaces from a year of transactions. **Wow moment:** the pattern was there all along, now visible.
