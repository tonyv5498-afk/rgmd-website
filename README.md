# restorationgroupmd.com

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

1. EmailJS → Email Templates → Create New Template, sent to info@restorationgroupmd.com.
   Variables: `{{name}}`, `{{phone}}`, `{{email}}`, `{{street}}`, `{{city}}`, `{{state}}`, `{{zip}}`,
   `{{damage_type}}`, `{{description}}`, `{{source}}`, `{{page}}`, `{{zip_note}}`. Reply-To: `{{email}}`.
2. Put the template ID in `lib/emailjs.ts`, or set `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` in Vercel and redeploy.
3. EmailJS → Account → Security: add https://www.restorationgroupmd.com, https://restorationgroupmd.com and https://rgmd-website.vercel.app to Allowed Origins.

The RGMD template is `template_k6pheft`. If the template ID is ever removed, the form tells visitors to call instead of failing silently.

## Before launch

- [ ] Confirm the excluded ZIP list in `data/site.ts`
- [ ] Send a test request from the Vercel preview (template_k6pheft)
- [x] Site lives at www.restorationgroupmd.com (root redirects to www)
- [ ] Redirect every metrodetroitrestoration.com URL to the same path on www.restorationgroupmd.com, keep its MX records, and use Search Console Change of Address
- [ ] Verify www.restorationgroupmd.com in Search Console and submit /sitemap.xml

## Commands

```
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Google Tag Manager

Set the container ID in Vercel → Project → Settings → Environment Variables as `NEXT_PUBLIC_GTM_ID` (e.g. `GTM-ABC1234`), then redeploy. With no ID, no GTM code loads.

Data layer events the site sends (no personal details):
- `phone_click`: any tap on the phone number. `click_location` is sticky_bar, header, hero, footer or page; also `page_path`.
- `form_submit`: a service request sent successfully. Includes `form_source` (home, contact, commercial-plan…), `damage_type`, `page_path`.

## Photos

Every photo spot reads from `data/photos.ts`. Put images in `public/images/jobs/` and set `src` on the matching entry:
- `PHOTOS.waterResponse`, `PHOTOS.commercial`, `PHOTOS.featuredReview`: single homepage photos
- `PROJECTS`: the three homepage before & after pairs
- `SERVICE_PROJECTS["<service-slug>"]`: the before & after pair on each service page

## CRM leads

Every service request is emailed (EmailJS) **and** filed in the RGMD CRM (Firebase project `rgmd-crm`, collection `webLeads`) at the same time, from `lib/crmLead.ts`. In the CRM they appear under the **Leads** button; **Create Job** turns one into a job and clears it from the list.

The CRM's Firestore rules must let the public website *create* leads (never read, change or delete them). In Firebase console → Firestore Database → Rules, add this block inside `match /databases/{database}/documents { … }` and click Publish:

```
match /webLeads/{leadId} {
  allow create: if request.auth == null
    && request.resource.data.keys().hasOnly(['clientName','phone','email','address','projectType','message','source','reviewed','dismissed','submittedAt'])
    && request.resource.data.clientName is string && request.resource.data.clientName.size() > 0 && request.resource.data.clientName.size() <= 120
    && request.resource.data.phone is string && request.resource.data.phone.size() <= 40
    && request.resource.data.email is string && request.resource.data.email.size() <= 200
    && request.resource.data.address is string && request.resource.data.address.size() <= 300
    && request.resource.data.projectType is string && request.resource.data.projectType.size() <= 40
    && request.resource.data.message is string && request.resource.data.message.size() <= 4000
    && request.resource.data.source is string && request.resource.data.source.size() <= 80
    && request.resource.data.reviewed == false
    && request.resource.data.dismissed == false
    && request.resource.data.submittedAt == request.time;
  allow read, update, delete: if request.auth != null;
}
```
