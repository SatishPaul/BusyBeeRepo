## 3 · Morning Brief Composer · Dynamics 365 Customer Service

#### Context
**Persona:** Practice operations lead. **Problem:** even good research does not reach people in a usable form at the right time. **Success criteria:** a ranked, cited brief is composed and delivered before the first standup, with a link to every source.

#### Data model
Create `proserv_brief`, `proserv_briefitem`, and `proserv_delivery` tables with brief date, item, rank, citation, recipient, and open-status columns.

#### Components
Customer Service delivery queue, a brief-preview app, Teams and email delivery, and a Power BI readership view.

#### Build steps
1. Create tables and relate briefs to ranked items and deliveries.
2. Compose a daily brief from the top-scored changes.
3. Attach a citation to every item, or mark it unconfirmed.
4. Deliver to the right recipients before standup.
5. Report open rate and action follow-through.

#### Demo script
At 7 AM a five-item brief arrives, each item cited, ranked, and tied to a client. **Wow moment:** the day starts with a decision list, not a reading list.
