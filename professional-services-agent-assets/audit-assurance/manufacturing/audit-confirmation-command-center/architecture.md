# Architecture

{{svg:v67-func}}

## The multi-agent pattern

The pack uses one reusable pattern you can lift into any professional-services use case.

**Master orchestrator.** Receives the client and engagement context, applies client-level scoping, decides which child agents run, and tracks state, cost, confidence, approvals, and exceptions across the run.

**Specialist child agents.** Each performs one bounded task, uses only approved client and engagement records, writes a structured, versioned result to Dataverse, and never passes uncontrolled raw context to another agent.

**Shared Dataverse state.** Client, Engagement, Confirming Party, Confirmation Cycle, Confirmation, Finding, Decision, Approval, Agent Run, and ROI Measure. Every hop is a row with lineage, confidence, source references, and status.

**Controlled handoffs.** Child Agent A writes a versioned output record. The master validates it. Child Agent B receives the approved record ID and the required summary, not a raw context dump. Every handoff is traceable.

**Human control.** Draft, review, approve or reject, execute, monitor, roll back. Consequential actions stop here, and every approval is a Microsoft Teams Adaptive Card, so the reviewer approves or rejects from their inbox without opening another tool.

## Microsoft IQ: the memory that compounds

Every run leaves a trace. Each human Decision and each agent inference is captured as reusable memory in Microsoft IQ, so the next audit starts smarter than the last. A recurring banking relationship whose small timing difference a reviewer accepted once is recognized and pre-cleared, and only genuinely new exceptions reach a human. Memory is candidate-gated: a reviewer persists or rejects what becomes organizational knowledge, so the system learns without drifting. The raw material already lives in the schema, because the `psac_decision` and `psac_agentrun` rows are the memory, versioned and auditable.

## Built on the Azure control plane

{{svg:v67-tech}}

The whole solution runs in your own tenant. The agents are Copilot Studio agents grounded on your Dataverse; the schedule and delegation are Scout; the state and audit trail are Dataverse; and the dashboards are Power BI or a model-driven app. Nothing about the client's balances leaves your environment for a black box.

## The Dataverse schema (real, importable)

Ten tables, all created under the `psac` publisher prefix in the `psacConfirmationCommandCenter` solution:

- **psac_client** (Client Code, Industry) and **psac_engagement** (Period, Type)
- **psac_confparty** (Party Type, Contact)
- **psac_confcycle** (Run Date, Status, Scope, Confidence, Run Cost USD, Tokens, Exception Count)
- **psac_confirmation** (Confirmation No, Type, Confirming Party, Account Ref, Recorded Amount, Sent Date, Due Date, Returned Date, Confirmed Amount, Signed, Method, Delta, Days Outstanding, Match Status)
- **psac_finding** (Finding Type, Severity, Confidence, Description, Status)
- **psac_decision** (Reviewer, Outcome, Rationale, Decided On)
- **psac_approval** (Status, Approver)
- **psac_agentrun** (Agent Name, Role, Status, Tokens, Confidence)
- **psac_roimeasure** (Minutes Before, Minutes After, Exceptions, Cost Per Run, Handoffs Removed)

Eleven lookup relationships wire them into a single engagement graph: a Confirmation Cycle belongs to an Engagement; Confirmations, Findings, Agent Runs, Approvals, and ROI Measures all hang off the Cycle; each Confirmation links to its Confirming Party; and each Finding links back to the Confirmation that triggered it and forward to the human Decision. The full schema specification and the exportable solution are in the Dataverse & Assets tab.
