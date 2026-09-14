let user=null,klasse=0,points=0,vi=0,qi=0,gi=0,ei=0;
const vocab={1:[["house","Haus"],["school","Schule"],["book","Buch"],["cat","Katze"],["dog","Hund"]],2:[["weather","Wetter"],["holiday","Urlaub"],["family","Familie"],["morning","Morgen"],["sometimes","manchmal"]],3:[["environment","Umwelt"],["experience","Erfahrung"],["important","wichtig"],["future","Zukunft"],["solution","Lösung"]],4:[["achievement","Erfolg"],["opportunity","Möglichkeit"],["responsibility","Verantwortung"],["decision","Entscheidung"],["improve","verbessern"]]};
const quiz={1:[["What is Hund?",["cat","dog","house"],"dog"],["What is Buch?",["book","school","food"],"book"]],2:[["What is Wetter?",["weather","holiday","country"],"weather"],["What is manchmal?",["usually","sometimes","morning"],"sometimes"]],3:[["What is Umwelt?",["environment","experience","solution"],"environment"],["What is Zukunft?",["future","problem","different"],"future"]],4:[["What is Möglichkeit?",["decision","opportunity","development"],"opportunity"],["What is verbessern?",["improve","independent","relationship"],"improve"]]};
const grammar={1:[["To be","I am, you are, he/she/it is.","I am happy."],["Simple Present","Für regelmäßige Handlungen.","She plays football."]],2:[["Simple Past","Für abgeschlossene Handlungen in der Vergangenheit.","I visited London."],["Going to","Für Pläne und Vorhaben.","I am going to study."]],3:[["Present Perfect","have/has + past participle.","I have visited London."],["Comparatives","Vergleiche: smaller, faster, more interesting.","This book is more interesting."]],4:[["Passive Voice","be + past participle.","The book was written in 2020."],["Conditional","If + Bedingung, dann mögliche Folge.","If I study, I will learn."]]};
const exercise={1:[["I ___ a student.",["am","is","are"],"am"],["She ___ a cat.",["have","has","having"],"has"]],2:[["Yesterday I ___ football.",["play","played","playing"],"played"],["We are ___ to travel.",["going","go","went"],"going"]],3:[["I have ___ my homework.",["finish","finished","finishing"],"finished"],["A car is ___ than a bicycle.",["fast","faster","fastest"],"faster"]],4:[["The letter ___ written yesterday.",["was","were","is"],"was"],["If I study, I ___ pass.",["will","would","am"],"will"]]};

function accounts(){return JSON.parse(localStorage.getItem("englishAccounts")||"{}")}
function save(a){localStorage.setItem("englishAccounts",JSON.stringify(a))}
function err(t){document.getElementById("error").textContent=t}
function showRegister(){authTitle.textContent="Account erstellen";authMessage.textContent="Wähle Username und Passwort.";authBtn.textContent="Registrieren";authBtn.onclick=register;switchBtn.textContent="Ich habe schon einen Account";switchBtn.onclick=showLogin;err("")}
function showLogin(){authTitle.textContent="Anmelden";authMessage.textContent="Melde dich mit deinem Account an.";authBtn.textContent="Einloggen";authBtn.onclick=login;switchBtn.textContent="Noch keinen Account? Registrieren";switchBtn.onclick=showRegister;err("")}
function register(){let u=username.value.trim(),p=password.value,a=accounts();if(u.length<3)return err("Username: mindestens 3 Zeichen.");if(p.length<4)return err("Passwort: mindestens 4 Zeichen.");if(a[u])return err("Dieser Username existiert schon.");a[u]={password:p,points:0};save(a);login()}
function login(){let u=username.value.trim(),p=password.value,a=accounts();if(!a[u]||a[u].password!==p)return err("Username oder Passwort ist falsch.");user=u;points=a[u].points||0;localStorage.setItem("englishCurrentUser",u);openApp()}
function openApp(){authPage.classList.add("hidden");appPage.classList.remove("hidden");name.textContent=user;pointsEl();userArea.innerHTML="<b>👤 "+user+"</b><br><button onclick='logout()'>Ausloggen</button>"}
function logout(){localStorage.removeItem("englishCurrentUser");location.reload()}
function pointsEl(){document.getElementById("points").textContent=points}
function add(n){points+=n;let a=accounts();a[user].points=points;save(a);pointsEl()}
function selectClass(n){klasse=n;learning.classList.remove("hidden");classTitle.textContent=n+". Klasse";show("vocab")}
function show(s){["vocab","quiz","grammar","exercise"].forEach(x=>document.getElementById(x).classList.add("hidden"));document.getElementById(s).classList.remove("hidden");if(s==="vocab")renderV();if(s==="quiz")renderQ();if(s==="grammar")renderG();if(s==="exercise")renderE()}
function renderV(){word.textContent=vocab[klasse][vi][0];answer.textContent=vocab[klasse][vi][1];answer.classList.add("hidden")}
function reveal(){answer.classList.remove("hidden")}
function nextVocab(){vi=(vi+1)%vocab[klasse].length;renderV()}
function known(){add(10);nextVocab()}
function renderQ(){let x=quiz[klasse][qi];q.textContent=x[0];qf.textContent="";qa.innerHTML=x[1].map(a=>"<button onclick="aq('"+a+"')">"+a+"</button>").join("")}
function aq(a){let x=quiz[klasse][qi];if(a===x[2]){qf.textContent="✅ Richtig! +20";add(20)}else qf.textContent="❌ Richtig ist: "+x[2];qi=(qi+1)%quiz[klasse].length;setTimeout(renderQ,800)}
function renderG(){let x=grammar[klasse][gi];gt.textContent=x[0];gx.textContent=x[1];ge.textContent=x[2]}
function nextGrammar(){gi=(gi+1)%grammar[klasse].length;renderG()}
function renderE(){let x=exercise[klasse][ei];eq.textContent=x[0];ef.textContent="";ea.innerHTML=x[1].map(a=>"<button onclick="ae('"+a+"')">"+a+"</button>").join("")}
function ae(a){let x=exercise[klasse][ei];if(a===x[2]){ef.textContent="✅ Richtig! +15";add(15)}else ef.textContent="❌ Richtig ist: "+x[2];ei=(ei+1)%exercise[klasse].length;setTimeout(renderE,800)}
window.onload=()=>{let u=localStorage.getItem("englishCurrentUser"),a=accounts();if(u&&a[u]){user=u;points=a[u].points||0;openApp()}else showLogin()};