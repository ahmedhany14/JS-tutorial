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
/*
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

*/

// Inheritance between "classes": ES6 classes

/*
class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2024 - this.birthYear;
  }

  static say_hey() {
    console.log("Hey there");
  }

  set fullName(name) {
    this.fullName = name;
  }

  get fullName() {
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  }

  get age() {
    console.log(`I am ${this.calcAge()} years old`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, birthYear, course) {
    // super() method, used to call the constructor of the parent class and assign the values to the properties of the parent class
    super(firstName, lastName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

  // method overriding, if we have a method in the parent class and we want to change it in the child class
  // we can do that by creating a method with the same name in the child class, and it will called from the child class
  calcAge() {
    return 2024 - this.birthYear;
  }
}

const student1 = new Student("Ahmed", "hany", 2003, "Computer Science");

student1.introduce();

console.log(student1.calcAge());

*/

// Objec Inheritance: Object.create()

/*
const personObj = {
  init(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  },
  calcAge() {
    return 2024 - this.birthYear;
  },

  get_name() {
    return this.firstName + " " + this.lastName;
  },
  get_age() {
    return this.calcAge();
  },
};

const ahmedPerson = Object.create(personObj);
ahmedPerson.init("Ahmed", "Ali", 1990);

const studentObj = Object.create(personObj);

studentObj.init = function (firstName, lastName, birthYear, course) {
  personObj.init.call(this, firstName, lastName, birthYear);
  this.course = course;
};

studentObj.introduce = function () {
  console.log(`My name is ${this.get_name()} and I study ${this.course}`);
};

const hany_student = Object.create(studentObj);
hany_student.init("Hany", "Ali", 2000, "Computer Science");
console.log(hany_student.get_age());
hany_student.introduce();
//ahmedPerson.introduce(); // error

console.log(ahmedPerson.get_age());

*/

class Bank_account {
  // prive properties

  #movements = [];
  #pin;

  constructor(owner_name, balance, pin) {
    this.owner_name = owner_name;
    this.balance = balance;

    // This is a public property, we can access it directly
    //this.pin = pin;
    //this.movements = [];

    // protected property, we can't access it directly, but we can access it through a method
    //this._pin = pin;
    //this._movements = [];

    this.#pin = pin;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.#movements.push(-amount);
    } else {
      return "Insufficient balance";
    }

    // return this to make the method chainable
    return this;
  }
  drposit(amount) {
    this.balance += amount;
    this.#movements.push(amount);

    // return this to make the method chainable
    return this;
  }

  /*
  _approveLoan(amount) {
    if (amount > 0.1 * this.balance) {
      return false;
    }
    return true;
  }
    */
  requestLoan(amount) {
    if (this.#approveLoan(amount)) {
      this.drposit(amount);
      console.log("Loan approved");
    } else {
      console.log("Loan denied");
    }
    // return this to make the method chainable
    return this;
  }

  // privet methods

  #approveLoan(amount) {
    if (amount > 0.1 * this.balance) {
      return false;
    }
    return true;
    // return this to make the method chainable
    return this;
  }
}

const acc1 = new Bank_account("Ahmed", 1000, 1234);

acc1.drposit(200);
acc1.requestLoan(50);
acc1.requestLoan(1000);

// we have a problem, which is we can access the balance directly and change it so we need to make it private
//console.log(acc1.pin); // we still can access it, but at least we know that it's a protected property
//console.log(acc1.#pin); // error, we can't access it

// Chining methods
acc1.drposit(300).drposit(500).withdraw(200).requestLoan(1000).withdraw(500);
console.log(acc1);
