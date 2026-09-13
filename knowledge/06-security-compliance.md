# Bren — Security, Privacy and Compliance

> Canonical answers for IT, Security, Legal and HR. Fictional, but must be internally consistent and consistent with `/privacy/` and `/terms/` on the site. Be precise; never overstate. If a control isn't listed here, say "I'll confirm with our security team" and offer the demo.

## 1. Summary (the paragraph to reuse)

Bren is SOC 2 Type II audited, GDPR and CCPA compliant, encrypts all data with AES-256 at rest and TLS 1.3 in transit, and never uses customer data to train models. Bren connects to your tools with least-privilege OAuth scopes and mirrors their permissions: nobody sees anything in Bren they couldn't already see in the source tool. Business plans add SAML SSO; Enterprise adds SCIM, EU/US data residency, custom retention, audit logs and a private-VPC deployment option.

## 2. Certifications and frameworks

| Item | Status | Notes |
|---|---|---|
| SOC 2 Type II | Completed (Security, Availability, Confidentiality) | Report available under NDA via demo/CSM; renewed annually |
| GDPR | Compliant | DPA available; SCCs for transfers; EU residency on Enterprise |
| CCPA/CPRA | Compliant | Service-provider terms in the DPA |
| ISO 27001 | In progress — do **not** claim certified | Expected within 12 months; say "in progress" |
| HIPAA | Not signed as a BAA today | Digital-health customers use Bren for non-PHI operational data; if PHI is in scope, book a demo — we can scope channels/tools to exclude PHI |
| Penetration testing | Annual third-party test; summary letter available | Plus continuous automated scanning |
| Bug bounty | Private programme | security@getbren.com for reports |

## 3. Data handling

### 3.1 What Bren stores
- Content from connected sources needed to answer questions and build digests: messages in channels Bren is invited to, task/ticket data, document text and metadata, meeting transcripts/recordings metadata, calendar metadata, PR/commit metadata.
- Derived data: summaries, embeddings, timelines, digests, red flags.
- Account data: names, emails, roles, team structure, settings.
- Private notes (encrypted with a per-workspace key; not accessible to Bren staff or workspace admins).

### 3.2 What Bren does not collect
- Keystrokes, screenshots, screen time, location, app-usage, browser history, webcam/microphone.
- Content from channels Bren is not invited to, private DMs between people (only DMs with Bren itself), or documents not shared with connected users.
- Payment card numbers (handled by Stripe).

### 3.3 Encryption
- At rest: AES-256 (AWS KMS-managed keys; customer-managed keys on Enterprise).
- In transit: TLS 1.3 (1.2 minimum).
- Private notes: additional per-workspace envelope encryption.
- Backups: encrypted, daily, retained 35 days, tested quarterly.

### 3.4 Hosting and residency
- AWS. Default region: US (us-east-1, with us-west-2 backup). Enterprise: EU (eu-central-1 Frankfurt, eu-west-1 backup).
- Private-VPC deployment (Enterprise, extra fee): Bren's application runs in a dedicated VPC in your AWS account; Bren operates it; model calls still go to model providers unless a private model endpoint is contracted.
- No on-premises offering.

### 3.5 AI models and training
- Bren uses third-party large language models under enterprise agreements with **zero data retention** — prompts and outputs are not stored by the provider and not used for training.
- Bren never trains or fine-tunes models on customer data. Improvements come from evaluation on synthetic and opt-in anonymised data only.
- Model providers are listed on the sub-processor list; Enterprise can restrict to a single provider/region.
- Hallucination controls: every claim in an answer or digest is grounded in a retrieved source and cited; if no source exists, Bren says so. Missing updates are reported as missing, never generated.

### 3.6 Retention and deletion
- Active workspace: data retained per plan (Team 12 months searchable; Business/Enterprise unlimited; Enterprise can set custom retention, e.g. 24 months, and legal hold).
- Cancellation: export available 30 days; all data deleted 30 days after the paid period ends; deletion certificate on request (Enterprise: standard).
- Individual deletion: a person's data is deleted within 30 days of an admin request or a verified data-subject request; their contributions to team timelines are anonymised, not removed, unless the workspace requests otherwise.
- Backups purge within 35 days of deletion.

## 4. Access control and permissions

### 4.1 Permission mirroring
- Bren re-checks source-tool permissions on every sync (Slack/Teams/Jira/etc. — at most 15 minutes lag, typically <5 minutes).
- Private Slack channels / Teams private channels: only members see content derived from them.
- Restricted Jira projects, Notion pages, Google/Microsoft docs: respected per user.
- Bren's own model on top: Participatory (default) / Public / Selective for projects, tasks, OKRs; org admins can only make defaults stricter.
- People insights: managers see direct and indirect reportees; peers see availability and shared-project contributions only.

### 4.2 Identity
- Team: Google / Microsoft sign-in, email magic link; optional 2FA (TOTP).
- Business: SAML 2.0 SSO (Okta, Microsoft Entra ID, Google Workspace, OneLogin, JumpCloud, generic SAML); enforce-SSO option.
- Enterprise: SCIM 2.0 provisioning/deprovisioning (Okta, Entra ID), just-in-time provisioning, audit logs (login, admin actions, exports, integration changes) retained 1 year and exportable.
- Roles: Owner, Admin, Member, Viewer (email-only). Admins cannot read private notes.

### 4.3 Integration scopes
- OAuth 2.0 for every integration, requested at minimum scope. Details per tool in `08-integrations.md`.
- Admins can restrict Bren to specific channels, projects, drives or repositories.
- Read-only mode: disables all write-backs (Slack/Teams posting still needed for digests if chosen; otherwise email).
- Any integration can be disconnected instantly; derived data from that source is deleted within 7 days.

## 5. Operational security
- Infrastructure as code; least-privilege IAM; MFA and hardware keys for all staff; production access requires approval and is logged.
- Secrets in AWS Secrets Manager; rotated quarterly.
- Vulnerability management: critical patches within 72 hours; dependency scanning on every build.
- Logging/monitoring 24/7; incident response plan tested twice a year.
- Security awareness training for all staff at onboarding and annually; background checks where legally permitted.
- Vendor risk: sub-processors reviewed annually; list available on request and in the DPA.

## 6. Availability and support commitments
- Business: target 99.9% monthly uptime (no contractual SLA); status page at status.getbren.com (fictional).
- Enterprise: contractual 99.9% monthly uptime SLA with service credits (10% for <99.9%, 25% for <99.0%), planned maintenance excluded and announced 5 days ahead.
- Disaster recovery: RPO 24 hours (daily backups), RTO 8 hours; Enterprise can contract RPO 1 hour.

## 7. Incident notification
- Confirmed security incidents affecting customer data: notification within 72 hours (GDPR); Enterprise contracts can specify 24–48 hours.
- Security contact: security@getbren.com. Privacy contact / DPO: privacy@getbren.com.

## 8. Privacy notes for HR and works councils
- Bren is a work-information tool, not a monitoring tool. It processes work updates people post and content in shared work tools.
- No productivity scores, rankings or automated decisions about individuals. Managers mark outcomes on tasks/projects.
- Gamification (badges/streaks) can be disabled per workspace.
- Private notes are excluded from AI summaries by default and are unreadable by admins and Bren staff.
- Works-council / employee-representative briefings available on request (Enterprise).
- Lawful basis (GDPR): legitimate interests of the employer for operational communication; the employer is the controller, Bren the processor.

## 9. Answers to the questions we get most

- **"Where is our data stored?"** AWS US by default; EU on Enterprise.
- **"Is our data used to train AI?"** Never. Model providers have zero-retention agreements.
- **"Can Bren staff read our data?"** Only with customer approval for support, logged and time-limited; private notes never.
- **"Can we self-host?"** No on-prem. Enterprise private-VPC in your AWS account is available.
- **"Do you have SOC 2?"** Yes — Type II. Report under NDA.
- **"ISO 27001?"** In progress.
- **"HIPAA?"** Not a BAA today; scope PHI out of connected sources or talk to us.
- **"What happens if we cancel?"** Export for 30 days, then deletion; certificate on request.
- **"Can we limit which channels/projects Bren sees?"** Yes, at connection time and any time after.
- **"Does Bren record meetings?"** No. It reads transcripts/recordings your meeting tool already produced, if you connect them.
- **"Do you sign a DPA?"** Yes, on request for any plan; standard on Enterprise.
- **"Do you support data-subject requests?"** Yes; admins can export or delete a person's data; we respond within 30 days.
