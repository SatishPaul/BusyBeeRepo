## 2 · Verification Gate Flow · Power Automate + Foundry evals

#### Context
**Persona:** Quality engineer. **Problem:** bad artifacts pass downstream unchecked. **Success criteria:** a flow validates each artifact before the receiving agent starts.

#### Data model
Use `proserv_artifact`, `proserv_verification`, and `proserv_handoff`.

#### Components
Cloud flow, Foundry evals, schema checks, and Dataverse writes.

#### Build steps
1. Trigger on a completion event.
2. Validate the artifact against its schema.
3. Score quality and completeness.
4. Pass clean artifacts; block and flag failures.
5. Record the gate result.

#### Demo script
A failed artifact halts the chain and raises a flag. **Wow moment:** the relay refuses to forward junk.
