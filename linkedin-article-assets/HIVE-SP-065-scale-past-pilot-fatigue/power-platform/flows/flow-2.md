## 2 · Scoped Workflow Builder · Copilot Studio

#### Context
**Persona:** Maker / solution owner. **Problem:** teams build a generic tool for everyone that solves nobody's problem well (move 6). **Success criteria:** the build is locked to one named workflow, refuses scope creep, and matches the one-sentence scope on the pilot record.

#### Data model
Use `proserv_scope`, `proserv_pilot`, and `proserv_friction`. The agent reads the scope sentence and in/out-of-scope actions to bound its own behavior.

#### Components
A Copilot Studio agent scoped to one workflow, topic guards that decline out-of-scope asks, grounding on the specific process docs, and a Dataverse write-back of each run.

#### Build steps
1. Seed the agent with the one-sentence scope and the in/out-of-scope actions.
2. Ground it only on the documents for that single workflow.
3. Add guardrails that decline anything outside scope and point back to the workflow.
4. Instrument each run against the pilot's target metric.
5. Keep a change log so scope creep is a visible, approved decision, not a drift.

#### Demo script
Ask the agent to do something off-scope and it declines, on purpose. **Wow moment:** a narrow tool that nails one workflow beats a generic bot that helps no one.
