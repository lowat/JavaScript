/*const inputYear = '1991';
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(typeof String(23));

console.log('I am ' + 23 + ' years old');

let n = '1' + 1;
n = n - 1;
console.log(n);


//falsey
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

//truthy
console.log(Boolean(4));
console.log(Boolean('cat'));
console.log(Boolean({}));

const money = 2000;

if (money) {
    console.log(`You got ${money} dollars!`);
} else {
    console.log("NO MONEY");
}

let height = 210;
if (height) {
    console.log(`Height is defined ${height}`);
} else {
    console.log('Height is undefined!')
}

const age = 24;
if (age === 24) console.log(`strict equality: age is ${age}`);

const age2 = '24';
if (age2 === 24) console.log(`strict equality: age is ${age2} years`);

const age3 = '24';
if (age3 == 24) console.log(`loose equality: age is ${age3}`);

const favNum = Number(prompt("What's your favorite number?"));
console.log(favNum, typeof favNum);

if (favNum === 100) {
    console.log('You guessed 100');
} else if (favNum === 77) {
    console.log('77 is the best');
} else {
    console.log('Not the droids you want');
}

if (favNum !== 77) {
    console.log('GUESS THE RIGHT NUMBER!!');

}

const hasDriversLiscense = true;
const hasGoodVision = true;

//console.log(hasDriversLiscense && !hasGoodVision);
//console.log(hasDriversLiscense || hasGoodVision);

const shouldDrive = hasDriversLiscense && hasGoodVision;
if (hasDriversLiscense && hasGoodVision) {
    console.log('should be driving');
} else {
    console.log('STAY OFF THE ROADS');
}

const isTired = true;
if (hasDriversLiscense && hasGoodVision && !isTired) {
    console.log('should be driving');
} else {
    console.log('STAY OFF THE ROADS');
}


//Calc average score of each team
//compare team average scores to determine winner
//print to the console

const dolphinAvgScore = (97 + 112 + 101) / 3.0;
const koalaAvgScore = (109 + 95 + 106) / 3.0;
//const dolphinAvgScore = (97 + 112 + 101) / 3.0;
//const koalaAvgScore = (109 + 95 + 123) / 3.0;

//const dolphinAvgScore = (96 + 108 + 89) / 3.0;
//const koalaAvgScore = (88 + 91 + 110) / 3.0;

if (dolphinAvgScore < 100 && koalaAvgScore < 100) {
    console.log("Neither team wins");
} else if (dolphinAvgScore === koalaAvgScore) {
    console.log("Draw");
} else if (dolphinAvgScore < koalaAvgScore) {
    console.log("Koalas win!!");

} else {
    console.log("Dolphins win!!");

}

const day = 'thursday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
    case 'friday':
        console.log('videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('weekend time');
        break;
    default:
        console.log('Not a valid day!')
}

const num = 24;
num >= 24 ? console.log('above or equal') : console.log('less than')

const bill = Number(prompt("Bill Amount? "));

console.log(`The tip amount is ${(bill > 50 && bill < 300) ? (.15 * bill) : (.2 * bill)} dollars`);
*/
