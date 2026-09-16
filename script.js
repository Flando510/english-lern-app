/*
============================================================
 ENGLISH MASTER
 Komplettes Script
============================================================

 Funktionen:

 - Login
 - Registrierung
 - Profile
 - Punkte
 - Klassen 1–4
 - Vokabeln aus Supabase
 - Units
 - Admin-Vokabeln
 - Vokabel löschen
 - Quiz
 - Übungen
 - Grammatik
 - Leaderboard
 - Admin-Benutzerübersicht
 - Automatisches Aktualisieren der Vokabelliste

============================================================
*/


/* ==========================================================
   SUPABASE
========================================================== */

const SUPABASE_URL =
  "https://amrqkjyemjpyxxyugwyu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_EUe8HwB24WogxOBCcs3fsg_9jt0AfhJ";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );


/* ==========================================================
   STATUS
========================================================== */

let currentClass = 1;
let currentMode = "vocab";

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;

let currentQuizQuestions = [];
let currentQuizIndex = 0;
let quizAnswered = false;


/* ==========================================================
   DOM
========================================================== */

const authScreen =
  document.getElementById("authScreen");

const mainScreen =
  document.getElementById("mainScreen");

const authForm =
  document.getElementById("authForm");

const usernameInput =
  document.getElementById("username");

const passwordInput =
  document.getElementById("password");

const authButton =
  document.getElementById("authButton");

const authMessage =
  document.getElementById("authMessage");

const loginTab =
  document.getElementById("loginTab");

const registerTab =
  document.getElementById("registerTab");

const contentArea =
  document.getElementById("contentArea");

const pointsBadge =
  document.getElementById("pointsBadge");

const heroPoints =
  document.getElementById("heroPoints");

const welcomeText =
  document.getElementById("welcomeText");

const logoutButton =
  document.getElementById("logoutButton");

const adminPanel =
  document.getElementById("adminPanel");

const adminUsers =
  document.getElementById("adminUsers");

const adminMessage =
  document.getElementById("adminMessage");

const refreshAdmin =
  document.getElementById("refreshAdmin");

const leaderboardPage =
  document.getElementById("leaderboardPage");

const learningPage =
  document.getElementById("learningPage");

const leaderboardList =
  document.getElementById("leaderboardList");

const leaderboardMessage =
  document.getElementById("leaderboardMessage");

const leaderboardMyPoints =
  document.getElementById("leaderboardMyPoints");

const leaderboardClass =
  document.getElementById("leaderboardClass");

const refreshLeaderboard =
  document.getElementById("refreshLeaderboard");


/* ==========================================================
   HILFSFUNKTIONEN
========================================================== */

function escapeHtml(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function shuffle(array) {

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


function authEmail(username) {

  const safe =
    username
      .toLowerCase()
      .replace(
        /[^a-z0-9._-]/g,
        "_"
      );

  return `${safe}@amrqkjyemjpyxxyugwyu.supabase.co`;

}


function validUsername(username) {

  return /^[A-Za-z0-9_-]{3,20}$/
    .test(username);

}


function setAuthMessage(
  message,
  success = false
) {

  if (!authMessage) {
    return;
  }

  authMessage.textContent =
    message;

  authMessage.style.color =
    success
      ? "#18794e"
      : "#c0392b";

}


function setAdminMessage(
  message,
  success = false
) {

  if (!adminMessage) {
    return;
  }

  adminMessage.textContent =
    message;

  adminMessage.style.color =
    success
      ? "#18794e"
      : "#c0392b";

}


/* ==========================================================
   LOGIN TABS
========================================================== */

function showLogin() {

  isRegisterMode = false;

  loginTab.classList.add("active");
  registerTab.classList.remove("active");

  authButton.textContent =
    "Anmelden";

  setAuthMessage("");

}


function showRegister() {

  isRegisterMode = true;

  registerTab.classList.add("active");
  loginTab.classList.remove("active");

  authButton.textContent =
    "Konto erstellen";

  setAuthMessage("");

}


loginTab.addEventListener(
  "click",
  showLogin
);

registerTab.addEventListener(
  "click",
  showRegister
);


/* ==========================================================
   LOGIN / REGISTRIERUNG
========================================================== */

authForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    const username =
      usernameInput.value.trim();

    const password =
      passwordInput.value;

    if (!validUsername(username)) {

      setAuthMessage(
        "Der Benutzername muss 3–20 Zeichen haben."
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

      const email =
        authEmail(username);


      /* Registrierung */

      if (isRegisterMode) {

        const {
          data,
          error
        } =
          await supabaseClient.auth.signUp({

            email,

            password,

            options: {

              data: {
                username
              }

            }

          });


        if (error) {
          throw error;
        }


        if (data.session?.user) {

          await showApp(
            data.session.user
          );

        } else {

          setAuthMessage(
            "Konto erstellt. Bitte melde dich jetzt an.",
            true
          );

          showLogin();

        }

      }


      /* Login */

      else {

        const {
          data,
          error
        } =
          await supabaseClient.auth
            .signInWithPassword({

              email,

              password

            });


        if (error) {
          throw error;
        }


        await showApp(
          data.user
        );

      }

    }

    catch (error) {

      console.error(error);

      setAuthMessage(
        error.message ||
        "Anmeldung fehlgeschlagen."
      );

    }

    finally {

      authButton.disabled = false;

      authButton.textContent =
        isRegisterMode
          ? "Konto erstellen"
          : "Anmelden";

    }

  }
);


/* ==========================================================
   PROFIL
========================================================== */

async function loadProfile(user) {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, points, is_admin, created_at"
      )
      .eq(
        "id",
        user.id
      )
      .single();


  if (error) {

    console.error(
      "Profil konnte nicht geladen werden:",
      error
    );

    return null;

  }


  return data;

}


/* ==========================================================
   USER UI
========================================================== */

function updateUserUI() {

  if (!currentProfile) {
    return;
  }

  const username =
    currentProfile.username ||
    "Benutzer";

  const points =
    Number(
      currentProfile.points || 0
    );


  if (welcomeText) {

    welcomeText.textContent =
      `👤 ${username}`;

  }


  if (pointsBadge) {

    pointsBadge.textContent =
      `⭐ ${points} Punkte`;

  }


  if (heroPoints) {

    heroPoints.textContent =
      points;

  }


  if (leaderboardMyPoints) {

    leaderboardMyPoints.textContent =
      points;

  }


  if (
    currentProfile.is_admin === true
  ) {

    if (adminPanel) {

      adminPanel.classList.remove(
        "hidden"
      );

    }

    loadAdminUsers();

  }

  else {

    if (adminPanel) {

      adminPanel.classList.add(
        "hidden"
      );

    }

  }

}


/* ==========================================================
   APP STARTEN
========================================================== */

async function showApp(user) {

  currentUser =
    user;

  currentProfile =
    await loadProfile(user);


  if (!currentProfile) {

    await supabaseClient.auth.signOut();

    setAuthMessage(
      "Dein Profil konnte nicht geladen werden."
    );

    return;

  }


  authScreen.classList.add(
    "hidden"
  );

  mainScreen.classList.remove(
    "hidden"
  );


  updateUserUI();

  await renderLearning();

}


function showAuth() {

  currentUser = null;

  currentProfile = null;

  currentQuizQuestions = [];

  currentQuizIndex = 0;


  mainScreen.classList.add(
    "hidden"
  );

  authScreen.classList.remove(
    "hidden"
  );


  usernameInput.value = "";

  passwordInput.value = "";

  showLogin();

}


/* ==========================================================
   LOGOUT
========================================================== */

logoutButton.addEventListener(
  "click",
  async () => {

    await supabaseClient.auth.signOut();

    showAuth();

  }
);


/* ==========================================================
   SESSION
========================================================== */

supabaseClient.auth
  .getSession()
  .then(
    async ({ data }) => {

      if (data.session?.user) {

        await showApp(
          data.session.user
        );

      }

    }
  );


supabaseClient.auth.onAuthStateChange(
  async (
    event,
    session
  ) => {

    if (
      event === "SIGNED_OUT"
    ) {

      showAuth();

    }

  }
);


/* ==========================================================
   PUNKTE
========================================================== */

async function addPoints(amount) {

  if (
    !currentUser ||
    !currentProfile
  ) {

    return;

  }


  const newPoints =
    Number(
      currentProfile.points || 0
    ) + amount;


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .update({

        points:
          newPoints

      })
      .eq(
        "id",
        currentUser.id
      )
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


/* ==========================================================
   KLASSE
========================================================== */

document
  .querySelectorAll(".class-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      async () => {

        currentClass =
          Number(
            button.dataset.class
          );


        document
          .querySelectorAll(
            ".class-btn"
          )
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        currentQuizQuestions = [];

        currentQuizIndex = 0;

        await renderLearning();

      }
    );

  });


/* ==========================================================
   MODUS
========================================================== */

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      async () => {

        currentMode =
          button.dataset.mode;


        document
          .querySelectorAll(
            ".mode-btn"
          )
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        currentQuizQuestions = [];

        currentQuizIndex = 0;

        await renderLearning();

      }
    );

  });


/* ==========================================================
   HAUPTNAVIGATION
========================================================== */

document
  .querySelectorAll(".nav-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      async () => {

        document
          .querySelectorAll(
            ".nav-btn"
          )
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        const page =
          button.dataset.page;


        if (page === "leaderboard") {

          learningPage.classList.add(
            "hidden"
          );

          leaderboardPage.classList.remove(
            "hidden"
          );

          await loadLeaderboard();

        }

        else {

          leaderboardPage.classList.add(
            "hidden"
          );

          learningPage.classList.remove(
            "hidden"
          );

          await renderLearning();

        }

      }
    );

  });


/* ==========================================================
   LERNBEREICH
========================================================== */

async function renderLearning() {

  if (!contentArea) {
    return;
  }


  if (currentMode === "vocab") {

    await renderVocab();

    return;

  }


  if (currentMode === "grammar") {

    renderGrammar();

    return;

  }


  if (currentMode === "quiz") {

    await renderQuiz();

    return;

  }


  if (currentMode === "exercise") {

    await renderExercise();

    return;

  }

}


/* ==========================================================
   VOKABELN AUS SUPABASE
========================================================== */

async function getVocabForClass(
  classNumber
) {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("vocab")
      .select(
        "id, class_number, unit_number, english, german, created_at"
      )
      .eq(
        "class_number",
        classNumber
      )
      .order(
        "unit_number",
        {
          ascending: true
        }
      )
      .order(
        "created_at",
        {
          ascending: true
        }
      );


  if (error) {

    console.error(
      "Vokabeln konnten nicht geladen werden:",
      error
    );

    return [];

  }


  return data || [];

}


/* ==========================================================
   VOKABELN ANZEIGEN
========================================================== */

async function renderVocab() {

  const words =
    await getVocabForClass(
      currentClass
    );


  /*
   * Units sammeln
   */

  const units = {};


  words.forEach(word => {

    const unit =
      Number(
        word.unit_number
      ) || 1;


    if (!units[unit]) {

      units[unit] = [];

    }


    units[unit].push(word);

  });


  const unitNumbers =
    Object.keys(units)
      .map(Number)
      .sort(
        (a, b) => a - b
      );


  let unitsHtml = "";


  /*
   * Keine Vokabeln
   */

  if (
    unitNumbers.length === 0
  ) {

    unitsHtml = `

      <div class="unit empty-unit">

        <h3>
          📚 Noch keine Vokabeln
        </h3>

        <p>
          Für die ${currentClass}. Klasse
          wurden noch keine Vokabeln eingetragen.
        </p>

      </div>

    `;

  }


  /*
   * Units
   */

  else {

    unitsHtml =
      unitNumbers
        .map(
          unitNumber => {

            const unitWords =
              units[unitNumber];


            const vocabHtml =
              unitWords
                .map(
                  word => `

                    <div class="vocab-card">

                      <strong>
                        ${escapeHtml(
                          word.english
                        )}
                      </strong>

                      <span>
                        ${escapeHtml(
                          word.german
                        )}
                      </span>

                      ${
                        currentProfile?.is_admin === true
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

                  `
                )
                .join("");


            return `

              <details
                class="unit"
                data-unit="${unitNumber}"
              >

                <summary>

                  📚 Unit ${unitNumber}

                  <span>
                    ${unitWords.length}
                    Vokabeln
                  </span>

                </summary>


                <div class="unit-content">

                  <div class="content-grid">

                    ${vocabHtml}

                  </div>

                </div>

              </details>

            `;

          }
        )
        .join("");

  }


  /*
   * Admin Button
   */

  const adminButton =
    currentProfile?.is_admin === true

      ? `

        <button
          id="openVocabAdminButton"
          class="primary-btn add-vocab-btn"
          type="button"
        >
          ➕ Vokabel hinzufügen
        </button>

      `

      : "";


  /*
   * Ausgabe
   */

  contentArea.innerHTML = `

    <div class="vocab-header">

      <div>

        <h2>
          📚 Vokabeln –
          ${currentClass}. Klasse
        </h2>

        <p>
          Öffne eine Unit,
          um die Vokabeln zu sehen.
        </p>

      </div>

      ${adminButton}

    </div>


    <div
      id="unitList"
      class="unit-list"
    >

      ${unitsHtml}

    </div>

  `;


  /*
   * Admin Button
   */

  const openAdminButton =
    document.getElementById(
      "openVocabAdminButton"
    );


  if (openAdminButton) {

    openAdminButton.addEventListener(
      "click",
      () => {

        if (adminPanel) {

          adminPanel.classList.remove(
            "hidden"
          );

          adminPanel.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  }


  /*
   * Löschen
   */

  document
    .querySelectorAll(
      ".delete-vocab-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          await deleteVocab(
            button.dataset.vocabId
          );

        }
      );

    });

}


/* ==========================================================
   VOKABEL LÖSCHEN
========================================================== */

async function deleteVocab(id) {

  if (
    currentProfile?.is_admin !== true
  ) {

    return;

  }


  if (
    !confirm(
      "Möchtest du diese Vokabel wirklich löschen?"
    )
  ) {

    return;

  }


  const {
    error
  } =
    await supabaseClient
      .from("vocab")
      .delete()
      .eq(
        "id",
        id
      );


  if (error) {

    alert(
      "Fehler beim Löschen: " +
      error.message
    );

    return;

  }


  await renderVocab();

}


/* ==========================================================
   ADMIN VOKABEL SPEICHERN
========================================================== */

async function saveAdminVocab() {

  if (
    currentProfile?.is_admin !== true
  ) {

    return;

  }


  const english =
    document
      .getElementById(
        "vocabEnglish"
      )
      ?.value
      .trim();


  const german =
    document
      .getElementById(
        "vocabGerman"
      )
      ?.value
      .trim();


  const unit =
    Number(
      document
        .getElementById(
          "vocabUnit"
        )
        ?.value
    );


  const classNumber =
    Number(
      document
        .getElementById(
          "vocabClass"
        )
        ?.value
    );


  const example =
    document
      .getElementById(
        "vocabExample"
      )
      ?.value
      .trim();


  if (
    !english ||
    !german
  ) {

    alert(
      "Bitte Englisch und Deutsch ausfüllen."
    );

    return;

  }


  if (
    !Number.isInteger(unit) ||
    unit < 1
  ) {

    alert(
      "Bitte eine gültige Unit eingeben."
    );

    return;

  }


  if (
    ![1, 2, 3, 4]
      .includes(classNumber)
  ) {

    alert(
      "Bitte eine gültige Klasse auswählen."
    );

    return;

  }


  /*
   * Daten für Supabase
   */

  const insertData = {

    class_number:
      classNumber,

    unit_number:
      unit,

    english:
      english,

    german:
      german

  };


  /*
   * Beispielsatz speichern,
   * falls einer eingegeben wurde.
   */

  if (example) {

    insertData.example =
      example;

  }


  const message =
    document.getElementById(
      "vocabMessage"
    );


  const button =
    document.getElementById(
      "addVocabButton"
    );


  if (button) {

    button.disabled = true;

    button.textContent =
      "⏳ Wird gespeichert...";

  }


  /*
   * Vokabel speichern
   */

  const {
    data,
    error
  } =
    await supabaseClient
      .from("vocab")
      .insert(
        insertData
      )
      .select()
      .single();


  if (error) {

    console.error(
      "Fehler beim Speichern:",
      error
    );


    if (message) {

      message.textContent =
        "❌ Fehler: " +
        error.message;

      message.style.color =
        "#c0392b";

    }


    if (button) {

      button.disabled = false;

      button.textContent =
        "➕ Vokabel hinzufügen";

    }

    return;

  }


  /*
   * Erfolgsmeldung
   */

  if (message) {

    message.textContent =
      `✅ "${english}" wurde in Klasse ${classNumber}, Unit ${unit} gespeichert.`;

    message.style.color =
      "#18794e";

  }


  /*
   * Eingabefelder leeren
   */

  const englishInput =
    document.getElementById(
      "vocabEnglish"
    );

  const germanInput =
    document.getElementById(
      "vocabGerman"
    );

  const unitInput =
    document.getElementById(
      "vocabUnit"
    );

  const exampleInput =
    document.getElementById(
      "vocabExample"
    );


  if (englishInput) {
    englishInput.value = "";
  }

  if (germanInput) {
    germanInput.value = "";
  }

  if (exampleInput) {
    exampleInput.value = "";
  }


  /*
   * WICHTIG:
   *
   * Die Vokabelliste wird direkt nach dem
   * erfolgreichen INSERT neu aus Supabase
   * geladen.
   *
   * Kein Seiten-Refresh notwendig.
   */

  if (currentMode === "vocab") {

    await renderVocab();

  }


  /*
   * Button wieder aktivieren
   */

  const newButton =
    document.getElementById(
      "addVocabButton"
    );

  if (newButton) {

    newButton.disabled = false;

    newButton.textContent =
      "➕ Vokabel hinzufügen";

  }

}


/* ==========================================================
   ADMIN FORMULAR
========================================================== */

/*
 * WICHTIG:
 *
 * Das Formular wird NUR über "submit"
 * verarbeitet.
 *
 * Es gibt KEIN zusätzliches click-Event
 * am Button.
 *
 * Dadurch wird eine Vokabel nicht
 * versehentlich zweimal gespeichert.
 */

const adminVocabForm =
  document.getElementById(
    "vocabForm"
  );


if (adminVocabForm) {

  adminVocabForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();

      await saveAdminVocab();

    }
  );

}


/* ==========================================================
   GRAMMATIK
========================================================== */

const grammar = {

  1: [

    {
      title:
        "Subject pronouns",

      explanation:
        "I, you, he, she, it, we and they werden als Subjektpronomen verwendet.",

      examples:
        "I am a student. She is happy. They are at school."
    },

    {
      title:
        "The verb to be",

      explanation:
        "am, is und are werden für Personen, Eigenschaften, Alter und Orte verwendet.",

      examples:
        "I am twelve. He is happy. We are students."
    },

    {
      title:
        "Have got",

      explanation:
        "Have got und has got werden verwendet, um Besitz auszudrücken.",

      examples:
        "I have got a dog. She has got two brothers."
    },

    {
      title:
        "Articles",

      explanation:
        "a, an und the sind englische Artikel.",

      examples:
        "a book, an apple, the school"
    },

    {
      title:
        "Plural nouns",

      explanation:
        "Viele Nomen bilden den Plural mit -s.",

      examples:
        "book → books, teacher → teachers"
    },

    {
      title:
        "Possessive adjectives",

      explanation:
        "my, your, his, her, its, our und their zeigen Besitz an.",

      examples:
        "This is my book. That is her bag."
    },

    {
      title:
        "There is / There are",

      explanation:
        "There is wird für Singular und there are für Plural verwendet.",

      examples:
        "There is a book. There are two windows."
    },

    {
      title:
        "Can",

      explanation:
        "Can wird vor allem für Fähigkeiten und einfache Erlaubnis verwendet.",

      examples:
        "I can swim. Can I open the window?"
    },

    {
      title:
        "Imperatives",

      explanation:
        "Imperative werden für Anweisungen und Aufforderungen verwendet.",

      examples:
        "Open the book. Listen carefully. Don't run."
    }

  ],


  2: [

    {
      title:
        "Present Simple",

      explanation:
        "Für Gewohnheiten, Routinen, Fakten und regelmäßige Handlungen.",

      examples:
        "I play football every week."
    },

    {
      title:
        "Third person singular",

      explanation:
        "Bei he, she und it bekommt das Verb im Present Simple normalerweise -s oder -es.",

      examples:
        "I play. He plays. She watches."
    },

    {
      title:
        "Present Simple questions",

      explanation:
        "Fragen verwenden normalerweise do oder does.",

      examples:
        "Do you like football? Does she play tennis?"
    },

    {
      title:
        "Present Simple negatives",

      explanation:
        "Verneinungen verwenden don't oder doesn't.",

      examples:
        "I don't like coffee. He doesn't play football."
    },

    {
      title:
        "Present Continuous",

      explanation:
        "Für Handlungen, die gerade passieren.",

      examples:
        "I am studying now. They are playing football."
    },

    {
      title:
        "Adverbs of frequency",

      explanation:
        "always, usually, often, sometimes und never beschreiben die Häufigkeit.",

      examples:
        "I always walk to school."
    },

    {
      title:
        "Comparatives",

      explanation:
        "Comparatives vergleichen zwei Dinge.",

      examples:
        "small → smaller, interesting → more interesting"
    },

    {
      title:
        "Superlatives",

      explanation:
        "Superlatives zeigen den höchsten Grad.",

      examples:
        "small → the smallest, good → the best"
    }

  ],


  3: [

    {
      title:
        "Past Simple",

      explanation:
        "Für abgeschlossene Handlungen in der Vergangenheit.",

      examples:
        "I visited London last year."
    },

    {
      title:
        "Irregular verbs",

      explanation:
        "Viele wichtige Verben haben unregelmäßige Vergangenheitsformen.",

      examples:
        "go → went, see → saw, have → had"
    },

    {
      title:
        "Past Continuous",

      explanation:
        "Für Handlungen, die zu einem bestimmten Zeitpunkt gerade passiert sind.",

      examples:
        "I was studying at eight o'clock."
    },

    {
      title:
        "Present Perfect",

      explanation:
        "have/has + past participle verbindet vergangene Ereignisse mit der Gegenwart.",

      examples:
        "I have visited London."
    },

    {
      title:
        "Future with will",

      explanation:
        "Will wird unter anderem für Vorhersagen und spontane Entscheidungen verwendet.",

      examples:
        "I think it will rain."
    },

    {
      title:
        "Going to",

      explanation:
        "Going to wird häufig für Pläne und Absichten verwendet.",

      examples:
        "I am going to study tonight."
    },

    {
      title:
        "Modal verbs",

      explanation:
        "can, could, may, might, must und should drücken verschiedene Bedeutungen aus.",

      examples:
        "You should study. You must listen."
    },

    {
      title:
        "First Conditional",

      explanation:
        "Für reale oder mögliche Bedingungen in der Zukunft.",

      examples:
        "If I study, I will pass."
    }

  ],


  4: [

    {
      title:
        "Second Conditional",

      explanation:
        "Für hypothetische oder eher unwahrscheinliche Situationen.",

      examples:
        "If I had more time, I would travel."
    },

    {
      title:
        "Zero Conditional",

      explanation:
        "Für allgemeine Wahrheiten und Fakten.",

      examples:
        "If you heat ice, it melts."
    },

    {
      title:
        "Passive voice",

      explanation:
        "Das Passiv stellt die Handlung oder das Ergebnis in den Mittelpunkt.",

      examples:
        "The book was written in 1990."
    },

    {
      title:
        "Relative clauses",

      explanation:
        "Relative clauses geben zusätzliche Informationen über Personen oder Dinge.",

      examples:
        "The girl who lives next door is my friend."
    },

    {
      title:
        "Reported speech",

      explanation:
        "Reported speech gibt wieder, was jemand gesagt hat.",

      examples:
        "She said that she was tired."
    },

    {
      title:
        "Gerunds",

      explanation:
        "Die -ing-Form kann wie ein Nomen verwendet werden.",

      examples:
        "Swimming is fun. I enjoy reading."
    },

    {
      title:
        "Infinitive",

      explanation:
        "Der Infinitiv wird häufig mit to + Grundform gebildet.",

      examples:
        "I want to learn."
    },

    {
      title:
        "Question forms",

      explanation:
        "Englische Fragen verwenden je nach Zeitform Hilfsverben.",

      examples:
        "Do you like it? Did she go? Have you finished?"
    },

    {
      title:
        "Adjectives and adverbs",

      explanation:
        "Adjektive beschreiben Nomen. Adverbien beschreiben häufig Verben.",

      examples:
        "She is careful. She drives carefully."
    },

    {
      title:
        "Quantifiers",

      explanation:
        "Quantifiers geben Mengen an.",

      examples:
        "some, any, much, many, a lot of, enough"
    },

    {
      title:
        "Used to",

      explanation:
        "Used to beschreibt frühere Gewohnheiten oder Zustände.",

      examples:
        "I used to play football."
    },

    {
      title:
        "Question tags",

      explanation:
        "Kurze Fragen am Ende eines Satzes.",

      examples:
        "You're tired, aren't you?"
    },

    {
      title:
        "Conjunctions",

      explanation:
        "Konjunktionen verbinden Wörter und Satzteile.",

      examples:
        "and, but, because, although, if, when"
    },

    {
      title:
        "Linking words",

      explanation:
        "Linking words helfen beim Aufbau von Texten und Argumenten.",

      examples:
        "however, therefore, finally, because"
    }

  ]

};


/* ==========================================================
   GRAMMATIK ANZEIGEN
========================================================== */

function renderGrammar() {

  const topics =
    grammar[currentClass] ||
    [];


  contentArea.innerHTML = `

    <h2>
      📖 English Grammar –
      ${currentClass}. Klasse
    </h2>

    <p>
      Wichtige englische Grammatikthemen.
    </p>

    <div
      class="content-grid"
      id="grammarList"
    >

      ${
        topics
          .map(
            (topic, index) => `

              <div class="vocab-card">

                <strong>
                  ${index + 1}.
                  ${escapeHtml(
                    topic.title
                  )}
                </strong>

                <span>
                  ${escapeHtml(
                    topic.explanation
                  )}
                </span>

                <div class="example">

                  <strong>
                    Beispiele:
                  </strong>

                  <br>

                  ${escapeHtml(
                    topic.examples
                  )}

                </div>

              </div>

            `
          )
          .join("")
      }

    </div>

  `;

}


/* ==========================================================
   QUIZ FRAGEN
========================================================== */

async function createQuizQuestions() {

  const words =
    await getVocabForClass(
      currentClass
    );


  const questions = [];


  /*
   * Vokabel-Fragen
   */

  words.forEach(word => {

    const wrong =
      shuffle(
        words.filter(
          other =>
            other.id !== word.id &&
            other.german !== word.german
        )
      )
      .slice(0, 3)
      .map(
        item =>
          item.german
      );


    if (
      wrong.length < 3
    ) {

      return;

    }


    const options =
      shuffle([
        word.german,
        ...wrong
      ]);


    questions.push({

      type: "vocab",

      q:
        `Was bedeutet „${word.english}“?`,

      options,

      answer:
        options.indexOf(
          word.german
        )

    });

  });


  /*
   * Grammar-Fragen
   */

  const grammarQuestions = {

    1: [

      {
        q:
          "Which sentence is correct?",

        options: [
          "I am twelve.",
          "I is twelve.",
          "I are twelve.",
          "I be twelve."
        ],

        answer: 0

      }

    ],

    2: [

      {
        q:
          "Which sentence is correct?",

        options: [
          "She plays tennis.",
          "She play tennis.",
          "She playing tennis.",
          "She does plays tennis."
        ],

        answer: 0

      },

      {
        q:
          "Which sentence describes something happening now?",

        options: [
          "I am doing my homework.",
          "I do my homework every day.",
          "I did my homework yesterday.",
          "I will do my homework tomorrow."
        ],

        answer: 0

      }

    ],

    3: [

      {
        q:
          "What is the Past Simple of 'go'?",

        options: [
          "went",
          "goed",
          "gone",
          "going"
        ],

        answer: 0

      },

      {
        q:
          "Which sentence is correct?",

        options: [
          "I was watching TV when she called.",
          "I watching TV when she called.",
          "I was watch TV when she called.",
          "I am watching TV when she called."
        ],

        answer: 0

      }

    ],

    4: [

      {
        q:
          "Which sentence uses the Second Conditional?",

        options: [
          "If I had more time, I would travel.",
          "If I have time, I will travel.",
          "I travelled last year.",
          "I am travelling now."
        ],

        answer: 0

      },

      {
        q:
          "Which sentence is passive?",

        options: [
          "The book was written in 1990.",
          "The author wrote the book.",
          "The author is writing the book.",
          "The author will write the book."
        ],

        answer: 0

      }

    ]

  };


  const normal =
    grammarQuestions[
      currentClass
    ] || [];


  normal.forEach(question => {

    questions.push({

      type: "grammar",

      q:
        question.q,

      options:
        [...question.options],

      answer:
        question.answer

    });

  });


  return shuffle(
    questions
  );

}


/* ==========================================================
   QUIZ ANZEIGEN
========================================================== */

async function renderQuiz() {

  if (
    currentQuizQuestions.length === 0 ||
    currentQuizIndex >=
      currentQuizQuestions.length
  ) {

    currentQuizQuestions =
      await createQuizQuestions();

    currentQuizIndex = 0;

  }


  if (
    currentQuizQuestions.length === 0
  ) {

    contentArea.innerHTML = `

      <h2>
        🧠 Quiz
      </h2>

      <p>
        Für diese Klasse sind noch keine
        ausreichenden Fragen vorhanden.
      </p>

    `;

    return;

  }


  const question =
    currentQuizQuestions[
      currentQuizIndex
    ];


  quizAnswered = false;


  contentArea.innerHTML = `

    <h2>
      🧠 Quiz –
      ${currentClass}. Klasse
    </h2>

    <p>
      Frage
      ${currentQuizIndex + 1}
      von
      ${currentQuizQuestions.length}
    </p>

    <h3>
      ${escapeHtml(
        question.q
      )}
    </h3>

    <div id="quizOptions">

      ${
        question.options
          .map(
            (option, index) => `

              <button
                class="quiz-option"
                data-answer="${index}"
                type="button"
              >
                ${escapeHtml(
                  option
                )}
              </button>

            `
          )
          .join("")
      }

    </div>

    <p
      id="quizResult"
      class="quiz-result"
    ></p>

  `;


  document
    .querySelectorAll(
      ".quiz-option"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          await answerQuiz(
            Number(
              button.dataset.answer
            )
          );

        }
      );

    });

}


/* ==========================================================
   QUIZ ANTWORT
========================================================== */

async function answerQuiz(
  selectedAnswer
) {

  if (quizAnswered) {
    return;
  }


  quizAnswered = true;


  const question =
    currentQuizQuestions[
      currentQuizIndex
    ];


  const result =
    document.getElementById(
      "quizResult"
    );


  document
    .querySelectorAll(
      ".quiz-option"
    )
    .forEach(
      button => {

        button.disabled =
          true;

      }
    );


  if (
    selectedAnswer ===
    question.answer
  ) {

    result.textContent =
      "✅ Richtig! +10 Punkte";

    result.style.color =
      "#18794e";


    await addPoints(10);

  }

  else {

    result.textContent =
      `❌ Falsch. Richtig ist: ${
        question.options[
          question.answer
        ]
      }`;

    result.style.color =
      "#c0392b";

  }


  setTimeout(
    async () => {

      currentQuizIndex++;

      if (
        currentQuizIndex >=
        currentQuizQuestions.length
      ) {

        currentQuizQuestions =
          await createQuizQuestions();

        currentQuizIndex = 0;

      }


      await renderQuiz();

    },
    1200
  );

}


/* ==========================================================
   ÜBEN
========================================================== */

async function renderExercise() {

  const words =
    await getVocabForClass(
      currentClass
    );


  if (!words.length) {

    contentArea.innerHTML = `

      <h2>
        ✏️ Übungen
      </h2>

      <p>
        Für diese Klasse sind noch keine
        Vokabeln vorhanden.
      </p>

    `;

    return;

  }


  const word =
    words[
      Math.floor(
        Math.random() *
        words.length
      )
    ];


  contentArea.innerHTML = `

    <h2>
      ✏️ Übungen –
      ${currentClass}. Klasse
    </h2>

    <p>
      Schreibe einen vollständigen
      englischen Satz mit diesem Wort:
    </p>

    <div class="example">

      <strong>
        ${escapeHtml(
          word.english
        )}
      </strong>

      <br>

      ${escapeHtml(
        word.german
      )}

    </div>


    <label for="exerciseInput">
      Dein englischer Satz
    </label>


    <input
      id="exerciseInput"
      type="text"
      placeholder="Write your sentence here..."
    >


    <button
      id="exerciseButton"
      class="primary-btn"
      type="button"
    >
      Übung prüfen
    </button>


    <p
      id="exerciseResult"
      class="quiz-result"
    ></p>

  `;


  document
    .getElementById(
      "exerciseButton"
    )
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


        const sentence =
          input.value.trim();


        /*
         * Keine einzelnen Wörter
         */

        if (
          sentence.length < 8 ||
          sentence.split(
            /\s+/
          ).length < 3
        ) {

          result.textContent =
            "❌ Bitte schreibe einen vollständigen englischen Satz mit mindestens 3 Wörtern.";

          result.style.color =
            "#c0392b";

          return;

        }


        /*
         * Das gesuchte Wort muss
         * tatsächlich im Satz vorkommen.
         */

        const normalizedSentence =
          sentence
            .toLowerCase()
            .replace(
              /[.,!?;:]/g,
              ""
            )
            .split(/\s+/);


        const target =
          word.english
            .toLowerCase()
            .replace(
              /[.,!?;:]/g,
              ""
            );


        if (
          !normalizedSentence.includes(
            target
          )
        ) {

          result.textContent =
            `❌ Dein Satz muss das Wort "${word.english}" enthalten.`;

          result.style.color =
            "#c0392b";

          return;

        }


        /*
         * Einfache Grammatikprüfung
         */

        const firstLetter =
          sentence.charAt(0);


        if (
          firstLetter !==
          firstLetter.toUpperCase()
        ) {

          result.textContent =
            "❌ Beginne den Satz mit einem Großbuchstaben.";

          result.style.color =
            "#c0392b";

          return;

        }


        if (
          !/[.!?]$/.test(sentence)
        ) {

          result.textContent =
            "❌ Vergiss das Satzzeichen am Ende nicht.";

          result.style.color =
            "#c0392b";

          return;

        }


        /*
         * Erfolgreich
         */

        input.disabled =
          true;

        document
          .getElementById(
            "exerciseButton"
          )
          .disabled =
          true;


        result.textContent =
          "✅ Satz angenommen! +5 Punkte";

        result.style.color =
          "#18794e";


        await addPoints(5);

      }
    );

}


/* ==========================================================
   LEADERBOARD
========================================================== */

async function loadLeaderboard() {

  if (!leaderboardList) {
    return;
  }


  leaderboardList.innerHTML =
    "Leaderboard wird geladen...";


  if (leaderboardMyPoints) {

    leaderboardMyPoints.textContent =
      Number(
        currentProfile?.points || 0
      );

  }


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, points, is_admin"
      )
      .eq(
        "is_admin",
        false
      )
      .order(
        "points",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "Leaderboard:",
      error
    );


    leaderboardList.innerHTML =
      "";

    leaderboardMessage.textContent =
      "Leaderboard konnte nicht geladen werden.";

    leaderboardMessage.style.color =
      "#c0392b";

    return;

  }


  const users =
    (data || [])
      .filter(
        user =>
          user.is_admin !== true
      );


  if (!users.length) {

    leaderboardList.innerHTML = `

      <p>
        Noch keine Benutzer im Leaderboard.
      </p>

    `;

    return;

  }


  leaderboardList.innerHTML =
    users
      .map(
        (user, index) => `

          <div class="leaderboard-row">

            <div class="leaderboard-rank">
              #${index + 1}
            </div>

            <div class="leaderboard-name">

              ${escapeHtml(
                user.username ||
                "Benutzer"
              )}

            </div>

            <div class="leaderboard-points">

              ⭐
              ${Number(
                user.points || 0
              )}
              Punkte

            </div>

          </div>

        `
      )
      .join("");


  leaderboardMessage.textContent =
    `${users.length} Benutzer angezeigt.`;

  leaderboardMessage.style.color =
    "#18794e";

}


if (refreshLeaderboard) {

  refreshLeaderboard.addEventListener(
    "click",
    loadLeaderboard
  );

}


/* ==========================================================
   ADMIN BENUTZERÜBERSICHT
========================================================== */

async function loadAdminUsers() {

  if (
    currentProfile?.is_admin !== true
  ) {

    return;

  }


  if (!adminUsers) {
    return;
  }


  setAdminMessage(
    "Benutzer werden geladen...",
    true
  );


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "username, points, is_admin, created_at"
      )
      .order(
        "points",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(error);

    adminUsers.innerHTML =
      "";

    setAdminMessage(
      "Benutzerübersicht konnte nicht geladen werden."
    );

    return;

  }


  adminUsers.innerHTML =
    (data || [])
      .map(
        user => `

          <tr>

            <td>
              ${escapeHtml(
                user.username ||
                "-"
              )}
            </td>

            <td>
              ⭐
              ${Number(
                user.points || 0
              )}
            </td>

            <td>
              ${user.is_admin
                ? "Ja"
                : "Nein"}
            </td>

            <td>
              ${
                user.created_at
                  ? new Date(
                      user.created_at
                    ).toLocaleDateString(
                      "de-AT"
                    )
                  : "-"
              }
            </td>

          </tr>

        `
      )
      .join("");


  setAdminMessage(
    `${(data || []).length} Benutzer gefunden.`,
    true
  );

}


if (refreshAdmin) {

  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );

}


/* ==========================================================
   START
========================================================== */

console.log(
  "English Master – neues Script geladen."
);