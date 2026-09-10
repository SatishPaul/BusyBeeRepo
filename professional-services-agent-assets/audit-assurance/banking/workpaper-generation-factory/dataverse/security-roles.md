# Security Roles

Least privilege, read-only defaults.
- **PSWP Agent** (application user): create/read/write only on the tables its role owns; no delete; org-scoped read on Client/Engagement it is dispatched to.
- **PSWP Reviewer**: read all PSWP tables; write on pswp_decision and pswp_approval; no delete.
- **PSWP Admin**: full control within the solution only.
Consequential actions (release a section, sign a workpaper) require a pswp_approval row before execution.
