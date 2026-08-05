# The Duplicate Charge Hiding in 400 Vendor Invoices.

A Built-in-the-Hive playbook: an agent that reads AP invoices and emails, maintains a ledger, and flags duplicate charges and price creep. Built on Power Automate, Dataverse, and Fabric.

Companion article: "The Duplicate Charge Hiding in 400 Vendor Invoices." (Built in the Hive, HIVE-SP-048).

## Business value

Accounts payable leaks money not through one dramatic error but through hundreds of small ones nobody has time to check. A vendor bills twice for the same service. A price quietly creeps up 4 percent a quarter with no renegotiation. A charge lands that no purchase order ever authorized. Across 400 invoices a month, a human reviewer spot-checks a handful and waves the rest through, because reading all of them is impossible. An agent has no such limit. This pattern puts an agent in charge of reading every AP invoice and email, maintaining a living ledger, matching each line against history, and flagging duplicates, price creep, and unauthorized charges as governed exceptions a human confirms. The leak that hid in the volume becomes a short list of flagged items.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `invoice-duplicate-auditor` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/invoice-duplicate-auditor/`.

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
