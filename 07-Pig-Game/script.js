"use strict";

const btnNewGame = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

const diceImage = document.querySelector(`.dice`);

const player1Section = document.querySelector(`.player--0`);
const player2Section = document.querySelector(`.player--1`);

const finalScores = {
	"current--0": 0,
	"current--1": 0,
};

const clearFinalScore = () => {
	for (let key in finalScores) {
		finalScores[key] = 0;
	}
};

const currentScores = {
	"current--0": 0,
	"current--1": 0,
};

const clearCurrentScore = () => {
	for (let key in currentScores) {
		currentScores[key] = 0;
	}
};

const diceValues = {
	1: `dice-1.png`,
	2: `dice-2.png`,
	3: `dice-3.png`,
	4: `dice-4.png`,
	5: `dice-5.png`,
	6: `dice-6.png`,
};

const generateRandoms = obj => {
	const keys = Object.keys(obj);
	const randomValue = Number(keys[Math.floor(Math.random() * keys.length)]);
	const randomImagePath = obj[randomValue];
	return [randomValue, randomImagePath];
};

const changeDiceImage = (imgElement, imgPath) => {
	imgElement.src = imgPath;
};

const checkActiveSection = (p1, p2) => {
	return p1.classList.contains(`player--active`) ? p1 : p2;
};

const changeActivePlayer = (p1Sec, p2Sec, activeSection) => {
	if (activeSection === p1Sec) {
		p1Sec.classList.remove(`player--active`);
		p2Sec.classList.add(`player--active`);
	} else {
		p2Sec.classList.remove(`player--active`);
		p1Sec.classList.add(`player--active`);
	}
};

const addCurrentScore = activeSect => {
	const currentScorePara = activeSect.children[2].children[1];
	const currentScore = Number(currentScorePara.textContent);
	finalScores[currentScorePara.id] += currentScore;
	activeSect.children[1].textContent = finalScores[currentScorePara.id];
	activeSect.children[2].children[1].textContent = 0;
};

const rollDice = () => {
	const activeSec = checkActiveSection(player1Section, player2Section);
	const [diceValue, diceImagePath] = generateRandoms(diceValues);
	const currentScorePara = activeSec.children[2].children[1];
	if (diceValue === 1) {
		changeActivePlayer(player1Section, player2Section, activeSec);
		activeSec.children[2].children[1].textContent = 0;
	} else {
		currentScores[currentScorePara.id] += diceValue;
		currentScorePara.textContent = currentScores[currentScorePara.id];
		if (
			finalScores[currentScorePara.id] +
				currentScores[currentScorePara.id] >=
			10
		) {
			activeSec.classList.add(`player--winner`);
			holdDice();
			btnRoll.classList.add(`hidden`);
			btnHold.classList.add(`hidden`);
		}
	}
	diceImage.src = diceImagePath;
};

const holdDice = () => {
	const activeSection = checkActiveSection(player1Section, player2Section);
	addCurrentScore(activeSection);
	changeActivePlayer(player1Section, player2Section, activeSection);
	clearCurrentScore();
};

const newGane = () => {
	clearCurrentScore();
	clearFinalScore();
	document.querySelector(`#score--0`).textContent = 0;
	document.querySelector(`#score--1`).textContent = 0;
	document.querySelector(`#current--0`).textContent = 0;
	document.querySelector(`#current--1`).textContent = 0;
	diceImage.src = diceValues[5];
	btnRoll.classList.remove(`hidden`);
	btnHold.classList.remove(`hidden`);
	if (document.querySelector(`.player--winner`)) {
		document
			.querySelector(`.player--winner`)
			.classList.remove(`player--winner`);
	}
};

btnRoll.addEventListener(`click`, rollDice);
btnHold.addEventListener(`click`, holdDice);
btnNewGame.addEventListener(`click`, newGane);
