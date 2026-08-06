## 1 · Decision Capture Flow · Power Automate + M365 Copilot

#### Context
**Persona:** Engagement team. **Problem:** decisions are made in meetings and chats and never captured with reasoning. **Success criteria:** a flow captures a decision and its rationale from where it happens.

#### Data model
Use `proserv_decision`, `proserv_rationale`, and `proserv_engagement`.

#### Components
Cloud flow, Copilot extraction, Teams and meeting sources, and Dataverse writes.

#### Build steps
1. Trigger on a decision in a meeting or chat.
2. Extract the decision and its reasoning.
3. Capture the alternatives considered.
4. Write the decision record with scope.
5. Confirm with the owner.

#### Demo script
A decision made in a Teams call is captured with its why. **Wow moment:** the reasoning is saved without extra work.
