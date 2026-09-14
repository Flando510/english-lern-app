let klasse = 1;
let punkte = Number(localStorage.getItem("englishMasterPunkte") || 0);
let wortIndex = 0;
let quizIndex = 0;
let grammatikIndex = 0;
let uebungIndex = 0;

const vokabeln = {
    1: [["house","Haus"],["school","Schule"],["book","Buch"],["cat","Katze"],["dog","Hund"],["friend","Freund"],["water","Wasser"],["food","Essen"]],
    2: [["weather","Wetter"],["holiday","Urlaub"],["family","Familie"],["country","Land"],["morning","Morgen"],["evening","Abend"],["usually","normalerweise"],["sometimes","manchmal"]],
    3: [["environment","Umwelt"],["experience","Erfahrung"],["important","wichtig"],["different","verschieden"],["future","Zukunft"],["problem","Problem"],["solution","Lösung"],["dangerous","gefährlich"]],
    4: [["achievement","Erfolg / Leistung"],["opportunity","Möglichkeit"],["responsibility","Verantwortung"],["decision","Entscheidung"],["development","Entwicklung"],["relationship","Beziehung"],["independent","selbstständig"],["improve","verbessern"]]
};

const quizfragen = {
    1: [
        ["Was bedeutet „cat“?",["Hund","Katze","Haus","Schule"],1],
        ["Was bedeutet „book“?",["Buch","Tisch","Stuhl","Fenster"],0],
        ["Was bedeutet „water“?",["Milch","Saft","Wasser","Brot"],2]
    ],
    2: [
        ["Was bedeutet „weather“?",["Wetter","Winter","Wald","Wind"],0],
        ["Was bedeutet „family“?",["Freund","Familie","Lehrer","Nachbar"],1],
        ["Was bedeutet „usually“?",["selten","niemals","normalerweise","gestern"],2]
    ],
    3: [
        ["Was bedeutet „future“?",["Vergangenheit","Gegenwart","Zukunft","Geschichte"],2],
        ["Was bedeutet „dangerous“?",["sicher","gefährlich","langweilig","einfach"],1],
        ["Was bedeutet „solution“?",["Lösung","Frage","Fehler","Regel"],0]
    ],
    4: [
        ["Was bedeutet „responsibility“?",["Möglichkeit","Verantwortung","Entscheidung","Entwicklung"],1],
        ["Was bedeutet „achievement“?",["Problem","Erfolg","Zukunft","Umwelt"],1],
        ["Was bedeutet „independent“?",["abhängig","selbstständig","langsam","laut"],1]
    ]
};

const grammatik = {
    1: [["To be","„to be“ bedeutet „sein“. Formen sind: I am, you are, he/she/it is.","I am a student.<br>You are my friend."],["Simple Present","Das Simple Present wird für regelmäßige Handlungen und Fakten verwendet.","I play football.<br>She plays football."]],
    2: [["Simple Past","Das Simple Past beschreibt abgeschlossene Handlungen in der Vergangenheit.","I played football yesterday."],["Going to","„be going to“ kann für Pläne und Absichten verwendet werden.","I am going to visit London."]],
    3: [["Present Perfect","Das Present Perfect verbindet Vergangenheit und Gegenwart. Häufig: have/has + past participle.","I have visited London."],["Comparatives","Vergleiche verwenden oft -er oder „more“.","This book is easier than that one."]],
    4: [["Passive Voice","Beim Passiv steht die Handlung bzw. das Objekt im Mittelpunkt.","The book was written in 2025."],["Conditional","Der First Conditional beschreibt eine mögliche Situation und ihre Folge.","If I study, I will pass the test."]]
};

const uebungen = {
    1: [["Wähle die richtige Form: „She ___ a student.“",["am","is","are","be"],1],["„I ___ football.“",["plays","play","playing","played"],1]],
    2: [["„Yesterday I ___ to school.“",["go","goes","went","going"],2],["„He ___ usually at seven.“",["gets up","get up","got up","getting up"],0]],
    3: [["„I have ___ my homework.“",["do","did","done","doing"],2],["„This test is ___ than the last one.“",["easy","easier","easiest","more easy"],1]],
    4: [["„The song ___ by a famous singer.“",["was written","wrote","writes","is writing"],0],["„If I study, I ___ the test.“",["passed","pass","will pass","passing"],2]]
};

function zeige(id) {
    document.querySelectorAll(".seite").forEach(s => s.classList.remove("aktiv"));
    document.getElementById(id).classList.add("aktiv");
    window.scrollTo(0,0);
}

function klasseWaehlen(n) {
    klasse = n;
    wortIndex = quizIndex = grammatikIndex = uebungIndex = 0;
    document.getElementById("klassenTitel").textContent = n + ". Klasse";
    zeige("menue");
}

function punkteAktualisieren() {
    document.getElementById("punkte").textContent = punkte;
    localStorage.setItem("englishMasterPunkte", punkte);
}

function vokabelStarten() {
    wortIndex = 0;
    zeige("vokabeln");
    neuesWort();
}

function neuesWort() {
    const w = vokabeln[klasse][wortIndex];
    document.getElementById("wort").textContent = w[0];
    document.getElementById("wortAntwort").textContent = "Klicke auf „Antwort zeigen“.";
}

function antwortZeigen() {
    document.getElementById("wortAntwort").textContent = vokabeln[klasse][wortIndex][1];
}

function naechstesWort() {
    wortIndex = (wortIndex + 1) % vokabeln[klasse].length;
    neuesWort();
}

function vokabelGewusst() {
    punkte += 10;
    punkteAktualisieren();
    naechstesWort();
}

function quizStarten() {
    quizIndex = 0;
    zeige("quiz");
    neueQuizfrage();
}

function neueQuizfrage() {
    const q = quizfragen[klasse][quizIndex];
    document.getElementById("quizNummer").textContent = "Frage " + (quizIndex + 1);
    document.getElementById("quizFrage").textContent = q[0];
    document.getElementById("quizErgebnis").textContent = "";
    const box = document.getElementById("quizAntworten");
    box.innerHTML = "";
    q[1].forEach((a,i) => {
        const b = document.createElement("button");
        b.textContent = a;
        b.onclick = () => quizAntwort(i);
        box.appendChild(b);
    });
}

function quizAntwort(i) {
    const q = quizfragen[klasse][quizIndex];
    const ergebnis = document.getElementById("quizErgebnis");
    if (i === q[2]) {
        ergebnis.textContent = "✅ Richtig! +20 Punkte";
        punkte += 20;
        punkteAktualisieren();
    } else {
        ergebnis.textContent = "❌ Leider falsch.";
    }
    setTimeout(() => {
        quizIndex = (quizIndex + 1) % quizfragen[klasse].length;
        neueQuizfrage();
    }, 900);
}

function grammatikStarten() {
    grammatikIndex = 0;
    zeige("grammatik");
    neueGrammatik();
}

function neueGrammatik() {
    const g = grammatik[klasse][grammatikIndex];
    document.getElementById("grammatikLevel").textContent = klasse + ". Klasse · Mittelschule";
    document.getElementById("grammatikTitel").textContent = g[0];
    document.getElementById("grammatikText").textContent = g[1];
    document.getElementById("grammatikBeispiel").innerHTML = "<b>Beispiel:</b><br>" + g[2];
}

function naechsteGrammatik() {
    grammatikIndex = (grammatikIndex + 1) % grammatik[klasse].length;
    neueGrammatik();
}

function uebungStarten() {
    uebungIndex = 0;
    zeige("uebungen");
    neueUebung();
}

function neueUebung() {
    const u = uebungen[klasse][uebungIndex];
    document.getElementById("uebungKlasse").textContent = klasse + ". Klasse · Mittelschule";
    document.getElementById("uebungFrage").textContent = u[0];
    document.getElementById("uebungErgebnis").textContent = "";
    const box = document.getElementById("uebungAntworten");
    box.innerHTML = "";
    u[1].forEach((a,i) => {
        const b = document.createElement("button");
        b.textContent = a;
        b.onclick = () => uebungAntwort(i);
        box.appendChild(b);
    });
}

function uebungAntwort(i) {
    const u = uebungen[klasse][uebungIndex];
    const e = document.getElementById("uebungErgebnis");
    if (i === u[2]) {
        e.textContent = "✅ Richtig! +15 Punkte";
        punkte += 15;
        punkteAktualisieren();
    } else {
        e.textContent = "❌ Nicht ganz. Versuch es bei der nächsten Aufgabe wieder.";
    }
    setTimeout(() => {
        uebungIndex = (uebungIndex + 1) % uebungen[klasse].length;
        neueUebung();
    }, 900);
}

punkteAktualisieren();
