const c = require('../components');
const { INTEGRATIONS, ROADMAP_INTEGRATIONS } = require('./site');

const COLORS = { slack: '#4a154b', teams: '#5059c9', gmail: '#d93025', outlook: '#0f6cbd', zoom: '#0b5cff', meet: '#00897b', huddle: '#611f69', gcal: '#1a73e8', ocal: '#0f6cbd', gdrive: '#188038', m365: '#d83b01', notion: '#000', confluence: '#0052cc', loom: '#625df5', jira: '#0052cc', trello: '#0079bf', airtable: '#fcb400', monday: '#ff3d57', clickup: '#7b68ee', github: '#24292f' };

const groups = {};
INTEGRATIONS.forEach((i) => { (groups[i.cat] = groups[i.cat] || []).push(i); });

const card = (i) => `<div class="int">
  <div class="int-head"><span class="int-mark" style="background:${COLORS[i.icon] || '#213343'}">${c.esc(i.name.slice(0, 2))}</span><h3>${c.esc(i.name)}</h3><span class="dir ${i.dir === 'Incoming' ? 'in' : ''}">${c.esc(i.dir)}</span></div>
  <p><strong>Reads:</strong> ${c.esc(i.reads)}</p>
  <p><strong>Writes:</strong> ${c.esc(i.writes)}</p>
  <p class="muted">${c.esc(i.plan)}</p>
</div>`;

const grouped = Object.keys(groups)
  .map((g) => `<h2 style="margin-top:40px;font-size:1.5rem">${c.esc(g)} <span class="muted" style="font-size:.9rem;font-weight:400">· ${groups[g][0].dir === '2-way' && g !== 'Documentation' ? 'two-way' : 'incoming'}</span></h2><div class="int-grid">${groups[g].map(card).join('')}</div>`)
  .join('');

const faqItems = [
  { q: 'How many integrations can I connect?', a: '<p>Team: up to 5 (Slack or Teams counts as one; Notion counts once whether used for docs, tasks or both). Business and Enterprise: unlimited. Switching an integration off frees the slot immediately.</p>' },
  { q: 'Does Bren need admin access?', a: '<p>Slack, Teams, Google Workspace and Microsoft 365 apps must be installed by an admin, with least-privilege scopes. Personal connections — your calendar, email, Zoom — are per user. You can restrict Bren to specific channels, projects, drives, spaces and repos at any time.</p>' },
  { q: 'Does Bren read private messages?', a: '<p>Only DMs with Bren itself. Never DMs between people. Private channels are only visible to their members, in Bren as in Slack or Teams.</p>' },
  { q: 'Does it read our source code?', a: '<p>No. From GitHub Bren reads PR titles and descriptions, reviews, commit messages, issues and releases for the repos you select. No source code is stored.</p>' },
  { q: 'Does it read our email?', a: '<p>Only if a user connects Gmail or Outlook, and only labelled folders they choose. Off by default.</p>' },
  { q: 'What about Asana, Linear, Salesforce, GitLab?', a: '<p>On the roadmap — no dates promised. Asana and Linear are the most requested. Enterprise customers can have a custom integration built and scoped in the contract (typically 4–8 weeks). Tell us what you need on the demo form and we will record your interest.</p>' },
  { q: 'How fresh is the data?', a: '<p>Event-driven where the tool supports webhooks (Slack, Teams, Jira, GitHub, Notion, Monday, ClickUp — seconds); polling every 15 minutes otherwise. Permissions are re-checked on every sync.</p>' },
  { q: 'Can we use both Slack and Teams?', a: '<p>Yes. Each counts as one integration. Business supports one chat workspace per organisation; Enterprise supports several, including Slack Enterprise Grid.</p>' },
  { q: 'Do you support Jira Data Center or Confluence Data Center?', a: '<p>Cloud versions are supported on every plan. Data Center editions are available on Enterprise as custom integrations.</p>' },
  { q: 'Is there a Zapier or Make connector?', a: '<p>Not today. Enterprise includes API access; a self-serve API is on the roadmap.</p>' },
];

module.exports = {
  path: 'integrations/',
  title: 'Integrations — Slack, Teams, Jira, Notion, Google Workspace and 14 more',
  description: 'Bren connects to Slack, Microsoft Teams, Gmail, Outlook, Zoom, Google Meet, Slack Huddles, Google and Outlook Calendar, Google Workspace, Microsoft 365, Notion, Confluence, Loom, Jira, Trello, Airtable, Monday.com, ClickUp and GitHub. What each reads and writes, and what is on the roadmap.',
  body: `
${c.hero({
  eyebrow: 'Integrations',
  title: '19 integrations. Least-privilege scopes. Permissions mirrored.',
  sub: 'Bren reads where work already happens — chat, meetings, docs, project tools and code — and writes back only what you opt into. Admins choose exactly what is in scope.',
  cta: false,
  cls: 'hero-center',
})}
${c.proofBar(['Team: up to 5 integrations', 'Business & Enterprise: unlimited', 'OAuth 2.0, minimum scopes', 'Disconnect anytime; derived data deleted within 7 days'])}
${c.section(`<div class="section-head"><p class="eyebrow">Catalogue</p><h2>What each integration reads and writes.</h2><p class="sub">"Incoming" means Bren only reads. "2-way" means Bren can also post digests, answers or opt-in summaries back.</p></div>${grouped}`)}
${c.section(
  `<div class="two-col"><div><p class="eyebrow">Roadmap</p><h2>Not yet — but asked for.</h2><p class="sub">No dates promised. Enterprise can have any of these built as a custom integration.</p></div><div><ul class="pill-list">${ROADMAP_INTEGRATIONS.map((r) => `<li>${c.esc(r)}</li>`).join('')}</ul><p class="muted" style="margin-top:16px">Using one of these today? Start the trial with chat, docs, meetings and GitHub — most of the value is still there — and tell us on the demo form so we can notify you.</p></div></div>`,
  { tint: 'warm' }
)}
${c.section(c.faq(faqItems, { title: 'Integration questions', eyebrow: 'FAQ' }), { tint: 'grey' })}
${c.ctaBand({ title: 'Connect Slack and Jira this afternoon. Read your first digest tomorrow.', sub: '14-day free trial, no card. Or book a demo and we will map your tools and scopes with your IT team.' })}
`,
};
