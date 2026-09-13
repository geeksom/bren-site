const c = require('../../components');

module.exports = c.featurePage({
  slug: 'year-in-review',
  metaTitle: 'the annual report that writes itself',
  description: 'Year in Review: a standalone annual report per team or organisation — OKR progress, team contributions, major wins and losses, hours reclaimed — generated from the record and exportable as PDF or Doc. Business and Enterprise.',
  title: 'The year, as it actually happened.',
  sub: 'A standalone annual report for any team or the whole organisation: OKR-based progress, team contributions, the biggest wins and losses, and what changed. Generated from the record, cited, exportable.',
  mock: c.mockYear(),
  problem: {
    title: 'The annual review deck takes three weeks and remembers three months.',
    body: `<p>Every December someone assembles the year from memory and whatever slides survived. The first two quarters are a blur, the losses are softened, and the people who made the wins happen are a footnote.</p>`,
  },
  how: {
    title: 'Twelve months of evidence, one report.',
    blocks: [
      { icon: 'target', title: 'Progress against objectives', body: 'Every objective and KR for the year: achieved, partially achieved, dropped — with the linked work and the moments it turned.' },
      { icon: 'users', title: 'Team contributions', body: 'What each team owned, shipped and marked as won or lost, in their own words from their updates. Attribution without rankings.' },
      { icon: 'trophy', title: 'Biggest wins and losses', body: 'From the Wins & Losses Ledger, ranked by impact on objectives, with a one-paragraph story for each and the timeline behind it.' },
      { icon: 'clock', title: 'What changed, and what it cost', body: 'Reorgs, launches, hires, meetings cancelled, hours reclaimed. Export as PDF or Google Doc; share to Slack or Teams; use it in the board deck.' },
    ],
  },
  who: {
    title: 'Who stops building the deck',
    cards: [
      { title: 'Executives', body: 'A board-ready annual narrative generated in minutes, not weeks.' },
      { title: 'Department heads', body: 'A team-level review that your team recognises as true.' },
      { title: 'People and HR', body: 'A factual account of the year to anchor planning and recognition.' },
    ],
  },
  faq: [
    { q: 'Can I run it for any period?', a: '<p>Yes — calendar year, fiscal year, or any custom range. Quarterly and half-yearly snapshots are available on the same plans.</p>' },
    { q: 'Can we edit it?', a: '<p>Export to Google Docs or Word and edit freely. The Bren version stays as the cited record.</p>' },
    { q: 'Who can see it?', a: '<p>Org-wide reports: roles the admin designates. Team reports: the team lead and above. Everything inside respects Bren\'s visibility rules.</p>' },
    { q: 'Which plans include Year in Review?', a: '<p>Business and Enterprise.</p>' },
  ],
  related: ['leadership-pulse', 'wins-and-losses', 'okr-tracking'],
  cta: { title: 'Start recording the year you will report on.', sub: '14-day trial with full Business features, no card. Backfill starts the moment you connect.' },
});
