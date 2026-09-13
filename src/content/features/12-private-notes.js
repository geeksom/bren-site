const c = require('../../components');

module.exports = c.featurePage({
  slug: 'private-notes',
  metaTitle: 'notes only you can read — even admins cannot',
  description: 'Private Notes in Bren: personal and review notes encrypted per workspace, unreadable by admins and Bren staff, excluded from AI summaries by default. Organisations control whether notes ever feed summaries, and the setting is visible to everyone. All plans.',
  title: 'Notes that are yours. Actually yours.',
  sub: 'ICs and managers keep notes visible only to them — 1:1 prep, review observations, reminders to self. Encrypted per workspace, unreadable by admins and Bren staff, excluded from AI summaries by default.',
  mock: c.mockNotes(),
  problem: {
    title: 'Every "AI for work" tool asks you to trust it with your private thoughts.',
    body: `<p>Managers keep notes on 1:1s. ICs keep notes on what they really think. If those notes live in a tool that summarises everything, people stop writing them — or write something safer and less useful. Trust is the feature.</p>`,
  },
  how: {
    title: 'Private by construction, not by policy.',
    blocks: [
      { icon: 'lock', title: 'Encrypted per workspace', body: 'Private notes are envelope-encrypted with a per-workspace key on top of AES-256 at rest. Workspace admins and Bren staff cannot read them. Ever.' },
      { icon: 'note', title: 'Take them anywhere', body: 'From Ask Bren in Slack or Teams ("note to self: …"), from a timeline, or in the web app. Attach a note to a person, project or 1:1 for your own reference.' },
      { icon: 'radar', title: 'Excluded from AI by default', body: 'Notes do not feed digests, timelines, red flags or Ask Bren answers for anyone else. An organisation can choose to let people opt individual notes into summaries; that setting is visible to everyone.' },
      { icon: 'users', title: 'Review notes, kept where they belong', body: 'Employee review observations live in the manager\'s private notes, attached to the person, exportable by the manager only. Bren does not produce performance scores.' },
    ],
  },
  who: {
    title: 'Who writes more because of it',
    cards: [
      { title: 'Managers', body: '1:1 prep and review notes in the same place as the person\'s timeline — without the notes ever leaking into it.' },
      { title: 'Individual contributors', body: 'Notes to self on what to raise, what to stop doing, what you want next.' },
      { title: 'HR and works councils', body: 'A clear, enforceable line between work records and private thoughts.' },
    ],
  },
  faq: [
    { q: 'Can a workspace admin read my private notes?', a: '<p>No. They are encrypted with a per-workspace key that admins do not hold, and Bren staff have no access. Deleting your account deletes your notes.</p>' },
    { q: 'Can the organisation force notes into AI summaries?', a: '<p>No. The org setting only allows individuals to opt specific notes in. The default is off, and the setting is visible to everyone in the workspace.</p>' },
    { q: 'What happens to my notes if I leave?', a: '<p>They are deleted with your account. They are never transferred to your manager or successor.</p>' },
    { q: 'Which plans include Private Notes?', a: '<p>All plans.</p>' },
  ],
  related: ['org-and-permissions', 'ask-bren', 'async-standups'],
  cta: { title: 'The one place at work that is only yours.', sub: '14-day free trial, no card. Private notes are private from the first minute.' },
});
