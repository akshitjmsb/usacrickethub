#!/usr/bin/env node

/**
 * Build Script: Environment Variable Injection
 *
 * This script reads .env.local and generates env-loader.js with actual values
 * Run this before deployment or during your build process
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
function loadEnvFile(filePath) {
    const envVars = {};

    if (!fs.existsSync(filePath)) {
        console.error(`Error: ${filePath} not found`);
        console.log('Please create .env.local with SUPABASE_URL and SUPABASE_ANON_KEY');
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    for (const line of lines) {
        // Skip comments and empty lines
        if (line.trim().startsWith('#') || !line.trim()) continue;

        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            let value = match[2].trim();

            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }

            envVars[key] = value;
        }
    }

    return envVars;
}

// Main build function
function buildEnvLoader() {
    console.log('🔧 Building environment loader...');

    // Load .env.local
    const envVars = loadEnvFile(path.join(__dirname, '../.env.local'));

    // Check for required variables
    if (!envVars.SUPABASE_URL || !envVars.SUPABASE_ANON_KEY) {
        console.error('Error: Missing required environment variables');
        console.log('Required: SUPABASE_URL, SUPABASE_ANON_KEY');
        process.exit(1);
    }

    // Read template
    const templatePath = path.join(__dirname, '../src/assets/js/env-loader.js');
    let template = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders
    template = template
        .replace('{{ SUPABASE_URL }}', envVars.SUPABASE_URL)
        .replace('{{ SUPABASE_ANON_KEY }}', envVars.SUPABASE_ANON_KEY);

    // Write output
    const outputPath = path.join(__dirname, '../src/assets/js/env-loader.generated.js');
    fs.writeFileSync(outputPath, template);

    console.log('✅ Environment loader generated successfully!');
    console.log(`📁 Output: ${outputPath}`);
    console.log('\n⚠️  WARNING: Do not commit env-loader.generated.js to git!');
}

// Run the build
buildEnvLoader();
