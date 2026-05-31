# Nerèa — Extrait de Parfum

A professionally engineered luxury perfume brand website, rebuilt from scratch with a modern, scalable, and maintainable frontend architecture.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-based theme) |
| Animation | Framer Motion |
| Smooth scroll | Lenis |
| Carousel | Embla Carousel |
| Icons | Lucide React |
| Deployment | GitHub Pages (static export) |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system tokens, keyframes, base CSS
│   ├── layout.tsx           # Root layout: fonts, metadata, providers
│   └── page.tsx             # Home page — composes all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky nav with glass effect + mobile menu
│   │   ├── Footer.tsx       # Footer with columns and large logotype
│   │   └── SmoothScrollProvider.tsx
│   ├── ui/
│   │   ├── Bottle.tsx       # Reusable CSS bottle art component
│   │   ├── Cursor.tsx       # Custom cursor dot + ring
│   │   ├── ScrollProgress.tsx
│   │   ├── BackToTop.tsx
│   │   └── WhatsAppFab.tsx
│   ├── sections/            # One component per page section
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── CollectionSection.tsx
│   │   ├── ShowcaseSection.tsx
│   │   ├── BestSellerSection.tsx
│   │   ├── WhySection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── JournalSection.tsx
│   │   └── FaqSection.tsx
│   ├── cards/
│   │   ├── ProductCard.tsx  # Product card with size variant tabs
│   │   └── JournalCard.tsx
│   └── animations/
│       ├── IntroOverlay.tsx
│       ├── RevealWrapper.tsx
│       └── Particles.tsx
├── data/
│   ├── products.ts
│   ├── testimonials.ts
│   └── whyFeatures.ts
├── types/
│   └── index.ts             # Product, Testimonial, NavItem, WhyFeature
├── constants/
│   └── navigation.ts        # NAV_ITEMS, FOOTER_LINKS, MARQUEE_ITEMS
└── lib/
    └── utils.ts             # cn() (clsx + tailwind-merge)
```

---

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # generates /out (static export)
```

---

## Deploy to GitHub Pages

```bash
npm run build
npx gh-pages -d out
```

Then set GitHub repo → Settings → Pages → source to `gh-pages` branch.

---

## Design System

All tokens live in `src/app/globals.css` under `@theme`:

```css
@theme {
  --color-ink:   #0b0a09;
  --color-gold:  #c9a96a;
  --color-cream: #f5efe6;
  /* ... full palette + letter-spacing + animations */
}
```

Fonts loaded via `next/font/google` in `layout.tsx`, referenced in `@theme inline`.

---

## Component Guidelines

- `'use client'` only when the component needs hooks, browser events, or Framer Motion
- `RevealWrapper` — wrap any element needing scroll-triggered entrance; accepts `delay` prop
- `Bottle` — reusable CSS art; pass `name` for product label, `labelSize` for size
- `ProductCard` — self-contained size variant state
- All content lives in `src/data/` — never hardcode strings in JSX

---

## Architecture Decisions

| Decision | Reason |
|---|---|
| Next.js static export | Zero server cost, direct GitHub Pages deploy |
| Framer Motion over GSAP | React-native, no imperative DOM, works with SSR |
| Embla over Swiper | Lighter, React-native, no additional CSS imports |
| Tailwind v4 CSS `@theme` | Design tokens in CSS, no JS config file needed |
| Lenis smooth scroll | Preserves native scroll events for Framer Motion |

---

## Future Expansion

- **Product detail pages** — `src/app/collection/[id]/page.tsx` from `PRODUCTS` data
- **CMS integration** — Replace `src/data/*.ts` with Sanity/Contentful API calls
- **Cart / Wishlist** — `features/cart/` with Zustand or React Context
- **i18n** — Next.js i18n routing + `src/dictionaries/`
- **Analytics** — `next/analytics` or Plausible in `layout.tsx`
