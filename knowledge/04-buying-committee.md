# Bren — Buying Committee

> Who is involved in a Bren purchase, what each cares about, what they object to, and the answer to give. For self-serve Team purchases the "committee" is usually one manager; for Business it's 2–3 people; for Enterprise it's the full set.

## 1. Roles at a glance

| Role | Typical title | Involvement | Decides on |
|---|---|---|---|
| **Champion** | Head of Ops, Chief of Staff, VP Engineering, Engineering/Product Manager, Head of PMO | Finds Bren, runs the trial, builds the internal case | Whether to pilot |
| **Economic buyer** | COO, CEO, CFO, VP/GM of a business unit | Approves budget | Plan and term |
| **Users** | Managers, ICs, team leads | Post updates, read digests, use Ask Bren | Whether adoption sticks |
| **Technical evaluator** | IT lead, Security/CISO, IT admin | Reviews scopes, SSO/SCIM, data handling | Whether it can be connected |
| **People/HR influencer** | Head of People, HRBP | Reviews surveillance/privacy implications | Whether rollout is company-wide |
| **Legal/Procurement** | Counsel, procurement | DPA, terms, invoicing | Contract form (Enterprise) |
| **Executive sponsor** | CEO/COO | Uses Leadership Pulse and Monday Morning Brief | Expansion |

## 2. Role-by-role

### 2.1 Champion (Head of Ops / Chief of Staff / VP Eng / Eng Manager)

- **Goal:** stop chasing; fewer meetings; look good to leadership by making the org legible.
- **Success metric:** meetings cancelled, time reclaimed, leadership using the briefs.
- **Objections:** "Will my team actually post updates?" → Updates are ~100 words, in Slack/Teams, replace the stand-up, and are visibly consumed (digests, timeline, red flags). Adoption in the trial is measurable: Bren shows update rate per team.
  "How much setup?" → Connect Slack/Teams + one project tool; first digest within 24h; typical Team rollout 1 week.
- **What to give them:** a pilot plan (one department, 2 weeks), the ROI math, the security overview to forward to IT, the HR one-liner.
- **CTA:** Start free trial (≤100 seats) or Book a demo (rollout plan).

### 2.2 Economic buyer (COO / CEO / CFO / GM)

- **Goal:** momentum visibility; fewer meetings across the org; a defensible line item.
- **Success metric:** leadership meeting load, decision latency, onboarding time.
- **Objections:** "Another SaaS line?" → Flat pricing: Business $899/mo for up to 100 people (<$9/person), annual $8,990 (2 months free). Compare to one 20-minute stand-up per person per month.
  "Will it be adopted or become shelfware?" → Updates replace a ritual rather than adding one; adoption dashboards; CSM on Enterprise.
  "What if we outgrow it?" → Seat overage ($9–12/seat) or move up a plan; Enterprise for 100+.
- **What to give them:** one-page ROI (see §4), fictional references (Orbital Freight COO, Meridian Learning CEO).
- **CTA:** Book a demo.

### 2.3 Users (managers and ICs)

- **Goal (managers):** know what's happening without running meetings; catch blockers early.
- **Goal (ICs):** fewer interruptions; no "status?" pings; own their narrative; catch up fast after leave.
- **Objections:** "Is this surveillance?" → No: only posted updates and shared work tools; no screen/keystroke/app tracking; private notes private even from admins; peers never see performance insights about each other.
  "More admin?" → One ~100-word update a day, from Slack/Teams, replacing the stand-up. Missed updates are nudged once, never fabricated.
  "Will the AI misrepresent me?" → Every line cites the source; you can see and correct what's attributed to you; managers can request clarification instead of assuming.
- **What to give them:** the IC one-pager: what Bren reads, what it never reads, what your manager sees.

### 2.4 Technical evaluator (IT / Security / CISO)

- **Goal:** least-privilege access, no data leakage across permission boundaries, no training on company data, clean offboarding.
- **Questions and answers:**
  - Auth: OAuth 2.0 per integration with minimum scopes; admin-installed for Slack/Teams/Google/Microsoft; per-user for personal calendar/email where required.
  - Permissions: mirrored from source tools on every sync (≤15-minute lag) plus Bren's Participatory/Public/Selective model.
  - Data: AES-256 at rest, TLS 1.3 in transit; hosted on AWS (US default; EU on Enterprise); customer data never used to train models; model providers under zero-retention agreements.
  - Identity: SAML SSO (Business+), SCIM provisioning (Enterprise), audit logs (Enterprise).
  - Deployment: multi-tenant SaaS (Team/Business); private-VPC option (Enterprise).
  - Retention/deletion: configurable on Enterprise; all data deleted 30 days after cancellation; per-user deletion on request.
  - Compliance: SOC 2 Type II report under NDA; GDPR/CCPA; DPA available; sub-processor list on request; pen-test annually.
- **Objections:** "We don't allow third-party apps in Slack." → Enterprise can scope Bren to specific channels/workspaces; read-only mode available.
  "Can it leak private channel content?" → No; permission mirroring means private-channel content is only surfaced to members.
- **What to give them:** `06-security-compliance.md`, the SOC 2 report (under NDA, via demo), the scopes list per integration (`08-integrations.md`).

### 2.5 People / HR influencer

- **Goal:** no surveillance culture; fair treatment; privacy of notes and reviews.
- **Answers:** Bren is opt-in per workspace; org admins can only tighten visibility defaults; private notes are excluded from AI summaries by default and invisible to admins; no individual "productivity scores"; gamification can be disabled; managers mark outcomes on tasks/projects, not on people.
- **Objection:** "Could this be used in performance reviews unfairly?" → Timelines are factual and cited; ICs see the same timeline their manager sees for their work; nothing is inferred about people that isn't in their posted updates and shared tools.

### 2.6 Legal / Procurement (Enterprise)

- Standard MSA and DPA; order form; annual invoicing (NET-30); multi-year discounts; security questionnaire (SIG Lite / CAIQ) answered; no on-prem; VPC available; sub-processors listed; liability caps standard; data residency US/EU.
- Team/Business are click-through terms (see `/terms/`) with card or invoice on annual.

## 3. Common committee dynamics and how to steer

- **Champion has no budget:** give them the ROI page and offer a leadership walkthrough (Book a demo) while they run the trial on their own teams.
- **Security blocks before value is seen:** propose a read-only, single-channel pilot on the trial; send the security doc; offer a call with our security lead in the demo.
- **HR concern surfaces late:** send the HR one-liner early on any company-wide deal; offer to disable gamification and confirm private-notes policy.
- **CFO wants annual only:** annual = 2 months free; Enterprise can be quarterly-invoiced.
- **Multiple business units:** Enterprise supports multiple orgs under one contract with separate admins.

## 4. ROI math (approved figures; fictional but consistent)

- Stand-up cost: 12 people × 20 min × 250 working days ≈ 1,000 hours/year per team.
- At a blended $60/hour: ≈ $60,000/year per 12-person team in stand-ups alone.
- Business plan for 100 people: $10,788/year monthly, $8,990/year annual.
- Onboarding: 5 weeks → 5 days of partial productivity for each new hire.
- Approved headline: "Cut status meetings by 70%."

## 5. Qualifying questions (for the assistant / SDR)

1. How many people would use Bren, and across how many teams?
2. Which chat tool — Slack or Teams? Which project tool?
3. What's the ritual you'd most like to kill: stand-ups, weekly syncs, status reports, catch-up calls?
4. Who needs to be informed but currently isn't (leaders? new hires?)
5. Do you need SSO, SCIM, EU data residency, or a security review? (→ demo)
6. Are you piloting with one team or rolling out company-wide? (→ trial vs. demo)
7. When are you hoping to have this running?
