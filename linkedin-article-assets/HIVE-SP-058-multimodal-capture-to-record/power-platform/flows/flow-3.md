## 3 · Capture Quality Dashboard · Power BI

#### Context
**Persona:** Field operations leadership. **Problem:** leaders cannot see capture throughput or accuracy. **Success criteria:** a dashboard shows records per hour, transcription saved, flag rate, and error rate.

#### Data model
Use `proserv_capture`, `proserv_extraction`, and `proserv_confirmation`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by capture type.

#### Build steps
1. Model captures, extractions, and confirmations.
2. Show records per field hour.
3. Track manual transcription avoided.
4. Report flag and error rates.
5. Flag capture types with low confidence.

#### Demo script
Leadership sees capture throughput rise and re-typing fall. **Wow moment:** field data entry becomes a managed metric.
