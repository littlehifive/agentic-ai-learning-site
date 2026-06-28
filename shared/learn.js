/* Learning-pattern interactivity for the agentic-AI deck.
   Generic, click-only delegation. Pairs with learn.css. Loaded after anim.js.
   Never prevents default on nav keys; the per-slide postMessage script owns those. */
(function () {
  function closest(el, sel) { return el && el.closest ? el.closest(sel) : null; }

  document.addEventListener('click', function (e) {
    var t = e.target;

    // D1 — Q&A flip: click a card toggles its answer open.
    var qa = closest(t, '.qa-card');
    if (qa) { qa.classList.toggle('is-open'); return; }

    // D2 — step build: click a numbered dot (or a step) moves the current highlight.
    var dot = closest(t, '.bc-dot');
    var stepHit = dot || closest(t, '.bc-step');
    if (stepHit) {
      var build = closest(stepHit, '.build');
      var n = stepHit.getAttribute('data-step');
      if (build && n != null) {
        build.querySelectorAll('.bc-step').forEach(function (s) {
          s.classList.toggle('is-current', s.getAttribute('data-step') === n);
        });
        build.querySelectorAll('.bc-dot').forEach(function (d) {
          d.classList.toggle('is-current', d.getAttribute('data-step') === n);
        });
      }
      return;
    }

    // D3 — tabbed compare: click a tab shows its panel.
    var tab = closest(t, '.cmp-tab');
    if (tab) {
      var cmp = closest(tab, '.cmp');
      var p = tab.getAttribute('data-panel');
      if (cmp) {
        cmp.querySelectorAll('.cmp-tab').forEach(function (x) { x.classList.toggle('is-active', x === tab); });
        cmp.querySelectorAll('.cmp-panel').forEach(function (panel) {
          panel.classList.toggle('is-shown', panel.getAttribute('data-panel') === p);
        });
      }
      return;
    }

    // D4 — explain-on-click: click a hot zone updates the caption.
    var hot = closest(t, '.hot');
    if (hot && hot.hasAttribute('data-explain')) {
      var wrap = closest(hot, '.diagram-wrap') || document;
      wrap.querySelectorAll('.hot').forEach(function (h) { h.classList.toggle('is-active', h === hot); });
      var cap = wrap.querySelector('.explain-caption .cap');
      if (cap) cap.textContent = hot.getAttribute('data-explain');
      return;
    }
  });

  // D4 — also update caption on hover (pointer devices); leaves the default caption for static/print.
  document.addEventListener('mouseover', function (e) {
    var hot = closest(e.target, '.hot');
    if (hot && hot.hasAttribute('data-explain')) {
      var wrap = closest(hot, '.diagram-wrap') || document;
      wrap.querySelectorAll('.hot').forEach(function (h) { h.classList.toggle('is-active', h === hot); });
      var cap = wrap.querySelector('.explain-caption .cap');
      if (cap) cap.textContent = hot.getAttribute('data-explain');
    }
  });
})();
