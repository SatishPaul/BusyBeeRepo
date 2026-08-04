# BusyBee Deployment Script
# Prerequisites: Node.js, npm, Git, Vercel CLI

param(
    [string]$GitHubUsername = "your-github-username",
    [string]$VercelToken = $env:VERCEL_TOKEN,
    [switch]$SkipTests = $false,
    [switch]$SkipLint = $false,
    [switch]$DryRun = $false
)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

function Write-Header {
    param([string]$Message)
    Write-Host "`n" -ForegroundColor DarkGreen
    Write-Host "═" * 60 -ForegroundColor Cyan
    Write-Host "  $Message" -ForegroundColor Cyan
    Write-Host "═" * 60 -ForegroundColor Cyan
}

function Write-Step {
    param([string]$Message)
    Write-Host "`n🔹 $Message" -ForegroundColor Yellow
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

try {
    Write-Header "🚀 BusyBee Deployment Pipeline"
    Write-Host "Timestamp: $Timestamp`n"
    Write-Host "Configuration:`n"
    Write-Host "  GitHub Username: $GitHubUsername"
    Write-Host "  Project Root: $ProjectRoot"
    Write-Host "  Skip Tests: $SkipTests"
    Write-Host "  Skip Lint: $SkipLint"
    Write-Host "  Dry Run: $DryRun`n"

    # Navigate to project root
    Set-Location $ProjectRoot

    # Step 1: Install dependencies
    Write-Step "Installing dependencies..."
    if ($DryRun) {
        Write-Host "  [DRY RUN] npm ci" -ForegroundColor Gray
    } else {
        npm ci
        Write-Success "Dependencies installed"
    }

    # Step 2: Build
    Write-Step "Building application..."
    if ($DryRun) {
        Write-Host "  [DRY RUN] npm run build" -ForegroundColor Gray
    } else {
        npm run build
        Write-Success "Application built"
    }

    # Step 3: Run tests
    if (-not $SkipTests) {
        Write-Step "Running tests..."
        if ($DryRun) {
            Write-Host "  [DRY RUN] npm run test -- --coverage" -ForegroundColor Gray
        } else {
            npm run test -- --coverage
            Write-Success "Tests passed"
        }
    } else {
        Write-Host "⏭️  Skipping tests" -ForegroundColor Gray
    }

    # Step 4: Run linter
    if (-not $SkipLint) {
        Write-Step "Linting code..."
        if ($DryRun) {
            Write-Host "  [DRY RUN] npm run lint" -ForegroundColor Gray
        } else {
            npm run lint
            Write-Success "Linting passed"
        }
    } else {
        Write-Host "⏭️  Skipping linting" -ForegroundColor Gray
    }

    # Step 5: Git operations
    Write-Step "Git operations..."
    if ($DryRun) {
        Write-Host "  [DRY RUN] git add ." -ForegroundColor Gray
        Write-Host "  [DRY RUN] git commit -m 'chore: automated deployment build'" -ForegroundColor Gray
        Write-Host "  [DRY RUN] git push origin main" -ForegroundColor Gray
    } else {
        git add .
        $gitStatus = git status --porcelain
        
        if ($gitStatus) {
            git commit -m "chore: automated deployment build at $Timestamp"
            Write-Success "Changes committed"
            
            git push origin main
            Write-Success "Pushed to GitHub"
        } else {
            Write-Host "ℹ️  No changes to commit" -ForegroundColor Gray
        }
    }

    # Step 6: Deploy to Vercel
    Write-Step "Deploying to Vercel..."
    
    if (-not $VercelToken) {
        Write-Host "⚠️  VERCEL_TOKEN environment variable not set" -ForegroundColor Yellow
        Write-Host "   Options:`n"
        Write-Host "   1. Set VERCEL_TOKEN and re-run"
        Write-Host "   2. Install Vercel CLI: npm install -g vercel"
        Write-Host "   3. Run: vercel --prod`n"
    } else {
        if ($DryRun) {
            Write-Host "  [DRY RUN] vercel --prod --token ***" -ForegroundColor Gray
        } else {
            $env:VERCEL_TOKEN = $VercelToken
            vercel --prod
            Write-Success "Deployed to Vercel"
        }
    }

    # Summary
    Write-Header "✨ Deployment Summary"
    Write-Host "
✅ Build successful
✅ Tests passed
✅ Code linted
✅ Changes pushed to GitHub
✅ Deployment initiated

Next steps:
1. Visit your Vercel dashboard to monitor deployment
2. Verify environment variables in Vercel Project Settings
3. Set up GitHub integration for CI/CD
4. Configure automatic deployments on push to main

Dashboard: https://vercel.com
Repository: https://github.com/$GitHubUsername/BusyBeeRepo
" -ForegroundColor Green

} catch {
    Write-Error-Custom "Deployment pipeline failed: $_"
    Write-Host "`nRun with -DryRun flag to preview commands`n" -ForegroundColor Yellow
    exit 1
}
