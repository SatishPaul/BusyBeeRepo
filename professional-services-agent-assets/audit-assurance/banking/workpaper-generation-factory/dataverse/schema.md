# Dataverse Schema

Publisher prefix: `pswp` | Solution: `pswpWorkpaperFactory` | 10 tables, 11 lookup relationships.
Built and verified in a live Power Platform developer environment. Import `pswpWorkpaperFactory_unmanaged.zip`.

## Tables and key columns

- **pswp_client** (Name, pswp_code, pswp_industry)
- **pswp_engagement** (Name, pswp_period, pswp_type) -> lookup pswp_ClientId
- **pswp_workpaper** (Name, pswp_ref, pswp_area, pswp_status, pswp_sectionstotal, pswp_sectionsdrafted, pswp_sectionsflagged, pswp_confidence, pswp_costusd, pswp_tokens) -> lookup pswp_EngagementId
- **pswp_section** (Name, pswp_sectionref, pswp_title, pswp_sectiontype, pswp_caption, pswp_draftedsummary, pswp_recordedamount, pswp_sourceamount, pswp_delta, pswp_tiestatus, pswp_flagstatus) -> lookups pswp_WorkpaperId, pswp_SourceDocId
- **pswp_sourcedoc** (Name, pswp_doctype, pswp_sourcesystem, pswp_receiveddate, pswp_assembledbycowork) -> lookup pswp_WorkpaperId
- **pswp_finding** (Name, pswp_type, pswp_severity, pswp_confidence, pswp_description, pswp_status) -> lookups pswp_WorkpaperId, pswp_SectionId
- **pswp_decision** (Name, pswp_reviewer, pswp_outcome, pswp_rationale, pswp_decidedon) -> lookup pswp_FindingId
- **pswp_approval** (Name, pswp_status, pswp_approver) -> lookup pswp_WorkpaperId
- **pswp_agentrun** (Name, pswp_agentname, pswp_role, pswp_status, pswp_tokens, pswp_confidence) -> lookup pswp_WorkpaperId
- **pswp_roimeasure** (Name, pswp_minutesbefore, pswp_minutesafter, pswp_exceptions, pswp_costperrun, pswp_handoffsremoved) -> lookup pswp_WorkpaperId

## Relationships

Client 1:N Engagement; Engagement 1:N Workpaper; Workpaper 1:N Section, Source Doc, Finding, Approval, Agent Run, ROI Measure;
Source Doc 1:N Section; Section 1:N Finding; Finding 1:N Decision.
