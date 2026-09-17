```javascript
/*
  ENGLISH MASTER – Supabase-Version

  Originaler Login bleibt erhalten.
  Quiz:
  - Alle Vokabeln
  - einzelne Units
  - Grammatik
*/


// ============================================================
// SUPABASE
// ============================================================

const SUPABASE_URL = "https://amrqkjyemjpyxxyugwyu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_EUe8HwB24WogxOBCcs3fsg_9jt0AfhJ";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ============================================================
// LERNINHALTE
// ============================================================

const lessons = {
  1: {
    units: [
      {
        unit: 1,
        vocab: [
          ["hello", "hallo"],
          ["goodbye", "auf Wiedersehen"],
          ["book", "Buch"],
          ["school", "Schule"],
          ["friend", "Freund/in"]
        ]
      },
      {
        unit: 2,
        vocab: [
          ["house", "Haus"],
          ["dog", "Hund"],
          ["cat", "Katze"],
          ["water", "Wasser"],
          ["apple", "Apfel"]
        ]
      }
    ],

    grammar:
      "To be: I am, you are, he/she/it is, we are, you are, they are.",

    example:
      "I am a student. / You are my friend. / She is happy."
  },

  2: {
    units: [
      {
        unit: 1,
        vocab: [
          ["morning", "Morgen"],
          ["evening", "Abend"],
          ["breakfast", "Frühstück"],
          ["teacher", "Lehrer/in"],
          ["homework", "Hausaufgabe"]
        ]
      },
      {
        unit: 2,
        vocab: [
          ["computer", "Computer"],
          ["weather", "Wetter"],
          ["summer", "Sommer"],
          ["Monday", "Montag"],
          ["beautiful", "schön"]
        ]
      }
    ],

    grammar:
      "Simple Present: I play, you play, he/she/it plays. Bei he/she/it kommt meistens -s dazu.",

    example:
      "I play football. / He plays football. / They like music."
  },

  3: {
    units: [
      {
        unit: 1,
        vocab: [
          ["usually", "normalerweise"],
          ["sometimes", "manchmal"],
          ["always", "immer"],
          ["never", "nie"],
          ["important", "wichtig"]
        ]
      },
      {
        unit: 2,
        vocab: [
          ["interesting", "interessant"],
          ["journey", "Reise"],
          ["environment", "Umwelt"],
          ["future", "Zukunft"],
          ["healthy", "gesund"]
        ]
      }
    ],

    grammar:
      "Past Simple: regelmäßige Verben bekommen oft -ed. Beispiel: play → played, visit → visited.",

    example:
      "I visited London last year. / We played yesterday."
  },

  4: {
    units: [
      {
        unit: 1,
        vocab: [
          ["opportunity", "Möglichkeit"],
          ["experience", "Erfahrung"],
          ["decision", "Entscheidung"],
          ["although", "obwohl"],
          ["however", "jedoch"]
        ]
      },
      {
        unit: 2,
        vocab: [
          ["improve", "verbessern"],
          ["probably", "wahrscheinlich"],
          ["future", "Zukunft"],
          ["responsibility", "Verantwortung"],
          ["achievement", "Erfolg/Leistung"]
        ]
      }
    ],

    grammar:
      "First Conditional: If + Simple Present, will + Verb. Beispiel: If I study, I will learn more.",

    example:
      "If it rains, we will stay at home. / If you practise, you will improve."
  }
};


// ============================================================
// VARIABLEN
// ============================================================

let currentClass = 1;
let currentMode = "vocab";

let currentQuestion = 0;

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;

// Quiz-Auswahl
let quizSelection = "all";


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
  authMessage.style.color = error
    ? "#c0392b"
    : "#18794e";
}


function setAdminMessage(text, error = true) {
  if (!adminMessage) return;

  adminMessage.textContent = text;
  adminMessage.style.color = error
    ? "#c0392b"
    : "#18794e";
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


// ============================================================
// LOGIN / REGISTRIERUNG
// ============================================================

function showLogin() {
  isRegisterMode = false;

  loginTab.classList.add("active");
  registerTab.classList.remove("active");

  authButton.textContent = "Anmelden";

  passwordInput.autocomplete = "current-password";

  setAuthMessage("");
}


function showRegister() {
  isRegisterMode = true;

  registerTab.classList.add("active");
  loginTab.classList.remove("active");

  authButton.textContent = "Konto erstellen";

  passwordInput.autocomplete = "new-password";

  setAuthMessage("");
}


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

  welcomeText.textContent = `👤 ${username}`;

  heroUsername.textContent = username;

  pointsBadge.textContent = `⭐ ${points} Punkte`;

  heroPoints.textContent = points;

  if (currentProfile.is_admin) {
    adminPanel.classList.remove("hidden");
    loadAdminUsers();
  } else {
    adminPanel.classList.add("hidden");
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

  authScreen.classList.add("hidden");

  mainScreen.classList.remove("hidden");

  updateUserUI();

  renderLearning();
}


function showAuth() {
  currentUser = null;
  currentProfile = null;

  mainScreen.classList.add("hidden");

  authScreen.classList.remove("hidden");

  usernameInput.value = "";
  passwordInput.value = "";

  showLogin();
}


// ============================================================
// AUTH FORM
// ============================================================

authForm.addEventListener("submit", async (event) => {
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

  authButton.textContent = isRegisterMode
    ? "Konto wird erstellt..."
    : "Anmeldung...";

  try {
    const email = authEmail(username);

    // --------------------------------------------------------
    // REGISTRIEREN
    // --------------------------------------------------------

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

    }

    // --------------------------------------------------------
    // ANMELDEN
    // --------------------------------------------------------

    else {

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

    authButton.textContent = isRegisterMode
      ? "Konto erstellen"
      : "Anmelden";
  }
});


loginTab.addEventListener(
  "click",
  showLogin
);

registerTab.addEventListener(
  "click",
  showRegister
);


logoutButton.addEventListener(
  "click",
  async () => {
    await supabaseClient.auth.signOut();
    showAuth();
  }
);


// ============================================================
// SESSION
// ============================================================

supabaseClient.auth
  .getSession()
  .then(async ({ data }) => {

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

  if (!currentProfile || !currentUser) return;

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
// KLASSE
// ============================================================

document
  .querySelectorAll(".class-btn")
  .forEach(button => {

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

      quizSelection = "all";

      renderLearning();
    });

  });


// ============================================================
// LERNMODI
// ============================================================

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      currentMode =
        button.dataset.mode;

      currentQuestion = 0;

      if (currentMode === "quiz") {
        quizSelection = "all";
      }

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
// RENDER LEARNING
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

function renderVocab() {

  const lesson = lessons[currentClass];

  const units = lesson.units;

  learningArea.innerHTML = `

    <div class="vocab-unit-navigation">

      <div class="unit-header">

        <div>

          <h2>📚 Vokabeln</h2>

          <p>
            Wähle eine Unit aus.
          </p>

        </div>

      </div>


      <div id="unitList" class="unit-list">

        ${units.map(unit => `

          <details class="unit">

            <summary>

              <strong>
                Unit ${unit.unit}
              </strong>

              <span>
                ${unit.vocab.length} Vokabeln
              </span>

            </summary>

            <div class="unit-content">

              <div class="content-grid">

                ${unit.vocab.map(([en, de]) => `

                  <div class="vocab-card">

                    <strong>${escapeHtml(en)}</strong>

                    <span>${escapeHtml(de)}</span>

                  </div>

                `).join("")}

              </div>

            </div>

          </details>

        `).join("")}

      </div>

    </div>

  `;
}


// ============================================================
// GRAMMATIK
// ============================================================

function renderGrammar() {

  const lesson = lessons[currentClass];

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
// QUIZ-FRAGEN AUS VOKABELN ERSTELLEN
// ============================================================

function createVocabQuestions(words) {

  const questions = [];

  words.forEach(([english, german]) => {

    const otherWords =
      words
        .filter(word => word[0] !== english)
        .map(word => word[1]);

    const wrongAnswers =
      shuffleArray(otherWords).slice(0, 2);

    if (wrongAnswers.length < 2) return;

    const options =
      shuffleArray([
        german,
        ...wrongAnswers
      ]);

    questions.push({
      q: `Was bedeutet „${english}“?`,
      options,
      answer: options.indexOf(german)
    });

  });

  return questions;
}


// ============================================================
// QUIZ
// ============================================================

function renderQuiz() {

  const lesson = lessons[currentClass];

  const allWords =
    lesson.units.flatMap(unit => unit.vocab);


  // ----------------------------------------------------------
  // GRAMMATIK QUIZ
  // ----------------------------------------------------------

  const grammarQuestion = {
    q: "Welche Aussage gehört zur Grammatik dieser Klasse?",
    options: [
      lesson.grammar,
      "Diese Regel gibt es im Englischen nicht.",
      "Im Englischen werden alle Verben gleich verwendet."
    ],
    answer: 0
  };


  // ----------------------------------------------------------
  // AUSGEWÄHLTE VOKABELN
  // ----------------------------------------------------------

  let selectedWords = allWords;

  if (quizSelection !== "all") {

    const selectedUnit =
      lesson.units.find(
        unit =>
          String(unit.unit) ===
          String(quizSelection)
      );

    if (selectedUnit) {
      selectedWords = selectedUnit.vocab;
    }
  }


  let questions;

  if (quizSelection === "grammar") {

    questions = [grammarQuestion];

  } else {

    questions =
      createVocabQuestions(selectedWords);

  }


  if (!questions.length) {

    learningArea.innerHTML = `

      <h2>🧠 Quiz – ${currentClass}. Klasse</h2>

      <p>
        Für diese Auswahl sind noch keine Quizfragen vorhanden.
      </p>

    `;

    return;
  }


  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }


  const q = questions[currentQuestion];


  // ----------------------------------------------------------
  // QUIZ AUSWAHL
  // ----------------------------------------------------------

  learningArea.innerHTML = `

    <h2>
      🧠 Quiz – ${currentClass}. Klasse
    </h2>


    <div class="quiz-selection">

      <h3>
        📚 Was möchtest du üben?
      </h3>

      <p>
        Wähle alle Vokabeln, eine bestimmte Unit oder Grammatik.
      </p>


      <div class="quiz-unit-grid">

        <button
          type="button"
          class="quiz-unit-btn quiz-all-btn ${quizSelection === "all" ? "active" : ""}"
          data-quiz-selection="all"
        >

          <span class="quiz-unit-title">
            📚 Alle Vokabeln
          </span>

          <span class="quiz-unit-info">
            Alle Units dieser Klasse
          </span>

        </button>


        ${lesson.units.map(unit => `

          <button
            type="button"
            class="quiz-unit-btn ${String(quizSelection) === String(unit.unit) ? "active" : ""}"
            data-quiz-selection="${unit.unit}"
          >

            <span class="quiz-unit-title">
              📖 Unit ${unit.unit}
            </span>

            <span class="quiz-unit-info">
              ${unit.vocab.length} Vokabeln
            </span>

          </button>

        `).join("")}


        <button
          type="button"
          class="quiz-unit-btn ${quizSelection === "grammar" ? "active" : ""}"
          data-quiz-selection="grammar"
        >

          <span class="quiz-unit-title">
            📖 Grammatik
          </span>

          <span class="quiz-unit-info">
            Grammatik-Regeln üben
          </span>

        </button>

      </div>

    </div>


    <p>
      Frage ${currentQuestion + 1}
      von ${questions.length}
    </p>


    <h3>
      ${escapeHtml(q.q)}
    </h3>


    <div id="quizOptions">

      ${q.options.map((option, index) => `

        <button
          class="quiz-option"
          data-answer="${index}"
          type="button"
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


  // ----------------------------------------------------------
  // QUIZ UNIT BUTTONS
  // ----------------------------------------------------------

  document
    .querySelectorAll("[data-quiz-selection]")
    .forEach(button => {

      button.addEventListener("click", () => {

        quizSelection =
          button.dataset.quizSelection;

        currentQuestion = 0;

        renderQuiz();

      });

    });


  // ----------------------------------------------------------
  // ANTWORTEN
  // ----------------------------------------------------------

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
          .forEach(b => {
            b.disabled = true;
          });


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
            questions.length;

          renderQuiz();

        }, 1200);

      });

    });

}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const lesson = lessons[currentClass];

  const allWords =
    lesson.units.flatMap(unit => unit.vocab);

  const randomWord =
    allWords[
      Math.floor(Math.random() * allWords.length)
    ];


  learningArea.innerHTML = `

    <h2>
      ✏️ Übungen – ${currentClass}. Klasse
    </h2>

    <p>
      Schreibe einen englischen Satz mit dem vorgegebenen Wort.
    </p>


    <div class="example">

      <strong>Aufgabe:</strong>

      <br><br>

      Verwende das Wort

      <strong>
        ${escapeHtml(randomWord[0])}
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
      autocomplete="off"
    >


    <button
      id="exerciseButton"
      class="primary-btn"
      style="max-width:260px;"
      type="button"
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
    .addEventListener("click", async () => {

      const input =
        document.getElementById("exerciseInput");

      const result =
        document.getElementById("exerciseResult");


      const sentence =
        input.value.trim();


      if (sentence.length < 4) {

        result.textContent =
          "❌ Bitte schreibe einen vollständigen Satz.";

        result.style.color =
          "#c0392b";

        return;
      }


      // ------------------------------------------------------
      // Einfaches Rechtschreibsystem
      // ------------------------------------------------------

      const normalizedSentence =
        sentence
          .toLowerCase()
          .replace(/[.,!?]/g, "")
          .trim();


      const normalizedWord =
        randomWord[0]
          .toLowerCase()
          .trim();


      if (
        !normalizedSentence.includes(
          normalizedWord
        )
      ) {

        result.textContent =
          `❌ Dein Satz sollte das Wort „${randomWord[0]}“ enthalten.`;

        result.style.color =
          "#c0392b";

        return;
      }


      // ------------------------------------------------------
      // Einfache Satzprüfung
      // ------------------------------------------------------

      const words =
        normalizedSentence.split(/\s+/);


      if (words.length < 3) {

        result.textContent =
          "❌ Versuche einen etwas längeren Satz zu schreiben.";

        result.style.color =
          "#c0392b";

        return;
      }


      // Großbuchstaben am Satzanfang prüfen
      const firstCharacter =
        sentence.charAt(0);

      if (
        firstCharacter !==
        firstCharacter.toUpperCase()
      ) {

        result.textContent =
          "❌ Beginne deinen Satz mit einem Großbuchstaben.";

        result.style.color =
          "#c0392b";

        return;
      }


      // Satzzeichen prüfen
      if (!/[.!?]$/.test(sentence)) {

        result.textContent =
          "❌ Setze am Ende des Satzes ein Satzzeichen.";

        result.style.color =
          "#c0392b";

        return;
      }


      // ------------------------------------------------------
      // ERFOLG
      // ------------------------------------------------------

      result.textContent =
        "✅ Sehr gut! Satz ist korrekt aufgebaut. +5 Punkte";

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
// SHUFFLE
// ============================================================

function shuffleArray(array) {

  const result =
    [...array];

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


// ============================================================
// HTML SICHER AUSGEBEN
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


  const {
    data,
    error
  } =
    await supabaseClient
      .rpc("admin_list_profiles");


  if (error) {

    console.error(error);

    adminUsers.innerHTML = "";

    setAdminMessage(
      "Admin-Liste konnte nicht geladen werden. Die Admin-SQL-Funktion muss noch eingerichtet werden."
    );

    return;
  }


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
          ${escapeHtml(user.class || "-")}
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


  setAdminMessage(
    `${data.length} Benutzer gefunden.`,
    false
  );
}


if (refreshAdmin) {

  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );

}
```
