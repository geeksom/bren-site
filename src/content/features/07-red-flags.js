const c = require('../../components');

module.exports = c.featurePage({
  slug: 'red-flags',
  metaTitle: 'blockers and slipping work, surfaced with a suggested fix',
  description: 'Red-Flag Detection: Bren reads across updates, tickets and threads to surface blockers, slipping work, overloaded or absent owners and off-pace KRs, routed to the responsible manager with a suggested intervention. Business and Enterprise.',
  title: 'Find the fire while it is still a spark.',
  sub: 'Bren reads every update, ticket and thread for challenges, blockers, slipping work and overloaded owners — then tells the right manager, with a suggested intervention and the evidence.',
  mock: c.mockDigest({
    title: 'Red flags · Engineering · this week',
    items: [
      { tag: 'flag', text: 'Project Atlas: 2 of 3 owners on leave Wed–Fri. Suggest: reassign DPA review to Mei.' },
      { tag: 'flag', text: 'KR3 (4 launches) at 50% with 5 weeks left. Suggest: cut scope on launch 4 or add capacity.' },
      { tag: 'note', text: 'Support backlog mentioned in 9 updates this week — trending topic.' },
      { tag: 'win', text: 'Payments migration risk closed: load test passed.' },
    ],
  }),
  problem: {
    title: 'Problems are discovered, not predicted.',
    body: `<p>The signals were there: an owner's calendar said "OOO", a ticket had not moved in nine days, three people mentioned the same dependency in their updates. Nobody was reading across all of it, so the slip was announced in the Thursday meeting — a week after it became inevitable.</p>`,
  },
  how: {
    title: 'Read everything. Flag what matters. Suggest the move.',
    blocks: [
      { icon: 'radar', title: 'Signals across six streams', body: 'Stalled tickets, missed updates, repeated blockers, owners on leave, dependencies slipping, KRs off pace, sentiment shifts in updates — correlated across chat, tickets, calendars, docs, meetings and code.' },
      { icon: 'flag', title: 'Typed, prioritised, explained', body: 'Each flag is classified (blocker, capacity, dependency, pace, attention), given a severity, and explained with the sources behind it. No black boxes.' },
      { icon: 'users', title: 'Routed to the right person', body: 'Team-level flags go to the responsible manager; org-level flags to leadership. Flags appear in the daily digest, the Monday Morning Brief and, for high severity, immediately in Slack or Teams.' },
      { icon: 'bulb', title: 'A suggested intervention', body: '"Reassign the review to Mei", "cut scope on launch 4", "ask Legal for a date". Accept, edit or dismiss; Bren learns what your org considers worth flagging.' },
    ],
  },
  who: {
    title: 'Who gets the early warning',
    cards: [
      { title: 'People managers', body: 'Catch a blocked report on day two, not day nine.' },
      { title: 'Directors and VPs', body: 'See capacity problems — three projects sharing one owner — before they become missed quarters.' },
      { title: 'Chiefs of Staff and COOs', body: 'Org-level flags with a proposed move, ready for the Monday brief.' },
    ],
  },
  faq: [
    { q: 'Does this flag individual people as underperforming?', a: '<p>No. Flags are about work — tickets, projects, dependencies, capacity — not about people. Bren produces no productivity scores or rankings.</p>' },
    { q: 'How noisy is it?', a: '<p>Severity thresholds are configurable per team. Dismissing a flag with a reason tunes future detection. Most teams see two to five flags a week.</p>' },
    { q: 'Can flags go to a channel?', a: '<p>Yes — route by team, severity or type to Slack or Teams channels, in addition to the responsible manager.</p>' },
    { q: 'Which plans include Red-Flag Detection?', a: '<p>Business and Enterprise.</p>' },
  ],
  related: ['okr-tracking', 'monday-brief', 'digests'],
  cta: { title: 'See what your tools have been trying to tell you.', sub: 'Red flags start appearing within a week of connecting. 14-day trial, full Business features, no card.' },
});
