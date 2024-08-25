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

/*
class student {
  // constructor syntax
  constructor(firstName, lastname, birthYear, gpa) {
    this.f = firstName;
    this.l = lastname;
    this.b = birthYear;
    this.gpa = gpa;
    this.age = 2024 - this.b;
    this.grade = "No grade yet";
  }

  // getters  
  // used to get the value of a property
  returns the value of the property

  get get_name() {
    return this.f + " " + this.l;
  }

  get GPA() {
    return this.gpa;
  }

  get Grade() {
    return this.grade;
  }

  // setters
  //used to set the value of a property
  //takes an argument

  set set_grade(value) {
    if (value < 0 || value > 100) {
      return;
    }
    if (value >= 90) {
      this.grade = "A";
    } else if (value >= 80) {
      this.grade = "B";
    } else if (value >= 70) {
      this.grade = "C";
    } else if (value >= 60) {
      this.grade = "D";
    } else {
      this.grade = "F";
    }
  }

  // Static methods
  // methods that are called on the class itself, not on the object


  static hey() {
    console.log("Hey there");
  }
}

const student1 = new student("Ahmed", "Ali", 1990, 90);
console.log(student1);

// getters and setters
// getters don't take any arguments
console.log(student1.get_name);

student1.set_grade = 95;

console.log(student1.Grade);
console.log(student1);

// will work
student.hey();

//student1.hey(); // won't work
*/

// Challenge 2

/*
1- Re-create the Car class, but use ES6 class syntax this time
2- Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3- Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
4- Create an instance of the Car class
*/

class Car {
  constructor(mark, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    if (this.speed - 5 < 0) {
      console.log(`${this.make} is stopped`);
      return;
    }
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  // getters
  get speedUs() {
    return this.speed / 1.6;
  }

  // setters
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}
