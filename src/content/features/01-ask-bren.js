const c = require('../../components');

module.exports = c.featurePage({
  slug: 'ask-bren',
  metaTitle: 'ask anything about work and get a cited answer in seconds',
  description: 'Ask Bren is the conversational front door to everything Bren knows: project and OKR status, who owns what, availability, decisions, documents. Cited answers in the web app, Slack and Microsoft Teams. All plans.',
  title: 'Ask anything about work. Get a cited answer in seconds.',
  sub: 'Ask Bren is the hero feature: a conversation with everything your company knows — projects, goals, people, decisions, documents — in the web app, Slack or Teams. Every answer links to the message, ticket, doc or meeting it came from.',
  mock: c.mockChat(),
  problem: {
    title: 'The "quick question" is never quick.',
    body: `<p>Someone needs to know where Project Atlas stands. They ask in Slack. Three people stop what they were doing; one of them answers from memory, half right. The asker still opens Jira, then the doc, then the meeting notes. Twenty minutes gone, four people interrupted, and the answer is already stale.</p><p>Multiply by every person, every day. That is the tax a company pays for not having a memory anyone can query.</p>`,
  },
  how: {
    title: 'A question goes in. Sources come out.',
    blocks: [
      { icon: 'chat', title: 'Ask in the tools you already use', body: 'Type <code>/bren</code> or DM @Bren in Slack, open the Bren app in Microsoft Teams, or use the web app. Same answers, same permissions everywhere. Full access from Slack and Teams mobile.' },
      { icon: 'brain', title: 'Answers from the company graph, not just docs', body: 'Bren knows teams, people, projects, tasks, OKRs and time. Ask "who owns the dependency that is slipping?", "is Sam available Thursday?", "what did we decide on annual pricing?" — questions a document search cannot answer.' },
      { icon: 'lock', title: 'Every line cited. Nothing invented.', body: 'Each answer links to its sources. If Bren cannot find an answer it says so and offers to ask the owner. Questions outside your permissions return "I can\'t share that" — never a partial leak.' },
      { icon: 'note', title: 'Record, note, act', body: 'Post your daily update from the same box. Take a private note. Ask Bren to draft a summary for a channel or, where two-way sync is enabled, to post a comment to Jira — always with your confirmation first.' },
    ],
  },
  who: {
    title: 'Who reaches for it first',
    cards: [
      { title: 'Individual contributors', body: 'Stop interrupting the one person who knows. Get the context, keep working.' },
      { title: 'People managers', body: '"What changed on my teams since yesterday?" before the coffee is cold.' },
      { title: 'Leaders and Chiefs of Staff', body: '"Are we on track for Q3?" with the evidence attached, not a status meeting.' },
    ],
  },
  faq: [
    { q: 'Where does Ask Bren work?', a: '<p>Bren web app, Slack (slash command and DM), Microsoft Teams (personal and channel app). Slack and Teams mobile apps give full access. A Chrome extension to bring Ask Bren into Jira and Google Docs is on the roadmap.</p>' },
    { q: 'Is there a usage limit?', a: '<p>Fair use, with soft caps of 500 questions per user per day on Team, 2,000 on Business, unlimited on Enterprise. No surprise bills — if a workspace consistently exceeds a cap we get in touch.</p>' },
    { q: 'Can it answer questions about people?', a: '<p>Availability (from calendars and out-of-office), workload and recent contributions — subject to permissions. Managers get insights on direct and indirect reportees; peers see availability and shared-project work only. Org admins can only tighten these defaults.</p>' },
    { q: 'What happens when it does not know?', a: '<p>It says so, shows what it did find, and offers to ask the relevant owner. Missing updates are reported as missing. Bren never fabricates.</p>' },
    { q: 'Which plans include Ask Bren?', a: '<p>All plans — Team, Business and Enterprise.</p>' },
  ],
  related: ['second-brain', 'think-out-loud', 'digests'],
  cta: { title: 'Ask your first question tomorrow morning.', sub: 'Connect Slack or Teams and one project tool today. 14-day free trial, no card.' },
});
