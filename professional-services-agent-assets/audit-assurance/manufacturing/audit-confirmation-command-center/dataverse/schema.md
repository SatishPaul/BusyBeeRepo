# Dataverse Schema

Publisher prefix: `psac` · Solution: `psacConfirmationCommandCenter` · 10 tables, 11 lookup relationships.
Built and verified in a live Power Platform developer environment. Import `psacConfirmationCommandCenter_unmanaged.zip`.

## Tables and key columns

- **psac_client** (Name, psac_code, psac_industry)
- **psac_engagement** (Name, psac_period, psac_type) -> lookup psac_ClientId
- **psac_confparty** (Name, psac_partytype, psac_contact) -> lookup psac_EngagementId
- **psac_confcycle** (Name, psac_rundate, psac_status, psac_scope, psac_confidence, psac_costusd, psac_tokens, psac_exceptioncount) -> lookup psac_EngagementId
- **psac_confirmation** (Name, psac_confno, psac_type, psac_party, psac_accountref, psac_recordedamount, psac_sentdate, psac_duedate, psac_returneddate, psac_confirmedamount, psac_signed, psac_method, psac_delta, psac_daysoutstanding, psac_matchstatus) -> lookups psac_ConfPartyId, psac_ConfCycleId
- **psac_finding** (Name, psac_type, psac_severity, psac_confidence, psac_description, psac_status) -> lookups psac_ConfCycleId, psac_ConfirmationId
- **psac_decision** (Name, psac_reviewer, psac_outcome, psac_rationale, psac_decidedon) -> lookup psac_FindingId
- **psac_approval** (Name, psac_status, psac_approver) -> lookup psac_ConfCycleId
- **psac_agentrun** (Name, psac_agentname, psac_role, psac_status, psac_tokens, psac_confidence) -> lookup psac_ConfCycleId
- **psac_roimeasure** (Name, psac_minutesbefore, psac_minutesafter, psac_exceptions, psac_costperrun, psac_handoffsremoved) -> lookup psac_ConfCycleId

## Relationships

Client 1:N Engagement; Engagement 1:N Confirming Party; Engagement 1:N Confirmation Cycle;
Confirming Party 1:N Confirmation; Confirmation Cycle 1:N Confirmation, Finding, Approval, Agent Run, ROI Measure;
Confirmation 1:N Finding; Finding 1:N Decision.
