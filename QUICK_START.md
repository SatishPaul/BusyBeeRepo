# Quick Start Guide - BusyBee

Get BusyBee running locally and deployed to production in minutes!

## 🚀 5-Minute Local Setup

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- Git (https://git-scm.com)
- A Supabase account (https://supabase.com)

### Step 1: Clone & Install
```bash
cd BusyBeeRepo
npm install
```

### Step 2: Get Supabase Credentials

1. Go to https://supabase.com and create project
2. In Project Settings → API, copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Create .env.local
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxxxxx
```

### Step 4: Setup Database
In Supabase SQL Editor, run all scripts from `sql/` folder in order:
1. `001-init-schema.sql`
2. `002-seed-healthcare.sql`

### Step 5: Run Locally
```bash
npm run dev
```

Visit http://localhost:3000 🎉

---

## 📋 Quick Feature Testing Checklist

### Browse Interface
- [ ] Visit http://localhost:3000/browse
- [ ] Type in search box
- [ ] Click filter buttons
- [ ] Change sort order
- [ ] Click pagination

### Asset Detail
- [ ] Click on any asset card
- [ ] Scroll through metadata
- [ ] Leave a star rating
- [ ] Click "Save" button
- [ ] View author profile link

### Authentication
- [ ] Click "Sign Up"
- [ ] Create account with email
- [ ] Verify email (check Supabase Auth)
- [ ] Login with credentials
- [ ] View profile page
- [ ] Click "Sign Out"

### Submit Asset
- [ ] Click "Submit Asset"
- [ ] Fill form fields
- [ ] Add comma-separated tags
- [ ] Click "Submit Asset"
- [ ] See success message

### GitHub Sync
- [ ] Get GitHub token: https://github.com/settings/tokens
- [ ] Create `.env.local` with `GITHUB_TOKEN`
- [ ] Restart dev server
- [ ] Call POST `/api/github/sync` with curl:
```bash
curl -X POST http://localhost:3000/api/github/sync \
  -H "Content-Type: application/json" \
  -d '{"owner":"microsoft","repo":"vscode"}'
```

---

## 🌐 Deploy to Vercel (5 minutes)

### Option A: Using GitHub
1. Push code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/BusyBeeRepo.git
git push -u origin main
```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables (from step 2)
6. Click "Deploy"

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Your app will be live at `https://busybee.vercel.app` 🎊

---

## 🔗 Important URLs

- **Local Dev:** http://localhost:3000
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Dashboard:** https://app.supabase.com
- **GitHub Settings:** https://github.com/settings

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Quality
npm run lint             # Check code style
npm run type-check       # Check TypeScript
npm run test             # Run tests
npm run test:watch       # Watch test mode

# Deployment
vercel --prod            # Deploy to Vercel (if CLI installed)
./scripts/Deploy.ps1     # Windows PowerShell deployment script
```

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Database Connection Error
- [ ] Check `NEXT_PUBLIC_SUPABASE_URL` is correct
- [ ] Check `SUPABASE_SERVICE_ROLE_KEY` is correct
- [ ] Verify migrations ran in Supabase

### Authentication Not Working
- [ ] Verify environment variables in `.env.local`
- [ ] Check Supabase Auth settings allow email/password
- [ ] Clear browser cookies and cache

### Assets Not Loading
- [ ] Check `002-seed-healthcare.sql` was run
- [ ] Verify RLS policies in Supabase (should allow public read)
- [ ] Check `/api/assets` endpoint in browser DevTools

### GitHub Token Issues
- [ ] Token must have `repo` scope
- [ ] Token must not be expired
- [ ] Set `GITHUB_TOKEN` in `.env.local` (for local)
- [ ] Set `GITHUB_TOKEN` in Vercel Project Settings (for production)

---

## 📸 Feature Screenshots

### Browse Page
- Search bar at top
- Sidebar with type/sort/industry filters
- Grid of asset cards (3 columns on desktop)
- Pagination controls at bottom

### Asset Detail
- Large asset title and description
- Author card with profile link
- Star rating with reviews
- Related assets section
- Save/Share buttons

### Submission Form
- Multi-field form (title, description, type, tags, content)
- Form validation with error messages
- Success confirmation after submit

### Auth Pages
- Email/password login form
- "Sign up with GitHub" button
- Responsive mobile layout

### User Profile
- Profile picture and bio
- Statistics (assets, followers, stars)
- Edit/Logout buttons (if own profile)
- Follow button (if other profile)

---

## ✨ Pro Tips

1. **Local Testing Before Deploy:**
   - Always test locally with `npm run dev`
   - Check for TypeScript errors with `npm run type-check`

2. **Environment Variables:**
   - Use `.env.local` for local development
   - Use Vercel Project Settings for production
   - Never commit `.env.local` to Git

3. **Database:**
   - Seed data is helpful for testing
   - Check RLS policies allow public access
   - Migrations are idempotent (safe to run multiple times)

4. **GitHub Integration:**
   - Create personal access token with minimal scopes
   - Store token securely (never commit to Git)
   - Rotate tokens periodically

5. **Performance:**
   - Enable Vercel Analytics in Project Settings
   - Monitor Core Web Vitals
   - Use `npm run analyze` to check bundle size

---

## 🎓 Next Steps After Deployment

1. **Add Custom Domain:**
   - Vercel Project Settings → Domains
   - Point domain DNS to Vercel

2. **Set Up Monitoring:**
   - Enable Vercel Analytics
   - Set up Sentry for error tracking
   - Configure uptime monitoring

3. **CI/CD Pipeline:**
   - GitHub Actions workflows already configured
   - Runs lint → test → build → deploy
   - Automatic preview deployments on PRs

4. **Scale Up:**
   - Add more assets to database
   - Configure caching strategies
   - Add image optimization
   - Set up CDN for assets

---

## 📞 Need Help?

- **Docs:** Read [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide
- **Features:** See [FEATURES.md](./FEATURES.md) for complete feature list
- **Contributing:** Check [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**You're all set! 🚀 Start with `npm run dev` and enjoy building!**
