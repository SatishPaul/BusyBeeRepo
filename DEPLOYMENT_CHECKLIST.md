# BusyBee Deployment Checklist

Complete this checklist to deploy BusyBee to production and enable full testing.

---

## ✅ PRE-DEPLOYMENT SETUP

### Supabase Setup
- [ ] Create Supabase account at https://supabase.com
- [ ] Create new project
- [ ] Note project URL from Settings → API
- [ ] Note anon public key
- [ ] Note service_role key (keep secret!)
- [ ] Open SQL Editor in Supabase dashboard

### Database Setup
- [ ] In Supabase SQL Editor, run `sql/001-init-schema.sql`
  - Creates 11 tables with RLS policies
- [ ] Run `sql/002-seed-healthcare.sql`
  - Populates test data (categories, sample assets)
- [ ] Verify tables exist in Supabase Table Editor

### GitHub Setup (Optional but Recommended)
- [ ] Go to https://github.com/settings/tokens
- [ ] Click "Generate new token (classic)"
- [ ] Name: "BusyBee"
- [ ] Select `repo` scope
- [ ] Copy token (save securely)
- [ ] You'll need this for GitHub sync feature

---

## 🖥️ LOCAL TESTING SETUP

### Environment Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Replace `NEXT_PUBLIC_SUPABASE_URL` with your Supabase URL
- [ ] Replace `NEXT_PUBLIC_SUPABASE_ANON_KEY` with anon key
- [ ] Replace `SUPABASE_SERVICE_ROLE_KEY` with service role key
- [ ] (Optional) Add `GITHUB_TOKEN` from above

### Dependencies Installation
- [ ] Run `npm install`
- [ ] Wait for all packages to complete

### Local Development Testing
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000 in browser

### Feature Testing (Local)
- [ ] **Browse Page:**
  - [ ] Visit http://localhost:3000/browse
  - [ ] See list of assets
  - [ ] Type in search box
  - [ ] Click filter buttons (type, sort, industry)
  - [ ] Click pagination arrows

- [ ] **Asset Detail:**
  - [ ] Click any asset card
  - [ ] See full metadata (title, description, version)
  - [ ] See author profile
  - [ ] See rating/review section
  - [ ] Leave a star rating (requires login)

- [ ] **Authentication:**
  - [ ] Click "Sign Up" in header
  - [ ] Create account (email + password)
  - [ ] Receive confirmation email
  - [ ] Verify email in Supabase Auth
  - [ ] Login with credentials
  - [ ] See profile page
  - [ ] Try GitHub login button
  - [ ] Click "Sign Out"

- [ ] **Asset Submission:**
  - [ ] Navigate to /submit
  - [ ] (Should redirect to login if not signed in)
  - [ ] Login first
  - [ ] Go back to /submit
  - [ ] Fill form (title, description, type, tags)
  - [ ] Click "Submit Asset"
  - [ ] See success confirmation
  - [ ] Check moderation_queue in Supabase

- [ ] **User Profile:**
  - [ ] Click on author name in asset detail
  - [ ] See profile page with stats
  - [ ] Verify follower count
  - [ ] Verify published assets count

- [ ] **GitHub Sync (Optional):**
  - [ ] Ensure GITHUB_TOKEN is in `.env.local`
  - [ ] Restart dev server (`npm run dev`)
  - [ ] Use curl or Postman to POST:
  ```bash
  curl -X POST http://localhost:3000/api/github/sync \
    -H "Content-Type: application/json" \
    -d '{"owner":"microsoft","repo":"vscode"}'
  ```
  - [ ] Check moderation_queue for new entries

### Code Quality Checks
- [ ] Run `npm run lint` (should pass)
- [ ] Run `npm run type-check` (should pass)
- [ ] Run `npm run build` (should complete without errors)
- [ ] Check for any console errors in browser DevTools

---

## 🌐 GITHUB SETUP

### Repository Creation
- [ ] Go to https://github.com/new
- [ ] Repository name: `BusyBeeRepo`
- [ ] Description: "AI Asset Marketplace"
- [ ] Public or Private (your choice)
- [ ] Click "Create repository"

### Git Configuration
- [ ] In your repo root, configure git:
```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
git remote add origin https://github.com/YOUR_USERNAME/BusyBeeRepo.git
```

### Push to GitHub
- [ ] Commit your code:
```bash
git add .
git commit -m "Initial commit: BusyBee AI Asset Marketplace"
```
- [ ] Push to GitHub:
```bash
git push -u origin main
```
- [ ] Verify code appears on GitHub

---

## 🚀 VERCEL DEPLOYMENT

### Option A: GitHub-Integrated Deployment (Recommended)
1. [ ] Go to https://vercel.com
2. [ ] Sign in (create account if needed)
3. [ ] Click "Add New → Project"
4. [ ] Select "Import Git Repository"
5. [ ] Find `YOUR_USERNAME/BusyBeeRepo` and import
6. [ ] Framework: "Next.js" (should auto-detect)
7. [ ] Add environment variables:
   - [ ] `NEXT_PUBLIC_SUPABASE_URL`
   - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - [ ] `SUPABASE_SERVICE_ROLE_KEY`
   - [ ] `GITHUB_TOKEN` (optional)
8. [ ] Click "Deploy"
9. [ ] Wait for build to complete
10. [ ] Verify deployment URL works

### Option B: CLI Deployment
1. [ ] Install Vercel CLI: `npm install -g vercel`
2. [ ] Login: `vercel login`
3. [ ] Deploy: `vercel --prod`
4. [ ] Add environment variables when prompted
5. [ ] Link to project on Vercel dashboard

### Vercel Project Settings
1. [ ] Go to Project Settings in Vercel
2. [ ] Domains → Add custom domain (optional)
3. [ ] Environment → Verify all variables set
4. [ ] Git → Ensure "main" is production branch
5. [ ] Advanced → Increase function memory to 3008MB
6. [ ] Monitoring → Enable Analytics (optional)

---

## ✅ POST-DEPLOYMENT VERIFICATION

### Production Testing
- [ ] Visit your Vercel deployment URL
- [ ] Check domain (should be `busybee.vercel.app` or custom domain)
- [ ] Verify all pages load
- [ ] Test each feature again on production

### Production Feature Testing
- [ ] **Browse Page:**
  - [ ] Assets display
  - [ ] Search works
  - [ ] Filters work
  
- [ ] **Asset Detail:**
  - [ ] Page loads
  - [ ] Metadata displays correctly
  - [ ] Author profile link works
  
- [ ] **Authentication:**
  - [ ] Can signup on production
  - [ ] Can login on production
  - [ ] Session persists across pages
  
- [ ] **Asset Submission:**
  - [ ] Form accessible
  - [ ] Can submit asset
  - [ ] Entry appears in moderation queue
  
- [ ] **User Profiles:**
  - [ ] Profile pages load
  - [ ] Stats display correctly

### Performance Checks
- [ ] [ ] Page load time < 3 seconds
- [ ] [ ] No 404 errors in console
- [ ] [ ] No CORS errors
- [ ] [ ] Images load properly
- [ ] [ ] API responses are fast

### Security Checks
- [ ] [ ] No sensitive keys in browser console
- [ ] [ ] All API calls use HTTPS
- [ ] [ ] Authentication tokens secure
- [ ] [ ] No hardcoded passwords

### Database Checks
- [ ] [ ] Data persists across requests
- [ ] [ ] New submissions appear in moderation queue
- [ ] [ ] User profiles save correctly

---

## 🔧 TROUBLESHOOTING

### Build Fails on Vercel
- [ ] Check Vercel build logs
- [ ] Verify environment variables set correctly
- [ ] Check TypeScript errors: `npm run type-check`
- [ ] Clear cache: Delete `.next` folder and rebuild
- [ ] Contact: Check Vercel docs for your error

### Assets Not Loading
- [ ] Verify Supabase service role key is correct
- [ ] Check Supabase table "assets" has data
- [ ] Verify RLS policies allow public read
- [ ] Check API route: `GET /api/assets` in DevTools

### Authentication Not Working
- [ ] Verify Supabase Auth enabled
- [ ] Check email/password signup allowed
- [ ] Check GitHub OAuth app configured
- [ ] Clear browser cookies and try again

### GitHub Sync Not Working
- [ ] Verify GITHUB_TOKEN set (if using feature)
- [ ] Check token has `repo` scope
- [ ] Verify token not expired
- [ ] Check Supabase moderation_queue table

### Deployment Stuck
- [ ] Cancel deployment in Vercel
- [ ] Check for long-running builds
- [ ] Verify no infinite loops in code
- [ ] Rebuild from scratch if needed

---

## 📊 DEPLOYMENT VERIFICATION MATRIX

| Feature | Local | Production | Notes |
|---------|:-----:|:----------:|-------|
| Browse Interface | ✓ | ✓ | Should show 20+ assets |
| Search | ✓ | ✓ | Full-text search working |
| Filters | ✓ | ✓ | Type/sort/industry filters |
| Asset Detail | ✓ | ✓ | Metadata displays |
| Reviews | ✓ | ✓ | 5-star rating system |
| Authentication | ✓ | ✓ | Email + GitHub login |
| User Profiles | ✓ | ✓ | Stats and follow buttons |
| Asset Submission | ✓ | ✓ | Creates moderation entry |
| GitHub Sync | ✓ | ✓ | (Optional) Requires token |
| API Endpoints | ✓ | ✓ | All routes respond |

---

## 📈 SUCCESS INDICATORS

✅ Deployment successful when:
- [ ] Vercel shows "Ready" status
- [ ] Your production URL loads without errors
- [ ] All 5 core features work
- [ ] Database queries succeed
- [ ] No server errors (500)
- [ ] Performance acceptable (< 3s load)

---

## 🎉 NEXT STEPS AFTER DEPLOYMENT

1. **Monitoring:**
   - Set up error tracking (Sentry, LogRocket)
   - Monitor Vercel Analytics
   - Track Core Web Vitals

2. **Scaling:**
   - Add more seed data
   - Monitor database performance
   - Optimize slow queries

3. **Features:**
   - Add email notifications
   - Implement advanced search
   - Add community features

4. **Maintenance:**
   - Regular database backups
   - Monitor error logs
   - Update dependencies monthly

---

## 💾 IMPORTANT: SAVE THESE CREDENTIALS

Keep these secure (never commit to Git):
- [ ] NEXT_PUBLIC_SUPABASE_URL
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] SUPABASE_SERVICE_ROLE_KEY
- [ ] GITHUB_TOKEN (if using sync)

**Store in:**
- [ ] Vercel Project Settings
- [ ] Local `.env.local` (gitignored)
- [ ] Password manager (backup)

---

## ✨ DEPLOYMENT COMPLETE!

Once all checkboxes are complete, BusyBee is deployed and ready for production testing! 🎊

**Congratulations on shipping!** 🚀

For issues or questions, see:
- QUICK_START.md
- DEPLOYMENT.md
- FEATURES.md

