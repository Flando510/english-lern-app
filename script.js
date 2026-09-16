/*
  ENGLISH MASTER – Supabase-Version

  Login/Registrierung basiert auf der ursprünglichen Version.
  Quiz erweitert um:
  - Alle Vokabeln
  - bestimmte Unit
  - Grammatik
*/

const SUPABASE_URL = "https://amrqkjyemjpyxxyugwyu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "DEIN_SB_PUBLISHABLE_KEY";

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
        ["homework", "Hausaufgabe"],
        ["computer", "Computer"],
        ["weather", "Wetter"],
        ["summer", "Sommer"],
        ["Monday", "Montag"],
        ["beautiful", "schön"]
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
        ["there is (there's)", "es gibt, da ist"],
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
      ],

      3: [
        ["ship", "Schiff"],
        ["sea", "Meer"],
        ["treasure", "Schatz"],
        ["pirate", "Pirat"],
        ["hook", "Haken"],
        ["wooden leg", "Holzbein"],
        ["also", "auch"],
        ["famous", "berühmt"],
        ["him", "ihm / ihn"],
        ["his", "sein / e"],
        ["ship", "Schiff"],
        ["to be scared (of)", "Angst haben (vor)"],
        ["very", "sehr"],
        ["strong", "stark, kräftig"],
        ["captain", "Kapitän"],
        ["have got / has got", "haben"],
        ["pretty", "hübsch"],
        ["purple", "violett, lila"],
        ["a lot of / lots of", "viel / e"],
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
        ["true", "wahr"]
      ],

      4: [
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

      5: [
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

      6: [
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
        ["homework (no pl)", "Hausaufgaben"],
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
        ["important", "wichtig"],
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
        ["however", "jedoch"],
        ["improve", "verbessern"],
        ["probably", "wahrscheinlich"],
        ["future", "Zukunft"],
        ["responsibility", "Verantwortung"],
        ["achievement", "Erfolg/Leistung"]
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
let currentUser = null;
let currentProfile = null;
let isRegisterMode = false;

// Quiz-Auswahl
let quizType = "all";
let quizUnit = "all";
let quizQuestions = [];

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

  if (loginTab) loginTab.classList.add("active");
  if (registerTab) registerTab.classList.remove("active");

  if (authButton) authButton.textContent = "Anmelden";
  if (passwordInput) passwordInput.autocomplete = "current-password";

  setAuthMessage("");
}

function showRegister() {
  isRegisterMode = true;

  if (registerTab) registerTab.classList.add("active");
  if (loginTab) loginTab.classList.remove("active");

  if (authButton) authButton.textContent = "Konto erstellen";
  if (passwordInput) passwordInput.autocomplete = "new-password";

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
    setAuthMessage("Dein Profil konnte nicht geladen werden.");
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

if (authForm) {
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

      authButton.textContent = isRegisterMode
        ? "Konto erstellen"
        : "Anmelden";
    }
  });
}

if (loginTab) {
  loginTab.addEventListener("click", showLogin);
}

if (registerTab) {
  registerTab.addEventListener("click", showRegister);
}

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    showAuth();
  });
}

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
// KLASSENAUSWAHL
// ============================================================

document.querySelectorAll(".class-btn").forEach(
  (button) => {
    button.addEventListener("click", () => {
      currentClass = Number(button.dataset.class);
      currentQuestion = 0;

      document
        .querySelectorAll(".class-btn")
        .forEach((b) => {
          b.classList.remove("active");
        });

      button.classList.add("active");

      renderLearning();
    });
  }
);

// ============================================================
// LERNMODI
// ============================================================

document.querySelectorAll(".mode-btn").forEach(
  (button) => {
    button.addEventListener("click", () => {
      currentMode = button.dataset.mode;
      currentQuestion = 0;

      document
        .querySelectorAll(".mode-btn")
        .forEach((b) => {
          b.classList.remove("active");
        });

      button.classList.add("active");

      renderLearning();
    });
  }
);

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

function getUnits() {
  const lesson = lessons[currentClass];

  if (!lesson || !lesson.units) {
    return {};
  }

  return lesson.units;
}

function renderVocab() {
  const units = getUnits();
  const unitNumbers = Object.keys(units);

  learningArea.innerHTML = `
    <div id="vocabUnitNavigation" class="vocab-unit-navigation">

      <div class="unit-header">
        <div>
          <h2>📚 Vokabeln</h2>
          <p>Wähle eine Unit aus.</p>
        </div>
      </div>

      <div id="unitList" class="unit-list">

        ${
          unitNumbers.length === 0
            ? `
              <div class="empty-unit">
                <p>Keine Vokabeln vorhanden.</p>
              </div>
            `
            : unitNumbers
                .map((unitNumber) => {
                  const count =
                    units[unitNumber].length;

                  return `
                    <details class="unit">
                      <summary>
                        Unit ${unitNumber}
                        <span>
                          ${count} Vokabeln
                        </span>
                      </summary>

                      <div class="unit-content">

                        <div class="content-grid">

                          ${units[unitNumber]
                            .map(
                              ([en, de]) => `
                                <div class="vocab-card">
                                  <strong>
                                    ${escapeHtml(en)}
                                  </strong>

                                  <span>
                                    ${escapeHtml(de)}
                                  </span>
                                </div>
                              `
                            )
                            .join("")}

                        </div>

                      </div>
                    </details>
                  `;
                })
                .join("")
        }

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
    <h2>📖 Grammatik – ${currentClass}. Klasse</h2>

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
// QUIZ – FRAGEN ERSTELLEN
// ============================================================

function getAllVocab() {
  const units = getUnits();
  const result = [];

  Object.keys(units).forEach((unitNumber) => {
    units[unitNumber].forEach(([english, german]) => {
      result.push({
        english,
        german,
        unit: Number(unitNumber)
      });
    });
  });

  return result;
}

function createVocabQuestion(word) {
  const allWords = getAllVocab();

  const otherWords = allWords
    .filter((item) => item.english !== word.english)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const options = [
    word.german,
    ...otherWords.map((item) => item.german)
  ];

  const shuffled = options.sort(
    () => Math.random() - 0.5
  );

  return {
    q: `Was bedeutet „${word.english}“?`,
    options: shuffled,
    answer: shuffled.indexOf(word.german)
  };
}

function getQuizQuestions() {
  const lesson = lessons[currentClass];

  if (quizType === "grammar") {
    return lesson.questions || [];
  }

  let words = getAllVocab();

  if (quizType === "unit" && quizUnit !== "all") {
    words = words.filter(
      (word) => word.unit === Number(quizUnit)
    );
  }

  words = words.sort(
    () => Math.random() - 0.5
  );

  return words.map(createVocabQuestion);
}

// ============================================================
// QUIZ
// ============================================================

function renderQuiz() {
  quizQuestions = getQuizQuestions();

  if (quizQuestions.length === 0) {
    learningArea.innerHTML = `
      <h2>🧠 Quiz – ${currentClass}. Klasse</h2>
      <p class="message">
        Für diese Auswahl sind keine Fragen vorhanden.
      </p>
    `;

    return;
  }

  if (currentQuestion >= quizQuestions.length) {
    currentQuestion = 0;
  }

  const q = quizQuestions[currentQuestion];

  learningArea.innerHTML = `
    <div class="quiz-header">

      <h2>
        🧠 Quiz – ${currentClass}. Klasse
      </h2>

      <p>
        Wähle aus, was du üben möchtest.
      </p>

    </div>

    <div class="quiz-selection">

      <label for="quizType">
        Quiz-Art
      </label>

      <select id="quizType">

        <option
          value="all"
          ${quizType === "all" ? "selected" : ""}
        >
          📚 Alle Vokabeln
        </option>

        <option
          value="unit"
          ${quizType === "unit" ? "selected" : ""}
        >
          📖 Bestimmte Unit
        </option>

        <option
          value="grammar"
          ${quizType === "grammar" ? "selected" : ""}
        >
          📖 Grammatik
        </option>

      </select>

      <div
        id="quizUnitContainer"
        class="${quizType === "unit" ? "" : "hidden"}"
      >

        <label for="quizUnit">
          Unit
        </label>

        <select id="quizUnit">

          ${Object.keys(getUnits())
            .map(
              (unit) => `
                <option
                  value="${unit}"
                  ${
                    Number(quizUnit) === Number(unit)
                      ? "selected"
                      : ""
                  }
                >
                  Unit ${unit}
                </option>
              `
            )
            .join("")}

        </select>

      </div>

      <button
        id="startQuizButton"
        class="primary-btn"
        type="button"
      >
        🚀 Quiz starten
      </button>

    </div>

    <hr>

    <p>
      Frage ${currentQuestion + 1}
      von ${quizQuestions.length}
    </p>

    <h3>
      ${escapeHtml(q.q)}
    </h3>

    <div id="quizOptions">

      ${q.options
        .map(
          (option, index) => `
            <button
              class="quiz-option"
              data-answer="${index}"
            >
              ${escapeHtml(option)}
            </button>
          `
        )
        .join("")}

    </div>

    <p
      id="quizResult"
      class="quiz-result"
    ></p>
  `;

  const quizTypeSelect =
    document.getElementById("quizType");

  const quizUnitContainer =
    document.getElementById("quizUnitContainer");

  const quizUnitSelect =
    document.getElementById("quizUnit");

  const startQuizButton =
    document.getElementById("startQuizButton");

  quizTypeSelect.addEventListener(
    "change",
    () => {
      quizType = quizTypeSelect.value;

      if (quizType === "unit") {
        quizUnitContainer.classList.remove(
          "hidden"
        );
      } else {
        quizUnitContainer.classList.add(
          "hidden"
        );
      }
    }
  );

  if (quizUnitSelect) {
    quizUnitSelect.addEventListener(
      "change",
      () => {
        quizUnit = quizUnitSelect.value;
      }
    );
  }

  startQuizButton.addEventListener(
    "click",
    () => {
      if (quizType === "unit") {
        quizUnit =
          quizUnitSelect?.value || "1";
      } else {
        quizUnit = "all";
      }

      currentQuestion = 0;
      quizQuestions = getQuizQuestions();

      renderQuiz();
    }
  );

  document
    .querySelectorAll(".quiz-option")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const selected =
          Number(button.dataset.answer);

        const result =
          document.getElementById("quizResult");

        document
          .querySelectorAll(".quiz-option")
          .forEach((b) => {
            b.disabled = true;
          });

        if (selected === q.answer) {
          result.textContent =
            "✅ Richtig! +10 Punkte";

          result.style.color = "#18794e";

          addPoints(10);
        } else {
          result.textContent =
            `❌ Nicht ganz. Richtig wäre: ${q.options[q.answer]}`;

          result.style.color = "#c0392b";
        }

        setTimeout(() => {
          currentQuestion++;

          if (
            currentQuestion >=
            quizQuestions.length
          ) {
            currentQuestion = 0;
          }

          renderQuiz();
        }, 1200);
      });
    });
}

// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {
  const allWords = getAllVocab();

  const word =
    allWords.length > 0
      ? allWords[0].english
      : "school";

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
      <strong>${escapeHtml(word)}</strong>
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
    .addEventListener("click", async () => {
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

        result.style.color = "#c0392b";

        return;
      }

      result.textContent =
        "✅ Übung abgeschlossen! +5 Punkte";

      result.style.color = "#18794e";

      input.disabled = true;

      document.getElementById(
        "exerciseButton"
      ).disabled = true;

      await addPoints(5);
    });
}

// ============================================================
// ADMIN
// ============================================================

async function loadAdminUsers() {
  if (!currentProfile?.is_admin) return;

  setAdminMessage(
    "Lade Benutzer...",
    false
  );

  const { data, error } =
    await supabaseClient.rpc(
      "admin_list_profiles"
    );

  if (error) {
    console.error(error);

    if (adminUsers) {
      adminUsers.innerHTML = "";
    }

    setAdminMessage(
      "Admin-Liste konnte nicht geladen werden. Die Admin-SQL-Funktion muss noch eingerichtet werden."
    );

    return;
  }

  if (!adminUsers) return;

  adminUsers.innerHTML = data
    .map(
      (user) => `
        <tr>

          <td>
            ${escapeHtml(user.username)}
          </td>

          <td>
            ⭐ ${Number(user.points || 0)}
          </td>

          <td>
            ${user.class ?? "-"}
          </td>

          <td>
            ${user.is_admin ? "Ja" : "Nein"}
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
    `${data.length} Benutzer gefunden.`,
    false
  );
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

if (refreshAdmin) {
  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );
}