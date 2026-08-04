# BusyBeeRepo Build Checklist

**Last Updated**: 2026-08-04  
**Status**: Not Started

This checklist provides granular tasks for each implementation phase. Check off items as they are completed with evidence (commit hash, PR link, or test results).

---

## Phase 1: Foundation & UI Framework

### Project Setup
- [ ] Initialize Next.js 14 project with `create-next-app`
  - Evidence: `git log --oneline | head -1`
- [ ] Configure TypeScript in strict mode
  - Evidence: `tsconfig.json` shows `strict: true`
- [ ] Set up ESLint and Prettier
  - Evidence: `.eslintrc.json` and `.prettierrc` exist
- [ ] Create `.env.example` with all required variables
  - Evidence: File exists and contains placeholders

### Styling & Components
- [ ] Install and configure Tailwind CSS
  - Evidence: `tailwind.config.ts` exists
- [ ] Install shadcn/ui and create component registry
  - Evidence: `components/ui/` folder populated
- [ ] Create design token system
  - Evidence: `lib/constants/design-tokens.ts` with colors, spacing, typography
- [ ] Set up light/dark theme support
  - Evidence: `next-themes` installed and `ThemeProvider` in root layout
- [ ] Create `ThemeToggle` component
  - Evidence: Component file exists and renders toggle button
- [ ] Create basic components:
  - [ ] `Button.tsx` (extends shadcn Button)
  - [ ] `Card.tsx` (layout card)
  - [ ] `Container.tsx` (max-width wrapper)
  - [ ] `Grid.tsx` (responsive grid)
  - Evidence: All files in `components/` directory

### Layout Components
- [ ] Create `Header.tsx` with:
  - [ ] Logo
  - [ ] Navigation menu (Industries, Prompts, Skills, Plugins, Workflows, Agents, Community, GitHub, Submit)
  - [ ] Search icon
  - [ ] Theme toggle
  - [ ] User menu (Login button for now)
  - Evidence: Component renders all elements, responsive on desktop and mobile
- [ ] Create `Footer.tsx` with:
  - [ ] Links (About, Contribution Guide, GitHub, Security, Privacy, Terms, Accessibility)
  - [ ] Company information
  - [ ] Social links
  - Evidence: Component renders, matches design mockup
- [ ] Create responsive `Navigation.tsx`
  - Evidence: Mobile hamburger menu, desktop menu bar
- [ ] Create `MobileNav.tsx` with collapsible drawer
  - Evidence: Drawer opens/closes on mobile
- [ ] Create root layout (`app/layout.tsx`)
  - Evidence: Header and footer render on all pages

### Pages & Routes
- [ ] Create homepage (`app/page.tsx`)
  - [ ] Hero section with search box
  - [ ] Placeholder for industry grid (no dynamic data yet)
  - [ ] Placeholder for trending section
  - Evidence: Page renders, search box visible
- [ ] Create 404 page (`app/not-found.tsx`)
  - Evidence: Navigating to `/nonexistent` shows 404
- [ ] Create error page (`app/error.tsx`)
  - Evidence: Error boundary catches errors
- [ ] Create placeholder pages:
  - [ ] `/about` → About page
  - [ ] `/contribution-guide` → Contribution guidelines
  - [ ] `/search` → Search results (placeholder)
  - [ ] `/industries` → Industries directory (placeholder)
  - Evidence: All routes accessible without errors

### Responsive Design
- [ ] Test all pages on:
  - [ ] Desktop (1920px)
  - [ ] Tablet (768px)
  - [ ] Mobile (375px)
  - Evidence: Screenshots showing responsive layout
- [ ] Verify navigation hamburger appears on mobile
  - Evidence: Mobile screenshot
- [ ] Check that no content is cut off on any viewport
  - Evidence: Visual inspection

### Theming
- [ ] Verify light mode styling
  - Evidence: Screenshot with light theme
- [ ] Verify dark mode styling
  - Evidence: Screenshot with dark theme
- [ ] Theme toggle persists across page reloads
  - Evidence: Manual test result
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
  - Evidence: Lighthouse accessibility score ≥ 90

### Build & Type Checking
- [ ] Run `npm run build` and verify success
  - Evidence: Build output, `npm run build` completes with exit code 0
- [ ] Run `tsc --noEmit` and verify no errors
  - Evidence: Type checking passes
- [ ] Run ESLint and fix any errors
  - Evidence: `npm run lint` shows 0 errors
- [ ] Verify no console errors in browser DevTools
  - Evidence: Console screenshot shows no errors

### Git & Version Control
- [ ] Initialize git repository (if not already)
  - Evidence: `.git` folder exists
- [ ] Create initial commit
  - Evidence: `git log` shows at least one commit
- [ ] Create feature branch for Phase 1
  - Evidence: `git branch` shows current branch

---

## Phase 2: Data Model & Content Schema

### Database Setup (Supabase)
- [ ] Create Supabase project
  - Evidence: Project URL exists, credentials in `.env.local`
- [ ] Create PostgreSQL tables:
  - [ ] `industries` (id, slug, name, description, icon, published_asset_count)
  - [ ] `subindustries` (id, industry_id, slug, name, description)
  - [ ] `business_functions` (id, slug, name, description)
  - [ ] `assets` (id, slug, title, summary, asset_type, industry_id, ...)
  - [ ] `asset_versions` (id, asset_id, version, content, created_at)
  - [ ] `users` (id, email, role, created_at)
  - [ ] `ratings` (id, asset_id, user_id, score, created_at)
  - [ ] `comments` (id, asset_id, user_id, text, created_at)
  - [ ] `bookmarks` (id, asset_id, user_id, created_at)
  - [ ] `submissions` (id, title, asset_type, status, submitter_id, ...)
  - [ ] `verification_events` (id, asset_id, status, verified_at)
  - Evidence: Tables exist in Supabase, shown in SQL editor
- [ ] Create indexes for performance
  - Evidence: Indexes on foreign keys and frequently queried columns
- [ ] Enable Row-Level Security (RLS) policies
  - Evidence: RLS policies defined in Supabase

### TypeScript Schema
- [ ] Create `lib/db/schema.ts` with all type definitions
  - Evidence: File exists with exports for all entity types
- [ ] Create `lib/db/queries.ts` with database helpers
  - Evidence: Functions for CRUD operations on all tables
- [ ] Set up Supabase client in `lib/db/client.ts`
  - Evidence: Client initialization with credentials

### Asset Validation Schema
- [ ] Install Zod for schema validation
  - Evidence: `zod` in `package.json`
- [ ] Create `lib/schemas/asset.schema.ts`
  - Evidence: Zod schemas for asset structure
- [ ] Create validation function that checks:
  - [ ] All required fields present
  - [ ] Field types correct
  - [ ] Slug is unique (not duplicate)
  - [ ] Asset type is valid
  - [ ] Industry and subindustry exist
  - Evidence: Validation function exports
- [ ] Create error reporting for validation failures
  - Evidence: Errors include field name, error reason, file path

### Content Parser
- [ ] Create `lib/content/parser.ts`
  - [ ] Parse YAML frontmatter from asset.yaml
  - [ ] Parse markdown files
  - [ ] Extract examples from folder structure
  - Evidence: Parser functions export
- [ ] Create test asset structure locally
  - Evidence: Sample asset folder with asset.yaml and markdown files
- [ ] Verify parser extracts all fields correctly
  - Evidence: Parsed output matches expected structure

### GitHub Indexer
- [ ] Create `lib/github/client.ts` for GitHub API
  - Evidence: GitHub client initialization
- [ ] Create `lib/github/validator.ts`
  - [ ] Validate asset folder structure matches spec
  - [ ] Check for required files in each asset folder
  - [ ] Verify YAML structure
  - Evidence: Validator function exports
- [ ] Create `scripts/index-from-github.ts` to scan repository
  - Evidence: Script lists all asset folders found
- [ ] Test indexer on sample GitHub repository
  - Evidence: Script runs without errors

### Search Index Builder
- [ ] Create `scripts/build-search-index.ts`
  - [ ] Index all assets into database
  - [ ] Build full-text search index (PostgreSQL tsvector)
  - [ ] Calculate asset counts per industry
  - Evidence: Script runs, database populated
- [ ] Create `lib/search/dictionary.ts` with synonyms
  - Evidence: Dictionary includes PE→Private Equity, ALSP→Alternative Legal Service Provider, etc.

### Seed Data
- [ ] Create `scripts/seed.ts`
  - [ ] Insert 15 industries
  - [ ] Insert subindustries for each industry
  - [ ] Insert business functions
  - [ ] Insert 5 example prompts per industry (75 total)
  - [ ] Insert 5 example skills per industry (75 total)
  - [ ] Insert 5 example plugin concepts per industry (75 total)
  - Evidence: Script runs, database shows correct row counts
- [ ] Create seed asset content
  - [ ] Asset files follow folder structure spec
  - [ ] Each asset has complete asset.yaml
  - [ ] Each asset has prompt.md or instructions.md
  - [ ] Each asset has example input/output
  - Evidence: Sample asset folder exists locally
- [ ] Verify seed data is realistic
  - Evidence: Asset descriptions are industry-specific, not generic

### Database Migrations
- [ ] Create migration files for each table
  - Evidence: Migration files in `supabase/migrations/`
- [ ] Test migrations can be run and rolled back
  - Evidence: Local database migrations succeed
- [ ] Document migration procedures
  - Evidence: `docs/DATABASE.md` explains migration process

### Validation & Testing
- [ ] Run all validation scripts on seed data
  - Evidence: `npm run validate` shows 0 errors
- [ ] Check for duplicate slugs
  - Evidence: Script reports no duplicates
- [ ] Check for broken internal links
  - Evidence: Script reports links are valid
- [ ] Check for missing required fields
  - Evidence: Script reports all assets have required fields
- [ ] Build search index without errors
  - Evidence: `npm run build-search-index` completes successfully

---

## Phase 3: Search & Browse Experience

### Search API
- [ ] Create `app/api/search/route.ts`
  - [ ] Accept query parameter `q`
  - [ ] Accept filter parameters (industry, asset_type, difficulty, tool, tag)
  - [ ] Accept sort parameter (relevance, recent, downloads, rating, trending)
  - [ ] Implement full-text search on PostgreSQL
  - [ ] Support typo tolerance (3-char fuzzy matching)
  - Evidence: API endpoint works in browser/Postman
- [ ] Add pagination support (limit, offset)
  - Evidence: API returns `{ results, total, hasMore }`
- [ ] Optimize query performance
  - Evidence: Search completes in <300ms for typical queries

### Search Results Page
- [ ] Create `app/search/page.tsx`
  - Evidence: Page renders without errors
- [ ] Implement search box at top
  - Evidence: Submitting search navigates to `/search?q=...`
- [ ] Create `components/SearchFilters.tsx`
  - [ ] Industry filter
  - [ ] Subindustry filter
  - [ ] Asset type filter (Prompts, Skills, Plugins, Workflows, Agents, Other)
  - [ ] Difficulty filter
  - [ ] Tool filter
  - [ ] Tag filter
  - [ ] Verification status filter
  - Evidence: All filters render, can be selected
- [ ] Implement filter drawer for mobile (collapsible)
  - Evidence: Mobile screenshot shows collapsible filter drawer
- [ ] Create `components/ResultCard.tsx`
  - [ ] Title, asset type badge, industry, subindustry
  - [ ] Short description
  - [ ] Author, rating, download count
  - [ ] Last updated date
  - [ ] "Why it matched" explanation
  - Evidence: Card matches design mockup
- [ ] Implement sorting
  - [ ] Sort by relevance, recent, downloads, rating, trending
  - Evidence: Dropdown changes results order
- [ ] Implement pagination
  - [ ] Display 20 results per page
  - [ ] "Load more" button or page numbers
  - Evidence: Pagination controls work
- [ ] Implement empty state
  - [ ] Show "No results found" message
  - [ ] Suggest alternative searches
  - [ ] Show popular searches
  - Evidence: Empty state renders when no results

### Industry Directory
- [ ] Create `app/industries/page.tsx`
  - Evidence: Page renders without errors
- [ ] Create industry card component
  - [ ] Icon, name, description
  - [ ] Published asset count (real, not fake)
  - [ ] 2-3 popular use cases
  - [ ] Link to industry page
  - Evidence: Card matches design mockup
- [ ] Display all 15 industries in responsive grid
  - Evidence: 3 columns on desktop, 1-2 on mobile
- [ ] Display actual asset counts per industry
  - Evidence: Numbers match database counts

### Industry Landing Page
- [ ] Create `app/industries/[slug]/page.tsx`
  - Evidence: Page renders without errors
- [ ] Add industry header
  - [ ] Industry name, description
  - [ ] Subindustry selector dropdown
  - Evidence: Header renders, selector changes content
- [ ] Implement industry-scoped search
  - [ ] Search box that filters by industry
  - Evidence: Submitting search includes `?industry=x`
- [ ] Add business functions section
  - [ ] List popular business functions for industry
  - [ ] Each clickable to filter results
  - Evidence: Clicking function filters results
- [ ] Create asset type tabs
  - [ ] Prompts, Skills, Plugins, Workflows, Agents, Other
  - [ ] Show assets in each category
  - Evidence: Tabs render and switch content
- [ ] Display trending and recently added
  - [ ] Trending: Most downloaded in last 30 days
  - [ ] Recently added: Newest first
  - Evidence: Lists populated from database
- [ ] Display featured assets
  - [ ] Curated selection per industry
  - Evidence: Featured assets display with special styling

### Asset-Type Directories
- [ ] Create `/prompts`, `/skills`, `/plugins`, `/workflows`, `/agents` pages
  - Evidence: All routes accessible
- [ ] Each page shows:
  - [ ] Filter sidebar
  - [ ] Asset cards
  - [ ] Sorting options
  - [ ] Trending and recent tabs
  - Evidence: Pages match search results page layout

### Mobile Optimizations
- [ ] Test search on mobile (375px width)
  - Evidence: Search box and results readable
- [ ] Verify filter drawer is accessible on mobile
  - Evidence: Mobile screenshot shows filter toggle
- [ ] Check that result cards are compact on mobile
  - Evidence: No horizontal scroll, readable text

### Search Features
- [ ] Implement synonym support
  - [ ] Example: "PE" returns Private Equity results
  - Evidence: Test query confirms synonyms work
- [ ] Verify typo tolerance
  - [ ] Example: "invesment" returns "investment" results
  - Evidence: Test shows fuzzy matching works
- [ ] Verify empty state suggestions
  - [ ] Popular searches shown
  - [ ] Alternative search suggestions
  - Evidence: Empty state screenshot

### Performance
- [ ] Verify search responds in <300ms
  - Evidence: Network tab in DevTools shows timing
- [ ] Verify no layout shifts on search results
  - Evidence: Lighthouse CLS score <0.1

---

## Phase 4: Asset Detail Page & Asset Lifecycle

### Asset Detail Page Structure
- [ ] Create `app/assets/[slug]/page.tsx`
  - Evidence: Page renders for valid asset slug
- [ ] Create `components/AssetHeader.tsx`
  - [ ] Breadcrumbs
  - [ ] Title, short description
  - [ ] Asset type badge (colored by type)
  - [ ] Industry, subindustry, business function
  - [ ] Author, version, last updated, last verified
  - [ ] Rating (stars and count)
  - [ ] Download count
  - [ ] Bookmark button (heart icon, no auth required yet)
  - Evidence: Header renders with all fields

### Asset Action Buttons
- [ ] "View on GitHub" button
  - [ ] Links to correct GitHub path
  - Evidence: Link is correct and works
- [ ] "Download" button
  - [ ] Shows when downloadable files exist
  - [ ] Disabled with tooltip when no files
  - Evidence: Button state correct
- [ ] "Bookmark" button
  - [ ] Click to bookmark/unbookmark
  - [ ] Visual feedback on click
  - Evidence: Button responds to clicks (storage in Phase 5)
- [ ] Copy-to-clipboard for prompts
  - [ ] "Copy" button on source code
  - [ ] Shows "Copied!" confirmation
  - Evidence: Button works, clipboard contains text

### Tabbed Content System
- [ ] Create `components/AssetTabs.tsx`
  - [ ] Tab navigation with icons
  - [ ] Smooth tab switching
  - [ ] Tab state persists in URL (e.g., `?tab=instructions`)
  - Evidence: Tabs render, URL updates, tab content loads
- [ ] Create tabs:
  - [ ] Overview (default)
  - [ ] Instructions
  - [ ] Source
  - [ ] Examples
  - [ ] Screenshots
  - [ ] Dependencies
  - [ ] Security
  - [ ] Version History
  - [ ] Comments (placeholder)
  - [ ] Related Assets
  - Evidence: All tabs render without errors

### Overview Tab Content
- [ ] Display all 27 required content sections:
  1. Business problem
  2. Business value
  3. What the asset does
  4. Intended users/personas
  5. When to use it
  6. When NOT to use it
  7. Prerequisites
  8. Required tools/integrations
  9. Required inputs
  10. Output formats
  11. Step-by-step instructions
  12. Complete prompt/source
  13. Sample input
  14. Sample output
  15. Expected deliverable
  16. Validation checklist
  17. Common failure modes
  18. Security/privacy considerations
  19. Human-review requirements
  20. Estimated runtime category (seconds/minutes/hours)
  21. Estimated cost category (free/low/medium/high)
  22. Downloadable files (links)
  23. GitHub source link
  24. Version history link
  25. Related assets (maturity progression)
  26. Execution screenshots (if executed)
  27. Output artifacts (if executed)
  - Evidence: All sections render on asset page

### Instructions Tab
- [ ] Display step-by-step instructions
  - [ ] Numbered steps
  - [ ] Clear, actionable language
  - Evidence: Instructions tab renders formatted steps

### Source Tab
- [ ] Display complete prompt or source code
  - [ ] Syntax highlighting for code
  - [ ] Copy-to-clipboard button
  - [ ] Line numbers
  - Evidence: Source renders with formatting, copy button works

### Examples Tab
- [ ] Display sample input/output pairs
  - [ ] Input section (formatted)
  - [ ] Output section (formatted)
  - [ ] Multiple examples if available
  - Evidence: Examples tab shows input and output

### Screenshots Tab
- [ ] Display execution screenshots
  - [ ] Only if execution evidence exists
  - [ ] Show sanitization status badge
  - [ ] Alt text for each screenshot
  - [ ] Click to enlarge
  - Evidence: Screenshots render with alt text

### Dependencies Tab
- [ ] List required tools, integrations, platforms
  - [ ] Tool name, version, link
  - Evidence: Dependencies tab renders list

### Security Tab
- [ ] Display security considerations
  - [ ] Data privacy notes
  - [ ] Authentication requirements
  - [ ] Compliance warnings
  - [ ] Human-review requirements
  - [ ] Industry-specific warnings (healthcare, finance, legal)
  - Evidence: Security section renders appropriate warnings

### Related Assets (Maturity Model)
- [ ] Display progression for use case
  - Example: Investment Committee Memo
  - Prompt → Skill → Plugin → Workflow → Agent
  - [ ] Visual representation
  - [ ] Links to related assets
  - Evidence: Related assets sidebar renders with links

### Verification Status
- [ ] Display verification badge
  - [ ] Concept
  - [ ] Community submitted
  - [ ] Maintainer reviewed
  - [ ] Execution tested
  - [ ] Verified
  - Evidence: Badge displays current status with tooltip

### Industry-Specific Notices
- [ ] Healthcare assets show:
  - "AI-generated information requires qualified professional review"
  - Evidence: Banner displays on healthcare assets
- [ ] Financial assets show:
  - "This is not financial advice; qualified review required"
  - Evidence: Banner displays on financial assets
- [ ] Legal assets show:
  - "Not a substitute for legal advice; qualified review required"
  - Evidence: Banner displays on legal assets

### Styling & Theming
- [ ] Verify dark mode renders correctly
  - Evidence: Dark mode screenshot of asset page
- [ ] Check code block styling in both light/dark
  - Evidence: Code sections readable in both modes
- [ ] Verify all colors meet contrast requirements
  - Evidence: Lighthouse accessibility score ≥ 90

### Responsive Design
- [ ] Test on desktop (1920px)
  - Evidence: Asset page readable on desktop
- [ ] Test on tablet (768px)
  - Evidence: Asset page readable on tablet
- [ ] Test on mobile (375px)
  - Evidence: Asset page readable on mobile, no horizontal scroll

### Performance
- [ ] Asset page loads in <2 seconds
  - Evidence: Lighthouse performance score ≥ 90
- [ ] Images are optimized (next/image)
  - Evidence: No unoptimized images in DevTools
- [ ] Lazy loading for below-fold content
  - Evidence: Network tab shows deferred loads

---

## Phase 5: Authentication, User Features & Contribution

### Supabase Auth Setup
- [ ] Enable Supabase Auth in project
  - Evidence: Auth settings configured in Supabase dashboard
- [ ] Configure email provider
  - Evidence: Email verification enabled
- [ ] Configure GitHub OAuth (optional)
  - Evidence: GitHub OAuth app created and linked

### Auth Pages
- [ ] Create `/auth/login` page
  - [ ] Email/password form
  - [ ] Forgot password link
  - [ ] Sign up link
  - [ ] Optional: GitHub login button
  - Evidence: Login page renders, form validates
- [ ] Create `/auth/signup` page
  - [ ] Email/password form
  - [ ] Password strength indicator
  - [ ] Terms acceptance checkbox
  - [ ] Login link
  - Evidence: Signup page renders, form validates
- [ ] Create `/auth/forgot-password` page
  - [ ] Email input
  - [ ] Password reset link sent
  - Evidence: Page renders, reset email can be sent (test)
- [ ] Create `/auth/reset-password` page
  - [ ] New password form
  - [ ] Confirm password field
  - Evidence: Page renders, password reset works

### Authentication Middleware
- [ ] Create `middleware.ts`
  - [ ] Protect routes requiring authentication
  - [ ] Redirect to login if not authenticated
  - [ ] Maintain session across page reloads
  - Evidence: Protected routes redirect to login
- [ ] Create `lib/auth/client.ts`
  - [ ] getCurrentUser() function
  - [ ] useAuth() hook
  - [ ] logout() function
  - Evidence: Auth helpers export correctly

### User Roles & Permissions
- [ ] Create role system in database
  - [ ] ANONYMOUS: search, view
  - [ ] REGISTERED: bookmark, rate, comment, submit
  - [ ] CONTRIBUTOR: edit own submissions
  - [ ] REVIEWER: review submissions, validate
  - [ ] ADMIN: manage all
  - Evidence: Role enum defined
- [ ] Implement authorization checks
  - [ ] Only registered users can bookmark
  - [ ] Only admin can approve submissions
  - [ ] Only owner can edit submission
  - Evidence: Authorization logic in middleware and API routes

### User Profile Page
- [ ] Create `/profile` page
  - [ ] User name, email, avatar
  - [ ] Bookmarks section
  - [ ] Submitted assets section
  - [ ] Contribution history
  - [ ] Settings link
  - Evidence: Profile page renders with user data
- [ ] Create `/profile/settings` page
  - [ ] Change email
  - [ ] Change password
  - [ ] Delete account
  - [ ] Preferences
  - Evidence: Settings page renders

### Bookmarks Feature
- [ ] Create `app/api/bookmarks/route.ts`
  - [ ] POST to bookmark an asset
  - [ ] DELETE to unbookmark
  - [ ] GET to list bookmarks for user
  - Evidence: API endpoints functional
- [ ] Create `useBookmarks()` hook
  - Evidence: Hook exports correctly
- [ ] Update bookmark button on asset page
  - [ ] Click to toggle bookmark
  - [ ] Visual feedback (filled heart when bookmarked)
  - [ ] Requires authentication
  - Evidence: Button works, toggles state, requires login
- [ ] Create bookmarks library page (`/profile/bookmarks`)
  - [ ] List all bookmarked assets
  - [ ] Filter and sort
  - [ ] Remove bookmarks
  - Evidence: Bookmarks library displays user's bookmarks

### Rating System
- [ ] Create `app/api/ratings/route.ts`
  - [ ] POST rating (1-5 stars)
  - [ ] GET ratings for asset
  - [ ] Calculate aggregate rating
  - Evidence: API endpoints functional
- [ ] Create rating component
  - [ ] Star display (1-5)
  - [ ] Click to rate
  - [ ] Requires authentication
  - [ ] Shows aggregate rating
  - Evidence: Rating component works, updates database
- [ ] Display rating on asset page
  - [ ] Aggregate stars and count
  - [ ] Rating distribution bar chart (5→1 stars)
  - Evidence: Rating displays correctly

### Comments System
- [ ] Create `app/api/comments/route.ts`
  - [ ] POST comment to asset
  - [ ] GET comments for asset (paginated)
  - [ ] DELETE comment (owner or admin)
  - Evidence: API endpoints functional
- [ ] Create comment component
  - [ ] Comment form
  - [ ] Comment list
  - [ ] Author name, date, text
  - [ ] Delete button (owner/admin only)
  - Evidence: Comments section renders
- [ ] Add comments tab to asset page
  - [ ] Display all comments
  - [ ] Show comment count
  - [ ] Add comment form (authenticated users only)
  - Evidence: Comments tab works, can add/remove comments

### Submission Form
- [ ] Create `/submit` page
  - Evidence: Page renders without errors
- [ ] Create `components/SubmissionForm.tsx`
  - [ ] Title field
  - [ ] Asset type selector (Prompt, Skill, Plugin, Workflow, Agent, Other)
  - [ ] Industry selector
  - [ ] Subindustry selector (conditional on industry)
  - [ ] Business function selector (conditional)
  - [ ] Business problem field
  - [ ] Business value field
  - [ ] Intended persona field
  - [ ] Description field
  - [ ] Prerequisites field
  - [ ] Instructions field
  - [ ] Source/prompt field
  - [ ] Sample input field
  - [ ] Sample output field
  - [ ] Security considerations field
  - [ ] Human-review requirements field
  - [ ] Tool stack field (multi-select)
  - [ ] Tags field
  - [ ] Screenshots upload (multiple files)
  - [ ] Output files upload (multiple files)
  - [ ] GitHub profile input
  - [ ] License confirmation checkbox
  - [ ] Submit button
  - Evidence: Form renders all fields
- [ ] Implement form validation
  - [ ] Required fields enforce
  - [ ] Email validation
  - [ ] File type validation
  - Evidence: Form validation works, shows errors
- [ ] Implement file uploads
  - [ ] Screenshots (PNG, JPG, max 5MB each)
  - [ ] Output files (any format, max 10MB)
  - [ ] Store in Supabase Storage
  - Evidence: Files upload successfully

### Submission Workflow
- [ ] Create submission status tracking
  - [ ] Draft → Pending Review → In Review → Requested Changes / Approved → Published
  - Evidence: Status workflow tracked in database
- [ ] Create submission status page (`/submit/status/[id]`)
  - [ ] Show current status
  - [ ] Show review comments (if requested changes)
  - [ ] Show approval status
  - [ ] Link to published asset (if approved)
  - Evidence: Status page shows submission state
- [ ] Implement submission email notifications
  - [ ] Confirmation email when submitted
  - [ ] Review email when status changes
  - [ ] Approval email when published
  - Evidence: Emails sent (test SMTP or log output)

### Reviewer Dashboard
- [ ] Create `/dashboard/review` page (admin/reviewer only)
  - Evidence: Page accessible only to admins/reviewers
- [ ] Create submission list
  - [ ] Filter by status (Pending, In Review, Requested Changes, Approved)
  - [ ] Sort by date
  - [ ] Search by title
  - Evidence: Submission list displays
- [ ] Create submission detail view
  - [ ] Display all submission fields
  - [ ] Display uploaded files
  - [ ] Metadata (submitted date, submitter email)
  - Evidence: Submission details render
- [ ] Create review actions
  - [ ] "Approve" button
  - [ ] "Request Changes" button with comment form
  - [ ] "Reject" button with reason
  - [ ] Comments section
  - Evidence: Review buttons work, update database
- [ ] Create approval flow
  - [ ] When approved: generate GitHub PR template
  - [ ] Display PR template for review
  - Evidence: PR template generates correctly

### Admin Functions
- [ ] Create `/dashboard/admin` page (admin only)
  - Evidence: Page accessible only to admins
- [ ] Create submission approval UI
  - [ ] List pending approvals
  - [ ] Bulk approve/reject
  - Evidence: Admin functions work

---

## Phase 6: GitHub Synchronization & Version Control

### GitHub API Integration
- [ ] Create `lib/github/client.ts`
  - [ ] Authenticate with GitHub PAT
  - [ ] Fetch repository contents
  - [ ] Read file contents
  - [ ] Get commit history
  - [ ] Create PR via API
  - Evidence: GitHub client functions work
- [ ] Test GitHub API connectivity
  - Evidence: Can fetch from BusyBeeRepo without errors

### Repository Indexer
- [ ] Create `scripts/sync-from-github.ts`
  - [ ] Scan industries/ folder
  - [ ] Find all asset folders
  - [ ] Read asset.yaml for each
  - [ ] Insert into database
  - Evidence: Script runs, assets indexed
- [ ] Create `lib/github/validator.ts`
  - [ ] Validate folder structure
  - [ ] Check for required files (asset.yaml, README.md, etc.)
  - [ ] Verify YAML format
  - [ ] Report missing files
  - Evidence: Validator catches errors

### Version History
- [ ] Create version history table
  - [ ] Track asset updates
  - [ ] Store commit hash
  - [ ] Store changelog
  - Evidence: Version history schema exists
- [ ] Extract version history from Git
  - [ ] Get commits for each asset file
  - [ ] Extract commit message as changelog
  - [ ] Store version history
  - Evidence: Version history populated from Git
- [ ] Display version history on asset page
  - [ ] Version tab shows all versions
  - [ ] Click to view old version
  - [ ] Show changelog for each version
  - Evidence: Version history renders correctly

### GitHub PR Template Generation
- [ ] Create `lib/github/pr-generator.ts`
  - [ ] Generate folder structure from submission
  - [ ] Create asset.yaml from submission data
  - [ ] Create prompt.md or instructions.md
  - [ ] Create examples/sample-input.md and sample-output.md
  - [ ] Create PR template with folder structure
  - Evidence: PR template generates correctly
- [ ] Create PR generation endpoint
  - [ ] Convert approved submission to PR template
  - [ ] Display for manual review
  - Evidence: Endpoint works, PR template generated

### GitHub Synchronization Job
- [ ] Create `lib/github/sync.ts`
  - [ ] Periodic sync from GitHub (daily)
  - [ ] Detect new assets
  - [ ] Update existing assets
  - [ ] Mark deleted assets as archived
  - [ ] Log all sync events
  - Evidence: Sync job runs without errors
- [ ] Create sync status page (admin dashboard)
  - [ ] Show last sync time
  - [ ] Show new/updated/deleted counts
  - [ ] Trigger manual sync button
  - Evidence: Sync status displays correctly

### GitHub Links
- [ ] Verify "View on GitHub" links are correct
  - [ ] Every asset shows GitHub link
  - [ ] Links point to correct folder
  - Evidence: Links verified manually
- [ ] Add version-specific GitHub links
  - [ ] Old versions link to specific commit
  - Evidence: Version history links are correct

---

## Phase 7: Playwright Tests & Screenshot Evidence

### Test Setup
- [ ] Install Playwright
  - Evidence: `@playwright/test` in package.json
- [ ] Create `playwright.config.ts`
  - [ ] Configure for Vercel
  - [ ] Set base URL to localhost:3000
  - [ ] Configure headless mode
  - Evidence: Config file exists
- [ ] Create `tests/e2e/` folder
  - Evidence: Folder structure established

### Homepage Tests
- [ ] Create `tests/e2e/homepage.spec.ts`
  - [ ] Test page loads without errors
  - [ ] Test search box is visible
  - [ ] Test search box is focusable
  - [ ] Test hero section renders
  - [ ] Test industries grid renders
  - [ ] Test at least 15 industry cards visible
  - [ ] Test clicking industry navigates to industry page
  - Evidence: Test file exists and passes
- [ ] Run test: `npx playwright test tests/e2e/homepage.spec.ts`
  - Evidence: Test passes locally

### Search Tests
- [ ] Create `tests/e2e/search.spec.ts`
  - [ ] Test searching for "investment committee"
  - [ ] Test results display
  - [ ] Test filtering by industry
  - [ ] Test filtering by asset type
  - [ ] Test sorting results
  - [ ] Test pagination
  - [ ] Test empty results state
  - [ ] Test typo-tolerant search
  - Evidence: Test file exists and passes

### Filter Tests
- [ ] Create filter-specific tests
  - [ ] Each filter type has dedicated test
  - [ ] Multiple filters combined
  - Evidence: Filter tests pass

### Industry Page Tests
- [ ] Create `tests/e2e/industry-page.spec.ts`
  - [ ] Test industry page loads
  - [ ] Test subindustry selector works
  - [ ] Test business functions display
  - [ ] Test asset tabs work
  - [ ] Test trending section displays
  - Evidence: Test file exists and passes

### Asset Detail Tests
- [ ] Create `tests/e2e/asset-detail.spec.ts`
  - [ ] Test asset page loads
  - [ ] Test all tabs render
  - [ ] Test copy-to-clipboard works
  - [ ] Test download button (if files exist)
  - [ ] Test GitHub link is correct
  - [ ] Test related assets display
  - Evidence: Test file exists and passes

### Authentication Tests
- [ ] Create `tests/e2e/auth-flow.spec.ts`
  - [ ] Test signup flow
  - [ ] Test login flow
  - [ ] Test logout flow
  - [ ] Test protected routes redirect to login
  - Evidence: Test file exists and passes

### User Feature Tests
- [ ] Create `tests/e2e/user-features.spec.ts`
  - [ ] Test bookmarking asset
  - [ ] Test rating asset
  - [ ] Test commenting on asset
  - [ ] Test viewing bookmarks library
  - Evidence: Test file exists and passes

### Submission Flow Tests
- [ ] Create `tests/e2e/submission-flow.spec.ts`
  - [ ] Test submission form renders
  - [ ] Test form validation works
  - [ ] Test file upload works
  - [ ] Test submission succeeds
  - [ ] Test status page shows pending
  - Evidence: Test file exists and passes

### Accessibility Tests
- [ ] Create `tests/e2e/accessibility.spec.ts`
  - [ ] Test keyboard navigation (Tab, Enter, Escape)
  - [ ] Test focus indicators visible
  - [ ] Test screen reader labels (ARIA)
  - [ ] Test headings hierarchy
  - Evidence: Test file exists and passes

### Mobile Tests
- [ ] Create `tests/e2e/mobile.spec.ts`
  - [ ] Test responsive layout (375px)
  - [ ] Test mobile navigation works
  - [ ] Test touch interactions work
  - Evidence: Test file exists and passes

### Theme Tests
- [ ] Create `tests/e2e/theme.spec.ts`
  - [ ] Test light mode renders
  - [ ] Test dark mode renders
  - [ ] Test theme toggle works
  - [ ] Test theme persists across reload
  - Evidence: Test file exists and passes

### Screenshot Capture
- [ ] Create `lib/playwright/screenshot-capture.ts`
  - [ ] Capture screenshots during tests
  - [ ] Sanitize screenshots (remove PII, secrets, etc.)
  - [ ] Store in `public/screenshots/` or Supabase Storage
  - Evidence: Screenshot capture utility works
- [ ] Create sanitization rules
  - [ ] Detect and blur sensitive data
  - [ ] Mask API keys, tokens, passwords
  - [ ] Mark sensitive screenshots as "manual review required"
  - Evidence: Sanitization logic implemented

### Execution Evidence
- [ ] Create `lib/playwright/evidence-recorder.ts`
  - [ ] Record execution metadata (tool, date, version, status)
  - [ ] Capture sanitized output
  - [ ] Store execution event in database
  - Evidence: Evidence recording works
- [ ] Create execution tests for seed assets
  - [ ] Run prompt through execution adapter (manual or API)
  - [ ] Capture output
  - [ ] Store evidence
  - Evidence: Execution tests run without errors

### Test Verification
- [ ] Run all Playwright tests locally
  - Evidence: `npm run test:e2e` passes
- [ ] Verify tests pass in CI/CD (GitHub Actions)
  - Evidence: GitHub Actions workflow runs tests successfully
- [ ] Check test coverage
  - Evidence: All critical user journeys have tests

---

## Phase 8: Accessibility Audit & Performance Optimization

### Accessibility Audit
- [ ] Keyboard navigation testing
  - [ ] Test all pages with Tab/Shift+Tab
  - [ ] Test focus order is logical
  - [ ] Test Escape closes modals/dropdowns
  - [ ] Test Enter activates buttons
  - Evidence: Keyboard navigation works for all pages
- [ ] Focus indicators
  - [ ] Visible on all interactive elements
  - [ ] Meets WCAG contrast requirements
  - [ ] Not removed by CSS
  - Evidence: Focus indicator screenshot (light and dark modes)
- [ ] Screen reader testing
  - [ ] Test with NVDA (Windows) or VoiceOver (Mac)
  - [ ] All form labels associated
  - [ ] Images have alt text
  - [ ] Headings are semantic (h1, h2, h3)
  - [ ] Skip link to main content
  - Evidence: Screen reader test results document
- [ ] Color contrast
  - [ ] Text: 4.5:1 for normal, 3:1 for large text
  - [ ] UI components: 3:1 contrast ratio
  - [ ] Check both light and dark modes
  - Evidence: Contrast ratio audit document
- [ ] Semantic HTML
  - [ ] Proper heading hierarchy (no skipping levels)
  - [ ] Buttons are `<button>` or role="button"
  - [ ] Links are `<a>` tags
  - [ ] Form inputs use `<input>` with labels
  - Evidence: HTML validation report
- [ ] ARIA labels
  - [ ] Proper aria-labels on icon buttons
  - [ ] aria-expanded on collapsible elements
  - [ ] aria-current on navigation
  - [ ] aria-live for dynamic content
  - Evidence: ARIA audit document
- [ ] Form accessibility
  - [ ] Input labels visible and associated
  - [ ] Error messages linked to inputs
  - [ ] Error messages describe problem
  - [ ] Form can be submitted by keyboard
  - Evidence: Form testing results
- [ ] Reduced motion
  - [ ] Animations respect prefers-reduced-motion
  - [ ] Page usable with animations disabled
  - Evidence: Reduced motion testing results
- [ ] Axe accessibility scan
  - [ ] Run axe-core on all pages
  - [ ] Fix all violations
  - [ ] Fix all warnings
  - Evidence: Axe scan report showing 0 violations

### Accessibility Statement
- [ ] Create `/accessibility` page
  - [ ] WCAG 2.2 AA compliance claim
  - [ ] Known issues and workarounds
  - [ ] Contact form for accessibility issues
  - [ ] Keyboard shortcuts documented
  - Evidence: Accessibility statement page exists

### Performance Optimization
- [ ] Image optimization
  - [ ] Use next/image for all images
  - [ ] Generate multiple sizes (responsive)
  - [ ] Use modern formats (webp with fallback)
  - [ ] Add loading="lazy" for below-fold images
  - Evidence: No unoptimized images in DevTools audit
- [ ] Code splitting
  - [ ] Dynamic imports for large components
  - [ ] Lazy load routes
  - [ ] Split by route in Next.js
  - Evidence: Network tab shows split bundles
- [ ] Database query optimization
  - [ ] Index frequently queried columns
  - [ ] Use database-level pagination
  - [ ] Avoid N+1 queries
  - [ ] Use connection pooling
  - Evidence: Query performance test results
- [ ] Search index caching
  - [ ] Cache search results
  - [ ] Invalidate cache on updates
  - [ ] Set appropriate TTL
  - Evidence: Cache headers in response
- [ ] Static generation
  - [ ] Use ISR for industry/asset type pages
  - [ ] Revalidate every hour
  - [ ] Fallback for dynamic content
  - Evidence: Pages serve from cache

### Performance Monitoring
- [ ] Install performance monitoring
  - [ ] Use Vercel Analytics
  - [ ] Track Core Web Vitals
  - [ ] Track custom metrics
  - Evidence: Monitoring dashboard shows data
- [ ] Lighthouse audit
  - [ ] Performance: ≥90
  - [ ] Accessibility: ≥90
  - [ ] Best Practices: ≥90
  - [ ] SEO: ≥90
  - Evidence: Lighthouse report showing scores

### SEO Optimization
- [ ] Meta tags
  - [ ] Title tags (unique per page)
  - [ ] Meta descriptions
  - [ ] Meta keywords (optional)
  - Evidence: Head tag shows correct meta tags
- [ ] Open Graph
  - [ ] og:title, og:description, og:image
  - [ ] og:type (website, article)
  - [ ] og:url
  - Evidence: OG tags present in head
- [ ] Sitemap
  - [ ] Generate `public/sitemap.xml`
  - [ ] Include all public pages
  - [ ] Auto-update on new assets
  - Evidence: Sitemap.xml file exists and is valid
- [ ] Robots.txt
  - [ ] Create `public/robots.txt`
  - [ ] Allow all for search engines
  - [ ] Disallow admin pages
  - Evidence: Robots.txt file exists
- [ ] Canonical URLs
  - [ ] Set canonical URL on all pages
  - [ ] Avoid duplicate content
  - Evidence: Canonical tags present in head
- [ ] Structured data
  - [ ] Use schema.org markup
  - [ ] Markup for articles, products, FAQs
  - [ ] Validate with Google Structured Data Tester
  - Evidence: Structured data markup present

### Security Headers
- [ ] Content-Security-Policy
  - [ ] Restrict script sources
  - [ ] Restrict image sources
  - [ ] Report violations
  - Evidence: CSP header present in response
- [ ] X-Frame-Options
  - [ ] Set to DENY to prevent framing
  - Evidence: X-Frame-Options header present
- [ ] X-Content-Type-Options
  - [ ] Set to nosniff
  - Evidence: Header present in response
- [ ] Referrer-Policy
  - [ ] Set to strict-origin-when-cross-origin
  - Evidence: Header present in response
- [ ] Strict-Transport-Security
  - [ ] Force HTTPS
  - [ ] Include max-age
  - Evidence: HSTS header present

---

## Phase 9: Documentation & Deployment Setup

### README
- [ ] Create comprehensive README.md
  - [ ] Project overview
  - [ ] Local setup (step-by-step)
  - [ ] Environment variables (with descriptions)
  - [ ] Database setup
  - [ ] Seed data generation
  - [ ] Running tests
  - [ ] Building for production
  - [ ] Deployment guide
  - [ ] GitHub integration
  - [ ] Contribution workflow
  - [ ] Security model
  - [ ] Troubleshooting
  - Evidence: README.md file exists

### CONTRIBUTING.md
- [ ] Create contribution guide
  - [ ] How to contribute assets
  - [ ] Submission guidelines
  - [ ] Asset folder structure
  - [ ] YAML schema explanation
  - [ ] Markdown conventions
  - [ ] Code standards
  - [ ] Pull request template
  - Evidence: CONTRIBUTING.md file exists

### Architecture Documentation
- [ ] Verify `docs/ARCHITECTURE.md` complete
  - [ ] System design
  - [ ] Component overview
  - [ ] Data flow diagrams
  - [ ] API endpoints
  - Evidence: ARCHITECTURE.md file exists

### Decision Records
- [ ] Create ADR files in `docs/decisions/`
  - [ ] adr-001-nextjs.md (Why Next.js?)
  - [ ] adr-002-supabase.md (Why Supabase?)
  - [ ] adr-003-vercel.md (Why Vercel?)
  - [ ] adr-004-search-strategy.md (PostgreSQL FTS vs Algolia?)
  - [ ] adr-005-asset-versioning.md (How to version assets?)
  - Evidence: ADR files exist

### API Documentation
- [ ] Create `docs/API.md`
  - [ ] Search endpoint
  - [ ] Asset endpoints
  - [ ] Authentication endpoints
  - [ ] Submission endpoints
  - [ ] Rating/comment endpoints
  - [ ] Example requests/responses
  - Evidence: API.md file exists

### Database Documentation
- [ ] Create `docs/DATABASE.md`
  - [ ] Table descriptions
  - [ ] Relationship diagrams
  - [ ] Migration procedures
  - [ ] Backup procedures
  - Evidence: DATABASE.md file exists

### Content Backlog
- [ ] Create `docs/CONTENT_BACKLOG.md`
  - [ ] List of remaining assets to seed
  - [ ] Estimated effort per industry
  - [ ] Priority order
  - [ ] Content creation guidelines
  - Evidence: CONTENT_BACKLOG.md file exists

### Deployment Guide
- [ ] Create `docs/DEPLOYMENT.md`
  - [ ] Vercel setup (step-by-step)
  - [ ] Environment variables in Vercel
  - [ ] Database migrations in production
  - [ ] Preview deployments
  - [ ] Production rollback procedures
  - Evidence: DEPLOYMENT.md file exists

### Setup Verification
- [ ] Test README setup guide from scratch
  - [ ] Follow every step as new contributor
  - [ ] Verify no steps are missing
  - Evidence: Fresh clone and setup works

### Git & Version Control
- [ ] Create `.gitignore`
  - [ ] Node modules
  - [ ] .env files
  - [ ] Build outputs
  - Evidence: .gitignore file exists
- [ ] Create `.gitattributes` (optional)
  - Evidence: .gitattributes file exists
- [ ] Push all documentation to main branch
  - Evidence: All docs committed and pushed

### Vercel Setup
- [ ] Connect GitHub repository to Vercel
  - Evidence: Vercel project created and linked
- [ ] Configure environment variables in Vercel
  - Evidence: All env vars set in Vercel dashboard
- [ ] Enable preview deployments
  - Evidence: Pull requests generate preview URLs
- [ ] Configure production domain
  - Evidence: BusyBeeRepo.com domain configured

### GitHub Actions (CI/CD)
- [ ] Create `.github/workflows/test.yml`
  - [ ] Run linting on push
  - [ ] Run type checking
  - [ ] Run Playwright tests
  - [ ] Fail if any step fails
  - Evidence: GitHub Actions workflow file exists
- [ ] Test workflow on feature branch
  - Evidence: Workflow runs successfully on PR

### Vercel Deployment Verification
- [ ] Deploy to Vercel production
  - Evidence: Site accessible at BusyBeeRepo.com
- [ ] Verify all pages load
  - Evidence: Manual test of 10+ key pages
- [ ] Verify search works
  - Evidence: Search returns results
- [ ] Verify database connectivity
  - Evidence: Assets load from database
- [ ] Verify authentication works
  - Evidence: Login/signup flow works
- [ ] Monitor for errors
  - Evidence: Error tracking (Sentry or Vercel logs) shows no critical errors

### Final Verification Checklist
- [ ] All 27 required documentation sections in asset pages display correctly
- [ ] Search works and returns relevant results
- [ ] All 15 industries visible
- [ ] All asset types (Prompts, Skills, Plugins, Workflows, Agents) accessible
- [ ] User can complete full user journey without errors
- [ ] No TypeScript errors (`tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Lighthouse performance ≥90
- [ ] Lighthouse accessibility ≥90
- [ ] All Playwright tests pass
- [ ] Database backup procedure documented
- [ ] Rollback procedure documented
- [ ] README is clear and complete
- [ ] CONTRIBUTING.md provides clear guidance

---

## Verification & Sign-Off

**Phase Completion Criteria**:
Each phase is complete when:
1. All checklist items are checked
2. Evidence links are provided
3. No TypeScript errors remain
4. All tests pass
5. No console errors in browser
6. Code is committed and pushed

**Overall Completion**:
The project is production-ready when:
- ✅ All 9 phases complete
- ✅ Comprehensive test suite passes
- ✅ Documentation is accurate and complete
- ✅ Accessibility audit passes
- ✅ Performance audit shows scores ≥90
- ✅ Security review complete
- ✅ Live on Vercel at BusyBeeRepo.com
- ✅ Users can perform all 20+ critical journeys
