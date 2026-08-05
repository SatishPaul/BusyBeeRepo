## 2 · Verification Flow · Power Automate + Foundry evals

#### Context
**Persona:** Quality engineer. **Problem:** generated variants ship unchecked. **Success criteria:** a flow verifies each variant against the master and routes deviations.

#### Data model
Use `proserv_verification`, `proserv_variant`, and `proserv_master`.

#### Components
Cloud flow, Foundry evals, Dataverse writes, and Teams routing.

#### Build steps
1. Trigger when a variant is generated.
2. Check it against the master's standard.
3. Score consistency and rule compliance.
4. Pass clean variants; flag deviations.
5. Record the verification result.

#### Demo script
Each variant is auto-checked, and only two need a human. **Wow moment:** verification scales with generation.
