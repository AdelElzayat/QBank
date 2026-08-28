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

// --------------------------------------------------------------------------
// 7. LaTeX repair: AI-generated SINGLE-backslash data.
//    The string literals below are intentionally written with ONE backslash,
//    so V8 corrupts them exactly like a browser would:
//      "\frac" -> form-feed + "rac", "\sqrt" -> "sqrt" (backslash dropped).
//    This simulates quizData.js produced by an AI that shows formulas
//    correctly but omits the second backslash.
// --------------------------------------------------------------------------

// User TEST 1 (single backslash) and TEST 2 (already-correct double)
check('T1 single \frac', QMath.renderString('$\frac{dy}{dx}$', { math: true }), '\\frac{dy}{dx}', true);
check('T2 double \frac (unchanged)', QMath.renderString('$\\frac{dy}{dx}$', { math: true }), '\\frac{dy}{dx}', true);
check('T1 == T2 same render', QMath.renderString('$\frac{dy}{dx}$', { math: true }), QMath.renderString('$\\frac{dy}{dx}$', { math: true }));

// User TEST 3 / TEST 4 (sqrt)
check('T3 single \sqrt', QMath.renderString('$\sqrt{x^2+1}$', { math: true }), '\\sqrt{x^2+1}', true);
check('T4 double \sqrt (unchanged)', QMath.renderString('$\\sqrt{x^2+1}$', { math: true }), '\\sqrt{x^2+1}', true);

// User TEST 5 / TEST 6 (varphi)
check('T5 single \varphi', QMath.renderString('$\varphi(x)$', { math: true }), '\\varphi(x)', true);
check('T6 double \varphi (unchanged)', QMath.renderString('$\\varphi(x)$', { math: true }), '\\varphi(x)', true);

// User TEST 7 (mixed text + math)
{
  const out = QMath.renderString('Using the formula $\frac{1}{3}e^{-x}$, determine the result.', { math: true });
  check('T7 mixed prose start', out, 'Using the formula ', true);
  check('T7 mixed formula', out, '[\\frac{1}{3}e^{-x}]', true);
  check('T7 mixed prose end', out, ', determine the result.', true);
}

// User TEST 8 (already-correct mixed)
{
  const out = QMath.renderString('Calculate $\\frac{2x+1}{x-3}$ when $x=4$.', { math: true });
  check('T8 prose start', out, 'Calculate ', true);
  check('T8 fraction', out, '[\\frac{2x+1}{x-3}]', true);
  check('T8 inline x=4', out, '[x=4]', true);
  check('T8 prose end', out, ' when ', true);
}

// User TEST 9 (display math stays display math)
{
  const out = QMath.renderString('Find $$x^2-4=0$$.', { math: true });
  check('T9 display class', out, 'qbank-math-display', true);
  check('T9 display mode', out, 'data-dm="true"', true);
  check('T9 display content', out, '[x^2-4=0]', true);
  check('T9 prose around', out, 'Find <span class="qbank-math qbank-math-display', true);
}
// Display math with a damaged leading \frac (trim must not eat the clue)
check('T9b display damaged frac', QMath.renderString('$$\\frac{dy}{dx}$$', { math: true }), '[\\frac{dy}{dx}]', true);

// User TEST 10 (the correctly-escaped matrix from the brief — unchanged)
check(
  'T10 matrix correct (unchanged)',
  QMath.renderString('$\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$', { math: true }),
  '[\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}]',
  true,
);
// Repair of a single-backslash \begin / \end environment (no row breaks)
check(
  'T10b repair begin/end env',
  QMath.renderString('$\begin{cases}x=1\end{cases}$', { math: true }),
  '[\\begin{cases}x=1\\end{cases}]',
  true,
);

// Additional single-backslash commands from the user's list (each broken form
// must repair, each already-correct form must stay byte-identical).
check('single \ln', QMath.renderString('$\ln(x)$', { math: true }), '[\\ln(x)]', true);
check('single \pm', QMath.renderString('$\pm 2$', { math: true }), '[\\pm 2]', true);
check('single \sin', QMath.renderString('$\sin x$', { math: true }), '[\\sin x]', true);
check('single \lim\to\frac', QMath.renderString('$\lim_{x\to0}\frac{\sin x}{x}$', { math: true }), '[\\lim_{x\\to0}\\frac{\\sin x}{x}]', true);
check('single \alpha+\beta', QMath.renderString('$\alpha+\beta$', { math: true }), '[\\alpha+\\beta]', true);
check('single \sum', QMath.renderString('$\sum_{i=1}^{n} i$', { math: true }), '[\\sum_{i=1}^{n} i]', true);
check('single \partial', QMath.renderString('$\partial x$', { math: true }), '[\\partial x]', true);
check('single \cdot', QMath.renderString('$1 \cdot 2$', { math: true }), '[1 \\cdot 2]', true);
check('single \le', QMath.renderString('$a \le b$', { math: true }), '[a \\le b]', true);
check('single \approx', QMath.renderString('$\pi \approx 3.14$', { math: true }), '[\\pi \\approx 3.14]', true);
check('single \Rightarrow', QMath.renderString('$x=1 \Rightarrow y=2$', { math: true }), '[x=1 \\Rightarrow y=2]', true);
check('single \infty display', QMath.renderString('$$\lim_{x\to\infty} \frac{1}{x}=0$$', { math: true }), '[\\lim_{x\\to\\infty} \\frac{1}{x}=0]', true);

// Idempotency: normalize(normalize(x)) === normalize(x), broken and correct.
check('idemp broken 1', QMath.normalizeLatexText('\frac{dy}{dx}'), '\\frac{dy}{dx}');
check('idemp broken 2', QMath.normalizeLatexText(QMath.normalizeLatexText('\frac{dy}{dx}')), '\\frac{dy}{dx}');
check('idemp correct frac', QMath.normalizeLatexText('\\frac{dy}{dx}'), '\\frac{dy}{dx}');
check('idemp correct frac 2', QMath.normalizeLatexText(QMath.normalizeLatexText('\\frac{dy}{dx}')), '\\frac{dy}{dx}');
check('idemp correct sqrt', QMath.normalizeLatexText('\\sqrt{x}'), '\\sqrt{x}');
check('idemp correct varphi', QMath.normalizeLatexText('\\varphi'), '\\varphi');
check('idemp broken via render', QMath.renderString('$\frac{1}{3}$', { math: true }), QMath.renderString('$\frac{1}{3}$', { math: true }));

// Regression: already-correct LaTeX renders byte-identically (no double-escape).
check('reg lim correct', QMath.renderString('$\\lim_{x\\to0}\\frac{\\sin x}{x}$', { math: true }), '[\\lim_{x\\to0}\\frac{\\sin x}{x}]', true);
check('reg sqrt correct', QMath.renderString('$\\sqrt{x}$', { math: true }), '[\\sqrt{x}]', true);
check('reg varphi correct', QMath.renderString('$\\varphi$', { math: true }), '[\\varphi]', true);
check('reg ln correct', QMath.renderString('$\\ln(x)$', { math: true }), '[\\ln(x)]', true);
check('reg epsilon correct', QMath.renderString('$\\epsilon$', { math: true }), '[\\epsilon]', true);

// Normal (non-math) text must remain untouched & never gain backslashes.
check('plain choose', QMath.renderString('Choose the correct answer.'), 'Choose the correct answer.');
check('plain chapter', QMath.renderString('Chapter 3'), 'Chapter 3');
check('plain percent', QMath.renderString('100%'), '100%');
check('plain save', QMath.renderString('Save your results'), 'Save your results');
check('plain dollar amount', QMath.renderString('The price is $100'), 'The price is $100');
check('plain value', QMath.renderString('The value is 100 dollars.'), 'The value is 100 dollars.');
check('plain sqrt word', QMath.renderString('The sqrt of 9 is 3'), 'The sqrt of 9 is 3');
check('plain mixed', QMath.renderString('Choose $x=1$ now.', { math: true }), 'Choose <span class="qbank-math" role="math"><span class="KX" data-dm="false">[x=1]</span></span> now.');

// math:false stays fully inert even for single-backslash data.
check('math:false inert', QMath.renderString('$\frac{dy}{dx}$', { math: false }), '$\frac{dy}{dx}$');

// Auto-detect mode repairs identically while keeping prose plain.
// Split-repair: two commands fused by corruption ("\to\infty", "\to\pi").
check('split to-infty', QMath.normalizeLatexText('x' + String.fromCharCode(9) + 'oinfty'), 'x\\to\\infty');
check('split to-pi', QMath.normalizeLatexText('x' + String.fromCharCode(9) + 'opi'), 'x\\to\\pi');
check('split times-alpha', QMath.normalizeLatexText('2' + String.fromCharCode(9) + 'imes' + 'alpha'), '2\\times\\alpha');
check('split idempotent', QMath.normalizeLatexText(QMath.normalizeLatexText('x' + String.fromCharCode(9) + 'oinfty')), 'x\\to\\infty');
check('split via render', QMath.renderString('$$\\lim_{x\\to\\infty} \\frac{1}{x}=0$$', { math: true }), '[\\lim_{x\\to\\infty} \\frac{1}{x}=0]', true);
check('auto detect damaged', QMath.renderString('The value of $\frac{dy}{dx}$ is 2'), '[\\frac{dy}{dx}]', true);
// --------------------------------------------------------------------------
// 7c. Malformed AI-LaTeX syntax repair (Layer 3)
// --------------------------------------------------------------------------
// f\left / f\right: AI drops the backslash before \left/\right.
check('mal fleft', QMath.normalizeLatexText('k2 = h fleft(xn'), 'k_{2} = h f\\left(x_n');
check('mal fleft full', QMath.normalizeLatexText('h fleft(x_{n} + h/2)'), 'h f\\left(x_{n} + \\frac{h}{2})');
check('mal fright', QMath.normalizeLatexText('a fright)'), 'a f\\right)');
// bare left( / right) — word-boundary -> \left / \right (Layer 2)
check('mal bare left(', QMath.normalizeLatexText('a left(x'), 'a \\left(x');
check('mal bare left[', QMath.normalizeLatexText('a left[x'), 'a \\left[x');
check('mal bare left{', QMath.normalizeLatexText('a left{x'), 'a \\left{x');
check('mal bare right)', QMath.normalizeLatexText('a right)'), 'a \\right)');
check('mal bare right]', QMath.normalizeLatexText('a right]'), 'a \\right]');
// subscripts: x_n, y_n, k_n, y_{n+1}, k_1 ... k_4
check('mal xn', QMath.normalizeLatexText('xn + 1'), 'x_n + 1');
check('mal yn', QMath.normalizeLatexText('yn = 3'), 'y_n = 3');
check('mal kn', QMath.normalizeLatexText('kn = 4'), 'k_n = 4');
check('mal yn+1', QMath.normalizeLatexText('yn+1 = yn + 2'), 'y_{n+1} = y_n + 2');
check('mal xn+2', QMath.normalizeLatexText('xn+2'), 'x_{n+2}');
check('mal kn+1', QMath.normalizeLatexText('kn+1'), 'k_{n+1}');
check('mal k1-4', QMath.normalizeLatexText('k1 + k2 + k3 + k4'), 'k_{1} + k_{2} + k_{3} + k_{4}');
// superscripts: x^{2}, y^{2}, x^{3}, including 3x2 (coefficient + power)
check('mal x2', QMath.normalizeLatexText('x2 + 1'), 'x^{2} + 1');
check('mal y2', QMath.normalizeLatexText('y2'), 'y^{2}');
check('mal x3', QMath.normalizeLatexText('x3'), 'x^{3}');
check('mal 3x2', QMath.normalizeLatexText('3x2 + 2x + 1'), '3x^{2} + 2x + 1');
// fractions
check('mal dydx', QMath.normalizeLatexText('dydx-3x=y2'), '\\frac{dy}{dx}-3x=y^{2}');
check('mal dydx bare', QMath.normalizeLatexText('dydx'), '\\frac{dy}{dx}');
check('mal dy/dx', QMath.normalizeLatexText('dy/dx = 2'), '\\frac{dy}{dx} = 2');
check('mal dx/dy', QMath.normalizeLatexText('dx/dy'), '\\frac{dx}{dy}');
check('mal 1/6', QMath.normalizeLatexText('1/6'), '\\frac{1}{6}');
check('mal h/2', QMath.normalizeLatexText('h/2'), '\\frac{h}{2}');
check('mal 1/x', QMath.normalizeLatexText('1/x'), '\\frac{1}{x}');
check('mal x/2', QMath.normalizeLatexText('x/2'), '\\frac{x}{2}');
check('mal 2x+1/x-3 stays', QMath.normalizeLatexText('2x+1/x-3'), '2x+\\frac{1}{x}-3');
// the user's fully-mangled Runge-Kutta formula (future AI data)
check(
  'mal rk formula',
  QMath.normalizeLatexText('yn+1 = yn + 1/6(k1+2k2+2k3+k4)'),
  'y_{n+1} = y_n + \\frac{1}{6}(k_{1}+2k_{2}+2k_{3}+k_{4})',
);
// idempotency of every new Layer 3 rule
['fleft(x', 'dydx', 'yn+1', 'k1', 'x2', 'h/2', '1/6', 'Qfright)'].forEach((s) => {
  const once = QMath.normalizeLatexText(s);
  check('l3 idempotent ' + s, QMath.normalizeLatexText(once), once);
});
// guards: correct LaTeX / braced / decimal / plain words must NOT change
check('l3 correct frac', QMath.normalizeLatexText('\\frac{dy}{dx}'), '\\frac{dy}{dx}');
check('l3 correct sqrt', QMath.normalizeLatexText('\\sqrt{x}'), '\\sqrt{x}');
check('l3 correct varphi', QMath.normalizeLatexText('\\varphi(x)'), '\\varphi(x)');
check('l3 correct left', QMath.normalizeLatexText('\\left(x\\right)'), '\\left(x\\right)');
check('l3 correct subscript', QMath.normalizeLatexText('y_{n+1} = x_{n} + k_{1}/2'), 'y_{n+1} = x_{n} + k_{1}/2');
check('l3 decimal guard', QMath.normalizeLatexText('x = 3.14/2'), 'x = 3.14/2');
check('l3 url guard', QMath.normalizeLatexText('Visit example.com/path'), 'Visit example.com/path');
check('l3 word guard', QMath.normalizeLatexText('known = 4'), 'known = 4');
check('l3 pmatrix', QMath.normalizeLatexText('\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}'), '\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}');


// --------------------------------------------------------------------------
// 8. Real quiz bank sweep: every string in quizData.js normalizes idempotently
//    and renders with zero control characters surviving. Exercises the exact
//    AI-generated single-backslash geometry present in the bank.
// --------------------------------------------------------------------------
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const bankCode = fs.readFileSync(path.join(__dirname, 'quizData.js'), 'utf8');
const sandbox = { console, katex: globalThis.katex, window: { katex: globalThis.katex }, Math, JSON, Date };
vm.createContext(sandbox);
vm.runInContext(bankCode + '\n;globalThis.__quizzes = quizzes;', sandbox);
const bank = sandbox.__quizzes;
let bankStrings = 0;
let bankRepaired = 0;
const CONTROL_OUT = /[\x00-\x08\x0B\x0C\x0E-\x1F]/;
function isQuestionLike(obj) {
  return obj && typeof obj === 'object' && typeof obj.question === 'string' && obj.type !== undefined;
}
function walk(value, question) {
  if (value === null || value === undefined || typeof value === 'number' || typeof value === 'boolean') return;
  if (typeof value === 'string') {
    bankStrings++;
    const norm1 = QMath.normalizeLatexText(value);
    const norm2 = QMath.normalizeLatexText(norm1);
    if (norm1 !== norm2) {
      failures++;
      console.log('FAIL bank norm not idempotent:', JSON.stringify(value));
    }
    if (norm1 !== value) bankRepaired++;
    const html = QMath.renderString(value, { math: question && question.math });
    if (CONTROL_OUT.test(html)) {
      failures++;
      console.log('FAIL bank control char survived:', JSON.stringify(value));
    }
    return;
  }
  if (Array.isArray(value)) {
    for (let k = 0; k < value.length; k++) walk(value[k], question);
    return;
  }
  if (typeof value === 'object') {
    for (const key in value) walk(value[key], isQuestionLike(value) ? value : question);
  }
}
walk(bank, null);
console.log('bank sweep: strings=' + bankStrings + ' repaired=' + bankRepaired);
console.log('\n' + (failures === 0 ? 'ALL TESTS PASSED' : failures + ' TEST(S) FAILED'));
process.exit(failures === 0 ? 0 : 1);