## 1 · Batch Generation Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Automation engineer. **Problem:** variants are produced one at a time by hand. **Success criteria:** a flow generates the full variant set from the master and spec.

#### Data model
Use `proserv_master`, `proserv_variantspec`, and `proserv_variant`.

#### Components
Cloud flow, Foundry generation, the master template, and Dataverse writes.

#### Build steps
1. Trigger on an approved master and spec.
2. Enumerate the variant set.
3. Generate each variant from the master.
4. Apply the variation values.
5. Hand off to verification.

#### Demo script
One master fans out into a hundred generated variants. **Wow moment:** the set is produced in minutes, not weeks.
