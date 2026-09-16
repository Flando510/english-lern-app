// ===============================
// SUPABASE
// ===============================

const SUPABASE_URL = "https://amrqkjyemjpyxxyugwyu.supabase.co";

// Deine bisherige Publishable Key-Zeile hier unverändert einsetzen.
const SUPABASE_KEY = "DEIN_BISHERIGER_PUBLISHABLE_KEY";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


// ===============================
// DATEN
// ===============================

const lessons = {
  1: {
    vocab: [
      { english: "hello", german: "hallo" },
      { english: "goodbye", german: "auf Wiedersehen" },
      { english: "school", german: "Schule" },
      { english: "teacher", german: "Lehrer/in" },
      { english: "book", german: "Buch" },
      { english: "friend", german: "Freund/in" },
      { english: "house", german: "Haus" },
      { english: "family", german: "Familie" },
      { english: "water", german: "Wasser" },
      { english: "food", german: "Essen" }
    ],

    grammar: `
      <h3>Personalpronomen</h3>
      <p>
        I = ich<br>
        you = du / ihr<br>
        he = er<br>
        she = sie<br>
        it = es<br>
        we = wir<br>
        they = sie
      </p>
    `,

    example: "I am a student.",

    questions: [
      {
        question: "Was bedeutet „I“?",
        options: ["ich", "du", "er"],
        answer: "ich"
      },
      {
        question: "Was bedeutet „school“?",
        options: ["Schule", "Haus", "Buch"],
        answer: "Schule"
      },
      {
        question: "Was bedeutet „friend“?",
        options: ["Freund/in", "Lehrer/in", "Familie"],
        answer: "Freund/in"
      }
    ]
  },

  2: {
    vocab: [
      { english: "morning", german: "Morgen" },
      { english: "afternoon", german: "Nachmittag" },
      { english: "evening", german: "Abend" },
      { english: "night", german: "Nacht" },
      { english: "breakfast", german: "Frühstück" },
      { english: "lunch", german: "Mittagessen" },
      { english: "dinner", german: "Abendessen" },
      { english: "school", german: "Schule" },
      { english: "home", german: "Zuhause" },
      { english: "weekend", german: "Wochenende" }
    ],

    grammar: `
      <h3>Simple Present</h3>
      <p>
        Das Simple Present wird für regelmäßige Handlungen und Fakten verwendet.
      </p>
    `,

    example: "I go to school every day.",

    questions: [
      {
        question: "Wann verwendet man das Simple Present?",
        options: [
          "Für regelmäßige Handlungen",
          "Nur für gestern",
          "Nur für morgen"
        ],
        answer: "Für regelmäßige Handlungen"
      },
      {
        question: "Was bedeutet „morning“?",
        options: ["Morgen", "Abend", "Nacht"],
        answer: "Morgen"
      },
      {
        question: "Was bedeutet „weekend“?",
        options: ["Wochenende", "Wochentag", "Ferien"],
        answer: "Wochenende"
      }
    ]
  },

  3: {
    vocab: [],
    grammar: `
      <h3>Grammar</h3>
      <p>Hier kommt die Grammatik der 3. Klasse hin.</p>
    `,
    example: "",
    questions: []
  },

  4: {
    vocab: [],
    grammar: `
      <h3>Grammar</h3>
      <p>Hier kommt die Grammatik der 4. Klasse hin.</p>
    `,
    example: "",
    questions: []
  }
};


// ===============================
// APP-STATUS
// ===============================

let currentClass = 1;
let currentMode = "vocab";

let currentQuestion = 0;

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;

// Quiz
let quizSource = null;
let quizQuestions = [];


// ===============================
// DOM
// ===============================

const loginScreen = document.getElementById("loginScreen");
const registerScreen = document.getElementById("registerScreen");
const mainScreen = document.getElementById("mainScreen");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerUsername = document.getElementById("registerUsername");

const authMessage = document.getElementById("authMessage");
const adminMessage = document.getElementById("adminMessage");

const welcomeMessage = document.getElementById("welcomeMessage");
const pointsDisplay = document.getElementById("pointsDisplay");

const learningPage = document.getElementById("learningPage");
const leaderboardPage = document.getElementById("leaderboardPage");
const adminPage = document.getElementById("adminPage");

const learningArea = document.getElementById("contentArea");
const vocabUnitNavigation = document.getElementById("vocabUnitNavigation");
const unitList = document.getElementById("unitList");

const classButtons = document.querySelectorAll(".class-btn");
const modeButtons = document.querySelectorAll(".mode-btn");


// ===============================
// HILFSFUNKTIONEN
// ===============================

function setAuthMessage(message, type = "") {
  if (!authMessage) return;

  authMessage.textContent = message;
  authMessage.className = "auth-message";

  if (type) {
    authMessage.classList.add(type);
  }
}


function setAdminMessage(message, type = "") {
  if (!adminMessage) return;

  adminMessage.textContent = message;
  adminMessage.className = "admin-message";

  if (type) {
    adminMessage.classList.add(type);
  }
}


function authEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function validUsername(username) {
  return /^[a-zA-Z0-9äöüÄÖÜß _-]{3,20}$/.test(username);
}


function escapeHtml(text) {
  if (text === null || text === undefined) {
    return "";
  }

  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// ===============================
// LOGIN / REGISTER
// ===============================

function showLogin() {
  if (loginScreen) loginScreen.style.display = "";
  if (registerScreen) registerScreen.style.display = "none";
}


function showRegister() {
  if (loginScreen) loginScreen.style.display = "none";
  if (registerScreen) registerScreen.style.display = "";
}


function showApp() {
  if (loginScreen) loginScreen.style.display = "none";
  if (registerScreen) registerScreen.style.display = "none";
  if (mainScreen) mainScreen.style.display = "";

  updateUserUI();
  renderLearning();
}


function showAuth() {
  if (mainScreen) mainScreen.style.display = "none";

  showLogin();
}


async function loadProfile() {
  if (!currentUser) return;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (error) {
    console.error("Profil konnte nicht geladen werden:", error);
    return;
  }

  currentProfile = data;
}


function updateUserUI() {
  if (!currentProfile) return;

  if (welcomeMessage) {
    welcomeMessage.textContent =
      `Willkommen, ${currentProfile.username}!`;
  }

  if (pointsDisplay) {
    pointsDisplay.textContent =
      `${currentProfile.points || 0} Punkte`;
  }
}


// ===============================
// AUTH FORM
// ===============================

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    if (!authEmail(email)) {
      setAuthMessage("Bitte gib eine gültige E-Mail-Adresse ein.", "error");
      return;
    }

    if (!password) {
      setAuthMessage("Bitte gib dein Passwort ein.", "error");
      return;
    }

    setAuthMessage("Anmeldung läuft...");

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {
      setAuthMessage(error.message, "error");
      return;
    }

    currentUser = data.user;

    await loadProfile();

    if (!currentProfile) {
      setAuthMessage(
        "Dein Profil konnte nicht gefunden werden.",
        "error"
      );
      return;
    }

    setAuthMessage("");
    showApp();
  });
}


if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = registerUsername.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value;

    if (!validUsername(username)) {
      setAuthMessage(
        "Der Benutzername muss 3–20 Zeichen lang sein.",
        "error"
      );
      return;
    }

    if (!authEmail(email)) {
      setAuthMessage(
        "Bitte gib eine gültige E-Mail-Adresse ein.",
        "error"
      );
      return;
    }

    if (password.length < 6) {
      setAuthMessage(
        "Das Passwort muss mindestens 6 Zeichen lang sein.",
        "error"
      );
      return;
    }

    setAuthMessage("Registrierung läuft...");

    const { data, error } =
      await supabaseClient.auth.signUp({
        email,
        password
      });

    if (error) {
      setAuthMessage(error.message, "error");
      return;
    }

    if (!data.user) {
      setAuthMessage(
        "Registrierung konnte nicht abgeschlossen werden.",
        "error"
      );
      return;
    }

    const { error: profileError } =
      await supabaseClient
        .from("profiles")
        .insert({
          id: data.user.id,
          username,
          points: 0,
          is_admin: false
        });

    if (profileError) {
      console.error(profileError);

      setAuthMessage(
        "Account wurde erstellt, aber das Profil konnte nicht gespeichert werden.",
        "error"
      );

      return;
    }

    currentUser = data.user;

    await loadProfile();

    setAuthMessage(
      "Registrierung erfolgreich!",
      "success"
    );

    showApp();
  });
}


// ===============================
// LOGOUT
// ===============================

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    await supabaseClient.auth.signOut();

    currentUser = null;
    currentProfile = null;

    quizSource = null;
    quizQuestions = [];

    showAuth();
  });
}


// ===============================
// PUNKTE
// ===============================

async function addPoints(amount) {
  if (!currentProfile || !currentUser) return;

  const newPoints =
    (currentProfile.points || 0) + amount;

  const { error } =
    await supabaseClient
      .from("profiles")
      .update({
        points: newPoints
      })
      .eq("id", currentUser.id);

  if (error) {
    console.error("Punkte konnten nicht gespeichert werden:", error);
    return;
  }

  currentProfile.points = newPoints;

  updateUserUI();
}


// ===============================
// KLASSEN
// ===============================

classButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedClass =
      Number(button.dataset.class);

    if (!selectedClass) return;

    currentClass = selectedClass;

    currentQuestion = 0;

    quizSource = null;
    quizQuestions = [];

    classButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    renderLearning();
  });
});


// ===============================
// MODI
// ===============================

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedMode =
      button.dataset.mode;

    if (!selectedMode) return;

    currentMode = selectedMode;

    currentQuestion = 0;

    quizSource = null;
    quizQuestions = [];

    modeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    renderLearning();
  });
});


// ===============================
// LEARNING RENDER
// ===============================

function renderLearning() {
  // Unit-Navigation NUR bei Vokabeln anzeigen
  if (vocabUnitNavigation) {
    vocabUnitNavigation.style.display =
      currentMode === "vocab" ? "" : "none";
  }

  if (currentMode === "vocab") {
    renderVocab();
    return;
  }

  if (currentMode === "quiz") {
    renderQuiz();
    return;
  }

  if (currentMode === "grammar") {
    renderGrammar();
    return;
  }

  if (currentMode === "exercise") {
    renderExercise();
    return;
  }
}


// ===============================
// VOKABELN
// ===============================

function renderVocabUnits() {
  if (!unitList) return;

  unitList.innerHTML = "";

  for (let unit = 1; unit <= 4; unit++) {
    const button = document.createElement("button");

    button.className = "unit-btn";
    button.textContent = `Unit ${unit}`;

    button.addEventListener("click", () => {
      renderVocabUnit(unit);
    });

    unitList.appendChild(button);
  }
}


function renderVocab() {
  if (!learningArea) return;

  renderVocabUnits();

  const lesson =
    lessons[currentClass];

  if (!lesson) {
    learningArea.innerHTML = `
      <div class="empty-state">
        <h2>📚 Vokabeln</h2>
        <p>Für diese Klasse wurden noch keine Vokabeln hinterlegt.</p>
      </div>
    `;

    return;
  }

  renderVocabUnit(1);
}


function renderVocabUnit(unitNumber) {
  if (!learningArea) return;

  learningArea.innerHTML = `
    <div class="vocab-card">
      <h2>📚 Vokabeln – ${currentClass}. Klasse</h2>
      <p>Unit ${unitNumber}</p>

      <div id="vocabList">
        <p>Vokabeln werden geladen...</p>
      </div>
    </div>
  `;

  loadVocabUnit(unitNumber);
}


async function loadVocabUnit(unitNumber) {
  const vocabList =
    document.getElementById("vocabList");

  if (!vocabList) return;

  const { data, error } =
    await supabaseClient
      .from("vocab")
      .select("english, german, example")
      .eq("class_number", currentClass)
      .eq("unit_number", unitNumber)
      .order("english");

  if (error) {
    console.error(error);

    vocabList.innerHTML = `
      <p class="error">
        Vokabeln konnten nicht geladen werden.
      </p>
    `;

    return;
  }

  if (!data || data.length === 0) {
    vocabList.innerHTML = `
      <p>
        Für Unit ${unitNumber} wurden noch keine Vokabeln eingetragen.
      </p>
    `;

    return;
  }

  vocabList.innerHTML = data
    .map((word) => `
      <div class="vocab-item">
        <div>
          <strong>${escapeHtml(word.english)}</strong>
        </div>

        <div>
          ${escapeHtml(word.german)}
        </div>

        ${
          word.example
            ? `
              <div class="example">
                ${escapeHtml(word.example)}
              </div>
            `
            : ""
        }
      </div>
    `)
    .join("");
}


// ===============================
// GRAMMATIK
// ===============================

function renderGrammar() {
  if (!learningArea) return;

  const lesson =
    lessons[currentClass];

  learningArea.innerHTML = `
    <div class="grammar-card">
      <h2>📖 Grammatik – ${currentClass}. Klasse</h2>

      <div class="grammar-content">
        ${
          lesson?.grammar ||
          "<p>Für diese Klasse wurde noch keine Grammatik eingetragen.</p>"
        }
      </div>

      ${
        lesson?.example
          ? `
            <div class="example">
              <strong>Beispiel:</strong><br>
              ${escapeHtml(lesson.example)}
            </div>
          `
          : ""
      }
    </div>
  `;
}


// ===============================
// QUIZ
// ===============================

function renderQuiz() {
  if (!learningArea) return;

  if (!quizSource) {
    renderQuizSelection();
    return;
  }

  if (!quizQuestions.length) {
    loadQuizQuestions();
    return;
  }

  renderQuizQuestion();
}


function renderQuizSelection() {
  learningArea.innerHTML = `
    <div class="quiz-card">

      <h2>🧠 Quiz</h2>

      <p>
        Was möchtest du üben?
      </p>

      <div class="quiz-source-list">

        <button
          class="quiz-source-btn"
          data-source="all"
        >
          📚 Alle Vokabeln
        </button>

        <button
          class="quiz-source-btn"
          data-source="unit-1"
        >
          📘 Unit 1
        </button>

        <button
          class="quiz-source-btn"
          data-source="unit-2"
        >
          📗 Unit 2
        </button>

        <button
          class="quiz-source-btn"
          data-source="unit-3"
        >
          📙 Unit 3
        </button>

        <button
          class="quiz-source-btn"
          data-source="unit-4"
        >
          📕 Unit 4
        </button>

        <button
          class="quiz-source-btn"
          data-source="grammar"
        >
          📖 Grammatik
        </button>

      </div>

    </div>
  `;

  document
    .querySelectorAll(".quiz-source-btn")
    .forEach((button) => {

      button.addEventListener("click", () => {

        quizSource =
          button.dataset.source;

        quizQuestions = [];
        currentQuestion = 0;

        renderQuiz();
      });

    });
}


// ===============================
// QUIZ FRAGEN LADEN
// ===============================

async function loadQuizQuestions() {
  if (!learningArea) return;

  learningArea.innerHTML = `
    <div class="quiz-card">
      <h2>🧠 Quiz</h2>
      <p>Fragen werden geladen...</p>
    </div>
  `;

  // =============================
  // GRAMMATIK
  // =============================

  if (quizSource === "grammar") {
    const questions =
      lessons[currentClass]?.questions || [];

    quizQuestions =
      shuffleArray([...questions]);

    currentQuestion = 0;

    if (!quizQuestions.length) {
      learningArea.innerHTML = `
        <div class="quiz-card">
          <h2>📖 Grammatik</h2>
          <p>
            Für diese Klasse gibt es noch keine Grammatik-Fragen.
          </p>

          <button id="quizBackButton" class="secondary-button">
            ← Auswahl ändern
          </button>
        </div>
      `;

      document
        .getElementById("quizBackButton")
        ?.addEventListener("click", () => {
          quizSource = null;
          quizQuestions = [];
          renderQuiz();
        });

      return;
    }

    renderQuizQuestion();
    return;
  }


  // =============================
  // VOKABELN AUS SUPABASE
  // =============================

  let query =
    supabaseClient
      .from("vocab")
      .select("english, german, unit_number")
      .eq("class_number", currentClass);

  if (quizSource.startsWith("unit-")) {
    const unitNumber =
      Number(
        quizSource.replace("unit-", "")
      );

    query =
      query.eq(
        "unit_number",
        unitNumber
      );
  }

  const { data, error } =
    await query;

  if (error) {
    console.error(error);

    learningArea.innerHTML = `
      <div class="quiz-card">
        <h2>❌ Fehler</h2>
        <p>
          Die Vokabeln konnten nicht geladen werden.
        </p>

        <button id="quizBackButton" class="secondary-button">
          ← Auswahl ändern
        </button>
      </div>
    `;

    document
      .getElementById("quizBackButton")
      ?.addEventListener("click", () => {
        quizSource = null;
        quizQuestions = [];
        renderQuiz();
      });

    return;
  }


  if (!data || data.length < 3) {
    learningArea.innerHTML = `
      <div class="quiz-card">
        <h2>⚠️ Zu wenige Vokabeln</h2>

        <p>
          Für dieses Quiz werden mindestens 3 Vokabeln benötigt.
        </p>

        <button id="quizBackButton" class="secondary-button">
          ← Auswahl ändern
        </button>
      </div>
    `;

    document
      .getElementById("quizBackButton")
      ?.addEventListener("click", () => {
        quizSource = null;
        quizQuestions = [];
        renderQuiz();
      });

    return;
  }


  // =============================
  // FRAGEN ERSTELLEN
  // =============================

  const shuffledWords =
    shuffleArray([...data]);

  quizQuestions =
    shuffledWords.map((word) => {

      const wrongAnswers =
        shuffleArray(
          data.filter(
            (item) =>
              item.german !== word.german
          )
        )
        .slice(0, 2)
        .map((item) => item.german);

      const options =
        shuffleArray([
          word.german,
          ...wrongAnswers
        ]);

      return {
        question:
          `Was bedeutet „${word.english}“?`,

        options,

        answer:
          word.german
      };
    });

  currentQuestion = 0;

  renderQuizQuestion();
}


// ===============================
// QUIZ FRAGE ANZEIGEN
// ===============================

function renderQuizQuestion() {
  if (!learningArea) return;

  if (
    currentQuestion >=
    quizQuestions.length
  ) {
    renderQuizFinished();
    return;
  }

  const question =
    quizQuestions[currentQuestion];

  const progress =
    `${currentQuestion + 1} / ${quizQuestions.length}`;

  learningArea.innerHTML = `
    <div class="quiz-card">

      <button
        id="quizBackButton"
        class="secondary-button"
      >
        ← Auswahl ändern
      </button>

      <div class="quiz-progress">
        Frage ${progress}
      </div>

      <h2>
        ${escapeHtml(question.question)}
      </h2>

      <div class="quiz-options">

        ${question.options
          .map(
            (option) => `
              <button
                class="quiz-option"
                data-answer="${escapeHtml(option)}"
              >
                ${escapeHtml(option)}
              </button>
            `
          )
          .join("")}

      </div>

      <div
        id="quizFeedback"
        class="quiz-feedback"
      ></div>

    </div>
  `;


  document
    .getElementById("quizBackButton")
    ?.addEventListener("click", () => {

      quizSource = null;
      quizQuestions = [];
      currentQuestion = 0;

      renderQuiz();
    });


  document
    .querySelectorAll(".quiz-option")
    .forEach((button) => {

      button.addEventListener("click", () => {

        handleQuizAnswer(
          button,
          question
        );

      });

    });
}


// ===============================
// QUIZ ANTWORT
// ===============================

async function handleQuizAnswer(
  clickedButton,
  question
) {
  const buttons =
    document.querySelectorAll(
      ".quiz-option"
    );

  buttons.forEach((button) => {
    button.disabled = true;
  });

  const selectedAnswer =
    clickedButton.dataset.answer;

  const feedback =
    document.getElementById(
      "quizFeedback"
    );


  if (
    selectedAnswer ===
    question.answer
  ) {

    clickedButton.classList.add(
      "correct"
    );

    if (feedback) {
      feedback.textContent =
        "✅ Richtig! +10 Punkte";
      feedback.className =
        "quiz-feedback correct";
    }

    await addPoints(10);

  } else {

    clickedButton.classList.add(
      "wrong"
    );

    buttons.forEach((button) => {

      if (
        button.dataset.answer ===
        question.answer
      ) {
        button.classList.add(
          "correct"
        );
      }

    });

    if (feedback) {
      feedback.textContent =
        `❌ Falsch! Richtig wäre: ${question.answer}`;

      feedback.className =
        "quiz-feedback wrong";
    }
  }


  setTimeout(() => {

    currentQuestion++;

    renderQuizQuestion();

  }, 1200);
}


// ===============================
// QUIZ FERTIG
// ===============================

function renderQuizFinished() {
  if (!learningArea) return;

  learningArea.innerHTML = `
    <div class="quiz-card quiz-finished">

      <h2>🎉 Quiz geschafft!</h2>

      <p>
        Du hast alle Fragen beantwortet.
      </p>

      <div class="quiz-finished-buttons">

        <button
          id="restartQuizButton"
          class="primary-button"
        >
          🔄 Nochmal spielen
        </button>

        <button
          id="changeQuizButton"
          class="secondary-button"
        >
          ← Andere Auswahl
        </button>

      </div>

    </div>
  `;


  document
    .getElementById("restartQuizButton")
    ?.addEventListener("click", () => {

      quizQuestions =
        shuffleArray(
          [...quizQuestions]
        );

      currentQuestion = 0;

      renderQuizQuestion();
    });


  document
    .getElementById("changeQuizButton")
    ?.addEventListener("click", () => {

      quizSource = null;
      quizQuestions = [];
      currentQuestion = 0;

      renderQuiz();
    });
}


// ===============================
// ÜBUNGEN
// ===============================

function renderExercise() {
  if (!learningArea) return;

  learningArea.innerHTML = `
    <div class="exercise-card">

      <h2>📝 Übungen</h2>

      <p>
        Hier kommen später verschiedene Übungen
        zu den Vokabeln und zur Grammatik hin.
      </p>

    </div>
  `;
}


// ===============================
// SHUFFLE
// ===============================

function shuffleArray(array) {
  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      result[i],
      result[j]
    ] = [
      result[j],
      result[i]
    ];
  }

  return result;
}


// ===============================
// LEADERBOARD
// ===============================

async function loadLeaderboard() {
  const leaderboardList =
    document.getElementById(
      "leaderboardList"
    );

  if (!leaderboardList) return;

  leaderboardList.innerHTML =
    "<p>Lade Rangliste...</p>";

  const classSelect =
    document.getElementById(
      "leaderboardClass"
    );

  const selectedClass =
    Number(
      classSelect?.value || 1
    );

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select(
        "username, points"
      )
      .order(
        "points",
        {
          ascending: false
        }
      );

  if (error) {
    console.error(error);

    leaderboardList.innerHTML =
      "<p>Rangliste konnte nicht geladen werden.</p>";

    return;
  }

  if (!data || !data.length) {
    leaderboardList.innerHTML =
      "<p>Noch keine Spieler vorhanden.</p>";

    return;
  }

  leaderboardList.innerHTML =
    data
      .map(
        (profile, index) => `
          <div class="leaderboard-row">

            <span>
              ${index + 1}.
            </span>

            <strong>
              ${escapeHtml(profile.username)}
            </strong>

            <span>
              ${profile.points || 0} Punkte
            </span>

          </div>
        `
      )
      .join("");
}


const refreshLeaderboardButton =
  document.getElementById(
    "refreshLeaderboardButton"
  );

if (refreshLeaderboardButton) {
  refreshLeaderboardButton.addEventListener(
    "click",
    loadLeaderboard
  );
}


// ===============================
// ADMIN
// ===============================

async function loadAdminUsers() {
  const usersTableBody =
    document.getElementById(
      "adminUsersBody"
    );

  if (!usersTableBody) return;

  usersTableBody.innerHTML =
    "<tr><td colspan='4'>Lade Benutzer...</td></tr>";

  const { data, error } =
    await supabaseClient.rpc(
      "admin_list_profiles"
    );

  if (error) {
    console.error(error);

    usersTableBody.innerHTML = `
      <tr>
        <td colspan="4">
          Benutzer konnten nicht geladen werden.
        </td>
      </tr>
    `;

    return;
  }

  usersTableBody.innerHTML =
    (data || [])
      .map(
        (user) => `
          <tr>

            <td>
              ${escapeHtml(user.username)}
            </td>

            <td>
              ${user.points || 0}
            </td>

            <td>
              ${user.is_admin ? "Ja" : "Nein"}
            </td>

            <td>
              ${user.created_at
                ? new Date(
                    user.created_at
                  ).toLocaleDateString("de-DE")
                : "-"
              }
            </td>

          </tr>
        `
      )
      .join("");
}


// ===============================
// START
// ===============================

async function initializeApp() {
  const {
    data
  } =
    await supabaseClient.auth.getSession();

  if (data?.session?.user) {

    currentUser =
      data.session.user;

    await loadProfile();

    if (currentProfile) {
      showApp();
      return;
    }
  }

  showAuth();
}


initializeApp();