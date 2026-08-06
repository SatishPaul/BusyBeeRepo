## 1 · Completion Signal Flow · Power Automate

#### Context
**Persona:** AI platform engineer. **Problem:** agents finish silently, so the next stage never reliably starts. **Success criteria:** a flow emits a completion event with a typed artifact when an agent finishes.

#### Data model
Use `proserv_handoff`, `proserv_agentrun`, and `proserv_artifact`.

#### Components
Cloud flow, Foundry agent output, Dataverse writes, and event routing.

#### Build steps
1. Trigger when an agent completes its lane.
2. Package the output as a typed artifact.
3. Emit a completion event on the chain.
4. Write the handoff record.
5. Notify the next agent to begin.

#### Demo script
An agent finishing fires a clean handoff instead of going quiet. **Wow moment:** the next stage starts on a signal, not a human check.
