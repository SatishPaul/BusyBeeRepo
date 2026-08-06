# Your Best Methodology Lives in One Partner's Head. Make It a Skill.

A Built-in-the-Hive playbook: turn the firm methodology living in one partner's head into a reusable, testable skill new staff can run. Built on Copilot Studio, Foundry, and Dataverse.

Companion article: "Your Best Methodology Lives in One Partner's Head. Make It a Skill." (Built in the Hive, HIVE-SP-049).

## Business value

Every firm has a partner whose way of doing a particular thing is simply better, and whose method exists nowhere but in their head. It is the firm's real intellectual property, and it is also its largest single point of failure: when that person is busy, the quality dips, and when they leave, the capability walks out the door. This pattern turns that tacit expertise into a governed, testable skill. It captures the method through interviews and source material, structures the repeatable pattern into an explicit spec, builds it into an installable agent-skill, tests it against known cases, and deploys it so any qualified staffer can run it under supervision. The knowledge stops being a bottleneck and a risk, and becomes a durable, scalable asset the whole team can use.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `methodology-to-skill` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/methodology-to-skill/`.

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
