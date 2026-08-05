## 3 · Expertise Coverage Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see key-person risk or how far a method has scaled. **Success criteria:** a dashboard shows how many can run each method, ramp times, and remaining single points of failure.

#### Data model
Use `proserv_skillusage`, `proserv_methodology`, and `proserv_rampmetric`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by method.

#### Build steps
1. Model methods, usage, and ramp metrics.
2. Show how many staff can run each method.
3. Track ramp time for new staff.
4. Flag methods still held by one person.
5. Report key-person risk reduction.

#### Demo script
Leadership sees which methods are still single points of failure. **Wow moment:** key-person risk becomes a managed metric.
