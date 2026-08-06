## 1 · Model Gateway Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** AI platform engineer. **Problem:** apps call one model directly, hard-wiring the firm to it. **Success criteria:** a flow provides one standardized access point in front of many models.

#### Data model
Use `proserv_model`, `proserv_routingpolicy`, and `proserv_modelcall`.

#### Components
Cloud flow, a gateway endpoint, Foundry connections, and Dataverse writes.

#### Build steps
1. Trigger on an application request.
2. Authenticate and apply rate limits.
3. Look up the routing policy.
4. Forward to the chosen model with failover.
5. Log the call for observability.

#### Demo script
An app calls one gateway and the right model answers behind it. **Wow moment:** swapping models never touches the app.
