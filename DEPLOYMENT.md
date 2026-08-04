# Deployment Guide

This guide covers deploying BusyBee to Vercel and pushing to GitHub.

## Prerequisites

- Node.js 18+ and npm
- Git installed and configured
- GitHub account
- Vercel account (free tier available)

## Quick Start (5 minutes)

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub via web interface
# Then add remote and push
git remote add origin https://github.com/YOUR_USERNAME/BusyBeeRepo.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Using Vercel CLI (Recommended)**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
# Follow prompts to:
# - Link to your GitHub account
# - Select/create Vercel team
# - Confirm project settings
# - Add environment variables
```

**Option B: Using Vercel Dashboard**

1. Visit https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select `BusyBeeRepo` repository
5. Configure environment variables
6. Deploy

## Environment Variables

Configure these in Vercel Project Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
GITHUB_TOKEN=your-github-token
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### Getting Tokens

**Supabase Keys:**
1. Visit Supabase dashboard → Project Settings → API
2. Copy Project URL and anon/service role keys

**GitHub Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `read:user`
4. Copy token

## Automated Deployment Scripts

### Using PowerShell (Windows)

```powershell
# Navigate to project
cd BusyBeeRepo

# Set your GitHub username
$GitHubUsername = "your-username"

# Set Vercel token (optional)
$env:VERCEL_TOKEN = "your-vercel-token"

# Run deployment script
.\scripts\Deploy.ps1 -GitHubUsername $GitHubUsername

# Or dry-run to preview commands
.\scripts\Deploy.ps1 -GitHubUsername $GitHubUsername -DryRun
```

### Using Node.js

```bash
npm run deploy
```

## Manual Deployment Workflow

### Step 1: Build & Test Locally

```bash
# Install dependencies
npm ci

# Build
npm run build

# Run tests
npm run test

# Run linter
npm run lint
```

### Step 2: Commit & Push to GitHub

```bash
git add .
git commit -m "feat: new features for production"
git push origin main
```

### Step 3: Deploy to Vercel

**Automatic:** Vercel automatically deploys on push to main (if configured)

**Manual:**
```bash
vercel --prod
```

## Verification Checklist

After deployment, verify:

- [ ] Application loads at `https://your-app.vercel.app`
- [ ] Browse page works (can filter assets)
- [ ] Asset detail page loads
- [ ] Authentication works (signup/login)
- [ ] Submit form works
- [ ] GitHub sync endpoint is accessible
- [ ] Environment variables are set correctly
- [ ] Database queries work (check for 500 errors)
- [ ] No console errors in browser DevTools

## Troubleshooting

### Build Fails

**Check build logs:**
```bash
vercel logs --prod
```

**Common issues:**
- Missing environment variables → Add to Vercel Project Settings
- TypeScript errors → Run `npm run type-check` locally
- Missing dependencies → Run `npm install`

### API Errors (502/503)

1. Check Supabase connection
2. Verify environment variables
3. Check database RLS policies
4. View Vercel function logs

### Authentication Issues

1. Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
2. Check CORS settings in Supabase
3. Ensure `NEXT_PUBLIC_SUPABASE_ANON_KEY` is valid

### GitHub Sync Not Working

1. Verify `GITHUB_TOKEN` is set and valid
2. Check token has `repo` scope
3. Verify repository owner/name in request

## Continuous Deployment (CI/CD)

Vercel automatically deploys on push to main. To customize:

1. Go to Vercel Project Settings → Git
2. Configure:
   - **Production Branch**: `main`
   - **Preview Deployments**: Enable for pull requests
   - **Auto-deployments**: Enable/disable as needed

## Rollback

To rollback to previous deployment:

1. Go to Vercel Project → Deployments
2. Find previous successful deployment
3. Click the deployment
4. Click "Promote to Production"

## Monitoring & Logs

**View real-time logs:**
```bash
vercel logs --follow
```

**Check deployment status:**
- Vercel Dashboard → Project → Deployments
- GitHub Actions (if configured)

## Database Migrations

If you modify the database schema:

1. Update SQL files in `sql/`
2. Run migrations on Supabase
3. Commit changes to Git
4. Push to trigger Vercel deployment

## Security Checklist

- [ ] Never commit `.env.local` (should be in `.gitignore`)
- [ ] Use strong GitHub tokens (limit scope)
- [ ] Enable 2FA on GitHub and Vercel
- [ ] Review environment variables periodically
- [ ] Rotate tokens if exposed

## Performance Optimization

To optimize Vercel deployment:

1. **Enable Image Optimization:**
   - Already configured in `next.config.js`

2. **Bundle Analysis:**
   ```bash
   npm run analyze
   ```

3. **Monitoring:**
   - Enable Vercel Analytics in Project Settings
   - Monitor Core Web Vitals

## Getting Help

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- Community: GitHub Discussions, Discord

## Advanced

### Custom Domain

1. Vercel Project Settings → Domains
2. Add custom domain
3. Update DNS records

### Staging Environment

1. Create `staging` branch
2. Connect to Vercel via preview deployment
3. Use for testing before production

### Environment-specific Configs

Update `vercel.json` for different regions or settings per environment.
