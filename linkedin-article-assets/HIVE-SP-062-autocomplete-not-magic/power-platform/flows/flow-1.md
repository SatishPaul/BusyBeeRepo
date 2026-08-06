## 1 · Context Assembly Flow · Power Automate

#### Context
**Persona:** AI platform engineer. **Problem:** prompts are assembled by hand, so context is inconsistent and often thin. **Success criteria:** a flow builds the prompt from a context profile, role, data, and memory, before the model runs.

#### Data model
Use `proserv_contextprofile`, `proserv_promptpattern`, and `proserv_groundingsource`.

#### Components
Cloud flow, context-profile lookup, memory store, and a Foundry call.

#### Build steps
1. Trigger on a task request with its task type.
2. Load the matching context profile.
3. Assemble role, instructions, retrieved data, and memory.
4. Pass the assembled context to the model.
5. Log the profile used for reproducibility.

#### Demo script
A one-line request expands into a rich, grounded prompt built from a proven profile. **Wow moment:** the context does the work the user never had to.
