```javascript
/*
  ============================================================
  ENGLISH MASTER
  SCRIPT.JS – STABILE VERSION
  ============================================================

  Enthalten:
  - Supabase Login
  - Registrierung
  - Punkte
  - Klassen 1–4
  - Vokabeln mit Units
  - Unit-Auswahl bei Vokabeln
  - Quiz
  - Quiz-Auswahl:
      Alle Vokabeln
      bestimmte Unit
      Grammatik
  - Übungen
  - Leaderboard
  - Admin-Bereich

  WICHTIG:
  Nur den Publishable Key verwenden.
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

  1: {

    units: {

      1: [
        ["hello", "hallo", ""],
        ["goodbye", "Auf Wiedersehen", ""],
        ["book", "Buch", ""],
        ["school", "Schule", ""],
        ["friend", "Freund/in", ""],
        ["house", "Haus", ""],
        ["dog", "Hund", ""],
        ["cat", "Katze", ""],
        ["water", "Wasser", ""],
        ["apple", "Apfel", ""]
      ],

      2: [
        ["lion", "Löwe", ""],
        ["tree", "Baum", "The monkeys are behind the tree."],
        ["penguin", "Pinguin", ""],
        ["giraffe", "Giraffe", ""],
        ["train", "Zug", "Let's go on a train."],
        ["guide", "(Reise-)Führer/in", "Listen to the guide."],
        ["monkey", "Affe", ""],
        ["parrot", "Papagei", ""],
        ["zoo", "Zoo", "There are many animals in the zoo."],
        ["beautiful", "schön, hübsch", "The parrot is blue and yellow. It's beautiful."],
        ["behind", "hinter", "The chair is behind the desk."],
        ["big", "groß", "There's a big giraffe."],
        ["in front of", "vor", "The tree is in front of you."],
        ["next to", "neben", "The parrot is next to the monkeys."],
        ["now", "jetzt", "Where is it now?"],
        ["on", "auf", "Look! The parrot is on Buddy now."],
        ["there is (there's)", "es gibt, da ist", "There's a book on my desk."],
        ["there are", "es gibt, da sind", "There are three books on my desk."],
        ["under", "unter", "There's a book under my desk."],
        ["What is it?", "Was ist los?", ""],
        ["where", "wo", "Where is it?"],
        ["small", "klein", "The monkey isn't big. It's small."],
        ["adult", "Erwachsene/r", "Adults are £14.40."],
        ["at", "bei; an; hier: in", "The children are at the zoo."],
        ["to bring", "(mit-)bringen", "Can I bring my dog, Buddy?"],
        ["but", "aber", "Dogs are welcome. But they can't run around."],
        ["to feed", "füttern", "Let's go and feed the penguins."],
        ["to run around", "herumlaufen", "Dogs are welcome, but they can't run around."],
        ["to", "zu; bis; vor; hier: in", "Welcome to the wildlife park!"],
        ["welcome", "willkommen", "Welcome to London."],
        ["from", "aus", "They are from California."],
        ["year", "Jahr, Jahrgangsstufe", "I'm in Year 7."],
        ["he", "er", "He likes animals."],
        ["she", "sie", "She is from England."],
        ["to talk", "sprechen, sich unterhalten", "Talk about the boys and girls."],
        ["they", "sie", "Rahim and Sue are 11. They are from Manchester."],
        ["we", "wir", "We're Sophie and John."],
        ["for", "für", "Here's a chant for you."],
        ["happy", "glücklich, fröhlich; zufrieden", "Buddy is happy."],
        ["to let somebody out", "jemanden herauslassen", "Let us out!"],
        ["us", "uns", "Can you see us?"],
        ["car", "Auto", "The parrot is in the car."],
        ["At last.", "Endlich.", ""],
        ["How strange!", "Wie komisch!", ""],
        ["Let me see.", "Lass mich mal schauen.", ""],
        ["stone", "Stein", "Colour your stone."]
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
        ["morning", "Morgen", ""],
        ["evening", "Abend", ""],
        ["breakfast", "Frühstück", ""],
        ["teacher", "Lehrer/in", ""],
        ["homework", "Hausaufgabe", ""],
        ["computer", "Computer", ""],
        ["weather", "Wetter", ""],
        ["summer", "Sommer", ""],
        ["Monday", "Montag", ""],
        ["beautiful", "schön", ""]
      ],

      2: [
        ["ship", "Schiff", ""],
        ["sea", "Meer", ""],
        ["treasure", "Schatz", ""],
        ["pirate", "Pirat", ""],
        ["hook", "Haken", ""],
        ["wooden leg", "Holzbein", ""],
        ["also", "auch", "Tamara is also a pirate."],
        ["famous", "berühmt", "Greybeard is a famous pirate."],
        ["him", "ihm / ihn", "Peter is nice. We like him."],
        ["his", "sein / e", "His pirate name is Blackbeard."],
        ["ship", "Schiff", "Greybeard has got a big ship."],
        ["to be scared (of)", "Angst haben (vor)", "The kids are scared of the ship."],
        ["very", "sehr", "They are very scared."],
        ["strong", "stark, kräftig", "Greybeard hasn't got a strong left leg."],
        ["captain", "Kapitän", "The captain has got a blue ship."],
        ["have got / has got", "haben", "I have got brown hair. / Tamara has got red hair."],
        ["pretty", "hübsch", "Polly is a pretty pirate."],
        ["purple", "violett, lila", "She has got purple hair."],
        ["a lot of / lots of", "viel / viele", "She has got a lot of books about pirates."],
        ["bed", "Bett", "Dana is in bed now."],
        ["dream", "Traum", "It's a dream!"],
        ["tired", "müde", "Dana is in bed. She is tired."],
        ["to guess", "raten", "Listen and guess the pirate."],
        ["It's your turn.", "Du bist an der Reihe.", ""],
        ["brother", "Bruder", "Fred is Frank's brother."],
        ["blonde", "blond", "He has got blonde hair."],
        ["real", "echt, wirklich", "His left leg isn't real. It's wooden."],
        ["short", "klein", "Greybeard is short."],
        ["tall", "groß", "Tamara is tall."],
        ["wrong", "falsch, nicht in Ordnung", "Say what's wrong."],
        ["Good idea.", "Gute Idee.", ""],
        ["true", "wahr", "Is it true?"]
      ]

    },

    grammar:
      "Have got / has got: I have got, you have got, he/she/it has got. Außerdem: he/she/it + Verb mit -s im Simple Present.",

    example:
      "I have got brown hair. / Tamara has got red hair. / He likes animals.",

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
        ["usually", "normalerweise", ""],
        ["sometimes", "manchmal", ""],
        ["always", "immer", ""],
        ["never", "nie", ""],
        ["important", "wichtig", ""],
        ["interesting", "interessant", ""],
        ["journey", "Reise", ""],
        ["environment", "Umwelt", ""],
        ["future", "Zukunft", ""],
        ["healthy", "gesund", ""]
      ],

      2: [
        ["finger", "Finger", ""],
        ["ear", "Ohr", ""],
        ["nose", "Nase", ""],
        ["hair", "Haare", ""],
        ["eye", "Auge", ""],
        ["mouth", "Mund", ""],
        ["beard", "Bart", ""],
        ["right arm", "rechter Arm", ""],
        ["shoulder", "Schulter", ""],
        ["left arm", "linker Arm", ""],
        ["leg", "Bein", ""],
        ["foot", "Fuß", ""],
        ["feet", "Füße", ""],
        ["tooth", "Zahn", ""],
        ["teeth", "Zähne", ""],
        ["tall", "groß / hoch", ""],
        ["short", "klein / niedrig / kurz", ""],
        ["big", "groß", ""],
        ["small", "klein", ""],
        ["long", "lang", ""]
      ]

    },

    grammar:
      "Past Simple: Regelmäßige Verben bekommen oft -ed. Beispiel: play → played, visit → visited.",

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
        ["cold", "kalt", ""],
        ["angry", "wütend", ""],
        ["happy", "glücklich", ""],
        ["scared", "ängstlich", ""],
        ["hot", "heiß", ""],
        ["excited", "aufgeregt", ""],
        ["sad", "traurig", ""],
        ["bored", "gelangweilt", ""],
        ["hungry", "hungrig", ""],
        ["nervous", "nervös", ""],
        ["tired", "müde", ""],
        ["proud", "stolz", ""],
        ["morning", "Morgen", ""],
        ["lunchtime", "Mittag", ""],
        ["afternoon", "Nachmittag", ""],
        ["evening", "Abend", ""],
        ["night", "Nacht", ""]
      ],

      2: [
        ["after", "nach", "After school I meet my friends."],
        ["day", "Tag", "On the big day, Mike is nervous."],
        ["end", "Ende", "At the end of the play, Mike is very happy."],
        ["fun", "Spaß", "It's great fun."],
        ["Go away!", "Geh weg!", ""],
        ["to help", "helfen", "Let me help you."],
        ["home", "zu/nach Hause; Zuhause", "Mike is at home."],
        ["It's no good.", "Es hat keinen Zweck.", ""],
        ["mum", "Mama, Mutti", "She is his mum."],
        ["next", "nächster/nächste/nächstes", "The next day"],
        ["still (not)", "immer noch (nicht)", "Miss Baker still isn't happy."],
        ["a day in the life of", "ein Tag im Leben von", "The story is about a day in the life of Richard."],
        ["to be asleep", "schlafen", "He's in bed and he's asleep."],
        ["early", "früh", "It's early. He's still in bed."],
        ["life (pl lives)", "Leben", "Elephants have a long life."],
        ["lunchtime", "Mittagspause", "It's lunchtime. He's hungry."],
        ["sun", "Sonne", "The sun is out."],
        ["Are you OK?", "Geht's dir/euch/Ihnen gut?", ""],
        ["homework (no pl)", "Hausaufgaben", "We have got a lot of homework today."],
        ["into", "in (... hinein)", "Go into the classroom!"],
        ["Oh dear!", "Du meine Güte!", ""],
        ["room", "Zimmer, Raum", "There's a rat in our room."],
        ["why", "warum", "Why are you tired?"],
        ["bad", "schlecht, böse", "Thursday and Friday aren't bad."],
        ["Don't be late.", "Komm(t) nicht zu spät., Sei(d) pünktlich.", ""],
        ["tomorrow", "morgen", "Tomorrow is Monday."],
        ["birthday", "Geburtstag", "Happy birthday, David!"],
        ["friend", "Freund/Freundin", "Tom is his friend."],
        ["Be yourself.", "Sei du selbst.", ""],
        ["no one else", "niemand anders", "Be yourself and no one else."],
        ["bottle", "Flasche", "The feelings are in the bottle."],
        ["to get back", "zurückholen, zurückbekommen", "I will get the feelings back."],
        ["mad", "wütend, zornig", "I am nice, Bob is mad."],
        ["magic", "magisch", "This is a magic bottle."],
        ["to rob", "stehlen; ausrauben", "I'm a monster and I rob feelings."],
        ["to break", "(zer-)brechen", "I must break the bottle."],
        ["to go to sleep", "schlafen gehen", "Go back to sleep."],
        ["because", "weil", "I'm happy because it's the weekend."],
        ["It's me.", "Ich bin's.", ""],
        ["Try it!", "Versuch es!", ""],
        ["Let go!", "Lass(t) los!", ""],
        ["What's happening?", "Was ist (hier) los?", ""]
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

let currentUnit = "all";

let currentQuestion = 0;

let currentQuizType = "vocab";

let currentQuizUnit = "all";

let currentUser = null;
let currentProfile = null;

let isRegisterMode = false;


// ============================================================
// ELEMENTE
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

const vocabUnitNavigation =
  document.getElementById("vocabUnitNavigation");

const unitList =
  document.getElementById("unitList");

const contentArea =
  document.getElementById("contentArea");


// ============================================================
// HILFSFUNKTIONEN
// ============================================================

function setAuthMessage(text, error = true) {

  if (!authMessage) return;

  authMessage.textContent = text;

  authMessage.style.color =
    error ? "#c0392b" : "#18794e";
}


function setAdminMessage(text, error = true) {

  if (!adminMessage) return;

  adminMessage.textContent = text;

  adminMessage.style.color =
    error ? "#c0392b" : "#18794e";
}


function setLeaderboardMessage(text, error = true) {

  if (!leaderboardMessage) return;

  leaderboardMessage.textContent = text;

  leaderboardMessage.style.color =
    error ? "#c0392b" : "#18794e";
}


function authEmail(username) {

  const safe =
    username
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

  if (loginTab) {
    loginTab.classList.add("active");
  }

  if (registerTab) {
    registerTab.classList.remove("active");
  }

  if (authButton) {
    authButton.textContent = "Anmelden";
  }

  if (passwordInput) {
    passwordInput.autocomplete =
      "current-password";
  }

  setAuthMessage("");

}


function showRegister() {

  isRegisterMode = true;

  if (registerTab) {
    registerTab.classList.add("active");
  }

  if (loginTab) {
    loginTab.classList.remove("active");
  }

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


// ============================================================
// PROFIL LADEN
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

    console.error(
      "Profil konnte nicht geladen werden:",
      error
    );

    return null;
  }

  return data;

}


// ============================================================
// BENUTZER-UI
// ============================================================

function updateUserUI() {

  if (!currentProfile) return;

  const username =
    currentProfile.username;

  const points =
    Number(currentProfile.points || 0);

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

  if (leaderboardMyPoints) {
    leaderboardMyPoints.textContent =
      points;
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

  if (authScreen) {
    authScreen.classList.add("hidden");
  }

  if (mainScreen) {
    mainScreen.classList.remove("hidden");
  }

  updateUserUI();

  renderLearning();

}


// ============================================================
// LOGIN ANZEIGEN
// ============================================================

function showAuth() {

  currentUser = null;

  currentProfile = null;

  if (mainScreen) {
    mainScreen.classList.add("hidden");
  }

  if (authScreen) {
    authScreen.classList.remove("hidden");
  }

  if (usernameInput) {
    usernameInput.value = "";
  }

  if (passwordInput) {
    passwordInput.value = "";
  }

  showLogin();

}


// ============================================================
// AUTH FORM
// ============================================================

if (authForm) {

  authForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      const username =
        usernameInput
          ? usernameInput.value.trim()
          : "";

      const password =
        passwordInput
          ? passwordInput.value
          : "";

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

      if (authButton) {
        authButton.disabled = true;

        authButton.textContent =
          isRegisterMode
            ? "Konto wird erstellt..."
            : "Anmeldung...";
      }

      try {

        const email =
          authEmail(username);


        // ==================================================
        // REGISTRIERUNG
        // ==================================================

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


          // Profil erstellen

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

            console.error(
              profileError
            );

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

        }


        // ==================================================
        // LOGIN
        // ==================================================

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
          error.message ||
          "Anmeldung fehlgeschlagen."
        );

      } finally {

        if (authButton) {

          authButton.disabled = false;

          authButton.textContent =
            isRegisterMode
              ? "Konto erstellen"
              : "Anmelden";

        }

      }

    }
  );

}


// ============================================================
// LOGIN / REGISTER BUTTONS
// ============================================================

if (loginTab) {

  loginTab.addEventListener(
    "click",
    showLogin
  );

}


if (registerTab) {

  registerTab.addEventListener(
    "click",
    showRegister
  );

}


// ============================================================
// LOGOUT
// ============================================================

if (logoutButton) {

  logoutButton.addEventListener(
    "click",
    async () => {

      await supabaseClient.auth.signOut();

      showAuth();

    }
  );

}


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

  })
  .catch(error => {

    console.error(
      "Session-Fehler:",
      error
    );

  });


supabaseClient.auth.onAuthStateChange(
  async (event, session) => {

    if (event === "SIGNED_OUT") {

      showAuth();

    }

    else if (
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

  if (!currentProfile || !currentUser) {
    return;
  }

  const newPoints =
    Number(currentProfile.points || 0)
    + amount;

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
// KLASSEN
// ============================================================

document
  .querySelectorAll(".class-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentClass =
          Number(button.dataset.class);

        document
          .querySelectorAll(".class-btn")
          .forEach(b =>
            b.classList.remove("active")
          );

        button.classList.add("active");

        currentQuestion = 0;

        currentUnit = "all";

        currentQuizUnit = "all";

        renderLearning();

      }
    );

  });


// ============================================================
// LERNMODI
// ============================================================

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

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

      }
    );

  });


// ============================================================
// LERNBEREICH
// ============================================================

function renderLearning() {

  if (!learningArea) return;

  if (currentMode === "vocab") {
    renderVocab();
  }

  else if (currentMode === "quiz") {
    renderQuiz();
  }

  else if (currentMode === "grammar") {
    renderGrammar();
  }

  else if (currentMode === "exercise") {
    renderExercise();
  }

}


// ============================================================
// VOKABELN
// ============================================================

function getAllVocab() {

  const units =
    lessons[currentClass].units;

  const result = [];

  Object.keys(units).forEach(unit => {

    units[unit].forEach(word => {

      result.push({
        word: word[0],
        translation: word[1],
        example: word[2],
        unit: Number(unit)
      });

    });

  });

  return result;

}


function renderVocab() {

  const lesson =
    lessons[currentClass];

  const units =
    lesson.units;

  let html = `

    <div class="vocab-unit-navigation">

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

      <div class="unit-list">

        <button
          type="button"
          class="secondary-btn vocab-unit-btn ${currentUnit === "all" ? "active" : ""}"
          data-unit="all"
        >
          📚 Alle Units
        </button>

  `;


  Object.keys(units).forEach(unit => {

    const active =
      Number(currentUnit) === Number(unit);

    html += `

      <button
        type="button"
        class="secondary-btn vocab-unit-btn ${active ? "active" : ""}"
        data-unit="${unit}"
      >
        📖 Unit ${unit}
        <span>
          ${units[unit].length} Vokabeln
        </span>
      </button>

    `;

  });


  html += `

      </div>

    </div>

    <div class="content-area">

  `;


  let words = getAllVocab();


  if (currentUnit !== "all") {

    words =
      words.filter(
        item =>
          item.unit === Number(currentUnit)
      );

  }


  html += `

    <div class="vocab-header">

      <div>

        <h2>
          ${currentUnit === "all"
            ? "Alle Vokabeln"
            : `Unit ${currentUnit}`}
        </h2>

        <p>
          ${words.length} Vokabeln
        </p>

      </div>

    </div>

  `;


  if (words.length === 0) {

    html += `

      <div class="empty-unit">

        <p>
          Für diese Unit sind noch keine Vokabeln vorhanden.
        </p>

      </div>

    `;

  }

  else {

    html += `

      <div class="content-grid">

    `;

    words.forEach(item => {

      html += `

        <div class="vocab-card">

          <strong>
            ${escapeHtml(item.word)}
          </strong>

          <span>
            ${escapeHtml(item.translation)}
          </span>

          ${
            item.example
              ? `
                <div class="example">
                  ${escapeHtml(item.example)}
                </div>
              `
              : ""
          }

        </div>

      `;

    });

    html += `
      </div>
    `;

  }


  html += `

    </div>

  `;


  learningArea.innerHTML =
    html;


  document
    .querySelectorAll(".vocab-unit-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const unit =
            button.dataset.unit;

          currentUnit =
            unit === "all"
              ? "all"
              : Number(unit);

          renderVocab();

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

function getQuizQuestions() {

  const lesson =
    lessons[currentClass];


  // ---------------------------------------------
  // GRAMMATIK
  // ---------------------------------------------

  if (currentQuizType === "grammar") {

    return lesson.questions.map(q => ({
      type: "grammar",
      q: q.q,
      options: q.options,
      answer: q.answer
    }));

  }


  // ---------------------------------------------
  // VOKABELN
  // ---------------------------------------------

  let vocab =
    getAllVocab();


  if (currentQuizUnit !== "all") {

    vocab =
      vocab.filter(
        item =>
          item.unit === Number(currentQuizUnit)
      );

  }


  return vocab.map(item => {

    const wrongAnswers =
      getAllVocab()
        .filter(
          other =>
            other.word !== item.word &&
            other.translation !== item.translation
        )
        .map(other => other.translation);


    const uniqueWrong =
      [...new Set(wrongAnswers)]
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);


    const options = [
      item.translation,
      ...uniqueWrong
    ].sort(() => Math.random() - 0.5);


    return {

      type: "vocab",

      q:
        `Was bedeutet „${item.word}“?`,

      options,

      answer:
        options.indexOf(
          item.translation
        )

    };

  });

}


function renderQuiz() {

  const questions =
    getQuizQuestions();


  if (
    currentQuestion >= questions.length
  ) {
    currentQuestion = 0;
  }


  if (questions.length === 0) {

    learningArea.innerHTML = `

      <div class="content-area">

        <h2>
          🧠 Quiz
        </h2>

        <p>
          Für diese Auswahl sind noch keine Fragen vorhanden.
        </p>

      </div>

    `;

    return;
  }


  const q =
    questions[currentQuestion];


  let selectionHtml = `

    <div class="quiz-settings">

      <h3>
        Quiz auswählen
      </h3>

      <div class="quiz-select-row">

        <label for="quizType">
          Bereich
        </label>

        <select id="quizType">

          <option
            value="vocab"
            ${currentQuizType === "vocab" ? "selected" : ""}
          >
            📚 Vokabeln
          </option>

          <option
            value="grammar"
            ${currentQuizType === "grammar" ? "selected" : ""}
          >
            📖 Grammatik
          </option>

        </select>

      </div>

  `;


  if (currentQuizType === "vocab") {

    selectionHtml += `

      <div class="quiz-select-row">

        <label for="quizUnit">
          Unit
        </label>

        <select id="quizUnit">

          <option
            value="all"
            ${currentQuizUnit === "all" ? "selected" : ""}
          >
            📚 Alle Vokabeln
          </option>

    `;


    Object.keys(
      lessons[currentClass].units
    ).forEach(unit => {

      selectionHtml += `

        <option
          value="${unit}"
          ${Number(currentQuizUnit) === Number(unit) ? "selected" : ""}
        >
          📖 Unit ${unit}
        </option>

      `;

    });


    selectionHtml += `

        </select>

      </div>

    `;

  }


  selectionHtml += `
    </div>
  `;


  learningArea.innerHTML = `

    <div class="content-area">

      <h2>
        🧠 Quiz – ${currentClass}. Klasse
      </h2>

      ${selectionHtml}

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

    </div>

  `;


  // ========================================================
  // QUIZ AUSWAHL
  // ========================================================

  const quizType =
    document.getElementById(
      "quizType"
    );


  if (quizType) {

    quizType.addEventListener(
      "change",
      () => {

        currentQuizType =
          quizType.value;

        currentQuestion = 0;

        renderQuiz();

      }
    );

  }


  const quizUnit =
    document.getElementById(
      "quizUnit"
    );


  if (quizUnit) {

    quizUnit.addEventListener(
      "change",
      () => {

        currentQuizUnit =
          quizUnit.value === "all"
            ? "all"
            : Number(quizUnit.value);

        currentQuestion = 0;

        renderQuiz();

      }
    );

  }


  // ========================================================
  // ANTWORTEN
  // ========================================================

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


          if (
            selected === q.answer
          ) {

            if (result) {

              result.textContent =
                "✅ Richtig! +10 Punkte";

              result.style.color =
                "#18794e";

            }

            await addPoints(10);

          }

          else {

            if (result) {

              result.textContent =
                `❌ Nicht ganz. Richtig wäre: ${q.options[q.answer]}`;

              result.style.color =
                "#c0392b";

            }

          }


          setTimeout(
            () => {

              currentQuestion =
                (currentQuestion + 1)
                % questions.length;

              renderQuiz();

            },
            1200
          );

        }
      );

    });

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
          ${escapeHtml(randomWord.word)}
        </strong>

        in einem englischen Satz.

      </div>

      <label
        for="exerciseInput"
      >
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


  const exerciseButton =
    document.getElementById(
      "exerciseButton"
    );


  if (exerciseButton) {

    exerciseButton.addEventListener(
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
          !input ||
          input.value.trim().length < 4
        ) {

          if (result) {

            result.textContent =
              "Bitte schreibe einen etwas längeren Satz.";

            result.style.color =
              "#c0392b";

          }

          return;
        }


        if (result) {

          result.textContent =
            "✅ Übung abgeschlossen! +5 Punkte";

          result.style.color =
            "#18794e";

        }


        input.disabled = true;

        exerciseButton.disabled = true;

        await addPoints(5);

      }
    );

  }

}


// ============================================================
// NAVIGATION
// ============================================================

document
  .querySelectorAll(".nav-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const page =
          button.dataset.page;


        document
          .querySelectorAll(".nav-btn")
          .forEach(
            b => b.classList.remove("active")
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

          if (learningPage) {
            learningPage.classList.remove("hidden");
          }

          if (leaderboardPage) {
            leaderboardPage.classList.add("hidden");
          }

        }


        if (page === "leaderboard") {

          if (learningPage) {
            learningPage.classList.add("hidden");
          }

          if (leaderboardPage) {
            leaderboardPage.classList.remove("hidden");
          }

          loadLeaderboard();

        }

      }
    );

  });


// ============================================================
// LEADERBOARD
// ============================================================

async function loadLeaderboard() {

  if (!leaderboardList) return;


  leaderboardList.innerHTML = `

    <div class="leaderboard-loading">
      Leaderboard wird geladen...
    </div>

  `;


  setLeaderboardMessage("");


  try {

    let query =
      supabaseClient
        .from("profiles")
        .select(
          "username, points, is_admin"
        )
        .eq("is_admin", false)
        .order(
          "points",
          {
            ascending: false
          }
        )
        .limit(100);


    const { data, error } =
      await query;


    if (error) {
      throw error;
    }


    const users =
      data || [];


    if (users.length === 0) {

      leaderboardList.innerHTML = `

        <div class="leaderboard-loading">
          Noch keine Benutzer vorhanden.
        </div>

      `;

      return;
    }


    leaderboardList.innerHTML =
      users.map(
        (user, index) => `

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

        `
      ).join("");


  } catch (error) {

    console.error(
      "Leaderboard-Fehler:",
      error
    );


    leaderboardList.innerHTML = `

      <div class="leaderboard-loading">
        Leaderboard konnte nicht geladen werden.
      </div>

    `;

    setLeaderboardMessage(
      "Das Leaderboard konnte nicht geladen werden."
    );

  }

}


if (refreshLeaderboard) {

  refreshLeaderboard.addEventListener(
    "click",
    loadLeaderboard
  );

}


if (leaderboardClass) {

  leaderboardClass.addEventListener(
    "change",
    loadLeaderboard
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


  try {

    const { data, error } =
      await supabaseClient.rpc(
        "admin_list_profiles"
      );


    if (error) {
      throw error;
    }


    adminUsers.innerHTML =
      (data || [])
        .map(
          user => `

            <tr>

              <td>
                ${escapeHtml(user.username)}
              </td>

              <td>
                ⭐ ${Number(user.points || 0)}
              </td>

              <td>
                ${user.class
                  ? escapeHtml(user.class)
                  : "-"}
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
      `${(data || []).length} Benutzer gefunden.`,
      false
    );


  } catch (error) {

    console.error(
      "Admin-Fehler:",
      error
    );


    adminUsers.innerHTML = "";

    setAdminMessage(
      "Admin-Liste konnte nicht geladen werden. Die Admin-SQL-Funktion muss eingerichtet sein."
    );

  }

}


if (refreshAdmin) {

  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );

}


// ============================================================
// ADMIN – VOKABEL HINZUFÜGEN
// ============================================================

const vocabForm =
  document.getElementById(
    "vocabForm"
  );

const vocabEnglish =
  document.getElementById(
    "vocabEnglish"
  );

const vocabGerman =
  document.getElementById(
    "vocabGerman"
  );

const vocabUnit =
  document.getElementById(
    "vocabUnit"
  );

const vocabClass =
  document.getElementById(
    "vocabClass"
  );

const vocabExample =
  document.getElementById(
    "vocabExample"
  );

const vocabMessage =
  document.getElementById(
    "vocabMessage"
  );


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
        vocabEnglish?.value.trim() || "";

      const german =
        vocabGerman?.value.trim() || "";

      const unit =
        Number(
          vocabUnit?.value || 1
        );

      const classNumber =
        Number(
          vocabClass?.value || 1
        );

      const example =
        vocabExample?.value.trim() || "";


      if (!english || !german) {

        if (vocabMessage) {

          vocabMessage.textContent =
            "Bitte englisches Wort und Übersetzung eingeben.";

          vocabMessage.style.color =
            "#c0392b";

        }

        return;

      }


      try {

        const { error } =
          await supabaseClient
            .from("vocab")
            .insert({

              english,
              german,
              unit,
              class: classNumber,
              example

            });


        if (error) {
          throw error;
        }


        if (vocabMessage) {

          vocabMessage.textContent =
            "✅ Vokabel wurde hinzugefügt.";

          vocabMessage.style.color =
            "#18794e";

        }


        vocabForm.reset();


      } catch (error) {

        console.error(
          "Vokabel konnte nicht hinzugefügt werden:",
          error
        );


        if (vocabMessage) {

          vocabMessage.textContent =
            "Vokabel konnte nicht hinzugefügt werden.";

          vocabMessage.style.color =
            "#c0392b";

        }

      }

    }
  );

}


// ============================================================
// START
// ============================================================

if (
  !authScreen ||
  !mainScreen ||
  !authForm ||
  !usernameInput ||
  !passwordInput ||
  !authButton ||
  !loginTab ||
  !registerTab
) {

  console.warn(
    "Einige Login-Elemente wurden im HTML nicht gefunden."
  );

}


// Beim ersten Laden Vokabelansicht vorbereiten
if (learningArea) {

  renderLearning();

}
```
