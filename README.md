# metrodetroitrestoration.com

Next.js rebuild of the Restoration Group of Metro Detroit site, replacing WordPress + Elementor. Deploys on Vercel.

## Where things live

| What | File |
| --- | --- |
| Phone, email, counties, excluded ZIPs, homepage stats, reviews, FAQ | `data/site.ts` |
| The 9 service pages (names, titles, headings, steps, copy) | `data/services.ts` |
| The 30 city pages: titles, headings, ZIPs | `data/cities.ts` |
| The 30 city pages: body copy | `data/city-copy/*.json` (loaded by `lib/cityCopy.ts`) |
| Redirects and trailing-slash setting | `next.config.ts` |
| Service request form / lead email | `components/RequestForm.tsx`, `lib/emailjs.ts` |
| Colors and type | `app/globals.css` |

Every URL matches the WordPress site exactly, including trailing slashes.

## Lead form setup

The form sends through EmailJS from the visitor's browser, using the same EmailJS account and email service as guardianbuild.com.

1. EmailJS → Email Templates → Create New Template, sent to info@metrodetroitrestoration.com.
   Variables: `{{name}}`, `{{phone}}`, `{{email}}`, `{{street}}`, `{{city}}`, `{{state}}`, `{{zip}}`,
   `{{damage_type}}`, `{{description}}`, `{{source}}`, `{{page}}`, `{{zip_note}}`. Reply-To: `{{email}}`.
2. Put the template ID in `lib/emailjs.ts`, or set `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` in Vercel and redeploy.
3. EmailJS → Account → Security: add metrodetroitrestoration.com (and your Vercel preview domain while testing) to Allowed Origins.

Until a template ID is set, the form tells visitors to call instead of failing silently.

## Before launch

- [ ] Confirm the excluded ZIP list in `data/site.ts`
- [ ] Create the EmailJS template, add its ID, and send a test request
- [ ] Point DNS to Vercel, keep MX records, resubmit the sitemap in Search Console

## Commands

```
npm install
npm run dev     # http://localhost:3000
npm run build
```
