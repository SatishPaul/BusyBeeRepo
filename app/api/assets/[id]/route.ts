import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('assets')
      .select(`
        *,
        users:author_id(id, username, display_name, avatar_url)
      `)
      .eq('id', params.id)
      .eq('status', 'published')
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: 'Asset not found' },
        { status: 404 }
      )
    }

    // Increment view count
    await supabase
      .from('assets')
      .update({ views_count: data.views_count + 1 })
      .eq('id', params.id)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch asset' },
      { status: 500 }
    )
  }
}
