"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log(`Yeah I can drive`);

//? Functions Started
/*
todo - normal function - function declaration
function calcAge(birthYear) {
  return 2026 - birthYear;
}

const resultAge = calcAge(1991);
console.log(resultAge);

todo - anonymous function - function expression

const myNameUpper = function (theName) {
  return theName.toUpperCase();
};

todo - arrow function - function expression
const oddEvenFinder = (num) => (num % 2 === 0 ? `Even` : `Odd`);
console.log(oddEvenFinder(44));

const leapYearFinder = (theYear) => {
  if (theYear % 400 === 0) {
    return `Leap Year: ${theYear}`;
  } else if (theYear % 4 === 0) {
    if (theYear % 100 === 0) {
      return `Not Leap Year: ${theYear}`;
    } else {
      return `Leap Year: ${theYear}`;
    }
  } else {
    return `Not Leap Year: ${theYear}`;
  }
};

console.log(leapYearFinder(1800));


const calcAge = (year) => 2026 - year;

const yearsUntilRetirement = (birthYear, userName) => {
  const personAge = calcAge(birthYear);
  const retirementAge = 60 - personAge;

  if (retirementAge > 0) {
    return retirementAge;
  } else {
    return `Already Retired`;
  }
};

console.log(yearsUntilRetirement(1960, `Soham`));
*/

//? Arrays (40)
/*
const friends = [`Amitabh`, `Akash`, `Anindya`, `Souvik`];
const years = new Array(1991, 1999, 2004);

console.log(friends);
console.log(years);
console.log(friends.length);
console.log(friends[friends.length - 1]); //! Getting the last item
console.log(friends[10 % 2 === 0 ? 1 : 2]);

friends[2] = `Subhadeep`;
console.log(friends);

const soham = [`Soham`, `Datta`, 1991, `soham@codekmp.in`, friends];
console.log(soham);

const calcAge = (year) => 2026 - year;

const yearsArray = [1997, 1992, 2008, 2024, 2015];

console.log(calcAge(yearsArray[1]));

// yearsArray.forEach((theYear) => {
//   console.log(calcAge(theYear));
// });
*/

//? Array Methods (41)
/*
const friends = [`Amitabh`, `Akash`, `Anindya`, `Souvik`];
console.log(friends);

friends.push(`Debasish`); //! like APPEND - returns the new length of the array
console.log(friends);

friends.unshift(`Manidipa`);
console.log(friends); //! ADDING element at the START

friends.pop(); //! REMOVING the last element - also captures
console.log(friends);

friends.shift(); //! REMOVING the first element - also captures
console.log(friends);

let conclusion = `PUSH and UNSHIFT adds element || POP and SHIFT removes element`;

let theIndex = friends.indexOf(`Souvik`);
console.log(theIndex);

let anotherIndex = friends.indexOf(`Bidyut`); //! returns -1 --- `Bidyut not available`
console.log(anotherIndex);

console.log(friends.includes(`Akash`)); //! true || false
*/

//? Objects (43)
/*
const soham = {
  firstName: `Soham`,
  lastName: `Datta`,
  birthYear: 1991,
  job: `Coder`,
  friends: [`Amitabh`, `Akash`, `Manidipa`],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2026 - this.birthYear; //! IMPORTANT -> can create properties on the fly
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} years old ${this.job} who ${this.hasDriverLicense ? "has" : "does not have"} a driver's license & has ${this.friends.length} firends`;
  },
};

console.log(
  `${soham.firstName} has ${soham.friends.length} friends and his best friend is ${soham.friends[0]}`,
);

console.log(soham.age);
soham.calcAge();
console.log(soham.age);

console.log(soham.getSummary());
*/

//? Loops (47)
/*
todo - FOR LOOP
for (let counter = 1; counter <= 10; counter++) {
  console.log(`Ligting weight repetition ${counter}`);
}

const soham = [
  `Soham`,
  `Datta`,
  1991,
  `soham@codekmp.in`,
  [`Amitabh`, `Akash`, `Anindya`, `Souvik`],
  true,
];

for (let i = 0; i < soham.length; i++) {
  console.log(soham[i], typeof soham[i]);
}

const years = [1991, 1995, 2008, 1984, 1999, 2009];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2026 - years[i]);
}

console.log(age);

console.log(`---------CONTINUE---------`);
for (let i = 0; i < soham.length; i++) {
  if (typeof soham[i] !== `string`) {
    continue;
  }
  console.log(soham[i], typeof soham[i]);
}
*/

//? 49

/*
const soham = [
  `Soham`,
  `Datta`,
  1991,
  `soham@codekmp.in`,
  [`Amitabh`, `Akash`, `Anindya`, `Souvik`],
  true,
];

for (let i = soham.length - 1; 0 <= i; i--) {
  console.log(soham[i]);
}

let star = `*`;
for (let i = 0; i < 5; i++) {
  console.log(star);
  star += `*`;
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Exercise: ${exercise} -----`);
  for (let reps = 1; reps < 6; reps++) {
    console.log(`Exercise ${exercise}: Lifting Weight repetition: ${reps}`);
  }
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
*/
