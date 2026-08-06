## 1 · Master & Variant Register · Dynamics 365 Project Operations

#### Context
**Persona:** Delivery lead. **Problem:** variants are built ad hoc with no controlled master. **Success criteria:** an approved master and its variation axes are records driving generation.

#### Data model
Create `proserv_master`, `proserv_variantspec`, and `proserv_variant` tables with master, approval status, variation axis, value set, and output status columns.

#### Components
Project Operations delivery context, a master-review app, Teams sign-off, and a Power BI batch view.

#### Build steps
1. Create tables and relate variants to the master and spec.
2. Register the approved master.
3. Define the variation axes and values.
4. Enumerate the variant set.
5. Report the batch and its status.

#### Demo script
One approved master defines a hundred pending variants. **Wow moment:** the batch is specified, not hand-listed.
