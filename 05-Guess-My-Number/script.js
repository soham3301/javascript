"use strict";

const createRandomNumber = () => {
	const finalNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(`Random Number: ${finalNumber}`);
	return finalNumber;
};
let randomNumber = createRandomNumber();

let highScore = Number(document.querySelector(`.highscore`).textContent);
let score = Number(document.querySelector(`.score`).textContent);

const generateMessage = (randomNum, enteredNum) => {
	let msg = ``;
	if (randomNum === enteredNum) {
		msg = `Correct Guess...`;
	} else if (randomNum > enteredNum) {
		msg = `Too Low...`;
	} else {
		msg = `Too High...`;
	}
	return msg;
};

const decreaseScore = () => {
	score--;
	document.querySelector(`.score`).textContent = score;
};

const youWin = () => {
	score > highScore ? (highScore = score) : `ignore`;
	score = 20;
	document.querySelector(`.highscore`).textContent = highScore;
	document.querySelector(`body`).style.backgroundColor = `#60b347`;
	document.querySelector(`.number`).textContent = randomNumber;
	document.querySelector(`.number`).style.width = `30rem`;
};

const youLost = () => {
	document.querySelector(`.message`).textContent = `You lost the game...`;
	score = 20;
};

const checkMatch = (random, entered) => {
	if (score <= 0) {
		youLost();
	} else {
		random === entered ? youWin() : decreaseScore();
		const msgData = generateMessage(random, entered);
		document.querySelector(`.message`).textContent = msgData;
	}
};

//! Play Again
document.querySelector(`.again`).addEventListener(`click`, () => {
	randomNumber = createRandomNumber();
	document.querySelector(`.score`).textContent = 20;
	document.querySelector(`.message`).textContent = `Start Guessing...`;
	document.querySelector(`body`).style.backgroundColor = `#222`;
	document.querySelector(`.number`).textContent = `?`;
	document.querySelector(`.number`).style.width = `15rem`;
	document.querySelector(`.guess`).value = ``;
});

//! Enter Number
document.querySelector(`.check`).addEventListener(`click`, () => {
	const receivedValue = Number(document.querySelector(`.guess`).value);
	if (!receivedValue) {
		document.querySelector(`.message`).textContent = `Enter a Number...`;
	} else {
		checkMatch(randomNumber, receivedValue);
	}
});
