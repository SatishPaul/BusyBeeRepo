## 2 · Output Evaluation Flow · Power Automate + Foundry evals

#### Context
**Persona:** Quality lead. **Problem:** outputs cannot all be reviewed by hand, so errors and drift slip through. **Success criteria:** a flow scores each output for grounding, consistency, and error, and routes only the risky ones to a human.

#### Data model
Use `proserv_evalresult`, `proserv_aioutput`, and `proserv_variancelog`.

#### Components
Cloud flow, Foundry evaluation calls, Dataverse writes, and Teams review routing.

#### Build steps
1. Trigger when an output is generated.
2. Run grounding, consistency, and error evals.
3. Write the scores to the output record.
4. Pass high-scoring outputs and route low ones to review.
5. Log variance for the drift monitor.

#### Demo script
A batch of AI outputs auto-scores, and only the two weak ones land in a reviewer's queue. **Wow moment:** review effort focuses where risk actually is.
