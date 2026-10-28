# metrodetroitrestoration.com

Next.js rebuild of the Restoration Group of Metro Detroit site, replacing WordPress + Elementor. Deploys on Vercel.

## Where things live

| What | File |
| --- | --- |
| Phone, email, counties, excluded ZIPs, homepage stats, reviews, FAQ | `data/site.ts` |
| The 9 service pages (names, titles, headings, steps, copy) | `data/services.ts` |
| The 30 city pages (titles, headings, ZIPs, local details, copy) | `data/cities.ts` |
| Redirects and trailing-slash setting | `next.config.ts` |
| Service request form / lead email | `components/RequestForm.tsx`, `app/api/lead/route.ts` |
| Colors and type | `app/globals.css` |

Every URL matches the WordPress site exactly, including trailing slashes.

## Lead form setup

Set these in Vercel → Project → Settings → Environment Variables (see `.env.example`):

- `RESEND_API_KEY`
- `LEAD_TO_EMAIL` (defaults to info@metrodetroitrestoration.com)
- `LEAD_FROM_EMAIL` (a sender on a domain verified in Resend)

Until they're set, the form tells visitors to call instead of failing silently.

## Before launch

- [ ] Import body copy from the WordPress export into `data/services.ts` and `data/cities.ts`
- [ ] Add the logo to `/public` and swap it into `components/Header.tsx`
- [ ] Fill in homepage stats in `data/site.ts` (hidden while empty)
- [ ] Confirm the excluded ZIP list in `data/site.ts`
- [ ] Add business hours to the contact page
- [ ] Copy images from WordPress `wp-content/uploads` into `/public/images` (old image URLs redirect there)
- [ ] Set lead form environment variables and send a test request
- [ ] Point DNS to Vercel, keep MX records, resubmit the sitemap in Search Console

## Commands

```
npm install
npm run dev     # http://localhost:3000
npm run build
```
