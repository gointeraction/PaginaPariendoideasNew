# Task 3-b — Backend API Endpoints + Theme System

## Summary
Implemented newsletter & contact API endpoints with Prisma persistence, plus a complete dark/light theme toggle system.

## Work Completed

### 1. Prisma Schema Updates
- Added `Newsletter` model (id, email @unique, createdAt)
- Added `Contact` model (id, name, email, subject, message, createdAt)
- Ran `bun run db:push` — database synced successfully

### 2. Newsletter API — `/src/app/api/newsletter/route.ts`
- POST handler: validates email format with regex, trims/lowercases
- Saves to Newsletter table via Prisma
- Duplicate email (P2002 unique constraint) handled gracefully — returns success message
- Status codes: 200 (success), 400 (validation), 500 (server error)
- Spanish error messages

### 3. Contact API — `/src/app/api/contact/route.ts`
- POST handler: validates name, email, subject, message (all required)
- Email format validation with regex
- Saves to Contact table via Prisma
- Status codes: 200 (success), 400 (validation), 500 (server error)
- Spanish error messages with field-specific missing field listing

### 4. ThemeToggle Component — `/src/components/layout/ThemeToggle.tsx`
- 'use client' directive
- Uses next-themes `useTheme` hook
- Sun icon in dark mode (amber-400), Moon icon in light mode (brand-deep/70)
- Hydration-safe with `mounted` state — renders placeholder until client-mounted
- Small circular button (h-9 w-9 rounded-full)
- Smooth CSS transitions (duration-300)

### 5. Navbar Integration
- Imported ThemeToggle into Navbar
- Placed between "Solicitar Beca" button and mobile toggle button
- Visible on all screen sizes

### 6. ThemeProvider in Layout
- Imported ThemeProvider from next-themes
- Wrapped `{children}` with `<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange />`
- `suppressHydrationWarning` already on `<html>` element

## Verification
- Lint passes with zero errors
- Database push completed successfully
