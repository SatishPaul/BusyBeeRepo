# Sample Data

The pack ships with a complete synthetic Manufacturing scenario so you can see the agents produce real findings on first run. Everything is fabricated; no client data. The CSVs live in the repo under `sample-data/`.

## The scenario

**Client:** Larkspur Manufacturing (Manufacturing) · **Engagement:** FY26 External Confirmation Cycle · **Confirming parties:** Meridian Bank and Northshore Bank (banks), Cedar Foods and Alpine Retail (customers), and Harborline Capital (lender).

**Confirmation cycle:** FY26 Confirmation Cycle, 40 confirmations across three types: bank balances, accounts-receivable, and debt.

## The forty confirmations and the three seeded anomalies

Thirty-seven confirmations come back, match the recorded balance within tolerance, and carry a signed, complete reply. Three are seeded to move outside that, so the command center has something real to catch:

- **Meridian Bank cash confirmation** comes back at **$2.4M** against a recorded balance of **$2.1M**, a **$0.3M** difference outside tolerance. **High severity, balance discrepancy.**
- **Cedar Foods receivable confirmation** for **$1.8M**, the largest customer balance, is never returned and sits **7 days past** its 21-day due date, so an alternate procedure is required. **High severity, non-response.**
- **Harborline Capital debt confirmation** comes back but is **unsigned and missing the interest rate**, so the evidence is incomplete and cannot be relied on as returned. **Medium severity, evidence gap.**

The other thirty-seven confirmations (routine bank and receivable balances that returned signed and matched within tolerance) stay clean and should produce **no findings**, which is how you check the agents for false positives.

## What the agents write

From this input the run produces three `psac_finding` records with plain-English descriptions and next steps, six `psac_agentrun` records (one master, five specialists), one pending `psac_approval`, and one `psac_roimeasure`. That is the exact data captured in the Evidence tab.

## Files

- `sample-data/confirmation-control-list.csv` and `sample-data/recorded-balances.csv`
- `sample-data/returned-replies.csv` and `sample-data/confirming-parties.csv`
- `sample-data/synthetic-docs/` (a fabricated bank confirmation reply and an unsigned lender letter, for the Response Agent to parse)
