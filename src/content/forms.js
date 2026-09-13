const c = require('../components');

const field = ({ name, label, type = 'text', required = true, placeholder = '', hint = '', options, work = false, rows }) => {
  const req = required ? 'required' : '';
  let input;
  if (options) {
    input = `<select id="${name}" name="${name}" ${req}><option value="">Select…</option>${options.map((o) => `<option value="${c.esc(o)}">${c.esc(o)}</option>`).join('')}</select>`;
  } else if (rows) {
    input = `<textarea id="${name}" name="${name}" rows="${rows}" ${req} placeholder="${c.esc(placeholder)}"></textarea>`;
  } else {
    input = `<input id="${name}" name="${name}" type="${type}" ${req} placeholder="${c.esc(placeholder)}" ${work ? 'data-work="1"' : ''} autocomplete="${type === 'email' ? 'email' : name === 'name' ? 'name' : name === 'company' ? 'organization' : 'off'}">`;
  }
  return `<div class="field"><label for="${name}">${c.esc(label)}${required ? '' : ' <span class="muted">(optional)</span>'}</label>${input}${hint ? `<p class="hint">${hint}</p>` : ''}<p class="err">${work ? 'Please use your work email address.' : 'This field is required.'}</p></div>`;
};

const TEAM_SIZES = ['1–14', '15–25', '26–50', '51–100', '101–250', '251–1,000', '1,000+'];
const TOOLS = ['Jira', 'Notion', 'Trello', 'Airtable', 'Monday.com', 'ClickUp', 'Asana (roadmap)', 'Linear (roadmap)', 'Spreadsheets / docs', 'None yet'];
const CHAT = ['Slack', 'Microsoft Teams', 'Both', 'Neither'];

const signup = {
  path: 'signup/',
  title: 'Start your 14-day free trial',
  description: 'Start a 14-day free trial of Bren. No credit card. Full Business features, up to 100 seats. Connect Slack or Teams and one project tool and see your first digest within 24 hours.',
  bodyClass: 'page-signup',
  body: `
<section class="form-page"><div class="container form-grid">
  <div class="form-aside">
    <p class="eyebrow">Free trial</p>
    <h1>Start your 14-day free trial.</h1>
    <p class="lead">No credit card. Full Business features, up to 100 seats. Connect Slack or Teams and one project tool and read your first digest within 24 hours.</p>
    <ul class="checks">
      <li>${c.ICONS.check}<span>Workspace link by email within minutes</span></li>
      <li>${c.ICONS.check}<span>Nothing is deleted when the trial ends — the workspace goes read-only for 30 days</span></li>
      <li>${c.ICONS.check}<span>Choose Team ($299/mo) or Business ($899/mo) whenever you are ready</span></li>
      <li>${c.ICONS.check}<span>SOC 2 Type II · no training on your data · permissions mirrored from your tools</span></li>
    </ul>
    <p class="switch">Prefer a walkthrough, or need SSO, SCIM or data residency? <a href="/book-demo/">Book a demo</a>.</p>
  </div>
  <div class="form-card">
    <form data-lead-form novalidate>
      <input type="hidden" name="form" value="signup">
      <input type="hidden" name="plan" value="">
      ${field({ name: 'name', label: 'Your name', placeholder: 'Priya Raman' })}
      ${field({ name: 'email', label: 'Work email', type: 'email', placeholder: 'priya@company.com', work: true, hint: 'We will send your workspace link here.' })}
      ${field({ name: 'company', label: 'Company', placeholder: 'Northwind Robotics' })}
      <div class="form-row">
        ${field({ name: 'team_size', label: 'People who would use Bren', options: TEAM_SIZES })}
        ${field({ name: 'chat', label: 'Chat tool', options: CHAT })}
      </div>
      ${field({ name: 'pm_tool', label: 'Project tool', options: TOOLS })}
      <button class="btn btn-primary" type="submit" style="width:100%">Create my workspace</button>
      <p class="form-fine">By continuing you agree to the <a href="/terms/">Terms</a> and <a href="/privacy/">Privacy Policy</a>. Already have a workspace? <a href="/signup/?login=1">Log in</a>.</p>
    </form>
    <div class="thanks" role="status">
      <div class="big">✅</div>
      <h2>Check your inbox.</h2>
      <p>Your workspace link is on its way. Install the Slack or Teams app first — the first digest lands within 24 hours of connecting one project tool.</p>
      <p class="muted">Bren is a fictional product; no email will actually be sent. This form exists to test the on-site assistant.</p>
      <p><a class="btn btn-secondary" href="/platform/">Read how the platform works</a></p>
    </div>
  </div>
</div></section>`,
};

const demo = {
  path: 'book-demo/',
  title: 'Book a demo',
  description: 'Book a 30-minute Bren demo. We will map your teams, tools and rollout, walk through security (SOC 2 Type II, SSO, SCIM, EU residency) and give you a pilot plan. Enterprise pricing on request.',
  bodyClass: 'page-demo',
  body: `
<section class="form-page"><div class="container form-grid">
  <div class="form-aside">
    <p class="eyebrow">Book a demo</p>
    <h1>See Bren on your org, not ours.</h1>
    <p class="lead">30 minutes with a product specialist. We will map your teams, tools and rollout, walk your security team through the controls, and leave you with a pilot plan.</p>
    <ul class="checks">
      <li>${c.ICONS.check}<span>Best for 100+ people, company-wide rollouts, or SSO / SCIM / EU residency / VPC requirements</span></li>
      <li>${c.ICONS.check}<span>SOC 2 Type II report and DPA available under NDA</span></li>
      <li>${c.ICONS.check}<span>Enterprise pricing quoted per company; Business and Team invoicing on annual plans</span></li>
      <li>${c.ICONS.check}<span>We confirm a time within one business day</span></li>
    </ul>
    <p class="switch">Want to try it first? <a href="/signup/">Start the free trial</a> — 14 days, no card, full Business features.</p>
  </div>
  <div class="form-card">
    <form data-lead-form novalidate>
      <input type="hidden" name="form" value="book-demo">
      <input type="hidden" name="plan" value="">
      <div class="form-row">
        ${field({ name: 'name', label: 'Your name', placeholder: 'Elena Marsh' })}
        ${field({ name: 'title', label: 'Role', placeholder: 'COO', required: false })}
      </div>
      ${field({ name: 'email', label: 'Work email', type: 'email', placeholder: 'elena@company.com', work: true })}
      <div class="form-row">
        ${field({ name: 'company', label: 'Company', placeholder: 'Orbital Freight' })}
        ${field({ name: 'seats', label: 'People who would use Bren', options: TEAM_SIZES })}
      </div>
      <div class="form-row">
        ${field({ name: 'chat', label: 'Chat tool', options: CHAT })}
        ${field({ name: 'pm_tool', label: 'Project tool', options: TOOLS })}
      </div>
      ${field({ name: 'needs', label: 'What do you need from the demo?', options: ['Rollout plan for several teams', 'Security review (SSO, SCIM, residency, VPC)', 'Enterprise pricing and invoicing', 'Leadership walkthrough (Monday Morning Brief, Leadership Pulse)', 'Integration questions', 'Something else'] })}
      ${field({ name: 'timeframe', label: 'When do you want this running?', options: ['This month', 'Next quarter', 'Later this year', 'Just exploring'] })}
      ${field({ name: 'notes', label: 'Anything else', required: false, rows: 3, placeholder: 'Tools, constraints, what you are trying to fix…' })}
      <button class="btn btn-primary" type="submit" style="width:100%">Request a time</button>
      <p class="form-fine">We use this only to arrange your demo. See the <a href="/privacy/">Privacy Policy</a>.</p>
    </form>
    <div class="thanks" role="status">
      <div class="big">📅</div>
      <h2>Thanks — we will confirm a time within one business day.</h2>
      <p>In the meantime, the <a href="/platform/#security">Security &amp; Trust</a> section covers the questions IT usually asks first.</p>
      <p class="muted">Bren is a fictional product; nobody will actually contact you. This form exists to test the on-site assistant.</p>
      <p><a class="btn btn-secondary" href="/signup/">Start the free trial while you wait</a></p>
    </div>
  </div>
</div></section>`,
};

module.exports = [signup, demo];
