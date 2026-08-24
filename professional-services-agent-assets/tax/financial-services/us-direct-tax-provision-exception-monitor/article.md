# The Problem, From First Principles

{{svg:v65-hero}}

## The challenge

Every quarter, corporate tax teams and their advisors produce an ASC 740 income-tax provision. Someone pulls the trial balance, recomputes the book-tax differences (the M-1 and M-3 adjustments), rolls the deferred tax assets and liabilities, and reconciles the effective tax rate against the statutory rate. Then a senior reviewer ties the whole thing out, line by line, hunting for the number that moved for the wrong reason.

It is high-stakes and painfully manual. A single missed sign flip or a misapplied amortization period can misstate the provision. So firms throw hours at it: a preparer builds it, a manager checks it, a senior manager re-checks it, and a partner signs it. Four hours of tie-out per entity per quarter is normal. Most of that time is spent confirming that the lines which did not change, did not change.

## Why the traditional process exists

The manual tie-out exists because, historically, only a human could hold the context: what the accounts mean, what last quarter looked like, which movements are normal for this client, and which are red flags. Spreadsheets could store the numbers, but they could not judge them. So the judgment and the screening were fused into one human activity, and the only way to scale confidence was to add more reviewers.

## Would this even be a problem if we designed it today?

Here is the first-principles question. If you were building this today, with agents that can read the trial balance, recall the prior provision, and know the firm's expected bands, **would you design a four-hour human tie-out at all?**

Almost certainly not. The screening step, checking every line against its expected range, is a bounded, rule-shaped task an agent does in seconds across the full population, not a sample. What genuinely needs a human is the **judgment on the exceptions**: is this $605k deferred swing a legitimate fixed-asset roll or an error? That is professional judgment, and it should stay human. But it is a tiny fraction of the lines.

So the honest redesign is not "help the reviewer tie out faster." It is: **stop tying out by hand entirely.** Let agents screen the full provision every close, and route only the anomalies to a human, with a plain-English explanation and the evidence attached.

{{svg:v65-flow}}

That verdict, Autopilot, is the whole point. This is not a human workflow with AI bolted on. It is the process you would design from scratch today: continuous agent screening, human judgment reserved for the exceptions. The rest of this pack is how to build exactly that, in your own tenant, this week.


# The Agent-First Redesign

Not a human workflow with AI sprinkled on top. The process you would design today if agents were assumed from the start.

## The redesign in one sentence

On every close, a master orchestrator wakes on a schedule, scopes to the client and engagement, dispatches five specialist agents to screen the full provision, writes every finding to Dataverse with lineage and confidence, and pauses at a human approval gate for the exceptions only.

## Who does what

The point of an agent-first design is that each part of the Microsoft stack does the job it is actually best at, and the human does only the judgment.

**Microsoft 365 Copilot** is the tax professional's entry point. The reviewer asks, in plain language, "what changed in the FY26 Q3 provision and why," and Copilot summarizes the findings the agents already wrote to Dataverse. Copilot does not compute the provision; it narrates the result to the human.

**Copilot Cowork** runs the multi-step preparation across Microsoft 365: gathering the trial-balance export, the prior provision workpaper, and the firm's expected-band guidance from SharePoint, and handing a clean, assembled input to the orchestrator.

**Microsoft Scout** is the scheduler and orchestrator. It runs on a cadence (every close, or nightly during close), invokes the master agent, and delegates to the specialist child agents. This is exactly what Scout is built for: scheduled, autonomous runs that delegate to specialized subagents. Scout is a preview product, so treat its exact capabilities as subject to change.

**Copilot Studio** hosts the agents themselves, the master orchestrator and the five specialists, each with scoped instructions, grounded on the client's own records, and permitted to write only to their assigned Dataverse tables.

**Dataverse** is the shared state and the system of record. Every input, finding, decision, approval, agent run, and ROI measure is a versioned row. No agent passes raw context to another agent; they read and write approved records, so every handoff has lineage, a source reference, and a confidence score.

**The human** stays in the loop exactly where judgment lives: reviewing the flagged exceptions, approving or rejecting each finding, and, if needed, rolling back. The password-reset principle applies: once the screening is done, the job is to judge the three exceptions and stop, not to re-examine the nine clean lines.

## What each specialist agent does

- **Ingest Agent:** reads the current trial balance and the prior provision, normalizes accounts, writes provision line items.
- **Book-Tax Difference Agent:** recomputes the M-1 / M-3 permanent and temporary differences and flags any outside the expected band.
- **Deferred Tax Agent:** rolls deferred tax assets and liabilities, catching sign flips and magnitude jumps like the depreciation swing.
- **Rate Reconciliation Agent:** builds the effective-tax-rate bridge and flags rate movements beyond tolerance, like the state blended-rate jump.
- **Exception Explainer Agent:** turns each raw flag into a plain-English finding with a likely cause and a recommended check, so the human reads a sentence, not a variance.

## The controls that make it safe

Progressive autonomy, not a black box. The agents screen and explain; they never file the provision. Consequential actions pause at a human approval gate. Every finding carries its source line, its confidence, and a version snapshot, so a reviewer can trust it or roll it back. Client and engagement records are isolated, agents run least-privilege, and the whole run is auditable end to end.


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
