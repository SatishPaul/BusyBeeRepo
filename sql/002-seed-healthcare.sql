-- BusyBeeRepo Healthcare Industry Seed Data
-- Sample assets, categories, and collections for healthcare

-- Insert Healthcare Categories
INSERT INTO public.categories (name, slug, description, icon, color, display_order) VALUES
  ('Clinical AI', 'clinical-ai', 'AI tools for clinical decision support and diagnostics', '🏥', '#E8316B', 1),
  ('Patient Education', 'patient-education', 'Resources for patient engagement and education', '📚', '#4A90E2', 2),
  ('Healthcare Administration', 'healthcare-admin', 'Tools for administrative and operational workflows', '⚙️', '#7B68EE', 3),
  ('Medical Coding', 'medical-coding', 'ICD-10, CPT, and medical coding automation', '📋', '#FF6B6B', 4),
  ('EHR Integration', 'ehr-integration', 'Electronic Health Record system integration', '🔗', '#4ECDC4', 5),
  ('Drug Reference', 'drug-reference', 'Pharmaceutical and medication reference tools', '💊', '#45B7D1', 6)
ON CONFLICT DO NOTHING;

-- Insert seed users into auth.users first (required for FK constraint)
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, role, aud, instance_id) VALUES
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 'marie.chen@busybee.dev', '$2a$10$placeholder_hash_1', NOW(), NOW(), NOW(), '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb, FALSE, 'authenticated', 'authenticated', '00000000-0000-0000-0000-000000000000'::uuid),
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 'james.thompson@busybee.dev', '$2a$10$placeholder_hash_2', NOW(), NOW(), NOW(), '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb, FALSE, 'authenticated', 'authenticated', '00000000-0000-0000-0000-000000000000'::uuid),
  ('550e8400-e29b-41d4-a716-446655440003'::uuid, 'sarah.williams@busybee.dev', '$2a$10$placeholder_hash_3', NOW(), NOW(), NOW(), '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb, FALSE, 'authenticated', 'authenticated', '00000000-0000-0000-0000-000000000000'::uuid)
ON CONFLICT DO NOTHING;

-- Insert Healthcare Users
INSERT INTO public.users (id, username, display_name, bio, github_username, verified) VALUES
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 'dr_marie_chen', 'Dr. Marie Chen', 'Healthcare AI specialist | 15 years clinical + tech', 'mariechencodes', TRUE),
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 'james_pediatrics', 'James Thompson', 'Pediatrician & health tech advocate', 'jthompson-md', TRUE),
  ('550e8400-e29b-41d4-a716-446655440003'::uuid, 'health_dev_sarah', 'Sarah Williams', 'Healthcare software engineer', 'sarahwdev', FALSE)
ON CONFLICT DO NOTHING;

-- Insert Healthcare Assets (Prompts)
INSERT INTO public.assets (
  id, title, slug, description, type, maturity_status, author_id,
  tags, industries, frameworks, version, content, published_at
) VALUES
  (
    '660e8400-e29b-41d4-a716-446655440001'::uuid,
    'Clinical Decision Support Prompt',
    'clinical-decision-support',
    'Assist healthcare providers with evidence-based clinical decision making for common conditions',
    'Prompt'::asset_type,
    'Production'::maturity_status,
    '550e8400-e29b-41d4-a716-446655440001'::uuid,
    ARRAY['clinical', 'diagnostics', 'decision-support', 'AI'],
    ARRAY['Healthcare', 'Medical'],
    ARRAY['Claude', 'GPT-4'],
    '1.2.0',
    '# Clinical Decision Support

## Purpose
Generate evidence-based clinical recommendations for provider review.

## System Prompt
You are an evidence-based clinical support assistant. Analyze patient presentations and provide:
1. Differential diagnoses ranked by likelihood
2. Recommended diagnostic workup
3. Evidence-based treatment options
4. Clinical pearls and red flags
5. Resource links to clinical guidelines

## Context
- Always emphasize provider judgment is final
- Reference current clinical guidelines (ACCP, AHA, AAP)
- Include risk stratification
- Highlight drug interactions and contraindications

## Output Format
```
CLINICAL PRESENTATION:
[Patient summary]

DIFFERENTIAL DIAGNOSIS:
1. [Most likely] - Reasoning
2. [Second] - Reasoning
3. [Third] - Reasoning

DIAGNOSTIC WORKUP:
- Initial: [Tests]
- Consider: [Additional tests]

TREATMENT OPTIONS:
- First-line: [Option with evidence]
- Alternative: [Option]

RED FLAGS: [Critical alerts]
RESOURCES: [Links to guidelines]
```',
    NOW()
  ),
  (
    '660e8400-e29b-41d4-a716-446655440002'::uuid,
    'Patient Education Generator',
    'patient-education-generator',
    'Create clear, accessible patient education materials at appropriate reading levels',
    'Prompt'::asset_type,
    'Production'::maturity_status,
    '550e8400-e29b-41d4-a716-446655440001'::uuid,
    ARRAY['patient-education', 'literacy', 'communication', 'engagement'],
    ARRAY['Healthcare', 'Education'],
    ARRAY['Claude'],
    '1.0.0',
    '# Patient Education Generator

## Purpose
Convert complex medical information into patient-friendly education materials.

## Instructions
1. Take medical concept as input
2. Generate 3 versions (8th grade, 10th grade, college level)
3. Include visual metaphors and analogies
4. Add FAQ section
5. Provide resources for further learning

## Key Principles
- Use plain language
- Include "what", "why", and "what next"
- Avoid jargon or explain it
- Add safety information
- Make culturally appropriate

## Output Example
[See documentation for full template]',
    NOW()
  ),
  (
    '660e8400-e29b-41d4-a716-446655440003'::uuid,
    'ICD-10 Code Finder',
    'icd10-code-finder',
    'Intelligent ICD-10 medical coding assistant with diagnosis validation',
    'Skill'::asset_type,
    'Verified'::maturity_status,
    '550e8400-e29b-41d4-a716-446655440001'::uuid,
    ARRAY['medical-coding', 'icd-10', 'billing', 'automation'],
    ARRAY['Healthcare', 'Administration'],
    ARRAY['Node.js', 'TypeScript'],
    '2.1.0',
    '# ICD-10 Code Finder Skill

JavaScript/TypeScript implementation for medical coding automation.

## Features
- Fuzzy matching for diagnosis descriptions
- Laterality and severity handling
- Combination code suggestions
- Excludes list validation
- CMS update tracking

## Usage
```typescript
import { ICD10Finder } from "icd10-finder";

const finder = new ICD10Finder();
const codes = finder.search("Type 2 Diabetes with complications");
// Returns: [ICD-10 codes ranked by relevance]
```

## Integration
Works with EHR systems via REST API and HL7 messaging.',
    NOW()
  ),
  (
    '660e8400-e29b-41d4-a716-446655440004'::uuid,
    'Drug Interaction Checker',
    'drug-interaction-checker',
    'Real-time medication interaction verification and safety warnings',
    'Agent'::asset_type,
    'Production'::maturity_status,
    '550e8400-e29b-41d4-a716-446655440002'::uuid,
    ARRAY['pharmacology', 'safety', 'drug-interactions', 'medications'],
    ARRAY['Healthcare', 'Pharmacy'],
    ARRAY['Claude', 'Anthropic'],
    '3.0.0',
    '# Drug Interaction Checker Agent

Multi-step agent for comprehensive medication safety verification.

## Tools
1. DrugDB Integration - FDA drug database lookup
2. InteractionDB - Verified interaction database
3. PatientContext - Patient age, renal/hepatic function
4. DosageCalculator - Appropriate dosing verification

## Workflow
1. Parse medication list
2. Check CYP450 interactions
3. Verify dosing appropriateness
4. Alert on contraindications
5. Suggest alternatives if needed

## Safety Level
Production-ready with healthcare provider override capability.',
    NOW()
  )
ON CONFLICT DO NOTHING;

-- Insert Healthcare Collections
INSERT INTO public.collections (id, title, slug, description, curator_id, featured) VALUES
  (
    '770e8400-e29b-41d4-a716-446655440001'::uuid,
    'Top 10 Prompts for Patient Communication',
    'top-patient-communication-prompts',
    'Best prompts for improving patient engagement and education',
    '550e8400-e29b-41d4-a716-446655440001'::uuid,
    TRUE
  ),
  (
    '770e8400-e29b-41d4-a716-446655440002'::uuid,
    'Healthcare Automation Skills',
    'healthcare-automation-skills',
    'Reusable skills for automating common healthcare workflows',
    '550e8400-e29b-41d4-a716-446655440002'::uuid,
    TRUE
  )
ON CONFLICT DO NOTHING;

-- Add assets to collections
INSERT INTO public.collection_assets (collection_id, asset_id, position) VALUES
  ('770e8400-e29b-41d4-a716-446655440001'::uuid, '660e8400-e29b-41d4-a716-446655440002'::uuid, 1),
  ('770e8400-e29b-41d4-a716-446655440002'::uuid, '660e8400-e29b-41d4-a716-446655440003'::uuid, 1),
  ('770e8400-e29b-41d4-a716-446655440002'::uuid, '660e8400-e29b-41d4-a716-446655440004'::uuid, 2)
ON CONFLICT DO NOTHING;

-- Insert sample ratings
INSERT INTO public.ratings (asset_id, user_id, rating, review_text) VALUES
  (
    '660e8400-e29b-41d4-a716-446655440001'::uuid,
    '550e8400-e29b-41d4-a716-446655440002'::uuid,
    5,
    'Incredibly useful for our clinic. Saves time and improves consistency of recommendations.'
  ),
  (
    '660e8400-e29b-41d4-a716-446655440002'::uuid,
    '550e8400-e29b-41d4-a716-446655440003'::uuid,
    5,
    'Perfect for creating patient materials. My patients understand their conditions better now.'
  ),
  (
    '660e8400-e29b-41d4-a716-446655440003'::uuid,
    '550e8400-e29b-41d4-a716-446655440002'::uuid,
    4,
    'Very accurate coding suggestions. Reduced denial rate by 12%.'
  )
ON CONFLICT DO NOTHING;
