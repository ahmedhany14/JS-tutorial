"use strict";

// 1. Constructor function, new operator

// create a constructor function for a Person

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create a method inside a constructor function
};

const ahmed = new Person("Ahmed", 1990);
console.log(ahmed);
const hany = new Person("Hanyn", 1995);
console.log(hany);

const mo = {
  firstName: "Mo",
  birthYear: 1990,
};

console.log(ahmed instanceof Person);
console.log(mo instanceof Person);

// const js = Person("JS", 1990); // undefined, because we didn't use the new operator
//console.log(js);

// 2. Prototypes, create methods for the constructor function

Person.prototype.calcAge = function () {
  return 2021 - this.birthYear;
};

console.log(Person.prototype);

console.log(ahmed.calcAge());
*/

// Challenge 1
// 1. Create a constructor function for a Car.
// The car should have a make, speed,
// and a method that "accelerates" and another method that "brakes".

// 2. Create 2 car objects and experiment with calling the "accelerate" and "brake" methods multiple times on each of them.

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  if (this.speed - 5 < 0) {
    console.log(`${this.make} is stopped`);
    return;
  }
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const BMW = new Car("BMW", 120);
BMW.accelerate();
BMW.accelerate();
BMW.accelerate();

BMW.break();
BMW.accelerate();
BMW.break();
*/

// Class

// 1. Class definition, and constructor method, setters and getters

class student {
  // constructor syntax
  constructor(firstName, lastname, birthYear, gpa) {
    this.f = firstName;
    this.l = lastname;
    this.b = birthYear;
    this.gpa = gpa;
    this.age = 2024 - this.b;
  }
  get name() {
    return `${this.f} ${this.l}`;
  }
  get Age() {
    return this.age;
  }

  get mark() {
    if (this.gpa < 0 || this.gpa > 100 || isNaN(this.gpa)) {
      return "Invalid GPA";
    } else if (this.gpa >= 90) {
      return "A";
    } else if (this.gpa >= 80) {
      return "B";
    } else if (this.gpa >= 70) {
      return "C";
    } else if (this.gpa >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  // setter, will be called when we set the value
  // used to validate the value
  set gpa(gpa) {
    if (gpa < 0 || gpa > 100 || isNaN(gpa)) {
      alert("Invalid GPA");
      return;
    }
    this._gpa = gpa;
  }
}

const student1 = new student("Ahmed", "Ali", 1990, 90);
console.log(student1);

// getters and setters
// getters don't take any arguments
console.log(student1.name);
console.log(student1.Age);

console.log(student1);
// setters
