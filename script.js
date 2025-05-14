"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive :D');

const interface = 'Audio';
//const private = 534;/
//const if = 23;



function logger() {
 console.log('My name is Jonas');
}

//calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
 const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
 return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');//Converts the string 23 to the number 23.


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Function declaration.
*/

// function calcAge1(birthYear) { // ********** Note this area!!!!
//  return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
 
// // function expression
// const calcAge2 = function (birthYear) {
//  return 2037 - birthYear;
// }
// const age2 = calcAge2(1994);

// console.log(age1, age2);

// // arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//  const age =  2037 - birthYear;
//  const retirement = 65 - age;
//  //return retirement;
//  return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'))
// console.log(`Mr Stephan has ${65 - (2037 - 1940)} years till he retires.`);

/*
function cutFruitPieces(fruit) {
 return fruit * 4;
}

function fruitProcessor(apples, oranges) {
 const applePieces = cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges);

 const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
 return juice;
}
console.log(fruitProcessor(2, 3));
*/
// const calcAge = function (birthYear) {
//  return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//  const age = calcAge(birthYear);
//  const retirement = 65 - age;
//  const retirement2 = age - 65;

// if(retirement > 0) {
//  console.log( `${firstName} retires in ${retirement} years 😟😟`);
//  return retirement;
// }else {
//  console.log(`${firstName} has already retired ${retirement2} years ago 🎉🎉😀😀.`);
//  return -1;
// }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1910, 'Mike'));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

//Test 1

// let scoreDolphins = calcAverage(54, 65, 49);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//  if (avgDolphins >= 2 * avgKoalas) {
//   console.log(`Dolphins win 🏆🏆 (${avgDolphins} vs. ${avgKoalas})`);
//  } else if (avgKoalas >= 2 * avgDolphins) {
//   console.log(`Koalas win 🏆🏆 (${avgKoalas} vs. ${avgDolphins})`);
//  } else {
//   console.log('No team wins...😢😢');
//  }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(176, 571);
/*
//Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/
// const friend1 = 'Michael';

// const friend2 = 'Steven';

// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const firstName = 'Jonas';
// const jonas = ['Jonas', 'Schmetdmann', 2037 - 1991, 'Teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

//Exercise
// const calcAges = function (birthYear) {
//  return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);

// const age2 = calcAge(years[1]);

// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);


// const friends = ['Michael', 'Steven', 'Peter'];

//  //added the name jay
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');  //Adding an element to the beginning
// console.log(friends);

// //Removing an element
// friends.pop(); //Last element to be removed
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first element to be removed
// console.log(friends);

// console.log(friends.indexOf('Steven'));//return the value
// console.log(friends.indexOf('Bob'));

// friends.push(23);//added the value of 23
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23')); //would give false
// console.log(friends.includes(23)); //would give true

// if (friends.includes('Steven')) {
//  console.log('You have a friend called Steven');
// };

/*
function calcTip(bill) {
 return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Test the function with bill = 100
console.log(calcTip(100)); // Output: 15

// Step 2: Array of bills (test data)
const bills = [125, 555, 44];

// Step 3: Array of tips using calcTip
const tips = bills.map(bill => calcTip(bill));
console.log(tips); // Output: [18.75, 111, 8.8]

// Step 4: Bonus — Array of totals (bill + tip)
const totals = bills.map((bill, index) => bill + tips[index]);
console.log(totals); // Output: [143.75, 666, 52.8]

// Log all arrays for clarity
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

const calcTip = function (bill) {
 return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



const jonasArray = [
 'Jonas',
 'Schmetdmann',
 2037 - 1991,
 'teacher',
 ['Michael', 'Peter', 'Steven']
];

const jonas = {
 firstName: 'Jonas',
 lastName: 'Schmetdmann',
 age: 2037 - 1991,
 job: 'teacher',
 friends: ['Michael', 'Peter', 'Steven']
};




const jonas = {
 firstName: 'Jonas',
 lastName: 'Schmetdmann',
 age: 2037 - 1991,
 job: 'teacher',
 friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, friends, and job');

if(jonas[interestedIn]) {
 console.log(jonas[interestedIn]);
} else {
 console.log('Wrong request! Choose between firstName, lastName, age, friends, and job');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmetdman';
console.log(jonas);

// Challenge

// "Jonas has 3 friends, and his best friend is called Michael".
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

*/

// const jonas = {
//  firstName: 'Jonas',
//  lastName: 'Schmetdmann',
//  birthYear: 1991,
//  job: 'teacher',
//  friends: ['Michael', 'Peter', 'Steven'],
//  hasDriversLicense: false,

//  // calcAge: function(birthYear) {
//  //  return 2037 - birthYear;
//  // }

// //  calcAge: function() {
// //   //console.log(this);
// //     return 2037 - this.birthYear;
// //   }
// // };

// calcAge: function() {
//   this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };


// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// //Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license."

// console.log(jonas.getSummary());


// function toCelsius(f) {
//   return (5/9) * (f-32);
// }

// let value = toCelsius;

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const descPortugal = describeCountry('Portugal', '10', 'Lisbon');
// const descGermany = describeCountry('Germany', 83, 'Berlin');
// const descFinland = describeCountry('Finland', 6, 'Helsinki');

// console.log(descPortugal);
// console.log(descGermany);
// console.log(descFinland);

// function describeMe(name, age, originCountry, formerJob, currentJob, formerJobPlace, currentJobPlace) {
//   return `My name is ${name} a ${age} year old from ${originCountry}. I was a ${formerJob} at ${formerJobPlace} and currently I am a ${currentJob} at ${currentJobPlace}.`;
// }

// const describeMePersonal = describeMe('Benjamin Nwankwor', '16', 'Nigeria', 'Student', 'Programmer', 'Floridel College', 'Amazon');
//   console.log(describeMePersonal);


// let $let = 27;

// console.log($let);

// const myCountry = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish',
//   population: 6,
//   neighbours: ['Norway', 'Sweden', 'Russia']
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

// 

// for (let voter = 1; voter <= 50; voter++)
//   console.log(`Voter number ${voter} is currently voting`);

// var x = 10;
// console.log(x);

// Create objects for Mark and John
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78, // kg
//   height: 1.69, // meters
//   calcBMI: function() {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//   }
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92, // kg
//   height: 1.95, // meters
//   calcBMI: function() {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//   }
// };

// // Calculate BMIs
// mark.calcBMI();
// john.calcBMI();

// // Compare BMIs and log the result
// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
// } else {
//   console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
// }

// console.log('Lifting weights repitition 1 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 2 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 3 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 4 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 5 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 6 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 7 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 8 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 9 🏋️‍♀️🏋️‍♀️.');
// console.log('Lifting weights repitition 10 🏋️‍♀️🏋️‍♀️.');

// for loops keep running while condition is true.
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️🏋️‍♀️`);
// }

const jonasArray = [
  'Jonas',
  'Schmetdmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
 ];