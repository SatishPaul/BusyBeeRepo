# BusyBeeRepo.com Architecture

**Version**: 1.0  
**Created**: 2026-08-04  
**Status**: Design Reference

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture Diagram](#architecture-diagram)
4. [Frontend Architecture](#frontend-architecture)
5. [Backend Architecture](#backend-architecture)
6. [Database Schema](#database-schema)
7. [Data Flow Patterns](#data-flow-patterns)
8. [Deployment Architecture](#deployment-architecture)
9. [Security Architecture](#security-architecture)
10. [Scalability Considerations](#scalability-considerations)

---

## System Overview

BusyBeeRepo.com is a full-stack web application that serves as a discovery and publishing platform for reusable AI assets.

**Core Responsibilities**:
- Asset search and discovery
- Asset detail presentation with comprehensive documentation
- User authentication and role-based access
- Community contributions and moderation workflow
- GitHub repository synchronization
- Execution evidence and screenshot storage

**Key Constraints**:
- Never display fake data or counts
- Only show "Run" button when asset has executable adapter
- Require approval before publishing user submissions
- Sanitize screenshots before storing
- Preserve GitHub as canonical source of truth

---

## Technology Stack

### Frontend

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 14 App Router | Server-side rendering, API routes, optimal build |
| **UI Library** | React 18 | Component-based UI |
| **Styling** | Tailwind CSS + shadcn/ui | Responsive design system, accessible components |
| **Type Safety** | TypeScript (strict) | Compile-time type checking |
| **Icons** | Lucide React | Consistent icon system |
| **Charts** | Recharts (optional) | Rating distribution, usage metrics |
| **Code Highlighting** | Shiki | Syntax highlighting for prompts/code |
| **Forms** | React Hook Form + Zod | Type-safe form validation |

### Backend

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **API** | Next.js API Routes | RESTful endpoints |
| **Authentication** | Supabase Auth | Email/OAuth identity |
| **Database** | PostgreSQL (Supabase) | Persistent data storage |
| **File Storage** | Supabase Storage | Screenshots, outputs, uploads |
| **Search** | PostgreSQL Full-Text Search | Fast asset search (expandable to Algolia) |
| **GitHub API** | Octokit | Repository metadata, PR creation |

### Testing & DevOps

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **E2E Testing** | Playwright | User journey testing, screenshot evidence |
| **Code Quality** | ESLint + Prettier | Linting and formatting |
| **CI/CD** | GitHub Actions | Automated testing and deployment |
| **Deployment** | Vercel | Serverless hosting with automatic CI/CD |
| **Monitoring** | Vercel Analytics + Error tracking | Performance and error monitoring |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER BROWSER                               │
│  (Desktop/Mobile/Tablet)                                        │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────────────┐
│              VERCEL CDN & LOAD BALANCER                          │
│  (Global edge locations, caching, DDoS protection)              │
└──────────────────┬──────────────────────────────────────────────┘
                   │
         ┌─────────┴─────────┐
         ↓                   ↓
    ┌─────────┐         ┌─────────────────────┐
    │  Static │         │  Next.js Function   │
    │  Cache  │         │  (API + SSR)        │
    │ (CSS,   │         │                     │
    │  JS,    │         │  ┌──────────────┐   │
    │ Images) │         │  │ API Routes   │   │
    └─────────┘         │  │ - /api/search│   │
                        │  │ - /api/auth  │   │
                        │  │ - /api/rating│   │
                        │  └──────────────┘   │
                        │                     │
                        │  ┌──────────────┐   │
                        │  │ Pages/Routes │   │
                        │  │ - /search    │   │
                        │  │ - /assets/   │   │
                        │  │ - /industries│   │
                        │  └──────────────┘   │
                        └─────────┬───────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 ↓                ↓                ↓
        ┌──────────────┐  ┌──────────────┐  ┌──────────┐
        │  Supabase    │  │  GitHub API  │  │ Upstash  │
        │  PostgreSQL  │  │              │  │ Redis    │
        │              │  │ - Repo fetch │  │ (Cache)  │
        │ - Assets     │  │ - PR create  │  │          │
        │ - Users      │  │ - Commits    │  │ (Optional)
        │ - Ratings    │  │ - Search     │  │          │
        │ - Comments   │  └──────────────┘  └──────────┘
        │ - Bookmarks  │
        │ - Subm.      │
        └──────────────┘
              │
              ↓
        ┌──────────────┐
        │  S3 / CDN    │
        │              │
        │ - Screenshots│
        │ - Outputs    │
        │ - Artifacts  │
        └──────────────┘
```

---

## Frontend Architecture

### Page Structure (Next.js App Router)

```
app/
├── layout.tsx                    # Root layout with header/footer
├── page.tsx                      # Homepage
├── not-found.tsx                 # 404 page
├── error.tsx                     # Error boundary
│
├── (auth)/
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Signup page
│   └── forgot-password/page.tsx # Password reset
│
├── search/
│   └── page.tsx                 # Search results
│
├── industries/
│   ├── page.tsx                 # Industry directory
│   └── [slug]/page.tsx          # Industry landing page
│
├── [assetType]/                 # prompts, skills, plugins, workflows, agents
│   └── page.tsx                 # Asset type directory
│
├── assets/
│   └── [slug]/
│       ├── page.tsx             # Asset detail page
│       └── layout.tsx           # Asset tabs layout
│
├── submit/
│   └── page.tsx                 # Submission form
│
├── profile/
│   ├── page.tsx                 # User profile
│   ├── settings/page.tsx        # Profile settings
│   └── bookmarks/page.tsx       # Bookmarks library
│
├── dashboard/
│   ├── review/page.tsx          # Reviewer dashboard
│   └── admin/page.tsx           # Admin dashboard
│
└── api/
    ├── search/route.ts          # Search endpoint
    ├── assets/route.ts          # Asset CRUD
    ├── bookmarks/route.ts       # Bookmark management
    ├── ratings/route.ts         # Rating management
    ├── comments/route.ts        # Comment management
    └── submissions/route.ts     # Submission handling
```

### Component Hierarchy

```
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   │   └── NavItem[] (Industries, Prompts, Skills, etc.)
│   ├── SearchBox
│   ├── ThemeToggle
│   └── UserMenu
└── Footer
    ├── Links
    ├── Copyright
    └── SocialLinks

HomePage
├── HeroSection
│   ├── SearchBox
│   └── RotatingTips
└── BrowseSection
    ├── IndustryGrid
    │   └── IndustryCard[]
    ├── TrendingSection
    │   └── AssetCard[]
    └── RecentlyAddedSection
        └── AssetCard[]

SearchResultsPage
├── SearchBar
├── Sidebar (Desktop)
│   └── FilterGroup[]
│       ├── FilterCheckbox[]
├── MobileFilterDrawer (Mobile)
│   └── FilterGroup[]
├── SortDropdown
└── ResultsList
    ├── ResultCard[]
    ├── PaginationControls
    └── EmptyState

AssetDetailPage
├── AssetHeader
│   ├── Breadcrumbs
│   ├── Title & Badge
│   ├── Metadata
│   └── ActionButtons
├── TabNavigation
│   ├── Overview
│   ├── Instructions
│   ├── Source
│   ├── Examples
│   ├── Screenshots
│   ├── Dependencies
│   ├── Security
│   ├── VersionHistory
│   ├── Comments
│   └── RelatedAssets
└── Sidebar
    ├── RelatedAssets (MaturityModel)
    ├── SecurityNotice (conditional)
    └── VerificationBadge
```

### Styling Strategy

**Design Tokens**:
```typescript
// lib/constants/design-tokens.ts
export const colors = {
  primary: {
    navy: '#1a2332',
    gold: '#f4b942',
  },
  assetType: {
    prompt: '#10b981',    // green
    skill: '#3b82f6',     // blue
    plugin: '#a855f7',    // purple
    workflow: '#ec4899',  // pink
    agent: '#f97316',     // orange
    template: '#06b6d4',  // teal
    other: '#6b7280',     // gray
  },
  semantic: {
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};
```

**Responsive Breakpoints**:
```typescript
// Tailwind default breakpoints
sm: 640px    // Mobile
md: 768px    // Tablet
lg: 1024px   // Desktop
xl: 1280px   // Large desktop
2xl: 1536px  // Ultra-wide
```

**Dark Mode**:
- Implemented via `next-themes` + Tailwind `dark:` prefix
- Persisted to localStorage
- System preference detection on first visit

---

## Backend Architecture

### API Endpoints

**Search**
```
GET /api/search
  Query Parameters:
    q: string                    # Search query
    industry?: string            # Filter by industry slug
    subindustry?: string         # Filter by subindustry slug
    type?: string                # Filter by asset type (prompt, skill, etc.)
    difficulty?: string          # Filter by difficulty (beginner, intermediate, advanced)
    tool?: string                # Filter by tool/platform
    tag?: string                 # Filter by tag
    sort?: string                # Sort order (relevance, recent, downloads, rating)
    limit?: number (default 20)  # Results per page
    offset?: number (default 0)  # Pagination offset

  Response:
  {
    results: [
      {
        id: uuid,
        title: string,
        type: AssetType,
        industry: string,
        subindustry: string,
        summary: string,
        author: string,
        rating: number,
        downloadCount: number,
        verificationStatus: VerificationStatus,
        matchedFields: string[],
        relevanceScore: number,
      }
    ],
    total: number,
    hasMore: boolean,
  }
```

**Assets**
```
GET /api/assets/{id}           # Get asset detail
GET /api/assets/{id}/versions  # Get version history
POST /api/assets               # Create asset (admin only)
PATCH /api/assets/{id}         # Update asset (owner/admin)
DELETE /api/assets/{id}        # Delete asset (admin only)
```

**User Features**
```
POST /api/bookmarks            # Bookmark an asset
DELETE /api/bookmarks/{id}     # Unbookmark
GET /api/bookmarks             # List user bookmarks

POST /api/ratings              # Rate an asset
GET /api/ratings/{assetId}     # Get ratings for asset

POST /api/comments             # Add comment
DELETE /api/comments/{id}      # Delete comment (owner/admin)
GET /api/comments/{assetId}    # Get comments for asset
```

**Submissions**
```
POST /api/submissions          # Submit new asset
GET /api/submissions/{id}      # Get submission status
PATCH /api/submissions/{id}    # Update submission (owner only)

GET /api/dashboard/submissions # List submissions (reviewer)
POST /api/dashboard/approve    # Approve submission (reviewer)
POST /api/dashboard/reject     # Reject submission (reviewer)
```

### Authentication Flow

```
┌─────────────────────────────────────────┐
│  User visits login page                 │
└────────────────────┬────────────────────┘
                     ↓
         ┌──────────────────────┐
         │ Email/Password Form  │
         │ (or GitHub OAuth)    │
         └──────────────────────┘
                     ↓
         ┌──────────────────────┐
         │ Supabase Auth        │
         │ - Validate creds     │
         │ - Create session     │
         └──────────────────────┘
                     ↓
         ┌──────────────────────┐
         │ Create/Update User   │
         │ in DB                │
         └──────────────────────┘
                     ↓
         ┌──────────────────────┐
         │ Set Session Token    │
         │ (HTTP-only cookie)   │
         └──────────────────────┘
                     ↓
         ┌──────────────────────┐
         │ Redirect to /profile │
         │ or referrer          │
         └──────────────────────┘
```

### Data Fetching Strategy

**Server-Side Rendering (SSR)**:
- Industry pages: Fetch asset counts, featured assets
- Search results: Fetch results based on query
- Asset detail pages: Fetch full asset with all tabs
- Homepage: Fetch trending/recent assets

**Client-Side Data Fetching**:
- User bookmarks (after auth)
- User ratings (after auth)
- Comments (paginated as user scrolls)
- Filter options (cached)

**Caching Strategy**:
```
Industry pages:          ISR (Incremental Static Regeneration)
                         Revalidate: 3600 seconds (1 hour)

Asset detail pages:      ISR
                         Revalidate: 300 seconds (5 minutes)

Search results:          Dynamic (no caching)
                         Perform query on demand

User data (bookmarks):   Dynamic
                         No caching (user-specific)

Search index:            Cache in Redis (optional)
                         Invalidate on asset update
```

---

## Database Schema

### Core Tables

**industries**
```sql
CREATE TABLE industries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon_name VARCHAR(50),              -- Lucide icon name
  published_asset_count INT DEFAULT 0, -- Real, not fake
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT unique_industry_slug UNIQUE (slug)
);

CREATE INDEX idx_industries_slug ON industries(slug);
```

**subindustries**
```sql
CREATE TABLE subindustries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  industry_id UUID NOT NULL REFERENCES industries(id),
  slug VARCHAR(100) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT unique_subindustry_slug UNIQUE (industry_id, slug)
);

CREATE INDEX idx_subindustries_industry_id ON subindustries(industry_id);
```

**business_functions**
```sql
CREATE TABLE business_functions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT unique_function_slug UNIQUE (slug)
);

CREATE INDEX idx_business_functions_slug ON business_functions(slug);
```

**assets**
```sql
CREATE TABLE assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary TEXT,
  description TEXT,
  business_problem TEXT,
  business_value TEXT,
  asset_type VARCHAR(50) NOT NULL, -- prompt, skill, plugin, workflow, agent, template, other
  industry_id UUID NOT NULL REFERENCES industries(id),
  subindustry_id UUID REFERENCES subindustries(id),
  business_function_id UUID REFERENCES business_functions(id),
  personas TEXT[],                 -- Array of intended personas
  difficulty VARCHAR(50),          -- beginner, intermediate, advanced
  prerequisites TEXT[],
  required_inputs TEXT[],
  output_formats TEXT[],
  instructions TEXT,
  source_text TEXT,                -- Full prompt or source code
  required_tools TEXT[],
  dependencies TEXT[],
  tags TEXT[],
  sample_input TEXT,
  sample_output TEXT,
  validation_checklist TEXT,
  failure_modes TEXT,
  security_notes TEXT,
  human_review_requirements TEXT,
  runtime_category VARCHAR(50),    -- seconds, minutes, hours
  cost_category VARCHAR(50),       -- free, low, medium, high
  author_id UUID NOT NULL REFERENCES users(id),
  version VARCHAR(20) DEFAULT '1.0.0',
  verification_status VARCHAR(50) DEFAULT 'concept', -- concept, community-submitted, maintainer-reviewed, execution-tested, verified
  last_verified_at TIMESTAMP,
  repository_path VARCHAR(500),    -- GitHub path: industries/investment-banking/private-equity/prompts/...
  download_count INT DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  publication_status VARCHAR(50) DEFAULT 'draft', -- draft, pending-review, approved, published
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT valid_asset_type CHECK (asset_type IN ('prompt', 'skill', 'plugin', 'workflow', 'agent', 'template', 'other')),
  CONSTRAINT unique_asset_slug UNIQUE (slug)
);

CREATE INDEX idx_assets_slug ON assets(slug);
CREATE INDEX idx_assets_industry ON assets(industry_id);
CREATE INDEX idx_assets_type ON assets(asset_type);
CREATE INDEX idx_assets_verification ON assets(verification_status);
CREATE INDEX idx_assets_published ON assets(is_published);

-- Full-text search index
CREATE INDEX idx_assets_search ON assets USING GIN (
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(tags::text, ''))
);
```

**users**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'anonymous', -- anonymous, registered, contributor, reviewer, admin
  profile_name VARCHAR(255),
  avatar_url VARCHAR(500),
  bio TEXT,
  github_username VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT valid_role CHECK (role IN ('anonymous', 'registered', 'contributor', 'reviewer', 'admin'))
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

**bookmarks**
```sql
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  asset_id UUID NOT NULL REFERENCES assets(id),
  created_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT unique_bookmark UNIQUE (user_id, asset_id)
);

CREATE INDEX idx_bookmarks_user ON bookmarks(user_id);
CREATE INDEX idx_bookmarks_asset ON bookmarks(asset_id);
```

**ratings**
```sql
CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  asset_id UUID NOT NULL REFERENCES assets(id),
  score INT NOT NULL CHECK (score >= 1 AND score <= 5),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT unique_rating UNIQUE (user_id, asset_id)
);

CREATE INDEX idx_ratings_asset ON ratings(asset_id);
CREATE INDEX idx_ratings_user ON ratings(user_id);
```

**comments**
```sql
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  asset_id UUID NOT NULL REFERENCES assets(id),
  parent_comment_id UUID REFERENCES comments(id), -- For threaded replies
  text TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT check_non_empty_text CHECK (text != '')
);

CREATE INDEX idx_comments_asset ON comments(asset_id);
CREATE INDEX idx_comments_user ON comments(user_id);
CREATE INDEX idx_comments_approved ON comments(is_approved);
```

**submissions**
```sql
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  asset_type VARCHAR(50) NOT NULL,
  industry_id UUID NOT NULL REFERENCES industries(id),
  subindustry_id UUID REFERENCES subindustries(id),
  business_function_id UUID REFERENCES business_functions(id),
  submitter_id UUID NOT NULL REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'pending', -- pending, in-review, requested-changes, approved, published
  business_problem TEXT,
  business_value TEXT,
  description TEXT,
  prerequisites TEXT,
  instructions TEXT,
  source TEXT,
  sample_input TEXT,
  sample_output TEXT,
  security_considerations TEXT,
  human_review_requirements TEXT,
  tools TEXT[],
  tags TEXT[],
  github_profile VARCHAR(255),
  license_confirmed BOOLEAN DEFAULT false,
  reviewer_id UUID REFERENCES users(id),
  review_comments TEXT,
  submitted_at TIMESTAMP DEFAULT now(),
  reviewed_at TIMESTAMP,
  published_asset_id UUID REFERENCES assets(id),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT valid_submission_status CHECK (status IN ('pending', 'in-review', 'requested-changes', 'approved', 'published'))
);

CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_submitter ON submissions(submitter_id);
CREATE INDEX idx_submissions_reviewer ON submissions(reviewer_id);
```

**verification_events**
```sql
CREATE TABLE verification_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID NOT NULL REFERENCES assets(id),
  verification_status VARCHAR(50) NOT NULL, -- concept, community-submitted, maintainer-reviewed, execution-tested, verified
  verified_by UUID REFERENCES users(id),
  notes TEXT,
  created_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT valid_status CHECK (verification_status IN ('concept', 'community-submitted', 'maintainer-reviewed', 'execution-tested', 'verified'))
);

CREATE INDEX idx_verification_events_asset ON verification_events(asset_id);
CREATE INDEX idx_verification_events_created ON verification_events(created_at DESC);
```

**execution_events**
```sql
CREATE TABLE execution_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID NOT NULL REFERENCES assets(id),
  executed_by UUID REFERENCES users(id), -- NULL if executed by automated test
  execution_tool VARCHAR(255),           -- playwright, lambda, function, manual, etc.
  execution_date TIMESTAMP,
  asset_version VARCHAR(20),
  status VARCHAR(50), -- success, failure, timeout, error
  screenshot_count INT DEFAULT 0,
  output_artifact_count INT DEFAULT 0,
  screenshot_sanitization_status VARCHAR(50), -- pending-review, approved, rejected
  execution_duration_ms INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT now(),
  
  CONSTRAINT valid_execution_status CHECK (status IN ('success', 'failure', 'timeout', 'error'))
);

CREATE INDEX idx_execution_events_asset ON execution_events(asset_id);
CREATE INDEX idx_execution_events_created ON execution_events(created_at DESC);
```

---

## Data Flow Patterns

### Search Flow

```
User Input (search box)
  ↓
/api/search?q=...&industry=...&type=...
  ↓
PostgreSQL FTS Query
  - Tokenize search query
  - Apply synonym dictionary
  - Match against tsvector
  - Filter by industry, type, etc.
  - Sort by relevance
  ↓
Return top 20 results
  ↓
Client renders results
  ↓
User clicks asset
  ↓
Navigate to /assets/[slug]
```

### Asset Detail Flow

```
GET /assets/[slug]
  ↓
Next.js Server Component
  - Fetch asset from DB
  - Fetch related assets
  - Fetch ratings summary
  - Fetch comments (paginated)
  ↓
Render AssetDetail component
  - Show all 27 content sections
  - Lazy load comments as user scrolls
  ↓
User interaction
  - Click "Copy" → Copy prompt to clipboard
  - Click "Bookmark" → POST /api/bookmarks
  - Click "Rate" → POST /api/ratings
  - Add comment → POST /api/comments
```

### Submission & Moderation Flow

```
User fills /submit form
  ↓
Validate form fields
  ↓
Upload files to Supabase Storage
  ↓
POST /api/submissions
  - Insert submission record
  - Set status: "pending"
  - Send confirmation email
  ↓
Submission appears in /dashboard/review
  (only for reviewers)
  ↓
Reviewer reviews submission
  - Checks content quality
  - Validates asset structure
  - Requests changes OR approves
  ↓
If approved:
  - Generate GitHub PR template
  - Convert to asset folder structure
  - Display PR preview
  ↓
Manual merge or auto-merge (if trusted)
  ↓
Asset published to BusyBeeRepo.com
  - Create asset record
  - Link to submission
  - Set status: "published"
  - Update asset count
```

### GitHub Sync Flow

```
Daily sync job (0:00 UTC)
  ↓
Fetch industries/ folder from GitHub
  ↓
For each asset folder:
  - Read asset.yaml
  - Validate structure
  - Check if asset exists in DB
  ↓
If new:
  - Create asset record
  - Extract version info from git commit
  ↓
If exists:
  - Compare metadata
  - Update if changed
  - Create version entry
  ↓
If deleted in GitHub:
  - Mark as archived
  - Don't delete from DB
  ↓
Log sync event
  - New assets: X
  - Updated: Y
  - Deleted: Z
```

---

## Deployment Architecture

### Vercel Deployment

```
Git Repository (main branch)
  ↓
GitHub Actions
  - Run tests
  - Run linting
  - Build Next.js app
  ↓
Vercel Automatic Deployment
  - Deploy to vercel.com
  - Create preview deployments for PRs
  - Production deployment on main
  ↓
Vercel Edge Network
  - Cache static assets
  - Route to nearest edge location
  - Serve assets globally
  ↓
Next.js Serverless Functions
  - Execute API routes
  - Serve dynamic pages
  - Process database queries
  ↓
Supabase Backend
  - PostgreSQL database
  - Authentication
  - File storage
```

### Environment Separation

```
Development (localhost)
  - Local PostgreSQL or Supabase dev instance
  - No authentication required (development mode)
  - Rate limiting disabled
  - Error logging to console

Staging (Preview Deployments)
  - Pull requests generate unique preview URLs
  - Full database and auth integration
  - Rate limiting enabled
  - Error logging to Sentry

Production (BusyBeeRepo.com)
  - Vercel production domain
  - Full Supabase integration
  - Rate limiting enabled
  - Error logging and monitoring enabled
  - CDN caching
  - Performance monitoring
```

---

## Security Architecture

### Authentication & Authorization

**Levels of Access**:
1. Anonymous → Search, view, browse
2. Registered → Bookmark, rate, comment, submit
3. Contributor → Edit own submissions
4. Reviewer → Approve submissions, validate
5. Admin → Full access

**Implementation**:
- Supabase Auth handles identity
- Middleware checks auth tokens
- Server components verify roles
- API endpoints check permissions before responding
- Row-Level Security (RLS) policies on database

### Data Protection

**Sensitive Data**:
- API keys → Environment variables (Vercel secrets)
- Database credentials → Supabase managed
- User passwords → Supabase Auth hashed
- Session tokens → HTTP-only cookies

**Screenshot Sanitization**:
- Detect and mask: passwords, tokens, API keys, PII
- Require manual approval before publishing
- Store sanitization status in DB
- Never store confidential customer data

**Input Validation**:
- All form inputs validated with Zod
- SQL injection prevented by parameterized queries
- XSS prevented by React escaping + Content-Security-Policy
- CSRF prevented by SameSite cookies

### Security Headers

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'",
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
];
```

---

## Scalability Considerations

### Performance Optimizations

1. **Image Optimization**
   - Use next/image with responsive sizes
   - Modern formats (webp) with fallback
   - Lazy loading for below-fold images

2. **Code Splitting**
   - Automatic route-based code splitting
   - Dynamic imports for heavy components
   - Reduce initial bundle size

3. **Database Optimization**
   - Indexes on frequently queried columns
   - Full-text search via PostgreSQL GIN index
   - Connection pooling via Supabase
   - Paginated results (no N+1 queries)

4. **Caching Strategy**
   - ISR (Incremental Static Regeneration) for asset pages
   - HTTP caching headers
   - Optional Redis cache for search results
   - CDN caching via Vercel

5. **Search Scaling**
   - Start with PostgreSQL full-text search
   - Migrate to Algolia if needed
   - Build indexed search data nightly
   - Support typo tolerance via fuzzy matching

### Horizontal Scaling

```
Current State (Vercel Serverless)
  ↓
As traffic grows:
  1. Vercel auto-scales function invocations
  2. Database read replicas for read-heavy queries
  3. Redis caching for frequently accessed data
  4. Separate API from web tier (optional)
  5. Algolia for search if PostgreSQL FTS insufficient
  6. Static generation (ISR) for maximum cache hit rate
```

### Bottleneck Mitigation

| Potential Bottleneck | Solution |
|----------------------|----------|
| **Database** | Connection pooling, indexes, read replicas |
| **Search** | PostgreSQL FTS → Algolia migration path |
| **File storage** | Supabase Storage with CDN |
| **API rate limits** | GitHub API → GitHub App with higher limits |
| **Screenshot storage** | S3 with lifecycle policies, automatic cleanup |

---

## Decision Records

See `docs/decisions/` for detailed ADRs:
- `adr-001-nextjs.md` - Why Next.js 14 App Router
- `adr-002-supabase.md` - Why Supabase PostgreSQL
- `adr-003-vercel.md` - Why Vercel deployment
- `adr-004-search-strategy.md` - PostgreSQL FTS vs Algolia
- `adr-005-asset-versioning.md` - How to version assets

---

## Monitoring & Observability

### Metrics to Track

1. **Performance**
   - Page load time (Core Web Vitals)
   - API response time
   - Database query performance

2. **Usage**
   - Page views
   - Search queries
   - Asset downloads
   - Submission rate

3. **Quality**
   - Error rate
   - 404 rate
   - Asset verification status
   - User engagement

### Tools

- **Vercel Analytics** - Performance metrics
- **Sentry** (optional) - Error tracking
- **Supabase logs** - Database query logging
- **Custom events** - Submission submissions, ratings, etc.

---

## Glossary

| Term | Definition |
|------|-----------|
| **Asset** | A reusable AI prompt, skill, plugin, workflow, template, or other tool |
| **Verification Status** | Level of testing: Concept, Community-submitted, Maintainer-reviewed, Execution-tested, Verified |
| **ISR** | Incremental Static Regeneration (Next.js feature for scheduled revalidation) |
| **RLS** | Row-Level Security (PostgreSQL feature for fine-grained access control) |
| **GIN Index** | Generalized Inverted Index (PostgreSQL full-text search index) |
| **Sanitization** | Removing sensitive data (passwords, API keys, PII) from screenshots |
| **Execution Evidence** | Screenshots, output artifacts, and metadata from running an asset |
