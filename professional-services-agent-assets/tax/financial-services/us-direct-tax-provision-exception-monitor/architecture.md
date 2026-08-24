# Architecture

{{svg:v65-func}}

## The multi-agent pattern

The pack uses one reusable pattern you can lift into any professional-services use case.

**Master orchestrator.** Receives the client and engagement context, applies client-level scoping, decides which child agents run, and tracks state, cost, confidence, approvals, and exceptions across the run.

**Specialist child agents.** Each performs one bounded task, uses only approved client and engagement records, writes a structured, versioned result to Dataverse, and never passes uncontrolled raw context to another agent.

**Shared Dataverse state.** Client, Engagement, Provision Run, Line Item, Finding, Decision, Approval, Agent Run, and ROI Measure. Every hop is a row with lineage, confidence, source references, and status.

**Controlled handoffs.** Child Agent A writes a versioned output record. The master validates it. Child Agent B receives the approved record ID and the required summary, not a raw context dump. Every handoff is traceable.

**Human control.** Draft, review, approve or reject, execute, monitor, roll back. Consequential actions stop here.

## Built on the Azure control plane

{{svg:v65-tech}}

The whole solution runs in your own tenant. The agents are Copilot Studio agents grounded on your Dataverse; the schedule and delegation are Scout; the state and audit trail are Dataverse; and the dashboards are Power BI or a model-driven app. Nothing about the provision leaves your environment for a black box.

## The Dataverse schema (real, importable)

Ten tables, all created under the `psac` publisher prefix in the `psacProvisionExceptionMonitor` solution:

- **psac_client** (Client Code, Industry) and **psac_engagement** (Period, Type)
- **psac_entity** (Jurisdiction, Statutory Rate)
- **psac_provisionrun** (Run Date, Status, Scope, Confidence, Run Cost USD, Tokens, Exception Count)
- **psac_lineitem** (Category, GL Account, Current Amount, Prior Amount, Delta, Expected Low, Expected High)
- **psac_finding** (Finding Type, Severity, Confidence, Description, Status)
- **psac_decision** (Reviewer, Outcome, Rationale, Decided On)
- **psac_approval** (Status, Approver)
- **psac_agentrun** (Agent Name, Role, Status, Tokens, Confidence)
- **psac_roimeasure** (Minutes Before, Minutes After, Exceptions, Cost Per Run, Handoffs Removed)

Eleven lookup relationships wire them into a single engagement graph: a Provision Run belongs to an Engagement and an Entity; Line Items, Findings, Agent Runs, Approvals, and ROI Measures all hang off the Run; and each Finding links back to the Line Item that triggered it and forward to the human Decision. The full schema specification and the exportable solution are in the Dataverse & Assets tab.
