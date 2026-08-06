## 2 · Skill Test-Case Bank · Dynamics 365 + Foundry evals

#### Context
**Persona:** Quality lead. **Problem:** a documented method is never validated, so no one trusts it. **Success criteria:** the skill is tested against known cases and proven to reproduce the expert's result.

#### Data model
Create `proserv_testcase`, `proserv_methodology`, and `proserv_testresult` tables with input, expected output, skill output, match score, and status columns.

#### Components
Foundry evaluation, a test-review app, Teams sign-off, and a Power BI validation view.

#### Build steps
1. Create tables and relate test cases to the method.
2. Load known cases with expected results.
3. Run the skill against each case.
4. Score how well it reproduces the result.
5. Flag cases where the skill falls short.

#### Demo script
The skill runs known cases and matches the expert's answers. **Wow moment:** the method is proven, not just written.
