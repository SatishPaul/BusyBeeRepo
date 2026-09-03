# Dataverse Skills prompt (agent-directed schema + data)

```
In the current environment, using Dataverse, create sample data for a demonstration:
one Client (Manufacturing), one Engagement (FY26 external confirmation cycle), several Confirming Parties (banks, customers, a lender),
one Confirmation Cycle, and forty Confirmations across bank, accounts-receivable, and debt types.
Seed three confirmations with problems: a returned bank confirmation whose confirmed amount differs from the recorded balance, a large customer confirmation that never returns and is past its due date, and a lender confirmation returned unsigned and missing its interest rate.
Relate every record correctly. Do not touch production tables.
```
