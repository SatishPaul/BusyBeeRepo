## 3 · Batch Throughput Dashboard · Power BI

#### Context
**Persona:** Delivery leadership. **Problem:** leaders cannot see batch cost, throughput, or quality. **Success criteria:** a dashboard shows cost per variant, throughput, quality variance, and time to full set.

#### Data model
Use `proserv_variant`, `proserv_verification`, and `proserv_batchapproval`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by batch.

#### Build steps
1. Model variants, verifications, and approvals.
2. Show cost per variant over time.
3. Track throughput by batch.
4. Report quality variance across the set.
5. Flag batches with high deviation.

#### Demo script
Leadership sees cost per variant collapse as volume rises. **Wow moment:** scale becomes a metric that improves.
