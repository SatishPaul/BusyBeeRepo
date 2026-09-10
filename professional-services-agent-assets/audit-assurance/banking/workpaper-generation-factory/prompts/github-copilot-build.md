# GitHub Copilot build prompt (stand up the solution)

```
Build a Power Platform solution named pswpWorkpaperFactory with publisher prefix pswp.
Create these Dataverse tables with the columns in dataverse/schema.md:
Client, Engagement, Workpaper, Section, Source Doc, Finding, Decision, Approval, Agent Run, ROI Measure.
Wire the 11 lookup relationships described in the schema. Then generate a model-driven app with a Workpaper main form
showing related Sections, Source Docs, Findings, Agent Runs, and the Approval, plus views filtered to Flag Status = Flagged.
Use only unmanaged components in one solution. Ask before renaming any table or column.
```
