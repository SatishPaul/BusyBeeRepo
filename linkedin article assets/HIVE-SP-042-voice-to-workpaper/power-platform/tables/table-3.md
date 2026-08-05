## 3 · Workpaper Filing · Dynamics 365 Field Service

#### Context
**Persona:** Engagement lead. **Problem:** structured findings still need to land in the governed file with evidence and audit trail. **Success criteria:** each finding is filed as a workpaper task, evidence-linked and fully logged.

#### Data model
Create `proserv_finding`, `proserv_workpaper`, and `proserv_evidence` tables with finding, workpaper reference, evidence link, owner, and audit-log columns.

#### Components
Field Service closeout, a filing app, Teams notifications, and a Power BI file-completeness view.

#### Build steps
1. Create tables and relate findings to workpapers and evidence.
2. File each confirmed finding as a workpaper task.
3. Link evidence or flag the gap.
4. Record a full audit trail per entry.
5. Report file completeness by engagement.

#### Demo script
A confirmed finding files itself into the workpaper with evidence attached. **Wow moment:** the file reflects what the team saw, not what they remembered.
