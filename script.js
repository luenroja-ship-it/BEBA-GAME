const introScreen = document.getElementById('intro-screen');
const enterBtn = document.getElementById('enter-btn');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

const usernameInput = document.getElementById('username');
const greetingEl = document.getElementById('greeting');
const livesEl = document.getElementById('lives');
const qnumEl = document.getElementById('qnum');
const questionText = document.getElementById('question-text');
const answersEl = document.getElementById('answers');

const restartBtn = document.getElementById('restart-btn');

const sfxStart = document.getElementById('sfx-start');
const sfxGhost = document.getElementById('sfx-ghost');
const sfxWitch = document.getElementById('sfx-witch');
const bgMusic = document.getElementById('music-bg');

const QUESTIONS = [
  {q:"¿Cuándo nos hicimos novios?", a:["16/01/22","16/01/23","15/01/22"], correct:0},
  {q:"¿Cómo se llamaba el lugar donde nos conocimos?", a:["Eterno","Xtasis","Xcso"], correct:1},
  {q:"¿En que año nos conocimos?", a:["2022","2021","2019"], correct:1},
  {q:"¿Qué vestida nos presentó?", a:["Isaí","Lady Gaga","Alexis"], correct:2},
  {q:"¿Cuál fue la prima ciudad a la que fuimos de viaje?", a:["Sayulita","Guanajuato","CDMX"], correct:1},
  {q:"¿Cuántos años cumplimos de novios en enero 2026?", a:["4","5","3"], correct:0},
  {q:"¿Cuál era nuestra actividad principal cuando nos conocimos?", a:["salir a correr","ir a comer pozole","salir a caminar"], correct:2},
  {q:"¿Quien envio le envio el primer mensaje al otro?", a:["Andres","Enrique"], correct:0},
  {q:"Cual fue la primera playa que conocimos juntos?", a:["PV","Playa del Carmen","Sayulita"], correct:2},
  {q:"Quien dijo primero te amo?", a:["Andres","Enrique"], correct:0}
];

let current = 0;
let lives = 3;
let user = "";

function safePlay(audio){
  if(!audio) return;
  try{ audio.currentTime = 0; audio.play().catch(()=>{}); }catch(e){}
}

enterBtn.addEventListener('click', ()=> {
  safePlay(sfxStart);
  introScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});

startBtn.addEventListener('click', ()=> {
  user = usernameInput.value.trim() || "Monster";
  greetingEl.textContent = `HELLO ${user}monster!`;
  safePlay(sfxStart);
  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  current = 0; lives = 3;
  renderQuestion();
  safePlay(bgMusic);
});

function renderLives(){
  livesEl.innerHTML = "";
  for(let i=0;i<lives;i++){
    livesEl.innerHTML += "🧙‍♀️ ";
  }
}

function renderQuestion(){
  if(current >= QUESTIONS.length){
    showResult(true);
    return;
  }
  qnumEl.textContent = (current+1);
  const q = QUESTIONS[current];
  questionText.textContent = q.q;
  answersEl.innerHTML = "";
  const icons = ["🧟","🧙‍♀️","🧛"];
  const classes = ["opt-zombie","opt-witch","opt-vamp"];
  for(let i=0;i<q.a.length;i++){
    const b = document.createElement('button');
    b.className = "answer-btn " + classes[i%3];
    b.innerHTML = '<span class="icon">'+icons[i%3]+'</span><span class="label">'+q.a[i]+'</span>';
    b.onclick = ()=> handleAnswer(i);
    answersEl.appendChild(b);
  }
  renderLives();
}

function handleAnswer(idx){
  const q = QUESTIONS[current];
  if(idx === q.correct){
    safePlay(sfxWitch);
  } else {
    safePlay(sfxGhost);
    lives--;
    if(lives <= 0){
      showResult(false);
      return;
    }
  }
  current++;
  setTimeout(()=> renderQuestion(), 350);
}

function showResult(win){
  gameScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  const title = document.getElementById('result-title');
  const sub = document.getElementById('result-sub');
  if(win){
    title.innerHTML = '🧙‍♀️ PLAYA DEL CARMEN';
    sub.innerHTML = 'del 17 al 24 de marzo del 2026<br><small>incluye ✈️ 🏨</small>';
  } else {
    title.innerHTML = '💀 Te quedaste sin vidas';
    sub.innerHTML = 'Vuelve a intentarlo si te atreves...';
  }
  try{ bgMusic.pause(); bgMusic.currentTime=0; }catch(e){}
}

restartBtn.addEventListener('click', ()=> {
  resultScreen.classList.add('hidden');
  introScreen.classList.remove('hidden');
});
