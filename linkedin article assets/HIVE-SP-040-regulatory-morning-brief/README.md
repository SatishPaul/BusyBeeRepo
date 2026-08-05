# Regulatory Morning Brief

A scheduled research agent that scans regulatory sources overnight, scores each item against your client list, and delivers a ranked, cited morning brief plus a coverage dashboard, so your best people start the day advising instead of reading.

Companion article: "Your Best People Spend Monday Reading. An Agent Could Hand Them the Answer." (Built in the Hive, HIVE-SP-040).

## Business value

Regulatory monitoring is necessary, unbillable, and does not scale. This recipe moves the Monday-morning read off the billable clock: an agent runs the sweep overnight, grounds and dedupes each item, scores it against every open engagement, and hands over a short, cited brief before the first standup. The reading still happens, your people just start with the answer.

## What it does

- Scans the sources your practice trusts on an overnight schedule.
- Grounds each item against your own authority base (turns a headline into a specific provision) and drops duplicates.
- Scores each item against your real client list, answering "which engagements does this touch, and how much," not just "is this new."
- Delivers a ranked brief, each item carrying a one-line "why this matters for this client" and a link to the controlling source.
- Maintains a coverage dashboard: what changed, which clients are affected, what has been actioned.

It cites everything and fabricates nothing. If it cannot confirm a source, it says so.

## Prerequisites

- Microsoft 365 Copilot / Copilot Cowork access.
- A Power Platform environment (Dataverse) and Azure subscription for the scheduled and grounding services.
- Optional: install the `regulatory-morning-brief` skill, either publish it as a Cowork plugin (**+ > Customize**) or drop the `skill/` folder at `Documents/Cowork/skills/regulatory-morning-brief/`.

## Step-by-step

1. Install the skill (see `install/how-to-install-a-skill.md`) or just paste `prompt.md` into a Cowork task.
2. Provide your sources, your authority base location, and your client/engagement list (or point at the Dataverse tables from `power-platform/`).
3. Let the agent run its discovery, then confirm the schedule and delivery target.
4. To stand up the full governed version, build the Power Platform solution from `power-platform/solution.md`.

## Expected output

A ranked, cited morning brief delivered before standup, and a running coverage dashboard. Each brief item names the affected client, the reason it matters, and a link to the controlling authority, or is clearly marked unconfirmed.

## Assets included

- `prompt.md` — runnable copy-paste prompt.
- `skill/` — installable Cowork skill (manifest + instructions).
- `power-platform/solution.md` — full Dataverse + flows + Copilot Studio build spec.
- `recipe.yaml` — metadata.

## Cost tier

**Medium.** Drivers: scheduled overnight runs across multiple sources, per-client scoring, and a Power BI dashboard deliverable. To move it down a tier, narrow the source list or reduce scan frequency.

## License

Apache-2.0. See repository `LICENSE` and `NOTICE`.
