# The Compliance Breach in the Quarterly Review Started in Week Two.

A Built-in-the-Hive playbook: an always-on monitoring agent-skill that flags control exceptions and anomalies as they happen, not at quarter-end. Built on Power Automate, Purview, Sentinel, and Fabric.

Companion article: "The Compliance Breach in the Quarterly Review Started in Week Two." (Built in the Hive, HIVE-SP-054).

## Business value

Most control failures are discovered long after they begin. A quarterly review finds an exception that started in week two, by which point a small deviation has compounded into a real problem. The gap is not that the control does not exist; it is that it is only checked periodically, so the window between a control breaking and anyone noticing is measured in weeks or months. This pattern replaces the periodic checklist with an always-on monitoring agent-skill: it watches the relevant signals continuously, tests the controls as events happen, detects exceptions and drift, and flags them the moment they occur, routed to a human owner to confirm. The breach that used to surface at quarter-end surfaces the week it starts, while it is still small and fixable.

## What it does

See the companion article for the full narrative. In short, this recipe delivers the workflow as a governed, installable pattern on the Microsoft stack, with a copy-paste prompt, an optional Copilot Cowork skill, and a Power Platform solution spec.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and, where the recipe uses scheduled or grounding services, an Azure subscription.
- Optional: install the `control-monitor` skill, publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/control-monitor/`.

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
