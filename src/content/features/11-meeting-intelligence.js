const c = require('../../components');

module.exports = c.featurePage({
  slug: 'meeting-intelligence',
  metaTitle: 'meeting outcomes in your timeline, not in a silo',
  description: 'Meeting Intelligence: snapshots from Zoom, Google Meet and Slack Huddles — decisions, actions, owners — placed into project timelines and digests, plus town-hall topic suggestions from what people actually report. Bren never joins calls. Business and Enterprise.',
  title: 'Meetings that leave a trace where the work is.',
  sub: 'Bren turns the transcripts your meeting tools already produce into snapshots — decisions, actions, owners — and files them into the right project timelines, digests and OKRs. It never joins a call.',
  mock: c.mockMeeting(),
  problem: {
    title: 'Note-takers capture the meeting. Then the notes sit in a folder.',
    body: `<p>Transcript tools are good at one thing: the meeting. The decision made at minute 34 never reaches the Jira ticket, the person who was not invited, or the leader who needed it on Monday. And the meeting that should have happened — about the thing fourteen people mentioned this week — never gets scheduled.</p>`,
  },
  how: {
    title: 'One of six streams, not a silo.',
    blocks: [
      { icon: 'mic', title: 'Snapshots from your existing transcripts', body: 'Zoom cloud recordings, Google Meet transcripts, Slack huddle notes. Bren extracts decisions, actions, owners and open questions. If recording is off, Bren uses calendar metadata only.' },
      { icon: 'timeline', title: 'Filed where it matters', body: 'A snapshot attaches to the projects and objectives it concerns, appears in the owners\' digests, and becomes searchable through Ask Bren — with permissions mirrored from the meeting\'s attendee list.' },
      { icon: 'calendar', title: 'Availability and load', body: 'Calendar metadata feeds availability answers ("is Sam free Thursday?"), leave detection, and meeting-load stats in Leadership Pulse — 41 meetings cancelled this quarter.' },
      { icon: 'users', title: 'Town-hall topics, suggested', body: 'Bren notices what people are actually reporting — nine updates mention the support backlog — and suggests agenda items for town halls and weekly or monthly meets.' },
    ],
  },
  who: {
    title: 'Who stops re-reading transcripts',
    cards: [
      { title: 'Project owners', body: 'Decisions from the weekly land in the timeline and on the tickets they affect.' },
      { title: 'People who were not in the room', body: 'The outcome reaches you in your digest, not in a forwarded recording.' },
      { title: 'Leaders', body: 'Meeting load by team, and what your organisation wants to talk about next.' },
    ],
  },
  faq: [
    { q: 'Does Bren join or record meetings?', a: '<p>No. Bren does not add a bot to calls. It reads recordings and transcripts your meeting tool already produced, if you connect it. Zoom requires cloud recording; Google Meet requires transcription (Workspace Business Standard or higher); Slack huddle notes require Slack Business+.</p>' },
    { q: 'Who can see a meeting snapshot?', a: '<p>Attendees, plus whoever the linked project\'s visibility allows (Participatory by default). Private meetings stay private.</p>' },
    { q: 'Which meeting tools?', a: '<p>Zoom, Google Meet, Slack Huddles; Google Calendar and Outlook Calendar for metadata. Webex and Microsoft Teams meeting transcripts are on the roadmap.</p>' },
    { q: 'Which plans include Meeting Intelligence?', a: '<p>Business and Enterprise. Calendar-based availability is available on all plans.</p>' },
  ],
  related: ['work-timeline', 'digests', 'leadership-pulse'],
  cta: { title: 'Let the decision reach the ticket.', sub: 'Connect Zoom or Meet during the 14-day trial. Full Business features, no card.' },
});
