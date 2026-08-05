## 2 · Variance Alert Flow · Power Automate

#### Context
**Persona:** Engagement manager. **Problem:** margin erosion is noticed too late. **Success criteria:** a flow alerts the right person when variance crosses a threshold.

#### Data model
Use `proserv_variance`, `proserv_leakflag`, and `proserv_engagementledger`.

#### Components
Cloud flow, threshold rules, Teams alerts, and Dataverse writes.

#### Build steps
1. Trigger when variance updates.
2. Compare against the engagement threshold.
3. Classify the leak by cause.
4. Alert the engagement manager.
5. Record the flag and response.

#### Demo script
A margin leak pings the manager the week it starts. **Wow moment:** the alert arrives while the fix is still possible.
