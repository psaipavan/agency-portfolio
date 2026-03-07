# Good Will Agency — Project Setup Walkthrough

## ✅ What Was Built

A complete, hosting-ready **React + Bootstrap 5** agency portfolio project structure with 20 files.

## 📁 Final File Tree

```
Good will/
├── index.html              ← HTML template (SEO meta tags, OG tags)
├── package.json            ← Dependencies (React 18, Bootstrap 5, Vite, React Router)
├── vite.config.js          ← Vite build config (dev port 3000, output: dist/)
├── netlify.toml            ← Netlify deploy config + SPA redirect rule
├── vercel.json             ← Vercel deploy config + SPA rewrite rule
├── .gitignore
├── README.md               ← Full setup & hosting guide
├── public/
│   └── favicon.svg         ← Brand "GW" favicon
└── src/
    ├── main.jsx            ← App entry (Bootstrap CSS/JS + Icons imported here)
    ├── App.jsx             ← Root component with React Router routes
    ├── styles/
    │   └── global.css      ← CSS variables, dark theme, glassmorphism, animations
    ├── components/
    │   ├── Navbar.jsx      ← Sticky nav, scroll-aware glass bg, mobile collapse
    │   ├── Footer.jsx      ← Links, social icons, newsletter form
    │   └── Hero.jsx        ← Full-screen hero with gradient, stats cards, CTAs
    └── pages/
        ├── Home.jsx        ← Hero + services grid + CTA banner
        ├── About.jsx       ← Story, value pillars, team cards
        ├── Services.jsx    ← 6 service cards with feature checklists
        ├── Portfolio.jsx   ← Filterable project grid
        └── Contact.jsx     ← Contact form with success state
```

## ✅ Build Verification

- `npm install` → 73 packages installed, no errors
- `npm run build` → **✓ built in 1.44s**, no errors

## 🌐 Hosting – Ready To Deploy

| Platform | Steps |
|---|---|
| **Netlify** | Push to GitHub → Connect repo → Auto-detects [netlify.toml](file:///c:/Users/sai%20pavan/OneDrive/Desktop/Good%20will/netlify.toml) |
| **Vercel**  | Push to GitHub → Connect repo → Auto-detects [vercel.json](file:///c:/Users/sai%20pavan/OneDrive/Desktop/Good%20will/vercel.json) |

Both configs handle the SPA redirect so React Router deep links work correctly.

## 🚀 Dev Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build to /dist (production)
npm run preview  # Preview production build locally
```
