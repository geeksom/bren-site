const { SITE, NAV, FOOTER, FEATURES } = require('./content/site');
const { esc } = require('./components');

// ============================================================================
// KONVARS WIDGET: paste the Konvars embed snippet inside the backticks below,
// then run `npm run build`. It is injected right before </body> on every page.
// ============================================================================
const KONVARS_SNIPPET = ``;

const logo = `<a class="logo" href="/" aria-label="Bren home"><svg viewBox="0 0 92 28" width="92" height="28" aria-hidden="true"><text x="0" y="22" font-family="Lexend Deca, system-ui, sans-serif" font-size="24" font-weight="700" fill="#213343" letter-spacing="-0.5">bren</text><circle cx="84" cy="20" r="4.5" fill="#FF5C35"/></svg></a>`;

const featuresMenu = () => {
  const groups = {};
  FEATURES.forEach((f) => { (groups[f.group] = groups[f.group] || []).push(f); });
  return `<div class="menu" id="features-menu">${Object.keys(groups)
    .map(
      (g) => `<div class="menu-group"><p class="menu-title">${esc(g)}</p>${groups[g]
        .map((f) => `<a href="/features/${f.slug}/"><strong>${esc(f.name)}</strong><span>${esc(f.short)}</span></a>`)
        .join('')}</div>`
    )
    .join('')}<div class="menu-foot"><a href="/features/">All 15 features →</a></div></div>`;
};

const nav = (path) => `
<header class="site-header">
  <div class="container nav-row">
    ${logo}
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav id="site-nav" class="site-nav">
      <ul>
        ${NAV.map((n) =>
          n.dropdown
            ? `<li class="has-menu"><button type="button" class="nav-link menu-btn" aria-expanded="false" aria-controls="features-menu">${esc(n.label)} <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M5 7l5 5 5-5"/></svg></button>${featuresMenu()}</li>`
            : `<li><a class="nav-link${path.startsWith(n.href.slice(1)) ? ' active' : ''}" href="${n.href}">${esc(n.label)}</a></li>`
        ).join('')}
      </ul>
      <div class="nav-cta">
        <a class="nav-link" href="/signup/?login=1">Log in</a>
        <a class="btn btn-secondary btn-sm" href="${SITE.cta.secondary.href}">${SITE.cta.secondary.label}</a>
        <a class="btn btn-primary btn-sm" href="${SITE.cta.primary.href}">${SITE.cta.primary.label}</a>
      </div>
    </nav>
  </div>
</header>`;

const footer = () => `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        ${logo}
        <p>${esc(SITE.tagline)}</p>
        <p class="muted">${esc(SITE.company)}<br>${esc(SITE.address)}</p>
        <p class="muted">SOC 2 Type II · GDPR · CCPA</p>
      </div>
      ${FOOTER.map(
        (c) => `<div class="footer-col"><p class="footer-title">${esc(c.title)}</p><ul>${c.links
          .map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`)
          .join('')}</ul></div>`
      ).join('')}
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} ${esc(SITE.company)} All rights reserved. Bren is a fictional product used for demonstration.</p>
      <p><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a></p>
    </div>
  </div>
</footer>`;

const layout = (page) => {
  const path = page.path || '';
  const canonical = `${SITE.url}/${path}`;
  const title = page.path === '' ? `${SITE.name} — ${SITE.tagline} AI chief of staff for every person in your company` : `${page.title} | ${SITE.name}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description || SITE.description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description || SITE.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}/assets/og.svg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
${page.head || ''}
</head>
<body class="${page.bodyClass || ''}">
<a class="skip" href="#main">Skip to content</a>
${nav(path)}
<main id="main">
${page.body}
</main>
${footer()}
<script src="/assets/site.js" defer></script>
<!-- ===== KONVARS WIDGET SLOT: paste the Konvars embed snippet into KONVARS_SNIPPET in src/layout.js, then run \`npm run build\` ===== -->
${KONVARS_SNIPPET}
</body>
</html>`;
};

module.exports = { layout };
