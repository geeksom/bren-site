const c = require('../../components');

module.exports = c.featurePage({
  slug: 'org-and-permissions',
  metaTitle: 'teams, hierarchy and visibility that mirror reality',
  description: 'Org & Permissions: hierarchical teams with leads, people with managers, reportees and mentors, and three visibility modes for projects, tasks and OKRs — Participatory, Public, Selective — on top of permissions mirrored from every source tool. All plans.',
  title: 'Visibility that mirrors how your company actually works.',
  sub: 'Teams with hierarchy and leads. People with managers, reportees and mentors. Three visibility modes for every project, task and objective — on top of the permissions Bren mirrors from Slack, Jira, Google and the rest.',
  mock: c.mockOrg(),
  problem: {
    title: 'Either everyone sees everything, or nobody sees anything useful.',
    body: `<p>Most "AI for the company" tools have one permission model: whatever the admin connected, everyone can query. Security says no, HR says no, and the rollout stalls. The alternative — lock it all down — makes the tool useless.</p><p>Bren's answer: nobody sees anything in Bren they could not already see in the tool it came from, and every project has a visibility setting that matches how teams really share work.</p>`,
  },
  how: {
    title: 'Structure first. Then two layers of permissions.',
    blocks: [
      { icon: 'users', title: 'Teams and people', body: 'Every team has one parent and any number of children, and one lead. People have managers and reportees, and optional mentor links (senior, but not reporting). Import from Slack or Teams groups, Google or Microsoft directory, CSV, or SCIM on Enterprise. Edit in a drag-and-drop tree.' },
      { icon: 'lock', title: 'Layer 1: mirrored from source tools', body: 'Private Slack channels, restricted Jira projects, unshared docs: if you cannot see it there, you cannot see it in Bren. Re-checked on every sync, at most 15 minutes lag.' },
      { icon: 'radar', title: 'Layer 2: Participatory, Public, Selective', body: 'Participatory (default): owners, participants and their reporting managers. Public: the whole company. Selective: Participatory plus people or teams you add. Marking something Public disables the Selective picker.' },
      { icon: 'flag', title: 'Insights about people, deliberately narrow', body: 'Managers see direct and indirect reportees. Peers see availability and shared-project contributions only. Org admins can tighten defaults, never loosen them. Private notes are outside all of this.' },
    ],
  },
  who: {
    title: 'Who says yes because of it',
    cards: [
      { title: 'IT and Security', body: 'Least-privilege scopes, mirrored permissions, SSO on Business, SCIM and audit logs on Enterprise.' },
      { title: 'HR and People', body: 'No surveillance; no peer-to-peer performance visibility; private notes private.' },
      { title: 'Team leads', body: 'Default team visibility into your own work, without asking an admin for every project.' },
    ],
  },
  faq: [
    { q: 'What does each team see by default?', a: '<p>Every team sees its own owned and participatory entities unless a project is specifically marked private in the source tool.</p>' },
    { q: 'Who can see an OKR?', a: '<p>Participatory by default: the owner, the owners and participants of tasks feeding into the KR (up to one level down) and their managers. Public and Selective work as for projects.</p>' },
    { q: 'What about mentors?', a: '<p>Mentor links are informational (senior but not reporting). They grant no additional visibility unless the mentee marks something Selective and adds the mentor.</p>' },
    { q: 'How do reorgs work?', a: '<p>Edit the team tree; history follows the people; digests adjust from the next cycle. SCIM-driven reorgs on Enterprise apply automatically.</p>' },
    { q: 'Which plans include Org & Permissions?', a: '<p>All plans. SAML SSO is on Business and Enterprise; SCIM and audit logs are Enterprise.</p>' },
  ],
  related: ['private-notes', 'okr-tracking', 'second-brain'],
  cta: { title: 'Roll out company-wide without a visibility audit.', sub: 'Import your org in the 14-day trial. No card. Security overview available on request.' },
});
