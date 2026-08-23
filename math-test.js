// Temporary validation harness for qbank-math.js — not part of the app.
const QMath = require('./qbank-math.js');

// Stub KaTeX so we can exercise the real tokenizer + renderer path.
globalThis.katex = {
  renderToString: (tex, opts) =>
    `<span class="KX" data-dm="${opts.displayMode}">[${tex}]</span>`,
};

let failures = 0;
const check = (label, actual, expected, isSub = false) => {
  const ok = isSub ? actual.includes(expected) : actual === expected;
  if (!ok) {
    failures++;
    console.log('FAIL', label, '|| got:', JSON.stringify(actual), '|| expected:', JSON.stringify(expected));
  } else {
    console.log('ok  ', label);
  }
};

// ------------------------------------------------------------------
// 1) Explicit math flag — inline + display + mixed
// ------------------------------------------------------------------
check(
  'ex1 inline',
  QMath.renderString('What is the derivative of $x^2$?', { math: true }),
  'What is the derivative of <span class="qbank-math" role="math"><span class="KX" data-dm="false">[x^2]</span></span>?',
);
check('ex2 exponent', QMath.renderString('Solve $e^{-x}=2$.', { math: true }), '[e^{-x}=2]', true);
check('ex3 fraction', QMath.renderString('Calculate $\\frac{2x+1}{x-3}$.', { math: true }), '[\\frac{2x+1}{x-3}]', true);
check('ex4 sqrt', QMath.renderString('Find $\\sqrt{x^2+1}$.', { math: true }), '[\\sqrt{x^2+1}]', true);
check(
  'ex5 display + inline',
  QMath.renderString('For the given nonlinear equation $$f(x)=3x-e^{-x}=0$$, a root of $f(x)$ lies in the interval:', { math: true }),
  'qbank-math-display',
  true,
);
check(
  'ex5 display mode true',
  QMath.renderString('$$f(x)=3x-e^{-x}=0$$', { math: true }),
  'data-dm="true"',
  true,
);
check(
  'ex7 mixed',
  QMath.renderString("If $f(x)=x^2+2x$, calculate $f'(x)$.", { math: true }),
  'qbank-math',
  true,
);
check(
  'ex7 twice inline',
  QMath.renderString("If $f(x)=x^2+2x$, calculate $f'(x)$.", { math: true }),
  'qbank-math" role="math"><span class="KX" data-dm="false">[f(x)=x^2+2x]</span></span>, calculate <span class="qbank-math" role="math"><span class="KX" data-dm="false">[f\'(x)]</span></span>',
  true,
);

// Multiple math answers
const opts = ['$x=1$', '$x=2$', '$x=\\frac{1}{2}$', '$x=\\pm2$'];
const renderedOpts = opts.map((o) => QMath.renderString(o, { math: true }));
check('ex6 opt0', renderedOpts[0], '[x=1]', true);
check('ex6 opt1', renderedOpts[1], '[x=2]', true);
check('ex6 opt2', renderedOpts[2], '[x=\\frac{1}{2}]', true);
check('ex6 opt3', renderedOpts[3], '[x=\\pm2]', true);

// --------------------------------------------------------------------------
// 2. Grant's example verbatim
// --------------------------------------------------------------------------
check(
  'grant example',
  QMath.renderString('Solve $$x^2 - 4 = 0$$.', { math: true }),
  'Solve <span class="qbank-math qbank-math-display" role="math"><span class="KX" data-dm="true">[x^2 - 4 = 0]</span></span>.',
);

// --------------------------------------------------------------------------
// 3. Auto-detect (no math flag) must NOT break plain text
// --------------------------------------------------------------------------
check('auto plain keeps text', QMath.renderString('What is the main goal of AI?'), 'What is the main goal of AI?');

// Prices stay plain
const prices = [
  'Item costs $5 and $10',
  'Price: $5.99',
  'The total is $usd',
  'Save $$50 every week',
];
prices.forEach((p, i) => {
  const out = QMath.renderString(p, {});
  if (out.indexOf('<span class="qbank-math"') !== -1) {
    failures++;
    console.log('FAIL price should stay plain:', i, JSON.stringify(p), '->', JSON.stringify(out));
  } else {
    console.log('ok  price auto-detect', i);
  }
});

// Existing question with no dollars stays identical (escaped)
check('auto plain exact', QMath.renderString('Export the file <file.txt> & run.'), 'Export the file &lt;file.txt&gt; &amp; run.');

// --------------------------------------------------------------------------
// 4. Auto-detection still catches well-formed math
// --------------------------------------------------------------------------
check(
  'auto inline',
  QMath.renderString('The value of $x^2 + 3x + 2$ is:'),
  '[x^2 + 3x + 2]',
  true,
);
check('auto sqrt', QMath.renderString('Find $\\sqrt{x^2+1}$.'), '[\\sqrt{x^2+1}]', true);
check('auto limit', QMath.renderString('$\\lim_{x\\to0}\\frac{\\sin x}{x}$'), '[\\lim_{x\\to0}\\frac{\\sin x}{x}]', true);
check(
  'auto display',
  QMath.renderString('For equation $$f(x)=3x-e^{-x}=0$$, root of $f(x)$'),
  'qbank-math-display',
  true,
);

// --------------------------------------------------------------------------
// 5. math:false + escaped dollars
// --------------------------------------------------------------------------
check('flag off', QMath.renderString('Solve $x^2-4=0$ value', { math: false }), 'Solve $x^2-4=0$ value');
check('escaped dollar', QMath.renderString('Cost \\$5 and $x^2$', { math: true }), 'Cost $5 and ', true);

// --------------------------------------------------------------------------
// 6. Validation-mode edge cases and list in a single expression
// --------------------------------------------------------------------------
check('set notation', QMath.renderString('$\\{1,2,3\\}$', { math: true }), '[\\{1,2,3\\}]', true);
check('matrix', QMath.renderString('$\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$', { math: true }), '[\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}]', true);
check('derivative', QMath.renderString("$\\frac{dy}{dx}$", { math: true }), '[\\frac{dy}{dx}]', true);

// boundaries of $ detection
check('two inline', QMath.renderString('$a$ and $b$', { math: true }), '[a]', true);
check('two inline second', QMath.renderString('$a$ and $b$', { math: true }), '[b]', true);

console.log('\n' + (failures === 0 ? 'ALL TESTS PASSED' : failures + ' TEST(S) FAILED'));
process.exit(failures === 0 ? 0 : 1);