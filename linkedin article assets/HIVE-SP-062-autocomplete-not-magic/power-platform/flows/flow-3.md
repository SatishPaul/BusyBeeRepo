## 3 · Context ROI Dashboard · Power BI

#### Context
**Persona:** Practice leadership. **Problem:** leaders cannot see that context, not model choice, drives output quality. **Success criteria:** a dashboard relates output quality to context completeness across tasks and teams.

#### Data model
Use `proserv_outputlog`, `proserv_contextprofile`, and `proserv_groundingsource`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by task type.

#### Build steps
1. Model completions, profiles, and grounding sources.
2. Show output quality by context completeness.
3. Compare profiled versus ad hoc prompts.
4. Track grounding coverage and tool-action success.
5. Flag task types with weak or missing context.

#### Demo script
Leadership sees profiled tasks outperform ad hoc ones on the same model. **Wow moment:** context engineering shows up as a measurable return.
