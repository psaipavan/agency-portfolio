# Good Will Agency — Portfolio Website

A modern agency portfolio website built with **React**, **Bootstrap 5**, and **Vite**.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Bootstrap 5 | Styling & components |
| Bootstrap Icons | Icon library |
| React Router v6 | Client-side routing |
| Vite | Build tool & dev server |

## 📁 Project Structure

```
good-will/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── assets/          # Images, fonts, media
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Hero.jsx
│   ├── pages/           # Page-level components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── styles/          # Global styles
│   │   └── global.css
│   ├── App.jsx          # Root component with routing
│   └── main.jsx         # App entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Hosting

This project is ready to deploy on:
- **Vercel** — connect GitHub repo, auto-detects Vite
- **Netlify** — set build command: `npm run build`, publish dir: `dist`
- **GitHub Pages** — add `base` in `vite.config.js` if needed

> Build output goes to `/dist` folder.
