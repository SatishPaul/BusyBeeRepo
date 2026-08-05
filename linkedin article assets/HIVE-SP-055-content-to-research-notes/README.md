# Your Team Watches 10 Hours of Earnings Calls. The Insight Fits on One Page.

A Built-in-the-Hive playbook: turn earnings calls, webinars, and regulator briefings into structured research notes, so ten hours of listening becomes one page. Built on Foundry, Azure AI Search, and Power BI.

Companion article: "Your Team Watches 10 Hours of Earnings Calls. The Insight Fits on One Page." (Built in the Hive, HIVE-SP-055).

## Business value

The insight your team needs is often buried inside hours of long-form content: earnings calls, regulator briefings, webinars, analyst days. The signal is genuinely in there, but extracting it costs the one thing nobody has, which is hours of attentive listening. So teams either spend the time and cover a fraction of what they should, or skip it and miss the signal entirely. This pattern uses an agent to collapse the cost of listening: it ingests the long-form content, extracts what actually matters, structures it into research notes organized by theme and claim, cites every point back to its source, and delivers the one-page read a human would have produced after ten hours, in a fraction of the time. The insight without the listening.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `content-to-research-notes` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/content-to-research-notes/`.

## Step-by-step

1. Install the skill (see `install/how-to-install-a-skill.md`) or paste `prompt.md` into a Cowork task.
2. Answer the discovery questions, or point the recipe at the Dataverse tables in `power-platform/`.
3. To stand up the governed version, build `power-platform/solution.md` in your tenant.

## Expected output

A governed, review-ready result the professional signs off on, plus the durable Dataverse records and dashboards described in the solution. The agent cites its sources and never fabricates; where it can act, risky actions are gated behind approvals.

## Assets included

- `prompt.md` - runnable copy-paste prompt.
- `skill/` - installable Cowork skill (manifest + instructions).
- `power-platform/` - Dataverse tables, flows, and Copilot Studio build spec.
- `recipe.yaml` - metadata.

## Cost tier

**Low.** See `recipe.yaml` for the drivers.

## License

Apache-2.0. See repository `LICENSE` and `NOTICE`.
