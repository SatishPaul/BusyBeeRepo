import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    // Get user
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('username', params.username)
      .single()

    if (userError || !user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Get asset count
    const { count: assetCount } = await supabase
      .from('assets')
      .select('*', { count: 'exact', head: true })
      .eq('author_id', user.id)
      .eq('status', 'published')

    // Get download count
    const { data: assets } = await supabase
      .from('assets')
      .select('downloads_count')
      .eq('author_id', user.id)
      .eq('status', 'published')

    const totalDownloads = assets?.reduce((sum, a) => sum + (a.downloads_count || 0), 0) || 0

    // Get stars count
    const { data: starredAssets } = await supabase
      .from('assets')
      .select('stars_count')
      .eq('author_id', user.id)
      .eq('status', 'published')

    const totalStars = starredAssets?.reduce((sum, a) => sum + (a.stars_count || 0), 0) || 0

    // Get collections count
    const { count: collectionCount } = await supabase
      .from('collections')
      .select('*', { count: 'exact', head: true })
      .eq('creator_id', user.id)

    return NextResponse.json({
      assets_published: assetCount || 0,
      total_downloads: totalDownloads,
      total_stars: totalStars,
      collections_created: collectionCount || 0,
    })
  } catch (error) {
    console.error('Failed to fetch user stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user stats' },
      { status: 500 }
    )
  }
}
