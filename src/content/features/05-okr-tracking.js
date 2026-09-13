const c = require('../../components');

module.exports = c.featurePage({
  slug: 'okr-tracking',
  metaTitle: 'objectives, key results and whether you are actually on track',
  description: 'OKR Tracking in Bren: Objectives → Key Results → linked projects and tasks, metrics from integrations or manual reporting, and an AI evaluation of direction of travel with red flags and sources. Business and Enterprise.',
  title: 'Goals that know what the work is doing.',
  sub: 'Link Objectives and Key Results to the projects and tasks feeding them. Bren pulls metrics from your tools or manual reports, evaluates whether you are on pace, and explains why — with sources.',
  mock: c.mockOKR(),
  problem: {
    title: 'OKRs get set in January and discovered in March.',
    body: `<p>The goals live in a spreadsheet. The work lives in Jira. The conversation lives in Slack. Nobody reconciles them until the quarterly review, when the KR is at 40% and everyone has a theory.</p><p>OKR tools ask managers to type a check-in every week. Bren reads the evidence instead.</p>`,
  },
  how: {
    title: 'Objectives on top. Evidence underneath.',
    blocks: [
      { icon: 'target', title: 'Structure that matches your framework', body: 'Objectives → Key Results → linked projects and tasks. Name them any way you like; templates for OKR, V2MOM and Rocks are included. Import from CSV, Notion or Google Sheets.' },
      { icon: 'plug', title: 'Metrics from where they live', body: 'Pull KR metrics from integrations (GitHub releases, Jira throughput, Monday and ClickUp fields) or report them in-app or via Google Sheets. Automated collection from analytics and finance tools is on the roadmap.' },
      { icon: 'pulse', title: 'Direction of travel, evaluated', body: 'Bren compares progress, pace and the state of linked work, and says whether you will land — "61% with five weeks left; on current pace, ~88%" — with the tickets and updates that support it.' },
      { icon: 'flag', title: 'Red flags with a suggested move', body: 'A KR that depends on an owner who is on leave next week, or on a project that just slipped, gets flagged to the objective owner with a proposed intervention.' },
    ],
  },
  who: {
    title: 'Who stops guessing',
    cards: [
      { title: 'Leadership', body: 'Nine OKRs, seven on pace, two at risk — and why — in Leadership Pulse and the Monday Morning Brief.' },
      { title: 'Objective owners', body: 'See which linked projects are carrying the KR and which are dragging it.' },
      { title: 'Teams', body: 'Understand how today\'s tasks feed the quarter\'s goals without a slide deck.' },
    ],
  },
  faq: [
    { q: 'Who can see an objective?', a: '<p>By default, Participatory: the owner, the owners and participants of tasks feeding into the KR (up to one level down) and their managers. Mark it Public for the whole company, or Selective to add specific people or teams.</p>' },
    { q: 'Do we have to enter metrics by hand?', a: '<p>Only for metrics that live nowhere else. Anything in a connected tool can be mapped to a KR. Automated collection from analytics and finance tools is on the roadmap.</p>' },
    { q: 'Does Bren score people on OKRs?', a: '<p>No. Bren evaluates objectives and the work feeding them. It does not rank individuals.</p>' },
    { q: 'Which plans include OKR Tracking?', a: '<p>Business and Enterprise.</p>' },
  ],
  related: ['red-flags', 'leadership-pulse', 'work-timeline'],
  cta: { title: 'See which of your OKRs are actually on pace.', sub: 'Import your objectives during the 14-day trial. Full Business features, no card.' },
});
