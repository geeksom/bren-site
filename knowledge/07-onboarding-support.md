# Bren — Onboarding, Rollout and Support

> Canonical answers about how a company gets started with Bren, how long it takes, and what support looks like by plan.

## 1. Getting started (self-serve, Team and Business)

1. **Sign up** at getbren.com/signup — name, work email, company, team size, project tool. No card. Workspace link arrives by email within minutes.
2. **Connect chat** — install the Bren app in Slack (workspace admin) or Microsoft Teams (tenant admin consent). Bren only reads channels it's invited to.
3. **Connect one project tool** — Jira, Notion, Trello, Airtable, Monday or ClickUp. Choose projects/boards to sync.
4. **Import org structure** — from Slack/Teams user groups, Google/Microsoft directory, or a CSV (name, email, manager, team). Bren proposes a team tree; you confirm.
5. **Invite people** — Bren posts a short intro in a channel of your choice; everyone gets a 2-minute walkthrough.
6. **First digest within 24 hours.** Async standup reminders start the next working day (default 09:30 local, per user).

Typical time to first value: **1 day**. Typical full rollout for a Team plan: **1 week**.

## 2. Rollout for Business (100 people, several teams)

- Week 1: connect Slack/Teams + project tool + calendars/meeting tool; import org; pilot with 1–2 teams; managers review daily digests.
- Week 2: add docs (Google/Microsoft/Notion/Confluence) and GitHub; enable OKRs; turn on Monday Morning Brief for leaders.
- Week 3–4: company-wide invite; red-flag routing to managers; SSO enforcement; adoption dashboard review.
Typical: **2–4 weeks**. Guided by email/live-chat support and a rollout playbook (PDF and Notion template provided).

## 3. Enterprise implementation

- Kick-off with a dedicated CSM and a solutions engineer; security review in parallel (SOC 2 report, DPA, questionnaire).
- Identity: SAML SSO + SCIM; residency and retention set; optional VPC provisioning (adds ~2 weeks).
- Phased rollout by business unit; change-management kit (exec announcement template, manager guide, IC one-pager, HR/works-council brief).
- Onboarding workshop (2 hours, remote) for managers; office hours for the first month.
- Quarterly business reviews; success metrics tracked (meetings cancelled, update rate, brief read rate, onboarding time).
Typical: **4–8 weeks** including security review; 30-day pilot on one department is common.

## 4. Adoption mechanics (why it sticks)

- Updates are ~100 words, posted from Slack/Teams where people already are, and replace the stand-up rather than adding to it.
- Updates are visibly consumed: they appear in the manager's daily digest the same day, in the timeline, and in red flags.
- Missed updates get one nudge (configurable), never fabrication.
- Adoption dashboard (Business+) shows update rate per team, brief open rate, Ask Bren usage.
- Recommended practice: cancel the daily stand-up on day 3 of the pilot and keep a weekly 20-minute "exceptions only" meeting.

## 5. Training and resources

- In-app 2-minute walkthrough; Help Center (help.getbren.com — fictional); rollout playbook; manager guide; IC one-pager; HR brief.
- Live onboarding webinar every Tuesday (all plans).
- Enterprise: onboarding workshop + office hours + CSM.

## 6. Support by plan

| | Team | Business | Enterprise |
|---|---|---|---|
| Channels | Email (help@getbren.com), Help Center | Email, live chat via the assistant on getbren.com, Help Center | All of Business + dedicated CSM, Slack Connect channel, phone escalation |
| First response | 1 business day | 4 business hours | 1 hour (P1), 4 hours (P2), same business day (P3) |
| Hours | Mon–Fri 08:00–18:00 US Eastern and UK | Mon–Fri, US and UK hours; P1 24/7 | 24/7 for P1 |
| Status page | status.getbren.com | status.getbren.com | + proactive incident comms |
| Onboarding | Self-serve + webinar | Self-serve + playbook + live chat | CSM, workshop, office hours, QBRs |

Severity definitions: P1 = service down or data exposure; P2 = major feature unusable for many users; P3 = degraded/other.

## 7. Migration and data import

- Historical backfill on connect: 12 months (Team), unlimited (Business/Enterprise), subject to what the source exposes (e.g. Slack free-plan history limits).
- Org structure import: CSV, Google/Microsoft directory, Slack/Teams groups, or Okta/Entra via SCIM (Enterprise).
- OKRs import: CSV template; Notion/Google Sheets sync.
- Switching from Geekbot/Standuply/DailyBot: no import needed; keep the habit, point people to Bren's reminder.

## 8. Edge cases

- **Multiple Slack workspaces / Teams tenants:** Business supports one chat workspace per org; Enterprise supports several.
- **Slack Enterprise Grid:** supported (Enterprise plan recommended).
- **Both Slack and Teams:** possible; each counts as one integration.
- **Part of the company only:** yes — Bren can be scoped to selected channels/projects and teams; others aren't imported and don't count as seats.
- **Contractors/agencies:** invite as seats or keep them out; their public-channel messages may still appear in timelines if they post in connected channels.
- **Time zones:** all reminders/briefs are per-user local time; Monday Morning Brief follows each leader's first working day.
- **Public holidays:** per-country calendars applied to reminders.
- **Leave:** mark leave in Bren or via calendar OOO; reminders pause and a catch-up digest is generated on return.
- **Someone leaves the company:** deactivate; seat freed; timeline contributions stay attributed (or anonymised on request).
- **Reorgs:** edit the team tree; history follows the people; digests adjust from the next cycle.
