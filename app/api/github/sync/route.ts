import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface GitHubAsset {
  name: string
  description: string
  url: string
  type: string
}

async function fetchGitHubAssets(owner: string, repo: string, token: string): Promise<GitHubAsset[]> {
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  }

  try {
    // Get latest releases
    const releasesRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`, {
      headers,
    })

    if (!releasesRes.ok) {
      throw new Error(`GitHub API error: ${releasesRes.status}`)
    }

    const releases = await releasesRes.json()
    const assets: GitHubAsset[] = []

    for (const release of releases.slice(0, 5)) {
      // Parse release description for asset metadata
      const description = release.body || ''
      
      // Simple type detection based on file names and content
      let type = 'Template'
      if (description.toLowerCase().includes('prompt')) type = 'Prompt'
      if (description.toLowerCase().includes('skill')) type = 'Skill'
      if (description.toLowerCase().includes('workflow')) type = 'Workflow'
      if (description.toLowerCase().includes('agent')) type = 'Agent'

      assets.push({
        name: release.name || release.tag_name,
        description: description.substring(0, 300),
        url: release.html_url,
        type,
      })
    }

    return assets
  } catch (error) {
    console.error('Failed to fetch GitHub assets:', error)
    return []
  }
}

export async function POST(request: NextRequest) {
  try {
    const { owner, repo, branch } = await request.json()

    if (!owner || !repo) {
      return NextResponse.json(
        { error: 'Missing owner or repo' },
        { status: 400 }
      )
    }

    const githubToken = process.env.GITHUB_TOKEN
    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      )
    }

    // Fetch assets from GitHub
    const assets = await fetchGitHubAssets(owner, repo, githubToken)

    // Insert into moderation queue
    const submissions = assets.map((asset) => ({
      title: asset.name,
      description: asset.description,
      type: asset.type,
      tags: [owner, 'github-import'],
      content: '',
      source_url: asset.url,
      author_id: null, // System import
      status: 'pending',
      submission_type: 'github_import',
    }))

    const { data, error } = await supabase
      .from('moderation_queue')
      .insert(submissions)
      .select()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to import assets' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: `Successfully imported ${data?.length || 0} assets from ${owner}/${repo}`,
      count: data?.length || 0,
    })
  } catch (error) {
    console.error('GitHub sync error:', error)
    return NextResponse.json(
      { error: 'Failed to sync GitHub repository' },
      { status: 500 }
    )
  }
}
