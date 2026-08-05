## 1 · Findings-to-Phases Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** AI platform engineer. **Problem:** turning findings into candidate phases is manual and slow. **Success criteria:** a flow reads the findings and drafts sequenced candidate phases grounded in the firm's methodology.

#### Data model
Use `proserv_roadmap`, `proserv_phase`, and `proserv_dependency`.

#### Components
Cloud flow, Foundry structuring, methodology grounding in Azure AI Search, and Dataverse writes.

#### Build steps
1. Trigger when a findings set is submitted.
2. Ground against the firm's delivery methodology.
3. Draft candidate phases with sequence and rationale.
4. Write phases for partner review.
5. Hand off to budgeting.

#### Demo script
A findings document becomes a draft set of sequenced phases. **Wow moment:** the blank-page phase of roadmapping disappears.
