# The Problem, Re-imagined Agent-First

{{svg:v68-hero}}

## The challenge

An audit file is mostly workpapers, and workpapers are mostly assembly. Someone exports the trial balance, groups the accounts into lead schedules, then ties every balance back to source: the loan tape for the loan portfolio, the custodian statement for investments, the confirmations for cash, the board minutes for commitments. Each tie-out gets a reference, each testing step gets documented, and each number that flows to the face of the financials gets a disclosure note. On a bank audit with a large loan book, an investment portfolio, and a long disclosure checklist, that is dozens of sections, and every one of them starts by retyping a number from one document into another.

It is high-effort and painfully manual. The staff member who builds the lead sheet is not exercising judgment; they are copying figures and chasing the one that does not tie. A senior then re-performs enough of it to trust it. The file is only as current as the last save, and the section that quietly does not tie, or the disclosure that was never drafted, is exactly the one that surfaces late.

## Why the traditional process exists

Workpapers are prepared by hand because, historically, a human had to be the integration layer. A person read the trial balance, read the loan tape, read the custodian statement, and reconciled them in a template, because a spreadsheet could hold the numbers but could not read a PDF custodian statement, group a chart of accounts into captions, notice that a fair value did not tie, or draft a related-party note from the board minutes. So assembling, tying out, testing, and drafting were fused into one long human activity, and the only way to move faster was to staff more hours.

## Would this even be a problem if we designed it today?

Here is the agent-first question. If you were building this today, with Copilot Cowork that can assemble the source file across Microsoft 365 and agents that can draft each section, tie every number to its source, and check the disclosures continuously, **would you design a manual workpaper build at all?**

Almost certainly not. The assembly and drafting, pulling the balances, building the lead sheets, tracing each figure to its evidence, documenting the standard testing steps, is bounded, rule-shaped work that agents do across the whole file, not a section-by-section retype. What genuinely needs a human is the **judgment on the exceptions**: is this allowance coverage drift a real change in credit risk or a modeling artifact, and is the missing related-party note a genuine omission? That is professional judgment, and it should stay human. But it is a small fraction of the sections.

So the honest redesign is not "help the staff build lead sheets faster." It is: **stop preparing workpapers by hand entirely.** Let Cowork assemble the file, let specialist agents draft every section and tie it to source, and route only the flagged sections to a human, with a plain-English review note and the exact source to check.

{{svg:v68-flow}}

That verdict, Orchestrate, is the whole point. This is not a human workflow with AI bolted on. It is the process you would design from scratch today: Cowork assembles the inputs, a coordinated set of agents drafts the workpaper file, and human judgment is reserved for the exceptions. The rest of this pack is how to build exactly that, in your own tenant, this week.


# The Agent-First Redesign

Not a human workflow with AI sprinkled on top. The process you would design today if agents were assumed from the start.

## The redesign in one sentence

At each close, Copilot Cowork assembles the source file across Microsoft 365, then a master orchestrator scopes to the client and engagement, dispatches six specialist agents to draft every workpaper section and tie each number to its source, writes every section to Dataverse with lineage and confidence, and pauses at a human approval gate for the flagged sections only.

## Who does what

The point of an agent-first design is that each part of the Microsoft stack does the job it is actually best at, and the human does only the judgment.

**Microsoft 365 Copilot** is the auditor's entry point. The reviewer asks, in plain language, "which workpaper sections still need review and why," and Copilot summarizes the sections and review notes the agents already wrote to Dataverse. Copilot does not draft the workpaper; it narrates the result to the human.

**Copilot Cowork** is where this pack starts, and it is the heart of the redesign. Cowork runs the multi-step preparation across Microsoft 365: it pulls the trial balance export, the loan tape and the investment custodian statements from SharePoint, the confirmations and the board minutes from the mailbox, and the prior-year workpaper file, validates that the package is complete, and hands one clean, assembled input to the orchestrator. This is the step that used to be a person copying numbers between documents.

**Microsoft Scout** is the scheduler and orchestrator. It runs on a cadence (nightly during fieldwork), invokes the master agent, and delegates to the specialist child agents. This is exactly what Scout is built for: scheduled, autonomous runs that delegate to specialized subagents. Scout is a preview product, so treat its exact capabilities as subject to change.

**Copilot Studio** hosts the agents themselves, the master orchestrator and the six specialists, each with scoped instructions, grounded on the client's own records, and permitted to write only to their assigned Dataverse tables.

**Dataverse** is the shared state and the system of record. Every source document, workpaper, section, finding, decision, approval, agent run, and ROI measure is a versioned row. No agent passes raw context to another agent; they read and write approved records, so every handoff has lineage, a source reference, and a confidence score.

**The human** stays in the loop exactly where judgment lives: reviewing the flagged sections, approving or rejecting each one from a Microsoft Teams approval card, and, if needed, rolling back. The password-reset principle applies: once the file is drafted, the job is to judge the three flagged sections and stop, not to re-key the fifteen that already tie.

## What each specialist agent does

- **Intake Agent:** takes the package Cowork assembled, registers each source document, and confirms the trial balance, loan tape, custodian statements, and minutes are present and current before any drafting starts.
- **Lead Sheet Agent:** groups the trial balance into financial-statement captions and drafts the lead schedules, one section per caption, with the grouped balances and prior-year comparatives.
- **Tie-Out Agent:** traces every balance on each lead sheet to its source evidence, records the reference, and computes the delta, catching the investment fair value that does not tie to the custodian statement.
- **Testing Agent:** runs the standard workpaper testing steps for the area, including the allowance-for-loan-losses adequacy analysis, and flags the coverage ratio that drifted outside the expected band.
- **Disclosure Agent:** drafts the note and disclosure language and checks it against the disclosure checklist, catching the required related-party loan note that was missing.
- **Review Notes Agent:** turns each raw flag into a plain-English review note with a likely cause and the specific next step, so the human reads a sentence, not a status code.

## The controls that make it safe

Progressive autonomy, not a black box. The agents draft and explain; they never sign the workpaper or conclude the opinion. Consequential actions pause at a human approval gate delivered as a Microsoft Teams Adaptive Card. Every section carries its source reference, its confidence, and a version snapshot, so a reviewer can accept it or roll it back. Client and engagement records are isolated, agents run least-privilege, and the whole run is auditable end to end. Every approved decision and agent inference is captured in Microsoft IQ as reusable memory, so recurring lead-sheet groupings and known, accepted differences auto-resolve on the next close and the human load falls over time.


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
