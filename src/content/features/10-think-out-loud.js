const c = require('../../components');

module.exports = c.featurePage({
  slug: 'think-out-loud',
  metaTitle: 'refine half-formed ideas with company context',
  description: 'Think Out Loud: share a half-formed idea or question; Bren asks clarifying questions using company context — past pilots, current projects, owners, constraints — and drafts a shareable brief. Business and Enterprise.',
  title: 'Think out loud. Bren asks the questions a good colleague would.',
  sub: 'Share a half-formed idea. Bren replies with what the company already knows — the pilot from Q1, the owner who would be affected, the constraint nobody mentioned — asks the clarifying questions, and drafts a brief you can share.',
  mock: c.mockThink(),
  problem: {
    title: 'Good ideas die in the gap between "what if" and "here is a proposal".',
    body: `<p>You have a thought in the shower. Turning it into something a team can discuss means remembering what was tried before, who owns the adjacent work, what the data said, and what the constraints are — then writing it down. Most ideas never make it that far.</p>`,
  },
  how: {
    title: 'From a sentence to a brief, with context you did not have to look up.',
    blocks: [
      { icon: 'bulb', title: 'Start with anything', body: '"What if we moved onboarding to self-serve next quarter?" A sentence is enough. Drafts are private until you share them.' },
      { icon: 'brain', title: 'Bren brings the company context', body: 'Related projects and their status, prior attempts and their outcomes, the people who would own or be affected, the OKRs it touches, relevant docs and decisions — all cited.' },
      { icon: 'chat', title: 'Clarifying questions, not lectures', body: 'Which matters more, activation or support load? Own project or part of Atlas? Bren asks the two or three questions that sharpen the idea, in company terms.' },
      { icon: 'note', title: 'A shareable brief', body: 'A one-page brief with context, options and open questions, exported to a Google Doc, Notion page or Slack/Teams post. Ready to discuss, not to defend.' },
    ],
  },
  who: {
    title: 'Who thinks out loud',
    cards: [
      { title: 'Product and engineering leads', body: 'Pressure-test a direction against what the company has already learned.' },
      { title: 'Founders and executives', body: 'Turn a strategic hunch into a brief the leadership team can react to by tomorrow.' },
      { title: 'Anyone with an idea', body: 'Propose something without first spending a day gathering the background.' },
    ],
  },
  faq: [
    { q: 'Is my draft visible to anyone?', a: '<p>No. Think Out Loud drafts are private until you explicitly share the brief. They are never included in digests or timelines.</p>' },
    { q: 'What context does Bren use?', a: '<p>Only what you are permitted to see: projects, updates, decisions, docs and meetings within your visibility scope, plus public company context.</p>' },
    { q: 'Can I export the brief?', a: '<p>Yes — Google Docs, Notion, Microsoft Word, or a Slack/Teams post. Two-way sync to Notion and Confluence is on the roadmap.</p>' },
    { q: 'Which plans include Think Out Loud?', a: '<p>Business and Enterprise.</p>' },
  ],
  related: ['ask-bren', 'second-brain', 'okr-tracking'],
  cta: { title: 'Turn tomorrow\'s shower thought into a brief.', sub: '14-day trial with full Business features. No card.' },
});
