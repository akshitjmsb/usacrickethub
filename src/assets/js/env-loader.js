/**
 * Environment Variable Loader
 *
 * This file should be generated during build or loaded dynamically.
 * For static hosting without a build step, you can use this approach.
 *
 * SECURITY NOTE:
 * - SUPABASE_ANON_KEY is safe to expose on client-side
 * - Ensure Row Level Security (RLS) is enabled in Supabase
 * - Never expose service_role keys or private keys here
 *
 * SETUP INSTRUCTIONS:
 * 1. DO NOT commit this file with actual values
 * 2. Create this file during deployment with actual env vars
 * 3. Or use a build tool like Vite/Webpack to inject env vars
 */

// This is a template - actual values should be injected during build/deployment
window.ENV = {
    SUPABASE_URL: '{{ SUPABASE_URL }}',
    SUPABASE_ANON_KEY: '{{ SUPABASE_ANON_KEY }}'
};

// For local development, you can uncomment and use actual values
// OR better yet, create a build script that replaces the {{ }} placeholders
// with actual environment variable values from .env.local

/**
 * Production Build Script Example:
 *
 * // build-env.js
 * const fs = require('fs');
 * require('dotenv').config({ path: '.env.local' });
 *
 * const template = fs.readFileSync('src/assets/js/env-loader.js', 'utf8');
 * const output = template
 *   .replace('{{ SUPABASE_URL }}', process.env.SUPABASE_URL)
 *   .replace('{{ SUPABASE_ANON_KEY }}', process.env.SUPABASE_ANON_KEY);
 *
 * fs.writeFileSync('dist/assets/js/env-loader.js', output);
 */
