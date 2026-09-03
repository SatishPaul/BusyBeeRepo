# The Problem, Re-imagined Agent-First

{{svg:v67-hero}}

## The challenge

Every audit has to prove that the balances on the books are real, and the strongest evidence often comes from outside the company. So the team sends external confirmations: to banks for cash and debt, to customers for accounts receivable, to lenders for loan terms. Someone builds a control list of every request, mails or emails each one, then waits. As replies trickle back over weeks, the same person ties each returned confirmation to the recorded balance, chases the parties who never answered, and performs alternate procedures for the gaps. On a Manufacturing client with dozens of banking relationships and hundreds of customers, that is a long, stateful, easy-to-drop process.

It is high-stakes and painfully manual. A confirmation that comes back with a different balance, a large receivable whose confirmation never returns, or a lender reply that arrives unsigned can each leave a material balance unsupported. So firms run a tracking spreadsheet: a staff member owns the log, an in-charge reconciles the returns, a manager reviews the exceptions, and a partner signs. The spreadsheet is only as current as the last time someone updated it, and the confirmation that was never returned is exactly the one nobody notices.

## Why the traditional process exists

Confirmation tracking is a spreadsheet because, historically, a human had to be the state machine. A person kept the list, matched each reply by hand, and remembered which parties to chase. Spreadsheets could store the log, but they could not read a returned confirmation, compare its number to the ledger, notice that a reply was unsigned, or wake up on day twenty-two to flag a non-response. So the tracking, the reconciliation, and the chasing were fused into one human activity, and the only way to keep it current was to spend more hours on it.

## Would this even be a problem if we designed it today?

Here is the agent-first question. If you were building this today, with agents that can track every request, match every reply, reconcile confirmed against recorded, and age the non-responses continuously, **would you design a manual tracking spreadsheet at all?**

Almost certainly not. The tracking and matching, checking every confirmation against its recorded balance and its due date, is a bounded, rule-shaped task an agent does continuously across the full population, not a weekly spreadsheet refresh. What genuinely needs a human is the **judgment on the exceptions**: is this $0.3M bank difference a timing item or a real misstatement, and are the alternate procedures for the missing customer confirmation sufficient? That is professional judgment, and it should stay human. But it is a tiny fraction of the confirmations.

So the honest redesign is not "help the staff update the tracker faster." It is: **stop tracking confirmations by hand entirely.** Let specialist agents run the confirmation cycle continuously, reconcile every reply, and route only the exceptions to a human, with a plain-English explanation and the alternate procedure to run.

{{svg:v67-flow}}

That verdict, Autopilot, is the whole point. This is not a human workflow with AI bolted on. It is the process you would design from scratch today: a command center that tracks and reconciles every confirmation continuously, with human judgment reserved for the exceptions. The rest of this pack is how to build exactly that, in your own tenant, this week.


# The Agent-First Redesign

Not a human workflow with AI sprinkled on top. The process you would design today if agents were assumed from the start.

## The redesign in one sentence

Through fieldwork, a master orchestrator wakes on a schedule, scopes to the client and engagement, dispatches five specialist agents to track and reconcile the full confirmation population, writes every finding to Dataverse with lineage and confidence, and pauses at a human approval gate for the exceptions only.

## Who does what

The point of an agent-first design is that each part of the Microsoft stack does the job it is actually best at, and the human does only the judgment.

**Microsoft 365 Copilot** is the auditor's entry point. The reviewer asks, in plain language, "which confirmations are still open and which came back wrong," and Copilot summarizes the findings the agents already wrote to Dataverse. Copilot does not reconcile the confirmations; it narrates the result to the human.

**Copilot Cowork** runs the multi-step preparation across Microsoft 365: assembling the confirmation control list, the recorded balances from the trial balance, the returned confirmation replies from the mailbox and SharePoint, and the party contact details, and handing a clean, assembled input to the orchestrator.

**Microsoft Scout** is the scheduler and orchestrator. It runs on a cadence (nightly during fieldwork), invokes the master agent, and delegates to the specialist child agents. This is exactly what Scout is built for: scheduled, autonomous runs that delegate to specialized subagents. Scout is a preview product, so treat its exact capabilities as subject to change.

**Copilot Studio** hosts the agents themselves, the master orchestrator and the five specialists, each with scoped instructions, grounded on the client's own records, and permitted to write only to their assigned Dataverse tables.

**Dataverse** is the shared state and the system of record. Every request, response, finding, decision, approval, agent run, and ROI measure is a versioned row. No agent passes raw context to another agent; they read and write approved records, so every handoff has lineage, a source reference, and a confidence score.

**The human** stays in the loop exactly where judgment lives: reviewing the flagged exceptions, approving or rejecting each finding from a Microsoft Teams approval card, and, if needed, rolling back. The password-reset principle applies: once the cycle is reconciled, the job is to judge the three exceptions and stop, not to re-check the thirty-seven clean confirmations.

## What each specialist agent does

- **Request Agent:** reads the confirmation control list and the recorded balances, normalizes them, and writes one confirmation record per request with its party, account reference, recorded amount, sent date, and due date.
- **Response Agent:** matches each returned reply to its request and checks that the response is complete, that it is signed and carries the required attributes, catching the lender reply that came back unsigned and missing its interest rate.
- **Reconciliation Agent:** compares the confirmed amount to the recorded balance for every returned confirmation and flags any difference outside tolerance, like the bank that confirmed a different cash balance.
- **Non-Response Agent:** ages every unreturned request against its due date, flags the ones past deadline, and proposes the alternate procedure, catching the largest customer's confirmation that never came back.
- **Evidence Explainer Agent:** turns each raw flag into a plain-English finding with a likely cause and the specific next step, so the human reads a sentence, not a status code.

## The controls that make it safe

Progressive autonomy, not a black box. The agents track and explain; they never sign the opinion or waive a confirmation. Consequential actions pause at a human approval gate delivered as a Microsoft Teams Adaptive Card. Every finding carries its source confirmation, its confidence, and a version snapshot, so a reviewer can trust it or roll it back. Client and engagement records are isolated, agents run least-privilege, and the whole run is auditable end to end. Every approved decision and agent inference is captured in Microsoft IQ as reusable memory, so recurring parties and known timing differences auto-resolve on the next run and the human load falls over time.


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
