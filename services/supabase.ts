
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env as any).SUPABASE_URL;
const supabaseAnonKey = (process.env as any).SUPABASE_ANON_KEY;

/**
 * We initialize the client only if the required environment variables are present.
 * If they are missing, we provide a mock object to prevent "Uncaught Error: supabaseUrl is required"
 * and allow the rest of the application to function gracefully.
 */
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({
          data: { subscription: { unsubscribe: () => {} } },
        }),
        signInWithPassword: async () => ({
          data: { user: null, session: null },
          error: { message: "Database connection not configured. Please check environment variables." }
        }),
        signUp: async () => ({
          data: { user: null, session: null },
          error: { message: "Database connection not configured. Please check environment variables." }
        }),
        signOut: async () => ({ error: null }),
      },
      from: () => ({
        insert: async () => ({
          data: null,
          error: { message: "Database connection not configured. Data could not be saved." }
        }),
        select: () => ({
          order: () => ({
            data: [],
            error: { message: "Database connection not configured." }
          }),
        }),
      }),
    } as any);
