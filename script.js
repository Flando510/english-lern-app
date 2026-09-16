/*
============================================================
 ENGLISH MASTER
 JavaScript – Supabase Version
============================================================
*/

// ============================================================
// LERNINHALTE
// ============================================================

const lessons = {

  // ==========================================================
  // 1. KLASSE
  // ==========================================================

  1: {

    grammar: [

      {
        title: "Personal pronouns",
        explanation: "I, you, he, she, it, we, they werden als Personalpronomen verwendet."
      },

      {
        title: "To be",
        explanation: "am, is und are sind Formen von to be."
      },

      {
        title: "Have got",
        explanation: "have got und has got werden verwendet, um Besitz auszudrücken."
      },

      {
        title: "Simple Present",
        explanation: "Das Simple Present wird für regelmäßige Handlungen und Fakten verwendet."
      }

    ],

    questions: [

      {
        q: "Choose the correct form: I ___ a student.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 0
      },

      {
        q: "Choose the correct form: She ___ my friend.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1
      },

      {
        q: "Choose the correct form: They ___ happy.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 2
      }

    ]

  },


  // ==========================================================
  // 2. KLASSE
  // ==========================================================

  2: {

    grammar: [

      {
        title: "Simple Present",
        explanation: "Das Simple Present wird für Gewohnheiten, Fakten und regelmäßige Handlungen verwendet."
      },

      {
        title: "Present Progressive",
        explanation: "Das Present Progressive beschreibt Handlungen, die gerade stattfinden."
      },

      {
        title: "Question words",
        explanation: "Who, what, where, when, why und how werden für Fragen verwendet."
      },

      {
        title: "There is / There are",
        explanation: "There is wird für eine Sache und there are für mehrere Sachen verwendet."
      }

    ],

    questions: [

      {
        q: "He ___ football every Saturday.",
        options: [
          "play",
          "plays",
          "playing",
          "is play"
        ],
        answer: 1
      },

      {
        q: "They ___ watching TV now.",
        options: [
          "is",
          "are",
          "am",
          "be"
        ],
        answer: 1
      },

      {
        q: "___ do you live?",
        options: [
          "Where",
          "Who",
          "Why",
          "When"
        ],
        answer: 0
      }

    ]

  },


  // ==========================================================
  // 3. KLASSE
  // ==========================================================

  3: {

    grammar: [

      {
        title: "Past Simple",
        explanation: "Das Past Simple wird für abgeschlossene Handlungen in der Vergangenheit verwendet."
      },

      {
        title: "Past Progressive",
        explanation: "Das Past Progressive beschreibt eine Handlung, die zu einem bestimmten Zeitpunkt in der Vergangenheit gerade passiert ist."
      },

      {
        title: "Comparative",
        explanation: "Mit dem Comparative werden zwei Dinge miteinander verglichen."
      },

      {
        title: "Superlative",
        explanation: "Mit dem Superlative wird etwas als das stärkste oder höchste innerhalb einer Gruppe bezeichnet."
      },

      {
        title: "Modal verbs",
        explanation: "Can, must, should und andere Modalverben werden verwendet, um Fähigkeiten, Pflichten oder Empfehlungen auszudrücken."
      }

    ],

    questions: [

      {
        q: "Yesterday I ___ to school.",
        options: [
          "go",
          "goes",
          "went",
          "going"
        ],
        answer: 2
      },

      {
        q: "This book is ___ than that book.",
        options: [
          "interesting",
          "more interesting",
          "most interesting",
          "interest"
        ],
        answer: 1
      }

    ]

  },


  // ==========================================================
  // 4. KLASSE
  // ==========================================================

  4: {

    grammar: [

      {
        title: "Present Perfect",
        explanation: "Das Present Perfect verbindet eine vergangene Handlung mit der Gegenwart."
      },

      {
        title: "Future with will",
        explanation: "Will wird unter anderem für Vorhersagen und spontane Entscheidungen verwendet."
      },

      {
        title: "Going to",
        explanation: "Going to wird häufig für Pläne und Absichten verwendet."
      },

      {
        title: "Conditional sentences",
        explanation: "Bedingungssätze beschreiben, was passiert, wenn eine bestimmte Bedingung erfüllt ist."
      },

      {
        title: "Passive voice",
        explanation: "Im Passiv steht die Handlung beziehungsweise das Ergebnis im Mittelpunkt."
      }

    ],

    questions: [

      {
        q: "I ___ already finished my homework.",
        options: [
          "have",
          "has",
          "am",
          "did"
        ],
        answer: 0
      },

      {
        q: "I think it ___ rain tomorrow.",
        options: [
          "will",
          "is",
          "does",
          "has"
        ],
        answer: 0
      }

    ]

  }

};


// ============================================================
// SUPABASE
// ============================================================

const SUPABASE_URL =
  "https://amrqkjyemjpyxxyugwyu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_EUe8HwB24WogxOBCcs3fsg_9jt0AfhJ";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );


// ============================================================
// STATUS
// ============================================================

let currentClass = 1;

let currentMode = "vocab";

let currentUser = null;

let currentProfile = null;

let currentQuizQuestions = [];

let currentQuizIndex = 0;

let quizAnswered = false;

let currentUnit = "all";

let isRegisterMode = false;


// ============================================================
// DOM
// ============================================================

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

const learningArea =
  document.getElementById("learningArea");

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


// ============================================================
// HILFSFUNKTIONEN
// ============================================================

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


function setMessage(
  element,
  message,
  success = false
) {

  if (!element) {
    return;
  }

  element.textContent =
    message;

  element.style.color =
    success
      ? "#18794e"
      : "#c0392b";

}


function setAuthMessage(
  message,
  success = false
) {

  setMessage(
    authMessage,
    message,
    success
  );

}


function setAdminMessage(
  message,
  success = false
) {

  setMessage(
    adminMessage,
    message,
    success
  );

}


// ============================================================
// LOGIN TABS
// ============================================================

function showLogin() {

  isRegisterMode = false;

  loginTab?.classList.add(
    "active"
  );

  registerTab?.classList.remove(
    "active"
  );

  if (authButton) {

    authButton.textContent =
      "Anmelden";

  }

  setAuthMessage("");

}


function showRegister() {

  isRegisterMode = true;

  registerTab?.classList.add(
    "active"
  );

  loginTab?.classList.remove(
    "active"
  );

  if (authButton) {

    authButton.textContent =
      "Konto erstellen";

  }

  setAuthMessage("");

}


loginTab?.addEventListener(
  "click",
  showLogin
);


registerTab?.addEventListener(
  "click",
  showRegister
);


// ============================================================
// LOGIN / REGISTRIERUNG
// ============================================================

authForm?.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    const username =
      usernameInput.value.trim();

    const password =
      passwordInput.value;

    if (!validUsername(username)) {

      setAuthMessage(
        "Der Benutzername muss 3–20 Zeichen haben und darf nur Buchstaben, Zahlen, _ oder - enthalten."
      );

      return;

    }

    if (password.length < 6) {

      setAuthMessage(
        "Das Passwort muss mindestens 6 Zeichen haben."
      );

      return;

    }

    authButton.disabled =
      true;

    authButton.textContent =
      isRegisterMode
        ? "Konto wird erstellt..."
        : "Anmeldung...";


    try {

      const email =
        authEmail(username);


      if (isRegisterMode) {

        const {
          data,
          error
        } =
          await supabaseClient
            .auth
            .signUp({

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
            "Konto erstellt. Bitte bestätige gegebenenfalls deine E-Mail und melde dich danach an.",
            true
          );

          showLogin();

        }


      } else {

        const {
          data,
          error
        } =
          await supabaseClient
            .auth
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


    } catch (error) {

      console.error(error);

      setAuthMessage(
        error.message ||
        "Anmeldung fehlgeschlagen."
      );


    } finally {

      authButton.disabled =
        false;

      authButton.textContent =
        isRegisterMode
          ? "Konto erstellen"
          : "Anmelden";

    }

  }
);


// ============================================================
// PROFIL
// ============================================================

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


// ============================================================
// USER UI
// ============================================================

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


  if (adminPanel) {

    adminPanel.classList.toggle(
      "hidden",
      currentProfile.is_admin !== true
    );

  }

}


// ============================================================
// APP
// ============================================================

async function showApp(user) {

  currentUser =
    user;


  currentProfile =
    await loadProfile(user);


  if (!currentProfile) {

    await supabaseClient
      .auth
      .signOut();

    setAuthMessage(
      "Dein Profil konnte nicht geladen werden."
    );

    return;

  }


  authScreen?.classList.add(
    "hidden"
  );

  mainScreen?.classList.remove(
    "hidden"
  );


  updateUserUI();


  await renderLearning();

  await renderLeaderboard();


  if (
    currentProfile.is_admin === true
  ) {

    await loadAdminUsers();

  }

}


function showAuth() {

  currentUser =
    null;

  currentProfile =
    null;

  currentQuizQuestions =
    [];

  currentQuizIndex =
    0;


  mainScreen?.classList.add(
    "hidden"
  );

  authScreen?.classList.remove(
    "hidden"
  );


  if (usernameInput) {
    usernameInput.value = "";
  }


  if (passwordInput) {
    passwordInput.value = "";
  }


  showLogin();

}


// ============================================================
// LOGOUT
// ============================================================

logoutButton?.addEventListener(
  "click",
  async () => {

    await supabaseClient
      .auth
      .signOut();

    showAuth();

  }
);


// ============================================================
// PUNKTE
// ============================================================

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
        points: newPoints
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


// ============================================================
// NAVIGATION
// ============================================================

function showPage(page) {

  const learningPage =
    document.getElementById(
      "learningPage"
    );

  const leaderboardPage =
    document.getElementById(
      "leaderboardPage"
    );


  if (
    !learningPage ||
    !leaderboardPage
  ) {

    return;

  }


  learningPage.classList.toggle(
    "hidden",
    page !== "learning"
  );


  leaderboardPage.classList.toggle(
    "hidden",
    page !== "leaderboard"
  );


  document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === page
      );

    });


  if (
    page === "leaderboard"
  ) {

    renderLeaderboard();

  }

}


document
  .querySelectorAll(".nav-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        showPage(
          button.dataset.page
        );

      }
    );

  });


// ============================================================
// KLASSE
// ============================================================

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


        currentUnit =
          "all";


        document
          .querySelectorAll(".class-btn")
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        currentQuizQuestions =
          [];

        currentQuizIndex =
          0;


        await renderLearning();

      }
    );

  });


// ============================================================
// MODUS
// ============================================================

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      async () => {

        currentMode =
          button.dataset.mode;


        document
          .querySelectorAll(".mode-btn")
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        currentQuizQuestions =
          [];

        currentQuizIndex =
          0;


        const unitNavigation =
          document.getElementById(
            "vocabUnitNavigation"
          );


        if (unitNavigation) {

          unitNavigation.classList.toggle(
            "hidden",
            currentMode !== "vocab"
          );

        }


        await renderLearning();

      }
    );

  });


// ============================================================
// LERNBEREICH
// ============================================================

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


// ============================================================
// VOKABELN AUS SUPABASE
//
// WICHTIG:
// Die alten fest eingebauten Vokabeln werden hier NICHT
// mehr verwendet.
// ============================================================

async function getVocabForClass(
  classNumber
) {

  let result =
    await supabaseClient
      .from("vocab")
      .select(
        "id, class_number, english, german, unit_number, created_at"
      )
      .eq(
        "class_number",
        classNumber
      )
      .order(
        "created_at",
        {
          ascending: true
        }
      );


  /*
    Falls die Datenbank noch keine
    unit_number-Spalte besitzt, werden
    die Vokabeln trotzdem geladen.
  */

  if (result.error) {

    console.warn(
      "unit_number konnte nicht geladen werden. Fallback wird verwendet."
    );


    result =
      await supabaseClient
        .from("vocab")
        .select(
          "id, class_number, english, german, created_at"
        )
        .eq(
          "class_number",
          classNumber
        )
        .order(
          "created_at",
          {
            ascending: true
          }
        );

  }


  if (result.error) {

    console.error(
      "Vokabeln konnten nicht geladen werden:",
      result.error
    );

    return [];

  }


  return result.data || [];

}


// ============================================================
// UNIT MENÜ
// ============================================================

function getUnitForWord(
  word,
  index
) {

  if (
    word.unit_number !== null &&
    word.unit_number !== undefined
  ) {

    return Number(
      word.unit_number
    );

  }


  /*
    Fallback:
    Wenn noch keine Unit-Spalte vorhanden ist,
    werden jeweils 10 Wörter einer Unit zugeordnet.
  */

  return (
    Math.floor(
      index / 10
    ) + 1
  );

}


function renderUnitMenu(words) {

  const unitList =
    document.getElementById(
      "unitList"
    );


  if (!unitList) {
    return;
  }


  const groups =
    new Map();


  words.forEach(
    (word, index) => {

      const unit =
        getUnitForWord(
          word,
          index
        );


      if (
        !groups.has(unit)
      ) {

        groups.set(
          unit,
          []
        );

      }


      groups
        .get(unit)
        .push(word);

    }
  );


  const units =
    [...groups.keys()]
      .sort(
        (a, b) => a - b
      );


  if (!units.length) {

    unitList.innerHTML =
      "<p>Noch keine Vokabeln vorhanden.</p>";

    return;

  }


  unitList.innerHTML =
    units
      .map(
        unit => `

          <details
            class="unit"
            data-unit="${unit}"
            ${
              String(currentUnit) ===
              String(unit)
                ? "open"
                : ""
            }
          >

            <summary>
              Unit ${unit}
              <span>⌄</span>
            </summary>

            <div class="unit-content">

              ${
                groups.get(unit).length
              }
              Vokabeln

            </div>

          </details>

        `
      )
      .join("");


  unitList
    .querySelectorAll(
      "details.unit"
    )
    .forEach(details => {

      details.addEventListener(
        "toggle",
        () => {

          if (
            details.open
          ) {

            currentUnit =
              details.dataset.unit;

            renderVocabList(
              words
            );

          }

        }
      );

    });

}


// ============================================================
// VOKABELN ANZEIGEN
// ============================================================

async function renderVocab() {

  const unitNavigation =
    document.getElementById(
      "vocabUnitNavigation"
    );


  if (unitNavigation) {

    unitNavigation.classList.remove(
      "hidden"
    );

  }


  contentArea.innerHTML = `

    <h2>
      📚 Vokabeln –
      ${currentClass}. Klasse
    </h2>

    <p>
      Wähle eine Unit aus.
    </p>

    <div
      id="vocabList"
      class="content-grid"
    >

      <p>
        Vokabeln werden geladen...
      </p>

    </div>

  `;


  const words =
    await getVocabForClass(
      currentClass
    );


  renderUnitMenu(
    words
  );


  renderVocabList(
    words
  );


  if (
    currentProfile?.is_admin === true
  ) {

    renderAdminVocabButton();

  }

}


// ============================================================
// VOKABEL-LISTE
// ============================================================

function renderVocabList(
  words
) {

  const list =
    document.getElementById(
      "vocabList"
    );


  if (!list) {
    return;
  }


  let filtered =
    words;


  if (
    currentUnit !== "all"
  ) {

    filtered =
      words.filter(
        (word, index) =>
          String(
            getUnitForWord(
              word,
              index
            )
          ) ===
          String(currentUnit)
      );

  }


  if (!filtered.length) {

    list.innerHTML = `

      <p>
        In dieser Unit sind noch keine Vokabeln.
      </p>

    `;

    return;

  }


  list.innerHTML =
    filtered
      .map(
        word => `

          <div
            class="vocab-card"
          >

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
              currentProfile?.is_admin === true &&
              word.id

                ? `

                  <button
                    class="delete-vocab-btn"
                    data-vocab-id="${escapeHtml(
                      word.id
                    )}"
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


  list
    .querySelectorAll(
      ".delete-vocab-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          deleteVocab(
            button.dataset.vocabId
          );

        }
      );

    });

}


// ============================================================
// ADMIN VOKABEL BUTTON
// ============================================================

function renderAdminVocabButton() {

  const navigation =
    document.getElementById(
      "vocabUnitNavigation"
    );


  if (!navigation) {
    return;
  }


  if (
    document.getElementById(
      "addVocabButton"
    )
  ) {

    return;

  }


  const button =
    document.createElement(
      "button"
    );


  button.id =
    "addVocabButton";

  button.className =
    "primary-btn add-vocab-btn";

  button.type =
    "button";

  button.textContent =
    "➕ Vokabel hinzufügen";


  navigation.appendChild(
    button
  );


  button.addEventListener(
    "click",
    showAddVocabForm
  );

}


// ============================================================
// ADMIN VOKABEL FORMULAR
// ============================================================

function showAddVocabForm() {

  if (
    currentProfile?.is_admin !== true
  ) {

    return;

  }


  if (
    document.getElementById(
      "vocabForm"
    )
  ) {

    return;

  }


  const navigation =
    document.getElementById(
      "vocabUnitNavigation"
    );


  if (!navigation) {
    return;
  }


  const form =
    document.createElement(
      "form"
    );


  form.id =
    "vocabForm";

  form.className =
    "vocab-form";


  const selectedUnit =
    currentUnit === "all"
      ? 1
      : Number(currentUnit);


  form.innerHTML = `

    <h3>
      ➕ Neue Vokabel
    </h3>


    <label for="vocabClass">
      Klasse
    </label>

    <select
      id="vocabClass"
      required
    >

      <option value="1">
        1. Klasse
      </option>

      <option value="2">
        2. Klasse
      </option>

      <option value="3">
        3. Klasse
      </option>

      <option value="4">
        4. Klasse
      </option>

    </select>


    <label for="vocabUnit">
      Unit
    </label>

    <input
      id="vocabUnit"
      type="number"
      min="1"
      value="${selectedUnit}"
      required
    >


    <label for="vocabEnglish">
      Englisch
    </label>

    <input
      id="vocabEnglish"
      type="text"
      maxlength="100"
      placeholder="z. B. bicycle"
      required
    >


    <label for="vocabGerman">
      Deutsch
    </label>

    <input
      id="vocabGerman"
      type="text"
      maxlength="100"
      placeholder="z. B. Fahrrad"
      required
    >


    <div
      class="vocab-form-buttons"
    >

      <button
        id="saveVocabButton"
        class="primary-btn"
        type="submit"
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


  navigation.appendChild(
    form
  );


  form.addEventListener(
    "submit",
    addAdminVocab
  );


  document
    .getElementById(
      "cancelVocabButton"
    )
    .addEventListener(
      "click",
      () => form.remove()
    );

}


// ============================================================
// ADMIN VOKABEL SPEICHERN
// ============================================================

async function addAdminVocab(
  event
) {

  event.preventDefault();


  if (
    currentProfile?.is_admin !== true
  ) {

    return;

  }


  const classNumber =
    Number(
      document.getElementById(
        "vocabClass"
      ).value
    );


  const unit =
    Number(
      document.getElementById(
        "vocabUnit"
      ).value
    );


  const english =
    document.getElementById(
      "vocabEnglish"
    ).value.trim();


  const german =
    document.getElementById(
      "vocabGerman"
    ).value.trim();


  const message =
    document.getElementById(
      "vocabFormMessage"
    );


  const button =
    document.getElementById(
      "saveVocabButton"
    );


  if (
    !english ||
    !german ||
    !unit
  ) {

    setMessage(
      message,
      "Bitte alle Felder ausfüllen."
    );

    return;

  }


  button.disabled =
    true;

  button.textContent =
    "Speichere...";


  /*
    Zuerst versuchen wir mit unit_number.
  */

  let result =
    await supabaseClient
      .from("vocab")
      .insert({

        class_number:
          classNumber,

        unit_number:
          unit,

        english:
          english,

        german:
          german

      });


  /*
    Fallback für eine alte Tabelle
    ohne unit_number.
  */

  if (
    result.error
  ) {

    console.warn(
      "Speichern mit unit_number fehlgeschlagen. Fallback."
    );


    result =
      await supabaseClient
        .from("vocab")
        .insert({

          class_number:
            classNumber,

          english:
            english,

          german:
            german

        });

  }


  if (
    result.error
  ) {

    console.error(
      result.error
    );


    setMessage(
      message,
      result.error.message ||
      "Vokabel konnte nicht gespeichert werden."
    );


    button.disabled =
      false;

    button.textContent =
      "Vokabel speichern";

    return;

  }


  currentUnit =
    String(unit);


  document
    .getElementById(
      "vocabForm"
    )
    ?.remove();


  await renderVocab();

}


// ============================================================
// VOKABEL LÖSCHEN
// ============================================================

async function deleteVocab(
  id
) {

  if (
    currentProfile?.is_admin !== true
  ) {

    return;

  }


  if (!id) {
    return;
  }


  const confirmed =
    confirm(
      "Diese Vokabel wirklich löschen?"
    );


  if (!confirmed) {
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

    console.error(
      error
    );

    alert(
      "Vokabel konnte nicht gelöscht werden."
    );

    return;

  }


  await renderVocab();

}


// ============================================================
// GRAMMATIK
// ============================================================

function renderGrammar() {

  const grammar =
    lessons[currentClass]?.grammar ||
    [];


  contentArea.innerHTML = `

    <h2>
      📖 Grammatik –
      ${currentClass}. Klasse
    </h2>

    <p>
      Grammatik-Themen für diese Klassenstufe.
    </p>


    ${
      grammar.length

        ? grammar
            .map(
              (item, index) => `

                <article
                  class="grammar-card"
                >

                  <h3>
                    ${escapeHtml(
                      item.title ||
                      `Thema ${index + 1}`
                    )}
                  </h3>

                  <p>
                    ${escapeHtml(
                      item.explanation ||
                      ""
                    )}
                  </p>

                </article>

              `
            )
            .join("")

        : `

          <p>
            Für diese Klasse sind keine Grammatikdaten hinterlegt.
          </p>

        `
    }

  `;

}


// ============================================================
// QUIZ FRAGEN ERSTELLEN
// ============================================================

async function createQuizQuestions() {

  const questions =
    [];


  /*
    Grammatikfragen
  */

  const grammarQuestions =
    lessons[currentClass]?.questions ||
    [];


  grammarQuestions.forEach(
    question => {

      questions.push({

        type:
          "grammar",

        q:
          question.q,

        options:
          [...question.options],

        answer:
          question.answer

      });

    }
  );


  /*
    Vokabelfragen
  */

  const words =
    await getVocabForClass(
      currentClass
    );


  words.forEach(
    word => {

      const otherWords =
        shuffle(
          words.filter(
            other =>
              other.german !==
              word.german
          )
        )
        .slice(
          0,
          3
        );


      if (
        otherWords.length < 3
      ) {

        return;

      }


      const wrongAnswers =
        otherWords.map(
          item =>
            item.german
        );


      const options =
        shuffle([

          word.german,

          ...wrongAnswers

        ]);


      questions.push({

        type:
          "vocab",

        q:
          `Was bedeutet „${word.english}“?`,

        options,

        answer:
          options.indexOf(
            word.german
          )

      });

    }
  );


  return shuffle(
    questions
  );

}


// ============================================================
// QUIZ
// ============================================================

async function renderQuiz() {

  if (
    currentQuizQuestions.length === 0 ||
    currentQuizIndex >=
      currentQuizQuestions.length
  ) {

    currentQuizQuestions =
      await createQuizQuestions();

    currentQuizIndex =
      0;

  }


  if (
    currentQuizQuestions.length === 0
  ) {

    contentArea.innerHTML = `

      <h2>
        🧠 Quiz
      </h2>

      <p>
        Es sind noch nicht genug Fragen vorhanden.
      </p>

    `;

    return;

  }


  const question =
    currentQuizQuestions[
      currentQuizIndex
    ];


  quizAnswered =
    false;


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


    <div
      id="quizOptions"
    >

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
        () => {

          answerQuiz(
            Number(
              button.dataset.answer
            )
          );

        }
      );

    });

}


// ============================================================
// QUIZ ANTWORT
// ============================================================

async function answerQuiz(
  selectedAnswer
) {

  if (
    quizAnswered
  ) {

    return;

  }


  quizAnswered =
    true;


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


    await addPoints(
      10
    );


  } else {

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

        currentQuizIndex =
          0;

      }


      await renderQuiz();

    },
    1100
  );

}


// ============================================================
// ÜBEN – SATZPRÜFUNG
// ============================================================

function checkEnglishSentence(
  text,
  target
) {

  const errors =
    [];


  const sentence =
    text.trim();


  const words =
    sentence.match(
      /[A-Za-z]+(?:'[A-Za-z]+)?/g
    ) || [];


  const lower =
    sentence.toLowerCase();


  const targetLower =
    String(target)
      .toLowerCase()
      .trim();


  /*
    1. Mindestanzahl Wörter
  */

  if (
    words.length < 4
  ) {

    errors.push(
      "Schreibe einen vollständigen Satz mit mindestens 4 Wörtern."
    );

  }


  /*
    2. Zielwort muss wirklich im Satz stehen
  */

  const escapedTarget =
    targetLower.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );


  const targetRegex =
    new RegExp(
      `\\b${escapedTarget}\\b`,
      "i"
    );


  if (
    !targetRegex.test(
      sentence
    )
  ) {

    errors.push(
      `Das Wort „${target}“ muss im Satz vorkommen.`
    );

  }


  /*
    3. Großbuchstabe am Anfang
  */

  if (
    !/^[A-ZÄÖÜ]/.test(
      sentence
    )
  ) {

    errors.push(
      "Der Satz muss mit einem Großbuchstaben beginnen."
    );

  }


  /*
    4. Satzzeichen
  */

  if (
    !/[.!?]$/.test(
      sentence
    )
  ) {

    errors.push(
      "Am Ende des Satzes fehlt ein Satzzeichen."
    );

  }


  /*
    5. Doppelte Leerzeichen
  */

  if (
    /\s{2,}/.test(
      sentence
    )
  ) {

    errors.push(
      "Vermeide doppelte Leerzeichen."
    );

  }


  /*
    6. To be
  */

  if (
    /\b(i am|i is|i are|you is|he are|she are|it are|we is|they is)\b/i
      .test(lower)
  ) {

    errors.push(
      "Achte auf die richtige Form von „to be“."
    );

  }


  /*
    7. He / She / It
  */

  if (
    /\b(he|she|it)\s+(go|play|like|have|do|watch|read|eat|want|need|work|live)\b/i
      .test(lower)
  ) {

    errors.push(
      "Bei he/she/it braucht das Verb im Simple Present meistens ein -s."
    );

  }


  /*
    8. I / You / We / They
  */

  if (
    /\b(i|you|we|they)\s+(goes|plays|likes|has|does|watches|reads|eats|wants|needs|works|lives)\b/i
      .test(lower)
  ) {

    errors.push(
      "Bei I/you/we/they wird im Simple Present normalerweise nicht die he/she/it-Form verwendet."
    );

  }


  /*
    9. A / An
  */

  if (
    /\ba\s+[aeiou]/i
      .test(lower)
  ) {

    errors.push(
      "Achte auf „a“ und „an“."
    );

  }


  if (
    /\ban\s+[bcdfghjklmnpqrstvwxyz]/i
      .test(lower)
  ) {

    errors.push(
      "Achte auf „a“ und „an“."
    );

  }


  return errors;

}


// ============================================================
// ÜBEN
// ============================================================

async function renderExercise() {

  const words =
    await getVocabForClass(
      currentClass
    );


  if (
    !words.length
  ) {

    contentArea.innerHTML = `

      <h2>
        ✏️ Üben
      </h2>

      <p>
        Für diese Klasse wurden noch keine Vokabeln angelegt.
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
      ✏️ Üben –
      ${currentClass}. Klasse
    </h2>


    <p>
      Schreibe einen vollständigen englischen Satz
      mit diesem Wort.
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


    <label
      for="exerciseInput"
    >
      Dein englischer Satz
    </label>


    <input
      id="exerciseInput"
      type="text"
      placeholder="Write a complete sentence..."
      autocomplete="off"
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


  const input =
    document.getElementById(
      "exerciseInput"
    );


  const button =
    document.getElementById(
      "exerciseButton"
    );


  const result =
    document.getElementById(
      "exerciseResult"
    );


  button.addEventListener(
    "click",
    async () => {

      const text =
        input.value.trim();


      const errors =
        checkEnglishSentence(
          text,
          word.english
        );


      if (
        errors.length
      ) {

        result.innerHTML = `

          ❌
          <strong>
            Bitte verbessere deinen Satz:
          </strong>

          <br>

          •
          ${errors
            .map(
              escapeHtml
            )
            .join(
              "<br>• "
            )}

        `;

        result.style.color =
          "#c0392b";

        return;

      }


      input.disabled =
        true;

      button.disabled =
        true;


      result.textContent =
        "✅ Sehr gut! Der Satz erfüllt die grundlegenden Regeln. +5 Punkte";

      result.style.color =
        "#18794e";


      await addPoints(
        5
      );

    }
  );


  input.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        button.click();

      }

    }
  );

}


// ============================================================
// LEADERBOARD
//
// Admin-Accounts werden mit .eq("is_admin", false)
// ausgeschlossen.
// ============================================================

async function renderLeaderboard() {

  const list =
    document.getElementById(
      "leaderboardList"
    );


  if (
    !list ||
    !currentUser
  ) {

    return;

  }


  const myPoints =
    document.getElementById(
      "leaderboardMyPoints"
    );


  if (myPoints) {

    myPoints.textContent =
      Number(
        currentProfile?.points ||
        0
      );

  }


  list.innerHTML = `

    <div
      class="leaderboard-loading"
    >
      Leaderboard wird geladen...
    </div>

  `;


  /*
    Nur normale Benutzer.
    Admins werden nicht abgefragt.
  */

  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "username, points, is_admin, created_at"
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


    list.innerHTML = `

      <p>
        Leaderboard konnte nicht geladen werden.
      </p>

    `;

    return;

  }


  const users =
    (data || [])
      .filter(
        user =>
          user.is_admin !== true
      );


  if (
    !users.length
  ) {

    list.innerHTML = `

      <p>
        Noch keine normalen Benutzer im Leaderboard.
      </p>

    `;

    return;

  }


  list.innerHTML =
    users
      .map(
        (user, index) => `

          <div
            class="leaderboard-row"
          >

            <span
              class="leaderboard-rank"
            >
              ${index + 1}.
            </span>


            <span
              class="leaderboard-name"
            >
              ${escapeHtml(
                user.username ||
                "Benutzer"
              )}
            </span>


            <strong
              class="leaderboard-points"
            >
              ⭐
              ${Number(
                user.points || 0
              )}
            </strong>

          </div>

        `
      )
      .join("");


  const message =
    document.getElementById(
      "leaderboardMessage"
    );


  if (message) {

    setMessage(
      message,
      `${users.length} Benutzer angezeigt.`,
      true
    );

  }

}


document
  .getElementById(
    "refreshLeaderboard"
  )
  ?.addEventListener(
    "click",
    renderLeaderboard
  );


// ============================================================
// LEADERBOARD KLASSE FILTER
//
// Wenn profiles später eine class_number-Spalte bekommt,
// kann hier zusätzlich danach gefiltert werden.
// ============================================================

document
  .getElementById(
    "leaderboardClass"
  )
  ?.addEventListener(
    "change",
    renderLeaderboard
  );


// ============================================================
// ADMIN BENUTZERÜBERSICHT
// ============================================================

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
      .rpc(
        "admin_list_profiles"
      );


  if (error) {

    console.error(
      "Admin Benutzerliste:",
      error
    );


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
                user.points ||
                0
              )}
            </td>


            <td>
              ${escapeHtml(
                user.class_number ??
                "-"
              )}
            </td>


            <td>
              ${
                user.is_admin
                  ? "Ja"
                  : "Nein"
              }
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


refreshAdmin?.addEventListener(
  "click",
  loadAdminUsers
);


// ============================================================
// SESSION
// ============================================================

supabaseClient.auth
  .getSession()
  .then(
    async ({
      data
    }) => {

      if (
        data.session?.user
      ) {

        await showApp(
          data.session.user
        );

      }

    }
  );


supabaseClient.auth
  .onAuthStateChange(
    async (
      event,
      session
    ) => {

      if (
        event ===
        "SIGNED_OUT"
      ) {

        showAuth();

      }


      else if (
        event ===
          "SIGNED_IN" &&
        session?.user &&
        !currentUser
      ) {

        await showApp(
          session.user
        );

      }

    }
  );


// ============================================================
// START
// ============================================================

console.log(
  "English Master JavaScript geladen."
);