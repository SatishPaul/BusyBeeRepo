# Deployable Solution: Client Commitment and Theme Tracker

Paste this into GitHub Copilot as the implementation brief. Build a Microsoft Power Platform reference app that captures client calls, extracts commitments, tracks them to done, and surfaces recurring themes.

## Get the assets
Downloadable recipe (prompt, Cowork skill, and this solution spec) on GitHub: **github.com/SatishPaul/BusyBeeRepo** under `recipes/advisory/client-call-commitment-tracker/`. Licensed Apache-2.0.

## Instructions
Use publisher prefix `proserv_`. Ask before changing table or column names. Keep all assets in one unmanaged solution. Default `enablePrivateNetworking` to false.

## Repository tree
```
/power-platform
  tables/commitment.yaml
  tables/call.yaml
  tables/theme.yaml
  flows/call-capture.md
  flows/follow-up-nudge.md
  flows/relationship-dashboard.md
/copilot-studio
  agent-commitment-tracker.md
/docs
  demo-script.md
  definition-of-done.md
```

## Dataverse schema
Create `proserv_call`, `proserv_commitment`, `proserv_owner`, `proserv_theme`, and `proserv_account` with transcript reference, commitment text, owner, due date, source-call reference, status, theme, frequency, and recency columns.

## Copilot Studio agent config
Create a commitment-tracker agent that captures a call, extracts commitments with proposed owner and due date, and clusters themes across an account. It extracts and tracks only; it never messages a client on its own, and every commitment traces to its source call.

## Flows
1. Call capture flow ingests notes or transcript and triggers extraction.
2. Follow-up nudge flow reminds owners before due and escalates overdue items.
3. Relationship dashboard flow refreshes Power BI.

## Deployment order
1. Import the Power Platform solution.
2. Publish Dataverse tables.
3. Configure the Copilot Studio agent and call sources.
4. Import flows disabled, connect, then enable.
5. Run smoke tests including a missed-commitment escalation.

## Definition of done
- Every call produces review-ready commitments with owner and due date.
- Each commitment traces to its source call and is human-confirmed before any client contact.
- Overdue commitments are nudged and escalated automatically.
- Recurring themes are surfaced per account before the next meeting.
- Power BI shows follow-through rate and account themes over time.
