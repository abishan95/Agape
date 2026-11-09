import { createClient } from '@supabase/supabase-js'

// Direct fallback configuration to bypass missing .env issues
const SUPABASE_URL = 'https://bgqjtqnrgloserapmnvf.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_VV4SXieNy_50ao_SEvGB2A_66bxJ18k'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)