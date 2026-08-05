## 3 · Coherence File · Dynamics 365 Project Operations

#### Context
**Persona:** Program manager. **Problem:** no one can see where an engagement is relitigating or drifting. **Success criteria:** a record tracks reopened decisions, context transfer, and coherence over the engagement.

#### Data model
Create `proserv_coherence`, `proserv_decision`, and `proserv_recall` tables with reopened count, recall rate, drift flag, and period columns.

#### Components
Project Operations context, a coherence-review app, Teams review, and a Power BI coherence view.

#### Build steps
1. Create tables and relate coherence to decisions and recalls.
2. Track how often decisions are reopened.
3. Measure context recall usage.
4. Flag drift from settled decisions.
5. Report engagement coherence over time.

#### Demo script
Leadership sees relitigation fall as memory is used. **Wow moment:** coherence becomes a visible, improving metric.
