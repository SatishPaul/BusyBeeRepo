## 2 · Structuring & Coding Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Time-capture engineer. **Problem:** raw notes are not billable entries. **Success criteria:** a flow structures each note into a coded, billable-ready entry.

#### Data model
Use `proserv_timeentry`, `proserv_matter`, and `proserv_billingrule`.

#### Components
Cloud flow, Foundry structuring, matter lookup, and Dataverse writes.

#### Build steps
1. Trigger on a captured activity.
2. Structure duration and task detail.
3. Apply the matter and client code.
4. Validate against billing rules.
5. Flag anything it cannot substantiate.

#### Demo script
A raw note becomes a coded, validated time entry. **Wow moment:** the entry is billing-ready without a keyboard.
