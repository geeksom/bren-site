# Bren — Product Overview

> Canonical product description for Bren (getbren.com). Bren Labs, Inc. is a fictional company created to test an AI website assistant. This document is the single source of truth for what the product is and does. Site copy and the on-site AI assistant must stay consistent with it. When something is not covered here, the assistant should say it will confirm with the team rather than invent a capability.

---

## 1. One-liner and positioning summary

**Bren is the AI chief of staff for every person in your company.** It connects to the tools where work already happens, builds a living, permission-aware memory of the organisation, and gives every employee, manager and executive a personal assistant that (a) keeps them posted automatically and (b) answers any question about work on demand.

- Tagline: **Everyone gets a PA now.**
- Secondary line: **Stop being busy. Be productive.**
- Category: AI work assistant / operational intelligence for teams (we avoid "project management tool" — Bren sits on top of those).

## 2. What Bren replaces

| Today | With Bren |
|---|---|
| Daily stand-ups (15–30 min × everyone × every day) | ~100-word async update per person, AI digest for the manager |
| Weekly status meetings and "sync" calls | Monday Morning Brief + weekly digests per persona |
| "What's the latest on X?" pings in Slack/Teams | Ask Bren — cited answers in seconds |
| Onboarding decks that go stale in a month | Second Brain — chronological, always-current company memory |
| Manager/leadership catch-ups to "get a feel" for momentum | Leadership Pulse, red-flag alerts, quarterly snapshots |
| Decisions stalled when a manager is on leave | Delegated visibility: the stand-in sees the same timeline and context |
| Context lost when someone leaves | Their updates, decisions and threads remain in the timeline, attributed and searchable |

## 3. How it works (pipeline)

1. **Data streams** — Bren ingests activity from connected tools via OAuth (see §4).
2. **Company graph** — activity is organised around: Organisation → Teams (hierarchical) → People (managers, reportees, mentors), plus Projects → Tasks/Stories → Sub-tasks, and Objectives → Key Results. Tasks and projects can have multiple dependencies.
3. **Insights** — generated per persona: on demand (Ask Bren), project/task based, OKR based, meeting/chat based, and time-series (Monday/weekly, monthly, quarterly, half-yearly, yearly).
4. **Alerts & reports** — pushed proactively to the right person, at the right cadence, in the channel they chose (web app, Slack, Teams, email).

Permissions are mirrored from source tools *and* from Bren's own visibility model (§6). Nobody sees something in Bren they could not see in the source system.

## 4. Data streams (integrations)

| Category | Tools | Direction | What is read | What is written |
|---|---|---|---|---|
| Chat | Slack, Microsoft Teams, Gmail (Google Workspace), Outlook | 2-way | Channel messages Bren is invited to, DMs with Bren, threads mentioning tracked projects; email subjects/bodies in labelled folders only | Digests, briefs, reminders, answers to Ask Bren |
| Meetings | Zoom, Google Meet, Slack Huddles, Google Calendar, Outlook Calendar | Incoming | Calendar metadata (title, attendees, time), recordings/transcripts where the meeting tool provides them | Nothing |
| Documentation | Google Workspace (Docs/Sheets/Slides/Drive), Microsoft 365 (Word/Excel/PowerPoint/OneDrive/SharePoint), Notion, Confluence, Loom | Incoming (2-way on roadmap) | Documents shared with connected users, page edits, Loom video transcripts | Nothing today |
| Project management | Jira, Notion, Trello, Airtable, Monday.com, ClickUp | 2-way | Projects, tasks/stories, status changes, comments, assignees, due dates, dependencies | Summaries and context comments back to the task (opt-in per workspace) |
| Code | GitHub | Incoming | Pull requests, commits, reviews, issues, releases | Nothing |
| Manual reporting | In-app forms | Incoming | KR metrics that live nowhere else (e.g. "pipeline created", "NPS") | n/a |

Details per integration (auth, scopes, plan availability) are in `08-integrations.md`.

## 5. Features — v1 (shipping today)

### 5.1 Ask Bren (hero feature)
A conversational interface to everything Bren knows. Available in the Bren web app, Slack (`/bren` or DM @Bren) and Microsoft Teams (Bren app). Use it to:
- **Record an update** — "Shipped the billing migration, blocked on legal review for the DPA." Bren files it against the right task/project and notifies the manager if a blocker is detected.
- **Ask about a project, task or OKR** — "What changed on Project Atlas this week?", "Are we on track for the Q3 activation KR?", "Who owns the dependency on data-platform?"
- **Search company docs, decisions and meeting outcomes** — "What did we decide on pricing for annual plans?"
- **Check people** — availability (from calendars/out-of-office), workload, recent contributions (subject to permissions and org settings; see §6.4).
- **Take notes** — private by default.
- **Discuss ideas with company context** — see Think Out Loud.

Every answer cites its sources (the message, doc, ticket or meeting it came from) with links. If Bren cannot find an answer it says so and offers to ask the relevant owner.

Edge cases:
- Questions about people outside the asker's visibility scope return "I can't share that" — not a partial answer.
- Ask Bren does not execute changes in third-party tools except posting summaries where 2-way is enabled and the user explicitly confirms ("Post this to Jira?").
- Rate limits: fair use; a soft cap of 500 questions/user/day on Team, 2,000 on Business, unlimited on Enterprise.

### 5.2 Async Standups
- Import tasks from Jira, Notion, Trello, Airtable, Monday or ClickUp (or create lightweight tasks in Bren).
- Each person posts a ~100-word daily update against their tasks. Reminder time is per user (default 09:30 local). Weekends and public holidays are skipped by default (configurable).
- Voice transcription for updates is **on the roadmap** (not available today).
- Managers can **request clarification** on any update; the requester and requestee see the thread; it appears in the timeline.
- Managers mark task/project status as **win / ongoing / fail / postponed**.
- Organisations control which inputs (e.g. private notes) feed AI summaries (default: private notes excluded).
- Missed updates: Bren nudges once (configurable), never auto-generates an update on someone's behalf.

### 5.3 AI Digests
- **Daily digest** for project managers / team leads.
- **Weekly digest** for managers and individual contributors.
- **Weekly leadership digest** for senior leadership (org-wide momentum, risks, decisions needed).
- **Monthly recap** for everyone.
Digests are persona-aware: an IC sees their team and dependencies; a VP sees momentum, risks and decisions across their org. Each item links to source.
Delivery channels: web app (always) + Slack, Teams or email (user choice). Digests can be paused (e.g. during leave) and resume with a catch-up edition.

### 5.4 Monday Morning Brief
A weekly kickoff delivered before 09:00 local time on the first working day of the week (configurable): last week's recap, key notes from ongoing projects and objectives, key considerations for planning the week, and pending tasks or deliverable requests to block time for. Available on Business and Enterprise.

### 5.5 Objectives & Key Results
- Objectives → Key Results → linked projects/tasks.
- KR metrics can come from integrations (e.g. GitHub release count, Jira throughput) or manual reporting.
- Bren evaluates whether the organisation is moving in the right direction, flags potential red flags and areas to intervene, and explains its reasoning with sources.
- Advanced automated KR metric collection from analytics/finance tools is **on the roadmap**.
- Available on Business and Enterprise.

### 5.6 Hierarchical Work Timeline
A two-column timeline for any person, team, project or objective: chronological updates and status changes on the left; key successes and failures on the right. Includes meeting snapshots and task comments. Any segment can be expanded ("elaborate this") into the underlying messages, meetings and tickets. Available on all plans.

### 5.7 Red-Flag Detection
Reads across every daily update, ticket and thread to surface challenges, blockers, red flags, areas needing attention, wins and losses, and proposes specific interventions ("Two of three owners of Project Atlas are on leave next week; reassign the DPA review"). Alerts go to the responsible manager and (for org-level flags) leadership. Available on Business and Enterprise.

### 5.8 Wins & Losses Ledger
Manager-marked wins, ongoing items, fails and postponements roll up into team and org ledgers. Light gamification (badges, streaks) based on activity, updates posted and manager-marked wins. Gamification can be disabled per workspace. Available on all plans.

### 5.9 Second Brain
A context store for onboarding and for reading the chronological sequence of events on any topic, project or team. Intended for new hires, people returning from leave, and people inheriting a project. Respects visibility rules — a new hire sees what their role and team memberships allow. Available on all plans.

### 5.10 Think Out Loud
Share half-formed ideas or questions; Bren asks clarifying questions using company context to refine them and produces a shareable brief (doc or Slack post) to discuss with the team. Drafts are private until shared. Available on Business and Enterprise.

### 5.11 Meeting Intelligence
Meeting snapshots from Zoom, Google Meet and Slack Huddles appear in timelines and digests. Bren suggests topics for town halls and weekly/monthly meets based on what people are actually reporting. Bren does **not** join meetings as a bot; it uses recordings/transcripts and calendar metadata provided by the meeting tool. If recording is off, Bren only has calendar metadata. Available on Business and Enterprise.

### 5.12 Private Notes & Reviews
ICs and managers keep notes visible only to them. Employee review notes live here. Organisations set whether private notes are considered by AI summaries (default: **not** considered). Admins cannot read private notes; on account deletion they are deleted.

### 5.13 Org Structure & Permissions
See §6.

### 5.14 Leadership Pulse
For C-level and senior leadership: business momentum at a glance, quarterly / half-yearly / yearly snapshots, and fires surfaced before they spread. Available on Business and Enterprise.

### 5.15 Year in Review
A standalone annual report per team or organisation: OKR-based progress, team contributions, major wins and losses, shareable as a PDF/Doc. Available on Business and Enterprise.

## 6. Org structure & permissions model

### 6.1 Entities
- **Organisation** — the workspace. One org per Bren account (Enterprise can run multiple orgs under one contract).
- **Teams** — every team has exactly one parent (except the root) and any number of children. Every team has at least one person; one is its lead/manager.
- **People** — have managers (reporting line) and reportees; optional mentor/mentee links (senior but not reporting). Levels are configurable (IC / Manager / Director / VP / C-level, or Level 1–N).
- **Projects** — status, results, dependencies; can be owned by multiple people; contain tasks/stories.
- **Tasks/Stories** — status, results, dependencies; can have sub-tasks.
- **Objectives & Key Results** — with metrics.

### 6.2 Visibility modes (projects, tasks, OKRs)
- **Participatory (default)** — visible to owners, participants and their reporting managers (for OKRs: owners/participants of tasks feeding into the KR, up to one level down, plus their managers).
- **Public** — visible to everyone in the organisation.
- **Selective** — Participatory plus specific people or teams added.
Marking something Public disables the Selective picker. A project marked Private in the source tool stays hidden regardless of Bren settings.

### 6.3 Default team visibility
Every team sees its own owned/participatory entities unless a project is specifically marked private.

### 6.4 Insights about people
Managers get insights on direct and indirect reportees. Peers do not get performance insights about each other; they can see availability and shared-project contributions only. Org admins can tighten (never loosen) these defaults.

### 6.5 Permission mirroring from source tools
If a Slack channel is private, only its members see content derived from it. If a Jira project is restricted, Bren respects the restriction. Bren reconciles permissions on every sync (at most 15 minutes lag); a removal in the source propagates on the next sync.

## 7. Roadmap (not shipping — say "on the roadmap", never promise dates)
- Voice-transcribed daily updates.
- Chrome extension bringing Ask Bren into Jira, Google Docs and other third-party tools.
- 2-way documentation sync (writing summaries back to Notion/Confluence).
- Automated KR metric collection from analytics and finance tools.
- Additional integrations: Asana, Linear, Basecamp, HubSpot, Salesforce, GitLab, Bitbucket.
- v2.0: tracking AI workers/agents — what they worked on and what results that work drives.

## 8. Known limits (be honest about these)
- Bren does not replace your project-management tool; it reads from and writes summaries to it.
- Bren does not join meetings as a bot.
- Accuracy depends on people posting updates. Bren reminds; it never invents updates.
- English is fully supported; Spanish, French, German and Portuguese are in beta (digests and Ask Bren work, quality may vary).
- No native mobile app yet; the web app is responsive, and Slack/Teams mobile apps give full Ask Bren access.
- No public API on Team/Business; Enterprise gets an API and custom integrations.
- Historical backfill on connection: 12 months by default (Team), unlimited on Business/Enterprise, subject to what the source tool exposes.

## 9. Frequently confused points
- "Is Bren a note-taker like Otter/Fireflies?" — No. Bren does not record meetings; it consumes transcripts your meeting tool already produces and combines them with tickets, chat and docs.
- "Is Bren a ChatGPT for our company docs?" — Partly. Ask Bren covers docs, but the core is the company graph (people, teams, projects, OKRs, time) and the proactive digests/alerts built on it.
- "Does Bren watch employees?" — Bren summarises work updates people choose to post and activity in connected work tools. It does not track keystrokes, screens, location or app usage, and private notes are never exposed.
