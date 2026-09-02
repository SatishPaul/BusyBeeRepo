# Dataverse Schema

Publisher prefix: `psac` · Solution: `psacRevenueAuditOrchestrator` · 10 tables, 11 lookup relationships.
Built and verified in a live Power Platform developer environment. Import `psacRevenueAuditOrchestrator_unmanaged.zip`.

## Tables and key columns

- **psac_client** (Name, psac_code, psac_industry)
- **psac_engagement** (Name, psac_period, psac_type) -> lookup psac_ClientId
- **psac_customer** (Name, psac_channel, psac_region) -> lookup psac_EngagementId
- **psac_revscreen** (Name, psac_rundate, psac_status, psac_scope, psac_confidence, psac_costusd, psac_tokens, psac_exceptioncount) -> lookups psac_EngagementId, psac_CustomerId
- **psac_revtxn** (Name, psac_category, psac_customer, psac_invoiceno, psac_grossamount, psac_netamount, psac_invoicedate, psac_shipdate, psac_controltransfer, psac_promoaccrual, psac_returnreserve, psac_expectedlow, psac_expectedhigh, psac_delta) -> lookup psac_RevScreenId
- **psac_finding** (Name, psac_type, psac_severity, psac_confidence, psac_description, psac_status) -> lookups psac_RevScreenId, psac_RevTxnId
- **psac_decision** (Name, psac_reviewer, psac_outcome, psac_rationale, psac_decidedon) -> lookup psac_FindingId
- **psac_approval** (Name, psac_status, psac_approver) -> lookup psac_RevScreenId
- **psac_agentrun** (Name, psac_agentname, psac_role, psac_status, psac_tokens, psac_confidence) -> lookup psac_RevScreenId
- **psac_roimeasure** (Name, psac_minutesbefore, psac_minutesafter, psac_exceptions, psac_costperrun, psac_handoffsremoved) -> lookup psac_RevScreenId

## Relationships

Client 1:N Engagement; Engagement 1:N Customer; Engagement 1:N Revenue Screen; Customer 1:N Revenue Screen;
Revenue Screen 1:N Transaction, Finding, Approval, Agent Run, ROI Measure; Transaction 1:N Finding; Finding 1:N Decision.
