## 1 · Frontline Friction Capture · Power Automate + Copilot

#### Context
**Persona:** Practice operations lead. **Problem:** use cases are guessed by leadership instead of taken from the people doing the manual work (move 5). **Success criteria:** a flow captures direct frontline input on what slows the work and ranks candidate workflows by time and money lost.

#### Data model
Use `proserv_pilot`, `proserv_outcome`, and a new `proserv_friction` table with task, role, minutes per occurrence, frequency, annualized cost, and quoted pain in the worker's words.

#### Components
Copilot-driven interview prompts, a Power Automate intake flow, Teams collection from the frontline, and a Power BI ranked-friction board.

#### Build steps
1. Trigger a short Copilot conversation with the person doing the task, not a survey.
2. Capture the task, its frequency, and the minutes it costs, in their words.
3. Compute annualized time and cost per candidate workflow.
4. Rank candidates and link the top one to a pilot outcome record.
5. Route the shortlist to the sponsor for a greenlight decision.

#### Demo script
The use case comes from the person doing the work, ranked by real cost. **Wow moment:** the winning workflow is one leadership never guessed.
