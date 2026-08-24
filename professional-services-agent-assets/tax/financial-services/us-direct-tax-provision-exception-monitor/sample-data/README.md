# Sample Data

The pack ships with a complete synthetic Financial-Services scenario so you can see the agents produce real findings on first run. Everything is fabricated; no client data. The CSVs live in the repo under `sample-data/`.

## The scenario

**Client:** Northwind Capital Group (Financial Services) · **Engagement:** FY26 Q3 Tax Provision (ASC 740) · **Entity:** Northwind Capital US Inc. (US Federal, 21% statutory).

**Provision run:** FY26-Q3 Provision Screen, 12 line items across three categories: book-tax differences, deferred taxes, and rate reconciliation.

## The twelve line items and the three seeded anomalies

Nine lines sit comfortably inside their expected band. Three are seeded to move outside it, so the screening agents have something real to catch:

- **Deferred: Depreciation Timing** flips from a $295k asset to a $310k liability, a $605k swing against a plus-or-minus $60k band. **High severity, sign flip.**
- **Deferred: Sec 174 R&D Cap** rises $940k against a $250k expected ceiling. **High severity, out-of-range delta.**
- **Rate: State Blended** jumps from 5.1% to 9.8%, a 4.7-point move against a plus-or-minus 1.5-point tolerance. **Medium severity, out-of-tolerance.**

The other nine lines (meals and entertainment, penalties, tax-exempt interest, bad-debt reserve, accrued comp, NOL carryforward, federal statutory, FDII, R&D credit) stay in band and should produce **no findings**, which is how you check the agents for false positives.

## What the agents write

From this input the run produces three `psac_finding` records with plain-English descriptions and likely causes, six `psac_agentrun` records (one master, five specialists), one pending `psac_approval`, and one `psac_roimeasure`. That is the exact data captured in the Evidence tab.

## Files

- `sample-data/trial-balance.csv` and `sample-data/prior-provision.csv`
- `sample-data/expected-bands.csv`
- `sample-data/synthetic-docs/` (a fabricated provision memo and a fixed-asset roll, for the Ingest Agent to parse)
