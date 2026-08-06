## 1 · Filing Register · Dynamics 365 Finance

#### Context
**Persona:** Firm operations lead. **Problem:** recurring filings are prepared by hand every cycle. **Success criteria:** each recurring filing is a record with its schedule, inputs, rules, and status.

#### Data model
Create `proserv_filing`, `proserv_filinginput`, and `proserv_filingrule` tables with filing type, schedule, input source, rule set, and status columns.

#### Components
Finance filing context, a filing-review app, Teams approval routing, and a Power BI filing view.

#### Build steps
1. Create tables and relate filings to inputs and rules.
2. Register each recurring filing and its schedule.
3. Define its inputs and rules.
4. Track preparation and submission status.
5. Report filings due and filed.

#### Demo script
Recurring filings become scheduled, defined records. **Wow moment:** the filing calendar runs itself.
