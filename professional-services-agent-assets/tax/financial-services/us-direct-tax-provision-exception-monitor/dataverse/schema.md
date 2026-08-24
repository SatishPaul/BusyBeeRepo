# Dataverse Schema

Publisher prefix: `psac` · Solution: `psacProvisionExceptionMonitor` · 10 tables, 11 lookup relationships.
Built and verified in a live Power Platform developer environment. Import `psacProvisionExceptionMonitor_unmanaged.zip`.

## Tables and key columns

- **psac_client** (Name, psac_code, psac_industry)
- **psac_engagement** (Name, psac_period, psac_type) -> lookup psac_ClientId
- **psac_entity** (Name, psac_jurisdiction, psac_statutoryrate) -> lookup psac_EngagementId
- **psac_provisionrun** (Name, psac_rundate, psac_status, psac_scope, psac_confidence, psac_costusd, psac_tokens, psac_exceptioncount) -> lookups psac_EngagementId, psac_EntityId
- **psac_lineitem** (Name, psac_category, psac_account, psac_currentamount, psac_prioramount, psac_delta, psac_expectedlow, psac_expectedhigh) -> lookup psac_ProvisionRunId
- **psac_finding** (Name, psac_type, psac_severity, psac_confidence, psac_description, psac_status) -> lookups psac_ProvisionRunId, psac_LineItemId
- **psac_decision** (Name, psac_reviewer, psac_outcome, psac_rationale, psac_decidedon) -> lookup psac_FindingId
- **psac_approval** (Name, psac_status, psac_approver) -> lookup psac_ProvisionRunId
- **psac_agentrun** (Name, psac_agentname, psac_role, psac_status, psac_tokens, psac_confidence) -> lookup psac_ProvisionRunId
- **psac_roimeasure** (Name, psac_minutesbefore, psac_minutesafter, psac_exceptions, psac_costperrun, psac_handoffsremoved) -> lookup psac_ProvisionRunId

## Relationships

Client 1:N Engagement; Engagement 1:N Entity; Engagement 1:N Provision Run; Entity 1:N Provision Run;
Provision Run 1:N Line Item, Finding, Approval, Agent Run, ROI Measure; Line Item 1:N Finding; Finding 1:N Decision.
