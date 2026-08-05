## 1 · Source Register · Dynamics 365 Customer Service

#### Context
**Persona:** Research lead. **Problem:** long-form sources are monitored ad hoc and inconsistently. **Success criteria:** every source is a record with its type, cadence, transcript, and coverage status.

#### Data model
Create `proserv_source`, `proserv_transcript`, and `proserv_topic` tables with source, type, date, transcript link, topics, and coverage columns.

#### Components
Customer Service research context, a source-review app, Teams routing, and a Power BI coverage view.

#### Build steps
1. Create tables and relate sources to transcripts and topics.
2. Register each long-form source and its cadence.
3. Capture the transcript on release.
4. Tag topics and coverage.
5. Report which sources are covered.

#### Demo script
Every relevant call and briefing is tracked and transcribed. **Wow moment:** coverage stops depending on who had time.
