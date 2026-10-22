"use strict";

//? -> Selecting two elements with hidden class
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);

//? -> Selecting two buttons, Open and Close
const btnCloseModal = document.querySelector(`.close-modal`);
const btnOpenModals = document.querySelectorAll(`.show-modal`);

//? -> Looping through 3 Open buttons.
for (let i = 0; i < btnOpenModals.length; i++) {
	const openBtn = btnOpenModals[i];
	//? -> Clicking Open button removes hidden class
	openBtn.addEventListener(`click`, () => {
		modal.classList.remove(`hidden`);
		overlay.classList.remove(`hidden`);
	});
}

//? -> Separating logic into a function
const closeModal = () => {
	modal.classList.add(`hidden`);
	overlay.classList.add(`hidden`);
};

//? -> Clicking Close button adds hidden class
btnCloseModal.addEventListener(`click`, closeModal);

//? -> Clicking Overlay adds hidden class
overlay.addEventListener(`click`, closeModal);

//? -> Detecting and taking action of Escape Key
document.addEventListener(`keydown`, ev => {
	ev.key === `Escape` && !modal.classList.contains(`hidden`)
		? closeModal()
		: `ignore`;
});
