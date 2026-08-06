# Expense Reports: The Tax on Every Billable Hour.

A Built-in-the-Hive playbook: an agent that prepares and submits recurring compliance and expense filings with approvals, so routine filings stop taxing every billable hour. Built on Power Automate, Dataverse, and Purview.

Companion article: "Expense Reports: The Tax on Every Billable Hour." (Built in the Hive, HIVE-SP-059).

## Business value

Every firm runs a stream of recurring filings that no one enjoys and everyone must do: expense reports, routine compliance submissions, periodic regulatory returns, standard status filings. Each one is predictable, rule-bound, and repetitive, and each one quietly bills expensive professional time to do clerical work. The filing does not change month to month, but a person re-does it every month anyway. This pattern automates the recurring filing end to end: an agent gathers the inputs, prepares the filing to the firm's rules, validates it for completeness and policy, routes it for human approval, and submits it with a full trail. The repetition comes off the professional's desk, the controls stay intact, and the hours go back to billable work.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `recurring-filing-automation` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/recurring-filing-automation/`.

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
