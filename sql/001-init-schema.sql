-- BusyBeeRepo Supabase Schema
-- Core Tables for Asset Management and Search

-- Users Table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  github_username TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Asset Type Enum
CREATE TYPE asset_type AS ENUM ('Prompt', 'Skill', 'Plugin', 'Workflow', 'Agent', 'Template', 'Other');

-- Maturity Status Enum
CREATE TYPE maturity_status AS ENUM ('Idea', 'Draft', 'Ready', 'Verified', 'Production');

-- Assets Table (Core table for all assets)
CREATE TABLE IF NOT EXISTS public.assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  type asset_type NOT NULL,
  maturity_status maturity_status DEFAULT 'Draft',
  
  -- Metadata
  author_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  version TEXT DEFAULT '1.0.0',
  license TEXT DEFAULT 'MIT',
  tags TEXT[] DEFAULT '{}',
  industries TEXT[] DEFAULT '{}',
  frameworks TEXT[] DEFAULT '{}',
  
  -- Content
  content TEXT,
  thumbnail_url TEXT,
  
  -- Statistics
  views_count INT DEFAULT 0,
  downloads_count INT DEFAULT 0,
  stars_count INT DEFAULT 0,
  forks_count INT DEFAULT 0,
  
  -- GitHub Integration
  github_repo_url TEXT,
  github_raw_url TEXT,
  github_file_path TEXT,
  last_github_sync TIMESTAMP WITH TIME ZONE,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  
  -- Full-text search
  search_vector TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', COALESCE(title, '') || ' ' || COALESCE(description, ''))
  ) STORED
);

-- Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  display_order INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Collections (e.g., "Best Prompts for React", "Healthcare AI Tools")
CREATE TABLE IF NOT EXISTS public.collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  curator_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  cover_image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Collection Assets (Junction table)
CREATE TABLE IF NOT EXISTS public.collection_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID NOT NULL REFERENCES public.collections(id) ON DELETE CASCADE,
  asset_id UUID NOT NULL REFERENCES public.assets(id) ON DELETE CASCADE,
  position INT,
  UNIQUE(collection_id, asset_id)
);

-- Ratings/Reviews
CREATE TABLE IF NOT EXISTS public.ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID NOT NULL REFERENCES public.assets(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  helpful_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(asset_id, user_id)
);

-- User Follows (Track who follows whom)
CREATE TABLE IF NOT EXISTS public.follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(follower_id, following_id),
  CHECK (follower_id != following_id)
);

-- Asset Saves (Bookmarks/Favorites)
CREATE TABLE IF NOT EXISTS public.saves (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  asset_id UUID NOT NULL REFERENCES public.assets(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, asset_id)
);

-- Search History (for analytics)
CREATE TABLE IF NOT EXISTS public.search_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  query TEXT NOT NULL,
  results_count INT,
  clicked_asset_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indices for Performance
CREATE INDEX IF NOT EXISTS idx_assets_type ON public.assets(type);
CREATE INDEX IF NOT EXISTS idx_assets_status ON public.assets(maturity_status);
CREATE INDEX IF NOT EXISTS idx_assets_author ON public.assets(author_id);
CREATE INDEX IF NOT EXISTS idx_assets_created ON public.assets(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_assets_published ON public.assets(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_assets_stars ON public.assets(stars_count DESC);
CREATE INDEX IF NOT EXISTS idx_assets_search ON public.assets USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS idx_assets_industries ON public.assets USING GIN(industries);
CREATE INDEX IF NOT EXISTS idx_assets_frameworks ON public.assets USING GIN(frameworks);
CREATE INDEX IF NOT EXISTS idx_ratings_asset ON public.ratings(asset_id);
CREATE INDEX IF NOT EXISTS idx_ratings_user ON public.ratings(user_id);
CREATE INDEX IF NOT EXISTS idx_saves_user ON public.saves(user_id);
CREATE INDEX IF NOT EXISTS idx_saves_asset ON public.saves(asset_id);
CREATE INDEX IF NOT EXISTS idx_collection_assets_collection ON public.collection_assets(collection_id);

-- RLS Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saves ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;

-- Public read access to published assets
CREATE POLICY "Published assets are viewable by everyone" ON public.assets
  FOR SELECT USING (maturity_status = 'Production' OR author_id = auth.uid());

-- Users can update own profile
CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (id = auth.uid());

-- Users can create saves for themselves
CREATE POLICY "Users can manage own saves" ON public.saves
  FOR ALL USING (user_id = auth.uid());

-- Users can manage own ratings
CREATE POLICY "Users can manage own ratings" ON public.ratings
  FOR ALL USING (user_id = auth.uid());

-- Users can manage own follows
CREATE POLICY "Users can manage own follows" ON public.follows
  FOR ALL USING (follower_id = auth.uid());
