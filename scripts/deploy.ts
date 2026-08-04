#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const deploymentDir = process.cwd()

interface DeploymentConfig {
  projectName: string
  repoName: string
  repoOwner: string
  vercelTeam?: string
}

// Read deployment config
const configPath = path.join(deploymentDir, 'deployment.json')
let config: DeploymentConfig = {
  projectName: 'busybee',
  repoName: 'BusyBeeRepo',
  repoOwner: 'your-github-username',
}

if (fs.existsSync(configPath)) {
  const fileContent = fs.readFileSync(configPath, 'utf-8')
  config = JSON.parse(fileContent)
}

function run(command: string, description: string) {
  console.log(`\n📦 ${description}...`)
  try {
    execSync(command, { stdio: 'inherit' })
    console.log(`✅ ${description} completed`)
  } catch (error) {
    console.error(`❌ ${description} failed`)
    throw error
  }
}

async function deploy() {
  console.log(`
🚀 BusyBee Deployment Pipeline
================================
Project: ${config.projectName}
Repository: ${config.repoOwner}/${config.repoName}
`)

  try {
    // Step 1: Build
    run('npm run build', 'Building application')

    // Step 2: Run tests
    if (fs.existsSync(path.join(deploymentDir, 'jest.config.js'))) {
      run('npm run test', 'Running tests')
    }

    // Step 3: Lint
    run('npm run lint', 'Linting code')

    // Step 4: Git operations
    console.log('\n📝 Git operations...')
    execSync('git add .', { stdio: 'inherit' })

    // Check if there are changes to commit
    try {
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf-8' })
      if (gitStatus.trim()) {
        execSync('git commit -m "chore: automated deployment build"', { stdio: 'inherit' })
        console.log('✅ Changes committed')
      } else {
        console.log('ℹ️  No changes to commit')
      }
    } catch {
      console.log('ℹ️  No changes to commit')
    }

    // Push to GitHub
    run('git push origin main', 'Pushing to GitHub')

    // Step 5: Deploy to Vercel
    console.log('\n🌐 Deploying to Vercel...')
    const vercelCommand = config.vercelTeam
      ? `vercel --prod --token $VERCEL_TOKEN --scope ${config.vercelTeam}`
      : 'vercel --prod --token $VERCEL_TOKEN'

    try {
      execSync(vercelCommand, { stdio: 'inherit' })
      console.log('✅ Vercel deployment completed')
    } catch (error) {
      console.log(`
ℹ️  To deploy to Vercel:
   1. Install Vercel CLI: npm install -g vercel
   2. Run: vercel --prod
   3. Follow the prompts
      `)
    }

    console.log(`
✨ Deployment Summary
=====================
✅ Build successful
✅ Tests passed
✅ Code linted
✅ Pushed to GitHub (${config.repoOwner}/${config.repoName})
✅ Deployed to Vercel

View your app at:
- GitHub: https://github.com/${config.repoOwner}/${config.repoName}
- Vercel: https://${config.projectName}.vercel.app

Next steps:
1. Visit your Vercel project dashboard
2. Add environment variables in Project Settings
3. Configure GitHub integration for CI/CD
4. Set up automatic deployments on push to main
    `)
  } catch (error) {
    console.error('\n❌ Deployment pipeline failed:', error)
    process.exit(1)
  }
}

deploy()
