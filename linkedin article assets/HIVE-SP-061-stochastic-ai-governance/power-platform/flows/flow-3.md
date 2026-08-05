## 3 · Reliability Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see whether AI outputs are dependable enough to trust in client work. **Success criteria:** a dashboard shows grounding coverage, consistency, hallucination rate, and approval SLAs over time.

#### Data model
Use `proserv_evalresult`, `proserv_aioutput`, and `proserv_approvalgate`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by workflow.

#### Build steps
1. Model outputs, eval results, and approvals.
2. Show grounding coverage and citation rate by workflow.
3. Track consistency and hallucination rate over time.
4. Report approval SLAs and gate coverage.
5. Flag workflows drifting toward the risk threshold.

#### Demo script
Leadership sees which AI workflows are dependable and which need work, at a glance. **Wow moment:** AI reliability becomes a managed metric, not a gut feel.
