const c = require('../components');

const streams = `<div class="table-wrap"><table class="compare"><thead><tr><th>Stream</th><th>Tools</th><th>Direction</th><th>What Bren reads</th></tr></thead><tbody>
<tr><th scope="row">Chat</th><td>Slack, Microsoft Teams, Gmail, Outlook</td><td>2-way</td><td>Channels Bren is invited to, DMs with Bren, labelled email. Writes digests, alerts and answers back.</td></tr>
<tr><th scope="row">Meetings</th><td>Zoom, Google Meet, Slack Huddles, Google Calendar, Outlook Calendar</td><td>Incoming</td><td>Transcripts and recordings your tool already produces; calendar metadata for availability and leave. Bren never joins calls.</td></tr>
<tr><th scope="row">Documentation</th><td>Google Workspace, Microsoft 365, Notion, Confluence, Loom</td><td>Incoming</td><td>Documents shared with connected users; scoped drives, sites and spaces.</td></tr>
<tr><th scope="row">Project management</th><td>Jira, Notion, Trello, Airtable, Monday.com, ClickUp</td><td>2-way</td><td>Projects, tasks, status changes, comments, dependencies. Writes summaries back, opt-in.</td></tr>
<tr><th scope="row">Code</th><td>GitHub</td><td>Incoming</td><td>PRs, reviews, commit messages, issues, releases. No source code stored.</td></tr>
<tr><th scope="row">Manual reporting</th><td>In-app forms, CSV, Google Sheets</td><td>Incoming</td><td>KR metrics that live nowhere else.</td></tr>
</tbody></table></div>`;

const graph = c.cardGrid(
  [
    { icon: 'users', title: 'Organisation → Teams → People', body: 'Every team has one parent and any number of children, and one lead. People have managers, reportees and optional mentor links. Imported from Slack/Teams groups, your directory, CSV or SCIM.' },
    { icon: 'timeline', title: 'Projects → Tasks → Sub-tasks', body: 'Status, results and dependencies flow in from your project tool. Multiple owners per project. Dependencies across projects are tracked so slips propagate to the right people.' },
    { icon: 'target', title: 'Objectives → Key Results', body: 'KRs link to the projects and tasks feeding them. Metrics come from integrations or manual reporting. Bren evaluates direction of travel and explains its reasoning with sources.' },
  ],
  3
);

const insights = c.cardGrid(
  [
    { icon: 'chat', title: 'On demand', body: 'Ask Bren in the web app, Slack or Teams. Cited answers about projects, people, decisions, documents and goals.', href: '/features/ask-bren/' },
    { icon: 'bell', title: 'Time series', body: 'Daily digest for leads, weekly for managers and ICs, weekly leadership digest, monthly recap, quarterly / half-yearly / yearly snapshots, Year in Review.', href: '/features/digests/' },
    { icon: 'flag', title: 'Alerts', body: 'Red flags, blockers, absent owners and slipping KRs — routed to the responsible manager with a suggested intervention.', href: '/features/red-flags/' },
    { icon: 'calendar', title: 'Monday Morning Brief', body: 'Last week, this week, what to block time for. Delivered before 9am local on your first working day.', href: '/features/monday-brief/' },
    { icon: 'book', title: 'Second Brain', body: 'The chronological company memory for onboarding, returning from leave, or inheriting a project.', href: '/features/second-brain/' },
    { icon: 'bulb', title: 'Think Out Loud', body: 'Refine a half-formed idea with company context; Bren asks the clarifying questions and drafts the brief.', href: '/features/think-out-loud/' },
  ],
  3
);

const security = `
<div class="two-col">
  <div>
    <p class="eyebrow">Security &amp; trust</p>
    <h2>Built to pass the security review before the pilot starts.</h2>
    <p class="sub">Bren is SOC 2 Type II audited and GDPR/CCPA compliant. Customer data is never used to train models. Permissions mirror every source tool.</p>
    <p><a class="btn btn-secondary" href="/book-demo/">Request the SOC 2 report</a></p>
  </div>
  <div class="prose">
    <ul class="checks">
      <li>${c.ICONS.check}<span><strong>SOC 2 Type II</strong> (Security, Availability, Confidentiality). Report under NDA. ISO 27001 in progress.</span></li>
      <li>${c.ICONS.check}<span><strong>Encryption:</strong> AES-256 at rest, TLS 1.3 in transit. Private notes additionally envelope-encrypted per workspace.</span></li>
      <li>${c.ICONS.check}<span><strong>No training on your data.</strong> Model providers operate under zero-retention agreements. Bren never fine-tunes on customer content.</span></li>
      <li>${c.ICONS.check}<span><strong>Permission mirroring.</strong> Source-tool permissions re-checked on every sync (at most 15 minutes lag). Private channels stay private.</span></li>
      <li>${c.ICONS.check}<span><strong>Least-privilege OAuth.</strong> Admins scope Bren to specific channels, projects, drives and repos. Read-only mode available.</span></li>
      <li>${c.ICONS.check}<span><strong>Hosting:</strong> AWS, US by default; EU (Frankfurt) on Enterprise. Private-VPC deployment in your AWS account on Enterprise.</span></li>
      <li>${c.ICONS.check}<span><strong>Identity:</strong> Google/Microsoft sign-in (Team); SAML SSO (Business); SCIM provisioning and audit logs (Enterprise).</span></li>
      <li>${c.ICONS.check}<span><strong>Retention &amp; deletion:</strong> export for 30 days after cancellation, then deletion; certificate on request. Custom retention and legal hold on Enterprise.</span></li>
      <li>${c.ICONS.check}<span><strong>Availability:</strong> 99.9% target on Business; contractual 99.9% SLA with credits on Enterprise. RPO 24h / RTO 8h (RPO 1h available on Enterprise).</span></li>
      <li>${c.ICONS.check}<span><strong>Not collected:</strong> keystrokes, screenshots, screen time, location, app usage, DMs between people, source code.</span></li>
    </ul>
  </div>
</div>`;

const permissions = c.featureRow({
  title: 'Visibility that mirrors reality: Participatory, Public, Selective.',
  body: 'Every project, task and objective has one of three visibility modes. Participatory (the default) shows it to owners, participants and their reporting managers. Public shows it to the whole company. Selective is Participatory plus the people or teams you add. Org admins can only make defaults stricter.',
  bullets: ['Managers see direct and indirect reportees; peers see availability and shared work only', 'A private Jira project or Slack channel stays private in Bren, whatever the mode', 'Private notes are excluded from AI summaries by default and unreadable by admins'],
  mock: c.mockPermissions(),
  href: '/features/org-and-permissions/',
  linkLabel: 'Org & Permissions in detail',
});

const faqItems = [
  { q: 'Does Bren need admin access to our tools?', a: '<p>Slack, Teams, Google Workspace and Microsoft 365 apps need an admin to install, with least-privilege scopes listed per integration. Personal connections (your calendar, email, Zoom) are per user. Admins choose exactly which channels, projects, drives and repos Bren sees.</p>' },
  { q: 'What if someone loses access to a channel or project in the source tool?', a: '<p>Bren re-checks permissions on every sync — at most 15 minutes lag — and removes their access to derived content on the next sync.</p>' },
  { q: 'Does Bren record or join meetings?', a: '<p>No. It reads transcripts and recordings your meeting tool already produced (Zoom cloud recordings, Google Meet transcripts, Slack huddle notes). If recording is off, Bren only has calendar metadata.</p>' },
  { q: 'How fresh is the data?', a: '<p>Event-driven where the tool supports webhooks (Slack, Teams, Jira, GitHub, Notion, Monday, ClickUp — seconds); polling every 15 minutes otherwise.</p>' },
  { q: 'How does Bren avoid hallucinations?', a: '<p>Every claim in a digest or answer is grounded in a retrieved source and cited. If there is no source, Bren says so. Missing updates are reported as missing — never generated. Any segment can be expanded to the underlying messages, tickets and meetings.</p>' },
  { q: 'Can we self-host?', a: '<p>There is no on-premises version. Enterprise offers a private-VPC deployment in your AWS account, plus US or EU data residency and customer-managed keys.</p>' },
  { q: 'Which languages are supported?', a: '<p>English fully. Spanish, French, German and Portuguese in beta.</p>' },
  { q: 'Is there an API?', a: '<p>API access and custom integrations are included in Enterprise. Team and Business use the 19 built-in integrations.</p>' },
  { q: 'What happens to our data if we cancel?', a: '<p>Export in JSON/CSV for 30 days, then everything is deleted within 30 days of the end of the paid period. Deletion certificate on request.</p>' },
];

module.exports = {
  path: 'platform/',
  title: 'Platform — how Bren turns six data streams into a company that explains itself',
  description: 'How Bren works: 19 integrations feed a permission-aware company graph of teams, people, projects and OKRs; Bren generates digests, briefs, alerts and cited answers. Security & trust: SOC 2 Type II, no training on customer data, SSO/SCIM, EU residency.',
  body: `
${c.hero({
  eyebrow: 'Platform',
  title: 'Six streams in. A company that explains itself out.',
  sub: 'Bren reads chat, meetings, docs, project tools, code and manual reports, organises everything around your teams, people, projects and objectives, and turns it into briefs and answers for every altitude — with the permissions of the tool it came from.',
  mock: c.mockTimeline(),
})}
${c.section(`${c.sectionHead('1 · Data streams', 'Reads where work already happens.', 'Least-privilege OAuth per tool. Admins decide which channels, projects, drives and repos are in scope, at connection and any time after.')}${streams}<p style="margin-top:20px"><a class="card-link" href="/integrations/">All 19 integrations in detail ${c.ICONS.arrow}</a></p>`)}
${c.section(`${c.sectionHead('2 · Company graph', 'Organised the way your company actually works.', 'Activity is attached to teams, people, projects, tasks and objectives — with time as the spine. That is what lets Bren answer "who owns the slipping dependency?" instead of just "where is the doc?"')}${graph}`, { tint: 'grey' })}
${c.section(`${c.sectionHead('3 · Insights', 'Persona-based, cited, proactive.', 'Everything below is generated per person: an IC sees their team and dependencies; a VP sees momentum, risk and decisions needed across their org.')}${insights}`)}
${c.section(permissions, { tint: 'warm' })}
${c.section(security, { id: 'security' })}
${c.section(c.faq(faqItems, { title: 'Platform questions', eyebrow: 'FAQ' }), { tint: 'grey' })}
${c.ctaBand({ title: 'See it on your org, not ours.', sub: 'Start the 14-day trial and connect Slack or Teams in an afternoon — or book a 30-minute demo and we will map your teams, tools and rollout.' })}
`,
};
