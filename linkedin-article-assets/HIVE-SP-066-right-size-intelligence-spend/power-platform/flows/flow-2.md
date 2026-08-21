## 2 · Right-Sizing Router · Power Automate + Foundry model routing

#### Context
**Persona:** AI architect. **Problem:** without routing, every request gets frontier intelligence whether it needs it or not. **Success criteria:** a flow sends each unit of work to the cheapest tier that clears its threshold, and steps up only on low confidence or a novel case.

#### Data model
Use `proserv_taskclass`, `proserv_routingpolicy`, `proserv_threshold`, and `proserv_modelcall`.

#### Components
Cloud flow, Foundry routing, a confidence check, an escalation path, and Dataverse logging.

#### Build steps
1. Trigger from the gateway with the task class and allowed tiers.
2. Look up the threshold and the cheapest model that clears it.
3. Run the task on that tier and score confidence.
4. If confidence is low or the case is flagged novel, escalate one tier and retry.
5. Log the tier, cost, and outcome for cost-per-outcome reporting.

#### Demo script
A simple task resolves on a local model; a hard one steps up automatically. **Wow moment:** the router spends frontier money only when it changes the answer.
