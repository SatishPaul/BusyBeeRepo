# Every New Hire Relearns What the Firm Already Knows.

A Built-in-the-Hive playbook: turn engagement history and reviews into a governed knowledge base that ramps new hires fast, so nobody relearns what the firm already knows. Built on Copilot, Azure AI Search, and Dataverse.

Companion article: "Every New Hire Relearns What the Firm Already Knows." (Built in the Hive, HIVE-SP-052).

## Business value

A firm's most valuable asset is what it has learned, and its most wasteful habit is making every new hire learn it again from scratch. The hard-won lessons, the client quirks, the approach that worked the third time after failing twice, all of it lives in old engagement files, review notes, and the memories of people who are too busy to be interrupted. So new staff spend months rediscovering things the firm already knew, and sometimes the firm repeats a mistake it had already paid to learn. This pattern turns that scattered history into a governed, answerable knowledge base: it gathers the engagement record, structures the lessons, indexes them for retrieval, and answers a new hire's questions with grounded, cited answers, all under access governance. Institutional memory becomes something a person can actually reach.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `onboarding-knowledge-base` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/onboarding-knowledge-base/`.

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
