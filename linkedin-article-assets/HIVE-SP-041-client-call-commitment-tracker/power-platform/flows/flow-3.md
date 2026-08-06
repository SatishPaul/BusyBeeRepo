## 3 · Relationship Dashboard · Power BI

#### Context
**Persona:** Account leadership. **Problem:** leadership cannot see follow-through health or the themes shaping a client relationship. **Success criteria:** a dashboard shows commitment follow-through and the recurring themes per account.

#### Data model
Use `proserv_commitment`, `proserv_theme`, and `proserv_account`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by account.

#### Build steps
1. Model commitments, themes, and accounts.
2. Show follow-through rate and overdue items by account.
3. Surface the top themes per client over time.
4. Trend prep-time saved and retention signals.
5. Flag accounts with slipping follow-through.

#### Demo script
The board sees which accounts are followed up flawlessly and which client themes are rising. **Wow moment:** relationship health becomes a number, not a feeling.
