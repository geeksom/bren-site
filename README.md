# getbren.com — Bren marketing site (fictional)

A static marketing site for **Bren**, a fictional "AI chief of staff" product, built to test an AI website assistant (Konvars). Zero dependencies: one Node script turns content modules into plain HTML in `docs/`, which GitHub Pages serves at **https://getbren.com**.

## Layout

```
knowledge/        Canon: product, positioning, ICP, buying committee, pricing, security,
                  onboarding, integrations, FAQ, conversion playbook, messaging reference.
                  Upload these to Konvars. Site copy is written from them.
src/
  layout.js       <head>, nav, footer — and the KONVARS_SNIPPET slot
  components.js   HTML helpers + the HTML/CSS product mocks + featurePage() template
  styles.css      single stylesheet (HubSpot-inspired palette, Lexend Deca)
  site.js         nav, mega menu, tabs, pricing toggle, form → thank-you
  content/
    site.js       global facts: features registry, integrations, plans, comparison table,
                  testimonials, nav, footer
    home.js, platform.js, pricing.js, integrations.js, features-index.js,
    forms.js (signup + book-demo), legal.js (privacy, terms, 404)
    features/*.js one file per feature page (15)
build.js          node build.js [--check]  → writes docs/ (+ sitemap, robots, CNAME)
docs/             BUILD OUTPUT — committed; GitHub Pages serves main:/docs
```

## Edit → build → deploy

```bash
npm run build          # or: node build.js
npm run check          # build + internal link check
npm run serve          # http://localhost:8080 (python3 http.server on docs/)
git add -A && git commit -m "Update copy" && git push
```

GitHub Pages publishes `docs/` from `main` within about a minute of the push.

## Publishing without the custom domain

The default build targets `https://getbren.com` (root-relative links + a `CNAME` file). To publish instead as a GitHub **project page** under a sub-path — useful while a domain is being sorted out — build with a base path:

```bash
BASE_PATH=/bren-site SITE_URL=https://geeksom.github.io npm run build
```

That prefixes every root-relative link, rewrites canonicals and the sitemap, and skips the `CNAME` file. Run `npm run build` with no variables to go back to the custom-domain build.

## Adding the Konvars widget

Open `src/layout.js`, paste the embed snippet into `KONVARS_SNIPPET`, run `npm run build`, commit and push. The snippet is injected right before `</body>` on all 25 pages.

## Forms

`/signup/` and `/book-demo/` validate client-side (work-email check) and show a thank-you panel; nothing is sent anywhere. To receive submissions, set `FORM_ENDPOINT` in `src/site.js` to a Formspree / HubSpot / any JSON POST endpoint. `?plan=team|business|enterprise` prefills the hidden plan field; `?thanks=1` shows the thank-you state directly (handy for testing deep links from the assistant).

## Changing facts

Change the numbered file in `knowledge/` first, then `src/content/site.js` (plans, integrations, features) and any page that states the fact, then rebuild. Grep the build to confirm: `grep -rlF '$899' docs`.

## Domain (GoDaddy → GitHub Pages)

DNS records for `getbren.com`:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | geeksom.github.io |

Remove GoDaddy's default parked A record and any forwarding. After propagation, enable **Enforce HTTPS** in the repo's Settings → Pages.
