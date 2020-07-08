const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timerDisplay = document.querySelector('.display__time-left');
let lastHole; // flag to don't repeat random hole
let timeUp = false;
let score = 0;
let countdown;

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function displayMole() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) displayMole();
	}, time);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	displayMole();
	timer(10);
	setTimeout(() => {
		timeUp = true;
		startBtn.disabled = false;
	}, 10000);
}

function countMole(e) {
	if (!e.isTrusted) return; // cheater!
	score++;
	this.parentNode.classList.remove('up');
	scoreBoard.textContent = score;
}

function timer(seconds) {
	//clear any existing timers
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds); // start countdown

	countdown = setInterval(() => {
		const secondsLeft = Math.round(then - Date.now()) / 1000;
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const remainderSeconds = Math.floor(seconds % 60);
	const display = `0:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
}

moles.forEach((mole) => mole.addEventListener('click', countMole));

startBtn.addEventListener('click', function () {
	if (this.disabled == false) {
		this.disabled = true;
		startGame();
	}
});
