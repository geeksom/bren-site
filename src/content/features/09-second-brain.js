const c = require('../../components');

module.exports = c.featurePage({
  slug: 'second-brain',
  metaTitle: 'the company memory that makes onboarding a week, not a quarter',
  description: 'Second Brain: Bren\'s chronological company memory for new hires, people returning from leave and anyone inheriting a project — the sequence of decisions, changes and outcomes on any team or topic, subject to permissions. All plans.',
  title: 'Your company finally has a memory.',
  sub: 'Second Brain is the chronological record of what happened on any team, project or topic — built from what actually happened, never out of date. New hires productive in 5 days, not 5 weeks.',
  mock: c.mockSecondBrain(),
  problem: {
    title: 'Onboarding is a deck from last quarter and a hundred questions.',
    body: `<p>Week one: the deck. Week two: "who do I ask about…?" Week three: still discovering that the thing in the deck was changed in April. Meanwhile the person who wrote the deck has left, and their context left with them.</p><p>The same story repeats for anyone returning from leave, or inheriting a project: days of back-and-forth to learn what everyone else already knows.</p>`,
  },
  how: {
    title: 'History, assembled from the record.',
    blocks: [
      { icon: 'book', title: 'Chronological by team, project or topic', body: 'Open the Payments team and read the year: formed in January, chose Stripe over Adyen (decision doc linked), first migration rolled back in April (post-mortem linked), Atlas kicked off in July.' },
      { icon: 'brain', title: 'Ask it anything', body: 'Second Brain is what Ask Bren reads when you ask "why did we choose Stripe?" or "what happened with the first migration?" — cited, in context, with the people involved.' },
      { icon: 'users', title: 'Built for arrivals and returns', body: 'A new-hire view scoped to their role and team. A catch-up digest for anyone back from leave. A handover view for whoever inherits a project.' },
      { icon: 'lock', title: 'Permissions apply to history too', body: 'A new hire sees what their role and team memberships allow. Private channels, restricted projects and private notes stay out of view.' },
    ],
  },
  who: {
    title: 'Who gets up to speed',
    cards: [
      { title: 'New hires', body: '"New clinicians and engineers are useful in their first week." — Daniel Okafor, Chief of Staff, Larkspur Health.' },
      { title: 'People back from leave', body: 'Ten minutes with the catch-up digest instead of two days of reading Slack backwards.' },
      { title: 'Managers covering for someone', body: 'Decisions do not wait for the manager to return; the stand-in has the same record.' },
    ],
  },
  faq: [
    { q: 'How far back does the memory go?', a: '<p>Team: 12 months (backfilled on connect). Business and Enterprise: unlimited, subject to what the source tools expose.</p>' },
    { q: 'Is this a wiki?', a: '<p>No. Wikis are written and go stale. Second Brain is assembled from what happened — messages, tickets, decisions, meetings — so it is current by construction. Your Notion or Confluence pages are sources, not replacements.</p>' },
    { q: 'What if someone leaves the company?', a: '<p>Their updates, decisions and threads remain in the record, attributed. Their seat is freed. On request, contributions can be anonymised.</p>' },
    { q: 'Which plans include Second Brain?', a: '<p>All plans.</p>' },
  ],
  related: ['ask-bren', 'work-timeline', 'meeting-intelligence'],
  cta: { title: 'Onboard your next hire in five days.', sub: 'Backfill starts the moment you connect. 14-day free trial, no card.' },
});
