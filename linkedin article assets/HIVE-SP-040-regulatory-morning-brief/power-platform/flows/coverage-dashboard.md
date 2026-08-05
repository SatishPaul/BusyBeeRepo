## 3 · Coverage Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leadership cannot prove that every relevant change was caught and handled. **Success criteria:** a dashboard shows changes captured, clients assessed, actions closed, and the gap to full coverage over time.

#### Data model
Use `proserv_regchange`, `proserv_clientimpact`, and `proserv_delivery`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by client and jurisdiction.

#### Build steps
1. Model changes, client impacts, and actions.
2. Show coverage: captured versus assessed versus actioned.
3. Trend reading hours saved and time-to-client.
4. Drill into any client's regulatory exposure.
5. Flag changes with open actions past due.

#### Demo script
The board sees a quarter where every relevant change was caught, scored, and closed. **Wow moment:** staying current becomes a control leadership can read, not a hope.
