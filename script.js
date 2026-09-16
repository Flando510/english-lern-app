/*
============================================================
ENGLISH MASTER - script.js
============================================================
- Login / Registrierung
- Vokabeln aus Supabase
- Vokabel-Units
- Quiz: alle Vokabeln / Unit / Grammatik
- Üben: Rechtschreibung + Grammatik
- Admin-Vokabeln hinzufügen
============================================================
*/


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
// APP-STATUS
// ============================================================

let currentClass = 1;
let currentMode = "vocab";

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;

let currentUnit = null;

let quizSource = null;
let quizQuestions = [];
let quizQuestionIndex = 0;


// ============================================================
// GRAMMATIK
// ============================================================

const grammarLessons = {

  1: {
    title: "To be",
    text:
      "Das Verb „to be“ bedeutet „sein“. Die Formen sind: I am, you are, he/she/it is, we are, you are, they are.",
    example:
      "I am happy. / You are my friend. / She is at school.",

    questions: [
      {
        question: "I ___ happy.",
        options: ["am", "is", "are"],
        answer: 0
      },
      {
        question: "She ___ my friend.",
        options: ["am", "is", "are"],
        answer: 1
      },
      {
        question: "They ___ at school.",
        options: ["am", "is", "are"],
        answer: 2
      }
    ]
  },

  2: {
    title: "Simple Present",
    text:
      "Im Simple Present wird bei he, she und it meistens ein -s an das Verb angehängt.",
    example:
      "I play football. / He plays football.",

    questions: [
      {
        question: "He ___ football.",
        options: ["play", "plays", "playing"],
        answer: 1
      },
      {
        question: "She ___ English.",
        options: ["like", "likes", "liking"],
        answer: 1
      },
      {
        question: "They ___ to school.",
        options: ["go", "goes", "going"],
        answer: 0
      }
    ]
  },

  3: {
    title: "Past Simple",
    text:
      "Mit dem Past Simple spricht man über abgeschlossene Ereignisse in der Vergangenheit.",
    example:
      "I played football yesterday. / We visited London.",

    questions: [
      {
        question: "Yesterday I ___ football.",
        options: ["play", "played", "playing"],
        answer: 1
      },
      {
        question: "We ___ London last year.",
        options: ["visit", "visited", "visiting"],
        answer: 1
      },
      {
        question: "She ___ home early.",
        options: ["walked", "walk", "walking"],
        answer: 0
      }
    ]
  },

  4: {
    title: "First Conditional",
    text:
      "Beim First Conditional wird If + Simple Present mit will + Verb verbunden.",
    example:
      "If I study, I will learn more.",

    questions: [
      {
        question: "If I study, I ___ learn more.",
        options: ["will", "am", "did"],
        answer: 0
      },
      {
        question: "If it rains, we ___ stay home.",
        options: ["will", "are", "did"],
        answer: 0
      },
      {
        question: "If you practise, you ___ improve.",
        options: ["will", "was", "were"],
        answer: 0
      }
    ]
  }

};


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

const pointsBadge =
  document.getElementById("pointsBadge");

const heroPoints =
  document.getElementById("heroPoints");

const heroUsername =
  document.getElementById("heroUsername");

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


function setAuthMessage(
  text,
  error = true
) {

  if (!authMessage) return;

  authMessage.textContent = text;

  authMessage.style.color =
    error
      ? "#c0392b"
      : "#18794e";
}


function setAdminMessage(
  text,
  error = true
) {

  if (!adminMessage) return;

  adminMessage.textContent = text;

  adminMessage.style.color =
    error
      ? "#c0392b"
      : "#18794e";
}


function authEmail(username) {

  const safe =
    username
      .toLowerCase()
      .replace(/[^a-z0-9._-]/g, "_");

  return `${safe}@english-master.local`;
}


function validUsername(username) {

  return /^[A-Za-z0-9_-]{3,20}$/
    .test(username);
}


// ============================================================
// LOGIN TABS
// ============================================================

function showLogin() {

  isRegisterMode = false;

  loginTab?.classList.add("active");
  registerTab?.classList.remove("active");

  if (authButton) {
    authButton.textContent =
      "Anmelden";
  }

  if (passwordInput) {
    passwordInput.autocomplete =
      "current-password";
  }

  setAuthMessage("");
}


function showRegister() {

  isRegisterMode = true;

  registerTab?.classList.add("active");
  loginTab?.classList.remove("active");

  if (authButton) {
    authButton.textContent =
      "Konto erstellen";
  }

  if (passwordInput) {
    passwordInput.autocomplete =
      "new-password";
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
// PROFIL
// ============================================================

async function loadProfile(user) {

  const {
    data,
    error
  } = await supabaseClient
    .from("profiles")
    .select(
      "id, username, points, is_admin, created_at"
    )
    .eq("id", user.id)
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


function updateUserUI() {

  if (!currentProfile) return;

  const username =
    currentProfile.username;

  const points =
    Number(
      currentProfile.points || 0
    );


  if (welcomeText) {
    welcomeText.textContent =
      `👤 ${username}`;
  }


  if (heroUsername) {
    heroUsername.textContent =
      username;
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

    if (currentProfile.is_admin) {
      adminPanel.classList.remove(
        "hidden"
      );

      loadAdminUsers();

    } else {

      adminPanel.classList.add(
        "hidden"
      );
    }
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


  authScreen?.classList.add(
    "hidden"
  );

  mainScreen?.classList.remove(
    "hidden"
  );


  updateUserUI();

  renderLearning();
}


function showAuth() {

  currentUser = null;
  currentProfile = null;

  authScreen?.classList.remove(
    "hidden"
  );

  mainScreen?.classList.add(
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

      const email =
        authEmail(username);


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


        if (!data.user) {
          throw new Error(
            "Benutzer konnte nicht erstellt werden."
          );
        }


        const {
          error: profileError
        } =
          await supabaseClient
            .from("profiles")
            .insert({
              id: data.user.id,
              username,
              points: 0,
              is_admin: false
            });


        if (profileError) {

          console.error(
            profileError
          );

          await supabaseClient.auth.signOut();

          throw new Error(
            "Konto erstellt, aber das Profil konnte nicht angelegt werden."
          );
        }


        await showApp(
          data.user
        );


      } else {

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


    } catch (error) {

      console.error(error);

      setAuthMessage(
        error.message ||
        "Anmeldung fehlgeschlagen."
      );


    } finally {

      authButton.disabled = false;

      authButton.textContent =
        isRegisterMode
          ? "Konto erstellen"
          : "Anmelden";
    }

  }
);


// ============================================================
// LOGOUT
// ============================================================

logoutButton?.addEventListener(
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
  .then(
    async ({ data }) => {

      if (
        data.session &&
        data.session.user
      ) {

        await showApp(
          data.session.user
        );
      }

    }
  );


supabaseClient.auth
  .onAuthStateChange(
    async (event, session) => {

      if (
        event === "SIGNED_OUT"
      ) {

        showAuth();

      }

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
      .select(
        "points, is_admin"
      )
      .single();


  if (error) {

    console.error(
      "Punkte konnten nicht gespeichert werden:",
      error
    );

    return;
  }


  /*
    Wichtig:
    is_admin wird NICHT verändert.
    Dadurch bleibt der Admin-Status erhalten.
  */

  currentProfile.points =
    data.points;

  currentProfile.is_admin =
    data.is_admin;


  updateUserUI();
}


// ============================================================
// KLASSE
// ============================================================

document
  .querySelectorAll(".class-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentClass =
          Number(
            button.dataset.class
          );

        currentUnit = null;

        quizSource = null;
        quizQuestions = [];
        quizQuestionIndex = 0;


        document
          .querySelectorAll(".class-btn")
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        renderLearning();
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
      () => {

        currentMode =
          button.dataset.mode;

        currentUnit = null;

        quizSource = null;
        quizQuestions = [];
        quizQuestionIndex = 0;


        document
          .querySelectorAll(".mode-btn")
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        renderLearning();
      }
    );

  });


// ============================================================
// RENDER
// ============================================================

function renderLearning() {

  if (!learningArea) {
    return;
  }


  if (
    currentMode === "vocab"
  ) {

    renderVocab();

    return;
  }


  if (
    currentMode === "grammar"
  ) {

    renderGrammar();

    return;
  }


  if (
    currentMode === "quiz"
  ) {

    renderQuiz();

    return;
  }


  if (
    currentMode === "exercise"
  ) {

    renderExercise();

    return;
  }
}


// ============================================================
// VOKABELN AUS SUPABASE
// ============================================================

async function getVocabulary(
  unitNumber = null
) {

  let query =
    supabaseClient
      .from("vocab")
      .select(
        "english, german, example, unit_number, class_number"
      )
      .eq(
        "class_number",
        currentClass
      )
      .order(
        "unit_number",
        {
          ascending: true
        }
      );


  if (
    unitNumber !== null
  ) {

    query =
      query.eq(
        "unit_number",
        unitNumber
      );
  }


  const {
    data,
    error
  } =
    await query;


  if (error) {

    console.error(
      "Vokabeln konnten nicht geladen werden:",
      error
    );

    return [];
  }


  return data || [];
}


// ============================================================
// VOKABELN + UNIT-SYSTEM
// ============================================================

async function renderVocab() {

  learningArea.innerHTML = `

    <div class="vocab-header">

      <div>

        <h2>
          📚 Vokabeln – ${currentClass}. Klasse
        </h2>

        <p>
          Wähle eine Unit aus.
        </p>

      </div>

    </div>


    <div
      id="unitList"
      class="unit-list"
    >

      <p>
        Units werden geladen...
      </p>

    </div>

  `;


  const allWords =
    await getVocabulary();


  const units = {};


  allWords.forEach(word => {

    const unit =
      Number(
        word.unit_number
      );


    if (!units[unit]) {
      units[unit] = [];
    }


    units[unit].push(
      word
    );

  });


  const unitNumbers =
    Object.keys(units)
      .map(Number)
      .sort(
        (a, b) => a - b
      );


  const unitList =
    document.getElementById(
      "unitList"
    );


  if (
    !unitNumbers.length
  ) {

    unitList.innerHTML = `

      <div class="empty-unit">

        <p>
          Für diese Klasse wurden noch keine Vokabeln eingetragen.
        </p>

      </div>

    `;

    return;
  }


  unitList.innerHTML =
    unitNumbers
      .map(
        unitNumber => `

          <details
            class="unit"
            data-unit="${unitNumber}"
            ${currentUnit === unitNumber ? "open" : ""}
          >

            <summary>

              <strong>
                Unit ${unitNumber}
              </strong>

              <span>
                ${units[unitNumber].length} Vokabeln
              </span>

            </summary>


            <div class="unit-content">

              <div class="content-grid">

                ${units[unitNumber]
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
                          word.example
                            ? `
                              <small>
                                ${escapeHtml(
                                  word.example
                                )}
                              </small>
                            `
                            : ""
                        }

                      </div>

                    `
                  )
                  .join("")}

              </div>

            </div>

          </details>

        `
      )
      .join("");


  document
    .querySelectorAll(
      ".unit"
    )
    .forEach(unit => {

      unit.addEventListener(
        "toggle",
        () => {

          if (
            unit.open
          ) {

            currentUnit =
              Number(
                unit.dataset.unit
              );


            document
              .querySelectorAll(
                ".unit"
              )
              .forEach(other => {

                if (
                  other !== unit
                ) {

                  other.open =
                    false;
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

  const grammar =
    grammarLessons[
      currentClass
    ];


  if (!grammar) {

    learningArea.innerHTML = `
      <div class="content-area">
        <h2>📖 Grammatik</h2>
        <p>Für diese Klasse gibt es noch keine Grammatik.</p>
      </div>
    `;

    return;
  }


  learningArea.innerHTML = `

    <div class="content-area">

      <h2>
        📖 ${escapeHtml(
          grammar.title
        )}
      </h2>

      <p>
        ${escapeHtml(
          grammar.text
        )}
      </p>

      <div class="example">

        <strong>
          Beispiel:
        </strong>

        <br><br>

        ${escapeHtml(
          grammar.example
        )}

      </div>

    </div>

  `;
}


// ============================================================
// QUIZ AUSWAHL
// ============================================================

function renderQuiz() {

  if (!quizSource) {

    learningArea.innerHTML = `

      <div class="content-area">

        <h2>
          🧠 Quiz – ${currentClass}. Klasse
        </h2>

        <p>
          Wähle aus, was du abfragen möchtest.
        </p>


        <div class="quiz-source-list">

          <button
            class="quiz-source-btn"
            data-source="all"
            type="button"
          >
            📚 Alle Vokabeln
          </button>


          <button
            class="quiz-source-btn"
            data-source="unit"
            data-unit="1"
            type="button"
          >
            📦 Unit 1
          </button>


          <button
            class="quiz-source-btn"
            data-source="unit"
            data-unit="2"
            type="button"
          >
            📦 Unit 2
          </button>


          <button
            class="quiz-source-btn"
            data-source="unit"
            data-unit="3"
            type="button"
          >
            📦 Unit 3
          </button>


          <button
            class="quiz-source-btn"
            data-source="unit"
            data-unit="4"
            type="button"
          >
            📦 Unit 4
          </button>


          <button
            class="quiz-source-btn"
            data-source="grammar"
            type="button"
          >
            📖 Grammatik
          </button>

        </div>

      </div>

    `;


    document
      .querySelectorAll(
        ".quiz-source-btn"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          async () => {

            const source =
              button.dataset.source;


            if (
              source === "unit"
            ) {

              quizSource = {
                type: "unit",
                unit: Number(
                  button.dataset.unit
                )
              };

            } else {

              quizSource = {
                type: source
              };

            }


            quizQuestionIndex = 0;

            await loadQuizQuestions();

          }
        );

      });


    return;
  }


  if (
    !quizQuestions.length
  ) {

    learningArea.innerHTML = `

      <div class="content-area">

        <h2>
          🧠 Quiz
        </h2>

        <p>
          Für diese Auswahl wurden keine Fragen gefunden.
        </p>

        <button
          id="quizBackButton"
          class="secondary-btn"
          type="button"
        >
          ← Auswahl ändern
        </button>

      </div>

    `;


    document
      .getElementById(
        "quizBackButton"
      )
      ?.addEventListener(
        "click",
        () => {

          quizSource = null;
          quizQuestions = [];

          renderQuiz();

        }
      );


    return;
  }


  if (
    quizQuestionIndex >=
    quizQuestions.length
  ) {

    quizQuestionIndex = 0;
  }


  const question =
    quizQuestions[
      quizQuestionIndex
    ];


  learningArea.innerHTML = `

    <div class="content-area">

      <button
        id="quizBackButton"
        class="secondary-btn"
        type="button"
      >
        ← Auswahl ändern
      </button>


      <h2>
        🧠 Quiz
      </h2>

      <p>
        Frage
        ${quizQuestionIndex + 1}
        von
        ${quizQuestions.length}
      </p>


      <h3>
        ${escapeHtml(
          question.question
        )}
      </h3>


      <div id="quizOptions">

        ${question.options
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
          .join("")}

      </div>


      <p
        id="quizResult"
        class="quiz-result"
      ></p>

    </div>

  `;


  document
    .getElementById(
      "quizBackButton"
    )
    ?.addEventListener(
      "click",
      () => {

        quizSource = null;
        quizQuestions = [];
        quizQuestionIndex = 0;

        renderQuiz();

      }
    );


  document
    .querySelectorAll(
      ".quiz-option"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const selected =
            Number(
              button.dataset.answer
            );


          const result =
            document.getElementById(
              "quizResult"
            );


          document
            .querySelectorAll(
              ".quiz-option"
            )
            .forEach(btn => {
              btn.disabled = true;
            });


          if (
            selected ===
            question.answer
          ) {

            result.textContent =
              "✅ Richtig! +10 Punkte";

            result.style.color =
              "#18794e";

            await addPoints(10);

          } else {

            result.textContent =
              `❌ Richtig wäre: ${
                question.options[
                  question.answer
                ]
              }`;

            result.style.color =
              "#c0392b";
          }


          setTimeout(
            () => {

              quizQuestionIndex++;

              renderQuiz();

            },
            1200
          );

        }
      );

    });
}


// ============================================================
// QUIZ FRAGEN LADEN
// ============================================================

async function loadQuizQuestions() {

  quizQuestions = [];


  if (
    quizSource.type ===
    "grammar"
  ) {

    const grammar =
      grammarLessons[
        currentClass
      ];


    if (grammar) {

      quizQuestions =
        grammar.questions.map(
          question => ({
            question:
              question.question,

            options:
              [...question.options],

            answer:
              question.answer
          })
        );
    }


    renderQuiz();

    return;
  }


  let words = [];


  if (
    quizSource.type ===
    "all"
  ) {

    words =
      await getVocabulary();

  } else if (
    quizSource.type ===
    "unit"
  ) {

    words =
      await getVocabulary(
        quizSource.unit
      );
  }


  if (
    words.length < 3
  ) {

    renderQuiz();

    return;
  }


  const shuffled =
    [...words].sort(
      () => Math.random() - 0.5
    );


  quizQuestions =
    shuffled.map(
      word => {

        const wrongAnswers =
          words
            .filter(
              other =>
                other.german !==
                word.german
            )
            .sort(
              () =>
                Math.random() - 0.5
            )
            .slice(0, 2)
            .map(
              other =>
                other.german
            );


        const options = [
          word.german,
          ...wrongAnswers
        ];


        const shuffledOptions =
          options
            .map(
              option => ({
                option,
                sort: Math.random()
              })
            )
            .sort(
              (a, b) =>
                a.sort - b.sort
            )
            .map(
              item =>
                item.option
            );


        return {

          question:
            `Was bedeutet „${word.english}“?`,

          options:
            shuffledOptions,

          answer:
            shuffledOptions.indexOf(
              word.german
            )

        };

      }
    );


  renderQuiz();
}


// ============================================================
// ÜBEN
// ============================================================

function renderExercise() {

  learningArea.innerHTML = `

    <div class="content-area">

      <h2>
        ✏️ Üben – ${currentClass}. Klasse
      </h2>

      <p>
        Wähle eine Übungsart.
      </p>


      <div class="exercise-type-selection">

        <button
          class="quiz-source-btn"
          id="spellingExerciseButton"
          type="button"
        >
          ✍️ Rechtschreibung
        </button>


        <button
          class="quiz-source-btn"
          id="grammarExerciseButton"
          type="button"
        >
          📖 Grammatik
        </button>

      </div>


      <div
        id="exerciseContent"
        style="margin-top:25px;"
      ></div>

    </div>

  `;


  document
    .getElementById(
      "spellingExerciseButton"
    )
    ?.addEventListener(
      "click",
      startSpellingExercise
    );


  document
    .getElementById(
      "grammarExerciseButton"
    )
    ?.addEventListener(
      "click",
      startGrammarExercise
    );
}


// ============================================================
// RECHTSCHREIBUNG
// ============================================================

async function startSpellingExercise() {

  const container =
    document.getElementById(
      "exerciseContent"
    );


  container.innerHTML = `

    <p>
      Vokabeln werden geladen...
    </p>

  `;


  const words =
    await getVocabulary();


  if (
    words.length === 0
  ) {

    container.innerHTML = `

      <p>
        Für diese Klasse wurden noch keine Vokabeln eingetragen.
      </p>

    `;

    return;
  }


  const shuffled =
    [...words].sort(
      () => Math.random() - 0.5
    );


  let index = 0;
  let correct = 0;


  function showWord() {

    if (
      index >= shuffled.length
    ) {

      container.innerHTML = `

        <h3>
          🎉 Rechtschreibübung beendet!
        </h3>

        <p>
          Du hast
          <strong>
            ${correct}
          </strong>
          von
          <strong>
            ${shuffled.length}
          </strong>
          richtig.
        </p>

        <button
          id="restartSpelling"
          class="primary-btn"
          type="button"
        >
          🔄 Nochmal
        </button>

      `;


      document
        .getElementById(
          "restartSpelling"
        )
        ?.addEventListener(
          "click",
          startSpellingExercise
        );


      return;
    }


    const word =
      shuffled[index];


    container.innerHTML = `

      <h3>
        Übersetze dieses Wort ins Englische:
      </h3>

      <div class="example">

        <strong>
          ${escapeHtml(
            word.german
          )}
        </strong>

      </div>


      <input
        id="spellingAnswer"
        type="text"
        autocomplete="off"
        placeholder="Englisches Wort..."
      >


      <button
        id="checkSpelling"
        class="primary-btn"
        type="button"
        style="margin-top:12px;"
      >
        Antwort prüfen
      </button>


      <p
        id="spellingResult"
        class="quiz-result"
      ></p>

    `;


    const input =
      document.getElementById(
        "spellingAnswer"
      );


    input.focus();


    document
      .getElementById(
        "checkSpelling"
      )
      ?.addEventListener(
        "click",
        async () => {

          const answer =
            input.value
              .trim()
              .toLowerCase();


          const correctAnswer =
            word.english
              .trim()
              .toLowerCase();


          const result =
            document.getElementById(
              "spellingResult"
            );


          input.disabled = true;


          document
            .getElementById(
              "checkSpelling"
            )
            .disabled = true;


          if (
            answer ===
            correctAnswer
          ) {

            correct++;

            result.textContent =
              "✅ Richtig! +5 Punkte";

            result.style.color =
              "#18794e";

            await addPoints(5);

          } else {

            result.textContent =
              `❌ Richtig wäre: ${word.english}`;

            result.style.color =
              "#c0392b";
          }


          setTimeout(
            () => {

              index++;

              showWord();

            },
            1400
          );

        }
      );


    input.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          document
            .getElementById(
              "checkSpelling"
            )
            ?.click();
        }

      }
    );
  }


  showWord();
}


// ============================================================
// GRAMMATIK-ÜBUNG
// ============================================================

async function startGrammarExercise() {

  const container =
    document.getElementById(
      "exerciseContent"
    );


  const grammar =
    grammarLessons[
      currentClass
    ];


  if (
    !grammar ||
    !grammar.questions ||
    !grammar.questions.length
  ) {

    container.innerHTML = `

      <p>
        Für diese Klasse gibt es noch keine Grammatikübungen.
      </p>

    `;

    return;
  }


  let index = 0;
  let correct = 0;


  function showQuestion() {

    if (
      index >=
      grammar.questions.length
    ) {

      container.innerHTML = `

        <h3>
          🎉 Grammatikübung beendet!
        </h3>

        <p>
          Du hast
          <strong>
            ${correct}
          </strong>
          von
          <strong>
            ${grammar.questions.length}
          </strong>
          richtig.
        </p>

        <button
          id="restartGrammar"
          class="primary-btn"
          type="button"
        >
          🔄 Nochmal
        </button>

      `;


      document
        .getElementById(
          "restartGrammar"
        )
        ?.addEventListener(
          "click",
          startGrammarExercise
        );


      return;
    }


    const question =
      grammar.questions[index];


    container.innerHTML = `

      <p>
        Frage
        ${index + 1}
        von
        ${grammar.questions.length}
      </p>


      <h3>
        ${escapeHtml(
          question.question
        )}
      </h3>


      <div id="grammarExerciseOptions">

        ${question.options
          .map(
            (option, optionIndex) => `

              <button
                class="quiz-option"
                data-answer="${optionIndex}"
                type="button"
              >
                ${escapeHtml(
                  option
                )}
              </button>

            `
          )
          .join("")}

      </div>


      <p
        id="grammarExerciseResult"
        class="quiz-result"
      ></p>

    `;


    document
      .querySelectorAll(
        "#grammarExerciseOptions .quiz-option"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          async () => {

            const selected =
              Number(
                button.dataset.answer
              );


            const result =
              document.getElementById(
                "grammarExerciseResult"
              );


            document
              .querySelectorAll(
                "#grammarExerciseOptions .quiz-option"
              )
              .forEach(btn => {
                btn.disabled = true;
              });


            if (
              selected ===
              question.answer
            ) {

              correct++;

              result.textContent =
                "✅ Richtig! +5 Punkte";

              result.style.color =
                "#18794e";

              await addPoints(5);

            } else {

              result.textContent =
                `❌ Richtig wäre: ${
                  question.options[
                    question.answer
                  ]
                }`;

              result.style.color =
                "#c0392b";
            }


            setTimeout(
              () => {

                index++;

                showQuestion();

              },
              1200
            );

          }
        );

      });
  }


  showQuestion();
}


// ============================================================
// ADMIN - BENUTZER
// ============================================================

async function loadAdminUsers() {

  if (
    !currentProfile ||
    !currentProfile.is_admin
  ) {
    return;
  }


  if (!adminUsers) {
    return;
  }


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
      "Admin-Liste:",
      error
    );

    setAdminMessage(
      "Benutzer konnten nicht geladen werden."
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
                user.username
              )}
            </td>

            <td>
              ⭐ ${Number(
                user.points || 0
              )}
            </td>

            <td>
              ${escapeHtml(
                user.class || "-"
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
    false
  );
}


refreshAdmin?.addEventListener(
  "click",
  loadAdminUsers
);


// ============================================================
// ADMIN - VOKABEL HINZUFÜGEN
// ============================================================

const vocabForm =
  document.getElementById(
    "vocabForm"
  );

const vocabMessage =
  document.getElementById(
    "vocabMessage"
  );


vocabForm?.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    /*
      Ganz wichtig:
      Hier wird NICHT ausgeloggt,
      NICHT showApp() aufgerufen
      und NICHT die Session verändert.
    */


    if (
      !currentUser ||
      !currentProfile?.is_admin
    ) {

      if (vocabMessage) {
        vocabMessage.textContent =
          "Du hast keine Admin-Rechte.";
      }

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
      !german ||
      !unit ||
      !classNumber
    ) {

      if (vocabMessage) {

        vocabMessage.textContent =
          "Bitte Englisch, Deutsch, Unit und Klasse ausfüllen.";

        vocabMessage.style.color =
          "#c0392b";
      }

      return;
    }


    const addButton =
      document.getElementById(
        "addVocabButton"
      );


    if (addButton) {
      addButton.disabled = true;
      addButton.textContent =
        "Wird gespeichert...";
    }


    try {

      const {
        error
      } =
        await supabaseClient
          .from("vocab")
          .insert({
            class_number:
              classNumber,

            unit_number:
              unit,

            english,
            german,

            example:
              example || null
          });


      if (error) {
        throw error;
      }


      /*
        Admin-Profil bleibt vollständig erhalten.
        Wir laden NICHT die komplette App neu.
      */

      if (vocabMessage) {

        vocabMessage.textContent =
          "✅ Vokabel wurde gespeichert.";

        vocabMessage.style.color =
          "#18794e";
      }


      vocabForm.reset();


      /*
        Nur wenn gerade Vokabeln angezeigt werden,
        wird der Vokabelbereich aktualisiert.
        Der Login bleibt unangetastet.
      */

      if (
        currentMode === "vocab" &&
        currentClass === classNumber
      ) {

        await renderVocab();
      }


      /*
        Admin-Bereich bleibt sichtbar.
      */

      if (
        currentProfile?.is_admin &&
        adminPanel
      ) {

        adminPanel.classList.remove(
          "hidden"
        );
      }


    } catch (error) {

      console.error(
        "Vokabel konnte nicht gespeichert werden:",
        error
      );


      if (vocabMessage) {

        vocabMessage.textContent =
          error.message ||
          "Vokabel konnte nicht gespeichert werden.";

        vocabMessage.style.color =
          "#c0392b";
      }


    } finally {

      if (addButton) {

        addButton.disabled = false;

        addButton.textContent =
          "➕ Vokabel hinzufügen";
      }

    }

  }
);


// ============================================================
// START
// ============================================================

if (
  document
    .querySelector(
      '.class-btn[data-class="1"]'
    )
) {

  document
    .querySelector(
      '.class-btn[data-class="1"]'
    )
    .classList.add("active");
}


if (
  document
    .querySelector(
      '.mode-btn[data-mode="vocab"]'
    )
) {

  document
    .querySelector(
      '.mode-btn[data-mode="vocab"]'
    )
    .classList.add("active");
}