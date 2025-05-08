"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive :D');

//const interface = 'Audio';
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

function calcAge1(birthYear) { // ********** Note this area!!!!
 return 2037 - birthYear;
}

const age1 = calcAge1(1991);
 
// function expression
const calcAge2 = function (birthYear) {
 return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
 const age =  2037 - birthYear;
 const retirement = 65 - age;
 //return retirement;
 return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'))
//console.log(`Mr Stephan has ${yearsUntilRetirement(1991)} years till he retires.`);


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

const calcAge = function (birthYear) {
 return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
 const age = calcAge(birthYear);
 const retirement = 65 - age;

if(retirement > 0) {
 console.log( `${firstName} retires in ${retirement} years 😟😟`);
 return retirement;
}else {
 console.log(`${firstName} has already retired 🎉🎉`);
 return -1;
}
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
 if (avgDolphins >= 2 * avgKoalas) {
  console.log(`Dolphins win 🏆🏆 (${avgDolphins} vs. ${avgKoalas})`);
 } else if (avgKoalas >= 2 * avgDolphins) {
  console.log(`Koalas win 🏆🏆 (${avgKoalas} vs. ${avgDolphins})`);
 } else {
  console.log('No team wins...😢😢');
 }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Michael';

const friend2 = 'Steven';

const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = ['Jonas', 'Schmetdmann', 2037 - 1991, 'Teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
 return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);

const age2 = calcAge(years[1]);

const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

 //added the name jay
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');  //Adding an element to the beginning
console.log(friends);

//Removing an element
friends.pop(); //Last element to be removed
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first element to be removed
console.log(friends);

console.log(friends.indexOf('Steven'));//return the value
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //would give false
console.log(friends.includes(23)); //would give true

if (friends.includes('Steven')) {
 console.log('You have a friend called Steven');
};

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



const jonas = {
 firstName: 'Jonas',
 lastName: 'Schmetdmann',
 birthYear: 1991,
 job: 'teacher',
 friends: ['Michael', 'Peter', 'Steven'],
 hasDriversLicense: true,

 // calcAge: function(birthYear) {
 //  return 2037 - birthYear;
 // }

 calcAge: function() {
  console.log(this);
    return 2037 - this.birthYear;
  }
};

console.log(jonas.calcAge(1991));
//console.log(jonas['calcAge'](1991));


function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius;
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal,
  //  descGermany,
  //   descFinland
  );