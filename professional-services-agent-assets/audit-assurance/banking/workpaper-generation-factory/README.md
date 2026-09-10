# From Retyping Numbers to Judging Exceptions

**Workpaper Generation Factory**

**Practice:** Audit & Assurance · **Sub-domain:** Workpaper Preparation & Documentation · **Industry overlay:** Banking · **Classification:** Orchestrate · **Format:** Built-in-the-Hive deployable solution pack

This is not an explainer. It is a **deployable pack**: a working Dataverse solution, copy-paste prompts for Copilot / Cowork / Scout / Copilot Studio, synthetic sample data, real execution evidence, an ROI model, and a deployment guide. Import it into your own tenant and run it today.

## What it does

Every audit runs on workpapers: lead schedules that group the trial balance into financial-statement captions, tie-outs that trace each balance to source evidence, testing steps that document the procedures, and disclosure drafts that turn the numbers into notes. Preparing them is slow, stateful, and mostly retyping. A staff member exports the trial balance, builds lead sheets by hand, ties each figure to a loan tape or custodian statement, and drafts the notes, then a senior reviews all of it. This pack replaces that grind with **Copilot Cowork assembling the source file** and a **master orchestrator plus six specialist agents** that draft every section of the workpaper, tie each number to its source, run the testing steps, draft the disclosures, and write plain-English review notes to Dataverse. A human judges only the flagged sections.

In the bundled Banking scenario (Rivermark Bank, FY26 audit), Cowork assembled the source package and the agents drafted an **18-section workpaper file and auto-flagged 3 sections for review**: an allowance-for-loan-losses coverage ratio that drifted outside the expected band, an available-for-sale investment whose workpaper fair value did not tie to the custodian statement, and a required related-party loan disclosure that was missing.

## The classification: Orchestrate

Under the agent-first necessity test, this is an **Orchestrate** process. Cowork assembles the inputs, then multiple specialist agents coordinate the full workpaper file end to end, each writing a versioned section, and the process stops only for the flagged sections and the human approval gate. It is not a person retyping numbers into a template; it is a coordinated set of agents that draft the file and surface only what needs judgment.

## The headline numbers (sample assumptions)

- **180 minutes to 25 minutes** per workpaper file
- **5 handoffs removed** between people
- **3 of 18** sections auto-flagged for review
- **~$2.40** compute cost per run

Figures are illustrative sample assumptions until measured in your environment.

## Agent-heavy by design

This pack is deliberately weighted toward agents, not app screens. The value is the master orchestrator and its six specialists, plus the Copilot Cowork assembler and the Microsoft 365 Copilot narrator, all coordinating over shared Dataverse state. The model-driven app is a thin review surface on top; the work is done by more agents than app components. See the Architecture tab.

## What is in the pack

Prompt Pack (10 prompts), the importable Dataverse solution + schema, sample data with seeded anomalies, real screenshots from a live build, an ROI model, and a deployment guide. See the tabs.


---

Apache-2.0. Sample data only; figures illustrative until measured. Microsoft Scout is a preview product.
