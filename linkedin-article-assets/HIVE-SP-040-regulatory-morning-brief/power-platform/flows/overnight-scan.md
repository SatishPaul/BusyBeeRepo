## 1 · Overnight Scan Flow · Power Automate

#### Context
**Persona:** AI platform engineer. **Problem:** regulatory sources are checked by hand, late and inconsistently. **Success criteria:** a scheduled flow sweeps the sources every night, grounds and dedupes items, and writes them to Dataverse before anyone logs in.

#### Data model
Use `proserv_regchange`, `proserv_authority`, and `proserv_source`.

#### Components
Scheduled cloud flow, connectors or HTTP to the sources, Azure AI Search grounding, and Dataverse writes.

#### Build steps
1. Trigger on an overnight schedule.
2. Pull new items from each configured source.
3. Ground each item against the firm authority index and drop duplicates.
4. Write new change records to Dataverse with source URLs.
5. Hand off to the scoring flow.

#### Demo script
At 2 AM the flow runs, and by morning the register holds the night's changes, grounded and deduped. **Wow moment:** the reading happened while the office slept.
