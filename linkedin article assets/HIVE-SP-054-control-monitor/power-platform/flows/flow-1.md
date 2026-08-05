## 1 · Continuous Test Flow · Power Automate + Microsoft Fabric

#### Context
**Persona:** Controls engineer. **Problem:** controls are tested on a slow cadence. **Success criteria:** a flow evaluates each relevant event against the control as it happens.

#### Data model
Use `proserv_control`, `proserv_signal`, and `proserv_exception`.

#### Components
Cloud flow, Fabric event streams, control logic, and Dataverse writes.

#### Build steps
1. Trigger on each relevant event.
2. Evaluate it against the control's logic.
3. Compare to the threshold.
4. Write a result or an exception.
5. Hand exceptions off to detection.

#### Demo script
Each transaction is checked against the control as it posts. **Wow moment:** testing is continuous, not quarterly.
