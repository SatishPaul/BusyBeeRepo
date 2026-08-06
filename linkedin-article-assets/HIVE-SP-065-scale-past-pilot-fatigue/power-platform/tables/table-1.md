## 1 · Pilot Outcome Register · Dynamics 365 Project Operations

#### Context
**Persona:** Transformation lead. **Problem:** pilots launch with no agreed number to move, so success is undefined and nothing scales. **Success criteria:** every pilot has a named business outcome, a baseline, a target metric, and a review cadence before any tool is chosen (move 1).

#### Data model
Create `proserv_pilot`, `proserv_outcome`, and `proserv_metric` tables. Columns: pilot name, sponsor, service line, hypothesis, target metric, baseline value, target value, measurement source, review cadence, and stage (proposed, greenlit, in-production, retired).

#### Components
Project Operations engagement context, an outcome-intake app, a Teams channel for greenlight review, and a Power BI outcome scoreboard.

#### Build steps
1. Create the tables and relate each pilot to one primary outcome and metric.
2. Require a baseline and a target before a pilot can leave the proposed stage.
3. Block greenlight until a sponsor and a measurement source are set.
4. Track the metric against baseline on the review cadence.
5. Auto-retire pilots that miss two consecutive review checkpoints.

#### Demo script
A pilot cannot advance without a number attached to it. **Wow moment:** the metric, not the tool, decides what gets built.
