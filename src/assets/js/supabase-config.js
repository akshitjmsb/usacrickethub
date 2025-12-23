/**
 * Supabase Client Configuration
 *
 * REQUIRED SETUP:
 * 1. Run: node scripts/build-env.js (to generate env-loader.generated.js)
 * 2. Include these scripts in your HTML in this order:
 *    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *    <script src="./assets/js/env-loader.generated.js"></script>
 *    <script src="./assets/js/config.js"></script>
 *    <script src="./assets/js/sanitizer.js"></script>
 *    <script src="./assets/js/supabase-config.js"></script>
 *
 * SECURITY:
 * - Never commit env-loader.generated.js to git
 * - Ensure Row Level Security (RLS) is enabled in Supabase
 * - The ANON_KEY is safe for client-side use but requires RLS
 */

let supabaseClient = null;

// Initialize Supabase client with configuration from AppConfig
function initializeSupabase() {
    try {
        // Get configuration from AppConfig (loaded via env-loader and config.js)
        const config = AppConfig.getSupabaseConfig();

        // Initialize the Supabase client
        supabaseClient = supabase.createClient(config.url, config.anonKey);

        console.log('✅ Supabase Client Initialized');
        return supabaseClient;

    } catch (error) {
        console.error('❌ Failed to initialize Supabase:', error);
        console.error('Make sure to run: node scripts/build-env.js');
        throw error;
    }
}

// Initialize on load
if (typeof supabase === 'undefined') {
    console.error('❌ Supabase JS library not loaded. Include the CDN script first.');
} else if (typeof AppConfig === 'undefined') {
    console.error('❌ AppConfig not loaded. Include config.js before supabase-config.js');
} else {
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSupabase);
    } else {
        initializeSupabase();
    }
}

// Export for use in other scripts
window.getSupabaseClient = function() {
    if (!supabaseClient) {
        throw new Error('Supabase client not initialized yet');
    }
    return supabaseClient;
};
