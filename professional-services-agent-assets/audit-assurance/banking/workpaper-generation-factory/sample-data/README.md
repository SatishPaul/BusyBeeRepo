# Sample Data

The pack ships with a complete synthetic Banking scenario so you can see the agents produce real sections and findings on first run. Everything is fabricated; no client data. The CSVs live in the repo under `sample-data/`.

## The scenario

**Client:** Rivermark Bank (Banking) · **Engagement:** FY26 Financial Statement Audit · **Source documents:** the trial balance export, the loan tape, the investment custodian statement, cash confirmations, and the board minutes, all assembled by Copilot Cowork.

**Workpaper:** FY26 Financial Statements workpaper file, 18 sections across lead schedules, tie-outs, testing steps, and disclosures.

## The eighteen sections and the three seeded anomalies

Fifteen sections draft cleanly: the lead schedules group and foot, each balance ties to its source within tolerance, and the standard disclosures are present. Three are seeded to move outside that, so the factory has something real to catch:

- **Allowance for loan and lease losses (testing step)** shows a coverage ratio of **2.1x** of nonperforming loans against an expected band around **1.4x**, a drift the Testing Agent flags for review. **High severity, testing exception.**
- **Available-for-sale investments (tie-out)** records a fair value of **$18.6M**, but the custodian statement supports **$17.2M**, a **$1.4M** difference that does not tie. **High severity, tie-out exception.**
- **Related-party disclosures** are missing a required note: a **director loan** appears in the board minutes but no related-party disclosure section was drafted. **Medium severity, disclosure gap.**

The other fifteen sections (routine lead schedules, in-tolerance tie-outs, and standard disclosures) stay clean and should produce **no findings**, which is how you check the agents for false positives.

## What the agents write

From this input the run produces eighteen `pswp_section` records (fifteen tied, three flagged), three `pswp_finding` records with plain-English descriptions and next steps, seven `pswp_agentrun` records (one master, six specialists), one pending `pswp_approval`, and one `pswp_roimeasure`. That is the exact data captured in the Evidence tab.

## Files

- `sample-data/trial-balance.csv` and `sample-data/section-list.csv`
- `sample-data/loan-tape.csv` and `sample-data/custodian-statement.csv`
- `sample-data/source-docs.csv` and `sample-data/board-minutes-extract.md`
- `sample-data/synthetic-docs/` (a fabricated custodian statement and a board-minutes extract, for the Intake and Tie-Out agents to parse)
