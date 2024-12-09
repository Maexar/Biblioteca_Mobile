import { createClient } from "@supabase/supabase-js"


const supabaseUrl = "https://esywgaicizmvdngdskwy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzeXdnYWljaXptdmRuZ2Rza3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MDQ0OTEsImV4cCI6MjA0Nzk4MDQ5MX0.PRFyArxUEt5a8-ZibRDancvdmo88h_p0zIlnvxpPnsM"

export const supabase = createClient(supabaseUrl, supabaseKey)