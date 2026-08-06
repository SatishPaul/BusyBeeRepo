## 1 · Role Provisioning Flow · Power Automate + Microsoft Entra

#### Context
**Persona:** Identity engineer. **Problem:** agents run without scoped, per-role identities. **Success criteria:** a flow provisions each crew role a scoped identity with least-privilege access.

#### Data model
Use `proserv_crewrole`, `proserv_rolescope`, and `proserv_engagement`.

#### Components
Cloud flow, Entra identities and access policies, and Dataverse writes.

#### Build steps
1. Trigger when a crew role is defined.
2. Provision a scoped identity for the role.
3. Grant only the lane's permitted actions.
4. Record the scope as governance evidence.
5. Hand off to orchestration.

#### Demo script
Each role is provisioned an identity scoped to its lane. **Wow moment:** least privilege is applied per agent.
