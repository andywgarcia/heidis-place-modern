# Heidi's Place Custom Picture Framing

Website for Heidi's Place Custom Picture Framing in Bothell, WA — a modern redesign built with React, TypeScript, and Vite.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- **React Router DOM** (routing)
- **Vanilla CSS** (no UI frameworks)

## Getting Started

```bash
git clone git@github.com:andywgarcia/heidis-place-modern.git
cd heidis-place-modern
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:5173` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
heidis-place-modern/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── components/
│   │   ├── AnimatedSection.tsx   # Scroll-triggered animation wrapper
│   │   ├── Lightbox.tsx          # Full-screen image lightbox
│   │   └── Lightbox.css
│   ├── hooks/
│   │   └── useScrollAnimation.ts # IntersectionObserver hook
│   ├── pages/
│   │   ├── Home.tsx / Home.css   # Main landing page
│   │   ├── Framing.tsx           # Distinctive Framing sub-page
│   │   ├── Needlework.tsx        # Needlework Specialist sub-page
│   │   ├── UniqueTouch.tsx       # A Unique Touch sub-page
│   │   └── Quality.tsx           # Quality Materials sub-page
│   ├── App.tsx                   # Router setup
│   └── main.tsx
├── index.html
└── vite.config.ts
```

## Features

- Fully responsive design (mobile → ultra-wide)
- Scroll-triggered fade-in animations
- Click-to-fullscreen image lightbox (17 images, keyboard navigable)
- Google Maps embed with Bothell, WA pin
- Real customer testimonials from Google Reviews
- Per-section calls to action
- Facebook + phone contact links