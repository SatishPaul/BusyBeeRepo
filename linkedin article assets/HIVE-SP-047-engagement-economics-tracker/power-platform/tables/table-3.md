## 3 · Forecast File · Dynamics 365 Project Operations

#### Context
**Persona:** Practice leadership. **Problem:** forecasts built on stale actuals miss. **Success criteria:** a rolling forecast built on live actuals projects engagement margin to completion.

#### Data model
Create `proserv_forecast`, `proserv_engagementledger`, and `proserv_variance` tables with projected margin, confidence, drivers, and as-of columns.

#### Components
Project Operations closeout, a forecast-review app, Teams sign-off, and a Power BI forecast view.

#### Build steps
1. Create tables and relate forecast to the ledger and variance.
2. Project margin to completion from live actuals.
3. Attach confidence and key drivers.
4. Update the forecast as data flows.
5. Report projected versus plan.

#### Demo script
A forecast updates itself as the engagement runs. **Wow moment:** the projection reflects reality, not last quarter.
