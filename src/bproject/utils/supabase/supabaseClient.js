// supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supaUrl = import.meta.env.VITE_SUPABASE_URL; 
const supaKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supaUrl, supaKey);