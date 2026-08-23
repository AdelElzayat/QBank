import {
  auth,
  db,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
  signOut,
  onAuthStateChanged,
  ADMIN_EMAIL,
} from "./firebase.js";

let currentUser = null;
let isAdmin = false;

const QUIZ_STORAGE_KEY = "quiz_progress";

const normalizeAnswer = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?'"()\[\]{}]/g, "")
    .replace(/\s+/g, " ");
};

const quizApp = {
  currentQuiz: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  processedQuestions: [],
  selectedAnswer: null,
  quizAnswers: [],
  savedResultsData: [],
  questionAnswered: false,

  isWrittenQuestion(question) {
    return question && (question.type === "complete" || question.type === "written");
  },

  getExpectedAnswers(question) {
    if (!question) return [];
    if (Array.isArray(question.correctAnswers)) return question.correctAnswers;
    if (Array.isArray(question.answers)) return question.answers;
    if (question.answer !== undefined) return [question.answer];
    if (Array.isArray(question.correctAnswer)) return question.correctAnswer;
    if (question.correctAnswer !== undefined) return [question.correctAnswer];
    return [];
  },

  getValidationMode(question) {
    if (!question) return "ordered";
    if (question.orderMode === "unordered") return "unordered";
    if (question.validationMode === "unordered") return "unordered";
    return "ordered";
  },

  isMultiWrittenQuestion(question) {
    return this.isWrittenQuestion(question) && this.getExpectedAnswers(question).length > 1;
  },

  hasWrittenSelection() {
    if (!this.selectedAnswer) return false;
    if (Array.isArray(this.selectedAnswer)) {
      return this.selectedAnswer.length > 0 && this.selectedAnswer.every(
        (answer) => normalizeAnswer(answer) !== "",
      );
    }
    return normalizeAnswer(this.selectedAnswer) !== "";
  },

  getMainButtonLabel(question) {
    if (
      this.isWrittenQuestion(question) &&
      this.currentMode === "normal" &&
      !this.questionAnswered
    ) {
      return "Enter";
    }
    return this.currentQuestionIndex === this.processedQuestions.length - 1
      ? "Finish"
      : "Next";
  },

  escapeHtml(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  },

  // ---- Math rendering (KaTeX) ----
  // Renders `$...$` / `$$...$$` inside any question-related string.
  //   question.math === true        -> every $...$ is LaTeX
  //   question.math === false/absent-> safe auto-detect (qbank-math.js)
  mathFlag(question) {
    if (question && typeof question.math === "boolean") return question.math;
    return undefined;
  },

  formatMath(text, question) {
    if (text === null || text === undefined) return "";
    if (window.QMath && typeof window.QMath.renderString === "function") {
      return window.QMath.renderString(String(text), { math: this.mathFlag(question) });
    }
    return this.escapeHtml(String(text));
  },

  async init() {
    this.initTheme();
    this.initAuth();
    this.checkUrlParams();
  },

  initAuth() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        isAdmin = user.email === ADMIN_EMAIL;
      } else {
        currentUser = null;
        isAdmin = false;
      }
      this.updateUserUI();
      this.updateProfilePanel();
    });
  },

  updateUserUI() {
    const userActions = document.getElementById("user-actions");

    if (currentUser) {
      userActions.innerHTML = `
                <div class="user-section">
                    <div class="user-profile">
                        <span class="user-avatar">👤</span>
                        <span class="user-name">${currentUser.displayName || currentUser.email}</span>
                        ${isAdmin ? '<span class="admin-badge">Admin</span>' : ""}
                    </div>
                    <div class="user-actions-group">
                        <button class="btn btn-secondary btn-nav" onclick="quizApp.showResultsHistory()">My Results</button>
                        ${isAdmin ? '<button class="btn btn-admin btn-nav" onclick="quizApp.showAdminPanel()">Admin</button>' : ""}
                        <button class="btn btn-secondary btn-nav" onclick="quizApp.logout()">Logout</button>
                    </div>
                </div>
            `;
    } else {
      userActions.innerHTML =
        '<a href="login.html" class="btn btn-primary btn-sm">Login</a>';
    }
  },

  toggleProfilePanel() {
    const panel = document.getElementById("profile-panel");
    const overlay = document.getElementById("profile-panel-overlay");
    panel.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("profile-panel-open");
  },

  updateProfilePanel() {
    const content = document.getElementById("profile-panel-content");

    if (currentUser) {
      content.innerHTML = `
                <div class="profile-info">
                    <div class="profile-avatar-large">👤</div>
                    <div class="profile-name">${currentUser.displayName || "User"}</div>
                    <div class="profile-email">${currentUser.email}</div>
                    ${isAdmin ? '<span class="admin-badge">Admin</span>' : ""}
                </div>
                <div class="profile-actions">
                    <button class="btn btn-primary btn-full" onclick="quizApp.showResultsHistory()">My Results</button>
                    ${isAdmin ? '<button class="btn btn-admin btn-full" onclick="quizApp.showAdminPanel()">Admin Panel</button>' : ""}
                    <button class="btn btn-secondary btn-full" onclick="quizApp.logout()">Logout</button>
                </div>
            `;
    } else {
      content.innerHTML = `
                <div class="profile-info">
                    <div class="profile-avatar-large">👤</div>
                    <div class="profile-name">Guest User</div>
                    <div class="profile-email">Sign in to save your progress</div>
                </div>
                <div class="profile-actions">
                    <a href="login.html" class="btn btn-google btn-full">Login with Google</a>
                    <button class="btn btn-secondary btn-full" onclick="quizApp.toggleProfilePanel()">Continue as Guest</button>
                </div>
            `;
    }
  },

  async logout() {
    try {
      this.toggleProfilePanel();
      await signOut(auth);
      currentUser = null;
      isAdmin = false;
      this.updateUserUI();
      this.updateProfilePanel();
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

  checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const quizId = params.get("quiz");

    if (quizId) {
      const quiz = quizzes.find((q) => q.id === quizId);
      if (quiz) {
        const quizIndex = quizzes.indexOf(quiz);
        this.startQuiz(quizIndex);
        return;
      }
    }

    this.renderHome();
  },

  initTheme() {
    const savedTheme = localStorage.getItem("quiz-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("quiz-theme", newTheme);
  },

  renderHome() {
    const container = document.getElementById("quiz-container");

    const cardsHtml = quizzes
      .map(
        (quiz, index) => `
            <div class="quiz-card">
                <h3>${quiz.title}</h3>
                <p>${quiz.questions.length} questions</p>
                <button class="btn btn-primary" onclick="quizApp.showModeSelection(${index})">Start Quiz</button>
            </div>
        `,
      )
      .join("");

    container.innerHTML = `
            <div class="home-screen">
                <h1>Select a quiz to begin</h1>
                <div class="quiz-grid">${cardsHtml}</div>
            </div>
        `;

    window.history.replaceState({}, "", window.location.pathname);
  },

  saveProgress() {
    if (!this.currentQuiz) return;
    const data = {
      quizId: this.currentQuiz.id,
      currentQuestionIndex: this.currentQuestionIndex,
      userAnswers: this.userAnswers,
    };
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(data));
  },

  loadProgress() {
    const saved = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!saved) return false;

    try {
      const data = JSON.parse(saved);
      if (!data.quizId || !this.currentQuiz) return false;
      if (data.quizId !== this.currentQuiz.id) return false;

      this.currentQuestionIndex = data.currentQuestionIndex || 0;
      this.userAnswers = data.userAnswers || [];
      this.selectedAnswer = this.userAnswers[this.currentQuestionIndex] || null;
      this.questionAnswered = !!this.selectedAnswer;

      return true;
    } catch (e) {
      return false;
    }
  },

  clearProgress() {
    localStorage.removeItem(QUIZ_STORAGE_KEY);
  },

  showModeSelection(quizIndex) {
    this.currentQuiz = quizzes[quizIndex];
    const container = document.getElementById("quiz-container");
    
    container.innerHTML = `
            <div class="mode-selection-screen">
                <h1>${this.currentQuiz.title}</h1>
                <p>Select your quiz mode:</p>
                <div class="mode-cards">
                    <div class="mode-card normal-mode" onclick="quizApp.startQuiz(${quizIndex}, 'normal')">
                        <div class="mode-icon">🟢</div>
                        <h3>Normal Mode</h3>
                        <p>Instant feedback after each answer, see correct/incorrect immediately</p>
                        <button class="btn btn-primary">Start Normal Mode</button>
                    </div>
                    <div class="mode-card quiz-mode" onclick="quizApp.startQuiz(${quizIndex}, 'quiz')">
                        <div class="mode-icon">🔴</div>
                        <h3>Quiz Mode</h3>
                        <p>Timer countdown, no instant feedback. See results only at the end</p>
                        <button class="btn btn-danger">Start Quiz Mode</button>
                    </div>
                </div>
                <button class="btn btn-secondary mt-3" onclick="quizApp.goHome()">← Back to Quizzes</button>
            </div>
        `;
  },

  currentMode: 'normal',
  quizModeTimer: null,
  quizModeTimerInterval: null,
  QUIZ_MODE_STORAGE_KEY: "qbank_quizmode_",

  startQuiz(quizIndex, mode = 'normal') {
    this.currentQuiz = quizzes[quizIndex];
    this.currentMode = mode;
    this.resetState();
    this.processedQuestions = this.processQuestions(this.currentQuiz.questions);

    if (this.currentMode === 'quiz') {
      this.initQuizModeTimer();
      this.loadQuizModeProgress();
    } else {
      this.loadProgress();
    }

    this.selectedAnswer = this.userAnswers[this.currentQuestionIndex] || null;
    this.questionAnswered = !!this.selectedAnswer;

    this.renderQuiz();
  },

  resetState() {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.selectedAnswer = null;
    this.quizAnswers = [];
    this.questionAnswered = false;
  },

  processQuestions(questions) {
    let processed = [...questions];

    if (this.currentQuiz.shuffleQuestions) {
      processed = this.fisherYatesShuffle(processed);
    }

    return processed.map((q) => {
      let processedQ = { ...q };
      const shouldShuffle =
        q.shuffle !== undefined
          ? q.shuffle
          : q.type === "multiple" || q.type === "true_false";
      if (shouldShuffle && (q.type === "multiple" || q.type === "true_true")) {
        processedQ.options = this.fisherYatesShuffle([...q.options]);
      }
      return processedQ;
    });
  },

  fisherYatesShuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  renderQuiz() {
    const container = document.getElementById("quiz-container");
    const question = this.processedQuestions[this.currentQuestionIndex];

    let imageHTML = "";
    if (question.image && question.image.trim() !== "") {
      imageHTML = `
                <div class="question-image-container">
                    <img src="${question.image}" class="question-image" onerror="this.parentElement.style.display='none';" alt="Question image">
                </div>
            `;
    }

    const nextButtonLabel = this.getMainButtonLabel(question);

    container.innerHTML = `
            <div class="quiz-header">
                <button class="btn-back" onclick="quizApp.goHome()">← Back</button>
                <h1>${this.currentQuiz.title}</h1>
                <div class="progress">Question ${this.currentQuestionIndex + 1}/${this.processedQuestions.length}</div>
                <div class="progress-bar"><div id="progress-bar" class="progress-bar-fill" style="width: 0%"></div></div>
            </div>
            <div class="question-container">
                <div class="question-card">
                    ${imageHTML}
                    <div class="question-text">${this.formatMath(question.question, question)}</div>
                    ${this.renderOptions(question)}
                </div>
            </div>
            <div class="quiz-footer">
                <button class="btn btn-secondary" onclick="quizApp.shareQuiz()">Share Quiz</button>
                ${this.currentQuestionIndex > 0 ? '<button class="btn btn-secondary" onclick="quizApp.prevQuestion()">Previous</button>' : "<div></div>"}
                <button id="next-btn" class="btn btn-primary" onclick="quizApp.handleNextButton()" ${!this.selectedAnswer ? "disabled" : ""}>${nextButtonLabel}</button>
            </div>
        `;

    const savedAnswer = this.userAnswers[this.currentQuestionIndex];
    if (savedAnswer !== undefined) {
      const correctAnswers = Array.isArray(question.correctAnswer)
        ? question.correctAnswer
        : [question.correctAnswer];
      const normalizedSaved = normalizeAnswer(savedAnswer);

      if (this.isWrittenQuestion(question)) {
        if (this.currentMode === "normal") {
          const isCorrect = this.checkAnswer(question, savedAnswer);
          this.markWrittenFeedback(question, savedAnswer, isCorrect);
        }
      } else {
        const options = document.querySelectorAll(".option");
        options.forEach((option) => {
          const normalizedOptionText = option.getAttribute("data-option-norm") || normalizeAnswer(option.querySelector(".option-text").textContent);
          const isCorrect = correctAnswers.some(
            (correct) => normalizeAnswer(correct) === normalizedOptionText,
          );
          const isWrong = normalizedOptionText === normalizedSaved && !isCorrect;

          if (isCorrect) {
            option.classList.add("correct");
          }
          if (isWrong) {
            option.classList.add("wrong");
          }
          if (isCorrect || isWrong) {
            option.classList.add("disabled");
          }
        });
      }

      this.questionAnswered = true;
    }

    this.updateProgressBar();
    this.enableNextButton();
  },

  renderOptions(question) {
    if (this.isWrittenQuestion(question)) {
      const expectedAnswers = this.getExpectedAnswers(question);
      const isAnswered = this.userAnswers[this.currentQuestionIndex] !== undefined;
      const isCorrect = isAnswered ? this.checkAnswer(question, this.userAnswers[this.currentQuestionIndex]) : false;
      const savedAnswer = this.userAnswers[this.currentQuestionIndex];

      if (this.isMultiWrittenQuestion(question)) {
        const values = Array.isArray(savedAnswer)
          ? savedAnswer
          : Array(expectedAnswers.length).fill("");
        const inputFields = expectedAnswers
          .map((_, index) => `
                <div class="multi-input-row">
                    <span class="multi-input-number">${index + 1}</span>
                    <input
                        type="text"
                        id="complete-answer-${index}"
                        class="complete-answer-field"
                        placeholder="Answer ${index + 1}"
                        aria-label="Answer ${index + 1}"
                        value="${this.escapeHtml(values[index] || "")}" 
                        oninput="quizApp.handleWrittenInput(event, ${index})"
                        onkeydown="quizApp.handleMultiAnswerKeyDown(event, ${index}, ${expectedAnswers.length - 1})"
                        ${isAnswered && this.currentMode === 'normal' ? "disabled" : ""}>
                </div>
            `)
          .join("");

        return `
                <div class="complete-input ${isAnswered && this.currentMode === 'normal' ? (isCorrect ? 'correct' : 'wrong') : ''}">
                    <div class="multi-complete-fields">
                        ${inputFields}
                    </div>
                    <div id="written-feedback" class="written-feedback"></div>
                </div>
            `;
      }

      return `
                <div class="complete-input ${isAnswered && this.currentMode === 'normal' ? (isCorrect ? 'correct' : 'wrong') : ''}">
                    <div class="input-wrapper">
                        <input
                            type="text"
                            id="complete-answer-0"
                            class="complete-answer-field"
                            placeholder="Type your answer..."
                            aria-label="Answer"
                            value="${this.escapeHtml(savedAnswer || "")}" 
                            oninput="quizApp.handleWrittenInput(event, 0)"
                            onkeydown="if(event.key === 'Enter') quizApp.handleNextButton()"
                            ${isAnswered && this.currentMode === 'normal' ? "disabled" : ""}>
                    </div>
                    <div id="written-feedback" class="written-feedback"></div>
                </div>
            `;
    }

    const optionsHtml = question.options
      .map((option, index) => {
        const isSelected =
          this.userAnswers[this.currentQuestionIndex] === option;
        const safeOption = option.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
        return `
                <div class="option ${isSelected ? "selected" : ""}" data-option-norm="${this.escapeHtml(normalizeAnswer(option))}" onclick="quizApp.handleAnswer('${safeOption}')">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    <span class="option-text">${this.formatMath(option, question)}</span>
                </div>
            `;
      })
      .join("");

    return `<div class="options">${optionsHtml}</div>`;
  },

  handleAnswer(answer) {
    if (this.userAnswers[this.currentQuestionIndex] !== undefined) return;

    this.selectedAnswer = answer;
    this.userAnswers[this.currentQuestionIndex] = answer;
    this.saveProgress();

    const currentQuestion = this.processedQuestions[this.currentQuestionIndex];
    const correctAnswers = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer
      : [currentQuestion.correctAnswer];
    const normalizedAnswer = normalizeAnswer(answer);

    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      const normalizedOptionText = option.getAttribute("data-option-norm") || normalizeAnswer(option.querySelector(".option-text").textContent);

      const isCorrect = correctAnswers.some(
        (correct) => normalizeAnswer(correct) === normalizedOptionText,
      );
      const isWrong = normalizedOptionText === normalizedAnswer && !isCorrect;

      if (isCorrect) {
        option.classList.add("correct");
      }
      if (isWrong) {
        option.classList.add("wrong");
      }
      if (isCorrect || isWrong) {
        option.classList.add("disabled");
      }
    });

    this.questionAnswered = true;
    this.enableNextButton();
  },

  handleWrittenInput(event, index) {
    const value = event.target.value;
    const currentQuestion = this.processedQuestions[this.currentQuestionIndex];

    if (!this.isWrittenQuestion(currentQuestion)) return;

    if (this.isMultiWrittenQuestion(currentQuestion)) {
      const expectedAnswers = this.getExpectedAnswers(currentQuestion);
      const answers = Array.isArray(this.selectedAnswer)
        ? [...this.selectedAnswer]
        : Array(expectedAnswers.length).fill("");

      answers[index] = value;
      this.selectedAnswer = answers;

      if (this.currentMode === "quiz") {
        const hasAnswer = answers.some((a) => normalizeAnswer(a) !== "");
        this.userAnswers[this.currentQuestionIndex] = hasAnswer ? answers : undefined;
        this.saveProgress();
      }
    } else {
      this.selectedAnswer = value;
      if (this.currentMode === "quiz") {
        this.userAnswers[this.currentQuestionIndex] = value.trim() || undefined;
        this.saveProgress();
      }
    }

    this.questionAnswered = false;
    this.enableNextButton();
  },

  handleWrittenSubmit() {
    this.handleNextButton();
  },

  handleMultiAnswerKeyDown(event, currentIndex, lastIndex) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (currentIndex < lastIndex) {
        // Focus on the next answer field
        const nextField = document.getElementById(`complete-answer-${currentIndex + 1}`);
        if (nextField) {
          nextField.focus();
        }
      } else {
        // This is the last field, submit the answer
        this.handleNextButton();
      }
    }
  },

  handleNextButton() {
    const currentQuestion = this.processedQuestions[this.currentQuestionIndex];
    if (
      this.isWrittenQuestion(currentQuestion) &&
      this.currentMode === "normal" &&
      !this.questionAnswered
    ) {
      this.submitWrittenAnswer();
      return;
    }
    this.nextQuestion();
  },

  submitWrittenAnswer() {
    const currentQuestion = this.processedQuestions[this.currentQuestionIndex];
    if (!this.isWrittenQuestion(currentQuestion)) return;
    if (!this.hasWrittenSelection()) return;

    let answerToSave = this.selectedAnswer;
    if (this.isMultiWrittenQuestion(currentQuestion)) {
      answerToSave = this.selectedAnswer.map((answer) => answer.trim());
    } else {
      answerToSave = String(this.selectedAnswer).trim();
    }

    this.userAnswers[this.currentQuestionIndex] = answerToSave;
    this.saveProgress();
    this.questionAnswered = true;

    const isCorrect = this.checkAnswer(currentQuestion, answerToSave);
    this.markWrittenFeedback(currentQuestion, answerToSave, isCorrect);
    this.enableNextButton();
  },

  markWrittenFeedback(question, userAnswer, isCorrect) {
    const container = document.querySelector(".complete-input");
    if (container) {
      container.classList.add(isCorrect ? "correct" : "wrong");
    }

    if (this.isMultiWrittenQuestion(question)) {
      const expected = this.getExpectedAnswers(question).map(normalizeAnswer);
      const remaining = [...expected];
      const inputs = Array.from(document.querySelectorAll(".complete-answer-field"));

      inputs.forEach((input, index) => {
        const normalizedValue = normalizeAnswer(input.value || "");
        let fieldCorrect = false;

        if (this.getValidationMode(question) === "ordered") {
          fieldCorrect = normalizedValue === expected[index];
        } else {
          const matchIndex = remaining.findIndex((correct) => correct === normalizedValue);
          fieldCorrect = matchIndex !== -1;
          if (fieldCorrect) {
            remaining.splice(matchIndex, 1);
          }
        }

        input.classList.toggle("correct", fieldCorrect);
        input.classList.toggle("wrong", !fieldCorrect);
        input.disabled = true;
      });
    } else {
      const input = document.querySelector(".complete-answer-field");
      if (input) {
        input.classList.toggle("correct", isCorrect);
        input.classList.toggle("wrong", !isCorrect);
        input.disabled = true;
      }
    }

    this.showWrittenFeedback(isCorrect, question);

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.textContent = this.currentQuestionIndex === this.processedQuestions.length - 1 ? 'Finish' : 'Next';
    }
  },

  showWrittenFeedback(isCorrect, question) {
    const feedbackDiv = document.getElementById("written-feedback");
    if (!feedbackDiv) return;

    const correctAnswers = this.getExpectedAnswers(question);
    const displayCorrect = correctAnswers.length > 1
      ? `<ul>${correctAnswers
          .map((answer) => `<li>${this.formatMath(answer, question)}</li>`)
          .join("")}</ul>`
      : `<strong>${this.formatMath(correctAnswers[0], question)}</strong>`;

    feedbackDiv.className = `written-feedback ${isCorrect ? "correct" : "incorrect"}`;
    feedbackDiv.innerHTML = `
        <div class="feedback-status ${isCorrect ? "correct" : "incorrect"}">
            ${isCorrect ? "✓ Correct" : "✗ Incorrect"}
        </div>
        ${!isCorrect ? `<div class="correct-answer-text">${correctAnswers.length > 1 ? "Correct answers:" : "Correct answer:"} ${displayCorrect}</div>` : ""}
        ${question.explanation ? `<div class="explanation">${this.formatMath(question.explanation, question)}</div>` : ""}
    `;
    feedbackDiv.style.display = "block";
  },

  updateSelectedUI() {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      const optionNorm = option.getAttribute("data-option-norm") || normalizeAnswer(option.querySelector(".option-text").textContent);
      if (optionNorm === normalizeAnswer(this.selectedAnswer)) {
        option.classList.add("selected");
      } else {
        option.classList.remove("selected");
      }
    });
  },

  enableNextButton() {
    const nextBtn = document.getElementById("next-btn");
    if (!nextBtn) return;

    const currentQuestion = this.processedQuestions[this.currentQuestionIndex];
    let enabled = false;

    if (this.isWrittenQuestion(currentQuestion)) {
      enabled = this.hasWrittenSelection();
    } else {
      enabled = !!this.selectedAnswer;
    }

    nextBtn.disabled = !enabled;
  },

  nextQuestion() {
    const currentQuestion = this.processedQuestions[this.currentQuestionIndex];
    const isCorrect = this.checkAnswer(currentQuestion, this.selectedAnswer);
    this.quizAnswers.push({
      question: currentQuestion.question,
      answer: this.selectedAnswer,
      isCorrect,
    });

    if (this.currentQuestionIndex < this.processedQuestions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = this.userAnswers[this.currentQuestionIndex] || null;
      this.questionAnswered = false;
      this.saveProgress();
      this.renderQuiz();
    } else {
      this.clearProgress();
      this.showResults();
    }
  },

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedAnswer = this.userAnswers[this.currentQuestionIndex] || null;
      this.saveProgress();
      this.renderQuiz();
    }
  },

  updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      const progress =
        ((this.currentQuestionIndex + 1) / this.processedQuestions.length) *
        100;
      progressBar.style.width = progress + "%";
    }
  },

  calculateScore() {
    let correct = 0;
    this.processedQuestions.forEach((question, index) => {
      const userAnswer = this.userAnswers[index];
      if (userAnswer && this.checkAnswer(question, userAnswer)) {
        correct++;
      }
    });
    return {
      score: correct,
      total: this.processedQuestions.length,
      percentage: Math.round((correct / this.processedQuestions.length) * 100),
    };
  },

  async showResults() {
    const results = this.calculateScore();
    const container = document.getElementById("quiz-container");

    let showScore = true;
    if (this.currentQuiz && this.currentQuiz.showScore !== undefined) {
      showScore = this.currentQuiz.showScore;
    }

    let saveMessage = "";
    if (currentUser) {
      await this.saveResult(results);
      saveMessage =
        '<div class="save-message">Result saved to your history</div>';
    } else {
      saveMessage =
        '<div class="guest-message">Login to save your results</div>';
    }

    const resultsHtml = `
            <div class="results">
                <h2>Quiz Complete!</h2>
                ${
                  showScore
                    ? `
                <div class="score-display">
                    <div class="score-number">${results.score}/${results.total}</div>
                    <div class="score-percentage">${results.percentage}%</div>
                </div>
                `
                    : ""
                }
                ${showScore ? this.renderAnswerReview() : ""}
                ${saveMessage}
                <div class="results-buttons">
                    <button class="btn btn-secondary" onclick="quizApp.goHome()">Back to Quizzes</button>
                    <button class="btn btn-primary" onclick="quizApp.restartQuiz()">Restart Quiz</button>
                </div>
            </div>
        `;

    container.innerHTML = resultsHtml;
  },

  async saveResult(results) {
    if (!currentUser || !this.currentQuiz) return;

    try {
      const quizData = this.processedQuestions.map((q, index) => ({
        question: q.question,
        userAnswer: this.userAnswers[index] || null,
        correctAnswer: q.correctAnswer,
        isCorrect: this.checkAnswer(q, this.userAnswers[index]),
      }));

      await addDoc(collection(db, "results"), {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        quizId: this.currentQuiz.id,
        quizTitle: this.currentQuiz.title,
        score: results.score,
        totalQuestions: results.total,
        percentage: results.percentage,
        quizData: quizData,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving result:", error);
    }
  },

  renderAnswerReview() {
    const reviewHtml = this.processedQuestions
      .map((question, index) => {
        const userAnswer = this.userAnswers[index];
        const isCorrect = this.checkAnswer(question, userAnswer);
        const expectedAnswers = this.getExpectedAnswers(question);
        const userAnswerText = Array.isArray(userAnswer)
          ? userAnswer.filter(Boolean).join(", ")
          : userAnswer;
        const displayCorrect = expectedAnswers.length > 1
          ? expectedAnswers.join(", ")
          : expectedAnswers[0];

        return `
                <div class="answer-review ${isCorrect ? "correct" : "incorrect"}">
                    <div class="review-question">${index + 1}. ${this.formatMath(question.question, question)}</div>
                    <div class="review-answer">
                        <span class="label">Your answer:</span>
                        <span class="answer ${isCorrect ? "correct" : "incorrect"}">${this.formatMath(userAnswerText || "No answer", question)}</span>
                    </div>
                    ${
                      !isCorrect
                        ? `
                        <div class="review-answer">
                            <span class="label">Correct answer:</span>
                            <span class="answer correct">${this.formatMath(displayCorrect, question)}</span>
                        </div>
                    `
                        : ""
                    }
                    ${
                      question.explanation
                        ? `
                        <div class="explanation">${this.formatMath(question.explanation, question)}</div>
                    `
                        : ""
                    }
                </div>
            `;
      })
      .join("");

    return `<div class="answer-review-container">${reviewHtml}</div>`;
  },

  checkAnswer(question, userAnswer) {
    if (!userAnswer) return false;

    if (this.isWrittenQuestion(question)) {
      const expectedAnswers = this.getExpectedAnswers(question).map(normalizeAnswer);

      if (Array.isArray(userAnswer)) {
        const normalizedAnswers = userAnswer.map((answer) => normalizeAnswer(answer));
        if (normalizedAnswers.length !== expectedAnswers.length) return false;

        if (this.getValidationMode(question) === "unordered") {
          const remaining = [...expectedAnswers];
          for (const answer of normalizedAnswers) {
            const matchIndex = remaining.findIndex((correct) => correct === answer);
            if (matchIndex === -1) return false;
            remaining.splice(matchIndex, 1);
          }
          return remaining.length === 0;
        }

        return normalizedAnswers.every(
          (answer, index) => answer === expectedAnswers[index],
        );
      }

      return normalizeAnswer(userAnswer) === expectedAnswers[0];
    }

    const correctAnswers = Array.isArray(question.correctAnswer)
      ? question.correctAnswer
      : [question.correctAnswer];

    return correctAnswers.some((correct) => userAnswer === correct);
  },

  restartQuiz() {
    this.clearProgress();
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.selectedAnswer = null;
    this.quizAnswers = [];
    this.questionAnswered = false;
    this.processedQuestions = this.processQuestions(this.currentQuiz.questions);
    this.renderQuiz();
  },

  goHome() {
    this.clearProgress();
    this.currentQuiz = null;
    this.resetState();
    this.processedQuestions = [];
    window.history.replaceState({}, "", window.location.pathname);
    this.renderHome();
  },

  async showResultsHistory() {
    if (!currentUser) {
      alert("Please login to view your results");
      return;
    }

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.toggleProfilePanel();
    }

    const modal = document.createElement("div");

    if (isMobile) {
      modal.className = "modal-overlay";
      modal.setAttribute("onclick", "quizApp.closeModal(event)");
      modal.innerHTML = `
                <div class="modal-content history-modal" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h2>My Results</h2>
                        <button class="btn-close" onclick="quizApp.closeHistoryModal()">×</button>
                    </div>
                    <div class="modal-body">
                        <div id="history-loading" class="loading-text">Loading...</div>
                        <div id="history-content"></div>
                    </div>
                </div>
            `;
    } else {
      modal.className = "desktop-results-overlay";
      modal.id = "desktop-results-overlay";
      modal.innerHTML = `
                <div class="desktop-results-modal">
                    <div class="desktop-results-header">
                        <h2>My Results</h2>
                        <button class="btn-close" onclick="quizApp.closeDesktopResults()">×</button>
                    </div>
                    <div class="desktop-results-body">
                        <div id="history-loading" class="loading-text">Loading...</div>
                        <div id="history-content"></div>
                    </div>
                </div>
            `;
    }

    document.body.appendChild(modal);

    try {
      const q = query(
        collection(db, "results"),
        where("userId", "==", currentUser.uid),
        orderBy("timestamp", "desc"),
      );
      const snapshot = await getDocs(q);

      const loadingEl = document.getElementById("history-loading");
      const contentEl = document.getElementById("history-content");

      this.savedResultsData = [];

      if (snapshot.empty) {
        loadingEl.style.display = "none";
        contentEl.innerHTML =
          '<div class="empty-state">No results yet. Take a quiz to see your history!</div>';
      } else {
        loadingEl.style.display = "none";
        let html = '<div class="results-list">';
        let index = 0;
        snapshot.forEach((doc) => {
          const data = doc.data();
          this.savedResultsData[index] = data;
          const date = data.timestamp
            ? new Date(data.timestamp.seconds * 1000).toLocaleString()
            : "N/A";
          html += `
                        <div class="result-item clickable" onclick="quizApp.showReview(${index})">
                            <div class="result-info">
                                <div class="result-title">${data.quizTitle}</div>
                                <div class="result-date">${date}</div>
                            </div>
                            <div class="result-score">
                                <span class="score-badge">${data.score}/${data.totalQuestions}</span>
                                <span class="score-percent">${data.percentage}%</span>
                            </div>
                        </div>
                    `;
          index++;
        });
        html += "</div>";
        contentEl.innerHTML = html;
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      document.getElementById("history-loading").style.display = "none";
      document.getElementById("history-content").innerHTML =
        '<div class="error-state">Failed to load results</div>';
    }
  },

  closeDesktopResults() {
    document.getElementById("desktop-results-overlay").remove();
  },

  closeAllModals() {
    const modals = document.querySelectorAll(
      ".modal-overlay, .desktop-results-overlay",
    );
    modals.forEach((modal) => modal.remove());
  },

  showReview(resultIndex) {
    this.closeAllModals();
    const resultData = this.savedResultsData[resultIndex];
    if (!resultData || !resultData.quizData) {
      alert("Unable to load review data");
      return;
    }

    const container = document.getElementById("quiz-container");

    const questionsHtml = resultData.quizData
      .map((item, index) => {
        const iconClass = item.isCorrect ? "icon-correct" : "icon-incorrect";
        const icon = item.isCorrect ? "✔" : "✖";

        return `
                <div class="review-card ${item.isCorrect ? "correct" : "incorrect"}">
                    <div class="review-card-header">
                        <span class="question-number">Question ${index + 1}</span>
                        <span class="${iconClass}">${icon}</span>
                    </div>
                    <div class="review-card-question">${item.question}</div>
                    <div class="review-card-answers">
                        <div class="answer-row ${item.isCorrect ? "correct" : "incorrect"}">
                            <span class="answer-label">Your answer:</span>
                            <span class="answer-value ${item.isCorrect ? "correct" : "incorrect"}">${item.userAnswer || "No answer"}</span>
                        </div>
                        ${
                          !item.isCorrect
                            ? `
                        <div class="answer-row correct">
                            <span class="answer-label">Correct answer:</span>
                            <span class="answer-value correct">${item.correctAnswer}</span>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>
            `;
      })
      .join("");

    container.innerHTML = `
            <div class="review-page">
                <div class="review-header">
                    <button class="btn-back" onclick="quizApp.goHome()">← Back to Quizzes</button>
                    <h1>${resultData.quizTitle}</h1>
                    <div class="review-score-summary">
                        <span class="review-score">${resultData.score}/${resultData.totalQuestions}</span>
                        <span class="review-percentage">${resultData.percentage}%</span>
                    </div>
                </div>
                <div class="review-questions">
                    ${questionsHtml}
                </div>
                <div class="review-footer">
                    <button class="btn btn-secondary" onclick="quizApp.goHome()">Back to Quizzes</button>
                </div>
            </div>
        `;
  },

  closeModal(event) {
    if (event.target.classList.contains("modal-overlay")) {
      const modal = document.querySelector(".modal-overlay");
      if (modal) modal.remove();
    }
  },

  closeHistoryModal() {
    const modal = document.querySelector(".modal-overlay");
    if (modal) modal.remove();
  },

  async showAdminPanel() {
    if (!isAdmin) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.toggleProfilePanel();
    }

    const modal = document.createElement("div");

    if (isMobile) {
      modal.className = "modal-overlay";
      modal.setAttribute("onclick", "quizApp.closeModal(event)");
      modal.innerHTML = `
                <div class="modal-content admin-modal" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h2>Admin Panel</h2>
                        <button class="btn-close" onclick="quizApp.closeHistoryModal()">×</button>
                    </div>
                    <div class="modal-body">
                        <div id="admin-loading" class="loading-text">Loading analytics...</div>
                        <div id="admin-content"></div>
                    </div>
                </div>
            `;
    } else {
      modal.className = "desktop-results-overlay";
      modal.id = "desktop-results-overlay";
      modal.innerHTML = `
                <div class="desktop-results-modal">
                    <div class="desktop-results-header">
                        <h2>Admin Panel</h2>
                        <button class="btn-close" onclick="quizApp.closeDesktopResults()">×</button>
                    </div>
                    <div class="desktop-results-body">
                        <div id="admin-loading" class="loading-text">Loading analytics...</div>
                        <div id="admin-content"></div>
                    </div>
                </div>
            `;
    }

    document.body.appendChild(modal);

    try {
      const q = query(collection(db, "results"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);

      const loadingEl = document.getElementById("admin-loading");
      const contentEl = document.getElementById("admin-content");

      if (snapshot.empty) {
        loadingEl.style.display = "none";
        contentEl.innerHTML =
          '<div class="empty-state">No quiz results yet.</div>';
      } else {
        loadingEl.style.display = "none";

        const quizStats = {};
        const allResults = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          allResults.push(data);

          if (!quizStats[data.quizTitle]) {
            quizStats[data.quizTitle] = {
              attempts: 0,
              totalScore: 0,
              quizId: data.quizId,
            };
          }
          quizStats[data.quizTitle].attempts++;
          quizStats[data.quizTitle].totalScore += data.percentage;
        });

        let analyticsHtml =
          '<div class="analytics-section"><h3>Quiz Analytics</h3>';

        for (const [title, stats] of Object.entries(quizStats)) {
          const avgScore = Math.round(stats.totalScore / stats.attempts);
          analyticsHtml += `
                        <div class="analytics-card">
                            <div class="analytics-title">${title}</div>
                            <div class="analytics-stats">
                                <div class="stat">
                                    <span class="stat-value">${stats.attempts}</span>
                                    <span class="stat-label">Attempts</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">${avgScore}%</span>
                                    <span class="stat-label">Avg Score</span>
                                </div>
                            </div>
                        </div>
                    `;
        }
        analyticsHtml += "</div>";

        let usersHtml = '<div class="users-section"><h3>All Results</h3>';
        usersHtml += '<div class="results-list">';

        allResults.slice(0, 50).forEach((data) => {
          const date = data.timestamp
            ? new Date(data.timestamp.seconds * 1000).toLocaleDateString()
            : "N/A";
          usersHtml += `
                        <div class="result-item admin-result">
                            <div class="result-info">
                                <div class="result-user">${data.userEmail}</div>
                                <div class="result-title">${data.quizTitle}</div>
                                <div class="result-date">${date}</div>
                            </div>
                            <div class="result-score">
                                <span class="score-badge">${data.score}/${data.totalQuestions}</span>
                                <span class="score-percent">${data.percentage}%</span>
                            </div>
                        </div>
                    `;
        });

        usersHtml += "</div></div>";
        contentEl.innerHTML = analyticsHtml + usersHtml;
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
      document.getElementById("admin-loading").style.display = "none";
      document.getElementById("admin-content").innerHTML =
        '<div class="error-state">Failed to load admin data</div>';
    }
  },

  shareQuiz() {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = baseUrl + "?quiz=" + this.currentQuiz.id;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          this.showShareNotification("Link copied!");
        })
        .catch(() => {
          this.showShareNotification("Failed to copy");
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        this.showShareNotification("Link copied!");
      } catch (err) {
        this.showShareNotification("Failed to copy");
      }
      document.body.removeChild(textArea);
    }
  },

  showShareNotification(message) {
    const notification = document.createElement("div");
    notification.className = "share-notification";
    notification.textContent = message;
    notification.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--primary);color:white;padding:12px 24px;border-radius:8px;font-weight:500;z-index:9999;animation:fadeIn 0.3s ease;";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "fadeIn 0.3s ease reverse";
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  },
};

window.quizApp = quizApp;
document.addEventListener("DOMContentLoaded", () => {
  quizApp.init();
});
