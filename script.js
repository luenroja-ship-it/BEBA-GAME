const startBtn = document.getElementById('startBtn');
const usernameInput = document.getElementById('username');
const userInput = document.getElementById('userInput');
const gameContainer = document.getElementById('gameContainer');
const greeting = document.getElementById('greeting');
const questionContainer = document.getElementById('questionContainer');
const optionsContainer = document.getElementById('optionsContainer');
const resultContainer = document.getElementById('resultContainer');
const livesContainer = document.getElementById('lives');
const bgMusic = document.getElementById('bgMusic');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

let username = '';
let currentQuestion = 0;
let lives = 3;

const questions = [
    { question: '¿Qué criatura aparece solo en luna llena?', options: ['Vampiro', 'Hombre Lobo', 'Momia'], correct: 1 },
    { question: '¿Qué elemento no falta en un aquelarre?', options: ['Brujas', 'Zombis', 'Momias'], correct: 0 },
    { question: '¿Dónde descansarás en 2026?', options: ['Tulum', 'Cancún', 'Playa del Carmen'], correct: 2 }
];

startBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (!username) return alert('Ingresa tu nombre para comenzar');
    userInput.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    bgMusic.play();
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult(true);
        return;
    }
    const q = questions[currentQuestion];
    greeting.textContent = `👻 Hola ${username}monster!`;
    livesContainer.innerHTML = '❤️'.repeat(lives).replace(/❤️/g, '<img src="witch.png" alt="vida">');
    questionContainer.textContent = q.question;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `${opt}`;
        div.onclick = () => checkAnswer(i);
        optionsContainer.appendChild(div);
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.correct) {
        correctSound.play();
        currentQuestion++;
        loadQuestion();
    } else {
        wrongSound.play();
        lives--;
        if (lives <= 0) showResult(false);
        else loadQuestion();
    }
}

function showResult(win) {
    gameContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    if (win) {
        resultContainer.innerHTML = `🧙‍♀️ PLAYA DEL CARMEN<br>del 17 al 24 de marzo del 2026<br>✈️ 🏨`;
    } else {
        resultContainer.innerHTML = `💀 Has perdido todas tus vidas<br><button onclick="restart()">Volver a jugar</button>`;
    }
}

function restart() {
    currentQuestion = 0;
    lives = 3;
    resultContainer.classList.add('hidden');
    userInput.classList.remove('hidden');
}
