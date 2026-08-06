## 2 · Evidence Link Flow · Power Automate

#### Context
**Persona:** Engagement lead. **Problem:** findings without linked evidence are weak at review. **Success criteria:** a flow attaches or requests the evidence each finding needs and flags gaps.

#### Data model
Use `proserv_finding`, `proserv_evidence`, and `proserv_workpaper`.

#### Components
Cloud flow, document store lookups, Dataverse writes, and Teams requests.

#### Build steps
1. Trigger when a finding is confirmed.
2. Search the document store for matching evidence.
3. Link found evidence to the finding.
4. Request missing evidence from the owner and flag the gap.
5. Update file-completeness metrics.

#### Demo script
A finding auto-links its supporting document, or flags that none exists. **Wow moment:** no evidence is ever silently assumed.
