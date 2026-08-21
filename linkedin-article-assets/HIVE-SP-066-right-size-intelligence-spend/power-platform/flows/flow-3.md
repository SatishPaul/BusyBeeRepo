## 3 · Hybrid Decompose-and-Execute · Power Automate + local models

#### Context
**Persona:** Solution engineer. **Problem:** complex requests are sent whole to a frontier model, paying frontier rates for parts that are simple or private. **Success criteria:** a frontier model decomposes the hard problem while smaller local models execute the subtasks, recovering most of the accuracy at a fraction of the cost.

#### Data model
Use `proserv_workunit`, `proserv_modelcall`, and `proserv_outcome`.

#### Components
Cloud flow, a frontier planner call, parallel local-model executors, a stitcher, and Dataverse logging.

#### Build steps
1. Trigger on a complex, long-context request.
2. Send only the planning and decomposition step to a frontier model.
3. Fan the resulting subtasks out to small or local models, keeping private data local.
4. Stitch the subtask results and validate against the definition of done.
5. Log tokens and cost per tier so the savings are visible.

#### Demo script
The frontier model plans; cheap local models do the work. **Wow moment:** near-frontier accuracy at a large multiple lower cost, with private data never leaving the tenant.
