const c = require('../../components');

module.exports = c.featurePage({
  slug: 'wins-and-losses',
  metaTitle: 'outcomes marked by managers, rolled up by team',
  description: 'Wins & Losses Ledger: managers mark tasks and projects as win, ongoing, fail or postponed; outcomes roll up into team and org ledgers with optional gamification. All plans.',
  title: 'A record of outcomes, not just activity.',
  sub: 'Managers mark tasks and projects as win, ongoing, fail or postponed in one click. Bren rolls outcomes up into team and org ledgers — the raw material for retros, reviews and the Year in Review.',
  mock: c.mockLedger(),
  problem: {
    title: 'Everyone is busy. Nobody can say what was actually won.',
    body: `<p>Ticket counts go up and to the right. Velocity looks fine. And yet at the quarterly review, the honest question — what did we ship that mattered, and what did we quietly drop? — takes an hour of archaeology to answer.</p><p>Activity is easy to measure. Outcomes require someone to say "this was a win" or "this failed" and for that judgement to be kept.</p>`,
  },
  how: {
    title: 'One click by the person who knows.',
    blocks: [
      { icon: 'trophy', title: 'Four outcomes, marked inline', body: 'From a digest, a timeline or Slack: win, ongoing, fail, postponed. Add a one-line reason. The mark is attached to the task or project, with the manager\'s name and the date.' },
      { icon: 'users', title: 'Rolls up by team and org', body: 'Team ledgers roll into department and company ledgers. Filters by period, team, objective and outcome type. Feeds the monthly recap, Leadership Pulse and Year in Review.' },
      { icon: 'pulse', title: 'Optional gamification', body: 'Streaks for updates posted, badges for manager-marked wins, team leaderboards for update rate. On by default, off in one switch — many organisations prefer it off.' },
      { icon: 'lock', title: 'About work, not people', body: 'Outcomes attach to tasks and projects, not to individuals. Bren produces no personal scores or rankings, and private notes stay private.' },
    ],
  },
  who: {
    title: 'Who keeps the ledger',
    cards: [
      { title: 'Managers', body: 'Mark outcomes as you read the digest. Run retros from the ledger, not from memory.' },
      { title: 'Leaders', body: 'See wins-to-fails ratios by team and quarter without asking for a deck.' },
      { title: 'Teams', body: 'A visible record that what you shipped was recognised — and what got dropped was decided, not forgotten.' },
    ],
  },
  faq: [
    { q: 'Who can mark outcomes?', a: '<p>Team leads and managers for their teams\' work; project owners for their projects. Admins can extend this.</p>' },
    { q: 'Can gamification be disabled?', a: '<p>Yes, per workspace, in one setting. Streaks and badges disappear; the ledger stays.</p>' },
    { q: 'Is this used for performance reviews?', a: '<p>The ledger records outcomes on work. How an organisation uses that in reviews is its decision; Bren attaches nothing to individuals beyond their posted updates and shared work.</p>' },
    { q: 'Which plans include the Wins & Losses Ledger?', a: '<p>All plans.</p>' },
  ],
  related: ['work-timeline', 'year-in-review', 'async-standups'],
  cta: { title: 'Start keeping score of outcomes this quarter.', sub: '14-day free trial, no card. Ledgers fill from the first week of updates.' },
});
