"use strict";

/*
const xyzabc = 23;

if (xyzabc <= 100 && xyzabc > 5) {
	console.log(`This is the value of ${xyzabc}`);
}

let counter = 0;
while (counter < 10) {
	console.log(`Hey this is While Loop. The Counter: ${counter}`);
	counter++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
if (dice === 6) console.log(`The value of Dice: ${dice}`);
while (dice !== 6) {
	console.log(`The value of Dice: ${dice}`);
	dice = Math.trunc(Math.random() * 6 + 1);
	if (dice === 6) console.log(`The value of Dice: ${dice}`);
}

const calcAge = birthYear => 2026 - birthYear;

console.log(xyzabc);

// BUG
//

if (10 > 2) {
	console.log(`Hello World`);
}
*/
const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = arr => {
	let bigTemp = 0;
	let smallTemp = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === `number`) {
			arr[i] > bigTemp ? (bigTemp = arr[i]) : `ignore`;
			arr[i] < smallTemp ? (smallTemp = arr[i]) : `ignore`;
		}
	}
	return bigTemp - smallTemp;
};

const tempAmplitude = calcTempAmplitude(temperatures);
console.log(tempAmplitude);

//todo - challenge (64)

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
	let theDots = `...`;
	for (let i = 0; i < arr.length; i++) {
		let declaration = ` ${arr[i]}\u00B0C in ${i + 1} days ...`;
		theDots += declaration;
	}
	return theDots;
};

console.log(printForecast(testData2));
