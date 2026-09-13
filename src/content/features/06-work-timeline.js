const c = require('../../components');

module.exports = c.featurePage({
  slug: 'work-timeline',
  metaTitle: 'every project as a chronological, expandable record',
  description: 'Hierarchical Work Timeline: for any person, team, project or objective — chronological updates and status changes on the left, key wins and failures on the right, with "elaborate this" drill-down to the underlying messages, meetings and tickets. All plans.',
  title: 'What happened, in order, with the receipts.',
  sub: 'A two-column timeline for any person, team, project or objective: updates and status changes on the left, wins and failures on the right. Expand any segment to the messages, meetings and tickets behind it.',
  mock: c.mockTimeline(),
  problem: {
    title: 'The history of a project lives in six tools and three people\'s heads.',
    body: `<p>Why did the launch slip? When was the scope cut? Who agreed to the dependency? The answers are in a Slack thread from April, a Jira comment, a meeting nobody recorded, and a Notion page that was edited over. Reconstructing it takes an afternoon — if the people are still here.</p>`,
  },
  how: {
    title: 'Chronology on the left. Consequences on the right.',
    blocks: [
      { icon: 'timeline', title: 'One timeline per entity', body: 'Open a timeline for a project, a task, a team, an objective or a person (subject to permissions). Updates, status changes, task comments, PRs and meeting snapshots are placed in time.' },
      { icon: 'trophy', title: 'Wins and failures alongside', body: 'Manager-marked outcomes and Bren-detected turning points sit on the right column so the shape of a project is visible at a glance.' },
      { icon: 'chat', title: '"Elaborate this"', body: 'Any segment expands to the underlying evidence — the exact messages, tickets, docs and meeting excerpts — or to a longer narrative written by Bren with citations.' },
      { icon: 'lock', title: 'Permissions travel with the data', body: 'A timeline only shows what you could see in the source tools plus what Bren\'s Participatory / Public / Selective settings allow.' },
    ],
  },
  who: {
    title: 'Who opens it',
    cards: [
      { title: 'Project owners', body: 'Write the post-mortem from the record, not from memory.' },
      { title: 'People inheriting work', body: 'Read the whole story of a project in ten minutes before the first meeting.' },
      { title: 'Leaders', body: 'When the Monday brief says "Atlas slipped", click through to see exactly when and why.' },
    ],
  },
  faq: [
    { q: 'How far back does it go?', a: '<p>Team: 12 months of searchable history (12-month backfill on connect). Business and Enterprise: unlimited, subject to what the source tools expose.</p>' },
    { q: 'Can I see a timeline for a person?', a: '<p>Managers can see timelines for direct and indirect reportees. Everyone can see their own. Peers see shared-project contributions only.</p>' },
    { q: 'Can I export it?', a: '<p>Yes — PDF and JSON/CSV export for any timeline you can view.</p>' },
    { q: 'Which plans include the Work Timeline?', a: '<p>All plans.</p>' },
  ],
  related: ['second-brain', 'wins-and-losses', 'meeting-intelligence'],
  cta: { title: 'See the last 12 months of a project in one scroll.', sub: 'Backfill starts the moment you connect. 14-day free trial, no card.' },
});
