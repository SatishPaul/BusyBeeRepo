## 1 · Proposal Gathering Flow · Power Automate

#### Context
**Persona:** Advisory operations. **Problem:** collecting proposals from many providers is manual and slow, so coverage stays narrow. **Success criteria:** a flow requests, ingests, and structures proposals from every provider on the list.

#### Data model
Use `proserv_proposal`, `proserv_provider`, and `proserv_term`.

#### Components
Cloud flow, email and portal intake, Foundry extraction, and Dataverse writes.

#### Build steps
1. Trigger from a provider list.
2. Request or ingest each provider's proposal.
3. Extract terms and pricing basis.
4. Write structured proposal records.
5. Flag non-responders and gaps.

#### Demo script
A list of twenty providers becomes twenty structured proposals. **Wow moment:** full coverage without the manual chase.
