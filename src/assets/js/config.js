/**
 * Configuration Module
 * Loads environment variables and provides secure configuration
 *
 * IMPORTANT: This file uses a simple approach for static sites.
 * For production, consider using Vite or similar build tools for proper env variable injection.
 */

// Configuration object
const AppConfig = {
    supabase: {
        url: null,
        anonKey: null
    },

    // Initialize configuration
    init: function() {
        // For development: Load from window.ENV if available (injected via build process)
        // For now, we'll use a simple script injection method

        // Check if config is already loaded via env-loader.js
        if (window.ENV && window.ENV.SUPABASE_URL && window.ENV.SUPABASE_ANON_KEY) {
            this.supabase.url = window.ENV.SUPABASE_URL;
            this.supabase.anonKey = window.ENV.SUPABASE_ANON_KEY;
        } else {
            console.error('Environment variables not loaded. Make sure env-loader.js is included before config.js');
            throw new Error('Configuration not available');
        }

        return this;
    },

    // Get Supabase configuration
    getSupabaseConfig: function() {
        if (!this.supabase.url || !this.supabase.anonKey) {
            throw new Error('Supabase configuration not initialized. Call AppConfig.init() first.');
        }
        return {
            url: this.supabase.url,
            anonKey: this.supabase.anonKey
        };
    }
};

// Auto-initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            AppConfig.init();
        } catch (error) {
            console.error('Failed to initialize configuration:', error);
        }
    });
} else {
    try {
        AppConfig.init();
    } catch (error) {
        console.error('Failed to initialize configuration:', error);
    }
}
