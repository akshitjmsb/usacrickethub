# USA Cricket Hub

Premier destination for cricket gear in the USA. Shop authentic jerseys, professional willow bats, and equipment.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd usacrickethub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   **IMPORTANT**: Never commit this file to git!

4. **Build environment configuration**
   ```bash
   npm run build:env
   ```

5. **Start development**
   ```bash
   npm run dev
   ```

6. **Open in browser**

   Open `src/index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node (http-server)
   npx http-server src -p 8000
   ```

## 📁 Project Structure

```
usacrickethub/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css          # Compiled Tailwind CSS
│   │   └── js/
│   │       ├── config.js           # App configuration loader
│   │       ├── env-loader.js       # Environment template
│   │       ├── env-loader.generated.js  # ⚠️ Generated (not in git)
│   │       ├── sanitizer.js        # XSS protection utilities
│   │       └── supabase-config.js  # Supabase client setup
│   ├── css/
│   │   └── styles.css              # Tailwind source
│   ├── index.html                  # Home page
│   ├── shop.html                   # Product listing
│   ├── product.html                # Product details
│   ├── community.html              # Community page
│   └── shipping-policy.html        # Shipping info
├── scripts/
│   └── build-env.js                # Environment variable builder
├── .env.local                      # ⚠️ Your credentials (not in git)
├── .gitignore
├── package.json
├── tailwind.config.js
├── SECURITY.md                     # Security documentation
└── README.md
```

## 🛠️ Development

### Available Scripts

```bash
# Build environment configuration
npm run build:env

# Build CSS (production)
npm run build:css

# Build everything
npm run build

# Watch CSS for changes
npm run dev:css

# Development (builds env then watches CSS)
npm run dev
```

### Workflow

1. Make changes to HTML/CSS/JS files
2. Tailwind will auto-rebuild CSS (if using `npm run dev`)
3. Refresh browser to see changes

## 🔒 Security

### Critical Security Features

1. **Environment Variables**: Sensitive credentials stored in `.env.local`
2. **Input Sanitization**: All user/database input sanitized via `Sanitizer.js`
3. **XSS Protection**: HTML escaping and URL validation
4. **Supabase RLS**: Row Level Security must be enabled

### Setup Supabase Security

```sql
-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
ON products FOR SELECT
USING (true);

-- Restrict write access (example)
CREATE POLICY "Authenticated users can insert"
ON products FOR INSERT
WITH CHECK (auth.role() = 'authenticated');
```

See [SECURITY.md](SECURITY.md) for complete security documentation.

## 🗄️ Database Schema

### Products Table

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎨 Tech Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Build Tool**: Tailwind CLI

## 🚢 Deployment

### Vercel Deployment

1. **Set environment variables** in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

2. **Configure build settings**:
   ```
   Build Command: npm run build
   Output Directory: src
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## 📝 TODO

- [ ] Implement shopping cart functionality
- [ ] Add user authentication
- [ ] Implement search functionality
- [ ] Add product filters
- [ ] Set up automated testing
- [ ] Add error boundary handling
- [ ] Implement analytics
- [ ] Add loading skeletons
- [ ] Optimize images (lazy loading, WebP)
- [ ] Add service worker for offline support

## 🐛 Known Issues

- Shopping cart is non-functional (UI only)
- Search input doesn't work
- Product filters don't filter
- Some navigation links go nowhere
- Duplicate HTML in shop.html (lines 379-548)

## 📄 License

ISC

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run build` to test
5. Submit a pull request

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**⚠️ IMPORTANT SECURITY NOTES:**

1. **NEVER commit `.env.local`** to version control
2. **NEVER commit `env-loader.generated.js`** to version control
3. **ALWAYS enable Row Level Security** in Supabase
4. **NEVER expose `service_role` keys** in client-side code
5. **Review SECURITY.md** before deploying to production
