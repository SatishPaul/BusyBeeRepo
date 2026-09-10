# Architecture

{{svg:v68-func}}

## The multi-agent pattern

The pack uses one reusable pattern you can lift into any professional-services use case, and it is deliberately agent-heavy: the work lives in the agents, not in app screens.

**Master orchestrator.** Receives the client and engagement context and the file Cowork assembled, applies client-level scoping, decides which child agents run, and tracks state, cost, confidence, approvals, and exceptions across the run.

**Six specialist child agents.** Intake, Lead Sheet, Tie-Out, Testing, Disclosure, and Review Notes. Each performs one bounded task, uses only approved client and engagement records, writes a structured, versioned section or finding to Dataverse, and never passes uncontrolled raw context to another agent.

**Shared Dataverse state.** Client, Engagement, Workpaper, Section, Source Doc, Finding, Decision, Approval, Agent Run, and ROI Measure. Every hop is a row with lineage, confidence, source references, and status.

**Controlled handoffs.** Child Agent A writes a versioned section record. The master validates it. Child Agent B receives the approved record ID and the required summary, not a raw context dump. Every handoff is traceable.

**Human control.** Draft, review, approve or reject, execute, monitor, roll back. Consequential actions stop here, and every approval is a Microsoft Teams Adaptive Card, so the reviewer approves or rejects from their inbox without opening another tool.

## Why more agents than a model-driven app

A traditional build would lean on a model-driven app: a handful of tables, forms, and views, with a person keying the workpaper in. This pack inverts that. The model-driven app is a thin review surface; the substance is the orchestrator and its six specialists, plus the Cowork assembler and the Copilot Studio grounding, coordinating over Dataverse. Counting the drafting agents alone, there are more agents at work than there are app components, which is the point of an agent-first design: the app is where a human judges, the agents are where the work happens.

## Microsoft IQ: the memory that compounds

Every run leaves a trace. Each human Decision and each agent inference is captured as reusable memory in Microsoft IQ, so the next close starts smarter than the last. A recurring lead-sheet grouping, or a small investment pricing difference a reviewer accepted once, is recognized and pre-cleared, and only genuinely new exceptions reach a human. Memory is candidate-gated: a reviewer persists or rejects what becomes organizational knowledge, so the system learns without drifting. The raw material already lives in the schema, because the `pswp_decision` and `pswp_agentrun` rows are the memory, versioned and auditable.

## Built on the Azure control plane

{{svg:v68-tech}}

The whole solution runs in your own tenant. The agents are Copilot Studio agents grounded on your Dataverse; the source assembly is Copilot Cowork across your Microsoft 365; the schedule and delegation are Scout; the state and audit trail are Dataverse; and the dashboards are Power BI or a model-driven app. Nothing about the client's balances leaves your environment for a black box.

## The Dataverse schema (real, importable)

Ten tables, all created under the `pswp` publisher prefix in the `pswpWorkpaperFactory` solution:

- **pswp_client** (Client Code, Industry) and **pswp_engagement** (Period, Type)
- **pswp_workpaper** (Workpaper Ref, Area, Status, Sections Total, Sections Drafted, Sections Flagged, Confidence, Run Cost USD, Tokens)
- **pswp_section** (Section Ref, Title, Section Type, Caption, Drafted Summary, Recorded Amount, Source Amount, Delta, Tie Status, Flag Status)
- **pswp_sourcedoc** (Doc Name, Doc Type, Source System, Received Date, Assembled By Cowork)
- **pswp_finding** (Finding Type, Severity, Confidence, Description, Status)
- **pswp_decision** (Reviewer, Outcome, Rationale, Decided On)
- **pswp_approval** (Status, Approver)
- **pswp_agentrun** (Agent Name, Role, Status, Tokens, Confidence)
- **pswp_roimeasure** (Minutes Before, Minutes After, Exceptions, Cost Per Run, Handoffs Removed)

Eleven lookup relationships wire them into a single engagement graph: an Engagement belongs to a Client; the Workpaper belongs to the Engagement; Sections, Source Docs, Findings, Agent Runs, Approvals, and ROI Measures all hang off the Workpaper; each Section ties to the Source Doc it was traced against; each Finding links back to the Section that triggered it and forward to the human Decision. The full schema specification and the exportable solution are in the Dataverse & Assets tab.
