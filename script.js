```js
/*
  ENGLISH MASTER – Supabase-Version

  Enthalten:
  - Login / Registrierung
  - Punkte
  - Vokabeln
  - Unit-System
  - Grammatik
  - Quiz mit Auswahl:
      • Alle Vokabeln
      • Bestimmte Unit
      • Grammatik
  - Übungen
  - Admin-Bereich
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
      "I am a student. / You are my friend. / She is happy."
  },


  2: {
    units: {

      /*
        Deine Unit 2 Vokabeln
      */

      2: [
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
        ["to be scared of", "Angst haben vor"],
        ["very", "sehr"],
        ["strong", "stark, kräftig"],
        ["captain", "Kapitän"],
        ["have got / has got", "haben"],
        ["pretty", "hübsch"],
        ["purple", "violett, lila"],
        ["a lot of / lots of", "viel / viele"],
        ["bed", "Bett"],
        ["dream", "Traum"],
        ["tired", "müde"],
        ["to guess", "raten"],
        ["brother", "Bruder"],
        ["blonde", "blond"],
        ["real", "echt, wirklich"],
        ["short", "klein"],
        ["tall", "groß"],
        ["wrong", "falsch, nicht in Ordnung"],
        ["true", "wahr"]
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

    grammar:
      "Past Simple: regelmäßige Verben bekommen oft -ed. Beispiel: play → played, visit → visited.",

    example:
      "I visited London last year. / We played yesterday."
  },


  4: {
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
        ["still", "immer noch"],
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
        ["Don't be late.", "Komm(t) nicht zu spät."],
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
      "Past Simple: regelmäßige Verben bekommen oft -ed.",

    example:
      "I played football yesterday."
  }
};


// ============================================================
// AKTUELLER STATUS
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
// LOGIN-FORMULAR
// ============================================================

authForm?.addEventListener("submit", async event => {

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
    // LOGIN
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
// KLASSENAUSWAHL
// ============================================================

document.querySelectorAll(".class-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      currentClass =
        Number(button.dataset.class);

      document.querySelectorAll(".class-btn")
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

document.querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      currentMode =
        button.dataset.mode;

      currentQuestion = 0;

      document.querySelectorAll(".mode-btn")
        .forEach(b =>
          b.classList.remove("active")
        );

      button.classList.add("active");

      renderLearning();
    });

  });


// ============================================================
// LERNEN
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
// VOKABELN – UNIT-SYSTEM
// ============================================================

function getUnitsForClass(classNumber) {

  const lesson = lessons[classNumber];

  if (!lesson) return {};

  return lesson.units || {};
}


function getAllVocabulary(classNumber) {

  const units =
    getUnitsForClass(classNumber);

  const words = [];

  Object.values(units).forEach(unitWords => {

    if (Array.isArray(unitWords)) {

      unitWords.forEach(word => {
        words.push(word);
      });

    }

  });

  return words;
}


function renderVocab() {

  const units =
    getUnitsForClass(currentClass);

  const unitNumbers =
    Object.keys(units)
      .sort((a, b) => Number(a) - Number(b));

  learningArea.innerHTML = `

    <div class="vocab-header">

      <div>
        <h2>📚 Vokabeln – ${currentClass}. Klasse</h2>

        <p>
          Wähle eine Unit aus.
        </p>
      </div>

    </div>

    <div class="unit-list">

      ${
        unitNumbers.length === 0

          ? `
            <div class="empty-unit">
              <p>
                Für diese Klasse wurden noch keine
                Vokabeln eingetragen.
              </p>
            </div>
          `

          : unitNumbers.map(unitNumber => {

              const words =
                units[unitNumber] || [];

              return `

                <details class="unit">

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

            }).join("")
      }

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

      <strong>
        Beispiele:
      </strong>

      <br><br>

      ${escapeHtml(lesson.example)}

    </div>

  `;
}


// ============================================================
// QUIZ – AUSWAHL
// ============================================================

function renderQuiz() {

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

      <button
        class="quiz-type-btn active"
        data-quiz-type="all"
        type="button"
      >
        📚 Alle Vokabeln
      </button>

      <button
        class="quiz-type-btn"
        data-quiz-type="unit"
        type="button"
      >
        📖 Bestimmte Unit
      </button>

      <button
        class="quiz-type-btn"
        data-quiz-type="grammar"
        type="button"
      >
        📘 Grammatik
      </button>

    </div>

    <div
      id="quizUnitSelection"
      class="quiz-unit-selection hidden"
    >

      <label for="quizUnitSelect">
        Unit auswählen
      </label>

      <select id="quizUnitSelect">

        ${getUnitOptions()}

      </select>

    </div>

    <div id="quizContent"></div>

  `;

  setupQuizSelection();

  renderSelectedQuiz("all");
}


// ============================================================
// UNIT-AUSWAHL IM QUIZ
// ============================================================

function getUnitOptions() {

  const units =
    getUnitsForClass(currentClass);

  const unitNumbers =
    Object.keys(units)
      .sort((a, b) => Number(a) - Number(b));

  if (unitNumbers.length === 0) {

    return `
      <option value="">
        Keine Units vorhanden
      </option>
    `;
  }

  return unitNumbers.map(unit => `

    <option value="${unit}">
      Unit ${unit}
    </option>

  `).join("");
}


// ============================================================
// QUIZ AUSWAHL EVENTS
// ============================================================

function setupQuizSelection() {

  document.querySelectorAll(".quiz-type-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        document.querySelectorAll(".quiz-type-btn")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        button.classList.add("active");

        const type =
          button.dataset.quizType;

        const unitSelection =
          document.getElementById(
            "quizUnitSelection"
          );

        if (type === "unit") {

          unitSelection?.classList.remove("hidden");

          renderSelectedQuiz("unit");

        } else {

          unitSelection?.classList.add("hidden");

          renderSelectedQuiz(type);
        }

      });

    });


  const unitSelect =
    document.getElementById("quizUnitSelect");

  unitSelect?.addEventListener(
    "change",
    () => {

      renderSelectedQuiz("unit");

    }
  );

}


// ============================================================
// AUSGEWÄHLTES QUIZ
// ============================================================

function renderSelectedQuiz(type) {

  const quizContent =
    document.getElementById("quizContent");

  if (!quizContent) return;


  // ----------------------------------------------------------
  // GRAMMATIK
  // ----------------------------------------------------------

  if (type === "grammar") {

    const lesson =
      lessons[currentClass];

    quizContent.innerHTML = `

      <div class="example">

        <strong>
          📘 Grammatik
        </strong>

        <br><br>

        ${escapeHtml(lesson.grammar)}

      </div>

      <div class="example">

        <strong>
          Beispiel
        </strong>

        <br><br>

        ${escapeHtml(lesson.example)}

      </div>

      <button
        id="grammarPointButton"
        class="primary-btn"
        type="button"
      >
        ✅ Grammatik gelernt
      </button>

      <p
        id="grammarResult"
        class="quiz-result"
      ></p>

    `;


    document
      .getElementById("grammarPointButton")
      ?.addEventListener(
        "click",
        async () => {

          const result =
            document.getElementById(
              "grammarResult"
            );

          result.textContent =
            "✅ Grammatik abgeschlossen! +5 Punkte";

          result.style.color =
            "#18794e";

          document
            .getElementById(
              "grammarPointButton"
            )
            .disabled = true;

          await addPoints(5);

        }
      );

    return;
  }


  // ----------------------------------------------------------
  // VOKABELN
  // ----------------------------------------------------------

  let words = [];


  if (type === "all") {

    words =
      getAllVocabulary(currentClass);

  }


  if (type === "unit") {

    const select =
      document.getElementById(
        "quizUnitSelect"
      );

    const unitNumber =
      Number(select?.value);

    const units =
      getUnitsForClass(currentClass);

    words =
      units[unitNumber] || [];

  }


  if (words.length === 0) {

    quizContent.innerHTML = `

      <div class="empty-unit">

        <p>
          Für diese Auswahl gibt es noch
          keine Vokabeln.
        </p>

      </div>

    `;

    return;
  }


  const questions =
    createVocabularyQuestions(words);

  currentQuestion = 0;

  showQuizQuestion(questions);
}


// ============================================================
// QUIZFRAGEN ERSTELLEN
// ============================================================

function createVocabularyQuestions(words) {

  const shuffledWords =
    [...words]
      .sort(() => Math.random() - 0.5);


  return shuffledWords.map(
    ([english, german]) => {

      const possibleAnswers =
        words
          .filter(word =>
            word[1] !== german
          )
          .map(word => word[1]);


      const wrongAnswers =
        possibleAnswers
          .sort(() => Math.random() - 0.5)
          .slice(0, 2);


      const options =
        [german, ...wrongAnswers]
          .sort(() => Math.random() - 0.5);


      return {

        q:
          `Was bedeutet „${english}“?`,

        options,

        answer:
          options.indexOf(german)

      };

    }
  );
}


// ============================================================
// QUIZFRAGE ANZEIGEN
// ============================================================

function showQuizQuestion(questions) {

  const quizContent =
    document.getElementById(
      "quizContent"
    );

  if (!quizContent) return;

  const q =
    questions[currentQuestion];


  quizContent.innerHTML = `

    <div class="quiz-question-box">

      <p>
        Frage
        ${currentQuestion + 1}
        von
        ${questions.length}
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

    </div>

  `;


  document.querySelectorAll(".quiz-option")
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
            .forEach(b =>
              b.disabled = true
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


          setTimeout(() => {

            currentQuestion++;


            if (
              currentQuestion >=
              questions.length
            ) {

              quizContent.innerHTML = `

                <div class="example">

                  <h3>
                    🎉 Quiz geschafft!
                  </h3>

                  <p>
                    Du hast alle Fragen dieser
                    Auswahl beantwortet.
                  </p>

                  <button
                    id="restartQuizButton"
                    class="primary-btn"
                    type="button"
                  >
                    🔄 Nochmal spielen
                  </button>

                </div>

              `;


              document
                .getElementById(
                  "restartQuizButton"
                )
                ?.addEventListener(
                  "click",
                  () => {

                    const activeButton =
                      document.querySelector(
                        ".quiz-type-btn.active"
                      );

                    const type =
                      activeButton
                        ?.dataset.quizType ||
                      "all";

                    renderSelectedQuiz(type);

                  }
                );


              return;
            }


            showQuizQuestion(questions);

          }, 1000);

        }
      );

    });
}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const allWords =
    getAllVocabulary(currentClass);

  const word =
    allWords[0]?.[0] ||
    "school";


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

      <br><br>

      Verwende das Wort
      <strong>
        ${escapeHtml(word)}
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
    ?.addEventListener(
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
          .getElementById(
            "exerciseButton"
          )
          .disabled = true;

        await addPoints(5);

      }
    );
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
      "Admin-Liste konnte nicht geladen werden."
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
          ${user.class_number || "-"}
        </td>

        <td>
          ${user.is_admin ? "Ja" : "Nein"}
        </td>

        <td>
          ${
            new Date(
              user.created_at
            ).toLocaleDateString("de-AT")
          }
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


// ============================================================
// START
// ============================================================

showLogin();
```
