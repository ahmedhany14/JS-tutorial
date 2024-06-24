"use strict";

// what is a strict mode?
/*
 Strict mode is a way to write secure JavaScript code.
 It is a special mode that you can enable in JavaScript to catch common coding mistakes and "unsafe" actions. It is a literal expression, omitted in the past, which indicates that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.
*/

// this code will not work in strict mode
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true; // Typo in the variable name, not the same as the one declared above
if (hasDriversLicense) console.log("I can drive :D");
*/

// this code will work in strict mode
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

// functions

// There are three typs of functions in JavaScript
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function

// Function Declaration
/*
 1. like any programming language, a function is a block of code that can be called by name.
 2. A function can have parameters, which are values that are passed to the function.
 3. A function can return a value.
 4. A fucntion can be called at any line in the code.
*/
/*
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5, called after the function declaration
console.log(sub(5, 2)); // 10, called before the function declaration

function sub(a, b) {
  return a - b;
}
*/

// Function Expression
/*
 1. A function expression is similar to and has the same syntax as a function declaration
 2. The main difference between a function expression and a function declaration is the function name,
which can be omitted in function expressions to create anonymous functions.
 3. Function expressions can be used as IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
 4. Function expressions can't be called before creating the fucntion.
*/
/*

let add = function (a, b) {
    return a + b;
}
const sub = function (a, b) {
    return a - b;
}
let tow = add(10, 20)
let s = sub(10, 20)
console.log(tow)
console.log(s)
*/

// Arrow Function
/*
 1. Arrow functions are a more concise way of writing function expressions.
 2. Arrow functions do not have their own this. They are not well suited for defining object methods.
 3. Arrow functions are not hoisted, they must be defined before they are used.
 4. Arrow functions are always anonymous.
 5. Arrow functions are best suited for non-method functions.
 6. Arrow functions are not suited as methods, and they cannot be used as constructors.
*/

/*
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
let tow = add(10, 20)
let s = sub(10, 20)
console.log(tow)
console.log(s)

const calcyearretirement = (birthyear, name) => {
    const age = 2024  - birthyear;
    const retirement = Math.max(60 - age, 0);
    return `${name} retires in ${retirement} years`;
}
console.log(calcyearretirement(2003, "Ahmed"))
console.log(calcyearretirement(1964, "hany"))

*/
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (a = Array) => {
    let sum = 0;
    a.forEach(element => {
        sum += element;
    });
    return sum / a.length;
}
function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log("No team wins...");
    }
}
let Dolhins = [44, 23, 71], Koalas = [65, 54, 49];
checkWinner(calcAverage(Dolhins), calcAverage(Koalas));

Dolhins = [85, 54, 41], Koalas = [23, 34, 27];
checkWinner(calcAverage(Dolhins), calcAverage(Koalas));
*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before:
 Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
   calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


let bills = [125, 555, 44];

let tips = bills.map(bill => calcTip(bill));
console.log("tips : ",tips.join(", "));
let total = bills.map((bill, index) => bill + tips[index]);
console.log("total : ",total.join(", "));
*/

// Objects
/*
const ahmed = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 2021 - 2003,
  job: "Student",
  friends: ["Hany", "Ali", "Khaled"],
  haslicense: false,
  getfreinds: function () {
    console.log(this.friends.join(", "));
  },

  getsummary: function () {
    console.log(
`${this.firstName} is a ${this.age} years old ${this.job},
and he has ${this.friends.length} friends,
and they are ${this.friends.join(", ")},
and his best friend is called ${this.friends[0]},
and he is ${this.haslicense ? "a" : "not"} driver.`);
  },
};

ahmed.location = "Egypt";
ahmed["twitter"] = "@ahmed";

// challenge

console.log(
  `${ahmed.firstName} has ${ahmed.friends.length} friends, and his best friend is called ${ahmed.friends[0]}`
);

// Object Methods

ahmed.getfreinds();
ahmed.getsummary();
*/

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const john = {
    fullName: "John Smith",
    mass: 92,
    hight: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.hight ** 2;
        return this.bmi;
    }
}

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    hight: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.hight ** 2;
        return this.bmi;
    }
}

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? "higher" : "lower"} than ${mark.fullName}'s (${mark.calcBMI()})!`);

*/


// Iteration: The for Loop
/*

const ahmed = [
    "Ahmed",
    "Mohamed",
    2021 - 2003,
    "Student",
    ["Hany", "Ali", "Khaled"],
    false
];


const types = [];


for(let i = 0; i < ahmed.length; i++){
    console.log(ahmed[i], typeof ahmed[i]);
    types[i] = typeof ahmed[i];
}

console.log(types);
*/

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [], values =[];

const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const value = bill + tip;
    return [tip, value];
};

for(let i = 0; i < bills.length; i++){
    const [tip, value] = calcTip(bills[i]);
    tips.push(tip);
    values.push(value);
}
console.log(bills.join(', '));
console.log(tips.join(', '));
console.log(values.join(', '));

const calcAverage = (arr = Array) => {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
}

console.log(calcAverage(values));
console.log(calcAverage(tips));
console.log(calcAverage(bills));