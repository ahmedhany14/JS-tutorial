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
