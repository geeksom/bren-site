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
  const html = layout(page);
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
write('CNAME', `${SITE.domain}\n`);
write('.nojekyll', '');
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
const urls = pages.filter((p) => !p.file && !p.noindex).map((p) => `${SITE.url}/${p.path}`);
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);

console.log(`Built ${written.length} pages → docs/`);

// ---- Optional link check ----
if (process.argv.includes('--check')) {
  const exists = new Set(written.map((w) => '/' + w.replace(/index\.html$/, '').replace(/\\/g, '/')));
  let bad = 0;
  for (const rel of written) {
    const html = fs.readFileSync(path.join(OUT, rel), 'utf8');
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const href = m[1];
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
