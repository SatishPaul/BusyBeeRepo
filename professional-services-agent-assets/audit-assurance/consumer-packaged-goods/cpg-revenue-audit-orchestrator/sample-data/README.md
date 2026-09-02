# Sample Data

The pack ships with a complete synthetic Consumer Packaged Goods scenario so you can see the agents produce real findings on first run. Everything is fabricated; no client data. The CSVs live in the repo under `sample-data/`.

## The scenario

**Client:** Harbor & Vale Foods (Consumer Packaged Goods) · **Engagement:** FY26 Q4 Revenue Audit (ASC 606) · **Customers:** Beacon Distributors (distributor), Summit Grocers (grocery chain), and Trailhead Club (club retailer).

**Revenue screen:** FY26-Q4 Revenue Screen, 40 transactions across three categories: standard sales, trade-promotion sales, and returns.

## The forty transactions and the three seeded anomalies

Thirty-seven transactions sit comfortably inside their expected band, delivered before period end with matching accruals. Three are seeded to move outside it, so the screening agents have something real to catch:

- **Beacon Distributors period-end load** is recognized on 2026-06-29 but shipped and delivered 2026-07-03, so revenue was booked before control transferred. A **$1.8M** cutoff error across the period-end date. **High severity, channel-stuffing cutoff.**
- **Summit Grocers promotion** earned $620k of trade spend but accrued only $180k, overstating net revenue by **$440k**. **High severity, understated variable consideration.**
- **Trailhead Club returns reserve** is set at $310k on a $12.5M product line whose historical return rate of 6.2% implies about $775k, a **$465k** shortfall. **Medium severity, reserve inadequacy.**

The other thirty-seven transactions (standard grocery and club sales, delivered on time with normal promotion accruals and adequate reserves) stay in band and should produce **no findings**, which is how you check the agents for false positives.

## What the agents write

From this input the run produces three `psac_finding` records with plain-English descriptions and likely causes, six `psac_agentrun` records (one master, five specialists), one pending `psac_approval`, and one `psac_roimeasure`. That is the exact data captured in the Evidence tab.

## Files

- `sample-data/revenue-register.csv` and `sample-data/proof-of-delivery.csv`
- `sample-data/trade-promotions.csv` and `sample-data/return-rates.csv`
- `sample-data/synthetic-docs/` (a fabricated distribution agreement and a promotion program letter, for the Ingest Agent to parse)
