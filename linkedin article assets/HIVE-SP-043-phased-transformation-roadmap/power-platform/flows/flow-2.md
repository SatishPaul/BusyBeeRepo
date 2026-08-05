## 2 · Budget & Milestone Flow · Power Automate

#### Context
**Persona:** Delivery lead. **Problem:** costing each phase by hand is slow and inconsistent. **Success criteria:** a flow applies the firm's rates and role mix to produce a defensible budget and milestone per phase.

#### Data model
Use `proserv_phasebudget`, `proserv_phase`, and `proserv_rate`.

#### Components
Cloud flow, rate lookups, Foundry estimation support, and Dataverse writes.

#### Build steps
1. Trigger when phases are drafted.
2. Estimate role mix and hours per phase.
3. Apply firm rates to compute cost.
4. Attach a milestone and confidence range.
5. Update the roadmap budget.

#### Demo script
Each phase gains a costed budget and milestone automatically. **Wow moment:** a fundable roadmap assembles without a spreadsheet marathon.
