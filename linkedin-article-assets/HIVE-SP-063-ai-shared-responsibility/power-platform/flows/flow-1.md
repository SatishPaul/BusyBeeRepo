## 1 · Access Boundary Flow · Power Automate + Microsoft Entra

#### Context
**Persona:** Identity engineer. **Problem:** identity and access to AI tools is one of the duties that never transfers, but it is managed inconsistently. **Success criteria:** a flow provisions and reviews AI access against role, so only the right people and agents reach the tool.

#### Data model
Use `proserv_responsibility`, `proserv_aideployment`, and `proserv_controlevidence`.

#### Components
Cloud flow, Entra groups and conditional access, Dataverse writes, and Teams access reviews.

#### Build steps
1. Trigger on an access request or a periodic review.
2. Check role and layer against the access policy.
3. Grant or route the request for approval.
4. Record the decision as control evidence.
5. Report access posture for the deployment.

#### Demo script
An agent requests access and is scoped to exactly its role, with the grant logged as evidence. **Wow moment:** the duty that never transfers is actively owned, not assumed.
