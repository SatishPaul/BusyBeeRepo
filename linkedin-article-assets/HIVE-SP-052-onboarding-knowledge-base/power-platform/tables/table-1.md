## 1 · Lesson Register · Dynamics 365 Project Operations

#### Context
**Persona:** Knowledge lead. **Problem:** engagement lessons are scattered and never made explicit. **Success criteria:** each lesson is a structured record with context, source engagement, and access scope.

#### Data model
Create `proserv_lesson`, `proserv_engagement`, and `proserv_accessscope` tables with lesson, context, source, tags, and scope columns.

#### Components
Project Operations engagements, a lesson-review app, Teams routing, and a Power BI coverage view.

#### Build steps
1. Create tables and relate lessons to engagements and scopes.
2. Extract lessons from engagement history.
3. Structure each with context and source.
4. Assign an access scope per lesson.
5. Report coverage across engagements.

#### Demo script
Scattered engagement notes become structured, scoped lessons. **Wow moment:** the firm's memory becomes explicit.
