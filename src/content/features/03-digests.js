const c = require('../../components');

module.exports = c.featurePage({
  slug: 'digests',
  metaTitle: 'daily, weekly and monthly briefs for every altitude',
  description: 'AI Digests: a daily digest for team leads, weekly digests for managers and ICs, a weekly leadership digest and a monthly recap for everyone — persona-aware, cited, delivered in Slack, Teams, email or the web app. All plans.',
  title: 'The Friday report nobody has to write.',
  sub: 'Bren turns updates, tickets, threads and meetings into digests for each altitude: daily for leads, weekly for managers and ICs, weekly for leadership, monthly for everyone. Every line links to its source.',
  mock: c.mockDigest(),
  problem: {
    title: 'Summaries are either too long to read or too short to trust.',
    body: `<p>The weekly update is written on Friday at 5pm from memory. The TL;DR channel is muted. The manager's manager asks for "a quick summary" and gets a different one from each team. Everyone is summarising; nobody is informed.</p><p>The problem is not that people don't write updates. It is that no summary is built for the person reading it.</p>`,
  },
  how: {
    title: 'One source of truth, four altitudes.',
    blocks: [
      { icon: 'clock', title: 'Daily digest for team leads', body: 'What moved yesterday, who is blocked, who did not post, what needs a decision today. Delivered before the day starts, in Slack, Teams, email or the web app.' },
      { icon: 'users', title: 'Weekly digests for managers and ICs', body: 'Managers see across their teams and dependencies. ICs see their team, the projects they depend on, and requests waiting on them. Same facts, different lens.' },
      { icon: 'pulse', title: 'Weekly leadership digest and monthly recap', body: 'Momentum, risks and decisions needed across the org for senior leadership. A monthly recap for everyone — OKR progress, team contributions, wins and losses. Quarterly, half-yearly and yearly snapshots on Business and Enterprise.' },
      { icon: 'lock', title: 'Cited, permission-aware, pausable', body: 'Every item links to the message, ticket, doc or meeting behind it. You only see what you could see in the source tools. Pause digests during leave and get a catch-up edition on return.' },
    ],
  },
  who: {
    title: 'Who stops writing reports',
    cards: [
      { title: 'Team leads', body: 'Daily digest replaces the stand-up and the "anything I should know?" ping.' },
      { title: 'Managers of 2–4 teams', body: 'One weekly digest instead of four Friday reports and three catch-up calls.' },
      { title: 'Senior leadership', body: 'A weekly leadership digest that is about decisions and risk, not ticket counts.' },
    ],
  },
  faq: [
    { q: 'Where are digests delivered?', a: '<p>Always in the web app, plus your choice of Slack, Microsoft Teams or email. Team digests can also post to a channel.</p>' },
    { q: 'Can I change what goes in my digest?', a: '<p>Yes — follow or mute projects, teams and objectives, set the cadence, and choose sections. Org admins set defaults per role.</p>' },
    { q: 'Which digests are on which plan?', a: '<p>Team: daily (leads) and weekly (managers, ICs). Business and Enterprise add the weekly leadership digest, monthly recap for everyone, quarterly / half-yearly / yearly snapshots and Year in Review.</p>' },
    { q: 'How does Bren avoid summarising things wrongly?', a: '<p>Every claim is grounded in a retrieved source and linked. Missing updates are reported as missing. Any segment can be expanded to the underlying evidence, and managers can request clarification instead of assuming.</p>' },
  ],
  related: ['monday-brief', 'leadership-pulse', 'async-standups'],
  cta: { title: 'Your first digest lands tomorrow morning.', sub: 'Connect Slack or Teams and one project tool today. 14-day free trial, no card.' },
});
