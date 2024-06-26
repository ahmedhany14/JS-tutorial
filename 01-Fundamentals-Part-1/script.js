/*


let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/


/*

// Test Data 1
let markMass = 78,
  JohnMass = 92,
  markHeight = 1.69,
  JohnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let JohnBMI = JohnMass / JohnHeight ** 2;

let markHigherBMI =
  markBMI > JohnBMI
    ? "Mark's BMI is higher than John's"
    : "John's BMI is higher than Mark's";

console.log(
  "mark BMI = ",
  markBMI,
  "\n",
  "John BMI = ",
  JohnBMI,
  "\n",
  markHigherBMI
);

// Test Data 2
(markMass = 95), (JohnMass = 85), (markHeight = 1.88), (JohnHeight = 1.76);

markBMI = markMass / markHeight ** 2;
JohnBMI = JohnMass / JohnHeight ** 2;

markHigherBMI =
  markBMI > JohnBMI
    ? "Mark's BMI is higher than John's"
    : "John's BMI is higher than Mark's";

console.log(
  "mark BMI = ",
  markBMI,
  "\n",
  "John BMI = ",
  JohnBMI,
  "\n",
  markHigherBMI
);

*/

/*
// string and template literals

const firstName = "ahmed";
const job = "teacher";
const birthYear = 1998;
const year = 2021;

let ahmed = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(ahmed);

ahmed = `i'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(ahmed);


console.log(`just a regular string...`);
console.log(`string \nwith multiple \nlines`);
console.log(`string
whit
multiple
lines`);

*/

// strict and loose equality operators

/*
let age = 18;

if(age === 18) console.log('you just became an adult :D (strict)');
if(age == 18) console.log('you just became an adult :D (loose)');

// 18 == '18' => true
if('18' === age) console.log('you just became an adult :D (strict)');
else console.log(`with === 18 != '18' wit`);
if('18' == age) console.log('you just became an adult :D (loose)'), console.log(`with == 18 == '18'`);

*/


// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,
a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// test data 1
let dolphinsScore = (96 + 108 + 89) / 3, koalasScore = (88 + 91 + 110) / 3;
// test data 2
//dolphinsScore = (97 + 112 + 101) / 3, koalasScore = (109 + 95 + 123) / 3;
// test data 3
//dolphinsScore = (97 + 112 + 101) / 3, koalasScore = (109 + 95 + 106) / 3;
if (dolphinsScore > koalasScore) console.log(`Dolphins win the trophy 🏆`);
else if (dolphinsScore < koalasScore) console.log(`Koalas win the trophy 🏆`);
else console.log(`Both win the trophy!`);


if (dolphinsScore > koalasScore && dolphinsScore >= 100) console.log(`Dolphins win the trophy 🏆`);
else if (dolphinsScore < koalasScore && koalasScore >= 100) console.log(`Koalas win the trophy 🏆`);
else if(dolphinsScore == koalasScore && koalasScore >= 100 && dolphinsScore >= 100) console.log(`Both win the trophy!`);
else console.log(`No one wins the trophy 😢`);
*/


// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
let value1 = 275, value2 = 40, value3 = 430;
let tip1 = value1 >= 50 && value1 <= 300 ? value1 * 0.15 : value1 * 0.2;
let total_value1 = value1 + tip1;

let tip2 = value2 >= 50 && value2 <= 300 ? value2 * 0.15 : value2 * 0.2;
let total_value2 = value2 + tip2;

let tip3 = value3 >= 50 && value3 <= 300 ? value3 * 0.15 : value3 * 0.2;
let total_value3 = value3 + tip3;
console.log(`The bill was ${value1}, the tip was ${tip1}, and the total value ${total_value1}`);

console.log(`The bill was ${value2}, the tip was ${tip2}, and the total value ${total_value2}`);

console.log(`The bill was ${value3}, the tip was ${tip3}, and the total value ${total_value3}`);

*/
