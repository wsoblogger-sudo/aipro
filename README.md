# AIPROFITGEN — Premium AI Fintech SaaS Website

A comprehensive Next.js 16 (App Router) website with a futuristic, premium, trust-focused design for an AI-powered fintech SaaS platform.

## Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Futuristic Design**: Glassmorphism, neon effects, animated gradients, dark theme
- **Responsive**: Mobile-first responsive design (320px, 768px, 1440px breakpoints)
- **Static Export**: Configured for static HTML export via `next export`
- **Accessible**: WCAG AA compliant with proper focus states and ARIA labels
- **Professional UX**: Fintech-grade premium aesthetic with trust-first messaging
- **12 Pages**: Homepage, 6 software pages, affiliate, FAQ, about, contact, legal pages
- **Interactive**: Animated counters, smooth scrolling, form handling, theme toggle
- **SEO Optimized**: Semantic HTML, meta tags, proper heading hierarchy

## Pages

1. **Home** (`/`) - Master landing page with hero, software grid, proof sections
2. **Software Pages** (6 pages):
   - `/software/cashflow-tools`
   - `/software/usdtrex-pro`
   - `/software/ethercraft-pro`
   - `/software/banking-botnet`
   - `/software/arbitrage-robot`
   - `/software/aiprofitgen-x`
3. **Affiliate Program** (`/affiliate`) - Commission tiers and program details
4. **FAQ** (`/faq`) - Searchable accordion FAQ organized by category
5. **About** (`/about`) - Mission, philosophy, values, team placeholder
6. **Contact** (`/contact`) - Secure contact form with Netlify Forms integration
7. **Terms of Service** (`/terms`)
8. **Privacy Policy** (`/privacy`)
9. **Disclaimer / Risk Notice** (`/disclaimer`)
10. **Login** (`/login`) - Placeholder
11. **Create Account** (`/create-account`) - Placeholder

## Design System

### Color Palette
- Primary: Deep Purple (#7C3AED, #6B21A8)
- Accent: Neon Purple (#A78BFA) / Neon Cyan (#06B6D4)
- Background: Dark gradients (auto-adjusts for light theme)
- Text: White/light gray on dark, dark text on light

### Typography
- Font: Geist Sans (variable font from Next.js)
- Clear visual hierarchy
- Responsive sizes using `clamp()`

### Animations
- Neon glow pulse effects
- Floating elements
- Smooth scroll-triggered reveals
- Animated counters
- Gradient shifts
- Border flow animations

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build static export
npm run build && next export
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Deployment

### Netlify
1. Push to GitHub/GitLab
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Configure Netlify Forms for contact form

### Vercel
1. Push to GitHub
2. Import project to Vercel
3. Auto-detected Next.js settings work out of the box

## Configuration

### Theme Toggle
Light/dark theme toggle with localStorage persistence. Theme preference is saved and applied on page load.

### Contact Form
Configured for Netlify Forms. To use:
1. Deploy to Netlify
2. Forms will be automatically detected
3. View submissions in Netlify dashboard

### Customization
- Update software data in `app/lib/software.ts`
- Modify colors in `app/globals.css` CSS variables
- Add real images by replacing placeholder elements
- Connect authentication system to login/create-account pages

## Structure

```
/app
  /[pages]       # All route pages
  /lib           # Data and utilities
  /software/[id] # Dynamic software pages
  globals.css    # Design system and global styles
  layout.tsx     # Root layout with header/footer
/public
  /js            # Client-side JavaScript
```

## Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast meets WCAG AA (4.5:1)
- Alt text placeholders on images

## Notes

- All pricing, testimonials, and proof sections use placeholder data
- Software screenshots should be provided by the user
- Legal pages (terms, privacy, disclaimer) are placeholders and should be reviewed by legal counsel
- Login and create-account pages are placeholders for authentication integration

## License

Proprietary - AIPROFITGEN Platform

---

**Important Disclaimers:**
- No guarantees of profits or outcomes
- Software-based automation tools only
- Users responsible for decisions and results
- Compliance and legal requirements are user's responsibility
