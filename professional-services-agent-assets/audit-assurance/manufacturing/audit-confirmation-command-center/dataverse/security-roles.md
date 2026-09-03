# Security Roles

Least privilege, read-only defaults.
- **PSAC Agent** (application user): create/read/write only on the tables its role owns; no delete; org-scoped read on Client/Engagement it is dispatched to.
- **PSAC Reviewer**: read all PSAC tables; write on psac_decision and psac_approval; no delete.
- **PSAC Admin**: full control within the solution only.
Consequential actions (post a finding, send a second request, sign off a cycle) require a psac_approval row before execution.
