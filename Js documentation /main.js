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