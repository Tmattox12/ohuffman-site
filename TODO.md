# The O‑Huffman Group — open items

_Last updated: 2026-09-06. Site is live and verified at https://ohuffman-site.vercel.app_

Deployment works like this: push to `main` on GitHub → the
`.github/workflows/vercel-deploy.yml` action deploys to Vercel production.

---

## 1. Blocking — nothing else works until these happen

### Buy the domain
`ohuffmangroup.com` is **not registered by anyone**. Confirmed against the
Verisign RDAP registry (returns 404 for it, 200 for a control domain), and it
does not resolve on public DNS. It is not sitting at Namecheap or GitHub — it
simply does not exist yet.

- Buying **through Vercel** is the least work: DNS and TLS are configured
  automatically, no records to copy.
- Buying at **Namecheap or Cloudflare** keeps the domain independent of the
  host (Cloudflare has cheaper renewals). Costs one extra DNS step.

### Add the domain in Vercel
Vercel → project `ohuffman-site` → **Domains** → add `ohuffmangroup.com`, then
set the A/CNAME records it gives you at the registrar. Skip the DNS step
entirely if the domain was purchased through Vercel.

### Set up email on the domain
`hello@ohuffmangroup.com` appears in the footer and on the Contact page and
currently goes nowhere. Options: Google Workspace, Fastmail, or Namecheap's
own email hosting.

---

## 2. Decisions only Tamara can make

### The `/services` page is orphaned
It is live at `/services` and lists four consulting services — Product
Strategy, Legal Technology, Design & UX, Technical Advisory — but nothing on
the site links to it. Reachable, but invisible.

- **If the company does offer these:** add "Services" to the header nav.
- **If not:** delete the page.

### Review the Ventures copy
The three detail bullets under each product on `/ventures` are Claude's draft,
extrapolated from the one-line descriptions that already existed. No invented
features, pricing, or dates — but they are product claims that need an owner's
read before they stand as marketing copy.

### LinkedIn URL
Currently using the numeric company URL
`https://www.linkedin.com/company/143682019/`. It works and redirects, but a
vanity handle (e.g. `/company/ohuffman-group`) looks better in link previews.

### Naming the AI job site
The site says the name will be announced at launch, so the product is listed
as "AI Job Website". Ready to go public with the real name whenever you are.

---

## 3. Nice to have, no rush

- **Social preview image.** Links shared to LinkedIn or Facebook currently show
  text only. Open Graph image tags need an absolute URL, so this has to wait
  until the domain exists.
- **`chat_saved_2026-09-05.txt`** is committed in the repo. Stale notes from an
  earlier session — checked, no secrets in it, just clutter. Safe to delete.
- **`public/logo.svg` and `public/logo-stacked.svg`** are unused now that the
  header is a text wordmark. Kept in case a real logo replaces them later.
- **Sitemap.** Worth adding once the domain is live, since sitemap entries need
  absolute URLs.

---

## Already done (2026-09-06)

- Hero scales with the viewport so the three product cards sit above the fold;
  Nico's Place through the footer fits a second single screen.
- Header reduced to one left-aligned wordmark, "The O‑Huffman Group, LLC."
  (the old placeholder logo box was navy-on-navy, therefore invisible).
- Product cards and Nico's Place share one panel style; status badges share one
  style and sit on a common baseline.
- Each product logo box takes its artwork's own background so the marks match.
- `/ventures` rebuilt with the three real products, replacing "Venture Two /
  Venture Three" placeholders.
- `/contact` reduced to a direct email link and a LinkedIn link. This replaced
  a form that posted to a placeholder API which reported success without
  sending anything — every message through it was silently discarded.
- Shared `Footer` component; the duplicate "Tucson, Arizona" mentions are down
  to one.
- Page titles, meta descriptions, and Open Graph tags added — the site
  previously had no metadata at all.
- `lang="en"`, favicon, and `robots.txt` added; `/about` rebuilt to match the
  rest of the site.
- Dead contact API route removed. Every route is now static; the site needs no
  serverless function.
