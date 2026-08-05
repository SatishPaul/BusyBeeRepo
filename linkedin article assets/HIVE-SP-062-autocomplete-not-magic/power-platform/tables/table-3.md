## 3 · Tool-Action Log · Dynamics 365 Project Operations

#### Context
**Persona:** Operations lead. **Problem:** when the model acts through tools, there is no record of what it did or whether it was approved. **Success criteria:** every tool action the model takes is logged with its inputs, approval, and result.

#### Data model
Create `proserv_toolaction`, `proserv_outputlog`, and `proserv_approvalgate` tables with tool, inputs, approver, decision, result, and timestamp columns.

#### Components
Project Operations task context, a tool-action app, Teams approval, and a Power BI automation view.

#### Build steps
1. Create tables and relate actions to completions and approvals.
2. Log every tool call the model makes with its inputs.
3. Require approval for consequential actions.
4. Record the result and a full audit trail.
5. Report which tasks are automated and their success rate.

#### Demo script
The model files a routine update through a tool, pausing for approval, with the whole action logged. **Wow moment:** autocomplete becomes accountable automation.
