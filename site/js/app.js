(() => {
  'use strict';

  const BASE = '/snapple-facts';
  const PAGE_SIZE = 30;

  /** @type {{number:number, fact:string}[]} */
  let FACTS = [];
  /** @type {{number:number, fact:string}[]} */
  let visibleResults = [];
  let renderedCount = 0;
  let currentQuery = '';
  let currentFactNumber = null;

  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  const els = {
    root: document.documentElement,
    themeToggle: $('#theme-toggle'),
    cap: $('#get-fact'),
    factNumber: $('#fact-number'),
    factText: $('#fact-text'),
    factCard: $('#fact-card'),
    copyBtn: $('#copy-fact'),
    shareBtn: $('#share-fact'),
    tweetLink: $('#tweet-fact'),
    factOfDayBtn: $('#fact-of-day'),
    search: $('#search'),
    jumpNumber: $('#jump-number'),
    resultsSummary: $('#results-summary'),
    factList: $('#fact-list'),
    factListEmpty: $('#fact-list-empty'),
    emptyQuery: $('#empty-query'),
    loadMore: $('#load-more'),
    statCount: $('#stat-count'),
    statCountBrowse: $('#stat-count-browse'),
    toast: $('#toast'),
  };

  /* ---------------- theme ---------------- */
  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      els.root.setAttribute('data-theme', theme);
    } else {
      els.root.removeAttribute('data-theme');
    }
    const isDark = theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    els.themeToggle?.setAttribute('aria-pressed', String(isDark));
  }

  function initTheme() {
    const stored = localStorage.getItem('sf-theme');
    applyTheme(stored);
    els.themeToggle?.addEventListener('click', () => {
      const isDark = els.root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      localStorage.setItem('sf-theme', next);
      applyTheme(next);
    });
  }

  /* ---------------- toast ---------------- */
  let toastTimer = null;
  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('is-visible'), 2200);
  }

  /* ---------------- data loading ---------------- */
  async function loadFacts() {
    const res = await fetch(`${BASE}/data/facts.json`, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`Failed to load facts.json: ${res.status}`);
    FACTS = await res.json();

    const countStr = FACTS.length.toLocaleString('en-US');
    if (els.statCount) els.statCount.textContent = countStr;
    if (els.statCountBrowse) els.statCountBrowse.textContent = countStr;
    // Fact numbers have gaps (retired/renumbered facts over the years), so the
    // highest valid number is not the same as the total fact count.
    if (els.jumpNumber) els.jumpNumber.max = String(maxFactNumber());
  }

  function maxFactNumber() {
    return FACTS.reduce((max, f) => Math.max(max, f.number), 0);
  }

  function getFactByNumber(number) {
    return FACTS.find(f => f.number === number);
  }

  /* ---------------- random / featured fact ---------------- */
  function pickRandomFact() {
    if (FACTS.length === 0) return null;
    if (FACTS.length === 1) return FACTS[0];
    let candidate;
    do {
      candidate = FACTS[Math.floor(Math.random() * FACTS.length)];
    } while (candidate.number === currentFactNumber);
    return candidate;
  }

  function factOfTheDay() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const index = dayOfYear % FACTS.length;
    return FACTS[index];
  }

  function displayFact(fact, { twist = true, updateHash = true, scrollIntoView = false } = {}) {
    if (!fact) return;
    currentFactNumber = fact.number;

    if (twist) {
      els.cap.classList.remove('is-twisting');
      // Force reflow so the animation can restart.
      void els.cap.offsetWidth;
      els.cap.classList.add('is-twisting');
    }

    els.factNumber.textContent = String(fact.number);
    els.factCard.style.opacity = '0';
    window.setTimeout(
      () => {
        els.factText.textContent = fact.fact;
        els.factCard.style.opacity = '1';
      },
      twist ? 140 : 0
    );

    els.copyBtn.disabled = false;
    if (navigator.share) {
      els.shareBtn.hidden = false;
      els.shareBtn.disabled = false;
    } else {
      els.shareBtn.hidden = true;
    }

    const shareUrl = `https://vaporjawn.dev/snapple-facts/#fact-${fact.number}`;
    const tweetText = `Real Fact #${fact.number}: ${fact.fact}`;
    els.tweetLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(shareUrl)}`;
    els.tweetLink.removeAttribute('aria-disabled');

    if (updateHash) {
      history.replaceState(null, '', `#fact-${fact.number}`);
    }
    if (scrollIntoView) {
      $('#random')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function currentFact() {
    return currentFactNumber != null ? getFactByNumber(currentFactNumber) : null;
  }

  function initFactControls() {
    els.cap.addEventListener('click', () => displayFact(pickRandomFact()));

    els.factOfDayBtn.addEventListener('click', () => displayFact(factOfTheDay()));

    els.copyBtn.addEventListener('click', async () => {
      const fact = currentFact();
      if (!fact) return;
      const text = `Real Fact #${fact.number}: ${fact.fact}`;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        showToast('Could not copy — try selecting the text manually.');
        return;
      }
      const idle = els.copyBtn.querySelector('[data-state="idle"]');
      const done = els.copyBtn.querySelector('[data-state="done"]');
      idle.hidden = true;
      done.hidden = false;
      showToast('Fact copied to clipboard');
      setTimeout(() => {
        idle.hidden = false;
        done.hidden = true;
      }, 1600);
    });

    els.shareBtn.addEventListener('click', async () => {
      const fact = currentFact();
      if (!fact || !navigator.share) return;
      try {
        await navigator.share({
          title: 'Snapple Facts',
          text: `Real Fact #${fact.number}: ${fact.fact}`,
          url: `https://vaporjawn.dev/snapple-facts/#fact-${fact.number}`,
        });
      } catch {
        /* user cancelled — nothing to do */
      }
    });
  }

  /* ---------------- browse / search ---------------- */
  /**
   * Appends `text` to `parent` as DOM nodes, wrapping any case-insensitive
   * match of `query` in a <mark>. Built with textContent/createElement only
   * (no innerHTML) so there is no HTML-injection surface, even though the
   * source data here is our own generated facts.json.
   */
  function appendHighlighted(parent, text, query) {
    if (!query) {
      parent.appendChild(document.createTextNode(text));
      return;
    }
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${escapedQuery})`, 'ig');
    let lastIndex = 0;
    let match;
    while ((match = re.exec(text))) {
      if (match.index > lastIndex) {
        parent.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      const mark = document.createElement('mark');
      mark.textContent = match[0];
      parent.appendChild(mark);
      lastIndex = match.index + match[0].length;
      if (match[0].length === 0) re.lastIndex++; // guard against zero-length matches
    }
    if (lastIndex < text.length) {
      parent.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
  }

  function runSearch(query) {
    currentQuery = query.trim();
    const q = currentQuery.toLowerCase();
    visibleResults = q ? FACTS.filter(f => f.fact.toLowerCase().includes(q) || String(f.number) === q) : FACTS;
    renderedCount = 0;
    els.factList.replaceChildren();
    renderNextBatch();
    updateSummary();
  }

  function updateSummary() {
    const total = visibleResults.length;
    els.factListEmpty.hidden = total !== 0;
    els.factList.hidden = total === 0;
    els.emptyQuery.textContent = currentQuery;

    if (total === 0) {
      els.resultsSummary.textContent = '';
    } else if (currentQuery) {
      els.resultsSummary.textContent = `${total.toLocaleString('en-US')} fact${total === 1 ? '' : 's'} match “${currentQuery}”`;
    } else {
      els.resultsSummary.textContent = `Showing ${Math.min(renderedCount, total).toLocaleString('en-US')} of ${total.toLocaleString('en-US')} facts`;
    }

    els.loadMore.hidden = renderedCount >= total;
  }

  function renderNextBatch() {
    const next = visibleResults.slice(renderedCount, renderedCount + PAGE_SIZE);
    const frag = document.createDocumentFragment();
    for (const f of next) {
      const li = document.createElement('li');

      const n = document.createElement('span');
      n.className = 'n';
      n.textContent = String(f.number);

      const p = document.createElement('p');
      appendHighlighted(p, f.fact, currentQuery);

      li.append(n, p);
      frag.appendChild(li);
    }
    els.factList.appendChild(frag);
    renderedCount += next.length;
    updateSummary();
  }

  let searchDebounce = null;
  function initBrowse() {
    els.search.addEventListener('input', () => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => runSearch(els.search.value), 120);
    });

    els.loadMore.addEventListener('click', renderNextBatch);

    els.jumpNumber.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const n = Number(els.jumpNumber.value);
      const fact = getFactByNumber(n);
      if (fact) {
        displayFact(fact, { scrollIntoView: true });
        els.jumpNumber.value = '';
      } else {
        showToast(`No fact #${n} — fact numbers run from 1 to ${maxFactNumber()}, with some gaps.`);
      }
    });

    runSearch('');
  }

  /* ---------------- keyboard shortcuts ---------------- */
  function isTypingTarget(el) {
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  }

  function initShortcuts() {
    document.addEventListener('keydown', e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(document.activeElement)) return;

      if (e.key === '/') {
        e.preventDefault();
        els.search.focus();
      } else if (e.key.toLowerCase() === 'r') {
        displayFact(pickRandomFact());
      } else if (e.key.toLowerCase() === 't') {
        els.themeToggle.click();
      }
    });
  }

  /* ---------------- code tabs ---------------- */
  function initCodeTabs() {
    const tabs = $$('.code-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)));
        $$('.code-panel').forEach(panel => {
          panel.hidden = panel.dataset.panel !== tab.dataset.tab;
        });
      });
    });

    $$('.copy-code').forEach(btn => {
      btn.addEventListener('click', async () => {
        const code = btn.previousElementSibling?.textContent ?? '';
        try {
          await navigator.clipboard.writeText(code);
          showToast('Copied to clipboard');
        } catch {
          showToast('Could not copy — try selecting the text manually.');
        }
      });
    });
  }

  /* ---------------- deep link on load ---------------- */
  function loadFromHash() {
    const match = /^#fact-(\d+)$/.exec(window.location.hash);
    if (!match) return false;
    const fact = getFactByNumber(Number(match[1]));
    if (!fact) return false;
    displayFact(fact, { twist: false, updateHash: false });
    return true;
  }

  /* ---------------- service worker ---------------- */
  function initServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`${BASE}/sw.js`, { scope: `${BASE}/` }).catch(() => {
        /* offline support is a bonus, not a requirement */
      });
    });
  }

  /* ---------------- boot ---------------- */
  async function init() {
    initTheme();
    initShortcuts();
    initCodeTabs();
    initServiceWorker();

    try {
      await loadFacts();
    } catch (err) {
      console.error(err);
      els.factText.textContent = 'Facts failed to load. Please refresh the page.';
      return;
    }

    initFactControls();
    initBrowse();

    if (!loadFromHash()) {
      displayFact(factOfTheDay(), { twist: false, updateHash: false });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
