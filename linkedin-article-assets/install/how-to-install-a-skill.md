# How to install a BusyBee skill

A BusyBee skill is a folder of instructions that makes an AI agent (Microsoft 365 Copilot / Copilot Cowork) self-invoke on the right phrases and follow a governed pattern.

## Option A: drop it in your Cowork skills folder

1. Download the recipe's `skill/` folder.
2. Copy it into your OneDrive at `Documents/Cowork/skills/<skill-name>/` so the folder lands at, for example, `Documents/Cowork/skills/regulatory-morning-brief/`.
3. Start a new Cowork task. Cowork discovers the skill automatically at the start of each conversation, there is no registration step.
4. Describe what you want, or paste the recipe's `prompt.md`. The skill's description makes it self-invoking on the relevant phrases.

## Option B: publish it as a Cowork plugin

1. In Cowork, go to **+ > Customize**.
2. Publish the `skill/` contents as a plugin and turn it on.
3. Start a task; the plugin is available immediately.

## Notes

- Skills in this cookbook **plan and draft**. Where a skill can take an action (write-back), it says so explicitly and applies approval guardrails.
- No skill fabricates data. If it cannot confirm a fact or a source, it says so.
- Skills are plugin-aware: they name the correct Microsoft data plugin in the prompts they generate rather than assuming one.
