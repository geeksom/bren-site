const c = require('../../components');

module.exports = c.featurePage({
  slug: 'leadership-pulse',
  metaTitle: 'business momentum at a glance, for the people running it',
  description: 'Leadership Pulse: for C-level and senior leadership — business momentum, OKRs on pace, open red flags, meeting load, quarterly / half-yearly / yearly snapshots and suggested town-hall topics, every line cited. Business and Enterprise.',
  title: 'The picture you used to need six meetings to assemble.',
  sub: 'Leadership Pulse shows momentum, OKRs on pace, open red flags and meeting load across the organisation — with quarterly, half-yearly and yearly snapshots — and suggests what your company wants to talk about next. Every number links to its evidence.',
  mock: c.mockPulse(),
  problem: {
    title: 'C-level is busier than ever, and mostly busy finding out.',
    body: `<p>The dashboards show ticket counts. The 1:1s show what each reportee chose to bring. The real question — is the business gaining or losing momentum, and where should I intervene this week? — gets answered by instinct, or by another meeting.</p><p>A chief of staff would assemble the picture. Bren is the chief of staff for everyone.</p>`,
  },
  how: {
    title: 'Momentum, risk, load — and the reasons.',
    blocks: [
      { icon: 'pulse', title: 'Momentum, not activity', body: 'Projects advancing versus slipping, decisions made versus waiting, wins versus losses — trended by week and quarter. Not ticket velocity.' },
      { icon: 'target', title: 'OKRs on pace', body: 'Which objectives will land, which are at risk and why, drawn from the OKR evaluation and the work feeding it.' },
      { icon: 'flag', title: 'Open red flags and capacity', body: 'Org-level flags — three projects sharing one owner, a department with a 60% update rate, a dependency two teams are waiting on — with the suggested move.' },
      { icon: 'users', title: 'Snapshots and town-hall topics', body: 'Quarterly, half-yearly and yearly snapshots for board decks and reviews. Suggested town-hall and all-hands topics from what people actually report — fourteen updates mention the hiring plan.' },
    ],
  },
  who: {
    title: 'Who runs on it',
    cards: [
      { title: 'CEOs and COOs', body: 'Where to intervene this week, before the first call.' },
      { title: 'Chiefs of Staff', body: 'The exec brief, generated instead of assembled. Annotate and forward.' },
      { title: 'Board observers', body: 'Up to five email-only viewers per workspace receive the quarterly snapshot for free.' },
    ],
  },
  faq: [
    { q: 'What does "momentum" mean concretely?', a: '<p>A composite of projects advancing vs. slipping, decisions closed vs. pending, KR pace, and manager-marked outcomes, trended over time. Every component is clickable to its evidence. No black-box score.</p>' },
    { q: 'Who can see Leadership Pulse?', a: '<p>Roles the admin designates — typically director and above. It respects the same visibility rules as everything else; a leader sees the org beneath them.</p>' },
    { q: 'Can I get it in Slack or Teams?', a: '<p>Yes. A weekly Leadership Pulse summary can be delivered to a private channel or DM, with the full view in the web app.</p>' },
    { q: 'Which plans include Leadership Pulse?', a: '<p>Business and Enterprise.</p>' },
  ],
  related: ['monday-brief', 'okr-tracking', 'year-in-review'],
  cta: { title: 'Know where to intervene before Monday 9am.', sub: '14-day trial with full Business features. Connect this week; read your first pulse next week.' },
});
