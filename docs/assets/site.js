/* Bren site behaviour: nav, mega menu, tabs, pricing toggle, forms. No dependencies. */
(function () {
  'use strict';

  // Optional: point this at a Formspree / HubSpot Forms / any POST endpoint to receive submissions.
  // Leave empty to keep forms client-side only (thank-you state, nothing sent).
  var FORM_ENDPOINT = '';

  // ---- Mobile nav ----
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---- Features mega menu ----
  document.querySelectorAll('.has-menu').forEach(function (li) {
    var btn = li.querySelector('.menu-btn');
    var close = function () { li.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) { if (!li.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  });

  // ---- Tabs ----
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = root.querySelectorAll('.tab');
    var panels = root.querySelectorAll('.tab-panel');
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t, j) { t.setAttribute('aria-selected', i === j ? 'true' : 'false'); });
        panels.forEach(function (p, j) { p.hidden = i !== j; });
      });
    });
  });

  // ---- Pricing billing toggle ----
  var billing = document.querySelector('.billing-toggle');
  if (billing) {
    var setMode = function (mode) {
      billing.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === mode ? 'true' : 'false'); });
      document.querySelectorAll('[data-monthly][data-annual]').forEach(function (el) { el.textContent = el.dataset[mode]; });
    };
    billing.querySelectorAll('button').forEach(function (b) { b.addEventListener('click', function () { setMode(b.dataset.mode); }); });
    setMode('monthly');
  }

  // ---- Forms (signup / book-demo) ----
  var params = new URLSearchParams(location.search);
  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    var card = form.closest('.form-card');
    var plan = params.get('plan');
    var planField = form.querySelector('[name="plan"]');
    if (plan && planField) planField.value = plan;

    var showThanks = function () {
      if (card) card.classList.add('done');
      try { history.replaceState(null, '', location.pathname + '?thanks=1'); } catch (e) {}
      var t = card && card.querySelector('.thanks');
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    if (params.get('thanks') === '1') { if (card) card.classList.add('done'); }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (input) {
        var field = input.closest('.field');
        var valid = input.value.trim() !== '';
        if (valid && input.type === 'email') {
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
          // "work email" — reject the most common personal domains
          if (valid && input.dataset.work === '1') {
            var domain = input.value.trim().split('@')[1].toLowerCase();
            if (/^(gmail|yahoo|hotmail|outlook|icloud|aol|proton|protonmail)\./.test(domain)) valid = false;
          }
        }
        if (field) field.classList.toggle('error', !valid);
        if (!valid) ok = false;
      });
      if (!ok) { var first = form.querySelector('.field.error input, .field.error select'); if (first) first.focus(); return; }

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.page = location.pathname;
      data.submitted_at = new Date().toISOString();

      if (FORM_ENDPOINT) {
        fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
          .catch(function () {})
          .then(showThanks);
      } else {
        try { sessionStorage.setItem('bren:last-submission', JSON.stringify(data)); } catch (e) {}
        showThanks();
      }
    });
  });
})();
