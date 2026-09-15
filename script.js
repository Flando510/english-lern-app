/*
  ENGLISH MASTER – Supabase-Version

  Funktionen:
  - Login / Registrierung
  - Profile und Punkte
  - Admin-Erkennung über profiles.is_admin
  - Gemeinsame Vokabeln aus Supabase
  - Admin kann Vokabeln hinzufügen
  - Admin kann Vokabeln löschen
  - Vokabeln werden nach Klasse getrennt
  - Neue Vokabeln erscheinen bei allen Benutzern
  - Neue Vokabeln werden im Quiz verwendet
  - Neue Vokabeln werden bei Übungen verwendet
*/

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

    grammar:
      "To be: I am, you are, he/she/it is, we are, you are, they are.",

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
// VARIABLEN
// ============================================================

let currentClass = 1;
let currentMode = "vocab";
let currentQuestion = 0;

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;


// ============================================================
// HTML-ELEMENTE
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
  authMessage.textContent = text;
  authMessage.style.color = error ? "#c0392b" : "#18794e";
}


function setAdminMessage(text, error = true) {
  adminMessage.textContent = text;
  adminMessage.style.color = error ? "#c0392b" : "#18794e";
}


/*
  Supabase benötigt eine gültige E-Mail-Adresse.
  Deshalb verwenden wir die Supabase-Projekt-Domain.
*/
function authEmail(username) {
  const safe = username
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "_");

  return `${safe}@amrqkjyemjpyxxyugwyu.supabase.co`;
}


function validUsername(username) {
  return /^[A-Za-z0-9_-]{3,20}$/.test(username);
}


function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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


loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);


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
    // REGISTRIERUNG
    // --------------------------------------------------------

    if (isRegisterMode) {

      const { data, error } =
        await supabaseClient.auth.signUp({
          email,
          password,

          options: {
            data: {
              username: username
            }
          }
        });

      if (error) {
        throw error;
      }

      if (!data.user) {
        throw new Error(
          "Benutzer konnte nicht erstellt werden."
        );
      }

      /*
        WICHTIG:
        Das Profil wird automatisch durch deinen
        Supabase-Trigger erstellt.

        Deshalb machen wir hier KEINEN zusätzlichen
        profiles.insert().
      */

      setAuthMessage(
        "Konto erstellt! Du wirst angemeldet...",
        false
      );

      /*
        Falls E-Mail-Bestätigung deaktiviert ist,
        sollte direkt eine Session vorhanden sein.
      */
      if (data.session?.user) {
        await showApp(data.session.user);
      } else {
        setAuthMessage(
          "Konto erstellt. Bitte melde dich jetzt an.",
          false
        );

        showLogin();
      }

    }

    // --------------------------------------------------------
    // LOGIN
    // --------------------------------------------------------

    else {

      const { data, error } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password
        });

      if (error) {
        throw error;
      }

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


// ============================================================
// PROFIL
// ============================================================

async function loadProfile(user) {

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, points, is_admin, created_at"
      )
      .eq("id", user.id)
      .single();

  if (error) {
    console.error("Profil-Fehler:", error);
    return null;
  }

  return data;
}


function updateUserUI() {

  if (!currentProfile) {
    return;
  }

  const username = currentProfile.username;
  const points = Number(
    currentProfile.points || 0
  );

  welcomeText.textContent =
    `👤 ${username}`;

  heroUsername.textContent =
    username;

  pointsBadge.textContent =
    `⭐ ${points} Punkte`;

  heroPoints.textContent =
    points;


  // ADMIN-BEREICH

  if (currentProfile.is_admin === true) {

    adminPanel.classList.remove("hidden");

    loadAdminUsers();

  } else {

    adminPanel.classList.add("hidden");
  }
}


// ============================================================
// APP ANZEIGEN
// ============================================================

async function showApp(user) {

  currentUser = user;

  currentProfile =
    await loadProfile(user);


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

  await renderLearning();
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
// LOGOUT
// ============================================================

logoutButton.addEventListener("click", async () => {

  await supabaseClient.auth.signOut();

  showAuth();
});


// ============================================================
// SESSION BEIM START
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

  if (!currentProfile || !currentUser) {
    return;
  }

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

    console.error(
      "Punkte konnten nicht gespeichert werden:",
      error
    );

    return;
  }


  currentProfile.points =
    data.points;

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

      renderLearning();
    });
  });


// ============================================================
// MODUS
// ============================================================

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

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
// LERNBEREICH
// ============================================================

async function renderLearning() {

  if (currentMode === "vocab") {
    await renderVocab();
  }

  if (currentMode === "quiz") {
    await renderQuiz();
  }

  if (currentMode === "grammar") {
    renderGrammar();
  }

  if (currentMode === "exercise") {
    await renderExercise();
  }
}


// ============================================================
// VOKABELN AUS SUPABASE LADEN
// ============================================================

async function getVocabForClass(classNumber) {

  // Normale fest eingebaute Vokabeln
  const normalWords =
    lessons[classNumber].vocab.map(
      ([english, german]) => ({
        id: null,
        english,
        german
      })
    );


  // Zusätzliche Vokabeln aus Supabase
  const { data, error } =
    await supabaseClient
      .from("vocab")
      .select(
        "id, class_number, english, german, created_at"
      )
      .eq("class_number", classNumber)
      .order("created_at", {
        ascending: true
      });


  if (error) {

    console.error(
      "Vokabeln konnten nicht geladen werden:",
      error
    );

    return normalWords;
  }


  const adminWords =
    (data || []).map(word => ({
      id: word.id,
      english: word.english,
      german: word.german
    }));


  return [
    ...normalWords,
    ...adminWords
  ];
}


// ============================================================
// VOKABELN ANZEIGEN
// ============================================================

async function renderVocab() {

  learningArea.innerHTML = `
    <h2>
      📚 Vokabeln – ${currentClass}. Klasse
    </h2>

    <p>
      Hier kannst du wichtige Wörter wiederholen.
    </p>

    <div
      id="vocabAdminArea"
      class="vocab-admin-area hidden"
    >
      <button
        id="addVocabButton"
        class="primary-btn add-vocab-btn"
        type="button"
      >
        ➕ Vokabel hinzufügen
      </button>
    </div>

    <div
      id="vocabList"
      class="content-grid"
    >
      <p>Vokabeln werden geladen...</p>
    </div>
  `;


  // ----------------------------------------------------------
  // ADMIN-BUTTON
  // ----------------------------------------------------------

  const vocabAdminArea =
    document.getElementById("vocabAdminArea");

  const addVocabButton =
    document.getElementById("addVocabButton");


  if (currentProfile?.is_admin === true) {

    vocabAdminArea.classList.remove("hidden");

    addVocabButton.addEventListener(
      "click",
      showAddVocabForm
    );
  }


  // ----------------------------------------------------------
  // VOKABELN LADEN
  // ----------------------------------------------------------

  const words =
    await getVocabForClass(currentClass);


  const vocabList =
    document.getElementById("vocabList");


  if (!words.length) {

    vocabList.innerHTML = `
      <p>
        Für diese Klasse gibt es noch keine Vokabeln.
      </p>
    `;

    return;
  }


  vocabList.innerHTML =
    words.map(word => `

      <div class="vocab-card">

        <strong>
          ${escapeHtml(word.english)}
        </strong>

        <span>
          ${escapeHtml(word.german)}
        </span>

        ${
          currentProfile?.is_admin === true &&
          word.id !== null
            ? `
              <button
                class="delete-vocab-btn"
                data-vocab-id="${word.id}"
                type="button"
              >
                🗑️ Löschen
              </button>
            `
            : ""
        }

      </div>

    `).join("");


  // ----------------------------------------------------------
  // LÖSCH-BUTTONS
  // ----------------------------------------------------------

  document
    .querySelectorAll(".delete-vocab-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const id =
            button.dataset.vocabId;

          await deleteVocab(id);
        }
      );
    });
}


// ============================================================
// VOKABEL HINZUFÜGEN – FORMULAR
// ============================================================

function showAddVocabForm() {

  if (currentProfile?.is_admin !== true) {
    return;
  }


  const oldForm =
    document.getElementById("vocabForm");

  if (oldForm) {
    oldForm.remove();
  }


  const adminArea =
    document.getElementById("vocabAdminArea");


  const form =
    document.createElement("div");

  form.id = "vocabForm";
  form.className = "vocab-form";


  form.innerHTML = `

    <h3>
      ➕ Neue Vokabel hinzufügen
    </h3>

    <label for="vocabClass">
      Klasse
    </label>

    <select id="vocabClass">

      <option value="1"
        ${currentClass === 1 ? "selected" : ""}>
        1. Klasse
      </option>

      <option value="2"
        ${currentClass === 2 ? "selected" : ""}>
        2. Klasse
      </option>

      <option value="3"
        ${currentClass === 3 ? "selected" : ""}>
        3. Klasse
      </option>

      <option value="4"
        ${currentClass === 4 ? "selected" : ""}>
        4. Klasse
      </option>

    </select>


    <label for="vocabEnglish">
      Englisch
    </label>

    <input
      id="vocabEnglish"
      type="text"
      maxlength="100"
      placeholder="z. B. apple"
    >


    <label for="vocabGerman">
      Deutsch
    </label>

    <input
      id="vocabGerman"
      type="text"
      maxlength="100"
      placeholder="z. B. Apfel"
    >


    <div class="vocab-form-buttons">

      <button
        id="saveVocabButton"
        class="primary-btn"
        type="button"
      >
        Vokabel speichern
      </button>

      <button
        id="cancelVocabButton"
        class="secondary-btn"
        type="button"
      >
        Abbrechen
      </button>

    </div>

    <p
      id="vocabFormMessage"
      class="message"
    ></p>

  `;


  adminArea.insertAdjacentElement(
    "afterend",
    form
  );


  document
    .getElementById("saveVocabButton")
    .addEventListener(
      "click",
      addAdminVocab
    );


  document
    .getElementById("cancelVocabButton")
    .addEventListener(
      "click",
      () => form.remove()
    );
}


// ============================================================
// VOKABEL IN SUPABASE SPEICHERN
// ============================================================

async function addAdminVocab() {

  if (currentProfile?.is_admin !== true) {

    alert(
      "Du hast keine Admin-Berechtigung."
    );

    return;
  }


  const classNumber =
    Number(
      document.getElementById("vocabClass").value
    );

  const english =
    document
      .getElementById("vocabEnglish")
      .value
      .trim();

  const german =
    document
      .getElementById("vocabGerman")
      .value
      .trim();

  const message =
    document.getElementById(
      "vocabFormMessage"
    );

  const saveButton =
    document.getElementById(
      "saveVocabButton"
    );


  if (!english || !german) {

    message.textContent =
      "Bitte Englisch und Deutsch eingeben.";

    message.style.color =
      "#c0392b";

    return;
  }


  if (![1, 2, 3, 4].includes(classNumber)) {

    message.textContent =
      "Bitte eine gültige Klasse auswählen.";

    message.style.color =
      "#c0392b";

    return;
  }


  saveButton.disabled = true;

  saveButton.textContent =
    "Wird gespeichert...";


  const { error } =
    await supabaseClient
      .from("vocab")
      .insert({
        class_number: classNumber,
        english: english,
        german: german
      });


  if (error) {

    console.error(
      "Vokabel konnte nicht gespeichert werden:",
      error
    );

    message.textContent =
      "Fehler beim Speichern: " +
      error.message;

    message.style.color =
      "#c0392b";

    saveButton.disabled = false;

    saveButton.textContent =
      "Vokabel speichern";

    return;
  }


  message.textContent =
    "✅ Vokabel erfolgreich gespeichert!";

  message.style.color =
    "#18794e";


  /*
    Wenn eine andere Klasse ausgewählt wurde,
    wechseln wir direkt dorthin.
  */

  currentClass = classNumber;


  document
    .querySelectorAll(".class-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        Number(button.dataset.class) === classNumber
      );
    });


  setTimeout(async () => {
    await renderVocab();
  }, 600);
}


// ============================================================
// VOKABEL LÖSCHEN
// ============================================================

async function deleteVocab(id) {

  if (currentProfile?.is_admin !== true) {
    return;
  }


  const confirmed =
    confirm(
      "Möchtest du diese Vokabel wirklich löschen?"
    );


  if (!confirmed) {
    return;
  }


  const { error } =
    await supabaseClient
      .from("vocab")
      .delete()
      .eq("id", id);


  if (error) {

    console.error(
      "Vokabel konnte nicht gelöscht werden:",
      error
    );

    alert(
      "Die Vokabel konnte nicht gelöscht werden:\n" +
      error.message
    );

    return;
  }


  await renderVocab();
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

      <strong>
        Beispiele:
      </strong>

      <br><br>

      ${escapeHtml(lesson.example)}

    </div>

  `;
}


// ============================================================
// QUIZ – VOKABELN + NORMALE FRAGEN
// ============================================================

async function renderQuiz() {

  const words =
    await getVocabForClass(currentClass);


  const normalQuestions =
    lessons[currentClass].questions.map(q => ({
      type: "normal",
      q: q.q,
      options: q.options,
      answer: q.answer
    }));


  // ----------------------------------------------------------
  // AUS VOKABELN QUIZFRAGEN ERSTELLEN
  // ----------------------------------------------------------

  const vocabQuestions =
    words.map(word => {

      const otherWords =
        words.filter(
          other =>
            other.german !== word.german
        );


      const shuffled =
        [...otherWords]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);


      const options = [
        word.german,
        ...shuffled.map(
          item => item.german
        )
      ];


      /*
        Antwortposition zufällig machen
      */

      const answerText =
        word.german;


      options.sort(
        () => Math.random() - 0.5
      );


      const answer =
        options.indexOf(answerText);


      return {
        type: "vocab",
        q: `Was bedeutet „${word.english}“?`,
        options,
        answer
      };
    });


  const questions = [
    ...normalQuestions,
    ...vocabQuestions
  ];


  if (!questions.length) {

    learningArea.innerHTML = `
      <h2>
        🧠 Quiz
      </h2>

      <p>
        Es sind noch keine Fragen vorhanden.
      </p>
    `;

    return;
  }


  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }


  const q =
    questions[currentQuestion];


  learningArea.innerHTML = `

    <h2>
      🧠 Quiz – ${currentClass}. Klasse
    </h2>

    <p>
      Frage ${currentQuestion + 1}
      von ${questions.length}
    </p>

    <h3>
      ${escapeHtml(q.q)}
    </h3>

    <div id="quizOptions">

      ${q.options.map(
        (option, index) => `

          <button
            class="quiz-option"
            data-answer="${index}"
            type="button"
          >
            ${escapeHtml(option)}
          </button>

        `
      ).join("")}

    </div>

    <p
      id="quizResult"
      class="quiz-result"
    ></p>

  `;


  // ----------------------------------------------------------
  // ANTWORT-BUTTONS
  // ----------------------------------------------------------

  document
    .querySelectorAll(".quiz-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const selected =
            Number(button.dataset.answer);

          const result =
            document.getElementById(
              "quizResult"
            );


          document
            .querySelectorAll(".quiz-option")
            .forEach(
              b => b.disabled = true
            );


          if (selected === q.answer) {

            result.textContent =
              "✅ Richtig! +10 Punkte";

            result.style.color =
              "#18794e";

            await addPoints(10);

          } else {

            result.textContent =
              `❌ Nicht ganz. Richtig wäre: ${q.options[q.answer]}`;

            result.style.color =
              "#c0392b";
          }


          setTimeout(async () => {

            currentQuestion =
              (currentQuestion + 1) %
              questions.length;

            await renderQuiz();

          }, 1200);
        }
      );
    });
}


// ============================================================
// ÜBUNGEN – AUCH NEUE VOKABELN
// ============================================================

async function renderExercise() {

  const words =
    await getVocabForClass(currentClass);


  if (!words.length) {
    return;
  }


  /*
    Zufällige Vokabel auswählen,
    damit auch neue Admin-Vokabeln drankommen.
  */

  const randomWord =
    words[
      Math.floor(
        Math.random() * words.length
      )
    ];


  learningArea.innerHTML = `

    <h2>
      ✏️ Übungen – ${currentClass}. Klasse
    </h2>

    <p>
      Schreibe einen eigenen englischen Satz
      mit einem Wort aus den Vokabeln.
    </p>

    <div class="example">

      <strong>
        Aufgabe:
      </strong>

      <br>

      Verwende das Wort

      <strong>
        ${escapeHtml(randomWord.english)}
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
    .addEventListener(
      "click",
      async () => {

        const input =
          document.getElementById(
            "exerciseInput"
          );

        const result =
          document.getElementById(
            "exerciseResult"
          );


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
      }
    );
}


// ============================================================
// ADMIN – BENUTZER
// ============================================================

async function loadAdminUsers() {

  if (currentProfile?.is_admin !== true) {
    return;
  }


  setAdminMessage(
    "Lade Benutzer...",
    false
  );


  const { data, error } =
    await supabaseClient.rpc(
      "admin_list_profiles"
    );


  if (error) {

    console.error(
      "Admin-Liste:",
      error
    );

    adminUsers.innerHTML = "";

    setAdminMessage(
      "Admin-Liste konnte nicht geladen werden. " +
      "Die Admin-SQL-Funktion muss eingerichtet sein."
    );

    return;
  }


  adminUsers.innerHTML =
    (data || []).map(user => `

      <tr>

        <td>
          ${escapeHtml(user.username)}
        </td>

        <td>
          ⭐ ${Number(user.points || 0)}
        </td>

        <td>
          ${user.is_admin ? "Ja" : "Nein"}
        </td>

        <td>
          ${
            user.created_at
              ? new Date(
                  user.created_at
                ).toLocaleDateString("de-AT")
              : "-"
          }
        </td>

      </tr>

    `).join("");


  setAdminMessage(
    `${(data || []).length} Benutzer gefunden.`,
    false
  );
}


refreshAdmin.addEventListener(
  "click",
  loadAdminUsers
);