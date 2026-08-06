## 2 · Early Alert Flow · Power Automate + Purview

#### Context
**Persona:** Risk owner. **Problem:** exceptions are noticed too late. **Success criteria:** a flow alerts the right owner the moment an exception is detected, with evidence.

#### Data model
Use `proserv_exception`, `proserv_control`, and `proserv_response`.

#### Components
Cloud flow, Purview classification, Teams alerts, and Dataverse writes.

#### Build steps
1. Trigger when an exception is detected.
2. Classify its severity.
3. Attach the triggering evidence.
4. Alert the control owner.
5. Record the flag and response.

#### Demo script
A detected exception pings its owner immediately, with evidence. **Wow moment:** the alert arrives while the fix is cheap.
