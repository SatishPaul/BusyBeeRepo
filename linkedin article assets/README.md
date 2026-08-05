# LinkedIn Article Assets

Reusable, governed assets that ship with each "Built in the Hive" LinkedIn article. Every article gets its own folder here, named by its HIVE code and slug. Each folder is a self-contained recipe: a copy-paste prompt, an installable Copilot Cowork skill, a Power Platform solution spec, screenshots, and a recipe card.

## Recipes

| Article | HIVE code | Folder |
|---|---|---|
| Regulatory Morning Brief | HIVE-SP-040 | [HIVE-SP-040-regulatory-morning-brief](./HIVE-SP-040-regulatory-morning-brief) |
| R&D Credit Documentation Engine | HIVE-SP-060 | [HIVE-SP-060-rd-credit-ai-engine](./HIVE-SP-060-rd-credit-ai-engine) |

## What is in each folder

- `prompt.md` - runnable, guard-railed copy-paste prompt for Copilot / Copilot Cowork.
- `skill/` - installable Cowork skill (manifest + instructions).
- `power-platform/` - Dataverse tables, Power Automate flows, and Copilot Studio agent config as Copilot-ready build prompts.
- `README.md` - the recipe card: business value, prerequisites, step-by-step, expected output, cost tier.
- `recipe.yaml` - machine-readable metadata.
- `screenshots/` - hero and ROI stills.

## Install helpers

- [how-to-install-a-skill](./install/how-to-install-a-skill.md)
- [how-to-import-a-solution](./install/how-to-import-a-solution.md)

## License

Apache-2.0. See `LICENSE` and `NOTICE` in this folder.
