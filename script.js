```javascript
/*
  ENGLISH MASTER – Supabase-Version

  Quiz:
  - Alle Vokabeln
  - einzelne Unit
  - Grammatik

  Vokabeln:
  - bisheriges Unit-System bleibt erhalten
*/

const SUPABASE_URL = "https://amrqkjyemjpyxxyugwyu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EUe8HwB24WogxOBCcs3fsg_9jt0AfhJ";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ============================================================
// LERNINHALTE
// ============================================================

const lessons = {

  1: {
    vocab: [
      ["hello", "hallo"],
      ["goodbye", "auf Wiedersehen"],
      ["book", "Buch"],
      ["school", "Schule"],
      ["friend", "Freund/in"],
      ["house", "Haus"],
      ["dog", "Hund"],
      ["cat", "Katze"],
      ["water", "Wasser"],
      ["apple", "Apfel"]
    ],

    grammar: "To be: I am, you are, he/she/it is, we are, you are, they are.",

    example:
      "I am a student. / You are my friend. / She is happy.",

    questions: [
      {
        q: "Was bedeutet „school“?",
        options: ["Schule", "Stuhl", "Fenster"],
        answer: 0
      },
      {
        q: "Welche Form passt? „I ___ happy.“",
        options: ["am", "is", "are"],
        answer: 0
      },
      {
        q: "Was bedeutet „dog“?",
        options: ["Katze", "Hund", "Maus"],
        answer: 1
      }
    ]
  },


  2: {
    vocab: [
      ["morning", "Morgen"],
      ["evening", "Abend"],
      ["breakfast", "Frühstück"],
      ["teacher", "Lehrer/in"],
      ["homework", "Hausaufgabe"],
      ["computer", "Computer"],
      ["weather", "Wetter"],
      ["summer", "Sommer"],
      ["Monday", "Montag"],
      ["beautiful", "schön"]
    ],

    grammar:
      "Simple Present: I play, you play, he/she/it plays. Bei he/she/it kommt meistens -s dazu.",

    example:
      "I play football. / He plays football. / They like music.",

    questions: [
      {
        q: "Welche Form ist richtig? „He ___ football.“",
        options: ["play", "plays", "playing"],
        answer: 1
      },
      {
        q: "Was bedeutet „homework“?",
        options: ["Hausaufgabe", "Ferien", "Frühstück"],
        answer: 0
      },
      {
        q: "Was bedeutet „Monday“?",
        options: ["Freitag", "Montag", "Mittwoch"],
        answer: 1
      }
    ]
  },


  3: {
    vocab: [
      ["usually", "normalerweise"],
      ["sometimes", "manchmal"],
      ["always", "immer"],
      ["never", "nie"],
      ["important", "wichtig"],
      ["interesting", "interessant"],
      ["journey", "Reise"],
      ["environment", "Umwelt"],
      ["future", "Zukunft"],
      ["healthy", "gesund"]
    ],

    grammar:
      "Past Simple: regelmäßige Verben bekommen oft -ed. Beispiel: play → played, visit → visited.",

    example:
      "I visited London last year. / We played yesterday.",

    questions: [
      {
        q: "Welche Vergangenheitsform stimmt? „visit → ___“",
        options: ["visited", "visiting", "visits"],
        answer: 0
      },
      {
        q: "Was bedeutet „environment“?",
        options: ["Umwelt", "Entscheidung", "Woche"],
        answer: 0
      },
      {
        q: "Was bedeutet „usually“?",
        options: ["nie", "normalerweise", "gestern"],
        answer: 1
      }
    ]
  },


  4: {
    vocab: [
      ["opportunity", "Möglichkeit"],
      ["experience", "Erfahrung"],
      ["decision", "Entscheidung"],
      ["although", "obwohl"],
      ["however", "jedoch"],
      ["improve", "verbessern"],
      ["probably", "wahrscheinlich"],
      ["future", "Zukunft"],
      ["responsibility", "Verantwortung"],
      ["achievement", "Erfolg/Leistung"]
    ],

    grammar:
      "First Conditional: If + Simple Present, will + Verb. Beispiel: If I study, I will learn more.",

    example:
      "If it rains, we will stay at home. / If you practise, you will improve.",

    questions: [
      {
        q: "Welche Form passt? „If I study, I ___ learn more.“",
        options: ["will", "am", "did"],
        answer: 0
      },
      {
        q: "Was bedeutet „although“?",
        options: ["deshalb", "obwohl", "während"],
        answer: 1
      },
      {
        q: "Was bedeutet „improve“?",
        options: ["vergessen", "verbessern", "beginnen"],
        answer: 1
      }
    ]
  }

};


// ============================================================
// STATUS
// ============================================================

let currentClass = 1;
let currentMode = "vocab";

let currentQuestion = 0;

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;

// NEU:
// quizSource = "all" | "unit" | "grammar"
let quizSource = "all";

// Welche Unit soll beim Quiz benutzt werden?
let quizUnit = 1;

// Die aktuell verwendeten Quizfragen
let activeQuizQuestions = [];


// ============================================================
// ELEMENTE
// ============================================================

const authScreen = document.getElementById("authScreen");
const mainScreen = document.getElementById("mainScreen");

const authForm = document.getElementById("authForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const authButton = document.getElementById("authButton");
const authMessage = document.getElementById("authMessage");

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const learningArea = document.getElementById("learningArea");

const pointsBadge = document.getElementById("pointsBadge");
const heroPoints = document.getElementById("heroPoints");
const heroUsername = document.getElementById("heroUsername");
const welcomeText = document.getElementById("welcomeText");

const logoutButton = document.getElementById("logoutButton");

const adminPanel = document.getElementById("adminPanel");
const adminUsers = document.getElementById("adminUsers");
const adminMessage = document.getElementById("adminMessage");
const refreshAdmin = document.getElementById("refreshAdmin");


// ============================================================
// HILFSFUNKTIONEN
// ============================================================

function setAuthMessage(text, error = true) {
  if (!authMessage) return;

  authMessage.textContent = text;
  authMessage.style.color = error ? "#c0392b" : "#18794e";
}


function setAdminMessage(text, error = true) {
  if (!adminMessage) return;

  adminMessage.textContent = text;
  adminMessage.style.color = error ? "#c0392b" : "#18794e";
}


function authEmail(username) {
  const safe = username
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "_");

  return `${safe}@english-master.local`;
}


function validUsername(username) {
  return /^[A-Za-z0-9_-]{3,20}$/.test(username);
}


function showLogin() {
  isRegisterMode = false;

  loginTab?.classList.add("active");
  registerTab?.classList.remove("active");

  if (authButton) {
    authButton.textContent = "Anmelden";
  }

  if (passwordInput) {
    passwordInput.autocomplete = "current-password";
  }

  setAuthMessage("");
}


function showRegister() {
  isRegisterMode = true;

  registerTab?.classList.add("active");
  loginTab?.classList.remove("active");

  if (authButton) {
    authButton.textContent = "Konto erstellen";
  }

  if (passwordInput) {
    passwordInput.autocomplete = "new-password";
  }

  setAuthMessage("");
}


// ============================================================
// PROFIL
// ============================================================

async function loadProfile(user) {

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, points, is_admin, created_at")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}


function updateUserUI() {

  if (!currentProfile) return;

  const username = currentProfile.username;
  const points = Number(currentProfile.points || 0);

  if (welcomeText) {
    welcomeText.textContent = `👤 ${username}`;
  }

  if (heroUsername) {
    heroUsername.textContent = username;
  }

  if (pointsBadge) {
    pointsBadge.textContent = `⭐ ${points} Punkte`;
  }

  if (heroPoints) {
    heroPoints.textContent = points;
  }

  if (currentProfile.is_admin) {
    adminPanel?.classList.remove("hidden");
    loadAdminUsers();
  } else {
    adminPanel?.classList.add("hidden");
  }
}


async function showApp(user) {

  currentUser = user;
  currentProfile = await loadProfile(user);

  if (!currentProfile) {

    await supabaseClient.auth.signOut();

    setAuthMessage(
      "Dein Profil konnte nicht geladen werden."
    );

    return;
  }

  authScreen?.classList.add("hidden");
  mainScreen?.classList.remove("hidden");

  updateUserUI();
  renderLearning();
}


function showAuth() {

  currentUser = null;
  currentProfile = null;

  mainScreen?.classList.add("hidden");
  authScreen?.classList.remove("hidden");

  if (usernameInput) usernameInput.value = "";
  if (passwordInput) passwordInput.value = "";

  showLogin();
}


// ============================================================
// REGISTRIERUNG / LOGIN
// ============================================================

authForm?.addEventListener("submit", async (event) => {

  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!validUsername(username)) {

    setAuthMessage(
      "Benutzername: 3–20 Zeichen, nur Buchstaben, Zahlen, _ und -."
    );

    return;
  }

  if (password.length < 6) {

    setAuthMessage(
      "Das Passwort muss mindestens 6 Zeichen haben."
    );

    return;
  }

  authButton.disabled = true;

  authButton.textContent =
    isRegisterMode
      ? "Konto wird erstellt..."
      : "Anmeldung...";

  try {

    const email = authEmail(username);

    if (isRegisterMode) {

      const { data, error } =
        await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              username
            }
          }
        });

      if (error) throw error;

      if (!data.user) {
        throw new Error(
          "Benutzer konnte nicht erstellt werden."
        );
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

        await supabaseClient.auth.signOut();

        throw new Error(
          "Konto erstellt, aber das Profil konnte nicht angelegt werden."
        );
      }

      setAuthMessage(
        "Konto erstellt! Du wirst angemeldet...",
        false
      );

      await showApp(data.user);

    } else {

      const { data, error } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password
        });

      if (error) throw error;

      await showApp(data.user);
    }

  } catch (error) {

    console.error(error);

    setAuthMessage(
      error.message || "Anmeldung fehlgeschlagen."
    );

  } finally {

    authButton.disabled = false;

    authButton.textContent =
      isRegisterMode
        ? "Konto erstellen"
        : "Anmelden";
  }

});


loginTab?.addEventListener("click", showLogin);
registerTab?.addEventListener("click", showRegister);


logoutButton?.addEventListener("click", async () => {

  await supabaseClient.auth.signOut();

  showAuth();
});


// ============================================================
// SESSION
// ============================================================

supabaseClient.auth.getSession().then(async ({ data }) => {

  if (data.session?.user) {
    await showApp(data.session.user);
  }

});


supabaseClient.auth.onAuthStateChange(
  async (event, session) => {

    if (event === "SIGNED_OUT") {

      showAuth();

    } else if (
      event === "SIGNED_IN" &&
      session?.user &&
      !currentUser
    ) {

      await showApp(session.user);
    }

  }
);


// ============================================================
// PUNKTE
// ============================================================

async function addPoints(amount) {

  if (!currentProfile) return;

  const newPoints =
    Number(currentProfile.points || 0) + amount;

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .update({
        points: newPoints
      })
      .eq("id", currentUser.id)
      .select("points")
      .single();

  if (error) {

    console.error(error);

    return;
  }

  currentProfile.points = data.points;

  updateUserUI();
}


// ============================================================
// KLASSE AUSWÄHLEN
// ============================================================

document.querySelectorAll(".class-btn").forEach(button => {

  button.addEventListener("click", () => {

    currentClass =
      Number(button.dataset.class);

    document
      .querySelectorAll(".class-btn")
      .forEach(b =>
        b.classList.remove("active")
      );

    button.classList.add("active");

    currentQuestion = 0;

    // Quiz-Auswahl zurücksetzen
    quizSource = "all";
    quizUnit = 1;

    renderLearning();
  });

});


// ============================================================
// LERNMODUS AUSWÄHLEN
// ============================================================

document.querySelectorAll(".mode-btn").forEach(button => {

  button.addEventListener("click", () => {

    currentMode =
      button.dataset.mode;

    currentQuestion = 0;

    document
      .querySelectorAll(".mode-btn")
      .forEach(b =>
        b.classList.remove("active")
      );

    button.classList.add("active");

    renderLearning();
  });

});


// ============================================================
// LERNEN RENDERN
// ============================================================

function renderLearning() {

  if (currentMode === "vocab") {
    renderVocab();
  }

  if (currentMode === "quiz") {
    renderQuiz();
  }

  if (currentMode === "grammar") {
    renderGrammar();
  }

  if (currentMode === "exercise") {
    renderExercise();
  }

}


// ============================================================
// VOKABELN
// ============================================================
//
// Das bisherige Unit-System bleibt erhalten.
//
// Falls du später echte Unit-Daten in Supabase hast,
// kann diese Funktion entsprechend erweitert werden.
// ============================================================

function renderVocab() {

  const lesson =
    lessons[currentClass];

  const words =
    lesson.vocab;

  learningArea.innerHTML = `

    <div class="vocab-header">

      <div>
        <h2>📚 Vokabeln – ${currentClass}. Klasse</h2>

        <p>
          Hier kannst du wichtige Wörter wiederholen.
        </p>
      </div>

    </div>

    <div class="content-grid">

      ${words.map(([en, de]) => `

        <div class="vocab-card">

          <strong>${escapeHtml(en)}</strong>

          <span>
            ${escapeHtml(de)}
          </span>

        </div>

      `).join("")}

    </div>

  `;
}


// ============================================================
// GRAMMATIK
// ============================================================

function renderGrammar() {

  const lesson =
    lessons[currentClass];

  learningArea.innerHTML = `

    <h2>
      📖 Grammatik – ${currentClass}. Klasse
    </h2>

    <p>
      ${escapeHtml(lesson.grammar)}
    </p>

    <div class="example">

      <strong>Beispiele:</strong>

      <br><br>

      ${escapeHtml(lesson.example)}

    </div>

  `;
}


// ============================================================
// QUIZ
// ============================================================
//
// NEU:
//
// Vor dem Quiz kann man auswählen:
//
// 🧠 Alle Vokabeln
// 📚 Unit 1
// 📚 Unit 2
// 📚 Unit 3
// 📚 Unit 4
// 📖 Grammatik
//
// ============================================================

function renderQuiz() {

  const lesson =
    lessons[currentClass];

  // Wenn noch keine Fragen ausgewählt wurden,
  // wird zuerst die Auswahl angezeigt.
  if (activeQuizQuestions.length === 0) {

    renderQuizSelection();

    return;
  }

  // Falls die Frage außerhalb des Bereichs liegt
  if (currentQuestion >= activeQuizQuestions.length) {
    currentQuestion = 0;
  }

  const q =
    activeQuizQuestions[currentQuestion];

  learningArea.innerHTML = `

    <div class="quiz-header">

      <div>

        <h2>
          🧠 Quiz – ${currentClass}. Klasse
        </h2>

        <p>
          ${getQuizSourceName()}
        </p>

      </div>

      <button
        id="changeQuizSelection"
        class="secondary-btn"
        type="button"
      >
        🔄 Auswahl ändern
      </button>

    </div>

    <p>
      Frage
      ${currentQuestion + 1}
      von
      ${activeQuizQuestions.length}
    </p>

    <h3>
      ${escapeHtml(q.q)}
    </h3>

    <div id="quizOptions">

      ${q.options.map((option, index) => `

        <button
          class="quiz-option"
          data-answer="${index}"
        >
          ${escapeHtml(option)}
        </button>

      `).join("")}

    </div>

    <p
      id="quizResult"
      class="quiz-result"
    ></p>

  `;


  document
    .getElementById("changeQuizSelection")
    ?.addEventListener("click", () => {

      activeQuizQuestions = [];
      currentQuestion = 0;

      renderQuizSelection();
    });


  document
    .querySelectorAll(".quiz-option")
    .forEach(button => {

      button.addEventListener("click", () => {

        const selected =
          Number(button.dataset.answer);

        const result =
          document.getElementById("quizResult");

        document
          .querySelectorAll(".quiz-option")
          .forEach(b =>
            b.disabled = true
          );

        if (selected === q.answer) {

          result.textContent =
            "✅ Richtig! +10 Punkte";

          result.style.color =
            "#18794e";

          addPoints(10);

        } else {

          result.textContent =
            `❌ Nicht ganz. Richtig wäre: ${q.options[q.answer]}`;

          result.style.color =
            "#c0392b";
        }

        setTimeout(() => {

          currentQuestion =
            (currentQuestion + 1) %
            activeQuizQuestions.length;

          renderQuiz();

        }, 1200);

      });

    });

}


// ============================================================
// QUIZ AUSWAHL
// ============================================================

function renderQuizSelection() {

  const lesson =
    lessons[currentClass];

  const unitCount =
    Math.max(
      1,
      Object.keys(lessons).length
    );

  learningArea.innerHTML = `

    <div class="quiz-selection">

      <h2>
        🧠 Quiz auswählen
      </h2>

      <p>
        Wähle aus, was du im Quiz üben möchtest.
      </p>


      <div class="quiz-selection-options">

        <button
          class="quiz-select-btn"
          data-quiz-source="all"
          type="button"
        >

          <strong>
            📚 Alle Vokabeln
          </strong>

          <span>
            Alle Vokabeln dieser Klasse
          </span>

        </button>


        ${Array.from(
          { length: unitCount },
          (_, index) => {

            const unit =
              index + 1;

            return `

              <button
                class="quiz-select-btn"
                data-quiz-source="unit"
                data-unit="${unit}"
                type="button"
              >

                <strong>
                  📘 Unit ${unit}
                </strong>

                <span>
                  Nur Unit ${unit}
                </span>

              </button>

            `;

          }
        ).join("")}


        <button
          class="quiz-select-btn"
          data-quiz-source="grammar"
          type="button"
        >

          <strong>
            📖 Grammatik
          </strong>

          <span>
            Grammatikfragen üben
          </span>

        </button>

      </div>

    </div>

  `;


  document
    .querySelectorAll(".quiz-select-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        const source =
          button.dataset.quizSource;

        quizSource = source;

        if (source === "unit") {

          quizUnit =
            Number(button.dataset.unit);

        }

        currentQuestion = 0;

        activeQuizQuestions =
          createQuizQuestions();

        if (activeQuizQuestions.length === 0) {

          learningArea.innerHTML = `

            <div class="empty-unit">

              <h2>
                😕 Keine Fragen vorhanden
              </h2>

              <p>
                Für diese Auswahl gibt es noch keine Quizfragen.
              </p>

              <button
                id="backToQuizSelection"
                class="secondary-btn"
                type="button"
              >
                ← Zurück
              </button>

            </div>

          `;

          document
            .getElementById("backToQuizSelection")
            ?.addEventListener("click", () => {

              activeQuizQuestions = [];
              renderQuizSelection();

            });

          return;
        }

        renderQuiz();

      });

    });

}


// ============================================================
// QUIZFRAGEN ERSTELLEN
// ============================================================

function createQuizQuestions() {

  const lesson =
    lessons[currentClass];

  // ----------------------------------------------------------
  // GRAMMATIK
  // ----------------------------------------------------------

  if (quizSource === "grammar") {

    return createGrammarQuestions();
  }


  // ----------------------------------------------------------
  // VOKABELN
  // ----------------------------------------------------------

  let vocab = [];

  if (quizSource === "all") {

    vocab = lesson.vocab;

  } else if (quizSource === "unit") {

    /*
      WICHTIG:

      Hier wird die Unit berücksichtigt.

      Wenn deine echten Vokabeln später so aufgebaut sind:

      vocab: [
        ["lion", "Löwe", 1],
        ["tree", "Baum", 1],
        ["ship", "Schiff", 2]
      ]

      dann kann diese Funktion direkt danach filtern.

      Für die aktuell vorhandenen Beispieldaten gibt es
      noch keine Unit-Nummer. Deshalb wird bei den
      Beispieldaten eine leere Auswahl vermieden.
    */

    vocab =
      lesson.vocab.filter(word => {

        return Number(word[2]) === quizUnit;

      });

  }


  return createVocabQuestions(vocab);
}


// ============================================================
// VOKABEL-QUIZFRAGEN
// ============================================================

function createVocabQuestions(vocab) {

  if (!vocab || vocab.length === 0) {
    return [];
  }

  const questions = [];

  vocab.forEach(([english, german]) => {

    const otherWords =
      vocab
        .filter(word => word[1] !== german)
        .map(word => word[1]);

    const wrongAnswers =
      shuffleArray(otherWords).slice(0, 2);

    if (wrongAnswers.length < 2) {
      return;
    }

    const options =
      shuffleArray([
        german,
        ...wrongAnswers
      ]);

    questions.push({

      q: `Was bedeutet „${english}“?`,

      options,

      answer:
        options.indexOf(german)

    });

  });

  return shuffleArray(questions);
}


// ============================================================
// GRAMMATIKFRAGEN
// ============================================================

function createGrammarQuestions() {

  const lesson =
    lessons[currentClass];

  // Die bisherigen Grammatikfragen werden verwendet,
  // sofern sie Grammatikfragen enthalten.

  const grammarQuestions =
    lesson.questions.filter(question => {

      return (
        question.q.includes("Form") ||
        question.q.includes("Vergangenheitsform") ||
        question.q.includes("If") ||
        question.q.includes("Simple")
      );

    });

  // Falls keine passenden Fragen vorhanden sind,
  // wird die vorhandene Frageliste verwendet.

  if (grammarQuestions.length > 0) {
    return shuffleArray(
      grammarQuestions
    );
  }

  return shuffleArray(
    lesson.questions
  );
}


// ============================================================
// QUIZ AUSWAHL NAME
// ============================================================

function getQuizSourceName() {

  if (quizSource === "all") {
    return "📚 Alle Vokabeln";
  }

  if (quizSource === "unit") {
    return `📘 Unit ${quizUnit}`;
  }

  if (quizSource === "grammar") {
    return "📖 Grammatik";
  }

  return "🧠 Quiz";
}


// ============================================================
// ARRAY MISCHEN
// ============================================================

function shuffleArray(array) {

  const copy =
    [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      copy[i],
      copy[j]
    ] = [
      copy[j],
      copy[i]
    ];

  }

  return copy;
}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const lesson =
    lessons[currentClass];

  learningArea.innerHTML = `

    <h2>
      ✏️ Übungen – ${currentClass}. Klasse
    </h2>

    <p>
      Schreibe einen eigenen englischen Satz
      mit einem Wort aus den Vokabeln.
    </p>

    <div class="example">

      <strong>Aufgabe:</strong>

      <br>

      Verwende das Wort

      <strong>
        ${escapeHtml(lesson.vocab[0][0])}
      </strong>

      in einem englischen Satz.

    </div>

    <label for="exerciseInput">
      Dein Satz
    </label>

    <input
      id="exerciseInput"
      type="text"
      placeholder="Write your sentence here..."
    >

    <button
      id="exerciseButton"
      class="primary-btn"
      style="max-width:260px;"
    >
      Übung abschließen
    </button>

    <p
      id="exerciseResult"
      class="quiz-result"
    ></p>

  `;


  document
    .getElementById("exerciseButton")
    ?.addEventListener("click", async () => {

      const input =
        document.getElementById("exerciseInput");

      const result =
        document.getElementById("exerciseResult");

      if (input.value.trim().length < 4) {

        result.textContent =
          "Bitte schreibe einen etwas längeren Satz.";

        result.style.color =
          "#c0392b";

        return;
      }

      result.textContent =
        "✅ Übung abgeschlossen! +5 Punkte";

      result.style.color =
        "#18794e";

      input.disabled = true;

      document
        .getElementById("exerciseButton")
        .disabled = true;

      await addPoints(5);

    });

}


// ============================================================
// ADMIN
// ============================================================

async function loadAdminUsers() {

  if (!currentProfile?.is_admin) {
    return;
  }

  setAdminMessage(
    "Lade Benutzer...",
    false
  );

  const { data, error } =
    await supabaseClient
      .rpc("admin_list_profiles");

  if (error) {

    console.error(error);

    if (adminUsers) {
      adminUsers.innerHTML = "";
    }

    setAdminMessage(
      "Admin-Liste konnte nicht geladen werden."
    );

    return;
  }

  if (adminUsers) {

    adminUsers.innerHTML =
      data.map(user => `

        <tr>

          <td>
            ${escapeHtml(user.username)}
          </td>

          <td>
            ⭐ ${Number(user.points || 0)}
          </td>

          <td>
            ${user.class || "-"}
          </td>

          <td>
            ${user.is_admin ? "Ja" : "Nein"}
          </td>

          <td>
            ${new Date(
              user.created_at
            ).toLocaleDateString("de-AT")}
          </td>

        </tr>

      `).join("");

  }

  setAdminMessage(
    `${data.length} Benutzer gefunden.`,
    false
  );
}


// ============================================================
// HTML SICHER MACHEN
// ============================================================

function escapeHtml(value) {

  return String(value)

    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


// ============================================================
// ADMIN AKTUALISIEREN
// ============================================================

refreshAdmin?.addEventListener(
  "click",
  loadAdminUsers
);
```
