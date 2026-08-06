# You Advise on Vendors You Never Actually Compared.

A Built-in-the-Hive playbook: an agent that gathers and normalizes proposals and quotes from every provider and ranks them against firm criteria. Built on Copilot Studio, Foundry, Dataverse, and Power BI.

Companion article: "You Advise on Vendors You Never Actually Compared." (Built in the Hive, HIVE-SP-045).

## Business value

When a firm recommends a vendor, a tool, or a provider, the recommendation is only as good as the comparison behind it, and the honest truth is that most comparisons are thin. Three quotes get gathered because gathering twenty is exhausting, the terms never get normalized to a common basis, and the "ranking" is really a preference with a rationale bolted on. This pattern uses an agent to do the part that was too tedious to do properly: gather proposals from every relevant provider, normalize their wildly different terms into one comparable basis, score them against the firm's own criteria, and produce a ranked shortlist where every score cites its evidence. A recommendation stops being an opinion and becomes a defensible comparison the client can challenge and trust.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `proposal-quote-comparator` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/proposal-quote-comparator/`.

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

**Medium.** See `recipe.yaml` for the drivers.

## License

Apache-2.0. See repository `LICENSE` and `NOTICE`.
