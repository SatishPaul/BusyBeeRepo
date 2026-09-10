# Copilot Studio agent definitions

- **Workpaper Factory Master Orchestrator** (role: master): scopes to client and engagement, dispatches the six specialists in order, validates each versioned record, opens the approval gate. Grounded on the PSWP tables.
- **Intake Agent**, **Lead Sheet Agent**, **Tie-Out Agent**, **Testing Agent**, **Disclosure Agent**, **Review Notes Agent** (role: child): each bounded to its task and its assigned PSWP tables, least privilege, confidence threshold enforced.

See prompts/scout-master.md, prompts/scout-child-tieout.md, and prompts/copilot-studio.md.
