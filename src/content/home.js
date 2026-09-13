const c = require('../components');
const { FEATURES, INTEGRATIONS } = require('./site');

const personaTabs = `
<div class="tabs-wrap" data-tabs>
  <div class="tabs" role="tablist">
    <button class="tab" role="tab" aria-selected="true">Individual contributors</button>
    <button class="tab" role="tab" aria-selected="false">People managers</button>
    <button class="tab" role="tab" aria-selected="false">Senior leadership</button>
  </div>
  <div class="tab-panel" role="tabpanel">
    ${c.featureRow({
      title: 'Post one update. Never be asked "what\'s the status?" again.',
      body: 'One ~100-word update a day from Slack or Teams replaces the stand-up. Ask Bren instead of interrupting a colleague. Come back from leave and catch up in ten minutes. Private notes stay private — even from admins.',
      bullets: ['Bren drafts your update from your Jira, GitHub and calendar activity; you confirm', 'Cited answers to "where is X?" without pinging anyone', 'Catch-up digest on your first day back'],
      mock: c.mockStandup(),
      href: '/features/async-standups/',
      linkLabel: 'How Async Standups work',
    })}
  </div>
  <div class="tab-panel" role="tabpanel" hidden>
    ${c.featureRow({
      title: 'Know what is happening on all four of your teams before your coffee is cold.',
      body: 'A daily digest replaces the stand-up; a weekly digest replaces the Friday report. Red flags arrive with a suggested intervention. Request clarification inline instead of scheduling a call.',
      bullets: ['Daily digest per team, weekly across teams', 'Blockers and slipping work surfaced with the fix', 'Mark wins, fails and postponements in one click'],
      mock: c.mockDigest(),
      href: '/features/digests/',
      linkLabel: 'How AI Digests work',
    })}
  </div>
  <div class="tab-panel" role="tabpanel" hidden>
    ${c.featureRow({
      title: 'Know where to intervene before Monday 9am.',
      body: 'Monday Morning Brief lays out last week, this week and what to block time for. Leadership Pulse shows business momentum, OKRs on pace and open red flags — with every line linked to its source.',
      bullets: ['Weekly leadership digest and Monday Morning Brief', 'Quarterly, half-yearly and yearly snapshots', 'Town-hall topics suggested from what people actually report'],
      mock: c.mockBrief(),
      href: '/features/monday-brief/',
      linkLabel: 'How the Monday Morning Brief works',
    })}
  </div>
</div>`;

const howItWorks = `<div class="steps">
  <div class="step"><h3>Connect where work happens</h3><p>Slack or Teams, one project tool, and — when you are ready — meetings, docs and GitHub. Least-privilege OAuth. Admins choose exactly which channels, projects and drives Bren sees.</p></div>
  <div class="step"><h3>Bren builds the company graph</h3><p>Teams, people, projects, tasks, objectives and time — with permissions mirrored from every source. Nobody sees anything in Bren they could not see in the tool it came from.</p></div>
  <div class="step"><h3>Everyone gets a PA</h3><p>Digests, the Monday Morning Brief, red flags and Ask Bren — each person informed at their altitude. First brief within 24 hours of connecting.</p></div>
</div>`;

const pillars = c.cardGrid(
  [
    { icon: 'bell', title: 'It keeps you posted — you do not have to ask', body: 'Daily digests for leads, weekly for managers and ICs, a Monday Morning Brief for leaders, a monthly recap for everyone. Status meetings become optional.', href: '/features/digests/', linkLabel: 'See AI Digests' },
    { icon: 'brain', title: 'It knows the whole company, not just the docs', body: 'Built on teams, people, projects, OKRs and time — fed by 19 integrations. Ask "who owns the dependency that is slipping?" and get a cited answer.', href: '/features/ask-bren/', linkLabel: 'See Ask Bren' },
    { icon: 'lock', title: 'Cited, permission-aware, never invented', body: 'Every line links to the message, ticket or doc it came from. Missing updates are flagged, not fabricated. Permissions mirror every source tool.', href: '/platform/#security', linkLabel: 'See Security & Trust' },
  ],
  3
);

const featureIndex = c.cardGrid(
  FEATURES.slice(0, 6).map((f) => ({ title: f.name, body: f.short, meta: f.plan, href: `/features/${f.slug}/` })),
  3
);

const faqItems = [
  { q: 'What is Bren, in one sentence?', a: '<p>Bren is the AI chief of staff for every person in your company: it connects to your chat, meetings, docs and project tools, keeps everyone posted at their level, and answers any question about work in seconds — with sources.</p>' },
  { q: 'Is Bren a chatbot or a project-management tool?', a: '<p>Neither. Ask Bren is a chat interface, but the product is the company graph underneath (teams, people, projects, OKRs, time) and the proactive briefs built on it. Bren sits on top of Jira, Notion, Trello, Airtable, Monday and ClickUp — it does not replace them.</p>' },
  { q: 'How is this different from Notion AI, Copilot or Glean?', a: '<p>Those are strong at searching and summarising documents. Bren also knows who owns what, what is slipping, who is on leave and how work ties to your OKRs — and tells you proactively rather than waiting to be asked.</p>' },
  { q: 'Is this employee monitoring?', a: '<p>No. Bren summarises the ~100-word updates people choose to post and activity in shared work tools. No keystrokes, screens, location or app tracking. Private notes are invisible even to admins, and peers never get performance insights about each other.</p>' },
  { q: 'How much does it cost?', a: '<p>Team is $299/month for up to 25 seats. Business is $899/month for up to 100 seats. Enterprise is custom for 100+ seats, SCIM, data residency and a private-VPC option. Annual billing gives two months free. See <a href="/pricing/">pricing</a>.</p>' },
  { q: 'Is there a free trial?', a: '<p>Yes — 14 days, no credit card, with full Business features and up to 100 seats so you can run a real pilot. <a href="/signup/">Start free trial</a>.</p>' },
  { q: 'How long until we see value?', a: '<p>Connect Slack or Teams and one project tool and your first digest arrives within 24 hours. A Team rollout typically takes a week; Business two to four weeks; Enterprise four to eight including security review.</p>' },
  { q: 'What does Bren integrate with?', a: '<p>Slack, Microsoft Teams, Gmail, Outlook, Zoom, Google Meet, Slack Huddles, Google Calendar, Outlook Calendar, Google Workspace, Microsoft 365, Notion, Confluence, Loom, Jira, Trello, Airtable, Monday.com, ClickUp and GitHub. Asana and Linear are on the roadmap. See <a href="/integrations/">integrations</a>.</p>' },
  { q: 'Is our data used to train AI models?', a: '<p>Never. Bren is SOC 2 Type II audited, encrypts data with AES-256 at rest and TLS 1.3 in transit, and its model providers operate under zero-retention agreements. Enterprise adds EU or US data residency and a private-VPC option.</p>' },
  { q: 'Will people actually post updates?', a: '<p>Updates replace the stand-up instead of adding to it, take about two minutes from Slack or Teams, and are visibly consumed the same day in the manager\'s digest. Bren drafts a suggested update from your tool activity; you confirm. Missed updates get one nudge — never a fabricated entry.</p>' },
];

module.exports = {
  path: '',
  title: 'Everyone gets a PA now',
  description: 'Bren is the AI chief of staff for every person in your company. It connects to Slack, Teams, Jira, Notion, Google Workspace and 14 more tools, keeps everyone posted at their level, and answers any question about work in seconds. 14-day free trial.',
  body: `
${c.hero({
  title: 'Everyone gets a PA now.',
  sub: 'Bren connects to your chat, meetings, docs and project tools, keeps every person posted at their level, and answers any question about work in seconds. Stop being busy. Be productive.',
  mock: c.mockChat(),
})}
${c.proofBar(['19 integrations', 'First brief within 24 hours', 'SOC 2 Type II', '14-day free trial, no card'])}
${c.logoBar()}
${c.section(`${c.sectionHead('Why Bren', 'Your people spend their days staying informed instead of doing the work.', 'Stand-ups, syncs, status threads, catch-up calls, onboarding decks from last quarter — all of it exists because nobody can see what is actually happening. Bren can.')}${pillars}`)}
${c.section(`${c.sectionHead('For every altitude', 'One assistant. Three very different mornings.')}${personaTabs}`, { tint: 'grey' })}
${c.section(`${c.sectionHead('How it works', 'Connected in an afternoon. First brief by tomorrow morning.')}${howItWorks}`)}
${c.section(
  `<div class="section-head center"><p class="eyebrow">Integrations</p><h2>Reads where work already happens.</h2></div>
   <ul class="int-strip">${INTEGRATIONS.map((i) => `<li>${i.name}</li>`).join('')}</ul>
   <p style="text-align:center"><a class="card-link" href="/integrations/">All 19 integrations, what each one reads and writes ${c.ICONS.arrow}</a></p>`,
  { tint: 'warm' }
)}
${c.section(`${c.sectionHead('Results', 'Cut status meetings by 70%.', 'Fictional customers, consistent numbers: Bren is a demonstration product.')}${c.testimonials()}`)}
${c.section(
  `<div class="stats">
    <div class="stat"><strong>70%</strong><span>fewer status meetings</span></div>
    <div class="stat"><strong>5 days</strong><span>to a productive new hire, not 5 weeks</span></div>
    <div class="stat"><strong>1,000 h</strong><span>reclaimed per 12-person team, per year</span></div>
    <div class="stat"><strong>24 h</strong><span>from connecting to the first brief</span></div>
  </div>`,
  { tint: 'navy' }
)}
${c.section(`${c.sectionHead('Features', 'Fifteen ways Bren keeps a company legible.')}${featureIndex}<p style="margin-top:24px"><a class="card-link" href="/features/">See all 15 features ${c.ICONS.arrow}</a></p>`)}
${c.section(
  `<div class="section-head center"><p class="eyebrow">Pricing</p><h2>Flat, transparent, per workspace.</h2><p class="sub" style="margin:0 auto">Team $299/month for up to 25 people. Business $899/month for up to 100. Enterprise for everything beyond that. Every plan starts with a 14-day free trial — no card.</p></div>
   <div class="cta-pair" style="justify-content:center"><a class="btn btn-primary" href="/pricing/">See pricing</a><a class="btn btn-secondary" href="/book-demo/">Talk to us about Enterprise</a></div>`,
  { tint: 'grey' }
)}
${c.section(c.faq(faqItems, { title: 'Questions people ask before they start the trial', eyebrow: 'FAQ' }))}
${c.ctaBand()}
`,
};
