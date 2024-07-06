"use strict";

// 1. convert a string to a number, and vice versa

/*
let a = "123";
console.log("a:", a, typeof a);
console.log("a to number:", Number(a), typeof Number(a));
console.log("a to number:", +a, typeof +a);

let b = 123;
console.log("b:", b, typeof b);
console.log("b to string:", String(b), typeof String(b));
*/
// 1. Number class
// parseInt()
// used to convert to a number

/*
let c = "123",
  d = 155.2;
console.log("c:", c, typeof c);
console.log("c to number:", parseInt(c), typeof parseInt(c));

console.log("d:", d);
console.log("d to number:", parseInt(d), typeof parseInt(d));
*/
// isNaN()
// used to check if there is a NaN value

/*
let e = "123",
  f;

console.log("e:", e, typeof e);
console.log("e:", isNaN(e));
console.log("f:", isNaN(f));
*/
// isFinite()
// used to check if there is a finite number

/*
let g = "aasd",
  h = 111;
console.log("g:", isFinite(g));
console.log("h:", isFinite(h));

console.log(isFinite(1 / 0));
*/
// isInteger()
// used to check if there is an integer

/*
let i = 123,
  j = 123.5;

console.log("i:", Number.isInteger(i));
console.log("j:", Number.isInteger(j));
*/
// BigInt
// used to represent large numbers

/*
console.log(2 ** 64); // will print not accurate number

const base = 2n,
  power = 64n;
console.log(base ** power);

const aa = BigInt(5412546),
  bb = BigInt(5412546);
console.log(aa * bb);

*/
// Date class

const now = new Date();
console.log(now); // will print the current date and time

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // will print the future date and time

const future2 = new Date(2037, 10, 33);
console.log(future2); // will print the future date and time

console.log(future.getFullYear()); // will print the year
console.log(future.getMonth()); // will print the month
console.log(future.getDate()); // will print the day
console.log(future.getDay()); // will print the day of the week
console.log(future.getHours());    // will print the hour
console.log(future.getMinutes()); // will print the minute
console.log(future.getSeconds()); // will print the second
console.log(future.toISOString()); // will print the date in ISO format
console.log(future.getTime()); // will print the time in milliseconds

