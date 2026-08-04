# BusyBeeRepo Content Model

**Version**: 1.0  
**Created**: 2026-08-04  
**Status**: Content Structure Reference

This document defines the content structure, asset types, and seed content strategy for BusyBeeRepo.com.

---

## Table of Contents

1. [Asset Types](#asset-types)
2. [Asset YAML Schema](#asset-yaml-schema)
3. [Asset Folder Structure](#asset-folder-structure)
4. [Content Guidelines](#content-guidelines)
5. [Seed Content Strategy](#seed-content-strategy)
6. [Example Assets](#example-assets)
7. [Maturity Model](#maturity-model)
8. [Content Backlog](#content-backlog)

---

## Asset Types

BusyBeeRepo recognizes seven primary asset types:

### 1. Prompt
A crafted text instruction for an LLM to perform a specific task.

**Characteristics**:
- Specific business problem addressed
- Clear input/output examples
- Designed for immediate use
- Can be copy-pasted into LLM
- Typically 500-2000 words

**Example**: "Create Investment Committee Memo Prompt"

### 2. Skill
A reusable, documented workflow or technique within a business tool or LLM.

**Characteristics**:
- Builds on a prompt
- Includes step-by-step instructions
- Documented in a tool-specific format (Prompt flow, Power Automate, etc.)
- Can be deployed and tested
- Typically 2000-5000 words

**Example**: "Investment Memo Builder Skill"

### 3. Plugin
An integration connecting external data or services to an LLM or workflow.

**Characteristics**:
- Connects two or more systems
- Requires API configuration
- Documented with authentication setup
- Includes example queries
- Can be a concept or functional integration

**Example**: "Financial Data Retrieval Plugin"

### 4. Workflow
A multi-step automation combining prompts, skills, and plugins.

**Characteristics**:
- Orchestrates multiple assets
- Typically uses workflow tools (Power Automate, Zapier, etc.)
- Includes conditional logic
- Requires configuration
- Complete business process automation

**Example**: "Investment Committee Preparation Workflow"

### 5. Agent
An autonomous system that uses LLMs to make decisions and take actions.

**Characteristics**:
- Uses LLM reasoning
- Includes tool definitions
- May iterate on decisions
- Requires monitoring and guardrails
- Represents highest maturity level

**Example**: "Deal Screening Agent"

### 6. Template
A reusable document, spreadsheet, or form template.

**Characteristics**:
- Designed for manual or semi-automated use
- Includes instructions
- May include formulas or conditional logic
- Downloadable artifact
- Can be standalone or part of a larger asset

**Example**: "Investment Committee Memo Template"

### 7. Other
Miscellaneous assets: checklists, sample datasets, evaluation scripts, connectors, reference implementations.

**Characteristics**:
- Doesn't fit other categories
- Still provides business value
- Can be standalone

---

## Asset YAML Schema

Every asset must have an `asset.yaml` file defining its metadata.

```yaml
# Required fields
id: "uuid"                                    # Unique identifier
slug: "investment-committee-memo-prompt"      # URL-safe unique identifier
title: "Investment Committee Memo Prompt"     # Display title
type: "prompt"                                # Asset type (prompt, skill, plugin, workflow, agent, template, other)
description: "Prompt for generating comprehensive investment committee memos"
businessProblem: "Investment committee members need well-structured, comprehensive memos..."
businessValue: "Reduces memo preparation time from 4 hours to 30 minutes"

# Industry classification (required)
industry: "investment-banking"                # Industry slug
subindustry: "private-equity"                 # Subindustry slug
businessFunction: "investment-committee-preparation" # Business function slug
personas:
  - "Investment Committee Member"
  - "Portfolio Manager"
  - "Investment Analyst"

# Execution details
difficulty: "intermediate"                    # beginner, intermediate, advanced
prerequisites:
  - "Familiarity with investment terminology"
  - "Access to investment data"
requiredInputs:
  - "Company financial statements"
  - "Market analysis"
outputFormats:
  - "Markdown document"
  - "PDF (via export)"

# Instructions and content
instructions: |
  1. Prepare the executive summary
  2. Gather financial metrics
  3. Analyze key risks
  4. Format and review
  
sourceText: |
  "You are an expert financial analyst. Please create a comprehensive investment committee memo..."
  [Full prompt here - 500-2000 words]

# Dependencies
requiredTools:
  - "ChatGPT"
  - "Microsoft Word"
dependencies:
  - "OpenAI API (if using API)"

tags:
  - "investment-analysis"
  - "committee-memo"
  - "financial-planning"

# Examples
sampleInput: |
  Company: TechStartup Inc.
  Industry: SaaS
  Funding Round: Series B
  Ask: $50M

sampleOutput: |
  [Full example memo output]

# Validation
validationChecklist:
  - "Memo includes executive summary"
  - "All key metrics included"
  - "Risk analysis completed"
  - "Formatting professional"

failureModes:
  - "Insufficient financial data in input"
  - "Unclear company background provided"
  - "Prompt may generate boilerplate without customization"

# Compliance & governance
securityNotes: |
  This prompt may generate financial projections. 
  All outputs require qualified financial review.
  Do not present AI-generated analysis as professional financial advice.

humanReviewRequired: true
runtimeCategory: "minutes"                   # seconds, minutes, hours
costCategory: "low"                          # free, low, medium, high

# Versioning
version: "1.0.0"
verificationStatus: "execution-tested"       # concept, community-submitted, maintainer-reviewed, execution-tested, verified
lastVerifiedAt: "2026-08-01"

# Publishing
author: "Product Team"
authorGitHub: "satishpaul"
license: "MIT"
lastUpdated: "2026-08-01"
publicationStatus: "published"               # draft, pending-review, approved, published

# Relations (optional)
relatedAssets:
  - slug: "investment-memo-builder-skill"
    type: "skill"
    relationship: "maturity-next"
  - slug: "financial-data-retrieval-plugin"
    type: "plugin"
    relationship: "dependency"
  - slug: "investment-committee-workflow"
    type: "workflow"
    relationship: "maturity-next"
  - slug: "deal-screening-agent"
    type: "agent"
    relationship: "maturity-next"

# GitHub reference
repositoryPath: "industries/investment-banking/private-equity/prompts/investment-committee-memo-prompt"

# Metadata
keywords:
  - investment
  - committee
  - memo
  - financial-analysis
```

---

## Asset Folder Structure

Every asset must follow this folder structure:

```
industries/
  [industry]/
    [subindustry]/
      [asset-type]/
        [asset-slug]/
          asset.yaml                 # Metadata (required)
          README.md                  # Overview (required)
          prompt.md                  # Full prompt or instructions (required)
          instructions.md            # Step-by-step guide (if different from prompt)
          examples/
            sample-input.md          # Example input (required)
            sample-output.md         # Example output (required)
            input-example-2.md       # Additional examples (optional)
            output-example-2.md
          screenshots/
            example-1.png            # Screenshot of execution (optional)
            example-2.png
          outputs/
            sample-memo.pdf          # Output artifacts (optional)
            sample-memo.docx
          source/
            source-code.py           # Functional code if applicable
            setup.sh                 # Setup script (optional)
          tests/
            test-asset.ts            # Playwright test (optional)
          CHANGELOG.md               # Version history (optional)
          LICENSE                    # License file (optional)
```

**Example Path**:
```
industries/
  investment-banking/
    private-equity/
      prompts/
        investment-committee-memo-prompt/
          asset.yaml
          README.md
          prompt.md
          instructions.md
          examples/
            sample-input.md
            sample-output.md
          screenshots/
            execution-example.png
          outputs/
            sample-memo.pdf
          CHANGELOG.md
```

---

## Content Guidelines

### Writing Standards

**Tone**: Professional, accessible, specific to industry
- Use industry-appropriate terminology
- Define specialized terms
- Avoid generic descriptions
- Be specific: "Create a Series A investor pipeline analysis" not "Create business analysis"

**Length**:
- Title: 50-100 characters
- Summary: 100-200 characters
- Description: 200-500 words
- Prompt: 500-2000 words
- Instructions: 1000-3000 words

**Structure**:
- Lead with business problem
- Explain business value upfront
- Provide complete, copy-paste-ready content
- Include real examples and expected outputs
- End with validation checklist

### Business Problem Section

Every asset must start with a clear business problem statement:

```
Example (Investment Banking):

Business Problem:
  Investment committee members spend 3-4 hours preparing comprehensive memos
  from raw financial data. The process is error-prone and inconsistent.
  Different team members follow different templates and include different
  analysis. This slows decision-making and reduces memo quality.

Business Value:
  - Reduces memo preparation time from 4 hours to 30 minutes (87% faster)
  - Ensures consistent format and analysis across all memos
  - Reduces errors in calculations and formatting
  - Frees senior analysts to focus on strategic analysis
```

### Sample Input/Output

Always provide realistic, complete examples:

**Good Sample Input** (specific, realistic, complete):
```
Company: HealthTech Solutions Inc.
Industry: Healthcare IT
Funding Round: Series B
Ask: $25M
Revenue: $8M ARR
Burn Rate: $500K/month
Runway: 16 months
Customer Base: 15 enterprise customers
```

**Bad Sample Input** (vague, incomplete):
```
Company information
```

### Validation Checklist

Every asset must include a specific validation checklist:

```
✓ Does the memo include an executive summary?
✓ Are all financial metrics from the input included?
✓ Is the risk analysis section present and detailed?
✓ Is the formatting consistent and professional?
✓ Are all assumptions documented?
✓ Has a qualified financial analyst reviewed the output?
```

### Security & Compliance

Every asset must address security considerations:

**Healthcare Assets**:
```
⚠️ AI-generated health information requires qualified medical professional review.
   Do not present AI-generated content as medical advice or diagnosis.
   Ensure HIPAA compliance when handling patient data.
```

**Financial Assets**:
```
⚠️ AI-generated financial analysis requires qualified financial professional review.
   Do not present AI-generated projections as official financial guidance.
   Ensure compliance with SEC regulations for investor communications.
```

**Legal Assets**:
```
⚠️ AI-generated legal content is not a substitute for professional legal advice.
   Review output with qualified attorney before use.
   Ensure compliance with jurisdiction-specific regulations.
```

---

## Seed Content Strategy

### Target Content Volume

For initial launch:
- **15 industries** (per spec)
- **5 prompts per industry** = 75 prompts total
- **5 skills per industry** = 75 skills total
- **5 plugin concepts per industry** = 75 plugins total
- **Representative workflows** (3-5 per industry)
- **Representative agents** (2-3 per industry)

**Total Initial Assets**: ~375 assets

### Seed Content Principles

1. **Realistic**: Use realistic business problems, not generic examples
2. **Industry-Specific**: Never copy-paste content across industries
3. **Complete**: Every asset is independently useful
4. **Executable**: Prompts can be copy-pasted; skills can be followed
5. **Verifiable**: Include validation checklists for all
6. **Fictional Data**: Use clearly fictional company and data examples

### Seed Content Creation Process

For each industry:

1. **Identify top 5 business problems**
   - Research industry workflows
   - Interview domain experts
   - Prioritize high-frequency tasks

2. **Create 5 prompts**
   - One per business problem
   - Include realistic sample input/output
   - 1000-2000 words each

3. **Create 5 skills**
   - Build on prompts
   - Add step-by-step instructions
   - Include tool-specific configurations

4. **Create 5 plugin concepts**
   - Identify useful integrations
   - Document expected inputs/outputs
   - Clearly label if concept vs. functional

5. **Create representative workflows**
   - Show progression from prompt → skill → workflow
   - Include decision logic
   - Document configuration steps

6. **Create representative agents**
   - Show autonomous decision-making
   - Document tool definitions
   - Include guardrails and monitoring

---

## Example Assets

### Example 1: Investment Committee Memo Prompt (Investment Banking)

**File**: `industries/investment-banking/private-equity/prompts/investment-committee-memo-prompt/asset.yaml`

```yaml
id: "550e8400-e29b-41d4-a716-446655440000"
slug: "investment-committee-memo-prompt"
title: "Investment Committee Memo Prompt"
type: "prompt"
description: "Prompt for generating comprehensive investment committee memos from financial data"
businessProblem: "Investment committee members spend 3-4 hours preparing comprehensive memos. The process is inconsistent and error-prone."
businessValue: "Reduces preparation time to 30 minutes; ensures consistency; improves quality"
industry: "investment-banking"
subindustry: "private-equity"
businessFunction: "investment-committee-preparation"
personas: ["Investment Committee Member", "Portfolio Manager", "Investment Analyst"]
difficulty: "intermediate"
prerequisites: ["Familiarity with investment terminology", "Access to company financials"]
requiredInputs: ["Company financials", "Market analysis", "Investment thesis"]
outputFormats: ["Markdown document", "PDF"]
instructions: |
  1. Gather company financial statements
  2. Prepare market analysis
  3. Copy the prompt below into your LLM (ChatGPT, Claude, etc.)
  4. Paste your investment data into the input section
  5. Review the generated memo for accuracy
  6. Format as needed for your committee
  7. Have a financial professional review before presentation
sourceText: |
  "You are an expert investment analyst. Create a comprehensive investment committee memo.
   [Full prompt text - 1500 words]"
requiredTools: ["ChatGPT", "Microsoft Word"]
dependencies: ["OpenAI API"]
tags: ["investment", "memo", "committee", "financial"]
sampleInput: |
  Company: TechVenture Inc.
  [Full example input]
sampleOutput: |
  # Investment Committee Memo - TechVenture Inc.
  [Full example output]
validationChecklist:
  - "Executive summary included"
  - "Financial metrics present and accurate"
  - "Risk analysis documented"
  - "Recommendation clear"
failureModes:
  - "Insufficient data in input"
  - "LLM may hallucinate metrics"
securityNotes: "All financial projections require qualified review. Not professional financial advice."
humanReviewRequired: true
runtimeCategory: "minutes"
costCategory: "low"
version: "1.0.0"
verificationStatus: "execution-tested"
lastVerifiedAt: "2026-08-01"
author: "Product Team"
license: "MIT"
relatedAssets:
  - slug: "investment-memo-builder-skill"
    type: "skill"
    relationship: "maturity-next"
repositoryPath: "industries/investment-banking/private-equity/prompts/investment-committee-memo-prompt"
```

---

## Maturity Model

Assets can represent increasing levels of automation:

```
Prompt
├── Business problem clearly stated
├── Sample input/output provided
├── Can be copy-pasted into LLM
└── Estimated time: 30 minutes

    ↓ (maturity-next relationship)

Skill
├── Builds on prompt
├── Step-by-step instructions
├── Tool-specific format
├── Estimated time: 1-2 hours
└── Can be followed by anyone

    ↓ (maturity-next relationship)

Plugin
├── Connects external systems
├── Requires API configuration
├── Integrated with workflow
├── Estimated time: 2-4 hours
└── Reusable across workflows

    ↓ (maturity-next relationship)

Workflow
├── Orchestrates multiple assets
├── Includes conditional logic
├── Partially automated
├── Estimated time: 4-8 hours
└── Fully deployable system

    ↓ (maturity-next relationship)

Agent
├── Autonomous decision-making
├── Uses LLM reasoning
├── Includes guardrails
├── Estimated time: 8+ hours
└── Continuous operation possible
```

**Display Related Assets Progression**:
Every asset page shows the progression for that use case.

Example: Investment Committee Memo
```
Prompt: Investment Committee Memo Prompt
├─ Skill: Investment Memo Builder
├─ Plugin: Financial Data Retrieval
├─ Workflow: Investment Committee Preparation
└─ Agent: Deal Screening Agent
```

---

## Content Backlog

### Phase 1 (Launch): Seed Content (375 assets)
- 15 industries × 25 assets per industry
- 75 prompts, 75 skills, 75 plugin concepts
- 45 workflows (3 per industry)
- 30 agents (2 per industry)
- Status: Ready for creation

### Phase 2 (Months 2-3): Extended Seed Content
- Expand each industry to 50 assets
- 150 prompts, 150 skills, 150 plugins
- 60 workflows
- 45 agents
- Total: ~600 assets

### Phase 3 (Months 4-6): Community Content
- Open submissions workflow
- Target: 100 community submissions
- Estimated assets: +200
- Total: ~800 assets

### Phase 4 (Ongoing): Maintenance & Growth
- Monthly seed content additions
- Quarterly industry expansions
- Continuous community submissions
- Target: 1000+ assets by end of Year 1

### Content Roadmap

**Highest Priority** (Phase 1):
1. Investment Banking (PE, hedge funds)
2. Legal (contract review, legal research)
3. Hospitals (claim denials, prior auth)
4. Consulting (proposal development)
5. Commercial Banking

**Medium Priority** (Phase 1-2):
6-12. Commercial Contractors through IT Consulting

**Lower Priority** (Phase 2):
13-15. General Office Tools, Personal Tools

### Content Creation Effort Estimation

| Type | Effort | Prompts | Skills | Plugins |
|------|--------|---------|--------|---------|
| Simple | 2 hours | 20 | 15 | 25 |
| Medium | 4 hours | 12 | 8 | 15 |
| Complex | 6+ hours | 5 | 2 | 5 |

**Estimated time to create seed content**: 450-600 hours (accounting for research, review, testing)

---

## Verification Status Labels

Every asset has a verification status:

```
🔷 Concept
   └─ Idea proposed, not yet tested
      Use case: New plugin concepts, early-stage assets

📋 Community Submitted  
   └─ Submitted by community member
   └─ Awaiting review
      Use case: User-contributed assets

✅ Maintainer Reviewed
   └─ Reviewed by subject matter expert
   └─ Validated for accuracy and completeness
      Use case: Officially endorsed assets

▶️ Execution Tested
   └─ Tested by running through execution environment
   └─ Screenshots and outputs captured
      Use case: Prompts and skills with evidence

🏆 Verified
   └─ Fully tested and maintained
   └─ Regularly updated and re-verified
      Use case: Official, high-confidence assets
```

---

## Asset Validation Rules

### Required Fields Check
Every asset must have:
- ✓ Title
- ✓ Description
- ✓ Asset type
- ✓ Industry and subindustry
- ✓ Business problem statement
- ✓ Business value statement
- ✓ Sample input
- ✓ Sample output
- ✓ Validation checklist
- ✓ Security/compliance notes

### Format Validation
- ✓ Slug format: lowercase, hyphens only, unique
- ✓ YAML is valid and parseable
- ✓ Markdown files are valid
- ✓ All referenced files exist
- ✓ Asset type is valid
- ✓ Industry/subindustry exist in taxonomy

### Content Validation
- ✓ No generic descriptions (avoid "Create business analysis for X industry")
- ✓ Business problem is specific (3+ sentences)
- ✓ Business value is quantified (time saved, cost reduced, etc.)
- ✓ Sample input is complete and realistic
- ✓ Sample output matches input context
- ✓ Validation checklist has 5+ items
- ✓ Security notes present for regulated industries

### Duplicate Check
- ✓ No duplicate slugs
- ✓ No duplicate titles
- ✓ No duplicated content (slight variations OK if industry-specific)

---

## Glossary

| Term | Definition |
|------|-----------|
| **Business Problem** | The specific challenge or inefficiency an asset helps solve |
| **Business Value** | Quantified benefits: time saved, cost reduced, quality improved |
| **Personas** | Intended users of the asset |
| **Maturity Model** | Progression from prompt → skill → plugin → workflow → agent |
| **Verification Status** | Confidence level in the asset's accuracy and reliability |
| **Execution Evidence** | Screenshots, output files, and metadata from running the asset |
| **Seed Content** | Initial curated content for platform launch |
| **Sample Input/Output** | Example data showing how to use an asset |

