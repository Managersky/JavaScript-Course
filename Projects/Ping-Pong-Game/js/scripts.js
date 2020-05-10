const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//widht and height of canvas
canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const paddelWidth = 20;
const paddelHeight = 100;

const playerX = 70; //position X of player paddel
let playerY = 200;

function player() {
	ctx.fillStyle = 'green';
	ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

const aiX = 910; //position X of AI paddel
let aiY = 200;

function ai() {
	ctx.fillStyle = 'yellow';
	ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2; // from 490 to 510 px
let ballY = ch / 2 - ballSize / 2; // from 240 to 260 px
let ballSpeedX = 1;
let ballSpeedY = 1;

function ball() {
	ctx.fillStyle = 'white';
	ctx.fillRect(ballX, ballY, ballSize, ballSize);
	//speed ball
	ballX += ballSpeedX;
	ballY += ballSpeedY;
	//
	if (ballY <= 0 || ballY + ballSize >= ch) {
		ballSpeedY = -ballSpeedY;
		speedUp();
	}

	if (ballX <= 0 || ballX + ballSize >= cw) {
		ballSpeedX = -ballSpeedX;
		speedUp();
	}

	if (
		ballX <= playerX + paddelWidth &&
		ballX >= playerX &&
		ballY + ballSize >= playerY &&
		ballY <= playerY + paddelHeight
	) {
		ballSpeedX *= -1;
		ballX = playerX + paddelWidth;
		speedUp();
	}

	if (
		ballX + ballSize >= aiX &&
		ballX + ballSize <= aiX + paddelWidth &&
		ballY + ballSize >= aiY &&
		ballY <= aiY + paddelHeight
	) {
		ballSpeedX *= -1;
		ballX = aiX - ballSize;
		speedUp();
	}
}

function table() {
	//table
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, cw, ch); //method fillRect(x,y,width,height)
	//middle line
	const lineWidth = 6;
	const lineHeight = 16;
	for (let linePosition = 20; linePosition < ch; linePosition += 30) {
		ctx.fillStyle = 'gray';
		ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
	}
}

topCanvas = canvas.offsetTop;

function playerPosition(e) {
	playerY = e.clientY - topCanvas - paddelHeight / 2; //draw paddel in the middle

	if (playerY >= ch - paddelHeight) {
		playerY = ch - paddelHeight;
	}

	if (playerY <= 0) {
		playerY = 0;
	}
}

function aiPosition() {
	const middlePaddel = aiY + paddelHeight / 2;
	const middleBall = ballY + ballSize / 2;

	if (ballX > 500) {
		if (middlePaddel - middleBall > 200) {
			aiY -= 15;
		} else if (middlePaddel - middleBall > 50) {
			aiY -= 8;
		} else if (middlePaddel - middleBall < -200) {
			aiY += 15;
		} else if (middlePaddel - middleBall < -50) {
			aiY += 8;
		}
	} else if (ballX <= 500 && ballX > 150) {
		if (middlePaddel - middleBall > 100) {
			aiY -= 4;
		} else if (middlePaddel - middleBall < -100) {
			aiY += 4;
		}
	}
}

canvas.addEventListener('mousemove', playerPosition);

function speedUp() {
	if (ballSpeedX > 0 && ballSpeedX < 16) {
		ballSpeedX += 1;
	} else if (ballSpeedX < 0 && ballSpeedX < -16) {
		ballSpeedX -= 1;
	}

	if (ballSpeedY > 0 && ballSpeedY < 16) {
		ballSpeedY += 1;
	} else if (ballSpeedY < 0 && ballSpeedY < -16) {
		ballSpeedY -= 1;
	}
}

function game() {
	table();
	ball();
	player();
	ai();
	aiPosition();
}

setInterval(game, 1000 / 60);
