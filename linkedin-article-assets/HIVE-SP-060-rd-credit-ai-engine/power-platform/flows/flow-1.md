## 1 · Activity Discovery Flow · Power Automate

#### Context
**Persona:** AI platform engineer. **Problem:** qualifying activity is buried across code, tickets, and project tools and never surfaced. **Success criteria:** a flow scans those systems and writes candidate qualifying activities to Dataverse for review.

#### Data model
Use `proserv_rdactivity`, `proserv_evidence`, and `proserv_costsource`.

#### Components
Cloud flow, connectors to repos and project tools, Foundry classification, and Dataverse writes.

#### Build steps
1. Trigger on a schedule or a tax-year close.
2. Pull activity signals from code, tickets, and project systems.
3. Classify each as a candidate qualifying activity.
4. Write candidates with source links for review.
5. Hand off to the qualification step.

#### Demo script
A quarter of engineering work surfaces as a reviewable list of candidate R&D activities. **Wow moment:** discovery that took weeks runs on a schedule.
