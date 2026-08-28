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
 * - Auto-repair of AI-generated single-backslash LaTeX: "$\frac{dy}{dx}$"
 *   renders exactly like "$\\frac{dy}{dx}$" without ever touching
 *   already-correct data (idempotent, math-region-only).
 * - Auto-repair of malformed AI LaTeX syntax: "fleft(...)", "dydx",
 *   "yn+1", "k1", "x2", "h/2" are repaired inside math regions per the
 *   surrounding mathematical context, leaving already-correct LaTeX and
 *   normal text untouched (idempotent, math-region-only).
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
  /* LaTeX repair layer (AI-generated single-backslash data)             */
  /* ------------------------------------------------------------------ */
  //
  // AI-generated quiz data is sometimes written with a SINGLE backslash:
  //     "$\frac{dy}{dx}$"
  // JavaScript string literals then treat part of the formula as escape
  // sequences while the file is parsed:
  //     \b \f \n \r \t \v  -> control characters (backspace / form-feed ...)
  //     any other letter    -> backslash silently dropped ("\sqrt" -> "sqrt")
  // This layer reconstructs the intended LaTeX at the rendering boundary.
  // It only acts on text that already sits inside a $...$ / $$...$$ math
  // region, and it is idempotent: already-correct data ("\\frac" -> the
  // real-string "\frac") is left byte-for-byte identical.

  // Control character produced by a lone '\X' escape -> the letter X.
  var LATEX_CONTROL = {
    '\x08': 'b', // \b  (backspace)
    '\x09': 't', // \t  (horizontal tab)
    '\x0A': 'n', // \n  (line feed)
    '\x0B': 'v', // \v  (vertical tab)
    '\x0C': 'f', // \f  (form feed)
    '\x0D': 'r', // \r  (carriage return)
  };

  // Commands whose FIRST letter is one of the JS escape letters. A damaged
  // copy shows up as the control character followed by the command minus its
  // first letter ("\frac" -> form-feed + "rac"). Sorted longest-first so
  // prefix pairs such as \tan vs \tanh resolve to the longest valid command.
  var LATEX_L1 = {
    b: ['bigtriangledown', 'bigtriangleup', 'bigotimes', 'bigsqcup', 'bigoplus',
      'bigwedge', 'bigodot', 'bigcap', 'bigcup', 'bigvee', 'bowtie', 'bullet',
      'bgroup', 'begin', 'biggl', 'biggr', 'binom', 'breve', 'bigl', 'bigr',
      'bmod', 'bigg', 'beta', 'big', 'bot', 'bar'],
    f: ['forall', 'frac', 'fbox', 'flat'],
    n: ['nrightarrow', 'nleftarrow', 'nsubseteq', 'nsupseteq', 'nparallel',
      'nsubset', 'nsupset', 'nexists', 'nearrow', 'nwarrow', 'ntimes',
      'nabla', 'notin', 'ngeq', 'nleq', 'nmid', 'neq', 'not', 'neg', 'nin',
      'ne', 'nu', 'ni'],
    r: ['rightleftharpoons', 'rightharpoondown', 'rightharpoonup',
      'rightrightarrows', 'restriction', 'rightarrow', 'rightleftarrow',
      'rfloor', 'rangle', 'rgroup', 'right', 'rceil', 'rvert', 'rVert',
      'rmoustache', 'rho'],
    t: ['triangleright', 'twoheadrightarrow', 'twoheadleftarrow',
      'triangleleft', 'textstyle', 'textbf', 'textit', 'texttt', 'textsf',
      'triangle', 'textrm', 'tfrac', 'theta', 'tilde', 'times', 'text',
      'tanh', 'tau', 'tan', 'top', 'to'],
    v: ['vartriangle', 'varsubsetneq', 'varnothing', 'varepsilon', 'vartheta',
      'varsigma', 'varpropto', 'veebar', 'varrho', 'varphi', 'vDash',
      'vdots', 'vdash', 'varpi', 'vert', 'vec', 'vee'],
  };

  // Commands whose FIRST letter is NOT a JS escape letter. A damaged copy
  // simply loses its backslash ("\sqrt" -> "sqrt"), so repair = detect the
  // bare word inside a math region and restore the backslash. Only words not
  // already preceded by a backslash are considered, which keeps correct
  // content and environment names (pmatrix, bmatrix, ...) untouched.
  var LATEX_L2 = {
    // Greek letters
    alpha: 1, gamma: 1, Gamma: 1, delta: 1, Delta: 1, epsilon: 1,
    zeta: 1, eta: 1, iota: 1, kappa: 1, lambda: 1, Lambda: 1, mu: 1,
    xi: 1, Xi: 1, pi: 1, Pi: 1, sigma: 1, Sigma: 1, upsilon: 1,
    Upsilon: 1, phi: 1, Phi: 1, chi: 1, psi: 1, Psi: 1, omega: 1,
    Omega: 1,
    // functions and operators
    sin: 1, sinh: 1, cos: 1, cosh: 1, cot: 1, coth: 1, sec: 1, csc: 1,
    arcsin: 1, arccos: 1, arctan: 1, arg: 1, deg: 1, det: 1, dim: 1,
    exp: 1, gcd: 1, hom: 1, ker: 1, lg: 1, ln: 1, log: 1, lim: 1,
    liminf: 1, limsup: 1, max: 1, min: 1, inf: 1, sup: 1, mod: 1,
    pmod: 1, prod: 1, sum: 1, int: 1, iint: 1, iiint: 1, oint: 1,
    idotsint: 1, partial: 1, infty: 1, prime: 1, operatorname: 1,
    // symbols and relations
    pm: 1, mp: 1, div: 1, cdot: 1, cdots: 1, ldots: 1, ddots: 1, dots: 1,
    le: 1, ge: 1, leq: 1, geq: 1, equiv: 1, sim: 1, simeq: 1, cong: 1,
    approx: 1, asymp: 1, propto: 1, prec: 1, succ: 1, preceq: 1,
    succeq: 1, in: 1, subset: 1, supset: 1, subseteq: 1, supseteq: 1,
    sqsubset: 1, sqsupset: 1, sqsubseteq: 1, sqsupseteq: 1, ll: 1, gg: 1,
    mid: 1, parallel: 1, perp: 1, models: 1, dashv: 1, doteq: 1,
    coloneqq: 1,
    // arrows
    leftarrow: 1, Leftarrow: 1, leftrightarrow: 1, Leftrightarrow: 1,
    uparrow: 1, Uparrow: 1, downarrow: 1, Downarrow: 1, updownarrow: 1,
    Updownarrow: 1, mapsto: 1, hookrightarrow: 1, hookleftarrow: 1,
    searrow: 1, swarrow: 1, longrightarrow: 1, longleftarrow: 1,
    longleftrightarrow: 1, Longrightarrow: 1, Longleftarrow: 1,
    Longleftrightarrow: 1, implies: 1, iff: 1, Rightarrow: 1,
    // roots, fractions, accents, delimiters
    sqrt: 1, surd: 1, dfrac: 1, cfrac: 1, sfrac: 1, dot: 1, ddot: 1,
    hat: 1, check: 1, acute: 1, grave: 1, widehat: 1, widetilde: 1,
    overline: 1, underline: 1, overbrace: 1, underbrace: 1, overset: 1,
    underset: 1, lfloor: 1, lceil: 1, langle: 1, lvert: 1, lVert: 1,
    lgroup: 1, lmoustache: 1, left: 1, right: 1, end: 1, exists: 1, lnot: 1,
    // sizing and math-font switches
    Big: 1, Bigg: 1, Bigl: 1, Bigr: 1, Biggl: 1, Biggr: 1, Vert: 1,
    displaystyle: 1, mathbb: 1, mathbf: 1, mathcal: 1, mathrm: 1,
    mathit: 1, mathtt: 1, mathsf: 1,
    // sets, operators, misc symbols
    cap: 1, cup: 1, uplus: 1, sqcap: 1, sqcup: 1, oplus: 1, ominus: 1,
    otimes: 1, oslash: 1, odot: 1, dagger: 1, ddagger: 1, ast: 1,
    star: 1, circ: 1, wedge: 1, land: 1, lor: 1, coprod: 1, setminus: 1,
    square: 1, complement: 1, intercal: 1, angle: 1, choose: 1, atop: 1,
    wp: 1, aleph: 1, hbar: 1, imath: 1, jmath: 1, ell: 1, Re: 1, Im: 1,
    emptyset: 1, sharp: 1, natural: 1, diamond: 1, diamondsuit: 1,
    clubsuit: 1, heartsuit: 1, spadesuit: 1, xrightarrow: 1,
    xleftarrow: 1,
  };

  var CONTROL_CHARS = /[\x08\x09\x0A\x0B\x0C\x0D]/;
  var BARE_WORD_RE = /(^|[^A-Za-z\\])([A-Za-z]+)/g;

  /** Match a damaged control-char command. Returns {name, splitRun} or null.
   *  `splitRun` is a trailing letter-run that is itself a known command, so
   *  "\to\infty" (damaged to control-char + "oinfty") is repaired as two
   *  commands instead of the unknown word "\toinfty". */
  function matchControlCommand(letter, rest) {
    var cmds = LATEX_L1[letter];
    if (!cmds) return null;
    for (var k = 0; k < cmds.length; k++) {
      var name = cmds[k];
      var tail = name.slice(1);
      if (rest.slice(0, tail.length) === tail) {
        // The char right after the command name must not be a letter, so a
        // damaged \tanh is repaired to \tanh (not \tan followed by "h").
        var after = rest.charAt(tail.length);
        if (!after || !/[A-Za-z]/.test(after)) return { name: name, splitRun: '' };
        // The command is followed by more letters. If that complete letter-run
        // is itself a known command ("\to\infty" -> "to" + "infty"), repair
        // both halves rather than one unknown word like "\toinfty".
        var run = /^[A-Za-z]+/.exec(rest.slice(tail.length));
        var runName = run ? run[0] : '';
        if (runName && LATEX_L2[runName] === 1) {
          return { name: name, splitRun: runName };
        }
        // A candidate matched but is a strict prefix of a longer command name
        // (e.g. \tan inside \tanh). Keep scanning: the longest valid name wins.
      }
    }
    return null;
  }

  function repairBareWord(match, boundary, word) {
    if (LATEX_L2[word] === 1) return boundary + '\\' + word;
    return match;
  }

  /* ------------------------------------------------------------------ */
  /* Layer 3: malformed AI-LaTeX syntax repair                            */
  /* ------------------------------------------------------------------ */
  // Some AI generators drop backslashes AND braces around otherwise-valid
  // LaTeX, producing readable-but-invalid TeX:
  //     fleft(x)      ->  f\left(x          (backslash before \left lost)
  //     dydx          ->  \frac{dy}{dx}      (braces + backslash lost)
  //     dy/dx         ->  \frac{dy}{dx}
  //     yn+1          ->  y_{n+1}            (subscript braces lost)
  //     xn, kn        ->  x_n, k_n
  //     k1, k2        ->  k_{1}, k_{2}       (index subscript lost)
  //     x2, y2        ->  x^{2}, y^{2}       (power lost)
  //     h/2, 1/6      ->  \frac{h}{2}, \frac{1}{6}
  // These repairs only ever run on $...$ / $$...$$ content (never prose or
  // prices), only match the exact unambiguous shapes above, and every rule is
  // idempotent: already-correct LaTeX and already-normalized output pass
  // through byte-for-byte unchanged on repeated passes.

  // A math "token start": not part of a longer word, and not already attached
  // to a command / underscore / caret / right brace (which would mean the
  // index or power is already written correctly).
  var MATH_BOUNDARY = '(^|[^A-Za-z_^\\\\}])';

  var RE_SUB_NPLUS = new RegExp(MATH_BOUNDARY + '([xyk])n(\\+\\d+)(?![A-Za-z0-9])', 'g');
  var RE_SUB_N = new RegExp(MATH_BOUNDARY + '([xyk])n(?![A-Za-z0-9_^])', 'g');
  var RE_SUB_K = new RegExp(MATH_BOUNDARY + '(k)(\\d+)(?![A-Za-z0-9])', 'g');
  var RE_SUP_XYZ = new RegExp(MATH_BOUNDARY + '([xyz])([2-9])(?![A-Za-z0-9])', 'g');

  var RE_FRAC_DYDX = /(^|[^A-Za-z\\])dydx(?![A-Za-z])/g;
  var RE_FRAC_DY_DX = /(^|[^A-Za-z\\])dy\s*\/\s*dx(?![A-Za-z])/g;
  var RE_FRAC_DX_DY = /(^|[^A-Za-z\\])dx\s*\/\s*dy(?![A-Za-z])/g;
  var RE_FRAC_ND = /(^|[^A-Za-z0-9_^\\}{}.,])(\d+)\s*\/\s*(\d+)(?![0-9A-Za-z])/g;
  var RE_FRAC_LD = /(^|[^A-Za-z0-9_^\\}{}.,])([a-zA-Z])\s*\/\s*(\d+)(?![0-9A-Za-z])/g;
  var RE_FRAC_DL = /(^|[^A-Za-z0-9_^\\}{}.,])(\d+)\s*\/\s*([a-zA-Z])(?![A-Za-z0-9_^\\])/g;

  function repairMalformedLatex(tex) {
    // 3.1 f\left / f\right  (backslash dropped after a function letter)
    tex = tex.replace(/(^|[^A-Za-z])fleft(?=\s*[([{])/g, '$1f\\left');
    tex = tex.replace(/(^|[^A-Za-z])fright(?=\s*[)\]}])(?![A-Za-z])/g, '$1f\\right');

    // 3.2 subscripts: y_{n+1}, x_n, y_n, k_n, k_1, k_2 ...
    tex = tex.replace(RE_SUB_NPLUS, function (m, b, v, idx) {
      return b + v + '_{n' + idx + '}';
    });
    tex = tex.replace(RE_SUB_N, function (m, b, v) {
      return b + v + '_n';
    });
    tex = tex.replace(RE_SUB_K, function (m, b, v, idx) {
      return b + v + '_{' + idx + '}';
    });

    // 3.3 superscripts: x^{2}, y^{2}, z^{3} ...
    tex = tex.replace(RE_SUP_XYZ, function (m, b, v, p) {
      return b + v + '^{' + p + '}';
    });

    // 3.4 fractions (only simple, unambiguous numerator/denominator shapes)
    tex = tex.replace(RE_FRAC_DYDX, '$1\\frac{dy}{dx}');
    tex = tex.replace(RE_FRAC_DY_DX, '$1\\frac{dy}{dx}');
    tex = tex.replace(RE_FRAC_DX_DY, '$1\\frac{dx}{dy}');
    tex = tex.replace(RE_FRAC_ND, function (m, b, num, den) {
      return b + '\\frac{' + num + '}{' + den + '}';
    });
    tex = tex.replace(RE_FRAC_LD, function (m, b, letter, den) {
      return b + '\\frac{' + letter + '}{' + den + '}';
    });
    tex = tex.replace(RE_FRAC_DL, function (m, b, num, letter) {
      return b + '\\frac{' + num + '}{' + letter + '}';
    });

    return tex;
  }

  /**
   * Repair AI-generated single-backslash LaTeX inside math content.
   * Idempotent: normalize(normalize(tex)) === normalize(tex).
   * Correctly escaped content ("\frac" with a real backslash) is unchanged.
   */
  function normalizeLatexText(tex) {
    if (tex === null || tex === undefined) return '';
    tex = String(tex);

    if (CONTROL_CHARS.test(tex)) {
      // Layer 1: restore escaped control characters as backslash commands.
      var out = '';
      var i = 0;
      var n = tex.length;
      while (i < n) {
        var ch = tex.charAt(i);
        var letter = LATEX_CONTROL[ch];
        if (letter) {
          // Skip if the control char itself was escaped (source had "\" "\f").
          if (i === 0 || tex.charAt(i - 1) !== '\\') {
            var name = matchControlCommand(letter, tex.slice(i + 1));
            if (name) {
              out += '\\' + name.name;
              i += name.name.length; // control char + (name.length - 1) letters
              if (name.splitRun) {
                out += '\\' + name.splitRun;
                i += name.splitRun.length;
              }
              continue;
            }
          }
        }
        out += ch;
        i += 1;
      }
      tex = out;
    }

    // Layer 2: restore backslashes to bare damaged command words.
    tex = tex.replace(BARE_WORD_RE, repairBareWord);

    // Layer 3: repair malformed AI-LaTeX syntax (dropped backslashes/braces
    // around \left/\right, subscripts, superscripts, simple fractions).
    return repairMalformedLatex(tex);
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

  // The six control characters produced by single-backslash LaTeX escapes
  // count as \s whitespace to JavaScript, but inside $...$ they are damaged
  // math content ("\frac" -> form-feed + "rac"), NOT boundary whitespace.
  // Without this the opening/closing $ validation would silently drop math
  // that begins with e.g. a form-feed.
  function isContentWhitespace(ch) {
    if (ch === undefined) return false;
    if (!WHITESPACE.test(ch)) return false;
    return !LATEX_CONTROL[ch];
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
        // Repair single-backslash corruption BEFORE trimming: .trim() would
        // strip a leading form-feed/tab/newline and destroy the LaTeX clue.
        var trimmedContent = normalizeLatexText(rawContent).trim();

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
      if (i + 1 >= n || isContentWhitespace(text.charAt(i + 1))) {
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
      if (inlineContent === '' || isContentWhitespace(text.charAt(close2 - 1))) {
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

      var tex = normalizeLatexText(t.value);
      var renderedHtml;
      try {
        renderedHtml = renderToString(tex, t.type === 'display');
      } catch (err) {
        // Extremely defensive: keep the original text visible.
        out += escapeHtml((t.type === 'display' ? '$$' : '$') + tex + (t.type === 'display' ? '$$' : '$'));
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
    normalizeLatexText: normalizeLatexText,
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