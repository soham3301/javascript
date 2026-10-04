"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log(`Yeah I can drive`);

//? Functions Started
/*
//todo - normal function - function declaration
function calcAge(birthYear) {
  return 2026 - birthYear;
}

const resultAge = calcAge(1991);
console.log(resultAge);

//todo - anonymous function - function expression

const myNameUpper = function (theName) {
  return theName.toUpperCase();
};

//todo - arrow function - function expression
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
