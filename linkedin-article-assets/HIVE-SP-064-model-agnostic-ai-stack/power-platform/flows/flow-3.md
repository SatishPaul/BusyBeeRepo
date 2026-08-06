## 3 · Model Resilience Dashboard · Power BI

#### Context
**Persona:** Technology leadership. **Problem:** leaders cannot see lock-in, model mix, or readiness to switch. **Success criteria:** a dashboard shows model mix, cost by model, switching readiness, and scenario coverage.

#### Data model
Use `proserv_model`, `proserv_modelcall`, and `proserv_routingpolicy`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by task class.

#### Build steps
1. Model the registry, calls, and policies.
2. Show the open/closed model mix over time.
3. Track cost and quality by model.
4. Report readiness to switch a given task.
5. Flag tasks locked to a single model.

#### Demo script
Leadership sees the firm could reroute any task in a config change. **Wow moment:** resilience across scenarios becomes a metric.
