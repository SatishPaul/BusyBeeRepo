## 3 · Filing Capacity Dashboard · Power BI

#### Context
**Persona:** Firm operations leadership. **Problem:** leaders cannot see the time recurring filings consume or reclaim. **Success criteria:** a dashboard shows filings automated, hours reclaimed, exceptions, and on-time rate.

#### Data model
Use `proserv_filing`, `proserv_preparedfiling`, and `proserv_submission`.

#### Components
Power BI dataset, scheduled refresh from Dataverse, and drill-through by filing type.

#### Build steps
1. Model filings, preparations, and submissions.
2. Show filings automated over time.
3. Track hours reclaimed.
4. Report exceptions and on-time rate.
5. Flag filings still done by hand.

#### Demo script
Leadership sees reclaimed hours climb as filings automate. **Wow moment:** clerical time becomes billable capacity.
