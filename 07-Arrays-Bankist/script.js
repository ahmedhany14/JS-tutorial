'use strict';
/*
// SLICE METHOD
// used to extract a part of an array without changing the original array (shallow copy)

console.log('SLICE METHOD');
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.slice(2); // will take all elements starting from index 2
console.log(...b); // [3, 4, 5, 6, 7, 8, 9]

b = a.slice(2, 4); // will take elements from index 2 to 4 (not included end index)
console.log(...b); // [3, 4]

b = a.slice(-1); // will take the last element
console.log(...b); // [9]

b = a.slice(-2); // will take the last 2 elements
console.log(...b); // [8, 9]

b = a.slice(1, -2); // will take elements from index 1 to 2nd last element
console.log(...b); // [2, 3, 4, 5, 6, 7]
console.log('----------------------------------------------------');

// SPLICE METHOD
// same as slice but it will change the original array, don't take shallow copy

console.log('SPLICE METHOD');
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let d = c.splice(1, 2);
console.log(...d); // [2, 3]
console.log(...c); // [1, 4, 5, 6, 7, 8, 9]

let add = [10, 11, 12, 13, 14];

d = c.splice(1, 2, ...add); // will remove 2 elements starting from index 1 and add 3 elements
console.log(...d); // [4, 5]
console.log(...c); // [1, 10, 11, 12, 6, 7, 8, 9]

console.log('----------------------------------------------------');

// REVERSE METHOD
// reverse the original array

console.log('REVERSE METHOD');
let e = [1, 2, 3, 4, 5, 6, 7, 8, 9];
e.reverse();
console.log(...e); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log('----------------------------------------------------');

// CONCAT METHOD
// used to concatenate two arrays

console.log('CONCAT METHOD');
let f1 = [1, 2, 3, 4, 5],
  f2 = [6, 7, 8, 9];

f1 = f1.concat(f2);
console.log(...f1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('----------------------------------------------------');

// JOIN METHOD
// used to join all elements of an array into a string

console.log('JOIN METHOD');
let g = [1, 2, 3, 4, 5];

let str = g.join(' ahmed ');
console.log(str); // 1 2 3 4 5

console.log('----------------------------------------------------');

// LOOPING AN ARRAY

console.log('LOOPING AN ARRAY');

let h = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('FOR LOOP');
for (const i of h) {
  if (i & 1) console.log(`Element ${i} is odd`);
  else console.log(`Element ${i} is even`);
}

console.log('FOR EACH LOOP');

h.forEach(function (element, index) {
  if (element & 1) console.log(`Element ${element} in index ${index} is odd`);
  else console.log(`Element ${element} in index ${index} is even`);
});

// for each loop can't break or continue, for each loop can't return anything
// arrow for each

console.log('ARROW FOR EACH LOOP');
h.forEach((element, index) => {
  if (element & 1) console.log(`Element ${element} in index ${index} is odd`);
  else console.log(`Element ${element} in index ${index} is even`);
});

// for-each map and set

console.log('FOR EACH MAP AND SET');

let mp = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

mp.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

let s = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

s.forEach((value, _, set) => {
  console.log(value);
});

*/

// MAP METHOD
// used to create a new array from an existing array
// it will not change the original array
// new array will have elements that are returned from the callback function

const a = [1000, 5521, 96325, 84125, 95269];

const LOG = a.map(function (element, index) {
  let ret = 0;
  while (element) ++ret, (element = Math.floor(element / 2));
  return ret;
});

console.log(...LOG);

// FILTER METHOD
const c = a.filter(function (element, index) {
  return Math.abs(element) % 2 == index % 2;
});
console.log(...c);

// REDUCE METHOD
// used to reduce an array to a single value, like sum of all elements

let sum = a.reduce(function (acc, element, index) {
  return acc + element;
}, 0);

console.log(sum);
