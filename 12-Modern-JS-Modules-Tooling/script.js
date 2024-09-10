// Importion Module
// Importing single variable
import { cost } from "./shoppingCard.js";
console.log("Importing module");

console.log(cost);

// Importing multiple variables
import { car, price } from "./shoppingCard.js";
console.log(car, price);

// Importing functions

import { addToCart as add } from "./shoppingCard.js";

add("apple", 5);
add("orange", 2);

// Importing everything
import * as ShoppingCart from "./shoppingCard.js";
ShoppingCart.addToCart("grapes", 10);
console.log(ShoppingCart.car[0].product);

// Importing default export from module lodash

import cloneDeep from "../node_modules/lodash-es/cloneDeep.js";

const ahmed = {
  name: "Ahmed",
  age: 20,
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

const ahmedTemp = Object.assign({}, ahmed);

const ahmedCopy = cloneDeep(ahmed);

ahmed.address.city = "Lahore";

console.log("Copy", ahmed); // We can see that the address of ahmed object is changed
console.log("Copy", ahmedTemp); // The data of ahmedTemp is also changed because it is a shallow copy
console.log("Deep Copy", ahmedCopy); // The data of ahmedCopy is not changed because it is a deep copy
