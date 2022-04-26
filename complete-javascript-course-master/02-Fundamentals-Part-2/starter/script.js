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
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples = 5, oranges = 10) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;

    }
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3.0;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//const avgDolphins = calcAverage(85, 54, 41);
//const avgKoalas = calcAverage(23, 34, 37);
function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);

    }
}

checkWinner(avgDolphins, avgKoalas)

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);


const years = new Array(1991, 1984, 2008, 2020);

friends[2] = 'Jay';
console.log(friends);
const jonas = ['Jonas', 'Davis', 2037 - 1991, 'teacher', friends];
console.log(jonas);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
friends.push('Bob');
console.log(friends);
friends.unshift('John');
console.log(friends);
friends.pop();
console.log(friends);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2099 - 2020,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

//console.log(jonas);
//console.log(jonas.age);
//console.log(jonas['age']);
const interestedIn = prompt('What do you want to know? Choose firstName, lastName, age, job, or friends?');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!');
}

jonas.location = 'Earth';
jonas['favColor'] = 'green';
console.log(jonas);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1900,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLiscence: true,
    calcAge: function () {
        //console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job} and can ${this.hasDriversLiscence ? "" : "not "}drive`
    }
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary())

const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    name: 'John',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const people = new Array(mark, john);
const indexOfLargerBMI = mark.calcBMI() > john.calcBMI() ? 0 : 1;
const otherIndex = indexOfLargerBMI ^ 1;
console.log(`${people[indexOfLargerBMI].name}'s BMI (${people[indexOfLargerBMI].bmi}) is higher than ${people[otherIndex].name}'s BMI (${people[otherIndex].bmi}) `)

const arr = [100, 999, 2, 0, 100, 79, 6, 9, 5, 3, 2];
const arr2 = ["dog", "cat", "fish", "bird"];
const arrOfArrs = [arr, arr2];
for (let x = 0; x < arrOfArrs.length; x++) {
    for (let y = 0; y < arrOfArrs[x].length; y++) {
        console.log(arrOfArrs[x][y]);
    }

}


let x = 0;
while (x < 10) {
    x++;
    console.log(x);
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`Sorry you rolled a ${dice}! LOOKING FOR 6!!!!!!!!!!`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`YOU WIN by rolling a ${dice}! `);
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const tipPercent = prompt('How Much Do you want to tip');
for (let x = 0; x < bills.length; x++) {
    tips[x] = bills[x] * (1.0 / tipPercent);
    totals[x] = tips[x] + bills[x];
}
console.log(totals);
