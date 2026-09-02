# The Problem, Re-imagined Agent-First

{{svg:v66-hero}}

## The challenge

Every audit, a team tests whether a Consumer Packaged Goods company's revenue is real, complete, and recognized in the right period. Someone pulls a random sample of forty-odd revenue transactions, then ties each one out: to the sales order, to proof of delivery, to the customer contract, and to cash received. On a CPG client, revenue is also tangled with trade promotions, rebates, and returns, so the same reviewer has to judge whether net revenue is stated correctly after all of that variable consideration.

It is high-stakes and painfully manual. A single missed cutoff error, a distributor loaded up near period end, or an understated rebate accrual can misstate revenue. So firms throw hours at a sample: a senior pulls it, an in-charge ties it out, a manager reviews it, and a partner signs. And a sample is exactly that, a sample. The forty items you happened to pick can be clean while the one that stuffed a distributor on the last day of the quarter sits in the ninety-six percent you never opened.

## Why the traditional process exists

Sampling exists because, historically, a human could only tie out so many transactions. Testing the whole population by hand was impossible, so audit standards built a discipline around selecting a representative sample and extrapolating. Spreadsheets could store the register, but they could not read a contract, match an invoice to a delivery date, or judge whether a rebate accrual matched the program terms. So the judgment and the testing were fused into one human activity, and the only way to raise assurance was to pull a bigger sample.

## Would this even be a problem if we designed it today?

Here is the agent-first question. If you were building this today, with agents that can read the revenue register, match each invoice to its proof of delivery, net the trade spend, and model expected returns, **would you design a forty-item sample at all?**

Almost certainly not. The testing step, checking every transaction against its ASC 606 assertion, is a bounded, rule-shaped task an agent does in seconds across the full population, not a sample. What genuinely needs a human is the **judgment on the exceptions**: is this $1.8M of period-end revenue a real sale or a distributor loaded to hit a number? That is professional judgment, and it should stay human. But it is a tiny fraction of the transactions.

So the honest redesign is not "help the senior tie out the sample faster." It is: **stop sampling revenue by hand entirely.** Let specialist agents test the full population every close, and route only the anomalies to a human, with a plain-English explanation and the evidence to request.

{{svg:v66-flow}}

That verdict, Orchestrate, is the whole point. This is not a human workflow with AI bolted on. It is the process you would design from scratch today: coordinated agents testing one hundred percent of revenue, human judgment reserved for the exceptions. The rest of this pack is how to build exactly that, in your own tenant, this week.


# The Agent-First Redesign

Not a human workflow with AI sprinkled on top. The process you would design today if agents were assumed from the start.

## The redesign in one sentence

On every close, a master orchestrator wakes on a schedule, scopes to the client and engagement, dispatches five specialist agents to test the full revenue population against ASC 606, writes every finding to Dataverse with lineage and confidence, and pauses at a human approval gate for the exceptions only.

## Who does what

The point of an agent-first design is that each part of the Microsoft stack does the job it is actually best at, and the human does only the judgment.

**Microsoft 365 Copilot** is the auditor's entry point. The reviewer asks, in plain language, "what is wrong with FY26 Q4 revenue and where," and Copilot summarizes the findings the agents already wrote to Dataverse. Copilot does not test the revenue; it narrates the result to the human.

**Copilot Cowork** runs the multi-step preparation across Microsoft 365: gathering the revenue register, the shipping and proof-of-delivery export, the trade-promotion accrual schedule, and the customer contracts from SharePoint, and handing a clean, assembled input to the orchestrator.

**Microsoft Scout** is the scheduler and orchestrator. It runs on a cadence (every close, or nightly during fieldwork), invokes the master agent, and delegates to the specialist child agents. This is exactly what Scout is built for: scheduled, autonomous runs that delegate to specialized subagents. Scout is a preview product, so treat its exact capabilities as subject to change.

**Copilot Studio** hosts the agents themselves, the master orchestrator and the five specialists, each with scoped instructions, grounded on the client's own records, and permitted to write only to their assigned Dataverse tables.

**Dataverse** is the shared state and the system of record. Every input, finding, decision, approval, agent run, and ROI measure is a versioned row. No agent passes raw context to another agent; they read and write approved records, so every handoff has lineage, a source reference, and a confidence score.

**The human** stays in the loop exactly where judgment lives: reviewing the flagged exceptions, approving or rejecting each finding from a Microsoft Teams approval card, and, if needed, rolling back. The password-reset principle applies: once the screening is done, the job is to judge the three exceptions and stop, not to re-tie the thirty-seven clean transactions.

## What each specialist agent does

- **Ingest Agent:** reads the revenue register, sales orders, proof-of-delivery export, and customer contracts, normalizes them, and writes one revenue transaction per invoice.
- **Cutoff & Delivery Agent:** tests ASC 606 control transfer, matching each invoice's recognition date to its proof of delivery, and flags revenue booked before control passed, like the period-end distributor load.
- **Trade-Spend Agent:** nets promotions and rebates against gross revenue and checks that each accrual matches the program terms, catching understated variable consideration that overstates net revenue.
- **Returns Reserve Agent:** models expected returns from the historical return rate and compares them to the recorded reserve, flagging shortfalls that leave revenue overstated.
- **Exception Explainer Agent:** turns each raw flag into a plain-English finding with a likely cause and the specific evidence to request, so the human reads a sentence, not a variance.

## The controls that make it safe

Progressive autonomy, not a black box. The agents test and explain; they never sign the opinion or post an adjustment. Consequential actions pause at a human approval gate delivered as a Microsoft Teams Adaptive Card. Every finding carries its source transaction, its confidence, and a version snapshot, so a reviewer can trust it or roll it back. Client and engagement records are isolated, agents run least-privilege, and the whole run is auditable end to end. Every approved decision and agent inference is captured in Microsoft IQ as reusable memory, so recurring exceptions auto-resolve on the next run and the human load falls over time.


# Architecture

{{svg:v66-func}}

## The multi-agent pattern

The pack uses one reusable pattern you can lift into any professional-services use case.

**Master orchestrator.** Receives the client and engagement context, applies client-level scoping, decides which child agents run, and tracks state, cost, confidence, approvals, and exceptions across the run.

**Specialist child agents.** Each performs one bounded task, uses only approved client and engagement records, writes a structured, versioned result to Dataverse, and never passes uncontrolled raw context to another agent.

**Shared Dataverse state.** Client, Engagement, Customer, Revenue Screen, Transaction, Finding, Decision, Approval, Agent Run, and ROI Measure. Every hop is a row with lineage, confidence, source references, and status.

**Controlled handoffs.** Child Agent A writes a versioned output record. The master validates it. Child Agent B receives the approved record ID and the required summary, not a raw context dump. Every handoff is traceable.

**Human control.** Draft, review, approve or reject, execute, monitor, roll back. Consequential actions stop here, and every approval is a Microsoft Teams Adaptive Card, so the reviewer approves or rejects from their inbox without opening another tool.

## Microsoft IQ: the memory that compounds

Every run leaves a trace. Each human Decision and each agent inference is captured as reusable memory in Microsoft IQ, so the next audit starts smarter than the last. A recurring promotional program that a reviewer accepted once is recognized and pre-cleared, and only genuinely new exceptions reach a human. Memory is candidate-gated: a reviewer persists or rejects what becomes organizational knowledge, so the system learns without drifting. The raw material already lives in the schema, because the `psac_decision` and `psac_agentrun` rows are the memory, versioned and auditable.

## Built on the Azure control plane

{{svg:v66-tech}}

The whole solution runs in your own tenant. The agents are Copilot Studio agents grounded on your Dataverse; the schedule and delegation are Scout; the state and audit trail are Dataverse; and the dashboards are Power BI or a model-driven app. Nothing about the client's revenue leaves your environment for a black box.

## The Dataverse schema (real, importable)

Ten tables, all created under the `psac` publisher prefix in the `psacRevenueAuditOrchestrator` solution:

- **psac_client** (Client Code, Industry) and **psac_engagement** (Period, Type)
- **psac_customer** (Channel, Region)
- **psac_revscreen** (Run Date, Status, Scope, Confidence, Run Cost USD, Tokens, Exception Count)
- **psac_revtxn** (Category, Customer, Invoice No, Gross Amount, Net Amount, Invoice Date, Ship Date, Control Transfer, Promo Accrual, Return Reserve, Expected Low, Expected High, Delta)
- **psac_finding** (Finding Type, Severity, Confidence, Description, Status)
- **psac_decision** (Reviewer, Outcome, Rationale, Decided On)
- **psac_approval** (Status, Approver)
- **psac_agentrun** (Agent Name, Role, Status, Tokens, Confidence)
- **psac_roimeasure** (Minutes Before, Minutes After, Exceptions, Cost Per Run, Handoffs Removed)

Eleven lookup relationships wire them into a single engagement graph: a Revenue Screen belongs to an Engagement and a Customer; Transactions, Findings, Agent Runs, Approvals, and ROI Measures all hang off the Screen; and each Finding links back to the Transaction that triggered it and forward to the human Decision. The full schema specification and the exportable solution are in the Dataverse & Assets tab.
