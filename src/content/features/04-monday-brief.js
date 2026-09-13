const c = require('../../components');

module.exports = c.featurePage({
  slug: 'monday-brief',
  metaTitle: 'the week, laid out before 9am',
  description: 'Monday Morning Brief: a persona-specific weekly kickoff delivered before 09:00 local — last week\'s recap, key notes on ongoing projects and objectives, planning considerations, and pending requests to block time for. Business and Enterprise.',
  title: 'Know where to intervene before Monday 9am.',
  sub: 'A weekly kickoff written for you: what happened last week, what matters this week, what to block time for. Delivered before 09:00 local on your first working day — in Slack, Teams, email or the web app.',
  mock: c.mockBrief(),
  problem: {
    title: 'You found out in a meeting, from someone who had known for a week.',
    body: `<p>Leaders start Monday with a calendar, not a picture. The picture arrives piecemeal: a 1:1 at 10, a sync at 11, a Slack thread at lunch. By Wednesday you know where the fires are; by then they are fires.</p><p>A chief of staff would have handed you a one-pager at 8:45. Most people do not have a chief of staff.</p>`,
  },
  how: {
    title: 'A one-pager, written for your altitude, every week.',
    blocks: [
      { icon: 'clock', title: 'Last week, honestly', body: 'Projects that advanced, projects that slipped and why, decisions made, wins and losses marked by managers — with links to the evidence.' },
      { icon: 'flag', title: 'Watch this week', body: 'Owners on leave, dependencies about to bite, OKRs off pace, red flags still open. Each with a suggested intervention you can act on before the first call.' },
      { icon: 'calendar', title: 'Block time for', body: 'Requests waiting on you, deliverables due, planning inputs owed, 1:1s where someone asked for a decision. Pulled from tickets, threads and calendars.' },
      { icon: 'users', title: 'Persona-specific by design', body: 'A VP Engineering and a COO get different briefs from the same facts. Follow or mute teams, projects and objectives to tune yours.' },
    ],
  },
  who: {
    title: 'Who reads it first',
    cards: [
      { title: 'C-level and COOs', body: '"Monday Morning Brief is the first thing I read. I know where to intervene before my first call." — Elena Marsh, COO, Orbital Freight.' },
      { title: 'Directors and VPs', body: 'Skip the Monday sync. Walk in knowing which of your teams needs you this week.' },
      { title: 'Chiefs of Staff', body: 'Stop assembling the brief by hand on Sunday night. Review it, annotate it, forward it.' },
    ],
  },
  faq: [
    { q: 'When exactly does it arrive?', a: '<p>Before 09:00 local time on your first working day of the week — Monday for most, configurable for other schedules and public holidays.</p>' },
    { q: 'Is it only for executives?', a: '<p>It is available to anyone on Business or Enterprise; admins choose which roles receive it by default. Most companies turn it on for managers and above.</p>' },
    { q: 'How is it different from the weekly digest?', a: '<p>The weekly digest looks back at what happened. The Monday Morning Brief looks forward: what to watch, what to decide, what to block time for — and it is written around your calendar.</p>' },
    { q: 'Which plans include it?', a: '<p>Business and Enterprise.</p>' },
  ],
  related: ['leadership-pulse', 'red-flags', 'digests'],
  cta: { title: 'Get your first brief next Monday.', sub: '14-day trial with full Business features. Connect this week, read it before your first call next week.' },
});
