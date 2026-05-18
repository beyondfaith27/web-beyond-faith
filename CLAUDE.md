# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

No test suite is configured.

## Environment Variables

Two env vars are required for the contact form to function:

- `G_SERVICE_ACCOUNT_CRED` — Base64-encoded Google service account JSON with Sheets write access
- `CONTACT_SPREADSHEET_ID` — Target Google Spreadsheet ID
- `IS_DEV` — Set to `"true"` in non-production environments; controls robots meta, sitemap URLs, and OG URLs

## Architecture

### Routing

Next.js App Router. All user-facing pages live under `app/(site)/` (route group with shared layout). The root `app/layout.js` handles global metadata, JSON-LD schema, fonts, and the `<Toaster>` provider.

Pages: `/` (home), `/about`, `/faq`, `/privacy-policy`, `/terms-and-conditions`. Also has `app/robots.js` and `app/sitemap.js`.

### Content / Data

Static content is kept out of page components and centralized in two places:

- `lib/` — data arrays used across the site: `services.js` (6 service objects with JSX explanations), `faqs.js`, `process-step.js`
- `contents/` — richer content objects (home concerns, about mission/vision) exported through `contents/index.js` as `CONTENTS`

When adding or editing site copy, update the appropriate file in `lib/` or `contents/` rather than editing page files.

### Contact Form

The contact form is a global sheet/drawer (`components/ContactFormSheet.jsx`) controlled by `lib/ContactFormContext.js`. The context (`ContactFormProvider`) lives in the `(site)` layout so it wraps all pages.

Key behaviors:
- Multiple `<ContactFormSheet>` instances can exist on a page; only one opens at a time, tracked by `activeInstanceId`.
- Opening the form updates the URL with `?contact-form=true`; the first registered instance auto-opens on mount if that param is present.
- On submit, `insertContactToSheet` (a Next.js Server Action in `app/actions/contact/action.js`) validates with Zod, then writes to two Google Sheets tabs: `submissions` (full form) and `infer` (name only), inserting at row 2 each time to keep newest entries at top.

### Animation System

`InViewAnimateSection` (`components/InViewAnimateSection.jsx`) is a `<section>` wrapper that fires a named animation function when the section enters the viewport (once). Animation functions live in `lib/animationFuncs.js` and use Motion's `useAnimate`. Pass `sectionAnimFuncName` matching a key in `animFns` to wire up entrance animations.

### Styling

- Tailwind CSS v4 with CSS variable-based design tokens in `app/globals.css`
- Custom breakpoints: `phone` (800px), `tablet` (1080px), `laptop` (1300px), `desktop` (1520px)
- `--gutter-width` CSS variable controls horizontal padding across breakpoints
- Primary brand color (`--colored-background`) is a purple/violet (`oklch(0.3669 0.1387 303.38)`)
- Font: `DM Serif Display` (`font-dm`) for headings, `Inter` (`font-inter`) for body
- `@/lib/utils.js` exports `cj` (class merge utility, wraps `clsx` + `tailwind-merge`)
- UI primitives in `components/ui/` are shadcn/ui components (new-york style)

### Header

`Retractable.js` wraps `Header.js` and hides/shows it based on scroll direction using Motion's `useScroll`.
