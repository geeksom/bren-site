const c = require('../components');
const { SITE } = require('./site');

const wrap = (title, updated, inner) =>
  `<section class="section"><div class="container legal prose"><p class="eyebrow">Legal</p><h1>${title}</h1><p class="updated">Last updated: ${updated}. ${SITE.company} is a fictional company; this document is provided for demonstration purposes and is modelled on a standard SaaS policy.</p>${inner}</div></section>`;

const privacy = {
  path: 'privacy/',
  title: 'Privacy Policy',
  description: 'How Bren Labs, Inc. collects, uses, stores and protects personal data — for website visitors and for people whose employers use Bren.',
  body: wrap(
    'Privacy Policy',
    '1 September 2026',
    `
<h2>1. Who we are</h2>
<p>${SITE.company} ("Bren", "we", "us") provides the Bren service at getbren.com and in the Bren apps for Slack and Microsoft Teams. Our address is ${SITE.address}. For privacy questions contact <a href="mailto:${SITE.privacyEmail}">${SITE.privacyEmail}</a>. Our Data Protection Officer can be reached at the same address.</p>

<h2>2. Scope and roles</h2>
<p>This policy covers two situations:</p>
<ul>
  <li><strong>Website visitors and prospective customers</strong> (people who browse getbren.com, start a trial, or book a demo). Here Bren is the <em>controller</em>.</li>
  <li><strong>People whose employer uses Bren</strong> ("Workspace Users"). Here your employer (the "Customer") is the controller and Bren is a <em>processor</em> acting on its instructions under our Data Processing Agreement. Questions about how your employer configures Bren — which channels, projects and documents are connected, whether private notes feed AI summaries — should go to your employer's workspace admin.</li>
</ul>

<h2>3. Data we collect</h2>
<h3>3.1 From website visitors and prospects</h3>
<ul>
  <li>Information you give us in the trial sign-up or demo forms: name, work email, company, role, team size, tools in use, notes.</li>
  <li>Support correspondence sent to help@, security@ or privacy@getbren.com.</li>
  <li>Technical data: IP address, browser type, pages viewed, referrer, approximate location derived from IP, and cookies described in section 9.</li>
  <li>If an AI assistant is enabled on this website, the content of your conversation with it.</li>
</ul>
<h3>3.2 From Workspace Users (as processor)</h3>
<ul>
  <li>Account data: name, email, role, team, manager, profile picture, time zone.</li>
  <li>Content from tools the Customer connects, limited to the scope the Customer's admin configures: messages in chat channels Bren is invited to and direct messages with Bren; task and project data; documents shared with connected users; meeting transcripts and recordings already produced by the meeting tool; calendar metadata; pull-request and commit metadata (never source code); emails only in folders a user explicitly labels.</li>
  <li>Content Workspace Users create in Bren: updates, notes, questions to Ask Bren, outcome marks, OKRs.</li>
  <li>Derived data: summaries, digests, timelines, embeddings, red flags.</li>
</ul>
<h3>3.3 What we never collect</h3>
<p>Keystrokes, screenshots, screen time, device location, application or browser usage, webcam or microphone input, direct messages between people, or source code.</p>

<h2>4. How we use data</h2>
<table><thead><tr><th>Purpose</th><th>Data</th><th>Legal basis (GDPR)</th></tr></thead><tbody>
<tr><td>Provide the Bren service to Customers</td><td>Workspace User data</td><td>Processor on Customer instructions (Art. 28); Customer's legitimate interests</td></tr>
<tr><td>Set up trials, arrange demos, respond to enquiries</td><td>Form and correspondence data</td><td>Pre-contractual steps (Art. 6(1)(b)); legitimate interests</td></tr>
<tr><td>Send product and marketing email to prospects</td><td>Work email, company</td><td>Legitimate interests; consent where required. Unsubscribe in every email.</td></tr>
<tr><td>Secure, monitor and improve the website and service</td><td>Technical data, aggregated usage</td><td>Legitimate interests</td></tr>
<tr><td>Comply with law and enforce terms</td><td>Any</td><td>Legal obligation; legitimate interests</td></tr>
</tbody></table>
<p><strong>AI models.</strong> Bren uses third-party large language models under enterprise agreements with zero data retention: prompts and outputs are not stored by the provider and are not used to train their models. Bren does not train or fine-tune models on Customer or visitor data.</p>

<h2>5. Sharing</h2>
<p>We share personal data only with: (a) sub-processors that host or support the service (cloud hosting, model providers, email delivery, payment processing, support tooling), each bound by contract; the current list is available on request and in the DPA; (b) the Customer that controls a workspace; (c) professional advisers, and authorities where required by law; (d) a successor in a merger or acquisition, with notice. We do not sell personal data and do not share it for cross-context behavioural advertising.</p>

<h2>6. International transfers</h2>
<p>Data is hosted on Amazon Web Services in the United States by default, or in the European Union (Frankfurt) for Enterprise Customers who select EU residency. Transfers out of the EEA/UK rely on Standard Contractual Clauses and, where applicable, the EU–US Data Privacy Framework.</p>

<h2>7. Security</h2>
<p>Bren is SOC 2 Type II audited. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). Private notes are additionally encrypted per workspace and cannot be read by Bren staff or workspace admins. Access to production systems is restricted, logged and reviewed. We notify affected Customers of confirmed personal-data breaches within 72 hours.</p>

<h2>8. Retention</h2>
<ul>
  <li><strong>Prospect data:</strong> up to 24 months after last contact, unless you become a Customer or ask us to delete it sooner.</li>
  <li><strong>Workspace data:</strong> for the life of the subscription, subject to plan history limits and any Customer-configured retention. After cancellation, export is available for 30 days; all data is deleted within 30 days of the end of the paid period, and backups purge within a further 35 days.</li>
  <li><strong>Individual Workspace Users:</strong> deleted within 30 days of a Customer request or a verified data-subject request; contributions to team timelines are anonymised unless the Customer requests removal.</li>
</ul>

<h2>9. Cookies</h2>
<p>getbren.com sets only strictly necessary cookies and local storage needed for the site to function (for example, remembering a form state). If an on-site AI assistant is enabled it may set its own functional cookie to keep your conversation continuous. We do not use advertising cookies. You can block cookies in your browser; the site will still work.</p>

<h2>10. Your rights</h2>
<p>Depending on where you live you may have the right to access, correct, delete, restrict or port your personal data, to object to processing, and to withdraw consent. Website visitors and prospects can exercise these rights by emailing <a href="mailto:${SITE.privacyEmail}">${SITE.privacyEmail}</a>; we respond within 30 days. Workspace Users should contact their employer, who controls the workspace; we will assist the Customer in responding. You may also complain to your supervisory authority. California residents: we do not sell or share personal information; you may request disclosure or deletion and will not be discriminated against for doing so.</p>

<h2>11. Children</h2>
<p>Bren is a workplace tool and is not directed at anyone under 16. We do not knowingly collect data from children.</p>

<h2>12. Changes</h2>
<p>We will post changes here and, for material changes, notify Customers by email at least 30 days in advance.</p>

<h2>13. Contact</h2>
<p>${SITE.company}, ${SITE.address}. Privacy: <a href="mailto:${SITE.privacyEmail}">${SITE.privacyEmail}</a>. Security: <a href="mailto:${SITE.securityEmail}">${SITE.securityEmail}</a>. Support: <a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.</p>
`
  ),
};

const terms = {
  path: 'terms/',
  title: 'Terms & Conditions',
  description: 'Terms governing use of the Bren website and the Bren service, including trials, subscriptions, seats, billing, acceptable use, data and liability.',
  body: wrap(
    'Terms &amp; Conditions',
    '1 September 2026',
    `
<p>These Terms govern your use of the getbren.com website and, unless you have signed a separate Master Subscription Agreement with ${SITE.company}, your use of the Bren service. By creating a workspace, starting a trial, or using the service you agree to these Terms on behalf of yourself and, where applicable, the organisation you represent (the "Customer").</p>

<h2>1. The service</h2>
<p>Bren connects to third-party tools the Customer authorises, builds a permission-aware record of work activity, and provides summaries, briefs, alerts and answers to Customer's users ("Users"). Bren does not replace the connected tools and does not join or record meetings. Features vary by plan as described on the <a href="/pricing/">pricing page</a>, which forms part of these Terms.</p>

<h2>2. Accounts and Users</h2>
<p>The Customer is responsible for its Users, for the accuracy of account information, and for keeping credentials secure. Workspace admins may add, deactivate and scope Users and integrations. Users must be at least 16 and authorised by the Customer.</p>

<h2>3. Free trial</h2>
<p>Trials last 14 days, require no payment method, and include Business-plan features for up to 100 seats. At the end of the trial the workspace becomes read-only for 30 days; adding a payment method reactivates it. Data in a workspace that is not reactivated within 30 days is deleted. One trial per organisation; additional trials at our discretion.</p>

<h2>4. Subscriptions, seats and billing</h2>
<ul>
  <li><strong>Plans.</strong> Team ($299/month, up to 25 seats), Business ($899/month, up to 100 seats) and Enterprise (custom, by order form). Annual prepayment gives two months free ($2,990 and $8,990 respectively).</li>
  <li><strong>Seats.</strong> A seat is any person with a login or tracked as a team member. Up to five email-only viewers are free. Seats over the plan allowance are billed at $12 (Team) or $9 (Business) per seat per month, pro-rated and invoiced monthly in arrears.</li>
  <li><strong>Payment.</strong> Monthly plans are billed by card on the sign-up anniversary; annual plans are billed up front by card or, for Business and Enterprise, by invoice payable within 30 days. Prices exclude taxes, which are added where applicable.</li>
  <li><strong>Changes.</strong> Upgrades are immediate and pro-rated. Downgrades take effect at the end of the current term. Prices are fixed for the term paid; we give 60 days' notice of price changes.</li>
  <li><strong>Refunds.</strong> A full refund is available within 30 days of the first payment. Otherwise fees are non-refundable, except as required by law or stated in an Enterprise order form.</li>
  <li><strong>Discounts.</strong> Verified nonprofits, educational institutions and eligible startups receive 20% off Team and Business; discounts do not stack.</li>
</ul>

<h2>5. Term and termination</h2>
<p>Subscriptions renew automatically for the same term until cancelled. Monthly plans may be cancelled at any time from Settings → Billing, effective at the end of the current period. Annual plans may be cancelled for the next term at any time before renewal. We may suspend or terminate for material breach after notice, or immediately for security or legal reasons. On termination, the Customer may export its data for 30 days, after which we delete it as described in the <a href="/privacy/">Privacy Policy</a>.</p>

<h2>6. Customer data and privacy</h2>
<p>The Customer owns its data. We process it only to provide the service, under the <a href="/privacy/">Privacy Policy</a> and, where applicable, a Data Processing Agreement available on request. We never use Customer data to train machine-learning models. The Customer is responsible for having the rights and lawful basis needed to connect its tools and for informing its Users, including any required consultation with employee representatives.</p>

<h2>7. Acceptable use</h2>
<p>The Customer and its Users must not: use Bren to monitor individuals in ways prohibited by applicable law; attempt to access data outside their permissions; reverse-engineer, scrape or resell the service; upload malicious code; or use the service to build a competing product. Bren is not designed for content requiring HIPAA business-associate terms unless agreed in writing.</p>

<h2>8. Third-party tools</h2>
<p>Integrations depend on third-party services and their terms and APIs. We are not responsible for changes to or unavailability of those services. Disconnecting an integration deletes data derived from it within seven days.</p>

<h2>9. AI-generated content</h2>
<p>Summaries, briefs and answers are generated automatically from Customer data and are provided to inform, not to replace, human judgment. Every generated statement is linked to its source so it can be verified. The Customer is responsible for decisions taken on the basis of generated content, including employment decisions.</p>

<h2>10. Availability and support</h2>
<p>We aim for 99.9% monthly availability. Contractual uptime commitments and service credits apply only to Enterprise order forms. Support levels by plan are described on the pricing page.</p>

<h2>11. Intellectual property</h2>
<p>We own the service and all related intellectual property. The Customer receives a non-exclusive, non-transferable right to use the service during the subscription. Feedback may be used by us without obligation.</p>

<h2>12. Confidentiality</h2>
<p>Each party will protect the other's confidential information with at least reasonable care and use it only for the purposes of these Terms. Our SOC 2 report and security documentation are confidential.</p>

<h2>13. Warranties and disclaimers</h2>
<p>We warrant that the service will perform materially as described. Except as expressly stated, the service is provided "as is" and we disclaim implied warranties to the extent permitted by law.</p>

<h2>14. Limitation of liability</h2>
<p>Neither party is liable for indirect, consequential or punitive damages. Each party's total liability under these Terms is limited to the fees paid or payable by the Customer in the 12 months before the claim, except for breaches of confidentiality, data-protection obligations, or amounts that cannot be limited by law.</p>

<h2>15. Indemnity</h2>
<p>We will defend the Customer against claims that the service infringes third-party intellectual-property rights. The Customer will defend us against claims arising from its data or its unlawful use of the service.</p>

<h2>16. General</h2>
<p>These Terms are governed by the laws of the State of California, with exclusive jurisdiction in San Francisco County, unless an Enterprise order form says otherwise. They are the entire agreement on their subject; if any provision is unenforceable the rest remain in force. We may update these Terms with 30 days' notice; continued use after the effective date is acceptance.</p>

<h2>17. Contact</h2>
<p>${SITE.company}, ${SITE.address}. <a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.</p>
`
  ),
};

const notFound = {
  file: '404.html',
  path: '404/',
  noindex: true,
  title: 'Page not found',
  description: 'That page does not exist.',
  head: '<meta name="robots" content="noindex">',
  body: `<section class="section"><div class="container" style="text-align:center;max-width:640px"><p class="eyebrow">404</p><h1>Even Bren couldn't find that one.</h1><p class="lead" style="margin:0 auto 24px">The page may have moved. Try one of these instead.</p><div class="cta-pair" style="justify-content:center"><a class="btn btn-primary" href="/">Home</a><a class="btn btn-secondary" href="/features/">All features</a><a class="btn btn-secondary" href="/pricing/">Pricing</a></div></div></section>`,
};

module.exports = [privacy, terms, notFound];
