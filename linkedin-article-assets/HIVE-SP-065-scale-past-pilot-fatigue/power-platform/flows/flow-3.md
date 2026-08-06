## 3 · Pilot-to-Production Promotion · Power Automate + Power BI

#### Context
**Persona:** Delivery lead. **Problem:** new AI is bolted onto an unchanged workflow, so it never sticks and the pilot reverts (move 7). **Success criteria:** a proven pilot is promoted through a governed path that changes the process and the tool together, with adoption tracked after launch.

#### Data model
Use `proserv_pilot`, `proserv_signoff`, `proserv_metric`, and a `proserv_adoption` table with production date, embedded location, active users, weekly runs, and reversion signals.

#### Components
A promotion flow gated on metric and sign-off, an embed step that places the new action inside the team's existing tool, and a Power BI adoption and reversion dashboard.

#### Build steps
1. Trigger promotion only when the target metric is met and sign-off is complete.
2. Update the process document and embed the new step where the work already happens.
3. Switch the workflow's system of record to the production path.
4. Track active users, weekly runs, and any slide back to the manual way.
5. Alert the owner if adoption stalls, so the process change is reinforced, not abandoned.

#### Demo script
A pilot is promoted only when the number moves and someone owns it, and the new step lands inside the daily tool. **Wow moment:** one workflow reaches production and stays there.
