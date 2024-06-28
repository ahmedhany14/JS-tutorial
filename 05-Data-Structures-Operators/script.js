"use strict"; /*

// Data Structures in JavaScript

/*
 1) Destructuring Arrays
     Destructuring is a way to unpack values from an array or an object into separate variables.
*/
/*
let arr = ["John", "Doe", 33, true];
const [f_name, l_name, age, isMarried] = arr;

console.log(f_name, l_name, age, isMarried);

console.log(
  `f_name: ${f_name}, l_name: ${l_name}, age: ${age}, isMarried: ${
    isMarried ? "Yes" : "No"
  }`
);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

let [first, second] = restaurant.categories;
console.log(first, second);

// swapping variables
[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.categories);

let x = [1, 2, [4, 5]];

let [a, b, c] = x;
console.log(a, b, c);

// Skipping elements

let [p1, , p2] = x;
console.log(p1, p2);

// Nested Destructuring
let [p, q, [r, s]] = x;
console.log(p, q, r, s);

// Default values

let [m, n, o] = [8, 9];
// o will be undefined
console.log(m, n, o);

let [m1 = 1, n1 = 2, o1 = 3] = [8, 9];
// o1 will be 3
console.log(m1, n1, o1);
*/

// 2) Destructuring Objects
// Destructuring is a way to unpack values from an array or an object into separate variables.

/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  orderDelivery: function ({
    starterIdx = 1,
    mainIdx = 0,
    time = "20:00",
    address = "No Address",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },
};

const { name, mainMenu, categories } = restaurant;
console.log(name, mainMenu, categories);

// Renaming properties

const { name: restaurantName, mainMenu: menu, categories: tags } = restaurant;
console.log(restaurantName, menu, tags);

const { menu: m, starterMenu: s } = restaurant;
//menu are not defined in the object, so it will be undefined
console.log(m, s);

// default values
// menu is not defined in the object, so it will be []
const { menu: m1 = [], starterMenu: s1 = [] } = restaurant;
console.log(m1, s1);

// nested objects

const {
  fri: { close: c, open: o },
} = restaurant.openingHours;
console.log(o, c);

// desrucutring function arguments

const order1 = {
  time: "22:30",
  address: "Via del Sole, 21",
  mainIdx: 2,
  starterIdx: 2,
};
console.log(order1);

restaurant.orderDelivery(order1);

const order2 = {
  starterIdx: 2,
  mainIdx: 0,
};

restaurant.orderDelivery(order2);
*/
