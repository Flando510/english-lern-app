/*
  ENGLISH MASTER – Supabase-Version
  Originaler Login + Unit-Vokabeln + Quiz-Auswahl
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
      ]
    },

    grammar: "To be: I am, you are, he/she/it is, we are, you are, they are.",
    example: "I am a student. / You are my friend. / She is happy.",

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
        ["true", "wahr"]
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
      ]
    },

    grammar: "Simple Present: I play, you play, he/she/it plays. Bei he/she/it kommt meistens -s dazu.",
    example: "I play football. / He plays football. / They like music.",

    questions: [
      {
        q: "Welche Form ist richtig? „He ___ football.“",
        options: ["play", "plays", "playing"],
        answer: 1
      },
      {
        q: "Was bedeutet „tall“?",
        options: ["klein", "groß / hoch", "kurz"],
        answer: 1
      },
      {
        q: "Was ist die Mehrzahl von „tooth“?",
        options: ["tooths", "teeth", "toothes"],
        answer: 1
      }
    ]
  },


  3: {
    units: {

      1: [
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

      2: [
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

    grammar: "Past Simple: regelmäßige Verben bekommen oft -ed. Beispiel: play → played, visit → visited.",
    example: "I visited London last year. / We played yesterday.",

    questions: [
      {
        q: "Welche Vergangenheitsform stimmt? „visit → ___“",
        options: ["visited", "visiting", "visits"],
        answer: 0
      },
      {
        q: "Was bedeutet „happy“?",
        options: ["traurig", "glücklich", "wütend"],
        answer: 1
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

    grammar: "First Conditional: If + Simple Present, will + Verb. Beispiel: If I study, I will learn more.",
    example: "If it rains, we will stay at home. / If you practise, you will improve.",

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

const learningArea =
  document.getElementById("learningArea") ||
  document.getElementById("contentArea");

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
// PROFILE
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
// LOGIN / REGISTRIERUNG
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
            data: { username }
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

    renderLearning();

  });

});


// ============================================================
// LERNMODUS
// ============================================================

document.querySelectorAll(".mode-btn").forEach(button => {

  button.addEventListener("click", () => {

    currentMode = button.dataset.mode;
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
// VOKABELN – UNIT SYSTEM
// ============================================================

function renderVocab() {

  const lesson = lessons[currentClass];
  const units = lesson.units || {};

  const unitNumbers = Object.keys(units);

  learningArea.innerHTML = `

    <div class="vocab-unit-navigation">

      <div class="unit-header">

        <div>

          <h2>📚 Vokabeln – ${currentClass}. Klasse</h2>

          <p>
            Wähle eine Unit aus.
          </p>

        </div>

      </div>

      <div class="unit-list">

        ${unitNumbers.map(unit => {

          const words = units[unit];

          return `

            <details class="unit">

              <summary>
                <strong>Unit ${unit}</strong>
                <span>${words.length} Vokabeln</span>
              </summary>

              <div class="unit-content">

                <div class="vocab-header">

                  <div>

                    <h2>
                      📚 Unit ${unit}
                    </h2>

                    <p>
                      ${words.length} Vokabeln
                    </p>

                  </div>

                </div>

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

  const lesson = lessons[currentClass];

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
// QUIZ – AUSWAHL
// ============================================================

function renderQuiz() {

  learningArea.innerHTML = `

    <div class="content-area">

      <h2>
        🧠 Quiz – ${currentClass}. Klasse
      </h2>

      <p>
        Wähle aus, was du üben möchtest.
      </p>

      <div class="quiz-selection">

        <button
          class="quiz-type-btn ${quizType === "all" ? "active" : ""}"
          data-quiz-type="all"
        >
          📚 Alle Vokabeln
        </button>

        ${Object.keys(lessons[currentClass].units || {})
          .map(unit => `

            <button
              class="quiz-type-btn ${
                quizType === "unit" &&
                String(quizUnit) === String(unit)
                  ? "active"
                  : ""
              }"
              data-quiz-type="unit"
              data-unit="${unit}"
            >
              📖 Unit ${unit}
            </button>

          `).join("")}

        <button
          class="quiz-type-btn ${
            quizType === "grammar"
              ? "active"
              : ""
          }"
          data-quiz-type="grammar"
        >
          ✏️ Grammatik
        </button>

      </div>

      <div id="quizGameArea"></div>

    </div>

  `;

  document
    .querySelectorAll(".quiz-type-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        const type =
          button.dataset.quizType;

        if (type === "unit") {

          quizType = "unit";
          quizUnit = button.dataset.unit;

        } else {

          quizType = type;

        }

        currentQuestion = 0;

        prepareQuiz();

        renderQuiz();

        renderQuizQuestion();

      });

    });


  prepareQuiz();

  renderQuizQuestion();
}


// ============================================================
// QUIZ FRAGEN ERSTELLEN
// ============================================================

function prepareQuiz() {

  quizQuestions = [];

  const lesson = lessons[currentClass];

  if (quizType === "grammar") {

    quizQuestions = lesson.questions.map(q => ({
      ...q,
      category: "grammar"
    }));

    return;
  }


  let words = [];

  if (quizType === "unit") {

    words =
      lesson.units?.[quizUnit] || [];

  } else {

    Object.values(lesson.units || {})
      .forEach(unitWords => {
        words.push(...unitWords);
      });

  }


  words.forEach(([english, german]) => {

    const wrongAnswers = getRandomWrongAnswers(
      words,
      german,
      2
    );

    const options = [
      german,
      ...wrongAnswers
    ];

    shuffleArray(options);

    quizQuestions.push({
      q: `Was bedeutet „${english}“?`,
      options,
      answer: options.indexOf(german),
      category: "vocab"
    });

  });


  if (quizQuestions.length === 0) {

    quizQuestions.push({
      q: "Keine Vokabeln vorhanden.",
      options: ["OK"],
      answer: 0
    });

  }

}


// ============================================================
// QUIZ FRAGE ANZEIGEN
// ============================================================

function renderQuizQuestion() {

  const area =
    document.getElementById("quizGameArea");

  if (!area || quizQuestions.length === 0) {
    return;
  }

  if (currentQuestion >= quizQuestions.length) {
    currentQuestion = 0;
  }

  const q =
    quizQuestions[currentQuestion];

  area.innerHTML = `

    <div class="quiz-question-area">

      <p>
        Frage ${currentQuestion + 1}
        von ${quizQuestions.length}
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

  `;


  document
    .querySelectorAll(".quiz-option")
    .forEach(button => {

      button.addEventListener("click", async () => {

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

          currentQuestion++;

          if (
            currentQuestion >=
            quizQuestions.length
          ) {
            currentQuestion = 0;
          }

          renderQuizQuestion();

        }, 1200);

      });

    });

}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const lesson = lessons[currentClass];

  const firstUnit =
    Object.values(lesson.units || {})[0] || [];

  const firstWord =
    firstUnit[0]?.[0] || "school";


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

        <strong>Aufgabe:</strong>

        <br><br>

        Verwende das Wort
        <strong>${escapeHtml(firstWord)}</strong>
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
    ?.addEventListener("click", async () => {

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

      document.getElementById(
        "exerciseButton"
      ).disabled = true;

      await addPoints(5);

    });

}


// ============================================================
// HILFSFUNKTIONEN FÜR QUIZ
// ============================================================

function getRandomWrongAnswers(
  words,
  correct,
  amount
) {

  const possible = [
    ...new Set(
      words
        .map(word => word[1])
        .filter(answer => answer !== correct)
    )
  ];

  shuffleArray(possible);

  return possible.slice(0, amount);

}


function shuffleArray(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      array[i],
      array[j]
    ] = [
      array[j],
      array[i]
    ];

  }

  return array;
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

  const {
    data,
    error
  } = await supabaseClient.rpc(
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


refreshAdmin?.addEventListener(
  "click",
  loadAdminUsers
);