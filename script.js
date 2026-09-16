```js
/*
  ENGLISH MASTER – Supabase-Version

  Der Login / die Registrierung entspricht deinem ursprünglichen
  script.js. Geändert wurde nur das Lern- und Quizsystem.
*/

const SUPABASE_URL = "https://amrqkjyemjpyxxyugwy4.supabase.co";
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

    grammar: "To be: I am, you are, he/she/it is, we are, you are, they are.",
    example: "I am a student. / You are my friend. / She is happy."
  },


  2: {
    units: {
      1: [
        ["ship", "Schiff", ""],
        ["sea", "Meer", ""],
        ["treasure", "Schatz", ""],
        ["pirate", "Pirat", ""],
        ["hook", "Haken", ""],
        ["wooden leg", "Holzbein", ""],
        ["also", "auch", "Tamara is also a pirate."],
        ["famous", "berühmt", "Greybeard is a famous pirate."],
        ["him", "ihm / ihn", "Peter is nice. We like him."],
        ["his", "sein / seine", "His pirate name is Blackbeard."],
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
      ],

      3: [
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

      4: [
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

    grammar: "Simple Present: I play, you play, he/she/it plays. Bei he/she/it kommt meistens -s dazu.",
    example: "I play football. / He plays football. / They like music."
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
      ]
    },

    grammar: "Past Simple: regelmäßige Verben bekommen oft -ed. Beispiel: play → played, visit → visited.",
    example: "I visited London last year. / We played yesterday."
  },


  4: {
    units: {
      1: [
        ["opportunity", "Möglichkeit", ""],
        ["experience", "Erfahrung", ""],
        ["decision", "Entscheidung", ""],
        ["although", "obwohl", ""],
        ["however", "jedoch", ""],
        ["improve", "verbessern", ""],
        ["probably", "wahrscheinlich", ""],
        ["future", "Zukunft", ""],
        ["responsibility", "Verantwortung", ""],
        ["achievement", "Erfolg/Leistung", ""]
      ]
    },

    grammar: "First Conditional: If + Simple Present, will + Verb. Beispiel: If I study, I will learn more.",
    example: "If it rains, we will stay at home. / If you practise, you will improve."
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
// ORIGINALER LOGIN
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


loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);


logoutButton.addEventListener("click", async () => {

  await supabaseClient.auth.signOut();

  showAuth();

});


// ============================================================
// SESSION
// ============================================================

supabaseClient.auth.getSession().then(
  async ({ data }) => {

    if (data.session?.user) {
      await showApp(data.session.user);
    }

  }
);


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
// VOKABEL-HILFSFUNKTIONEN
// ============================================================

function getAllVocab(classNumber) {

  const units =
    lessons[classNumber]?.units || {};

  return Object.entries(units).flatMap(
    ([unitNumber, words]) =>
      words.map(word => ({
        en: word[0],
        de: word[1],
        example: word[2],
        unit: Number(unitNumber)
      }))
  );
}


function getUnitVocab(classNumber, unitNumber) {

  const words =
    lessons[classNumber]?.units?.[unitNumber] || [];

  return words.map(word => ({
    en: word[0],
    de: word[1],
    example: word[2],
    unit: Number(unitNumber)
  }));
}


// ============================================================
// LERNMODI
// ============================================================

document.querySelectorAll(".class-btn").forEach(
  button => {

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

      quizType = "all";
      quizUnit = "all";

      renderLearning();
    });

  }
);


document.querySelectorAll(".mode-btn").forEach(
  button => {

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

  }
);


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
// UNIT-SYSTEM BLEIBT ERHALTEN
// ============================================================

function renderVocab() {

  const units =
    lessons[currentClass]?.units || {};

  const unitNumbers =
    Object.keys(units)
      .map(Number)
      .sort((a, b) => a - b);

  learningArea.innerHTML = `

    <div class="vocab-header">

      <div>
        <h2>📚 Vokabeln – ${currentClass}. Klasse</h2>
        <p>Wähle eine Unit aus.</p>
      </div>

    </div>

    <div class="unit-list">

      ${unitNumbers.map(unitNumber => {

        const words = units[unitNumber];

        return `

          <details class="unit">

            <summary>
              Unit ${unitNumber}
              <span>${words.length} Vokabeln</span>
            </summary>

            <div class="unit-content">

              <div class="content-grid">

                ${words.map(
                  ([en, de, example]) => `

                    <div class="vocab-card">

                      <strong>${escapeHtml(en)}</strong>

                      <span>
                        ${escapeHtml(de)}
                      </span>

                      ${
                        example
                          ? `
                            <small>
                              ${escapeHtml(example)}
                            </small>
                          `
                          : ""
                      }

                    </div>

                  `
                ).join("")}

              </div>

            </div>

          </details>

        `;

      }).join("")}

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

      <strong>Beispiele:</strong>

      <br><br>

      ${escapeHtml(lesson.example)}

    </div>
  `;
}


// ============================================================
// QUIZ
// ============================================================

function renderQuiz() {

  const allVocab =
    getAllVocab(currentClass);

  if (!allVocab.length) {

    learningArea.innerHTML = `
      <h2>🧠 Quiz</h2>
      <p>Für diese Klasse sind noch keine Vokabeln vorhanden.</p>
    `;

    return;
  }


  // ----------------------------------------------------------
  // Auswahlbildschirm
  // ----------------------------------------------------------

  if (!quizType || quizType === "select") {

    renderQuizSelection();

    return;
  }


  let words = [];

  if (quizType === "all") {

    words = allVocab;

  } else if (quizType === "unit") {

    words =
      getUnitVocab(
        currentClass,
        quizUnit
      );
  }


  if (!words.length) {

    learningArea.innerHTML = `

      <h2>🧠 Quiz</h2>

      <p>
        Für diese Auswahl gibt es keine Vokabeln.
      </p>

      <button
        id="backToQuizSelection"
        class="secondary-btn"
      >
        ← Auswahl ändern
      </button>

    `;

    document
      .getElementById("backToQuizSelection")
      .addEventListener(
        "click",
        () => {

          quizType = "select";

          renderQuiz();

        }
      );

    return;
  }


  // ----------------------------------------------------------
  // Zufällige Vokabeln
  // ----------------------------------------------------------

  if (currentQuestion >= words.length) {
    currentQuestion = 0;
  }

  const word =
    words[currentQuestion];


  const options =
    createQuizOptions(
      word,
      allVocab
    );


  learningArea.innerHTML = `

    <div class="quiz-header">

      <div>

        <h2>
          🧠 Quiz – ${currentClass}. Klasse
        </h2>

        <p>
          Frage ${currentQuestion + 1}
          von ${words.length}
        </p>

      </div>

      <button
        id="changeQuizSelection"
        class="secondary-btn"
      >
        ⚙ Auswahl ändern
      </button>

    </div>


    <h3>
      Was bedeutet
      „${escapeHtml(word.en)}“?
    </h3>


    <div id="quizOptions">

      ${options.map(
        (option, index) => `

          <button
            class="quiz-option"
            data-answer="${index}"
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

  `;


  document
    .getElementById("changeQuizSelection")
    .addEventListener(
      "click",
      () => {

        quizType = "select";

        currentQuestion = 0;

        renderQuiz();

      }
    );


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
            selected ===
            options.indexOf(word.de)
          ) {

            result.textContent =
              "✅ Richtig! +10 Punkte";

            result.style.color =
              "#18794e";

            await addPoints(10);

          } else {

            result.textContent =
              `❌ Nicht ganz. Richtig wäre: ${word.de}`;

            result.style.color =
              "#c0392b";
          }


          setTimeout(() => {

            currentQuestion++;

            if (
              currentQuestion >=
              words.length
            ) {

              currentQuestion = 0;
            }

            renderQuiz();

          }, 1200);

        }
      );

    });
}


// ============================================================
// QUIZ AUSWAHL
// ============================================================

function renderQuizSelection() {

  const units =
    lessons[currentClass]?.units || {};

  const unitNumbers =
    Object.keys(units)
      .map(Number)
      .sort((a, b) => a - b);


  learningArea.innerHTML = `

    <h2>
      🧠 Quiz – ${currentClass}. Klasse
    </h2>

    <p>
      Wähle aus, welche Vokabeln du abfragen möchtest.
    </p>


    <div class="quiz-selection">

      <button
        class="quiz-selection-btn"
        data-quiz-type="all"
      >
        📚 Alle Vokabeln
        <span>
          ${getAllVocab(currentClass).length}
          Vokabeln
        </span>
      </button>


      <div class="quiz-unit-selection">

        <h3>
          📖 Bestimmte Unit
        </h3>

        <div class="quiz-unit-buttons">

          ${unitNumbers.map(unitNumber => `

            <button
              class="quiz-selection-btn"
              data-quiz-type="unit"
              data-unit="${unitNumber}"
            >
              Unit ${unitNumber}
              <span>
                ${units[unitNumber].length}
                Vokabeln
              </span>
            </button>

          `).join("")}

        </div>

      </div>


      <button
        class="quiz-selection-btn"
        data-quiz-type="grammar"
        id="grammarQuizButton"
      >
        📖 Grammatik
        <span>
          Grammatik-Quiz
        </span>
      </button>

    </div>

  `;


  document
    .querySelectorAll(
      ".quiz-selection-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const type =
            button.dataset.quizType;


          if (type === "all") {

            quizType = "all";
            currentQuestion = 0;

            renderQuiz();

          }


          if (type === "unit") {

            quizType = "unit";

            quizUnit =
              Number(
                button.dataset.unit
              );

            currentQuestion = 0;

            renderQuiz();

          }


          if (type === "grammar") {

            renderGrammarQuiz();

          }

        }
      );

    });
}


// ============================================================
// QUIZ-OPTIONEN
// ============================================================

function createQuizOptions(
  correctWord,
  allVocab
) {

  const wrongWords =
    allVocab
      .filter(
        word =>
          word.en !== correctWord.en
      )
      .map(
        word => word.de
      );


  const uniqueWrong =
    [...new Set(wrongWords)]
      .sort(
        () => Math.random() - 0.5
      )
      .slice(0, 2);


  const options = [
    correctWord.de,
    ...uniqueWrong
  ];


  return options.sort(
    () => Math.random() - 0.5
  );
}


// ============================================================
// GRAMMATIK-QUIZ
// ============================================================

function renderGrammarQuiz() {

  const grammarQuestions = {

    1: [
      {
        q: "Welche Form ist richtig? I ___ happy.",
        options: ["am", "is", "are"],
        answer: 0
      },
      {
        q: "Welche Form ist richtig? She ___ from England.",
        options: ["are", "is", "am"],
        answer: 1
      }
    ],

    2: [
      {
        q: "Welche Form ist richtig? He ___ football.",
        options: ["play", "plays", "playing"],
        answer: 1
      },
      {
        q: "Welche Form ist richtig? They ___ music.",
        options: ["like", "likes", "liking"],
        answer: 0
      }
    ],

    3: [
      {
        q: "Welche Vergangenheitsform stimmt? visit → ___",
        options: ["visited", "visiting", "visits"],
        answer: 0
      },
      {
        q: "Welche Vergangenheitsform stimmt? play → ___",
        options: ["plays", "played", "playing"],
        answer: 1
      }
    ],

    4: [
      {
        q: "If I study, I ___ learn more.",
        options: ["will", "am", "did"],
        answer: 0
      },
      {
        q: "If it rains, we ___ stay at home.",
        options: ["will", "are", "did"],
        answer: 0
      }
    ]

  };


  const questions =
    grammarQuestions[currentClass] || [];

  if (!questions.length) {

    learningArea.innerHTML = `
      <h2>📖 Grammatik-Quiz</h2>
      <p>Für diese Klasse gibt es noch kein Grammatik-Quiz.</p>
    `;

    return;
  }


  if (
    currentQuestion >=
    questions.length
  ) {
    currentQuestion = 0;
  }


  const q =
    questions[currentQuestion];


  learningArea.innerHTML = `

    <div class="quiz-header">

      <div>

        <h2>
          📖 Grammatik-Quiz
        </h2>

        <p>
          Frage ${currentQuestion + 1}
          von ${questions.length}
        </p>

      </div>

      <button
        id="backToQuiz"
        class="secondary-btn"
      >
        ← Quiz-Auswahl
      </button>

    </div>


    <h3>
      ${escapeHtml(q.q)}
    </h3>


    <div id="quizOptions">

      ${q.options.map(
        (option, index) => `

          <button
            class="quiz-option"
            data-answer="${index}"
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

  `;


  document
    .getElementById("backToQuiz")
    .addEventListener(
      "click",
      () => {

        currentQuestion = 0;

        quizType = "select";

        renderQuiz();

      }
    );


  document
    .querySelectorAll(".quiz-option")
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
            .forEach(
              b => b.disabled = true
            );


          if (
            selected === q.answer
          ) {

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
              (
                currentQuestion + 1
              ) % questions.length;

            renderGrammarQuiz();

          }, 1200);

        }
      );

    });
}


// ============================================================
// ÜBUNGEN
// ============================================================

function renderExercise() {

  const words =
    getAllVocab(currentClass);

  const randomWord =
    words[
      Math.floor(
        Math.random() * words.length
      )
    ];


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

      <br><br>

      Verwende das Wort

      <strong>
        ${escapeHtml(randomWord.en)}
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
  } = await supabaseClient.rpc(
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
    data.map(
      user => `

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
            ${new Date(
              user.created_at
            ).toLocaleDateString("de-AT")}
          </td>

        </tr>

      `
    ).join("");


  setAdminMessage(
    `${data.length} Benutzer gefunden.`,
    false
  );
}


function escapeHtml(value) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );
}


if (refreshAdmin) {

  refreshAdmin.addEventListener(
    "click",
    loadAdminUsers
  );

}
```
