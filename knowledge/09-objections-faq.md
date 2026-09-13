# Bren — Objections and FAQ (canonical answers)

> 60+ hard prospect questions with the answer to give. Written for the on-site assistant and for humans. Agree first, then reframe, then give the fact, then the next step. Facts come from the numbered docs; if a question isn't covered, say you'll confirm and offer to take an email — never invent.

## A. What is it / category

**A1. What is Bren, in one sentence?**
Bren is the AI chief of staff for every person in your company: it connects to your chat, meetings, docs and project tools, keeps everyone posted at their level, and answers any question about work in seconds, with sources.

**A2. Is Bren a chatbot?**
No. Ask Bren is a chat interface, but the product is the company graph underneath (teams, people, projects, OKRs, time) and the proactive briefs built on it — daily digests, Monday Morning Brief, red flags, Leadership Pulse.

**A3. Is Bren a project-management tool? Does it replace Jira/Notion?**
No. Bren sits on top of Jira, Notion, Trello, Airtable, Monday and ClickUp. It reads tasks and status and writes summaries back (opt-in). Keep your tool.

**A4. Is Bren a meeting note-taker like Otter or Fireflies?**
No. Bren doesn't join meetings. It uses the transcripts/recordings your meeting tool already produces (Zoom, Google Meet, Slack Huddles) as one of six streams alongside chat, docs, tickets, code and calendars.

**A5. How is it different from Notion AI / Microsoft Copilot / Glean / Gemini?**
Those are great at searching and summarising documents. Bren also knows who owns what, what's slipping, who's on leave, and how work ties to your OKRs — and it tells you proactively rather than waiting to be asked.

**A6. Is this employee monitoring?**
No. Bren summarises the ~100-word updates people choose to post and activity in shared work tools. No keystrokes, screens, location or app tracking. Private notes are invisible even to admins. Peers never get performance insights about each other.

**A7. Who is Bren for?**
Knowledge-work companies of roughly 50–2,000 people on Slack or Teams and a project tool — though it works from 15 people up. Users are everyone; buyers are usually a Head of Ops/Chief of Staff, a VP, or the COO/CEO.

**A8. Is Bren a real product?** *(If asked directly.)*
Bren Labs, Inc. is fictional; this site is a demonstration environment. *(The assistant should only say this if explicitly asked whether the company/product is real; otherwise treat the facts as true.)*

## B. Features and how it works

**B1. What does "keeps you posted" actually mean?**
Daily digest for team leads, weekly digests for managers and ICs, weekly leadership digest, monthly recap for everyone, Monday Morning Brief and Leadership Pulse for leaders (Business+), plus red-flag alerts when something needs attention. Delivered in the web app and Slack/Teams/email.

**B2. What can I ask Bren?**
Project/task/OKR status and what changed; who owns something; whether someone is available; where a decision was made; search across docs, tickets, chat and meetings; record an update; take a note. Every answer cites sources.

**B3. Does everyone have to post updates every day?**
The default is one ~100-word update per working day, replacing the stand-up. Orgs can set the cadence (daily, 3×/week, weekly). Missed updates get one nudge; Bren never writes an update for someone.

**B4. Can Bren write the update for me from my Jira/GitHub activity?**
It drafts a suggested update from your task changes, PRs and calendar; you edit and confirm. It never posts on your behalf without confirmation.

**B5. Will it get things wrong or hallucinate?**
Every line in a digest or answer is grounded in a retrieved source and linked to it. If there is no source, Bren says "I couldn't find that". Missing updates are reported as missing. You can expand any segment to the underlying evidence.

**B6. What is the Hierarchical Work Timeline?**
A two-column timeline per person, team, project or objective: chronological updates and status changes on the left, key wins and failures on the right. "Elaborate this" expands any segment to the messages, meetings and tickets behind it. All plans.

**B7. How do OKRs work?**
Objectives → Key Results → linked projects/tasks. KR metrics come from integrations or manual reporting. Bren evaluates direction of travel and flags risks. Business and Enterprise.

**B8. What are red flags?**
Bren reads across updates, tickets and threads to surface blockers, slipping work, overloaded or absent owners, and areas needing attention, with a suggested intervention. Routed to the responsible manager; org-level flags to leadership. Business and Enterprise.

**B9. What is the Monday Morning Brief?**
A persona-specific weekly kickoff before 09:00 local on your first working day: last week's recap, key notes from ongoing projects/objectives, planning considerations, and pending requests to block time for. Business and Enterprise.

**B10. What is Second Brain?**
The company's chronological memory. New hires, returners and people inheriting a project read the sequence of what happened on a team or topic, subject to their permissions. All plans.

**B11. What is Think Out Loud?**
Share a half-formed idea; Bren asks clarifying questions using company context and produces a shareable brief. Drafts are private until you share. Business and Enterprise.

**B12. Can managers see my private notes?**
No. Private notes are encrypted per workspace and unreadable by admins and Bren staff. They're excluded from AI summaries by default; an org can choose to include them, and that setting is visible to everyone.

**B13. Does Bren work in Slack and Teams, or do I need the web app?**
Ask Bren, updates, digests and alerts all work inside Slack and Teams. The web app adds timelines, OKRs, org settings and admin.

**B14. Is there a mobile app?**
Not a native one yet. The web app is responsive and the Slack/Teams mobile apps give full Ask Bren access.

**B15. Which languages?**
English fully; Spanish, French, German and Portuguese in beta.

**B16. Can Bren post to a channel automatically?**
Yes — digests and weekly summaries can post to chosen channels. Anything written back to a project tool is opt-in per workspace.

**B17. Does it support OKR frameworks like SMART or V2MOM?**
Bren's structure is Objectives → Key Results → tasks; you can name and describe them any way you like. Templates for OKR, V2MOM and Rocks are provided.

## C. Integrations

**C1. What does Bren integrate with?**
Chat: Slack, Teams, Gmail, Outlook. Meetings: Zoom, Google Meet, Slack Huddles, Google Calendar, Outlook Calendar. Docs: Google Workspace, Microsoft 365, Notion, Confluence, Loom. Project: Jira, Notion, Trello, Airtable, Monday, ClickUp. Code: GitHub. (19 total.)

**C2. Asana / Linear / Basecamp?**
On the roadmap. Today most of the value still comes from chat, docs, meetings and GitHub; happy to note your interest.

**C3. Salesforce / HubSpot?**
On the roadmap; available as an Enterprise custom integration now.

**C4. GitLab / Bitbucket?**
On the roadmap; Enterprise custom integration available.

**C5. How many integrations can I connect?**
Team: up to 5 (Slack or Teams counts as one). Business and Enterprise: unlimited.

**C6. Does Bren read all our Slack messages?**
Only channels it's invited to, plus DMs with Bren itself. Never DMs between people. Private channels only for their members.

**C7. Does it read our source code?**
No. PR titles/descriptions, reviews, commit messages and metadata only.

**C8. Does it read our email?**
Only if a user connects Gmail/Outlook and only labelled folders. Off by default.

**C9. Can we restrict it to certain channels/projects/drives?**
Yes, at connection and any time after.

**C10. Do we need admin to install?**
Slack/Teams/Google/Microsoft apps need an admin; per-user connections (calendar, email, Zoom) don't.

**C11. Is there an API or Zapier?**
API and custom integrations on Enterprise. Zapier/Make not today.

## D. Pricing and billing

**D1. How much does it cost?**
Team $299/month (up to 25 seats), Business $899/month (up to 100 seats), Enterprise custom. Annual = 2 months free ($2,990 / $8,990).

**D2. Is there a free plan?**
No. A 14-day free trial with full Business features, no credit card.

**D3. What happens when the trial ends?**
Workspace goes read-only for 30 days; add a payment method to reactivate instantly; after 30 days the data is deleted.

**D4. What counts as a seat?**
Anyone with a login or tracked as a team member. Up to 5 email-only viewers are free. Deactivated people don't count.

**D5. What if we exceed the seats?**
Team: $12/seat/month over 25. Business: $9/seat/month over 100. Billed monthly in arrears, pro-rated. Admins are emailed at 90% and 100%.

**D6. We're 30 people — which plan?**
Team at $299 + 5×$12 = $359/month, or Business at $899 for OKRs, red flags, Monday Morning Brief and SSO. Team is cheaper up to 50 seats.

**D7. We're 120 people — which plan?**
Business at $899 + 20×$9 = $1,079/month works; at 100+ we recommend a demo to see if Enterprise (SCIM, residency, SLA, CSM) fits.

**D8. Can we pay annually / by invoice?**
Annual on Team and Business (2 months free); invoicing on annual Business and on Enterprise.

**D9. Can I cancel anytime?**
Yes, monthly plans. Access runs to the end of the paid period. 30-day money-back on the first payment.

**D10. Refunds on annual?**
Full refund within 30 days of first purchase; no pro-rata after that.

**D11. Discounts?**
20% for nonprofits/education (verified) and startups (<3 years, <$5M raised) on the first year. Not stackable with annual — the larger applies.

**D12. Do prices go up at renewal?**
Locked for the term paid; 60 days' notice of any change.

**D13. Is SSO extra?**
Included on Business and Enterprise. Not on Team.

**D14. What does Enterprise cost?**
It's quoted per company; if pressed: it typically starts around $2,500/month equivalent at 150 seats and depends on seats, residency, VPC and custom integrations. Book a demo for a quote.

**D15. Can we run a pilot before buying?**
The 14-day trial supports a real pilot (100 seats, Business features). Enterprise pilots (usually 30 days, one department) are arranged via demo.

**D16. Do you charge for integrations or history?**
No. Both are within plan limits with no extra fees.

## E. Security, privacy, compliance

**E1. Is our data used to train AI?**
Never. Model providers are under zero-retention agreements; Bren does not train on customer data.

**E2. Where is data stored?**
AWS US by default; EU (Frankfurt) on Enterprise.

**E3. SOC 2?**
Type II, completed. Report under NDA via the demo/CSM.

**E4. ISO 27001? HIPAA?**
ISO 27001 in progress. HIPAA: no BAA today; scope PHI out of connected sources or talk to us.

**E5. GDPR?**
Compliant; DPA on request for any plan; SCCs; EU residency on Enterprise.

**E6. Encryption?**
AES-256 at rest, TLS 1.3 in transit; private notes additionally envelope-encrypted per workspace.

**E7. Can Bren staff read our data?**
Only with customer approval for support, logged and time-limited. Private notes never.

**E8. What if someone is removed from a Slack channel or Jira project?**
Bren re-checks permissions on every sync (≤15 minutes); they lose access to derived content on the next sync.

**E9. Can we self-host?**
No on-prem. Enterprise private-VPC deployment in your AWS account is available.

**E10. What happens to data if we cancel?**
Export (JSON/CSV) for 30 days, then deletion within 30 days of the end of the paid period; deletion certificate on request.

**E11. Can an employee request deletion of their data?**
Yes; handled within 30 days; contributions to team timelines are anonymised unless the workspace requests removal.

**E12. Does HR / the works council need to approve?**
Often, for company-wide rollouts in the EU. We provide a works-council brief and can confirm: no monitoring, no productivity scores, private notes private, gamification optional.

**E13. Audit logs?**
Enterprise: login, admin actions, exports, integration changes; 1-year retention, exportable.

**E14. Uptime?**
Business targets 99.9%; Enterprise has a contractual 99.9% SLA with credits.

## F. Rollout and adoption

**F1. How long to get value?**
First digest within 24 hours of connecting Slack/Teams and one project tool. Team rollout ~1 week; Business 2–4 weeks; Enterprise 4–8 weeks including security review.

**F2. Will people actually use it?**
Updates replace the stand-up instead of adding a task, take ~2 minutes in Slack/Teams, and are visibly consumed the same day. Business+ has an adoption dashboard; Enterprise has a CSM.

**F3. Can we start with one team?**
Yes. Scope Bren to selected channels/projects/teams; only those people count as seats.

**F4. What do we tell employees?**
We provide an announcement template and an IC one-pager: what Bren reads, what it never reads, what your manager sees.

**F5. Do we have to cancel our stand-ups?**
No, but most customers do by week two and keep a weekly 20-minute exceptions-only meeting.

**F6. What if our org structure is messy?**
Bren proposes a team tree from Slack/Teams groups or your directory; you fix it in a drag-and-drop editor. Reorgs later are a few edits.

**F7. Support hours?**
Team: email, 1 business day. Business: 4 business hours + live chat. Enterprise: 24/7 for P1 with a CSM.

## G. Objections (short form; longer logic in `00-messaging-reference.md` §7)

**G1. "We already do async stand-ups."** Keep the habit; Bren is the reader — updates become digests, timelines and red flags, so posting pays off.
**G2. "AI summaries miss nuance."** Every line cites its source and can be expanded; nothing is invented; managers can request clarification.
**G3. "It's surveillance."** Only posted updates and shared tools; no screens/keystrokes/app tracking; private notes private; no scores.
**G4. "Too expensive."** Business is under $9/person/month for 100 people — less than one 20-minute stand-up per person per month.
**G5. "We're small."** Works from 1 seat; pays off from ~15. Start the trial if you're hiring.
**G6. "We're on Asana/Linear."** Roadmap; chat + docs + meetings + GitHub still give most of the value; we'll record interest.
**G7. "Security will block it."** SOC 2 Type II, permission mirroring, no training, SSO/SCIM/residency/VPC; send the security doc; security lead joins the demo.
**G8. "We have Copilot/Notion AI."** Great for docs; Bren adds the company graph and proactive briefs.
**G9. "Our leaders won't read another email."** Monday Morning Brief is one message before 9am; Orbital Freight's COO reads it before her first call. Delivered in Slack/Teams if preferred.
**G10. "What if people stop posting updates?"** Bren nudges once, shows update rates per team, and drafts updates from tool activity to make posting a 30-second confirm.
**G11. "Can we try without sales?"** Yes — trial, no card, no call required.
**G12. "We need it in Teams, not Slack."** Fully supported in Microsoft Teams.

## H. Company

**H1. Who's behind Bren?** Bren Labs, Inc., founded 2025, HQ San Francisco, remote-first (~60 people across US, UK, India). Series A from Cormorant Ventures and Ninth Street Capital (2026); amount not disclosed.
**H2. How many customers?** 300+ companies, 40,000+ people briefed weekly (fictional figures, use as-is).
**H3. Can I talk to a customer?** Reference calls are arranged during the demo process for Business/Enterprise evaluations.
**H4. How do I contact you?** help@getbren.com; security@getbren.com; privacy@getbren.com; or the assistant on this site.

## I. What the assistant should do when it doesn't know

Say: "I don't want to guess on that. Leave your email and someone from the Bren team will answer today." Then offer the most relevant next step (trial or demo) based on `10-conversion-playbook.md`.
