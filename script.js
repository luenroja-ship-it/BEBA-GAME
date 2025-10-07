const QUESTIONS=[
{q:"¿Cuándo nos hicimos novios?",a:["16/01/22","16/01/23","15/01/22"],correct:0},
{q:"¿Cómo se llamaba el lugar donde nos conocimos?",a:["Eterno","Xtasis","Xcso"],correct:1},
{q:"¿En que año nos conocimos?",a:["2022","2021","2019"],correct:2},
{q:"¿Qué vestida nos presentó?",a:["Isaí","Lady Gaga","Alexis"],correct:2},
{q:"¿Cuál fue la prima ciudad a la que fuimos de viaje?",a:["Sayulita","Guanajuato","CDMX"],correct:1},
{q:"¿Cuántos años cumplimos de novios en enero 2026?",a:["4","5","3"],correct:0},
{q:"¿Cuál era nuestra actividad principal cuando nos conocimos?",a:["salir a correr","ir a comer pozole","salir a caminar"],correct:2},
{q:"¿Quien envio le envio el primer mensaje al otro?",a:["Andres","Enrique"],correct:0},
{q:"Cual fue la primera playa que conocimos juntos?",a:["PV","Playa del Carmen","Sayulita"],correct:1},
{q:"Quien dijo primero te amo?",a:["Andres","Enrique"],correct:0}
];
const ASSETS={
bg:"https://cdn.pixabay.com/download/audio/2021/08/09/audio_6fb3b2b5b0.mp3?filename=creepy-horror-ambience-1153.mp3",
boo:"https://soundfxcenter.com/download/ghost-boo-sound-effect.mp3",
witch:"https://soundbible.com/mp3/Maniacal_Witches_Laugh.mp3",
start:"https://soundfxcenter.com/download/ghost-boo-sound-effect.mp3"
};
const startScreen=document.getElementById('start-screen'),
gameScreen=document.getElementById('game-screen'),
endScreen=document.getElementById('end-screen'),
usernameInput=document.getElementById('username'),
startBtn=document.getElementById('start-btn'),
greeting=document.getElementById('greeting'),
lifeIcons=document.getElementById('life-icons'),
questionText=document.getElementById('question-text'),
answersDiv=document.getElementById('answers'),
endTitle=document.getElementById('end-title'),
endSub=document.getElementById('end-sub'),
playAgainBtn=document.getElementById('play-again'),
bgAudio=document.getElementById('bg-audio'),
booSfx=document.getElementById('boo-sfx'),
witchSfx=document.getElementById('witch-laugh'),
startSfx=document.getElementById('start-sfx');
bgAudio.src=ASSETS.bg;booSfx.src=ASSETS.boo;witchSfx.src=ASSETS.witch;startSfx.src=ASSETS.start;
let currentIndex=0,lives=3,user="";
function setLives(n){lives=n;lifeIcons.innerHTML="";for(let i=0;i<lives;i++){const s=document.createElement('span');s.innerText="🧙‍♀️";s.style.marginRight="6px";lifeIcons.appendChild(s);}if(lives<=0)endGame(false);}
function playAudio(a){try{a.currentTime=0;a.volume=0.9;a.play().catch(()=>{});}catch(e){}}
startBtn.addEventListener('click',()=>{user=usernameInput.value.trim()||"Guest";greeting.innerText=`HELLO ${user}Monster!`;startScreen.classList.add('hidden');gameScreen.classList.remove('hidden');setLives(3);currentIndex=0;renderQuestion();playAudio(startSfx);bgAudio.volume=0.35;playAudio(bgAudio);});
function renderQuestion(){if(currentIndex>=QUESTIONS.length){endGame(true);return;}const q=QUESTIONS[currentIndex];questionText.innerText=`${currentIndex+1}. ${q.q}`;answersDiv.innerHTML="";for(let i=0;i<q.a.length;i++){const btn=document.createElement('button');btn.className='answer-btn';const icon=document.createElement('div');icon.className='answer-icon';const lbl=document.createElement('div');lbl.className='answer-label';lbl.innerText=q.a[i];if(i===0){btn.classList.add('btn-momia');icon.innerText='🧻';}if(i===1){btn.classList.add('btn-bruja');icon.innerText='🧙‍♀️';}if(i===2){btn.classList.add('btn-vamp');icon.innerText='🧛';}btn.appendChild(icon);btn.appendChild(lbl);btn.addEventListener('click',()=>handleAnswer(i));answersDiv.appendChild(btn);}}
function handleAnswer(i){const q=QUESTIONS[currentIndex];if(i===q.correct){playAudio(witchSfx);currentIndex++;setTimeout(()=>renderQuestion(),550);}else{playAudio(booSfx);setLives(lives-1);if(lives>0){currentIndex++;setTimeout(()=>renderQuestion(),600);}}}
function endGame(win){gameScreen.classList.add('hidden');endScreen.classList.remove('hidden');if(win){endTitle.innerText="PLAYA DEL CARMEN";endSub.innerText="del 17 al 24 de marzo del 2026";}else{endTitle.innerText="¡Te quedaste sin vidas!";endSub.innerText="Se reiniciará el juego.";}}
playAgainBtn.addEventListener('click',()=>{endScreen.classList.add('hidden');startScreen.classList.remove('hidden');usernameInput.value="";bgAudio.pause();bgAudio.currentTime=0;});
setLives(3);