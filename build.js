#!/usr/bin/env node
// Zero-dependency static site build for getbren.com.
// Usage: node build.js        -> writes docs/
//        node build.js --check -> build + internal link check
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'docs');
const SRC = path.join(ROOT, 'src');
const { layout } = require(path.join(SRC, 'layout.js'));
const { SITE } = require(path.join(SRC, 'content', 'site.js'));

// BASE_PATH lets the site be published somewhere other than a domain root — e.g. a
// GitHub project page at https://<user>.github.io/bren-site. Default is empty, which
// keeps every link root-relative for the custom domain. When set, the CNAME is skipped
// (a custom domain and a sub-path are mutually exclusive) and root-relative href/src
// attributes are prefixed. Example:  BASE_PATH=/bren-site node build.js
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const SITE_URL = process.env.SITE_URL || SITE.url;
const withBase = (html) =>
  BASE ? html.replace(/(href|src)="\/(?!\/)/g, `$1="${BASE}/`) : html;

const write = (rel, content) => {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};

// Fresh output dir (keep nothing stale)
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// ---- Pages ----
const contentDir = path.join(SRC, 'content');
const pages = [];
for (const f of fs.readdirSync(contentDir)) {
  if (f === 'site.js' || !f.endsWith('.js')) continue;
  const mod = require(path.join(contentDir, f));
  pages.push(...(Array.isArray(mod) ? mod : [mod]));
}
const featDir = path.join(contentDir, 'features');
for (const f of fs.readdirSync(featDir).sort()) {
  if (!f.endsWith('.js')) continue;
  pages.push(require(path.join(featDir, f)));
}

const written = [];
for (const page of pages) {
  const html = withBase(layout(page)).split(SITE.url).join(SITE_URL);
  const rel = page.file || (page.path === '' ? 'index.html' : path.join(page.path, 'index.html'));
  write(rel, html);
  written.push(rel);
}

// ---- Assets ----
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
for (const a of ['styles.css', 'site.js', 'favicon.svg', 'og.svg']) {
  fs.copyFileSync(path.join(SRC, a), path.join(OUT, 'assets', a));
}

// ---- GitHub Pages plumbing ----
if (!BASE) write('CNAME', `${SITE.domain}\n`);
write('.nojekyll', '');
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}${BASE}/sitemap.xml\n`);
const urls = pages.filter((p) => !p.file && !p.noindex).map((p) => `${SITE_URL}${BASE}/${p.path}`);
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);

console.log(`Built ${written.length} pages → docs/${BASE ? `  (base path ${BASE}, no CNAME)` : ''}`);

// ---- Optional link check ----
if (process.argv.includes('--check')) {
  const exists = new Set(written.map((w) => '/' + w.replace(/index\.html$/, '').replace(/\\/g, '/')));
  let bad = 0;
  for (const rel of written) {
    const html = fs.readFileSync(path.join(OUT, rel), 'utf8');
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      let href = m[1];
      if (BASE && href.startsWith(BASE + '/')) href = href.slice(BASE.length);
      else if (BASE && href === BASE) href = '/';
      if (href.startsWith('/assets/')) {
        if (!fs.existsSync(path.join(OUT, href))) { console.error(`  missing asset ${href} in ${rel}`); bad++; }
        continue;
      }
      const norm = href.endsWith('/') ? href : href.endsWith('.html') ? '/' + href.slice(1) : href + '/';
      const ok = exists.has(norm) || written.includes(href.slice(1));
      if (!ok) { console.error(`  broken link ${href} in ${rel}`); bad++; }
    }
  }
  console.log(bad ? `${bad} broken links` : 'Link check: OK');
  process.exit(bad ? 1 : 0);
}
