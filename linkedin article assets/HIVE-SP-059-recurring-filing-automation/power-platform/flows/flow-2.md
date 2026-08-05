## 2 · Prepare & Validate Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Compliance engineer. **Problem:** filings are drafted and checked manually. **Success criteria:** a flow prepares the filing and validates it against policy before approval.

#### Data model
Use `proserv_preparedfiling`, `proserv_filing`, and `proserv_validation`.

#### Components
Cloud flow, Foundry preparation, rule checks, and Dataverse writes.

#### Build steps
1. Trigger when inputs are gathered.
2. Draft the filing to the rules.
3. Validate completeness and policy.
4. Flag exceptions for a human.
5. Route the clean filing to approval.

#### Demo script
A filing is prepared and validated automatically. **Wow moment:** the approver reviews, not prepares.
