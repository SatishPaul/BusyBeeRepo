## 2 · Skill Test Flow · Power Automate + Foundry evals

#### Context
**Persona:** Quality engineer. **Problem:** the skill ships without validation. **Success criteria:** a flow runs the skill against the test-case bank and gates release on results.

#### Data model
Use `proserv_testcase`, `proserv_testresult`, and `proserv_methodology`.

#### Components
Cloud flow, Foundry evals, Dataverse writes, and Teams release routing.

#### Build steps
1. Trigger when a skill version is ready.
2. Run it against every known case.
3. Score reproduction of the expert result.
4. Gate release on a passing threshold.
5. Route failures back for refinement.

#### Demo script
A skill version is tested and only ships if it passes. **Wow moment:** the method is validated before anyone relies on it.
