import { createClient } from '@supabase/supabase-js';

function isValidHttpUrl(value?: string): value is string {
  if (!value) return false;

  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const hasValidSupabaseUrl = isValidHttpUrl(rawSupabaseUrl);
const supabaseUrl: string = hasValidSupabaseUrl
  ? rawSupabaseUrl
  : 'https://example.supabase.co';
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key-placeholder';

if (!hasValidSupabaseUrl) {
  console.warn('NEXT_PUBLIC_SUPABASE_URL is missing or invalid. Using a placeholder URL during build.');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Using a placeholder key during build.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

/**
 * Server-side Supabase client with service role key
 * Only use in server actions and API routes
 */
export const supabaseAdmin = () => {
  if (!isValidHttpUrl(process.env.NEXT_PUBLIC_SUPABASE_URL)) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is missing or invalid');
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set');
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
};
