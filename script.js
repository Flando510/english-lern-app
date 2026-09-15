/*
============================================================
 ENGLISH MASTER
 JavaScript – Supabase Version
============================================================

 Funktionen:

 - Login
 - Registrierung
 - Benutzerprofile
 - Punkte
 - Klassen 1–4
 - Vokabeln
 - Admin-Vokabeln
 - Quiz
 - Übungen
 - Grammatik Klasse 1–4
 - Admin-Benutzerübersicht
 - Gemeinsame Vokabeldatenbank

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
// LERNINHALTE
// ============================================================

const lessons = {

  // ==========================================================
  // 1. KLASSE
  // ==========================================================

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
      ["apple", "Apfel"],
      ["family", "Familie"],
      ["mother", "Mutter"],
      ["father", "Vater"],
      ["brother", "Bruder"],
      ["sister", "Schwester"],
      ["teacher", "Lehrer/in"],
      ["student", "Schüler/in"],
      ["name", "Name"],
      ["day", "Tag"],
      ["week", "Woche"]
    ],

    grammar: [

      {
        title: "Subject pronouns",
        explanation:
          "Subject pronouns replace names or nouns. The main subject pronouns are I, you, he, she, it, we and they.",
        examples:
          "I am Anna. You are my friend. He is Tom. She is happy. It is cold. We are students. They are at school."
      },

      {
        title: "The verb to be",
        explanation:
          "The verb be is used to talk about identity, age, feelings, descriptions and locations.",
        examples:
          "I am a student. You are happy. He is twelve. She is at home. We are friends. They are in class."
      },

      {
        title: "Have got",
        explanation:
          "Have got is commonly used to talk about possession and relationships.",
        examples:
          "I have got a dog. She has got two brothers. We have got a new teacher."
      },

      {
        title: "Articles: a, an, the",
        explanation:
          "A and an are indefinite articles. The is the definite article.",
        examples:
          "a book, a teacher, an apple, an English lesson, the school"
      },

      {
        title: "Plural nouns",
        explanation:
          "Most English nouns form the plural with -s. Some nouns have irregular plural forms.",
        examples:
          "book → books, teacher → teachers, child → children, man → men"
      },

      {
        title: "Possessive adjectives",
        explanation:
          "Possessive adjectives show who something belongs to.",
        examples:
          "my, your, his, her, its, our, their. This is my book. That is her bag."
      },

      {
        title: "There is / There are",
        explanation:
          "There is is used with singular nouns. There are is used with plural nouns.",
        examples:
          "There is a book on the table. There are two windows in the classroom."
      },

      {
        title: "Can",
        explanation:
          "Can is used for ability and simple permission.",
        examples:
          "I can swim. She can speak English. Can I open the window?"
      },

      {
        title: "Imperatives",
        explanation:
          "The imperative is used for instructions, orders and simple directions.",
        examples:
          "Open the book. Listen carefully. Don't run. Sit down."
      },

      {
        title: "Basic questions",
        explanation:
          "English questions often use question words such as what, where, when, who, why and how.",
        examples:
          "What is your name? Where do you live? How are you?"
      }

    ],

    example:
      "I am a student. I have got a dog. My dog is very friendly.",

    questions: [
      {
        q: "Which sentence is correct?",
        options: [
          "I am twelve.",
          "I is twelve.",
          "I are twelve.",
          "I be twelve."
        ],
        answer: 0
      },
      {
        q: "What is the plural of 'book'?",
        options: [
          "books",
          "bookes",
          "bookies",
          "book"
        ],
        answer: 0
      },
      {
        q: "Which word completes the sentence? 'She ___ happy.'",
        options: [
          "is",
          "am",
          "are",
          "be"
        ],
        answer: 0
      }
    ]
  },


  // ==========================================================
  // 2. KLASSE
  // ==========================================================

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
      ["beautiful", "schön"],
      ["usually", "normalerweise"],
      ["sometimes", "manchmal"],
      ["always", "immer"],
      ["never", "nie"],
      ["weekend", "Wochenende"],
      ["holiday", "Ferien/Urlaub"],
      ["football", "Fußball"],
      ["music", "Musik"],
      ["interesting", "interessant"],
      ["important", "wichtig"]
    ],

    grammar: [

      {
        title: "Present Simple",
        explanation:
          "The Present Simple is used for routines, habits, facts and regular actions.",
        examples:
          "I play football every Saturday. She likes music. They go to school every day."
      },

      {
        title: "Third person singular",
        explanation:
          "In the Present Simple, he, she and it normally take -s or -es.",
        examples:
          "I play. He plays. I watch. She watches. He goes to school."
      },

      {
        title: "Present Simple: questions",
        explanation:
          "Questions normally use do or does.",
        examples:
          "Do you like football? Does she play tennis? Where do they live?"
      },

      {
        title: "Present Simple: negatives",
        explanation:
          "Use do not or does not to form negative sentences.",
        examples:
          "I don't like coffee. He doesn't play football. They don't live here."
      },

      {
        title: "Present Continuous",
        explanation:
          "The Present Continuous describes actions happening now or around the present time.",
        examples:
          "I am studying now. She is reading. They are playing football."
      },

      {
        title: "Present Simple vs Present Continuous",
        explanation:
          "The Present Simple is commonly used for routines. The Present Continuous is commonly used for actions happening now.",
        examples:
          "I play football every week. I am playing football now."
      },

      {
        title: "Object pronouns",
        explanation:
          "Object pronouns are me, you, him, her, it, us and them.",
        examples:
          "She knows me. I can see him. They invited us."
      },

      {
        title: "Adverbs of frequency",
        explanation:
          "Adverbs such as always, usually, often, sometimes and never describe how frequently something happens.",
        examples:
          "I always walk to school. She usually gets up at seven."
      },

      {
        title: "Prepositions of time",
        explanation:
          "Common time prepositions include at, on and in.",
        examples:
          "at five o'clock, on Monday, in July, in the morning"
      },

      {
        title: "Comparatives",
        explanation:
          "Comparatives are used to compare two people, things or situations.",
        examples:
          "small → smaller, fast → faster, interesting → more interesting"
      },

      {
        title: "Superlatives",
        explanation:
          "Superlatives express the highest or lowest degree in a group.",
        examples:
          "small → the smallest, fast → the fastest, interesting → the most interesting"
      },

      {
        title: "Countable and uncountable nouns",
        explanation:
          "Countable nouns can normally be counted. Uncountable nouns are treated differently.",
        examples:
          "one apple, two apples; some water, some milk"
      }

    ],

    example:
      "I usually go to school by bus, but today I am walking.",

    questions: [
      {
        q: "Which sentence is correct?",
        options: [
          "She plays tennis.",
          "She play tennis.",
          "She playing tennis.",
          "She does plays tennis."
        ],
        answer: 0
      },
      {
        q: "Which sentence describes something happening now?",
        options: [
          "I am doing my homework.",
          "I do my homework every day.",
          "I did my homework yesterday.",
          "I will do my homework tomorrow."
        ],
        answer: 0
      },
      {
        q: "What is the comparative form of 'small'?",
        options: [
          "smaller",
          "smallest",
          "more small",
          "small"
        ],
        answer: 0
      }
    ]
  },


  // ==========================================================
  // 3. KLASSE
  // ==========================================================

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
      ["healthy", "gesund"],
      ["experience", "Erfahrung"],
      ["decision", "Entscheidung"],
      ["problem", "Problem"],
      ["solution", "Lösung"],
      ["possible", "möglich"],
      ["different", "verschieden"],
      ["together", "zusammen"],
      ["because", "weil"],
      ["although", "obwohl"],
      ["however", "jedoch"]
    ],

    grammar: [

      {
        title: "Past Simple",
        explanation:
          "The Past Simple is used for completed actions in the past.",
        examples:
          "I visited London last year. She played tennis yesterday."
      },

      {
        title: "Regular past forms",
        explanation:
          "Regular verbs normally form the Past Simple with -ed.",
        examples:
          "play → played, visit → visited, watch → watched"
      },

      {
        title: "Irregular verbs",
        explanation:
          "Many common verbs have irregular Past Simple forms.",
        examples:
          "go → went, see → saw, have → had, eat → ate, make → made"
      },

      {
        title: "Past Simple questions",
        explanation:
          "Questions about completed past actions normally use did.",
        examples:
          "Did you visit London? Where did she go?"
      },

      {
        title: "Past Simple negatives",
        explanation:
          "Use did not or didn't followed by the base form.",
        examples:
          "I didn't go. She didn't see him. They didn't play."
      },

      {
        title: "Past Continuous",
        explanation:
          "The Past Continuous describes an action that was in progress at a particular time in the past.",
        examples:
          "I was studying at eight o'clock. They were playing football."
      },

      {
        title: "Past Simple vs Past Continuous",
        explanation:
          "The Past Continuous can describe an ongoing background action while the Past Simple describes another completed event.",
        examples:
          "I was walking home when it started to rain."
      },

      {
        title: "Present Perfect",
        explanation:
          "The Present Perfect connects past events with the present and is formed with have/has + past participle.",
        examples:
          "I have visited London. She has finished her homework."
      },

      {
        title: "Present Perfect with ever and never",
        explanation:
          "Ever and never are often used to talk about life experiences.",
        examples:
          "Have you ever been to London? I have never been to Scotland."
      },

      {
        title: "Present Perfect vs Past Simple",
        explanation:
          "The Past Simple commonly refers to a finished time in the past. The Present Perfect connects an event to the present.",
        examples:
          "I visited London in 2024. I have visited London several times."
      },

      {
        title: "Future with will",
        explanation:
          "Will can be used for predictions, spontaneous decisions and some future statements.",
        examples:
          "I think it will rain. I'll help you."
      },

      {
        title: "Going to",
        explanation:
          "Be going to is commonly used for intentions and predictions based on present evidence.",
        examples:
          "I am going to study tonight. Look at those clouds. It is going to rain."
      },

      {
        title: "Modal verbs",
        explanation:
          "Modal verbs express ability, possibility, advice, permission or obligation.",
        examples:
          "can, could, may, might, must, should"
      },

      {
        title: "Must and have to",
        explanation:
          "Both can express obligation, but their use and meaning can differ depending on context.",
        examples:
          "You must wear a helmet. I have to get up early."
      },

      {
        title: "Should",
        explanation:
          "Should is commonly used to give advice or recommendations.",
        examples:
          "You should study. You shouldn't stay up too late."
      },

      {
        title: "First Conditional",
        explanation:
          "The First Conditional describes a real or possible future condition.",
        examples:
          "If I study, I will pass the test."
      }

    ],

    example:
      "I was walking home when I saw my friend. We have known each other for years.",

    questions: [
      {
        q: "What is the Past Simple of 'go'?",
        options: [
          "went",
          "goed",
          "gone",
          "going"
        ],
        answer: 0
      },
      {
        q: "Which sentence is correct?",
        options: [
          "I was watching TV when she called.",
          "I watching TV when she called.",
          "I was watch TV when she called.",
          "I am watching TV when she called."
        ],
        answer: 0
      },
      {
        q: "Which sentence is a First Conditional?",
        options: [
          "If I study, I will pass.",
          "If I studied, I would pass.",
          "I studied because I had time.",
          "I am studying at the moment."
        ],
        answer: 0
      }
    ]
  },


  // ==========================================================
  // 4. KLASSE
  // ==========================================================

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
      ["achievement", "Erfolg/Leistung"],
      ["education", "Bildung"],
      ["career", "Berufslaufbahn"],
      ["environment", "Umwelt"],
      ["society", "Gesellschaft"],
      ["advantage", "Vorteil"],
      ["disadvantage", "Nachteil"],
      ["opinion", "Meinung"],
      ["reason", "Grund"],
      ["solution", "Lösung"],
      ["choice", "Wahl/Entscheidung"]
    ],

    grammar: [

      {
        title: "All major English tenses",
        explanation:
          "English uses different tense forms to express present, past, future, completed events and ongoing actions.",
        examples:
          "Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, will future and going to future."
      },

      {
        title: "Second Conditional",
        explanation:
          "The Second Conditional is commonly used for hypothetical or unlikely present or future situations.",
        examples:
          "If I had more time, I would travel more."
      },

      {
        title: "First vs Second Conditional",
        explanation:
          "The First Conditional describes a realistic possibility. The Second Conditional describes a hypothetical or less likely situation.",
        examples:
          "If I study, I will pass. If I had more time, I would study more."
      },

      {
        title: "Zero Conditional",
        explanation:
          "The Zero Conditional is commonly used for general truths and facts.",
        examples:
          "If you heat ice, it melts. If it rains, the ground gets wet."
      },

      {
        title: "Passive voice",
        explanation:
          "The passive focuses on the action or its result rather than the person doing the action.",
        examples:
          "The book was written in 1990. English is spoken in many countries."
      },

      {
        title: "Relative clauses",
        explanation:
          "Relative clauses give additional information about a person, thing or place.",
        examples:
          "The girl who lives next door is my friend. This is the book that I bought."
      },

      {
        title: "Defining relative clauses",
        explanation:
          "Defining relative clauses provide information that identifies the person or thing being discussed.",
        examples:
          "The student who won the competition is in my class."
      },

      {
        title: "Reported speech",
        explanation:
          "Reported speech is used to report what someone said without repeating their exact words.",
        examples:
          "Direct: 'I am tired.' Reported: She said that she was tired."
      },

      {
        title: "Gerunds",
        explanation:
          "A gerund is an -ing form that functions like a noun.",
        examples:
          "Swimming is fun. I enjoy reading."
      },

      {
        title: "Infinitive",
        explanation:
          "The infinitive commonly uses to + base verb.",
        examples:
          "I want to learn. She decided to stay."
      },

      {
        title: "Gerund vs infinitive",
        explanation:
          "Different verbs can be followed by a gerund or an infinitive.",
        examples:
          "I enjoy reading. I want to read. She decided to leave."
      },

      {
        title: "Question forms",
        explanation:
          "English questions use auxiliary verbs and question words according to the tense and structure.",
        examples:
          "Do you like it? Did she go? Are they coming? Have you finished?"
      },

      {
        title: "Indirect questions",
        explanation:
          "Indirect questions are more polite and use statement word order inside the question.",
        examples:
          "Could you tell me where the station is? Do you know what time it starts?"
      },

      {
        title: "Adjectives and adverbs",
        explanation:
          "Adjectives describe nouns. Adverbs often describe verbs, adjectives or other adverbs.",
        examples:
          "She is a careful driver. She drives carefully."
      },

      {
        title: "Adjective order",
        explanation:
          "When several adjectives describe a noun, English generally follows a conventional order.",
        examples:
          "a beautiful old wooden house"
      },

      {
        title: "Quantifiers",
        explanation:
          "Quantifiers express amounts and quantities.",
        examples:
          "some, any, much, many, a lot of, few, little, enough"
      },

      {
        title: "Too and enough",
        explanation:
          "Too means more than is wanted or necessary. Enough means as much as is necessary.",
        examples:
          "It is too expensive. The room is big enough."
      },

      {
        title: "Used to",
        explanation:
          "Used to describes past habits or situations that are no longer true.",
        examples:
          "I used to play football. She used to live in London."
      },

      {
        title: "Question tags",
        explanation:
          "Question tags are short questions added to statements, often to check information.",
        examples:
          "You're tired, aren't you? She likes music, doesn't she?"
      },

      {
        title: "Prepositions of place and movement",
        explanation:
          "Prepositions describe position, direction and movement.",
        examples:
          "in, on, under, next to, between, behind, across, through, into"
      },

      {
        title: "Conjunctions",
        explanation:
          "Conjunctions connect words, phrases and clauses.",
        examples:
          "and, but, or, because, so, although, while, if, when"
      },

      {
        title: "Linking words",
        explanation:
          "Linking words help structure explanations, arguments and written texts.",
        examples:
          "firstly, however, therefore, because, although, finally, in addition"
      },

      {
        title: "Comparisons",
        explanation:
          "English uses comparative and superlative structures to compare people, things and situations.",
        examples:
          "bigger than, more interesting than, the best, the most important"
      },

      {
        title: "Expressing opinions",
        explanation:
          "Useful structures allow speakers and writers to express and support opinions.",
        examples:
          "I think that... In my opinion... I believe that... The reason is..."
      }

    ],

    example:
      "If I had more time, I would learn another language. English is spoken in many countries.",

    questions: [
      {
        q: "Which sentence uses the Second Conditional?",
        options: [
          "If I had more time, I would travel.",
          "If I have time, I will travel.",
          "I travelled last year.",
          "I am travelling now."
        ],
        answer: 0
      },
      {
        q: "Which sentence is passive?",
        options: [
          "The book was written in 1990.",
          "The author wrote the book.",
          "The author is writing the book.",
          "The author will write the book."
        ],
        answer: 0
      },
      {
        q: "Which sentence is correct?",
        options: [
          "I enjoy reading.",
          "I enjoy to read.",
          "I enjoying read.",
          "I enjoy read."
        ],
        answer: 0
      }
    ]
  }

};


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

let isRegisterMode = false;


// ============================================================
// HILFSFUNKTIONEN
// ============================================================

function escapeHtml(value) {

  return String(value)
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
      Math.floor(Math.random() * (i + 1));

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
      .replace(/[^a-z0-9._-]/g, "_");

  return `${safe}@amrqkjyemjpyxxyugwyu.supabase.co`;
}


function validUsername(username) {

  return /^[A-Za-z0-9_-]{3,20}$/.test(username);
}


function setAuthMessage(
  message,
  success = false
) {

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

  adminMessage.textContent =
    message;

  adminMessage.style.color =
    success
      ? "#18794e"
      : "#c0392b";
}


// ============================================================
// LOGIN TABS
// ============================================================

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


// ============================================================
// LOGIN / REGISTRIERUNG
// ============================================================

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


      // ------------------------------------------------------
      // REGISTRIERUNG
      // ------------------------------------------------------

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

      // ------------------------------------------------------
      // LOGIN
      // ------------------------------------------------------

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
// PROFIL LADEN
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


// ============================================================
// USER UI
// ============================================================

function updateUserUI() {

  if (!currentProfile) {
    return;
  }


  const username =
    currentProfile.username || "Benutzer";

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


  if (
    currentProfile.is_admin === true
  ) {

    if (adminPanel) {

      adminPanel.classList.remove(
        "hidden"
      );
    }

    loadAdminUsers();


  } else {

    if (adminPanel) {

      adminPanel.classList.add(
        "hidden"
      );
    }
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


// ============================================================
// LOGOUT
// ============================================================

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

      await showApp(
        data.session.user
      );
    }

  });


supabaseClient.auth.onAuthStateChange(
  async (
    event,
    session
  ) => {

    if (event === "SIGNED_OUT") {

      showAuth();

    } else if (
      event === "SIGNED_IN" &&
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


        document
          .querySelectorAll(".class-btn")
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


        currentQuizQuestions = [];

        currentQuizIndex = 0;


        await renderLearning();

      }
    );

  });


// ============================================================
// LERNBEREICH
// ============================================================

async function renderLearning() {

  if (!learningArea) {
    return;
  }


  if (currentMode === "vocab") {

    await renderVocab();

    return;
  }


  if (currentMode === "quiz") {

    await renderQuiz();

    return;
  }


  if (currentMode === "grammar") {

    renderGrammar();

    return;
  }


  if (currentMode === "exercise") {

    await renderExercise();

    return;
  }

}


// ============================================================
// VOKABELN AUS SUPABASE
// ============================================================

async function getVocabForClass(
  classNumber
) {

  const basicWords =
    lessons[classNumber].vocab
      .map(
        ([english, german]) => ({
          id: null,
          english,
          german,
          custom: false
        })
      );


  const {
    data,
    error
  } =
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


  if (error) {

    console.error(
      "Vokabeln konnten nicht geladen werden:",
      error
    );

    return basicWords;
  }


  const customWords =
    (data || [])
      .map(word => ({

        id: word.id,

        english: word.english,

        german: word.german,

        custom: true

      }));


  return [
    ...basicWords,
    ...customWords
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

      <p>
        Vokabeln werden geladen...
      </p>

    </div>

  `;


  const adminArea =
    document.getElementById(
      "vocabAdminArea"
    );


  const addButton =
    document.getElementById(
      "addVocabButton"
    );


  if (
    currentProfile?.is_admin === true
  ) {

    adminArea.classList.remove(
      "hidden"
    );


    addButton.addEventListener(
      "click",
      showAddVocabForm
    );
  }


  const words =
    await getVocabForClass(
      currentClass
    );


  const vocabList =
    document.getElementById(
      "vocabList"
    );


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


  document
    .querySelectorAll(".delete-vocab-btn")
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


// ============================================================
// VOKABEL HINZUFÜGEN
// ============================================================

function showAddVocabForm() {

  if (
    currentProfile?.is_admin !== true
  ) {
    return;
  }


  const oldForm =
    document.getElementById(
      "vocabForm"
    );


  if (oldForm) {
    oldForm.remove();
  }


  const adminArea =
    document.getElementById(
      "vocabAdminArea"
    );


  const form =
    document.createElement(
      "div"
    );


  form.id =
    "vocabForm";

  form.className =
    "vocab-form";


  form.innerHTML = `

    <h3>
      ➕ Neue Vokabel
    </h3>

    <label>
      Klasse
    </label>

    <select id="vocabClass">

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


    <label>
      Englisch
    </label>

    <input
      id="vocabEnglish"
      type="text"
      maxlength="100"
      placeholder="z. B. bicycle"
    >


    <label>
      Deutsch
    </label>

    <input
      id="vocabGerman"
      type="text"
      maxlength="100"
      placeholder="z. B. Fahrrad"
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
    .getElementById(
      "saveVocabButton"
    )
    .addEventListener(
      "click",
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
// VOKABEL SPEICHERN
// ============================================================

async function addAdminVocab() {

  if (
    currentProfile?.is_admin !== true
  ) {

    alert(
      "Keine Admin-Berechtigung."
    );

    return;
  }


  const classNumber =
    Number(
      document.getElementById(
        "vocabClass"
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


  if (!english || !german) {

    message.textContent =
      "Bitte beide Felder ausfüllen.";

    return;
  }


  const button =
    document.getElementById(
      "saveVocabButton"
    );


  button.disabled = true;

  button.textContent =
    "Speichere...";


  const {
    error
  } =
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


  if (error) {

    console.error(error);

    message.textContent =
      "Fehler: " +
      error.message;

    button.disabled = false;

    button.textContent =
      "Vokabel speichern";

    return;
  }


  message.textContent =
    "✅ Vokabel gespeichert!";


  currentClass =
    classNumber;


  document
    .querySelectorAll(".class-btn")
    .forEach(btn => {

      btn.classList.toggle(
        "active",
        Number(
          btn.dataset.class
        ) === classNumber
      );

    });


  setTimeout(
    async () => {

      await renderVocab();

    },
    500
  );

}


// ============================================================
// VOKABEL LÖSCHEN
// ============================================================

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


// ============================================================
// GRAMMATIK
// ============================================================

function renderGrammar() {

  const topics =
    lessons[currentClass].grammar;


  learningArea.innerHTML = `

    <h2>
      📖 English Grammar – ${currentClass}. Klasse
    </h2>

    <p>
      Grammar topics for English at secondary school level.
    </p>

    <div
      class="content-grid"
      id="grammarList"
    >

      ${topics.map(
        (topic, index) => `

          <div class="vocab-card">

            <strong>
              ${index + 1}. ${escapeHtml(topic.title)}
            </strong>

            <span>
              ${escapeHtml(topic.explanation)}
            </span>

            <div class="example">

              <strong>
                Examples:
              </strong>

              <br>

              ${escapeHtml(topic.examples)}

            </div>

          </div>

        `
      ).join("")}

    </div>

  `;

}


// ============================================================
// QUIZ FRAGEN ERSTELLEN
// ============================================================

async function createQuizQuestions() {

  const words =
    await getVocabForClass(
      currentClass
    );


  const normalQuestions =
    lessons[currentClass]
      .questions
      .map(question => ({

        type: "grammar",

        q: question.q,

        options: [
          ...question.options
        ],

        answer:
          question.answer

      }));


  const vocabQuestions = [];


  for (
    const word of words
  ) {

    const otherWords =
      words.filter(
        other =>
          other.german !== word.german
      );


    if (
      otherWords.length < 3
    ) {
      continue;
    }


    const wrongAnswers =
      shuffle(
        otherWords
      )
      .slice(
        0,
        3
      )
      .map(
        item =>
          item.german
      );


    const options =
      shuffle([
        word.german,
        ...wrongAnswers
      ]);


    vocabQuestions.push({

      type: "vocab",

      q:
        `Was bedeutet „${word.english}“?`,

      options,

      answer:
        options.indexOf(
          word.german
        )

    });

  }


  /*
    ALLE Fragen zusammenführen
    und danach wirklich zufällig mischen.
  */

  return shuffle([
    ...normalQuestions,
    ...vocabQuestions
  ]);

}


// ============================================================
// QUIZ
// ============================================================

async function renderQuiz() {

  /*
    Neue Fragenliste erstellen,
    wenn noch keine vorhanden ist.
  */

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

    learningArea.innerHTML = `

      <h2>
        🧠 Quiz
      </h2>

      <p>
        Es sind keine Fragen vorhanden.
      </p>

    `;

    return;
  }


  const question =
    currentQuizQuestions[
      currentQuizIndex
    ];


  quizAnswered = false;


  learningArea.innerHTML = `

    <h2>
      🧠 Quiz – ${currentClass}. Klasse
    </h2>

    <p>
      Frage
      ${currentQuizIndex + 1}
      von
      ${currentQuizQuestions.length}
    </p>

    <h3>
      ${escapeHtml(question.q)}
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


  document
    .querySelectorAll(".quiz-option")
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


// ============================================================
// QUIZ ANTWORT
// ============================================================

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


  const buttons =
    document.querySelectorAll(
      ".quiz-option"
    );


  buttons.forEach(
    button => {

      button.disabled = true;

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


      /*
        Wenn alle Fragen gespielt wurden,
        komplett neue zufällige Runde.
      */

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


// ============================================================
// ÜBUNG
// ============================================================

async function renderExercise() {

  const words =
    await getVocabForClass(
      currentClass
    );


  if (!words.length) {
    return;
  }


  const word =
    words[
      Math.floor(
        Math.random() *
        words.length
      )
    ];


  learningArea.innerHTML = `

    <h2>
      ✏️ Übungen – ${currentClass}. Klasse
    </h2>

    <p>
      Write an English sentence using this word:
    </p>

    <div class="example">

      <strong>
        ${escapeHtml(word.english)}
      </strong>

      <br>

      ${escapeHtml(word.german)}

    </div>


    <label for="exerciseInput">
      Your sentence
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


        if (
          input.value.trim().length < 4
        ) {

          result.textContent =
            "Bitte schreibe einen vollständigen Satz.";

          result.style.color =
            "#c0392b";

          return;
        }


        input.disabled = true;


        document
          .getElementById(
            "exerciseButton"
          )
          .disabled = true;


        result.textContent =
          "✅ Übung abgeschlossen! +5 Punkte";

        result.style.color =
          "#18794e";


        await addPoints(5);

      }
    );

}


// ============================================================
// ADMIN BENUTZER
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
    await supabaseClient.rpc(
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
                user.username || "-"
              )}
            </td>

            <td>
              ⭐ ${Number(
                user.points || 0
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


if (refreshAdmin) {

  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );

}


// ============================================================
// START
// ============================================================

console.log(
  "English Master JavaScript geladen."
);