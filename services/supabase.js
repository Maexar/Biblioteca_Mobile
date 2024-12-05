import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(process.env.supabaseUrl, supaprocess.env.supabaseKey)