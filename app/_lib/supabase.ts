
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fmitmsyodzdbyddrowrt.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtaXRtc3lvZHpkYnlkZHJvd3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MzI5NzUsImV4cCI6MjA2MjAwODk3NX0.w4AmkGlTTuP6LcqpgrDRycHAPvyNzHhRqjSQvOjxNfA")

export { supabase };