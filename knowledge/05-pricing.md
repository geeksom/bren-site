# Bren — Pricing, Plans and Billing Rules

> Single source of truth for prices, limits and billing behaviour. All amounts USD. The site's /pricing/ page and the on-site assistant must match this document exactly. If a question isn't answered here, say "I'll confirm that with the team" rather than guessing.

## 1. Plans at a glance

| | **Team** | **Business** (most popular) | **Enterprise** |
|---|---|---|---|
| Price | **$299 / month** | **$899 / month** | **Custom** (annual contract) |
| Annual | $2,990 / year (2 months free) | $8,990 / year (2 months free) | Annual or multi-year |
| Included seats | Up to **25** | Up to **100** | 100+ (no cap) |
| Extra seats | $12 / seat / month | $9 / seat / month | Negotiated |
| Free trial | 14 days, no card (Business features) | 14 days, no card | Pilot by agreement |
| Buy | Self-serve (/signup/) | Self-serve (/signup/) | Book a demo (/book-demo/) |

## 2. What each plan includes

### Team — $299/month
For a department or a company up to 25 people.
- Ask Bren — web app, Slack, Microsoft Teams (soft cap 500 questions/user/day)
- Async Standups (import from one connected project tool, manager clarifications, win/ongoing/fail/postponed)
- AI Digests — daily (leads) and weekly (managers, ICs)
- Hierarchical Work Timeline
- Wins & Losses Ledger (gamification optional)
- Second Brain (onboarding/catch-up)
- Private Notes
- Org structure & permissions (Participatory / Public / Selective)
- **Up to 5 integrations** (Slack or Teams counts as one)
- 12-month searchable history (backfill on connect: 12 months)
- Email support, 1-business-day response
- Google / Microsoft sign-in (no SAML SSO)

### Business — $899/month
For companies or divisions up to 100 people who want leadership briefs and risk detection.
- Everything in Team, plus:
- Monday Morning Brief
- Objectives & Key Results (OKR tracking, direction-of-travel evaluation)
- Red-Flag Detection with suggested interventions
- Weekly leadership digest, monthly recap, quarterly / half-yearly / yearly snapshots
- Leadership Pulse
- Think Out Loud
- Meeting Intelligence (Zoom, Google Meet, Slack Huddles)
- Year in Review
- **Unlimited integrations**, unlimited history and backfill
- SAML SSO (Okta, Entra ID, Google, OneLogin, generic SAML)
- Priority support: 4-business-hour first response, live chat via the assistant on getbren.com
- Adoption dashboard (update rates per team)
- Ask Bren soft cap 2,000 questions/user/day

### Enterprise — custom
For 100+ people, multiple business units, or formal security/procurement requirements.
- Everything in Business, plus:
- SCIM user provisioning/deprovisioning
- Data residency: US or EU
- Custom data-retention policies; legal hold
- Private-VPC deployment option in your AWS account (extra fee)
- Audit logs and export
- API access and custom integrations (built by Bren, scoped in the contract)
- Multiple organisations under one contract, with separate admins
- Dedicated Customer Success Manager; onboarding workshop; quarterly business reviews
- 99.9% monthly uptime SLA with service credits
- Security questionnaire, SOC 2 report under NDA, DPA, MSA; annual invoicing NET-30
- Ask Bren unlimited
- Pricing: typically starts around $2,500/month equivalent at 150 seats; quote depends on seats, residency, VPC and custom integrations. Do not quote a firm Enterprise price on the site — "starts around" is the most we say, and only when asked directly.

## 3. Trial rules

- 14 days, no credit card required.
- Trial includes **Business** features and up to 100 seats so a real pilot is possible.
- Day 12 and day 14 reminder emails. On day 15 the workspace becomes **read-only** (nothing deleted) for 30 days; adding a payment method reactivates it instantly. After 30 days of read-only, data is deleted.
- Choosing a plan during the trial does not shorten the trial.
- One trial per company domain; a second trial can be granted by support.
- Enterprise pilots are arranged via demo (typically 30 days, one department, with a CSM).

## 4. Seats — definitions and edge cases

- A **seat** is any person with a Bren login or who is tracked as a team member (i.e., has updates or timelines). Read-only viewers (e.g., a board member who only receives Leadership Pulse by email) are **not** seats up to 5 per workspace.
- Contractors count as seats if they post updates or have a login.
- Deactivated people don't count; their history stays.
- Seat counts are checked daily; overage is billed at the end of the month, pro-rated for the days over the limit.
- Going over: Team over 25 → $12/seat/month; Business over 100 → $9/seat/month. Bren emails the admin at 90% and 100% of included seats.
- Team plans at 50+ seats are automatically recommended to Business (cheaper at that point: 25 + 50×$12 = $899 → exactly the Business price, and Business includes more).
- Break-even: Team is cheaper up to 50 seats (($899−$299)/$12 = 50 extra seats). At 51+ seats Business is cheaper.

## 5. Billing

- Card (Visa, Mastercard, Amex) via Stripe for monthly and annual. Invoice/ACH/bank transfer available on annual Business and on Enterprise.
- Monthly billing on the sign-up anniversary; annual up front.
- Annual = 2 months free ($2,990 Team, $8,990 Business). Annual seat overage is billed monthly in arrears.
- Currency: USD only. Taxes/VAT added where applicable; VAT ID accepted at checkout.
- Receipts and invoices downloadable from Settings → Billing; multiple billing contacts allowed.

## 6. Upgrades, downgrades, cancellation, refunds

- **Upgrade** (Team → Business): immediate; pro-rated charge for the remainder of the cycle.
- **Downgrade** (Business → Team): takes effect at the end of the current cycle. Business-only features become read-only (past briefs stay readable). Integrations beyond 5 are paused (you choose which). History beyond 12 months stays stored but becomes searchable again only on re-upgrade.
- **Cancellation:** anytime from Settings → Billing; access continues to the end of the paid period; no cancellation fee. Annual plans are not refunded pro-rata except within 30 days of first purchase (full refund, first year only).
- **Refunds:** 30-day money-back on the first payment (monthly or annual). No refunds for partial months thereafter.
- **Data after cancellation:** exportable (JSON/CSV) for 30 days; deleted 30 days after the end of the paid period. Enterprise can set a different retention or request immediate deletion certificate.
- **Reactivation:** within 30 days restores everything; after that you start fresh.

## 7. Discounts and special pricing

- **Nonprofits, registered charities, educational institutions:** 20% off Team and Business (verification required).
- **Startups** (<3 years old, <$5M raised): 20% off first year of Team or Business.
- **Annual:** 2 months free (already reflected above; not stackable with the 20% — the larger discount applies).
- **Multi-year Enterprise:** negotiated.
- **No** free plan. No per-feature add-ons except Enterprise VPC.
- Referral: not offered currently.

## 8. What is NOT charged extra

- Integrations (within plan limits), digests, history, support, Slack/Teams apps, seat deactivations, exports.
- Usage of Ask Bren within soft caps. If a workspace consistently exceeds caps, Bren contacts the admin; no surprise bills.

## 9. Common pricing questions — canonical answers

- **"Is there a free plan?"** No. There's a 14-day free trial with full Business features, no card.
- **"Can I pay monthly?"** Yes, Team and Business. Enterprise is annual.
- **"What if I have 30 people?"** Team at $299 + 5 × $12 = $359/month, or Business at $899. Team is cheaper up to 50 seats; Business adds OKRs, red flags, Monday Morning Brief, SSO and more.
- **"What if I have 120 people?"** Business at $899 + 20 × $9 = $1,079/month, or Enterprise (recommended at 100+ if you need SCIM/residency/SLA). Book a demo.
- **"Do you charge for viewers?"** Up to 5 email-only viewers are free; beyond that they're seats.
- **"Can one company have two workspaces?"** Team/Business: one org per subscription (two subscriptions is fine). Enterprise: multiple orgs under one contract.
- **"Do prices change on renewal?"** Prices are locked for the term you paid for; we give 60 days' notice of any price change.
- **"Is SSO extra?"** SAML SSO is included in Business and Enterprise. Not available on Team (Google/Microsoft sign-in only).
- **"Do you offer a pilot?"** Trial (self-serve, 14 days) or an Enterprise pilot arranged via demo.
- **"Can I get a quote / invoice?"** Annual Business and Enterprise can be invoiced; ask via Book a demo or help@getbren.com.
- **"Do you have regional pricing?"** No; USD worldwide. Taxes vary.
- **"Do you offer an agency/consultancy licence across client teams?"** Enterprise, multiple orgs under one contract — book a demo.
