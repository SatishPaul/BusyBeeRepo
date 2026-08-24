# US Direct Tax Provision Exception Monitor

**Practice:** Tax · **Sub-domain:** US Direct Tax · **Industry overlay:** Financial Services · **Classification:** Autopilot · **Format:** Built-in-the-Hive deployable solution pack

This is not an explainer. It is a **deployable pack**: a working Dataverse solution, copy-paste prompts for Copilot / Cowork / Scout / Copilot Studio, synthetic sample data, real execution evidence, an ROI model, and a deployment guide. Import it into your own tenant and run it today.

## What it does

Every quarter, a tax team ties out the ASC 740 income-tax provision by hand: pulling the trial balance, recomputing book-tax differences, rolling deferred taxes, and reconciling the effective rate. It is slow, repetitive, and the same shape every close. This pack replaces the manual screen with a **master orchestrator and five specialist agents** that read the current and prior provision, flag every line that moves outside its expected band, and write plain-English findings to Dataverse. A human judges only the exceptions.

In the bundled Financial-Services scenario (Northwind Capital Group, FY26 Q3), the agents screened **12 provision line items and auto-flagged 3 anomalies**: a deferred-depreciation sign flip, a Section 174 capitalization spike, and a state blended-rate jump.

## The classification: Autopilot

Under the agent-first necessity test, this is an **Autopilot** process. It runs on every close, screens the full provision continuously, and stops only for exceptions or approvals. The professional's time moves from tie-out to judgment.

## The headline numbers (sample assumptions)

- **240 minutes to 25 minutes** per provision screen
- **6 handoffs removed** between people
- **3 of 12** line items auto-flagged as exceptions
- **~$2.14** compute cost per run

Figures are illustrative sample assumptions until measured in your environment.

## What is in the pack

Prompt Pack (10 prompts), the importable Dataverse solution + schema, sample data with seeded anomalies, real screenshots from a live build, an ROI model, and a deployment guide. See the tabs.


---

Apache-2.0. Sample data only; figures illustrative until measured. Microsoft Scout is a preview product.
