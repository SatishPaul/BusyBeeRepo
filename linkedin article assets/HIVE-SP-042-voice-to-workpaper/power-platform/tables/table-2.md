## 2 · Observation Structurer · Dynamics 365 Field Service

#### Context
**Persona:** Audit methodology lead. **Problem:** raw voice notes are not usable findings. **Success criteria:** each note is structured into area, risk, evidence needed, and follow-up, ready for review.

#### Data model
Create `proserv_observation`, `proserv_finding`, and `proserv_auditarea` tables with raw note, structured finding, area, risk, and evidence-needed columns.

#### Components
Field Service intake, a structuring-review app, Teams approval, and a Power BI quality view.

#### Build steps
1. Create tables and relate raw notes to structured findings.
2. Structure each note into a finding with area and risk.
3. Identify the evidence the finding requires.
4. Route the finding for auditor confirmation.
5. Report structuring accuracy over time.

#### Demo script
A rambling voice note becomes a crisp finding with a risk rating. **Wow moment:** talk becomes a workpaper entry without retyping.
