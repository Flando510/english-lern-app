/*
  ENGLISH MASTER – Supabase-Version

  Login/Registrierung bleibt wie im Original.
  Zusätzlich:
  - Vokabeln mit Unit-System
  - Unit-Auswahl bei Vokabeln
  - Quiz
  - Grammatik
  - Übungen
*/

const SUPABASE_URL = "https://amrqkjyemjpyxxyugwyu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EUe8HwB24WogxOBCcs3fsg_9jt0AfhJ";

if (SUPABASE_PUBLISHABLE_KEY.startsWith("HIER_")) {
  console.warn("Bitte den Supabase Publishable Key in script.js eintragen.");
}

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ============================================================
// LERNINHALTE
// ============================================================

const lessons = {

  1: {
    units: {
      1: [
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

      2: [
        ["finger", "Finger"],
        ["ear", "Ohr"],
        ["nose", "Nase"],
        ["hair", "Haare"],
        ["eye", "Auge"],
        ["mouth", "Mund"],
        ["beard", "Bart"],
        ["shoulder", "Schulter"],
        ["leg", "Bein"],
        ["foot", "Fuß"],
        ["feet", "Füße"],
        ["tooth", "Zahn"],
        ["teeth", "Zähne"]
      ],

      3: [
        ["tall", "groß / hoch"],
        ["short", "klein / niedrig / kurz"],
        ["big", "groß"],
        ["small", "klein"],
        ["long", "lang"]
      ],

      4: [
        ["cold", "kalt"],
        ["angry", "wütend"],
        ["happy", "glücklich"],
        ["scared", "ängstlich"],
        ["hot", "heiß"],
        ["excited", "aufgeregt"],
        ["sad", "traurig"],
        ["bored", "gelangweilt"],
        ["hungry", "hungrig"],
        ["nervous", "nervös"],
        ["tired", "müde"],
        ["proud", "stolz"]
      ],

      5: [
        ["morning", "Morgen"],
        ["lunchtime", "Mittag"],
        ["afternoon", "Nachmittag"],
        ["evening", "Abend"],
        ["night", "Nacht"]
      ]
    },

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
    units: {
      1: [
        ["morning", "Morgen"],
        ["evening", "Abend"],
        ["breakfast", "Frühstück"],
        ["teacher", "Lehrer/in"],
        ["homework", "Hausaufgabe"]
      ],

      2: [
        ["computer", "Computer"],
        ["weather", "Wetter"],
        ["summer", "Sommer"],
        ["Monday", "Montag"],
        ["beautiful", "schön"]
      ]
    },

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
    units: {
      1: [
        ["usually", "normalerweise"],
        ["sometimes", "manchmal"],
        ["always", "immer"],
        ["never", "nie"],
        ["important", "wichtig"]
      ],

      2: [
        ["interesting", "interessant"],
        ["journey", "Reise"],
        ["environment", "Umwelt"],
        ["future", "Zukunft"],
        ["healthy", "gesund"]
      ]
    },

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
    units: {
      1: [
        ["opportunity", "Möglichkeit"],
        ["experience", "Erfahrung"],
        ["decision", "Entscheidung"],
        ["although", "obwohl"],
        ["however", "jedoch"]
      ],

      2: [
        ["improve", "verbessern"],
        ["probably", "wahrscheinlich"],
        ["future", "Zukunft"],
        ["responsibility", "Verantwortung"],
        ["achievement", "Erfolg/Leistung"]
      ],

      3: [
        ["after", "nach"],
        ["day", "Tag"],
        ["end", "Ende"],
        ["fun", "Spaß"],
        ["Go away!", "Geh weg!"],
        ["to help", "helfen"],
        ["home", "zu/nach Hause; Zuhause"],
        ["It's no good.", "Es hat keinen Zweck."],
        ["mum", "Mama, Mutti"],
        ["next", "nächster/nächste/nächstes"],
        ["still (not)", "immer noch (nicht)"],
        ["a day in the life of", "ein Tag im Leben von"],
        ["to be asleep", "schlafen"],
        ["early", "früh"],
        ["life (pl lives)", "Leben"],
        ["lunchtime", "Mittagspause"],
        ["sun", "Sonne"],
        ["Are you OK?", "Geht's dir/euch/Ihnen gut?"],
        ["homework", "Hausaufgaben"],
        ["into", "in (... hinein)"],
        ["Oh dear!", "Du meine Güte!"],
        ["room", "Zimmer, Raum"],
        ["why", "warum"]
      ],

      4: [
        ["bad", "schlecht, böse"],
        ["Don't be late.", "Komm(t) nicht zu spät., Sei(d) pünktlich."],
        ["tomorrow", "morgen"],
        ["birthday", "Geburtstag"],
        ["friend", "Freund/Freundin"],
        ["Be yourself.", "Sei du selbst."],
        ["no one else", "niemand anders"],
        ["bottle", "Flasche"],
        ["to get back", "zurückholen, zurückbekommen"],
        ["mad", "wütend, zornig"],
        ["magic", "magisch"],
        ["to rob", "stehlen; ausrauben"],
        ["to break", "(zer-)brechen"],
        ["to go to sleep", "schlafen gehen"],
        ["because", "weil"],
        ["It's me.", "Ich bin's."],
        ["Try it!", "Versuch es!"],
        ["Let go!", "Lass(t) los!"],
        ["What's happening?", "Was ist (hier) los?"]
      ]
    },

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
let currentUnit = null;

let currentUser = null;
let currentProfile = null;
let isRegisterMode = false;


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
    if (adminPanel) {
      adminPanel.classList.remove("hidden");
    }

    loadAdminUsers();
  } else {
    if (adminPanel) {
      adminPanel.classList.add("hidden");
    }
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
// REGISTRIERUNG / LOGIN
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
          "Konto erstellt, aber das Profil konnte nicht angelegt werden. Prüfe die Datenbank-Einstellungen."
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

supabaseClient.auth.getSession()
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

document.querySelectorAll(".class-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      currentClass =
        Number(button.dataset.class);

      currentUnit = null;
      currentQuestion = 0;

      document
        .querySelectorAll(".class-btn")
        .forEach(b =>
          b.classList.remove("active")
        );

      button.classList.add("active");

      renderLearning();
    });

  });


// ============================================================
// LERNMODUS
// ============================================================

document.querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      currentMode =
        button.dataset.mode;

      currentQuestion = 0;

      if (currentMode !== "vocab") {
        currentUnit = null;
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
// VOKABELN MIT UNIT-SYSTEM
// ============================================================

function renderVocab() {

  const lesson = lessons[currentClass];

  const units = lesson.units || {};

  const unitNumbers =
    Object.keys(units)
      .map(Number)
      .sort((a, b) => a - b);

  if (
    currentUnit !== null &&
    !units[currentUnit]
  ) {
    currentUnit = null;
  }


  learningArea.innerHTML = `

    <div id="vocabUnitNavigation"
         class="vocab-unit-navigation">

      <div class="unit-header">

        <div>

          <h2>
            📚 Vokabeln – ${currentClass}. Klasse
          </h2>

          <p>
            Wähle eine Unit aus.
          </p>

        </div>

      </div>


      <div id="unitList"
           class="unit-list">

        ${unitNumbers.map(unitNumber => {

          const wordCount =
            units[unitNumber].length;

          const isOpen =
            currentUnit === unitNumber
              ? "open"
              : "";

          return `

            <details
              class="unit"
              data-unit="${unitNumber}"
              ${isOpen}
            >

              <summary>

                <strong>
                  Unit ${unitNumber}
                </strong>

                <span>
                  ${wordCount} Vokabeln
                </span>

              </summary>

              <div class="unit-content">

                <div class="content-grid">

                  ${units[unitNumber]
                    .map(([en, de]) => `

                      <div class="vocab-card">

                        <strong>
                          ${escapeHtml(en)}
                        </strong>

                        <span>
                          ${escapeHtml(de)}
                        </span>

                      </div>

                    `)
                    .join("")}

                </div>

              </div>

            </details>

          `;

        }).join("")}

      </div>

    </div>

  `;


  document
    .querySelectorAll(".unit")
    .forEach(unitElement => {

      unitElement.addEventListener(
        "toggle",
        () => {

          if (unitElement.open) {

            currentUnit =
              Number(
                unitElement.dataset.unit
              );

            document
              .querySelectorAll(".unit")
              .forEach(other => {

                if (other !== unitElement) {
                  other.open = false;
                }

              });

          }

        }
      );

    });
}


// ============================================================
// GRAMMATIK
// ============================================================

function renderGrammar() {

  const lesson =
    lessons[currentClass];

  learningArea.innerHTML = `

    <div class="content-area">

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

    </div>

  `;
}


// ============================================================
// QUIZ
// ============================================================

function renderQuiz() {

  const questions =
    lessons[currentClass].questions;

  if (!questions || questions.length === 0) {

    learningArea.innerHTML = `

      <div class="content-area">

        <h2>
          🧠 Quiz – ${currentClass}. Klasse
        </h2>

        <p>
          Für diese Klasse gibt es noch keine Quizfragen.
        </p>

      </div>

    `;

    return;
  }


  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }


  const q =
    questions[currentQuestion];


  learningArea.innerHTML = `

    <div class="content-area">

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

        ${q.options
          .map((option, index) => `

            <button
              class="quiz-option"
              data-answer="${index}"
              type="button"
            >
              ${escapeHtml(option)}
            </button>

          `)
          .join("")}

      </div>

      <p
        id="quizResult"
        class="quiz-result"
      ></p>

    </div>

  `;


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
            .forEach(b => {
              b.disabled = true;
            });


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


          setTimeout(() => {

            currentQuestion =
              (currentQuestion + 1)
              % questions.length;

            renderQuiz();

          }, 1200);

        }
      );

    });
}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const lesson =
    lessons[currentClass];

  const unitNumbers =
    Object.keys(lesson.units)
      .map(Number)
      .sort((a, b) => a - b);

  const firstUnit =
    unitNumbers.length > 0
      ? unitNumbers[0]
      : null;

  const firstWord =
    firstUnit !== null &&
    lesson.units[firstUnit].length > 0
      ? lesson.units[firstUnit][0][0]
      : "friend";


  learningArea.innerHTML = `

    <div class="content-area">

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
          ${escapeHtml(firstWord)}
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
        type="button"
        style="max-width:260px;"
      >
        Übung abschließen
      </button>

      <p
        id="exerciseResult"
        class="quiz-result"
      ></p>

    </div>

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


        if (
          input.value.trim().length < 4
        ) {

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
// ADMIN
// ============================================================

async function loadAdminUsers() {

  if (!currentProfile?.is_admin) {
    return;
  }

  if (!adminUsers) {
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
    await supabaseClient.rpc(
      "admin_list_profiles"
    );


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


  setAdminMessage(
    `${data.length} Benutzer gefunden.`,
    false
  );
}


function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


if (refreshAdmin) {

  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );

}


// ============================================================
// START
// ============================================================

renderLearning();