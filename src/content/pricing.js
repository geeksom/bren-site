const c = require('../components');

const faqItems = [
  { q: 'Is there a free plan?', a: '<p>No. There is a 14-day free trial with full Business features and up to 100 seats, no credit card required. At the end of the trial the workspace goes read-only for 30 days; add a payment method to reactivate instantly.</p>' },
  { q: 'What counts as a seat?', a: '<p>Anyone with a Bren login or tracked as a team member (they post updates or have a timeline). Up to 5 email-only viewers — for example a board member who only receives Leadership Pulse — are free. Deactivated people do not count; their history stays.</p>' },
  { q: 'What happens if we go over the included seats?', a: '<p>Team: $12 per extra seat per month over 25. Business: $9 per extra seat per month over 100. Overage is billed monthly in arrears, pro-rated for the days over the limit. Admins are emailed at 90% and 100% of included seats — no surprise bills.</p>' },
  { q: 'We are 30 people. Team or Business?', a: '<p>Team at $299 + 5 × $12 = $359/month works. Business at $899 adds OKR tracking, red flags, Monday Morning Brief, Leadership Pulse, unlimited integrations and SAML SSO. Team is the cheaper option up to 50 seats; from 51 seats Business costs less.</p>' },
  { q: 'We are 120 people. Business or Enterprise?', a: '<p>Business at $899 + 20 × $9 = $1,079/month is fine if you do not need SCIM, data residency, audit logs, an SLA or a CSM. If you do, <a href="/book-demo/">book a demo</a> for an Enterprise quote.</p>' },
  { q: 'How does annual billing work?', a: '<p>Annual is paid up front and gives two months free: $2,990/year for Team, $8,990/year for Business. Seat overage on annual plans is billed monthly in arrears. Annual Business and Enterprise can be invoiced (NET-30); monthly plans are card only.</p>' },
  { q: 'Can I cancel anytime? Are there refunds?', a: '<p>Monthly plans can be cancelled anytime from Settings → Billing; access runs to the end of the paid period, no cancellation fee. There is a 30-day money-back guarantee on the first payment, monthly or annual. Annual plans are not refunded pro-rata after the first 30 days.</p>' },
  { q: 'What happens to our data if we cancel?', a: '<p>You can export everything (JSON/CSV) for 30 days. All data is deleted within 30 days of the end of the paid period; deletion certificate on request. Reactivating within 30 days restores everything.</p>' },
  { q: 'Can I upgrade or downgrade mid-cycle?', a: '<p>Upgrades are immediate and pro-rated. Downgrades take effect at the end of the current cycle; Business-only features become read-only, and integrations beyond five are paused (you choose which).</p>' },
  { q: 'Do you offer discounts?', a: '<p>20% off Team and Business for nonprofits, charities and educational institutions (verified), and for startups under three years old with less than $5M raised (first year). Not stackable with the annual discount — the larger one applies. No regional pricing; USD worldwide, taxes added where applicable.</p>' },
  { q: 'Is SSO extra?', a: '<p>SAML SSO (Okta, Microsoft Entra ID, Google, OneLogin, generic SAML) is included in Business and Enterprise. Team uses Google/Microsoft sign-in and magic links. SCIM provisioning is Enterprise only.</p>' },
  { q: 'What does Enterprise actually add, and what does it cost?', a: '<p>SCIM, audit logs, US or EU data residency, custom retention and legal hold, a private-VPC deployment option, API and custom integrations, multiple organisations under one contract, a dedicated CSM with onboarding workshop and QBRs, a 99.9% uptime SLA with credits, and DPA/MSA/security questionnaire with annual invoicing. Pricing is quoted per company and depends on seats, residency, VPC and custom work — <a href="/book-demo/">book a demo</a>.</p>' },
  { q: 'Do prices change at renewal?', a: '<p>Prices are locked for the term you paid for. We give 60 days\' notice of any change.</p>' },
  { q: 'Can we run a pilot before buying?', a: '<p>The trial supports a real pilot: 14 days, 100 seats, Business features, no card. Enterprise pilots — usually 30 days on one department with a CSM — are arranged via demo.</p>' },
];

const toggle = `<div style="text-align:center"><div class="billing-toggle" role="group" aria-label="Billing period"><button type="button" data-mode="monthly" aria-pressed="true">Monthly</button><button type="button" data-mode="annual" aria-pressed="false">Annual</button><span class="save">2 months free</span></div></div>`;

const seatMath = c.cardGrid(
  [
    { title: '10 people', body: 'Team: <strong>$299/month</strong>. Everything you need to replace the stand-up and give a founder or manager a daily digest.', meta: 'Team' },
    { title: '30 people', body: 'Team: $299 + 5 × $12 = <strong>$359/month</strong>. Or Business at $899 for OKRs, red flags, the Monday Morning Brief and SSO.', meta: 'Team or Business' },
    { title: '80 people', body: 'Business: <strong>$899/month</strong> — under $12 per person. Team would be $299 + 55 × $12 = $959, so Business is cheaper and does more.', meta: 'Business' },
    { title: '120 people', body: 'Business: $899 + 20 × $9 = <strong>$1,079/month</strong>. At 100+ most companies choose Enterprise for SCIM, residency, an SLA and a CSM.', meta: 'Business or Enterprise' },
  ],
  4
);

module.exports = {
  path: 'pricing/',
  title: 'Pricing — Team $299/mo, Business $899/mo, Enterprise custom',
  description: 'Bren pricing: Team $299/month for up to 25 seats, Business $899/month for up to 100 seats, Enterprise custom for 100+ with SCIM, data residency and a private-VPC option. 14-day free trial, no credit card. Annual billing: two months free.',
  body: `
${c.hero({
  eyebrow: 'Pricing',
  title: 'Flat pricing. No per-seat surprises.',
  sub: 'Pick a plan for your workspace. Every plan starts with a 14-day free trial of Business features — no credit card. Cancel anytime; 30-day money-back on your first payment.',
  cta: false,
  cls: 'hero-center',
})}
${c.section(`${toggle}${c.pricingCards()}<p class="muted" style="text-align:center;margin-top:20px">All prices in USD per workspace. Taxes added where applicable. Nonprofits, education and startups: 20% off.</p>`)}
${c.section(`${c.sectionHead('Which plan', 'Do the seat math.', 'Team is cheaper up to 50 seats; Business is cheaper from 51. Enterprise is for 100+ or formal security and procurement requirements.')}${seatMath}`, { tint: 'grey' })}
${c.section(`${c.sectionHead('Compare', 'Everything in each plan.')}${c.comparisonTable()}`)}
${c.section(
  `<div class="two-col"><div><p class="eyebrow">ROI</p><h2>Under $9 per person per month. One stand-up costs more.</h2></div><div class="prose">
    <p>A 12-person team spending 20 minutes a day in a stand-up burns roughly <strong>1,000 hours a year</strong> — about $60,000 at a blended $60/hour. Business for 100 people is $10,788/year monthly or $8,990/year annual.</p>
    <p>Bren's customers report cutting status meetings by 70% and taking new hires from five weeks to five days of ramp. Both numbers are fictional and consistent: Bren is a demonstration product.</p>
  </div></div>`,
  { tint: 'warm' }
)}
${c.section(c.faq(faqItems, { title: 'Billing, seats, trials and the fine print', eyebrow: 'Pricing FAQ' }))}
${c.ctaBand({ title: 'Start with a real pilot, not a sales call.', sub: '14 days, up to 100 seats, full Business features, no card. Or book a demo if you need SSO, SCIM, residency or a rollout plan.' })}
`,
};
