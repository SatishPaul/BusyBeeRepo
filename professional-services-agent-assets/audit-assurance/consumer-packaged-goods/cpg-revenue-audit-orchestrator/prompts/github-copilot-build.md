# GitHub Copilot build prompt (stand up the solution)

```
Build a Power Platform solution named psacRevenueAuditOrchestrator with publisher prefix psac.
Create these Dataverse tables with the columns in dataverse/schema.md:
Client, Engagement, Customer, Revenue Screen, Transaction, Finding, Decision, Approval, Agent Run, ROI Measure.
Wire the 11 lookup relationships described in the schema. Then generate a model-driven app with a Revenue Screen main form
showing related Transactions, Findings, Agent Runs, and the Approval, plus views filtered to Severity = High.
Use only unmanaged components in one solution. Ask before renaming any table or column.
```
