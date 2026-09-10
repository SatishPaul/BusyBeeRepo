# Environment Variables

- `pswp_ConfidenceThreshold` (decimal, default 90): sections below this are marked for mandatory human review.
- `pswp_TieTolerance` (decimal, default 10000): a tie-out delta beyond this is flagged.
- `pswp_CoverageBandLow` / `pswp_CoverageBandHigh` (decimal): the expected allowance coverage band; outside it is flagged.
- `pswp_DefaultApprover` (string): the role or user notified at the approval gate.
