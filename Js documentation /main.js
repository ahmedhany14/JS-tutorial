"use strict";

// 1. Declarations
/*
1) var: Declares a variable, optionally initializing it to a value.
2) let: Declares a block-scoped, local variable, optionally initializing it to a value.
3) const: Declares a block-scoped, read-only named constant.
*/

var x = 10;

const change = function () {
  var x = 2;
  console.log(x); // 2
};

change();

console.log(x); // nothiing changes

let y = 10;
switch (y) {
  case 11:
    let y = 2;
    console.log(y); // 2
    break;
  default:
    console.log("nothing");
}

// 2. Error handling

const data = {
  name: "John",
  age: 30,
};

let name = "ahmed";

try {
  if (data.name !== name) {
    throw "Name is not correct";
  }
} catch (NameError) {
  console.log(NameError);
}

// 3. Loops

/*
1) for: A statement that creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
2) while: A statement that executes its statements as long as a specified condition evaluates to true.
3) do...while: A statement that executes a statement block once before a condition is checked.
4) break and continue: A statement that terminates the current loop, switch, or label statement, and transfers program control to the statement following the terminated statement.
5) for...in: A statement that iterates over the enumerable properties of an object, in arbitrary order.
6) for...of: A statement that iterates over the iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
*/

// 4. Functions

/*
1) declaration: A function definition (also called a function declaration, or function statement).
    has a name, parameters, and a body.

2) expression: A function expression is similar to and has the same syntax as a function declaration.
    this is a function that is assigned to a variable, has no name, takes parameters, and has a body.

3) arrow function: An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
*/

// Function declaration
function sum(x, y) {
  return x + y;
}

// Function expression

const factorial = function (x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
};

// Arrow function
const multiply = (x, y) => x * y;
