# GitHub Copilot build prompt (stand up the solution)

```
Build a Power Platform solution named psacProvisionExceptionMonitor with publisher prefix psac.
Create these Dataverse tables with the columns in dataverse/schema.md:
Client, Engagement, Legal Entity, Provision Run, Line Item, Finding, Decision, Approval, Agent Run, ROI Measure.
Wire the 11 lookup relationships described in the schema. Then generate a model-driven app with a Provision Run main form
showing related Line Items, Findings, Agent Runs, and the Approval, plus views filtered to Severity = High.
Use only unmanaged components in one solution. Ask before renaming any table or column.
```
