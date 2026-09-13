# Bren — Integrations

> All 19 shipped integrations, what they read/write, how they authenticate, and plan availability. Anything not listed is "on the roadmap" or not planned; never claim it works. Team plan: up to 5 integrations (Slack or Teams counts as one). Business/Enterprise: unlimited.

## 1. Chat (2-way)

| Integration | Reads | Writes | Auth / scopes | Notes |
|---|---|---|---|---|
| **Slack** | Messages and threads in channels Bren is invited to; DMs with @Bren; user groups; presence/OOO status | Digests, briefs, reminders, red-flag alerts, Ask Bren replies; optional summaries to a channel | Slack app installed by a workspace admin; scopes: channels:history (invited only), groups:history (invited only), im:history, chat:write, users:read, usergroups:read, commands | `/bren` slash command; works on Slack free plan (history limited by Slack); Enterprise Grid supported |
| **Microsoft Teams** | Messages in channels the Bren app is added to; chats with Bren; presence | Same as Slack | Teams app; tenant admin consent (Graph: ChannelMessage.Read.All scoped via resource-specific consent, Chat.ReadWrite, User.Read.All, Presence.Read.All) | Personal app + channel app |
| **Gmail (Google Workspace)** | Emails in labels you choose (e.g. "Bren"), or threads forwarded to your Bren address | Optional: send digests by email; reply drafts (never sent without you) | Per-user OAuth, gmail.readonly + gmail.compose on chosen labels | Off by default; only labelled mail |
| **Outlook (Microsoft 365)** | Emails in folders you choose | Same as Gmail | Per-user OAuth (Mail.Read on selected folders, Mail.Send optional) | Off by default |

## 2. Meetings (incoming)

| Integration | Reads | Auth | Notes |
|---|---|---|---|
| **Zoom** | Cloud recordings/transcripts of meetings you host or are invited to; meeting metadata | Zoom app, per-user OAuth (recording:read, meeting:read) | Requires cloud recording/transcription enabled in Zoom; Bren does not join calls |
| **Google Meet** | Meet transcripts/recordings saved to Drive; metadata | Via Google Workspace OAuth (drive.readonly on the Meet Recordings folder) | Requires Meet transcription (Workspace Business Standard+) |
| **Slack Huddles** | Huddle transcripts/notes where Slack generates them | Via the Slack app | Slack Business+ generates huddle notes |
| **Google Calendar** | Events, attendees, OOO; used for availability, meeting context, leave detection | Google OAuth (calendar.readonly) | Per user or domain-wide delegation (admin) |
| **Outlook Calendar** | Same as Google Calendar | Microsoft Graph (Calendars.Read) | Per user or admin consent |

## 3. Documentation (incoming; 2-way on roadmap)

| Integration | Reads | Auth | Notes |
|---|---|---|---|
| **Google Workspace (Docs, Sheets, Slides, Drive)** | Document text and metadata for files shared with connected users; selected shared drives | Google OAuth (drive.readonly), optionally domain-wide delegation | Admins can restrict to specific shared drives/folders |
| **Microsoft 365 (Word, Excel, PowerPoint, OneDrive, SharePoint)** | Same as Google | Microsoft Graph (Files.Read.All / Sites.Read.All with site scoping) | SharePoint site-level scoping supported |
| **Notion** | Pages/databases in shared workspaces you choose; can also be a project tool (see §4) | Notion OAuth; you pick pages | One Notion connection serves both docs and PM |
| **Confluence** | Spaces you choose (Cloud) | Atlassian OAuth (read:confluence-content.all scoped to spaces) | Confluence Data Center: Enterprise only, via custom integration |
| **Loom** | Video transcripts and titles for videos in your workspace | Loom API key (workspace admin) | Transcripts only |

## 4. Project management (2-way)

| Integration | Reads | Writes (opt-in) | Auth | Notes |
|---|---|---|---|---|
| **Jira (Cloud)** | Projects, issues/stories, sub-tasks, status transitions, assignees, comments, sprints, dependencies (issue links) | Summary/context comments; status (win/fail/postponed) as labels | Atlassian OAuth 2.0 (read:jira-work, write:jira-work) | Jira Data Center: Enterprise only |
| **Notion** (databases) | Task databases you map (status, assignee, due date, relations) | Summary property/comment | Notion OAuth | Map your own status values |
| **Trello** | Boards, lists, cards, members, due dates, checklists | Card comments | Trello OAuth | |
| **Airtable** | Bases/tables you map as tasks/projects | Comment/field write-back | Airtable OAuth | |
| **Monday.com** | Boards, items, statuses, owners, timelines, dependencies | Updates on items | Monday OAuth | |
| **ClickUp** | Spaces/lists/tasks, statuses, assignees, dependencies | Task comments | ClickUp OAuth | |

## 5. Code (incoming)

| Integration | Reads | Auth | Notes |
|---|---|---|---|
| **GitHub** | PRs, reviews, commits (metadata and messages), issues, releases for selected repos/orgs | GitHub App installed on the org; repo selection | No source code content is stored — metadata and PR descriptions only; GitHub Enterprise Server: Enterprise plan |

## 6. Manual reporting

- In-app forms for KR metrics that live nowhere else; CSV upload; Google Sheets sync for metrics (via the Google Workspace connection).

## 7. Counting integrations on the Team plan (limit 5)

Each of the 19 names above counts as one, except:
- Google Workspace (Docs/Drive) + Google Calendar + Gmail + Google Meet = separate integrations (4), because scopes differ. Most Team customers connect Slack/Teams, one project tool, Google Calendar or Outlook Calendar, one docs source, and GitHub = 5.
- Notion counts once whether used for docs, tasks or both.
- Switching an integration off frees the slot immediately.

## 8. Roadmap (say "on the roadmap"; no dates)

Asana, Linear, Basecamp, Shortcut, GitLab, Bitbucket, Salesforce, HubSpot, Zendesk, Intercom, Figma, Miro, Dropbox, Box, Confluence Data Center (self-serve), Jira Data Center (self-serve), Webex, Microsoft Planner, Workday/BambooHR (org sync), Okta directory sync outside SCIM.

Custom integrations: available on Enterprise (built by Bren, scoped in the contract, typically 4–8 weeks).

## 9. Frequently asked

- **"Does Bren need admin access?"** Slack/Teams/Google/Microsoft apps need an admin to install; scopes are least-privilege and listed above. Personal calendar/email connections are per user.
- **"Can we limit what Bren sees?"** Yes: channels, projects, drives, spaces, repos — at connection time and later.
- **"Does it read private DMs?"** Only DMs with Bren itself. Never DMs between people.
- **"Does it read code?"** No source code; PR titles/descriptions, reviews, commit messages and metadata only.
- **"What if our tool isn't listed?"** It's on the roadmap or available as an Enterprise custom integration; we'll record your interest.
- **"How fresh is the data?"** Event-driven where the tool supports webhooks (Slack, Teams, Jira, GitHub, Notion, Monday, ClickUp — seconds); polling every 15 minutes otherwise.
- **"Can we use both Slack and Teams?"** Yes; each is one integration.
- **"Zapier/Make?"** Not today; Enterprise API on the roadmap for self-serve, available in Enterprise contracts now.
