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

// Spread Operator(...)
// The spread operator is used to unpack elements from an array or object.
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

  pastaorder: function (ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`;
  },
};

// Copy array
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Koftaa"];
console.log(...newMenu);

// copy string
const name = "Ahmed hani";
const namechar = [...name];
console.log(...namechar);

// copy object
const obj = { name: "Ahmed", age: 22, job: "Developer" };
const newObj = obj;

//
//newObj.age = 23;
//console.log(obj.age, newObj.age); will change the age in both objects

const spreadobj = { ...obj };
spreadobj.age = 23;
// will change the age in only spreadobj, that's why it is called shallow copy
console.log(obj.age, spreadobj.age);

// Merge objects
const obj2 = { hasLicense: true, hasCar: true, hasBike: false };

const mergedObj = { ...obj, ...obj2 };
console.log(mergedObj);
//console.log(...mergedObj); error

// spread with functions
const ingredients = ["Mushrooms", "Tomatoes", "Olives"];

console.log(
  restaurant.pastaorder(ingredients[0], ingredients[1], ingredients[2])
);
console.log(restaurant.pastaorder(...ingredients));
*/

// Rest Pattern and Parameters
// The rest pattern is used to collect multiple elements into an array
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

  pastaorder: function (ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`;
  },

  pizzareorder: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

// rest array

const arr = [1, 2, 3, 4, 5];

// const [a, b, ...others, c] = arr; // error, rest element must be the last element
const [a, b, ...others] = arr;

console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  restaurant.starterMenu,
  restaurant.mainMenu,
];
console.log(pizza, risotto, otherfood);

// rest object
const obj0 = { name: "Ahmed" };
const obj1 = { age: 32 };
const obj2 = { job: "Developer" };

const { name, ...rest } = { ...obj0, ...obj1, ...obj2 };
console.log(name, rest);

const { fri, ...weekdays } = restaurant.openingHours;
console.log(fri, weekdays);

// rest parameters
restaurant.pizzareorder("Mushrooms", "Tomatoes", "Olives", "Onions", "Cheese");

const add = (...numbers) => {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  console.log(sum);
  return sum;
};
add(1, 2, 3, 4, 5);
add(1, 2, 3);
add(1);

const x = [23, 5, 7];
add(...x); // spread operator

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    console.log("Total Goals:", players.length);

    players.forEach((player, i) => {
      console.log(`Goal ${i + 1}: ${player}`);
    });
  },

  MoreLikelyToWin: function (...odds) {
    const [team1, draw, team2] = odds;
    console.log(
      team1 < team2
        ? `${game.team1} is more likely to win`
        : team1 < team2
        ? `${game.team2} is more likely to win`
        : "Draw"
    );
  },
};

const [player1, player2] = game.players;
console.log(...player1, ...player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, ...fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(...allPlayers);

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(...players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

game.printGoals(...game.scored);

game.MoreLikelyToWin(...[team1, draw, team2]);

*/

// for-of loop

/*
// array
const arr = [10, 20, 30, 40, 50];

for (const i of arr) console.log(i);

// entires, like pairs, which has index and value

for (const i of arr.entries()) console.log(i);

for (const [index, i] of arr.entries())
  console.log(`The value of index ${index} is ${i}`);

// objects

const obj = {
  name: "Ahmed",
  age: 22,
  job: "Developer",
};

// keys
for (const key of Object.keys(obj)) console.log(key);

// values
for (const value of Object.values(obj)) console.log(value);

// entries
for (const [key, value] of Object.entries(obj)) console.log(key, value);

const openingHours = {
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
};

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/

// Sets
/*
const arr = [1, 1, 1, 2, 3, 5, 1, 6, 4, 8, 10];
const st = new Set(arr);
console.log(st);
console.log(st.has(1));
console.log(st.has(70));
st.add(70);
console.log(st.has(70));
st.delete(1);
console.log(st.has(70));
*/

// Maps

/*
const freq = new Map();

const arr = [1, 1, 1, 2, 3, 5, 1, 6, 4, 8, 10];

for (const i of arr) {
  if (freq.has(i)) freq.set(i, freq.get(i) + 1);
  else freq.set(i, 1);
}
console.log(freq.get(1));
freq.set(1, 10);
console.log(freq.get(1));
freq.delete(1);

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "Python"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

let prompt_ = `${question.get("question")} \nEnter the correct answer: \n`;
for (const [key, value] of question) {
  if (typeof key === "number") prompt_ += `Answer ${key}: ${value}\n`;
}
const userAnswer = prompt(prompt_);
console.log(question.get(question.get("correct") == userAnswer));
*/

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const flightsArr = flights.split("+");
let finalFlights = [];
for (let fly of flightsArr) {
  let [type, from, to, time] = fly.split(";");
  type = type.split("_").join(" ").trim();
  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();
  time = time.replace(":", "h");
  time += "m";
  time = time.padStart(time.length + 1, "(");
  time = time.padEnd(time.length + 1, ")");
  finalFlights.push(
    `${
      type.startsWith("Delayed") ? "🔴" + type : "   " + type
    } from ${from} to ${to} at ${time}`.padStart(51, " ")
  );
}

console.log(finalFlights.join("\n"));
