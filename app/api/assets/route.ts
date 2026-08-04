import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

interface QueryParams {
  page?: string;
  limit?: string;
  search?: string;
  type?: string;
  category?: string;
  sort?: string;
}

/**
 * GET /api/assets
 * 
 * Query parameters:
 * - page: Page number (default: 1)
 * - limit: Results per page (default: 20, max: 100)
 * - search: Full-text search query
 * - type: Filter by asset type (Prompt, Skill, etc.)
 * - category: Filter by category ID
 * - sort: Sort by (created, stars, downloads, updated)
 */
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(100, parseInt(searchParams.get('limit') || '20', 10));
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type');
    const category = searchParams.get('category');
    const sort = searchParams.get('sort') || 'created';

    // Calculate offset
    const offset = (page - 1) * limit;

    // Build query
    let query = supabase
      .from('assets')
      .select(
        `
        id,
        title,
        slug,
        description,
        type,
        author_id,
        version,
        tags,
        thumbnail_url,
        views_count,
        downloads_count,
        stars_count,
        created_at,
        published_at,
        users!assets_author_id_fkey(username, display_name, avatar_url)
        `,
        { count: 'exact' }
      )
      .eq('maturity_status', 'Production') // Only show published assets
      .order(
        sort === 'stars'
          ? 'stars_count'
          : sort === 'downloads'
            ? 'downloads_count'
            : sort === 'updated'
              ? 'updated_at'
              : 'created_at',
        { ascending: false }
      );

    // Apply filters
    if (type) {
      query = query.eq('type', type);
    }

    if (category) {
      // Note: This assumes you have a junction table or JSONB column for categories
      query = query.filter('categories', 'cs', `{"${category}"}`);
    }

    // Apply search
    if (search) {
      query = query.textSearch('search_vector', search, {
        type: 'websearch',
      });
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    // Execute query
    const { data, error, count } = await query;

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch assets' },
        { status: 500 }
      );
    }

    // Transform response
    const assets = data?.map((asset) => ({
      ...asset,
      author: asset.users
        ? {
            id: asset.author_id,
            username: asset.users.username,
            displayName: asset.users.display_name,
            avatarUrl: asset.users.avatar_url,
          }
        : null,
    })) ?? [];

    return NextResponse.json({
      data: assets,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
        hasMore: page < Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/assets
 * Create a new asset (authenticated users only)
 */
export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication check
    // const { data: { user } } = await supabase.auth.getUser();
    // if (!user) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();

    // Validate required fields
    const required = ['title', 'description', 'type', 'tags'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 50);

    // Create asset
    const { data, error } = await supabase
      .from('assets')
      .insert([
        {
          title: body.title,
          slug,
          description: body.description,
          type: body.type,
          author_id: body.author_id, // TODO: Use authenticated user
          tags: body.tags,
          content: body.content,
          maturity_status: 'Draft',
        },
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to create asset' },
        { status: 500 }
      );
    }

    return NextResponse.json(data?.[0], { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
