// Small HTML helpers shared by every page. No dependencies.
const { SITE, FEATURES, PLANS, COMPARISON, TESTIMONIALS, LOGOS } = require('./content/site');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const btn = (label, href, kind = 'primary', extra = '') =>
  `<a class="btn btn-${kind}" href="${href}" ${extra}>${esc(label)}</a>`;

const ctaPair = (primary = SITE.cta.primary, secondary = SITE.cta.secondary) =>
  `<div class="cta-pair">${btn(primary.label, primary.href)}${btn(secondary.label, secondary.href, 'secondary')}</div>`;

// ---------- Icons (inline SVG, currentColor) ----------
const ICONS = {
  check: '<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M7.6 13.2 4.4 10l-1.4 1.4 4.6 4.6 10-10L16.2 4.6z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8M8 12h5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
  radar: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v9l6 4"/></svg>',
  brain: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3h3V4zM15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3h-3V4z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  plug: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  flag: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 21V4h11l-2 4 2 4H6"/></svg>',
  users: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M15 20a4.5 4.5 0 0 1 7 0"/></svg>',
  timeline: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3v18"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M14 7h6M4 17h6"/></svg>',
  target: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 20h8"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.1.9 1.9v.2h5.2v-.2c0-.8.3-1.4.9-1.9A6 6 0 0 0 12 3z"/></svg>',
  mic: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  note: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
  book: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h7z"/></svg>',
  arrow: '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M11 4l6 6-6 6-1.4-1.4L13.2 11H3V9h10.2L9.6 5.4z"/></svg>',
};

// ---------- Sections ----------
const section = (inner, opts = {}) => {
  const cls = ['section', opts.tint ? `section-${opts.tint}` : '', opts.cls || ''].filter(Boolean).join(' ');
  return `<section class="${cls}"${opts.id ? ` id="${opts.id}"` : ''}><div class="container">${inner}</div></section>`;
};

const sectionHead = (eyebrow, title, sub) =>
  `<div class="section-head">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}<h2>${title}</h2>${sub ? `<p class="sub">${sub}</p>` : ''}</div>`;

const hero = ({ eyebrow, title, sub, mock, cta = true, cls = '' }) => `
<section class="hero ${cls}"><div class="container hero-grid">
  <div class="hero-copy">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h1>${title}</h1>
    <p class="lead">${sub}</p>
    ${cta ? ctaPair() : ''}
  </div>
  ${mock ? `<div class="hero-mock">${mock}</div>` : ''}
</div></section>`;

const proofBar = (items) =>
  `<div class="proof-bar"><div class="container"><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div></div>`;

const logoBar = (title = 'Trusted by teams that cancelled the stand-up') =>
  `<div class="logo-bar"><div class="container"><p>${esc(title)}</p><ul>${LOGOS.map((l) => `<li>${esc(l)}</li>`).join('')}</ul></div></div>`;

const cardGrid = (cards, cols = 3) =>
  `<div class="card-grid cols-${cols}">${cards
    .map(
      (c) => `<div class="card">
    ${c.icon ? `<div class="card-icon">${ICONS[c.icon] || ''}</div>` : ''}
    <h3>${c.href ? `<a href="${c.href}">${esc(c.title)}</a>` : esc(c.title)}</h3>
    <p>${c.body}</p>
    ${c.meta ? `<p class="card-meta">${esc(c.meta)}</p>` : ''}
    ${c.href ? `<a class="card-link" href="${c.href}">${esc(c.linkLabel || 'Learn how it works')} ${ICONS.arrow}</a>` : ''}
  </div>`
    )
    .join('')}</div>`;

const featureRow = ({ title, body, bullets = [], mock, flip = false, href, linkLabel }) => `
<div class="feature-row ${flip ? 'flip' : ''}">
  <div class="feature-copy">
    <h3>${title}</h3>
    <p>${body}</p>
    ${bullets.length ? `<ul class="checks">${bullets.map((b) => `<li>${ICONS.check}<span>${b}</span></li>`).join('')}</ul>` : ''}
    ${href ? `<a class="card-link" href="${href}">${esc(linkLabel || 'Learn more')} ${ICONS.arrow}</a>` : ''}
  </div>
  <div class="feature-visual">${mock || ''}</div>
</div>`;

const faq = (items, opts = {}) =>
  `<div class="faq">${opts.title ? sectionHead(opts.eyebrow || 'FAQ', opts.title, opts.sub) : ''}<div class="faq-list">${items
    .map(
      (q, i) => `<details class="faq-item"${opts.openFirst && i === 0 ? ' open' : ''}><summary>${esc(q.q)}</summary><div class="faq-a">${q.a}</div></details>`
    )
    .join('')}</div></div>`;

const ctaBand = ({ title = 'Give every team 1,000 hours back this year.', sub = '14-day free trial with full Business features. No credit card. First brief within 24 hours.', tone = 'navy' } = {}) =>
  `<section class="cta-band cta-${tone}"><div class="container"><h2>${title}</h2><p>${sub}</p>${ctaPair()}</div></section>`;

const testimonials = (list = TESTIMONIALS.slice(0, 3)) =>
  `<div class="testimonials">${list
    .map(
      (t) => `<figure class="testimonial">
    <blockquote>“${esc(t.quote)}”</blockquote>
    <figcaption><span class="avatar">${esc(t.name.split(' ').map((n) => n[0]).join(''))}</span><div><strong>${esc(t.name)}</strong><br><span>${esc(t.title)}</span></div></figcaption>
    ${t.result ? `<p class="result">${esc(t.result)}</p>` : ''}
  </figure>`
    )
    .join('')}</div>`;

const pricingCards = () =>
  `<div class="pricing-grid">${PLANS.map(
    (p) => `<div class="plan ${p.highlight ? 'plan-highlight' : ''}" data-plan="${p.id}">
    ${p.highlight ? '<span class="plan-badge">Most popular</span>' : ''}
    <h3>${esc(p.name)}</h3>
    <p class="plan-tagline">${esc(p.tagline)}</p>
    <div class="plan-price">${
      p.monthly
        ? `<span class="price" data-monthly="$${p.monthly}" data-annual="$${Math.round(p.annual / 12)}">$${p.monthly}</span><span class="per">/month</span><p class="plan-billing" data-monthly="Billed monthly. Up to ${p.seats} seats." data-annual="Billed $${p.annual.toLocaleString('en-US')}/year — 2 months free. Up to ${p.seats} seats.">Billed monthly. Up to ${p.seats} seats.</p>`
        : `<span class="price">Custom</span><p class="plan-billing">Annual contract. 100+ seats.</p>`
    }</div>
    ${btn(p.cta.label, p.cta.href, p.highlight ? 'primary' : 'secondary', 'style="width:100%"')}
    <ul class="checks">${p.features.map((f) => `<li>${ICONS.check}<span>${esc(f)}</span></li>`).join('')}</ul>
    ${p.extraSeat ? `<p class="plan-extra">Extra seats: $${p.extraSeat}/seat/month</p>` : '<p class="plan-extra">Seats negotiated in contract</p>'}
  </div>`
  ).join('')}</div>`;

const comparisonTable = () =>
  `<div class="table-wrap"><table class="compare"><thead><tr><th>Feature</th><th>Team</th><th>Business</th><th>Enterprise</th></tr></thead><tbody>${COMPARISON.map(
    (r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${c === '✓' ? `<span class="yes">${ICONS.check}<span class="sr">Included</span></span>` : c === '—' ? '<span class="no">—</span>' : esc(c)}</td>`).join('')}</tr>`
  ).join('')}</tbody></table></div>`;

const relatedFeatures = (slugs) =>
  cardGrid(
    slugs
      .map((s) => FEATURES.find((f) => f.slug === s))
      .filter(Boolean)
      .map((f) => ({ title: f.name, body: f.short, meta: f.plan, href: `/features/${f.slug}/` })),
    3
  );

// ---------- Product mocks (pure HTML/CSS) ----------
const mockChat = (
  msgs = [
    { who: 'you', text: 'What changed on Project Atlas this week, and are we still on track for the Q3 activation KR?' },
    {
      who: 'bren',
      text: 'Three things changed. Billing migration shipped Tuesday (PR #412). The DPA review is blocked on Legal since Thursday — Sam is out until Monday. The activation KR is at 61% of target with 5 weeks left; on current pace you land at ~88%.',
      sources: ['Jira ATL-118', 'Slack #atlas', 'Google Calendar', 'OKR Q3-02'],
    },
  ]
) => `<div class="mock mock-chat">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Ask Bren</span></div>
  <div class="mock-body">${msgs
    .map(
      (m) => `<div class="msg msg-${m.who}"><div class="bubble">${esc(m.text)}${
        m.sources ? `<div class="sources">${m.sources.map((s) => `<span>${esc(s)}</span>`).join('')}</div>` : ''
      }</div></div>`
    )
    .join('')}
  <div class="mock-input"><span>Ask anything about work…</span></div></div></div>`;

const mockDigest = ({ title = 'Daily digest · Platform team', items } = {}) => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">${esc(title)}</span></div>
  <div class="mock-body">
    ${(items || [
      { tag: 'win', text: 'Billing migration shipped. Manager marked win.' },
      { tag: 'flag', text: 'DPA review blocked on Legal 3 days. Owner out until Mon.' },
      { tag: 'note', text: '4 of 5 updates posted. Missing: Jordan (on leave).' },
      { tag: 'okr', text: 'Q3 activation KR at 61%. Pace: ~88% by quarter end.' },
    ])
      .map((i) => `<div class="digest-item"><span class="tag tag-${i.tag}">${i.tag}</span><span>${esc(i.text)}</span></div>`)
      .join('')}
  </div></div>`;

const mockTimeline = () => `<div class="mock mock-timeline">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Work Timeline · Project Atlas</span></div>
  <div class="mock-body tl">
    <div class="tl-col"><p class="tl-head">Updates</p>
      <div class="tl-item"><time>Mon</time>Kickoff; scope agreed in #atlas</div>
      <div class="tl-item"><time>Tue</time>PR #412 merged — billing migration</div>
      <div class="tl-item"><time>Thu</time>DPA review requested from Legal</div>
      <div class="tl-item"><time>Fri</time>Status: ongoing · 2 clarifications</div>
    </div>
    <div class="tl-col"><p class="tl-head">Wins & failures</p>
      <div class="tl-item win">Migration shipped 2 days early</div>
      <div class="tl-item fail">Legal review slipping — owner on leave</div>
    </div>
  </div></div>`;

const mockBrief = () => `<div class="mock mock-brief">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Monday Morning Brief · Elena (COO)</span></div>
  <div class="mock-body">
    <p class="brief-h">Last week</p><p>3 projects advanced, 1 slipped (Atlas — legal review). Support backlog down 18%.</p>
    <p class="brief-h">Watch this week</p><p>Two of three Atlas owners on leave Wed–Fri. Activation KR needs 2 more launches to stay on pace.</p>
    <p class="brief-h">Block time for</p><p>Q4 planning input due Thu · Board deck review · 1:1 with Priya (asked for a decision on hiring)</p>
  </div></div>`;

const mockStandup = () => `<div class="mock mock-chat">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Slack · #platform-standup</span></div>
  <div class="mock-body">
    <div class="msg msg-bren"><div class="bubble">Morning, Sam. Two tasks moved yesterday — want me to draft your update?</div></div>
    <div class="msg msg-you"><div class="bubble">Shipped the billing migration (ATL-118). Started the DPA review with Legal — waiting on Sam K. Next: load test on Thursday.</div></div>
    <div class="msg msg-bren"><div class="bubble">Filed against ATL-118 and ATL-121. I flagged the Legal dependency to Priya. ✅</div></div>
  </div></div>`;

const mockOKR = () => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">OKR · Q3 Activation</span></div>
  <div class="mock-body">
    <div class="okr"><div class="okr-row"><span>KR1 · Activation rate 35% → 45%</span><span>61%</span></div><div class="bar"><i style="width:61%"></i></div></div>
    <div class="okr"><div class="okr-row"><span>KR2 · Time-to-value under 3 days</span><span>84%</span></div><div class="bar"><i style="width:84%"></i></div></div>
    <div class="okr"><div class="okr-row"><span>KR3 · 4 launches shipped</span><span>50%</span></div><div class="bar warn"><i style="width:50%"></i></div></div>
    <div class="digest-item"><span class="tag tag-flag">flag</span><span>KR3 needs 2 launches in 5 weeks; Atlas owner capacity is the constraint.</span></div>
  </div></div>`;

const mockPermissions = () => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Project Atlas · Visibility</span></div>
  <div class="mock-body perm">
    <label class="perm-opt on"><span class="radio"></span><div><strong>Participatory</strong><small>Owners, participants and their managers</small></div></label>
    <label class="perm-opt"><span class="radio"></span><div><strong>Public</strong><small>Everyone in the company</small></div></label>
    <label class="perm-opt"><span class="radio"></span><div><strong>Selective</strong><small>Participatory + people or teams you add</small></div></label>
    <p class="perm-note">Mirrors Jira project and Slack channel permissions. Re-checked every sync.</p>
  </div></div>`;

const mockLedger = () => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Wins & Losses · Platform team · September</span></div>
  <div class="mock-body">
    <div class="digest-item"><span class="tag tag-win">win</span><span>Billing migration — 2 days early</span></div>
    <div class="digest-item"><span class="tag tag-win">win</span><span>Support backlog under 50 for first time</span></div>
    <div class="digest-item"><span class="tag tag-fail">fail</span><span>SSO rollout — pushed to October</span></div>
    <div class="digest-item"><span class="tag tag-note">postponed</span><span>Data-platform migration</span></div>
    <div class="digest-item"><span class="tag tag-okr">streak</span><span>Team posted 19/20 updates this month</span></div>
  </div></div>`;

const mockNotes = () => `<div class="mock mock-brief">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Private notes · only you</span></div>
  <div class="mock-body">
    <p class="brief-h">1:1 with Jordan — 12 Sep</p><p>Wants to move toward platform work in Q4. Ask about the mentoring slot with Priya.</p>
    <p class="brief-h">Self</p><p>Stop taking the 4pm sync. Ask Bren for the summary instead.</p>
    <p class="perm-note">🔒 Encrypted per workspace. Not visible to admins. Excluded from AI summaries.</p>
  </div></div>`;

const mockPulse = () => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Leadership Pulse · Q3 so far</span></div>
  <div class="mock-body">
    <div class="pulse-grid">
      <div class="pulse"><small>Momentum</small><strong>↑ 12%</strong></div>
      <div class="pulse"><small>OKRs on pace</small><strong>7 / 9</strong></div>
      <div class="pulse"><small>Red flags open</small><strong>3</strong></div>
      <div class="pulse"><small>Meetings cancelled</small><strong>41</strong></div>
    </div>
    <div class="digest-item"><span class="tag tag-flag">flag</span><span>Sales-eng capacity: 3 projects share one owner.</span></div>
    <div class="digest-item"><span class="tag tag-note">town hall</span><span>Suggested topic: hiring plan — 14 updates mention it.</span></div>
  </div></div>`;

const mockMeeting = () => `<div class="mock mock-brief">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Meeting snapshot · Atlas weekly (Zoom)</span></div>
  <div class="mock-body">
    <p class="brief-h">Decisions</p><p>Ship v1 without SSO; SSO moves to October.</p>
    <p class="brief-h">Actions</p><p>Priya: confirm Legal timeline · Sam: load test Thu · Jordan: update runbook</p>
    <p class="brief-h">Added to</p><p>Project Atlas timeline · Priya's daily digest · Q3 activation KR</p>
  </div></div>`;

const mockThink = () => `<div class="mock mock-chat">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Think Out Loud</span></div>
  <div class="mock-body">
    <div class="msg msg-you"><div class="bubble">What if we moved onboarding to a self-serve flow next quarter?</div></div>
    <div class="msg msg-bren"><div class="bubble">Two things from context: Larkspur's self-serve pilot in Q1 raised activation 9 points but support tickets rose 30% in week one. Which matters more for Q4 — activation or support load? And should this ride on Project Atlas or be its own project?</div></div>
    <div class="msg msg-you"><div class="bubble">Activation. Own project.</div></div>
    <div class="msg msg-bren"><div class="bubble">Drafted a one-page brief with the pilot data and 3 open questions. Share to #product?</div></div>
  </div></div>`;

const mockSecondBrain = () => `<div class="mock mock-brief">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Second Brain · Payments team · new-hire view</span></div>
  <div class="mock-body">
    <p class="brief-h">Jan</p><p>Team formed. Chose Stripe over Adyen (decision doc).</p>
    <p class="brief-h">Apr</p><p>First migration attempt rolled back — post-mortem, 3 lessons.</p>
    <p class="brief-h">Jul</p><p>Project Atlas kicked off; owners Priya, Sam, Jordan.</p>
    <p class="brief-h">This week</p><p>Billing migration shipped. Open: DPA review with Legal.</p>
  </div></div>`;

const mockYear = () => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Year in Review · 2026 · Engineering</span></div>
  <div class="mock-body">
    <div class="pulse-grid">
      <div class="pulse"><small>OKRs achieved</small><strong>11 / 14</strong></div>
      <div class="pulse"><small>Projects shipped</small><strong>27</strong></div>
      <div class="pulse"><small>Wins marked</small><strong>142</strong></div>
      <div class="pulse"><small>Stand-up hours saved</small><strong>3,900</strong></div>
    </div>
    <div class="digest-item"><span class="tag tag-win">top win</span><span>Billing platform migration — zero downtime</span></div>
    <div class="digest-item"><span class="tag tag-fail">top loss</span><span>SSO rollout slipped two quarters</span></div>
  </div></div>`;

const mockOrg = () => `<div class="mock mock-digest">
  <div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="mock-title">Org · Engineering</span></div>
  <div class="mock-body org">
    <div class="org-node root">Engineering · Priya (VP)</div>
    <div class="org-children">
      <div class="org-node">Platform · Sam (lead) · 6</div>
      <div class="org-node">Payments · Jordan (lead) · 5</div>
      <div class="org-node">Data · Mei (lead) · 4</div>
    </div>
    <p class="perm-note">Mentor link: Mei ↔ Jordan (not reporting). Imported from Slack user groups.</p>
  </div></div>`;

const MOCKS = { mockChat, mockDigest, mockTimeline, mockBrief, mockStandup, mockOKR, mockPermissions, mockLedger, mockNotes, mockPulse, mockMeeting, mockThink, mockSecondBrain, mockYear, mockOrg };

// ---------- Feature page template ----------
const featurePage = (f) => {
  const reg = FEATURES.find((x) => x.slug === f.slug);
  const body = `
${hero({ eyebrow: `${reg.name} · ${reg.plan}`, title: f.title, sub: f.sub, mock: f.mock })}
${section(
  `<div class="two-col"><div><p class="eyebrow">The problem</p><h2>${f.problem.title}</h2></div><div class="prose">${f.problem.body}</div></div>`,
  { tint: 'warm' }
)}
${section(
  `${sectionHead('How Bren does it', f.how.title, f.how.sub)}${cardGrid(f.how.blocks, f.how.blocks.length === 4 ? 2 : 3)}`
)}
${section(
  `${sectionHead('Who it is for', f.who.title)}${cardGrid(f.who.cards, 3)}`,
  { tint: 'grey' }
)}
${section(faq(f.faq, { title: `${reg.name}: the details`, eyebrow: 'FAQ' }))}
${section(`${sectionHead('Related', 'Works with')}${relatedFeatures(f.related)}`, { tint: 'grey' })}
${ctaBand(f.cta || {})}`;
  return {
    path: `features/${f.slug}/`,
    title: `${reg.name} — ${f.metaTitle || reg.short}`,
    description: f.description,
    body,
  };
};

module.exports = {
  esc, btn, ctaPair, ICONS, section, sectionHead, hero, proofBar, logoBar, cardGrid, featureRow, faq, ctaBand,
  testimonials, pricingCards, comparisonTable, relatedFeatures, featurePage, ...MOCKS,
};
