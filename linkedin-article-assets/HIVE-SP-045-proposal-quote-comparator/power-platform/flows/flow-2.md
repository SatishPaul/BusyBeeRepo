## 2 · Normalization Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Knowledge engineer. **Problem:** proposals use incompatible units and cannot be compared. **Success criteria:** a flow reduces every proposal to one comparable basis with evidence.

#### Data model
Use `proserv_normalizedterm`, `proserv_term`, and `proserv_criterion`.

#### Components
Cloud flow, Foundry normalization, and Dataverse writes.

#### Build steps
1. Trigger when a proposal is captured.
2. Map its terms to the common basis.
3. Record the normalized value and its source term.
4. Flag terms that cannot be normalized.
5. Hand off to scoring.

#### Demo script
Incompatible pricing models resolve to one comparable basis. **Wow moment:** the comparison finally becomes fair.
