// Global site content. Facts here must match knowledge/*.md (05-pricing, 08-integrations, 02-positioning).

const SITE = {
  name: 'Bren',
  domain: 'getbren.com',
  url: 'https://getbren.com',
  tagline: 'Everyone gets a PA now.',
  description:
    'Bren is the AI chief of staff for every person in your company. It connects to your chat, meetings, docs and project tools, keeps everyone posted at their level, and answers any question about work in seconds.',
  company: 'Bren Labs, Inc.',
  address: '548 Market St, San Francisco, CA 94104, USA',
  supportEmail: 'help@getbren.com',
  privacyEmail: 'privacy@getbren.com',
  securityEmail: 'security@getbren.com',
  cta: {
    primary: { label: 'Start free trial', href: '/signup/' },
    secondary: { label: 'Book a demo', href: '/book-demo/' },
  },
};

// Feature registry — order is the order used in nav/footers/related lists.
const FEATURES = [
  { slug: 'ask-bren', name: 'Ask Bren', short: 'Ask anything about work. Cited answers in seconds.', plan: 'All plans', group: 'Ask' },
  { slug: 'async-standups', name: 'Async Standups', short: 'One 100-word update replaces the daily stand-up.', plan: 'All plans', group: 'Stay posted' },
  { slug: 'digests', name: 'AI Digests', short: 'Daily, weekly and monthly briefs for every altitude.', plan: 'All plans', group: 'Stay posted' },
  { slug: 'monday-brief', name: 'Monday Morning Brief', short: 'The week, laid out before 9am.', plan: 'Business & Enterprise', group: 'Stay posted' },
  { slug: 'okr-tracking', name: 'OKR Tracking', short: 'Objectives, key results and whether you are actually on track.', plan: 'Business & Enterprise', group: 'See momentum' },
  { slug: 'work-timeline', name: 'Work Timeline', short: 'Every project as a chronological, expandable record.', plan: 'All plans', group: 'See momentum' },
  { slug: 'red-flags', name: 'Red-Flag Detection', short: 'Blockers and slipping work, surfaced with a suggested fix.', plan: 'Business & Enterprise', group: 'See momentum' },
  { slug: 'wins-and-losses', name: 'Wins & Losses Ledger', short: 'Outcomes marked by managers, rolled up by team.', plan: 'All plans', group: 'See momentum' },
  { slug: 'second-brain', name: 'Second Brain', short: 'The company memory that makes onboarding a week, not a quarter.', plan: 'All plans', group: 'Remember' },
  { slug: 'think-out-loud', name: 'Think Out Loud', short: 'Refine half-formed ideas with company context.', plan: 'Business & Enterprise', group: 'Ask' },
  { slug: 'meeting-intelligence', name: 'Meeting Intelligence', short: 'Meeting outcomes in your timeline, not in a silo.', plan: 'Business & Enterprise', group: 'Remember' },
  { slug: 'private-notes', name: 'Private Notes', short: 'Notes only you can read. Even admins cannot.', plan: 'All plans', group: 'Remember' },
  { slug: 'org-and-permissions', name: 'Org & Permissions', short: 'Teams, hierarchy and visibility that mirror reality.', plan: 'All plans', group: 'Trust' },
  { slug: 'leadership-pulse', name: 'Leadership Pulse', short: 'Business momentum at a glance, for the people running it.', plan: 'Business & Enterprise', group: 'Stay posted' },
  { slug: 'year-in-review', name: 'Year in Review', short: 'The annual report that writes itself.', plan: 'Business & Enterprise', group: 'See momentum' },
];

const INTEGRATIONS = [
  // Chat
  { name: 'Slack', cat: 'Chat', dir: '2-way', reads: 'Messages in channels Bren is invited to, DMs with @Bren, user groups, presence.', writes: 'Digests, briefs, reminders, red-flag alerts, Ask Bren replies.', plan: 'All plans', icon: 'slack' },
  { name: 'Microsoft Teams', cat: 'Chat', dir: '2-way', reads: 'Messages in channels the Bren app is added to, chats with Bren, presence.', writes: 'Digests, briefs, reminders, alerts, Ask Bren replies.', plan: 'All plans', icon: 'teams' },
  { name: 'Gmail', cat: 'Chat', dir: '2-way', reads: 'Emails in labels you choose. Off by default.', writes: 'Digests by email; reply drafts you send yourself.', plan: 'All plans', icon: 'gmail' },
  { name: 'Outlook', cat: 'Chat', dir: '2-way', reads: 'Emails in folders you choose. Off by default.', writes: 'Digests by email; reply drafts you send yourself.', plan: 'All plans', icon: 'outlook' },
  // Meetings
  { name: 'Zoom', cat: 'Meetings', dir: 'Incoming', reads: 'Cloud recordings and transcripts of meetings you host or attend, plus metadata.', writes: 'Nothing. Bren never joins calls.', plan: 'All plans', icon: 'zoom' },
  { name: 'Google Meet', cat: 'Meetings', dir: 'Incoming', reads: 'Meet transcripts and recordings saved to Drive, plus metadata.', writes: 'Nothing.', plan: 'All plans', icon: 'meet' },
  { name: 'Slack Huddles', cat: 'Meetings', dir: 'Incoming', reads: 'Huddle notes and transcripts where Slack generates them.', writes: 'Nothing.', plan: 'All plans', icon: 'huddle' },
  { name: 'Google Calendar', cat: 'Meetings', dir: 'Incoming', reads: 'Events, attendees and out-of-office for availability and leave detection.', writes: 'Nothing.', plan: 'All plans', icon: 'gcal' },
  { name: 'Outlook Calendar', cat: 'Meetings', dir: 'Incoming', reads: 'Events, attendees and out-of-office.', writes: 'Nothing.', plan: 'All plans', icon: 'ocal' },
  // Docs
  { name: 'Google Workspace', cat: 'Documentation', dir: 'Incoming', reads: 'Docs, Sheets, Slides and Drive files shared with connected users; selected shared drives.', writes: 'Nothing today (2-way on the roadmap).', plan: 'All plans', icon: 'gdrive' },
  { name: 'Microsoft 365', cat: 'Documentation', dir: 'Incoming', reads: 'Word, Excel, PowerPoint, OneDrive and SharePoint sites you scope.', writes: 'Nothing today (2-way on the roadmap).', plan: 'All plans', icon: 'm365' },
  { name: 'Notion', cat: 'Documentation', dir: '2-way', reads: 'Pages and databases you share. Also works as a project tool.', writes: 'Summary property or comment on tasks (opt-in).', plan: 'All plans', icon: 'notion' },
  { name: 'Confluence', cat: 'Documentation', dir: 'Incoming', reads: 'Spaces you choose (Cloud). Data Center on Enterprise.', writes: 'Nothing today.', plan: 'All plans', icon: 'confluence' },
  { name: 'Loom', cat: 'Documentation', dir: 'Incoming', reads: 'Video transcripts and titles in your workspace.', writes: 'Nothing.', plan: 'All plans', icon: 'loom' },
  // PM
  { name: 'Jira', cat: 'Project management', dir: '2-way', reads: 'Projects, issues, sub-tasks, transitions, assignees, comments, sprints, issue links.', writes: 'Summary comments; outcome labels (opt-in).', plan: 'All plans', icon: 'jira' },
  { name: 'Trello', cat: 'Project management', dir: '2-way', reads: 'Boards, lists, cards, members, due dates, checklists.', writes: 'Card comments (opt-in).', plan: 'All plans', icon: 'trello' },
  { name: 'Airtable', cat: 'Project management', dir: '2-way', reads: 'Bases and tables you map as tasks or projects.', writes: 'Comment or field write-back (opt-in).', plan: 'All plans', icon: 'airtable' },
  { name: 'Monday.com', cat: 'Project management', dir: '2-way', reads: 'Boards, items, statuses, owners, timelines, dependencies.', writes: 'Updates on items (opt-in).', plan: 'All plans', icon: 'monday' },
  { name: 'ClickUp', cat: 'Project management', dir: '2-way', reads: 'Spaces, lists, tasks, statuses, assignees, dependencies.', writes: 'Task comments (opt-in).', plan: 'All plans', icon: 'clickup' },
  // Code
  { name: 'GitHub', cat: 'Code', dir: 'Incoming', reads: 'PRs, reviews, commit messages, issues and releases for selected repos. No source code.', writes: 'Nothing.', plan: 'All plans', icon: 'github' },
];

const ROADMAP_INTEGRATIONS = ['Asana', 'Linear', 'Basecamp', 'GitLab', 'Bitbucket', 'Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Figma', 'Miro', 'Dropbox', 'Box', 'Webex', 'Microsoft Planner', 'Workday', 'BambooHR'];

const PLANS = [
  {
    id: 'team',
    name: 'Team',
    monthly: 299,
    annual: 2990,
    seats: 25,
    extraSeat: 12,
    tagline: 'For a department or a company up to 25 people.',
    cta: { label: 'Start free trial', href: '/signup/?plan=team' },
    features: [
      'Ask Bren in web, Slack and Teams',
      'Async Standups with manager clarifications',
      'Daily and weekly AI Digests',
      'Work Timeline, Wins & Losses Ledger',
      'Second Brain and Private Notes',
      'Org structure and permissions',
      'Up to 5 integrations',
      '12-month searchable history',
      'Email support, 1 business day',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    monthly: 899,
    annual: 8990,
    seats: 100,
    extraSeat: 9,
    highlight: true,
    tagline: 'For companies up to 100 people who want leadership briefs and risk detection.',
    cta: { label: 'Start free trial', href: '/signup/?plan=business' },
    features: [
      'Everything in Team',
      'Monday Morning Brief and Leadership Pulse',
      'OKR Tracking and Red-Flag Detection',
      'Meeting Intelligence and Think Out Loud',
      'Monthly, quarterly and yearly reports; Year in Review',
      'Unlimited integrations and history',
      'SAML SSO',
      'Adoption dashboard',
      'Priority support, 4-hour response, live chat',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthly: null,
    annual: null,
    seats: null,
    extraSeat: null,
    tagline: 'For 100+ people, multiple business units, or formal security and procurement needs.',
    cta: { label: 'Book a demo', href: '/book-demo/?plan=enterprise' },
    features: [
      'Everything in Business',
      'SCIM provisioning and audit logs',
      'US or EU data residency; custom retention',
      'Private-VPC deployment option',
      'API access and custom integrations',
      'Multiple organisations under one contract',
      'Dedicated CSM, onboarding workshop, QBRs',
      '99.9% uptime SLA with credits',
      'DPA, MSA, security questionnaire, invoicing',
    ],
  },
];

// Comparison table rows: [label, team, business, enterprise]
const COMPARISON = [
  ['Included seats', 'Up to 25', 'Up to 100', '100+ (no cap)'],
  ['Extra seats', '$12 / seat / mo', '$9 / seat / mo', 'Negotiated'],
  ['Free trial', '14 days, no card', '14 days, no card', 'Pilot by agreement'],
  ['Ask Bren (web, Slack, Teams)', '✓', '✓', '✓'],
  ['Async Standups', '✓', '✓', '✓'],
  ['Daily & weekly AI Digests', '✓', '✓', '✓'],
  ['Work Timeline', '✓', '✓', '✓'],
  ['Wins & Losses Ledger', '✓', '✓', '✓'],
  ['Second Brain', '✓', '✓', '✓'],
  ['Private Notes', '✓', '✓', '✓'],
  ['Org & Permissions', '✓', '✓', '✓'],
  ['Monday Morning Brief', '—', '✓', '✓'],
  ['Leadership Pulse', '—', '✓', '✓'],
  ['OKR Tracking', '—', '✓', '✓'],
  ['Red-Flag Detection', '—', '✓', '✓'],
  ['Meeting Intelligence', '—', '✓', '✓'],
  ['Think Out Loud', '—', '✓', '✓'],
  ['Monthly / quarterly / yearly reports', '—', '✓', '✓'],
  ['Year in Review', '—', '✓', '✓'],
  ['Integrations', 'Up to 5', 'Unlimited', 'Unlimited + custom'],
  ['Searchable history', '12 months', 'Unlimited', 'Unlimited, custom retention'],
  ['Adoption dashboard', '—', '✓', '✓'],
  ['Sign-in', 'Google / Microsoft', 'SAML SSO', 'SAML SSO + SCIM'],
  ['Audit logs', '—', '—', '✓'],
  ['Data residency', 'US', 'US', 'US or EU'],
  ['Private-VPC deployment', '—', '—', 'Optional'],
  ['API & custom integrations', '—', '—', '✓'],
  ['Support', 'Email, 1 business day', 'Priority, 4 business hours, live chat', '24/7 P1, dedicated CSM'],
  ['Uptime commitment', 'Target 99.9%', 'Target 99.9%', '99.9% SLA with credits'],
  ['Billing', 'Card, monthly or annual', 'Card or invoice (annual)', 'Invoice, annual or multi-year'],
];

const TESTIMONIALS = [
  { quote: 'We cancelled 11 recurring status meetings in the first month. Nobody asked for them back.', name: 'Priya Raman', title: 'VP Engineering, Northwind Robotics', result: '70% fewer status meetings' },
  { quote: 'New clinicians and engineers are useful in their first week. Second Brain is the onboarding doc that never goes stale.', name: 'Daniel Okafor', title: 'Chief of Staff, Larkspur Health', result: 'Onboarding: 5 weeks → 5 days' },
  { quote: 'Monday Morning Brief is the first thing I read. I know where to intervene before my first call.', name: 'Elena Marsh', title: 'COO, Orbital Freight', result: 'Leadership meeting load down 40%' },
  { quote: 'Ask Bren replaced the "quick question" Slack channel. Our seniors got their afternoons back.', name: 'Tom Halvard', title: 'Managing Partner, Halvard & Finch', result: '' },
  { quote: 'Security signed off in two weeks. SCIM, EU residency and the VPC option were all there.', name: 'Marcus Lee', title: 'CISO, Tessel Systems', result: '' },
  { quote: "We're 55 people and it still paid for itself in the first month.", name: 'Aisha Bello', title: 'CEO, Meridian Learning', result: '' },
];

const LOGOS = ['Northwind Robotics', 'Larkspur Health', 'Orbital Freight', 'Halvard & Finch', 'Tessel Systems', 'Meridian Learning'];

const NAV = [
  { label: 'Platform', href: '/platform/' },
  { label: 'Features', href: '/features/', dropdown: true },
  { label: 'Integrations', href: '/integrations/' },
  { label: 'Pricing', href: '/pricing/' },
];

const FOOTER = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '/platform/' },
      { label: 'Integrations', href: '/integrations/' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Start free trial', href: '/signup/' },
      { label: 'Book a demo', href: '/book-demo/' },
    ],
  },
  {
    title: 'Features',
    links: FEATURES.slice(0, 8).map((f) => ({ label: f.name, href: `/features/${f.slug}/` })),
  },
  {
    title: 'More features',
    links: FEATURES.slice(8).map((f) => ({ label: f.name, href: `/features/${f.slug}/` })).concat([{ label: 'All features', href: '/features/' }]),
  },
  {
    title: 'Company',
    links: [
      { label: 'Security & trust', href: '/platform/#security' },
      { label: 'Contact: help@getbren.com', href: 'mailto:help@getbren.com' },
      { label: 'Privacy policy', href: '/privacy/' },
      { label: 'Terms & conditions', href: '/terms/' },
    ],
  },
];

module.exports = { SITE, FEATURES, INTEGRATIONS, ROADMAP_INTEGRATIONS, PLANS, COMPARISON, TESTIMONIALS, LOGOS, NAV, FOOTER };
