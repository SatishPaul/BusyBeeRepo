## 3 · Theme Tracker · Dynamics 365 Customer Service

#### Context
**Persona:** Account lead. **Problem:** the recurring concerns a client raises across months are never connected, so priorities are missed. **Success criteria:** themes are aggregated across calls and shown as a running account view.

#### Data model
Create `proserv_theme`, `proserv_commitment`, and `proserv_account` tables with theme, frequency, first-seen, last-seen, and sentiment columns.

#### Components
Customer Service account queue, a theme-review app, Teams briefings, and a Power BI theme dashboard.

#### Build steps
1. Create tables and relate themes to commitments and accounts.
2. Cluster recurring topics across an account's calls.
3. Track frequency and recency per theme.
4. Surface rising themes before the next meeting.
5. Report themes by account and service line.

#### Demo script
Three months of calls reveal a client keeps circling one unspoken concern. **Wow moment:** the advisor raises it first, and looks prescient.
