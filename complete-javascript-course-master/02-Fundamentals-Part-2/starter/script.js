'use strict';
/*
let hasDriversLiscense = false;
const passTest = true;

if (passTest) hasDriversLiscense = true;
if (hasDriversLiscense) console.log("Driver Liscense");

const private = 'Audio';


function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples = 5, oranges = 10) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juiceResult = fruitProcessor();
console.log(juiceResult);

//Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(1900));
console.log(calcAge2(1900));

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//ArrowFunction
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1800);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1980, 'Bob'));
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples = 5, oranges = 10) {
    cutFruitPieces(apples);
    cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
