# Security Documentation

## Environment Variables

This project uses environment variables to secure sensitive configuration data.

### Setup Instructions

1. **Create `.env.local` file** (if not exists):
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your Supabase credentials** to `.env.local`:
   ```env
   SUPABASE_URL=your_supabase_url_here
   SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. **Build the environment loader**:
   ```bash
   npm run build:env
   ```
   This generates `src/assets/js/env-loader.generated.js` with your actual credentials.

4. **Never commit sensitive files**:
   - `.env.local` - Contains actual credentials
   - `env-loader.generated.js` - Contains injected credentials

   Both are already in `.gitignore`.

### Development Workflow

```bash
# Initial setup
npm install
npm run build:env

# Development
npm run dev

# Production build
npm run build
```

### Security Best Practices Implemented

#### 1. Environment Variables
- ✅ Credentials stored in `.env.local` (not committed)
- ✅ Build script injects values into generated file
- ✅ Generated file excluded from git

#### 2. Input Sanitization
- ✅ All user input sanitized via `Sanitizer.js`
- ✅ HTML special characters escaped
- ✅ URL validation prevents XSS
- ✅ Database values sanitized before rendering

#### 3. Supabase Security
- ✅ Using `anon` key (safe for client-side)
- ⚠️ **CRITICAL**: Ensure Row Level Security (RLS) is enabled in Supabase
- ⚠️ **CRITICAL**: Never expose `service_role` key client-side

### Required Supabase Setup

1. **Enable Row Level Security (RLS)**:
   ```sql
   ALTER TABLE products ENABLE ROW LEVEL SECURITY;
   ```

2. **Create policies for public read access**:
   ```sql
   CREATE POLICY "Allow public read access"
   ON products FOR SELECT
   USING (true);
   ```

3. **Restrict write access** (adjust as needed):
   ```sql
   CREATE POLICY "Authenticated users can insert"
   ON products FOR INSERT
   WITH CHECK (auth.role() = 'authenticated');
   ```

### Security Checklist

- [ ] `.env.local` contains valid credentials
- [ ] `.env.local` is in `.gitignore`
- [ ] `env-loader.generated.js` is in `.gitignore`
- [ ] Row Level Security enabled in Supabase
- [ ] Appropriate RLS policies created
- [ ] No `service_role` keys in client code
- [ ] All user input is sanitized
- [ ] URLs are validated before use

### Incident Response

If credentials are accidentally committed:

1. **Immediately rotate keys** in Supabase dashboard
2. **Remove from git history**:
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch .env.local" \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. **Update `.env.local` with new credentials**
4. **Force push** (if necessary): `git push --force`
5. **Notify team members** to pull latest changes

### Reporting Security Issues

If you discover a security vulnerability, please email: [your-security-email@domain.com]

**Do not** open public issues for security vulnerabilities.
