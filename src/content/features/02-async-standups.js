const c = require('../../components');

module.exports = c.featurePage({
  slug: 'async-standups',
  metaTitle: 'one 100-word update replaces the daily stand-up',
  description: 'Async Standups: import tasks from Jira, Notion, Trello, Airtable, Monday or ClickUp, post a ~100-word daily update from Slack or Teams, let managers request clarification and mark outcomes. Bren drafts the update from your activity. All plans.',
  title: 'Cancel the stand-up. Bren already knows.',
  sub: 'One ~100-word update per person per day, posted from Slack or Teams against real tasks. Managers get a digest the same morning, can ask for clarification inline, and mark outcomes. Twelve people get 1,000 hours a year back.',
  mock: c.mockStandup(),
  problem: {
    title: 'Fifteen people. Twenty minutes. Every single day.',
    body: `<p>The daily stand-up exists because managers need to know what is happening and nobody has a better way. So everyone stops at 9:30, listens to fourteen updates that are not about them, and says three sentences that nobody writes down.</p><p>Async stand-up bots tried to fix this and mostly failed for one reason: nobody reads the updates after week two. There is no consumer. Bren is the consumer.</p>`,
  },
  how: {
    title: 'Small update in. Real consequences out.',
    blocks: [
      { icon: 'plug', title: 'Tasks come from your project tool', body: 'Import from Jira, Notion, Trello, Airtable, Monday.com or ClickUp, or create lightweight tasks in Bren. Each update is filed against the right task and project automatically.' },
      { icon: 'mic', title: 'Bren drafts, you confirm', body: 'Bren proposes an update from your ticket changes, PRs and calendar. Edit, confirm, done — usually under two minutes. Voice-transcribed updates are on the roadmap.' },
      { icon: 'bell', title: 'Updates are actually consumed', body: 'Every update flows into the manager\'s daily digest, the project timeline, red-flag detection and OKR progress the same day. Posting one has a visible effect, which is why people keep posting.' },
      { icon: 'trophy', title: 'Clarify and mark outcomes inline', body: 'Managers request clarification on any update; the thread stays attached. Tasks and projects are marked win, ongoing, fail or postponed in one click and roll up to the Wins & Losses Ledger.' },
    ],
  },
  who: {
    title: 'Who cancels the meeting',
    cards: [
      { title: 'Engineering and product managers', body: 'Replace the 9:30 with a digest at 9:00 and a weekly 20-minute exceptions-only meeting.' },
      { title: 'Remote and multi-timezone teams', body: 'Reminders and digests follow each person\'s local time. Nobody dials in at 6am.' },
      { title: 'Individual contributors', body: 'Own your narrative. Post once, never be asked "what\'s the status?" again.' },
    ],
  },
  faq: [
    { q: 'Does everyone have to post every day?', a: '<p>The default is one update per working day; organisations can set daily, three times a week or weekly. Weekends and public holidays are skipped by default. Reminder time is per user (default 09:30 local).</p>' },
    { q: 'What if someone forgets?', a: '<p>Bren nudges once (configurable) and marks the update as missing in the digest. It never writes an update on someone\'s behalf.</p>' },
    { q: 'Do private notes feed the summaries?', a: '<p>Not by default. Organisations can choose to include them; the setting is visible to everyone. Private notes are never readable by admins.</p>' },
    { q: 'What if we use Asana or Linear?', a: '<p>Those are on the roadmap. You can create tasks in Bren and still run async stand-ups, or connect chat, docs, meetings and GitHub for most of the value.</p>' },
    { q: 'Which plans include Async Standups?', a: '<p>All plans. Team imports from one connected project tool; Business and Enterprise from any number.</p>' },
  ],
  related: ['digests', 'wins-and-losses', 'work-timeline'],
  cta: { title: 'Cancel the stand-up by day three of the trial.', sub: 'Connect Slack or Teams and your project tool. First digest within 24 hours. No card.' },
});
