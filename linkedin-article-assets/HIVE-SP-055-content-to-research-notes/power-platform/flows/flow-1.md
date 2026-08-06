## 1 · Ingestion & Transcription Flow · Power Automate + Azure AI Foundry

#### Context
**Persona:** Research operations. **Problem:** long-form content is not captured or transcribed at scale. **Success criteria:** a flow ingests each source and produces a searchable transcript.

#### Data model
Use `proserv_source`, `proserv_transcript`, and `proserv_topic`.

#### Components
Cloud flow, Foundry transcription, source feeds, and Dataverse writes.

#### Build steps
1. Trigger when a source is released.
2. Ingest the audio or video.
3. Transcribe it to text.
4. Tag topics for retrieval.
5. Hand off to extraction.

#### Demo script
An earnings call is transcribed the moment it ends. **Wow moment:** the source is ready to mine, not queued for hours.
