'use strict';

// Default Parameters

/*
const bookings = [];
const flights = {
  LH123: {
    airline: 'Lufthansa',
    departure: 'Frankfurt',
    destination: 'London',
    date: '2021-08-01',
    time: '12:00',
    price: 100,
  },
  LH124: {
    airline: 'Lufthansa',
    departure: 'Frankfurt',
    destination: 'London',
    date: '2021-08-01',
    time: '12:00',
    price: 5000,
  },
  LH125: {
    airline: 'Lufthansa',
    departure: 'Frankfurt',
    destination: 'London',
    date: '2021-08-01',
    time: '12:00',
    price: 6000,
  },
};

const createBooking = (
  flightNum,
  passengerNum = 1,
  totalPrice = passengerNum * flights[flightNum]['price']
) => {
  totalPrice = passengerNum * flights[flightNum]['price'];
  const booking = {
    flightNum,
    passengerNum,
    totalPrice,
  };
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH124', 2, 800);
createBooking('LH125', 5, 1000);

console.log(bookings);

*/

// Passing Arguments: Value vs. Reference

/*
const flight = 'LH234';
const ahmed = {
  name: 'Ahmed',
  passport: 123456789,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  console.log('checkIn:');
  console.log('flightNum:', flightNum);
  console.log('passenger:', passenger);
  if (passenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};
console.log('--------------------------------------');
checkIn(flight, ahmed);
console.log('--------------------------------------');

console.log('Outside checkIn:');
console.log('flight:', flight);
console.log('ahmed:', ahmed);
console.log('--------------------------------------');

const passenger = ahmed;
const newFlight = flight;

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 1000000000);
  person.name = person.name.slice(4) + ' ' + 'hany';
};
console.log('--------------------------------------');

newPassport(ahmed);
console.log('--------------------------------------');
checkIn(flight, ahmed);
newPassport(ahmed);
console.log('--------------------------------------');
console.log('Outside checkIn:');
console.log('flight:', flight);
console.log('ahmed:', ahmed);
console.log('--------------------------------------');

*/

// fuctions accepting callback functions

/*
const splitString = str => {
  const strArr = str.split(' ');
  return strArr;
};

const capitalize = (str, fun) => {
  const strArr = fun(str);
  console.log('string splited by', fun.name, ':', strArr);
  for (let i = 0; i < strArr.length; i++) strArr[i] = strArr[i].toUpperCase();
  return strArr;
};

// higher order function
const transform = (str, fun1, fun2) => {
  console.log('string:', str);
  const strArr = fun1(str, fun2);
  console.log('string splited by', fun1.name);
  console.log('string capitalized and splited:', strArr);
};

const str = 'ahmed hany mohamed';

transform(str, capitalize, splitString);

*/

// call back function in action

/*
const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

Lufthansa.book(239, 'Ahmed Hany');
Lufthansa.book(635, 'Mohamed Hany');

console.log(Lufthansa);

const book = Lufthansa.book;

//book(100, 'Ahmed Hany');
// error, book is not defined, because of using this keyword in the function
// and book functoin now is a global function

// call back function in action, solving the problem

book.call(Lufthansa, 100, 'Ahmed Hany');
console.log(Lufthansa);

const emirates = {
  airline: 'Emirates',
  iataCode: 'EK',
  bookings: [],
};

book.call(emirates, 200, 'Hany');
console.log(emirates);

const data = [500, 'ahmed hany'];

book.call(emirates, ...data);
console.log(emirates);

// bind method
// method to create a copy of a function with a certain this keyword

const bookEM = book.bind(emirates);

bookEM(10000, 'Ahmed Hany');
console.log(emirates);
// bind method with arguments as a default parameters

const bookEM2 = book.bind(emirates, 2);
bookEM2('ahmed hany');

console.log(emirates);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const display_message = `${this.question} ${this.options.join('\n')}
(Write option number)
        `;

    const prompt_message = Number(prompt(display_message));
    if (
      typeof prompt_message === 'number' &&
      prompt_message < this.answers.length
    )
      this.answers[prompt_message]++;
    else {
      alert('Invalid input');
      return;
    }
    const choose = prompt('array or string');
    if (choose === 'array' || choose === 'string') this.displayResults(choose);
    else alert('Invalid input');
  },
  displayResults(type) {
    if (type === 'array') console.log(this.answers.slice(1));
    else if (type === 'string')
      console.log(`Poll results are ${this.answers.slice(1).join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
