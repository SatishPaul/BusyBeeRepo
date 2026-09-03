# GitHub Copilot build prompt (stand up the solution)

```
Build a Power Platform solution named psacConfirmationCommandCenter with publisher prefix psac.
Create these Dataverse tables with the columns in dataverse/schema.md:
Client, Engagement, Confirming Party, Confirmation Cycle, Confirmation, Finding, Decision, Approval, Agent Run, ROI Measure.
Wire the 11 lookup relationships described in the schema. Then generate a model-driven app with a Confirmation Cycle main form
showing related Confirmations, Findings, Agent Runs, and the Approval, plus views filtered to Severity = High.
Use only unmanaged components in one solution. Ask before renaming any table or column.
```
