## 2 · Follow-up Nudge Flow · Power Automate

#### Context
**Persona:** Relationship lead. **Problem:** commitments slip because nobody is reminded before the due date. **Success criteria:** a flow nudges owners ahead of due dates and escalates overdue items.

#### Data model
Use `proserv_commitment`, `proserv_owner`, and `proserv_account`.

#### Components
Scheduled cloud flow, Dataverse queries, Teams reminders, and escalation routing.

#### Build steps
1. Run on a daily schedule.
2. Find commitments approaching their due date.
3. Nudge the owner with context and the source call.
4. Escalate items that pass due without action.
5. Update follow-through metrics.

#### Demo script
A commitment due tomorrow triggers a friendly nudge with the exact promise made. **Wow moment:** follow-through happens on time, not heroically.
