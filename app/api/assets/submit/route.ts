import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    const {
      data: { user },
    } = await supabase.auth.getUser(token)

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { title, description, type, tags, content, sourceUrl } = await request.json()

    if (!title || !description || !type || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    // Insert into moderation_queue
    const { data, error } = await supabase
      .from('moderation_queue')
      .insert([
        {
          title,
          description,
          type,
          tags,
          content,
          source_url: sourceUrl,
          author_id: user.id,
          status: 'pending',
          submission_type: 'new_asset',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Moderation queue insert error:', error)
      return NextResponse.json(
        { error: 'Failed to submit asset' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Submit asset error:', error)
    return NextResponse.json(
      { error: 'Failed to submit asset' },
      { status: 500 }
    )
  }
}
