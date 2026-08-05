## 1 · Context Profile Library · Dynamics 365 Project Operations

#### Context
**Persona:** AI capability owner. **Problem:** every team rebuilds prompts from scratch, so quality is inconsistent and nothing is reusable. **Success criteria:** common tasks have a reusable context profile, role, data sources, and memory, that any user can apply.

#### Data model
Create `proserv_contextprofile`, `proserv_promptpattern`, and `proserv_groundingsource` tables with role, instructions, data-source links, memory scope, and task-type columns.

#### Components
Project Operations task types, a context-profile app, Teams sharing, and a Power BI usage view.

#### Build steps
1. Create tables and relate profiles to prompt patterns and sources.
2. Capture a role, instructions, and data sources per task type.
3. Define the memory scope each profile carries.
4. Publish profiles for reuse across teams.
5. Report which profiles are used and how they perform.

#### Demo script
A new hire runs a complex task by applying a proven context profile, not by guessing at a prompt. **Wow moment:** good context becomes reusable infrastructure, not tribal knowledge.
