## 2 · Evidence Assembly Flow · Power Automate

#### Context
**Persona:** R&D credit lead. **Problem:** assembling contemporaneous evidence by hand is slow and lossy. **Success criteria:** a flow gathers supporting evidence for each qualifying activity from existing systems and flags gaps.

#### Data model
Use `proserv_rdactivity`, `proserv_evidence`, and `proserv_fourparttest`.

#### Components
Cloud flow, document and repo lookups, Dataverse writes, and Teams gap requests.

#### Build steps
1. Trigger when an activity is qualified.
2. Search connected systems for supporting artifacts.
3. Link commits, tickets, design docs, and test results.
4. Cite each item and flag any missing evidence.
5. Update the activity's documentation status.

#### Demo script
A qualifying activity auto-links its commits and test logs, and flags a missing design doc. **Wow moment:** the evidence pack builds itself, gaps and all.
