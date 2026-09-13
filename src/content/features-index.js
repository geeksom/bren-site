const c = require('../components');
const { FEATURES } = require('./site');

const groups = {};
FEATURES.forEach((f) => { (groups[f.group] = groups[f.group] || []).push(f); });
const ORDER = ['Stay posted', 'Ask', 'See momentum', 'Remember', 'Trust'];
const BLURB = {
  'Stay posted': 'Briefs pushed to the right person at the right time. You do not have to ask.',
  Ask: 'When you do have a question, get a cited answer in seconds — in the web app, Slack or Teams.',
  'See momentum': 'Projects, goals and outcomes as a living record, with risks surfaced early.',
  Remember: 'The company memory: onboarding, catch-up, meeting outcomes, private notes.',
  Trust: 'Structure and visibility that mirror how your company actually works.',
};

module.exports = {
  path: 'features/',
  title: 'Features — 15 ways Bren keeps a company legible',
  description: 'All 15 Bren features: Ask Bren, Async Standups, AI Digests, Monday Morning Brief, OKR Tracking, Work Timeline, Red-Flag Detection, Wins & Losses Ledger, Second Brain, Think Out Loud, Meeting Intelligence, Private Notes, Org & Permissions, Leadership Pulse, Year in Review.',
  body: `
${c.hero({ eyebrow: 'Features', title: 'Fifteen features. One job: keep everyone posted.', sub: 'Every feature below is built on the same company graph and the same permissions. Plan availability is listed on each card.', cta: false, cls: 'hero-center' })}
${ORDER.map((g, i) =>
  c.section(
    `${c.sectionHead(g, BLURB[g])}${c.cardGrid(groups[g].map((f) => ({ title: f.name, body: f.short, meta: f.plan, href: `/features/${f.slug}/` })), 3)}`,
    { tint: i % 2 ? 'grey' : undefined }
  )
).join('')}
${c.ctaBand()}
`,
};
