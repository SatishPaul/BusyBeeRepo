## 2 · Variance & Leak Model · Dynamics 365 + Foundry

#### Context
**Persona:** Practice finance lead. **Problem:** margin erosion is invisible until it is a write-off. **Success criteria:** overruns, unbilled scope, and off-plan staffing are flagged early with a cause.

#### Data model
Create `proserv_variance`, `proserv_engagementledger`, and `proserv_leakflag` tables with variance type, magnitude, cause, threshold, and status columns.

#### Components
Foundry analysis, a variance-review app, Teams routing, and a Power BI leak view.

#### Build steps
1. Create tables and relate variance to the ledger.
2. Compare actuals to plan continuously.
3. Classify each variance by cause.
4. Flag leaks above threshold early.
5. Report leaks caught and their value.

#### Demo script
An overrun is flagged in week three with its cause. **Wow moment:** the leak is caught while it can still be closed.
