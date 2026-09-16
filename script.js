```javascript
/*
  ENGLISH MASTER – Supabase-Version

  Funktionen:
  - Anmeldung / Registrierung
  - Punkte
  - Vokabeln mit Units
  - Quiz mit Auswahl:
      • Alle Vokabeln
      • bestimmte Unit
      • Grammatik
  - Übungen
  - Leaderboard
  - Admin-Bereich
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
        ["lion", "Löwe"],
        ["tree", "Baum"],
        ["penguin", "Pinguin"],
        ["giraffe", "Giraffe"],
        ["train", "Zug"],
        ["guide", "(Reise-)Führer/in"],
        ["monkey", "Affe"],
        ["parrot", "Papagei"],
        ["zoo", "Zoo"],
        ["beautiful", "schön, hübsch"],
        ["behind", "hinter"],
        ["big", "groß"],
        ["in front of", "vor"],
        ["next to", "neben"],
        ["now", "jetzt"],
        ["on", "auf"],
        ["there is", "es gibt, da ist"],
        ["there are", "es gibt, da sind"],
        ["under", "unter"],
        ["What is it?", "Was ist los?"],
        ["where", "wo"],
        ["small", "klein"],
        ["adult", "Erwachsene/r"],
        ["at", "bei; an; hier: in"],
        ["to bring", "(mit-)bringen"],
        ["but", "aber"],
        ["to feed", "füttern"],
        ["to run around", "herumlaufen"],
        ["to", "zu; bis; vor; hier: in"],
        ["welcome", "willkommen"],
        ["from", "aus"],
        ["year", "Jahr, Jahrgangsstufe"],
        ["he", "er"],
        ["she", "sie"],
        ["to talk", "sprechen, sich unterhalten"],
        ["they", "sie"],
        ["we", "wir"],
        ["for", "für"],
        ["happy", "glücklich, fröhlich; zufrieden"],
        ["to let somebody out", "jemanden herauslassen"],
        ["us", "uns"],
        ["car", "Auto"],
        ["At last.", "Endlich."],
        ["How strange!", "Wie komisch!"],
        ["Let me see.", "Lass mich mal schauen."],
        ["stone", "Stein"]
      ]
    },

    grammar:
      "To be: I am, you are, he/she/it is, we are, you are, they are.",

    example:
      "I am a student. / You are my friend. / She is happy."
  },


  2: {
    units: {

      1: [
        ["ship", "Schiff"],
        ["sea", "Meer"],
        ["treasure", "Schatz"],
        ["pirate", "Pirat"],
        ["hook", "Haken"],
        ["wooden leg", "Holzbein"],
        ["also", "auch"],
        ["famous", "berühmt"],
        ["him", "ihm / ihn"],
        ["his", "sein / seine"],
        ["captain", "Kapitän"],
        ["have got / has got", "haben"],
        ["pretty", "hübsch"],
        ["purple", "violett, lila"],
        ["a lot of / lots of", "viel / viele"],
        ["bed", "Bett"],
        ["dream", "Traum"],
        ["tired", "müde"],
        ["to guess", "raten"],
        ["It's your turn.", "Du bist an der Reihe."],
        ["brother", "Bruder"],
        ["blonde", "blond"],
        ["real", "echt, wirklich"],
        ["short", "klein"],
        ["tall", "groß"],
        ["wrong", "falsch, nicht in Ordnung"],
        ["Good idea.", "Gute Idee."],
        ["true", "wahr"],
        ["to be scared of", "Angst haben vor"],
        ["very", "sehr"],
        ["strong", "stark, kräftig"]
      ],

      2: [
        ["finger", "Finger"],
        ["ear", "Ohr"],
        ["nose", "Nase"],
        ["hair", "Haare"],
        ["eye", "Auge"],
        ["mouth", "Mund"],
        ["beard", "Bart"],
        ["right arm", "rechter Arm"],
        ["shoulder", "Schulter"],
        ["left arm", "linker Arm"],
        ["leg", "Bein"],
        ["foot", "Fuß"],
        ["feet", "Füße"],
        ["tooth", "Zahn"],
        ["teeth", "Zähne"],
        ["tall", "groß / hoch"],
        ["short", "klein / niedrig / kurz"],
        ["big", "groß"],
        ["small", "klein"],
        ["long", "lang"]
      ],

      3: [
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
        ["proud", "stolz"],
        ["morning", "Morgen"],
        ["lunchtime", "Mittag"],
        ["afternoon", "Nachmittag"],
        ["evening", "Abend"],
        ["night", "Nacht"]
      ],

      4: [
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
        ["still not", "immer noch nicht"],
        ["a day in the life of", "ein Tag im Leben von"],
        ["to be asleep", "schlafen"],
        ["early", "früh"],
        ["life", "Leben"],
        ["sun", "Sonne"],
        ["Are you OK?", "Geht's dir/euch/Ihnen gut?"],
        ["homework", "Hausaufgaben"],
        ["into", "in (... hinein)"],
        ["Oh dear!", "Du meine Güte!"],
        ["room", "Zimmer, Raum"],
        ["why", "warum"],
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
      "Simple Present: I play, you play, he/she/it plays. Bei he/she/it kommt meistens -s dazu.",

    example:
      "I play football. / He plays football. / They like music."
  },


  3: {
    units: {
      1: [
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
      ]
    },

    grammar:
      "Past Simple: Regelmäßige Verben bekommen oft -ed. play → played, visit → visited.",

    example:
      "I visited London last year. / We played yesterday."
  },


  4: {
    units: {
      1: [
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
      ]
    },

    grammar:
      "First Conditional: If + Simple Present, will + Verb.",

    example:
      "If it rains, we will stay at home. / If you practise, you will improve."
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

let selectedQuizType = "all";
let selectedQuizUnit = "all";


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

    // -------------------------
    // REGISTRIERUNG
    // -------------------------

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

      if (error) {
        throw error;
      }

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

    // -------------------------
    // LOGIN
    // -------------------------

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


loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);


logoutButton.addEventListener("click", async () => {

  await supabaseClient.auth.signOut();

  showAuth();
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
    console.error(error);
    return null;
  }

  return data;
}


function updateUserUI() {

  if (!currentProfile) return;

  const username =
    currentProfile.username;

  const points =
    Number(currentProfile.points || 0);

  welcomeText.textContent =
    `👤 ${username}`;

  heroUsername.textContent =
    username;

  pointsBadge.textContent =
    `⭐ ${points} Punkte`;

  heroPoints.textContent =
    points;

  if (currentProfile.is_admin) {

    adminPanel.classList.remove("hidden");

    loadAdminUsers();

  } else {

    adminPanel.classList.add("hidden");
  }
}


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

    console.error(error);
    return;
  }

  currentProfile.points =
    data.points;

  updateUserUI();
}


// ============================================================
// KLASSENAUSWAHL
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

      selectedQuizType = "all";
      selectedQuizUnit = "all";

      renderLearning();
    });
  });


// ============================================================
// LERNMODUS
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

  const lesson =
    lessons[currentClass];

  const units =
    lesson.units;

  const unitNumbers =
    Object.keys(units);

  learningArea.innerHTML = `

    <div class="vocab-unit-navigation">

      <div class="unit-header">

        <div>

          <h2>📚 Vokabeln – ${currentClass}. Klasse</h2>

          <p>
            Wähle eine Unit aus, um die Vokabeln zu sehen.
          </p>

        </div>

      </div>

      <div id="unitList" class="unit-list">

        ${unitNumbers.map((unitNumber, index) => {

          const words =
            units[unitNumber];

          return `

            <details
              class="unit"
              ${index === 0 ? "open" : ""}
            >

              <summary>

                Unit ${unitNumber}

                <span>
                  ${words.length} Vokabeln
                </span>

              </summary>

              <div class="unit-content">

                <div class="content-grid">

                  ${words.map(([en, de]) => `

                    <div class="vocab-card">

                      <strong>
                        ${escapeHtml(en)}
                      </strong>

                      <span>
                        ${escapeHtml(de)}
                      </span>

                    </div>

                  `).join("")}

                </div>

              </div>

            </details>

          `;

        }).join("")}

      </div>

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

    <div class="content-area">

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

    </div>
  `;
}


// ============================================================
// QUIZ-FRAGEN ERSTELLEN
// ============================================================

function getAllVocab() {

  const units =
    lessons[currentClass].units;

  let words = [];

  Object.values(units).forEach(unitWords => {
    words.push(...unitWords);
  });

  return words;
}


function getQuizVocab() {

  const units =
    lessons[currentClass].units;

  if (selectedQuizUnit === "all") {
    return getAllVocab();
  }

  return units[selectedQuizUnit] || [];
}


function createVocabQuestion(wordList) {

  if (!wordList.length) {
    return null;
  }

  const correctIndex =
    Math.floor(Math.random() * wordList.length);

  const correctWord =
    wordList[correctIndex];

  let wrongWords =
    wordList.filter(
      (_, index) =>
        index !== correctIndex
    );

  wrongWords =
    wrongWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

  const options = [
    correctWord[1],
    ...wrongWords.map(word => word[1])
  ];

  options.sort(() => Math.random() - 0.5);

  return {
    q: `Was bedeutet „${correctWord[0]}“?`,
    options,
    answer: options.indexOf(correctWord[1])
  };
}


// ============================================================
// QUIZ
// ============================================================

function renderQuiz() {

  const units =
    lessons[currentClass].units;

  const unitNumbers =
    Object.keys(units);

  // Wenn noch keine Frage vorhanden ist,
  // wird eine neue erstellt.

  if (
    !window.currentQuizQuestion ||
    currentQuestion === 0
  ) {

    window.currentQuizQuestion =
      createCurrentQuizQuestion();
  }

  const q =
    window.currentQuizQuestion;

  if (!q) {

    learningArea.innerHTML = `

      <div class="content-area">

        <h2>🧠 Quiz</h2>

        <p>
          Für diese Auswahl sind noch keine Fragen vorhanden.
        </p>

      </div>
    `;

    return;
  }


  learningArea.innerHTML = `

    <div class="content-area">

      <h2>
        🧠 Quiz – ${currentClass}. Klasse
      </h2>

      <div class="quiz-selection">

        <h3>
          Was möchtest du üben?
        </h3>

        <div class="quiz-type-buttons">

          <button
            type="button"
            class="quiz-filter-btn ${
              selectedQuizType === "all"
                ? "active"
                : ""
            }"
            data-quiz-type="all"
          >
            📚 Alle Vokabeln
          </button>

          <button
            type="button"
            class="quiz-filter-btn ${
              selectedQuizType === "unit"
                ? "active"
                : ""
            }"
            data-quiz-type="unit"
          >
            📖 Bestimmte Unit
          </button>

          <button
            type="button"
            class="quiz-filter-btn ${
              selectedQuizType === "grammar"
                ? "active"
                : ""
            }"
            data-quiz-type="grammar"
          >
            📘 Grammatik
          </button>

        </div>

        ${
          selectedQuizType === "unit"
            ? `

              <div class="quiz-unit-selection">

                <label for="quizUnitSelect">
                  Unit auswählen
                </label>

                <select id="quizUnitSelect">

                  ${unitNumbers.map(unit => `

                    <option
                      value="${unit}"
                      ${
                        String(selectedQuizUnit) === String(unit)
                          ? "selected"
                          : ""
                      }
                    >
                      Unit ${unit}
                    </option>

                  `).join("")}

                </select>

              </div>

            `
            : ""
        }

      </div>


      <div class="quiz-question-box">

        <p>
          Frage ${currentQuestion + 1}
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

      </div>

    </div>
  `;


  // ----------------------------------------------------------
  // Quiz-Auswahl
  // ----------------------------------------------------------

  document
    .querySelectorAll(".quiz-filter-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        selectedQuizType =
          button.dataset.quizType;

        currentQuestion = 0;

        window.currentQuizQuestion = null;

        renderQuiz();
      });
    });


  const quizUnitSelect =
    document.getElementById("quizUnitSelect");

  if (quizUnitSelect) {

    quizUnitSelect.addEventListener(
      "change",
      () => {

        selectedQuizUnit =
          quizUnitSelect.value;

        currentQuestion = 0;

        window.currentQuizQuestion = null;

        renderQuiz();
      }
    );
  }


  // ----------------------------------------------------------
  // Antworten
  // ----------------------------------------------------------

  document
    .querySelectorAll(".quiz-option")
    .forEach(button => {

      button.addEventListener("click", () => {

        const selected =
          Number(button.dataset.answer);

        const result =
          document.getElementById(
            "quizResult"
          );

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

          currentQuestion++;

          window.currentQuizQuestion =
            createCurrentQuizQuestion();

          renderQuiz();

        }, 1200);
      });
    });
}


// ============================================================
// QUIZ-FRAGE GENERIEREN
// ============================================================

function createCurrentQuizQuestion() {

  // -------------------------
  // VOKABELN
  // -------------------------

  if (
    selectedQuizType === "all" ||
    selectedQuizType === "unit"
  ) {

    const words =
      getQuizVocab();

    return createVocabQuestion(words);
  }


  // -------------------------
  // GRAMMATIK
  // -------------------------

  if (selectedQuizType === "grammar") {

    const grammarQuestions = {

      1: [
        {
          q: "Welche Form passt? „I ___ happy.“",
          options: ["am", "is", "are"],
          answer: 0
        },
        {
          q: "Welche Form passt? „She ___ from England.“",
          options: ["am", "is", "are"],
          answer: 1
        },
        {
          q: "Welche Form passt? „They ___ friends.“",
          options: ["am", "is", "are"],
          answer: 2
        }
      ],

      2: [
        {
          q: "Welche Form ist richtig? „He ___ football.“",
          options: ["play", "plays", "playing"],
          answer: 1
        },
        {
          q: "Welche Form ist richtig? „They ___ music.“",
          options: ["likes", "like", "liking"],
          answer: 1
        },
        {
          q: "Welche Form ist richtig? „She ___ to school.“",
          options: ["go", "goes", "going"],
          answer: 1
        }
      ],

      3: [
        {
          q: "Welche Vergangenheitsform stimmt? „visit → ___“",
          options: ["visited", "visiting", "visits"],
          answer: 0
        },
        {
          q: "Welche Vergangenheitsform stimmt? „play → ___“",
          options: ["plays", "playing", "played"],
          answer: 2
        }
      ],

      4: [
        {
          q: "„If I study, I ___ learn more.“",
          options: ["will", "am", "did"],
          answer: 0
        },
        {
          q: "„If it rains, we ___ stay at home.“",
          options: ["will", "are", "did"],
          answer: 0
        }
      ]
    };


    const questions =
      grammarQuestions[currentClass] || [];

    if (!questions.length) {
      return null;
    }

    return questions[
      Math.floor(
        Math.random() * questions.length
      )
    ];
  }

  return null;
}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const words =
    getAllVocab();

  const randomWord =
    words[
      Math.floor(
        Math.random() * words.length
      )
    ];


  learningArea.innerHTML = `

    <div class="content-area">

      <h2>
        ✏️ Übungen – ${currentClass}. Klasse
      </h2>

      <p>
        Schreibe einen englischen Satz mit einem Wort
        aus den Vokabeln.
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
      "Admin-Liste konnte nicht geladen werden. Prüfe die Admin-SQL-Funktion."
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


if (refreshAdmin) {
  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );
}


// ============================================================
// NAVIGATION
// ============================================================

document
  .querySelectorAll(".nav-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      const page =
        button.dataset.page;


      document
        .querySelectorAll(".nav-btn")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");


      const learningPage =
        document.getElementById(
          "learningPage"
        );

      const leaderboardPage =
        document.getElementById(
          "leaderboardPage"
        );


      if (page === "learning") {

        learningPage.classList.remove(
          "hidden"
        );

        leaderboardPage.classList.add(
          "hidden"
        );

      }


      if (page === "leaderboard") {

        learningPage.classList.add(
          "hidden"
        );

        leaderboardPage.classList.remove(
          "hidden"
        );

        loadLeaderboard();
      }
    });
  });


// ============================================================
// LEADERBOARD
// ============================================================

const leaderboardList =
  document.getElementById(
    "leaderboardList"
  );

const leaderboardClass =
  document.getElementById(
    "leaderboardClass"
  );

const refreshLeaderboard =
  document.getElementById(
    "refreshLeaderboard"
  );

const leaderboardMyPoints =
  document.getElementById(
    "leaderboardMyPoints"
  );

const leaderboardMessage =
  document.getElementById(
    "leaderboardMessage"
  );


async function loadLeaderboard() {

  if (!leaderboardList) {
    return;
  }

  leaderboardList.innerHTML = `
    <div class="leaderboard-loading">
      Leaderboard wird geladen...
    </div>
  `;


  if (leaderboardMyPoints && currentProfile) {

    leaderboardMyPoints.textContent =
      Number(currentProfile.points || 0);
  }


  let query =
    supabaseClient
      .from("profiles")
      .select(
        "username, points, is_admin, created_at"
      )
      .eq("is_admin", false)
      .order("points", {
        ascending: false
      });


  const selectedClass =
    leaderboardClass?.value;


  /*
    Falls deine profiles-Tabelle eine
    class-Spalte besitzt, kann hier später
    nach Klasse gefiltert werden.

    Der Filter wird deshalb nur verwendet,
    wenn die Auswahl "Alle Klassen" ist.
  */

  const { data, error } =
    await query;


  if (error) {

    console.error(error);

    leaderboardList.innerHTML = "";

    if (leaderboardMessage) {

      leaderboardMessage.textContent =
        "Leaderboard konnte nicht geladen werden.";

      leaderboardMessage.style.color =
        "#c0392b";
    }

    return;
  }


  let users = data || [];


  // Falls die Datenbank keine Klassen-Spalte
  // im Select verwendet, bleibt das Leaderboard
  // trotzdem funktionierend.

  if (selectedClass === "all") {
    // Alle Benutzer
  }


  if (!users.length) {

    leaderboardList.innerHTML = `
      <div class="leaderboard-loading">
        Noch keine Benutzer vorhanden.
      </div>
    `;

    return;
  }


  leaderboardList.innerHTML =
    users.map((user, index) => `

      <div class="leaderboard-row">

        <div class="leaderboard-rank">
          #${index + 1}
        </div>

        <div class="leaderboard-name">
          ${escapeHtml(user.username)}
        </div>

        <div class="leaderboard-points">
          ⭐ ${Number(user.points || 0)}
        </div>

      </div>

    `).join("");


  if (leaderboardMessage) {

    leaderboardMessage.textContent =
      `${users.length} Lernende angezeigt.`;

    leaderboardMessage.style.color =
      "#18794e";
  }
}


if (refreshLeaderboard) {

  refreshLeaderboard.addEventListener(
    "click",
    loadLeaderboard
  );
}


// ============================================================
// ADMIN – VOKABEL HINZUFÜGEN
// ============================================================

const vocabForm =
  document.getElementById("vocabForm");

const vocabEnglish =
  document.getElementById("vocabEnglish");

const vocabGerman =
  document.getElementById("vocabGerman");

const vocabUnit =
  document.getElementById("vocabUnit");

const vocabClass =
  document.getElementById("vocabClass");

const vocabExample =
  document.getElementById("vocabExample");

const vocabMessage =
  document.getElementById("vocabMessage");


if (vocabForm) {

  vocabForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      if (!currentProfile?.is_admin) {

        if (vocabMessage) {

          vocabMessage.textContent =
            "Nur Administratoren können Vokabeln hinzufügen.";

          vocabMessage.style.color =
            "#c0392b";
        }

        return;
      }


      const english =
        vocabEnglish.value.trim();

      const german =
        vocabGerman.value.trim();

      const unit =
        Number(vocabUnit.value);

      const classNumber =
        Number(vocabClass.value);

      const example =
        vocabExample.value.trim();


      if (
        !english ||
        !german ||
        !unit ||
        !classNumber
      ) {

        if (vocabMessage) {

          vocabMessage.textContent =
            "Bitte alle Pflichtfelder ausfüllen.";

          vocabMessage.style.color =
            "#c0392b";
        }

        return;
      }


      /*
        Erwartete Tabelle:

        vocab

        english
        german
        unit
        class
        example
      */

      const { error } =
        await supabaseClient
          .from("vocab")
          .insert({
            english,
            german,
            unit,
            class: classNumber,
            example: example || null
          });


      if (error) {

        console.error(error);

        if (vocabMessage) {

          vocabMessage.textContent =
            "Vokabel konnte nicht gespeichert werden.";

          vocabMessage.style.color =
            "#c0392b";
        }

        return;
      }


      if (vocabMessage) {

        vocabMessage.textContent =
          "✅ Vokabel wurde hinzugefügt.";

        vocabMessage.style.color =
          "#18794e";
      }


      vocabForm.reset();
    }
  );
}
```
