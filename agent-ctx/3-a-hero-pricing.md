# Task 3-a — Hero Fixes & Pricing Section

## Work Completed

### 1. Hero Dashboard Visual Fixes (`src/components/sections/Hero.tsx`)

All 5 requested fixes applied:

1. **Bar chart overflow**: Added `overflow-hidden` to the bar chart container (`<div className="mt-3 flex h-10 items-end gap-1 overflow-hidden">`) and `min-h-[4px]` to each bar element.

2. **Floating cards viewport overflow**: Changed `hidden sm:block` to `hidden lg:block` on both the "Ventas del mes" floating card and the "Mentor" floating card, so they only appear on larger screens where there's enough room.

3. **Subtitle text overflow**: Added `truncate` class to the subtitle paragraph (`<motion.p>` with the Hub description text).

4. **Progress overview grid responsive**: Changed `grid-cols-3` to `grid-cols-1 sm:grid-cols-3` and adjusted padding to `p-3 sm:p-3` so the 3-column progress cards stack on mobile.

5. **Animated gradient border on hover**: Added `group transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.25)]` to the outer dashboard card, and a subtle `group-hover:bg-gradient-to-br group-hover:from-brand-muted/30 group-hover:to-white` transition on the inner card.

### 2. New Pricing Section (`src/components/sections/Pricing.tsx`)

Created a world-class pricing section with:

- **3 tiers**: GRATIS (Emprende), PRO (Crece), ELITE (Escala)
- **Monthly/Annual toggle**: Switch component with "Ahorra ~17%" badge on annual
- **PRO card highlighted**: Larger (`lg:scale-105`), "Más popular" badge with gradient, `gradient-border` class, shadow-glow
- **Framer Motion animations**: Fade-in on scroll with stagger via `containerVariants` and `cardVariants`
- **Feature rows**: `CheckCircle2` for included, `X` for not included (with `line-through`)
- **Design**: `rounded-3xl`, `border-brand-border`, `shadow-soft`, `hover:shadow-lift`
- **Gradient CTA buttons**: Each tier has its own color scheme matching the brand palette
- **Section id="pricing"**: Proper anchor for navigation
- **Responsive**: Stack on mobile (`grid-cols-1`), 3 columns on lg (`lg:grid-cols-3`)

Pricing data:
- GRATIS: $0/mes
- PRO: $29/mes or $290/año
- ELITE: $79/mes or $790/año

### 3. Page Integration (`src/app/page.tsx`)

Added `Pricing` component import and placed it between `KitMujerCEO` and `Mentorship` sections as requested.

## Verification
- Lint passes with no errors
- Dev server compiling successfully (200 responses, ~100-300ms compile times)
- All imports verified correct
