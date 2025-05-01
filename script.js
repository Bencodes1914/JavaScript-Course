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

const num = Number('23');


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

function calcAge1(birthYear) {
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
*/

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
checkWinner(scoreDolphins, scoreKoalas)