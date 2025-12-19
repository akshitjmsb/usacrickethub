/**
 * Supabase Client Configuration
 * 
 * REQUIRED: Include the Supabase JS CDN in your HTML before this script:
 * <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 */

const SUPABASE_URL = 'https://vppxfhqkcepiobuutpzy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwcHhmaHFrY2VwaW9idXV0cHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzUxMDksImV4cCI6MjA4MTc1MTEwOX0.FRNaK96x77L6J-lZefDjjcdzzsI9-AzitsHF_ufRtco';

// Initialize the client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('Supabase Client Initialized');
