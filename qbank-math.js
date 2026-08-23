/*!
 * QBank Math Renderer
 * ------------------------------------------------------------------
 * Reusable LaTeX -> math rendering for QBank question banks.
 *
 * Powered by KaTeX (https://katex.org) via CDN - fast & lightweight.
 * Exposes a single namespace on `window`:
 *
 *   window.QMath.renderString(text, options)
 *
 * EXAMPLES
 * ------------------------------------------------------------------
 *   QMath.renderString("Solve $$x^2 - 4 = 0$$.", { math: true })
 *   QMath.renderString("The value of $x^2+3x$ is", { math: true })
 *
 * FEATURES
 * ------------------------------------------------------------------
 * - $...$   -> inline math (inside the sentence)
 * - $$...$$ -> display math (centered block)
 * - \$      -> literal dollar sign (never math)
 * - Safe auto-detection for questions WITHOUT a math flag, so plain
 *   existing QBank questions keep working unchanged. Financial text
 *   such as "$5 and $10" stays plain text.
 * - math: true  = the reliable path: every well-formed $...$ is LaTeX.
 * - math: false = disables math processing entirely.
 * - Falls back to escaped plain text when KaTeX cannot load
 *   (offline / blocked CDN) - nothing breaks, nothing throws.
 * - KaTeX default output includes hidden MathML for screen readers.
 * ------------------------------------------------------------------
 */
(function (global) {
  'use strict';

  var KATEX_VERSION = '0.16.11';
  var KATEX_CSS_URL =
    'https://cdn.jsdelivr.net/npm/katex@' + KATEX_VERSION + '/dist/katex.min.css';
  var KATEX_JS_URL =
    'https://cdn.jsdelivr.net/npm/katex@' + KATEX_VERSION + '/dist/katex.min.js';

  var scriptInjected = false;

  /* ------------------------------------------------------------------ */
  /* Small helpers                                                       */
  /* ------------------------------------------------------------------ */

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function hasKatex() {
    return !!(global.katex && typeof global.katex.renderToString === 'function');
  }

  /**
   * Lazily inject KaTeX assets if they are not already present.
   * Safe to call repeatedly - a no-op once loaded or attempted.
   */
  function loadKatex() {
    if (hasKatex() || scriptInjected) return;
    scriptInjected = true;
    try {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = KATEX_CSS_URL;
      document.head.appendChild(link);
    } catch (e) { /* ignore */ }
    try {
      var script = document.createElement('script');
      script.src = KATEX_JS_URL;
      script.async = true;
      script.defer = true;
      script.onerror = function () { scriptInjected = false; };
      document.head.appendChild(script);
    } catch (e) { /* ignore */ }
  }
/* ------------------------------------------------------------------ */
  /* Tokenizer: split a string into text / inline-math / display-math    */
  /* ------------------------------------------------------------------ */

  // Characters allowed directly before an opening `$` in auto-detect mode
  // (whitespace, open brackets, punctuation).
  var BREAK_OPEN = /[\s([{;:,'"\u2018\u201C*+\-/]/;
  // Characters allowed directly after a closing `$` in auto-detect mode.
  var BREAK_CLOSE = /[\s.,;:!?)\]}\-'"\u2019\u201D%*+]/;
  var WHITESPACE = /\s/;

  function isWhitespace(ch) {
    return ch !== undefined && WHITESPACE.test(ch);
  }

  /**
   * Split `text` into tokens.
   *
   * @param {string} text raw question/option/answer string
   * @param {string} mode 'flag' (explicit math:true, parse every
   *                      well-formed $...$), 'auto' (safe detection),
   *                      'off' (never parse)
   * @returns {Array<{type:string, value:string}>}
   */
  function tokenize(text, mode) {
    var tokens = [];
    var plain = '';
    var i = 0;
    var n = text.length;
    var strict = mode === 'flag';

    function flush() {
      if (plain !== '') {
        tokens.push({ type: 'text', value: plain });
        plain = '';
      }
    }

    while (i < n) {
      var ch = text.charAt(i);

      if (ch !== '$') {
        // A backslash-escaped dollar in normal text is a literal dollar.
        if (ch === '\\' && text.charAt(i + 1) === '$') {
          plain += '$';
          i += 2;
          continue;
        }
        plain += ch;
        i += 1;
        continue;
      }

      /* ---- display math: $$...$$ ---- */
      if (text.charAt(i + 1) === '$') {
        var closeIdx = text.indexOf('$$', i + 2);
        var rawContent = closeIdx === -1 ? '' : text.slice(i + 2, closeIdx);
        var trimmedContent = rawContent.trim();

        if (closeIdx === -1 || trimmedContent === '') {
          plain += '$$';
          i += 2;
          continue;
        }
        // Auto-detect: require a break (start/whitespace/newline) before
        // the opening $$ and a boundary after the closing $$, so double
        // dollar amounts stay plain text.
        if (!strict) {
          var openBefore = i > 0 ? text.charAt(i - 1) : ' ';
          var closeAfter = closeIdx + 2 < n ? text.charAt(closeIdx + 2) : ' ';
          if (!WHITESPACE.test(openBefore)) {
            plain += '$$';
            i += 2;
            continue;
          }
          if (!BREAK_CLOSE.test(closeAfter)) {
            plain += '$$';
            i += 2;
            continue;
          }
        }

        flush();
        tokens.push({ type: 'display', value: trimmedContent });
        i = closeIdx + 2;
        continue;
      }

      /* ---- inline math: $...$ ---- */
      // An opening $ must be followed by a non-whitespace char.
      if (i + 1 >= n || isWhitespace(text.charAt(i + 1))) {
        plain += ch;
        i += 1;
        continue;
      }
      // Auto-detect: the $ must start after a breakable char / start.
      if (!strict && i > 0 && !BREAK_OPEN.test(text.charAt(i - 1))) {
        plain += ch;
        i += 1;
        continue;
      }

      // Find closing single $ that is not the start of $$.
      var close2 = text.indexOf('$', i + 1);
      while (close2 !== -1 && text.charAt(close2 + 1) === '$') {
        close2 = text.indexOf('$', close2 + 2);
      }
      if (close2 === -1) {
        plain += ch;
        i += 1;
        continue;
      }

      var inlineContent = text.slice(i + 1, close2);
      // Closing $ must be preceded by non-whitespace; content non-empty.
      if (inlineContent === '' || isWhitespace(text.charAt(close2 - 1))) {
        plain += ch;
        i += 1;
        continue;
      }
      // Auto-detect: closing $ must be followed by a boundary / end.
      if (!strict) {
        var inlineAfter = close2 + 1 < n ? text.charAt(close2 + 1) : ' ';
        if (!BREAK_CLOSE.test(inlineAfter)) {
          plain += ch;
          i += 1;
          continue;
        }
      }

      flush();
      tokens.push({ type: 'inline', value: inlineContent });
      i = close2 + 1;
    }

    flush();
    return tokens;
  }

  /* ------------------------------------------------------------------ */
  /* Rendering                                                           */
  /* ------------------------------------------------------------------ */

  var KATEX_OPTS = {
    throwOnError: false, // invalid TeX renders as red text, never crashes
    strict: false, // ignore unknown-command warnings
    output: 'htmlAndMathml', // HTML + MathML for screen readers
    trust: false,
  };

  function renderToString(tex, display) {
    return global.katex.renderToString(tex, {
      displayMode: display,
      throwOnError: KATEX_OPTS.throwOnError,
      strict: KATEX_OPTS.strict,
      output: KATEX_OPTS.output,
      trust: KATEX_OPTS.trust,
    });
  }

  /**
   * Turn any QBank string (question / option / answer / explanation)
   * into safe HTML with math rendered by KaTeX.
   *
   * options = { math: boolean | undefined }
   *  - options.math === true     -> every well-formed $...$ is LaTeX
   *  - options.math === false     -> plain escaped text (no math)
   *  - options.math === undefined -> safe auto-detect
   */
  function renderString(text, options) {
    if (text === null || text === undefined) return '';
    text = String(text);
    options = options || {};

    // Fast path: no dollar signs at all -> pure text.
    if (text.indexOf('$') === -1) return escapeHtml(text);

    var mode;
    if (options.math === true) mode = 'flag';
    else if (options.math === false) return escapeHtml(text);
    else mode = 'auto';

    // Safety net: if KaTeX has not loaded (offline / blocked CDN),
    // render plain escaped text so the site always works.
    if (!hasKatex()) return escapeHtml(text);

    var tokens = tokenize(text, mode);
    if (tokens.length === 0) return escapeHtml(text);

    var out = '';
    for (var i = 0; i < tokens.length; i++) {
      var t = tokens[i];
      if (t.type === 'text') {
        out += escapeHtml(t.value);
        continue;
      }

      var renderedHtml;
      try {
        renderedHtml = renderToString(t.value, t.type === 'display');
      } catch (err) {
        // Extremely defensive: keep the original text visible.
        out += escapeHtml((t.type === 'display' ? '$$' : '$') + t.value + (t.type === 'display' ? '$$' : '$'));
        continue;
      }

      out +=
        '<span class="qbank-math' +
        (t.type === 'display' ? ' qbank-math-display' : '') +
        '" role="math">' +
        renderedHtml +
        '</span>';
    }
    return out;
  }

  /* ------------------------------------------------------------------ */
  /* Module export                                                       */
  /* ------------------------------------------------------------------ */

  var QMath = {
    version: '1.0.0',
    tokenize: tokenize,
    renderString: renderString,
    escapeHtml: escapeHtml,
    hasKatex: hasKatex,
    load: loadKatex,
  };

  if (typeof module !== 'undefined' && module.exports) {
    // Node.js export for tests / tooling
    module.exports = QMath;
  }
  global.QMath = QMath;
})(typeof window !== 'undefined' ? window : globalThis);