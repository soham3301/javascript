//? Upto 10

/*
let js = "amezing";
if (js === "amezing") {
  alert("JavaScript is FUN!");
}

let myName = "Soham";
alert(myName);

let PI = 3.14;
console.log(PI);
*/

//? 11

/*
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun);

jsIsFun = "Oh Yeah";

console.log(jsIsFun);

let birthYear;
console.log(birthYear);
console.log(typeof birthYear);

let anniversary = undefined;
console.log(anniversary);
console.log(typeof anniversary);

let destination = null;
console.log(destination);
console.log(typeof destination); //! Object
*/

//? 12

/*
const dateOfBirth; //! Not Allowed
favouriteFood = "Chicken"; //! Allowed but NOT PRACTICED
*/

//? 13

/*
const now = 2026;
const myAge = now - 1991;
const payelAge = now - 1999;

console.log(myAge, payelAge);

console.log(payelAge * 2, 3 ** 3);

const first_name = "Soham";
const last_name = "Datta";

console.log(first_name + " " + last_name);
console.log(first_name, last_name);
*/

//? 17
/*
const firstName = "Soham";
const job = "teacher";
const birthYear = 1991;

const soham =
  "I'm " + firstName + " a " + (2026 - birthYear) + " years old " + job;
console.log(soham);

const sohamNew = `I'm ${firstName}, a ${2026 - birthYear} years old ${job}`;
console.log(sohamNew);

console.log(`This is a string with
another line.
How cool is that?`);
*/

//? 18
/*
const legalDrivingAge = 18;
let age = 15;

if (age >= legalDrivingAge) {
  console.log(`Yeah she can drive`);
} else {
  console.log(`No she can't. Wait ${legalDrivingAge - age} more years.`);
}
*/

//? 20
/*
const inputYear = "1999";
const age = 19;
console.log(inputYear + age);

console.log(Number(inputYear) + age);

console.log(String(33));
*/

//? 21

/*
let falsy_values = `There are 5 falsy values -> 0, "", undefined, null, NaN`;

if (NaN) {
  console.log("true");
} else {
  console.log("false");
}
*/

//? 22

/*
const age = Number(prompt(`What's your age?`));

if (age === 18) {
  alert(`You just became an adult.`);
} else if (age < 18) {
  alert(`You are a teen.`);
} else {
  alert(`You are an adult.`);
}
*/

//? 26

/*
const day = "robbar";

switch (day) {
  case "monday":
    console.log("Yeah this is monday");
    console.log("Go to gym");
    console.log("It's chest day");
    break;
  case "tuesday":
    console.log(`Back Day || Tuesday`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Take rest`);
    break;
  case "friday":
    console.log(`It's friday. Leg day`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Weekend. Take some rest.`);
    break;
  default:
    console.log(`All cases failed`);
}
*/

//? 28

/*
let age = 23;

age >= 18 ? console.log(`You can drink`) : console.log(`Go Home`);

age = 12;
const drink = age >= 18 ? `Beer` : `Sprite`;
console.log(drink);
*/
