'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
//  Display Movements

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  movements = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    mov = Math.abs(mov);
    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  return;
};

// Calculate and display balance
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  return (labelBalance.textContent = `${balance}€`);
};

const calcDisplaySummary = function (account) {
  const movements = account.movements;
  const income = movements.reduce(function (acc, mov) {
    return mov > 0 ? acc + mov : acc;
  }, 0);

  const out = movements.reduce(function (acc, mov) {
    return mov < 0 ? acc + mov : acc;
  }, 0);
  const interest = movements.reduce(function (acc, mov) {
    return (mov * account.interestRate) / 100 >= 1
      ? (acc += (mov * account.interestRate) / 100)
      : acc;
  }, 0);
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
  return;
};
// Create Usernames

const createUsernames = function (accounts) {
  const users = accounts.map(function (account) {
    let name = account.owner.toLowerCase().split(' ');
    account.username = name.map(function (n) {
      return n[0];
    });
    account.username = account.username.join('');
  });
};
createUsernames(accounts);
//console.log(createUsernames(accounts));
//calcDisplayBalance(account1);
//calcDisplayBalance(account2);
//createUsernames(accounts);
//console.log(accounts);

// Event Handlers
// Login

const updateUI = function (account) {
  // Display Movements
  displayMovements(account.movements);

  // Display Balance
  calcDisplayBalance(account);

  // Display Summary
  calcDisplaySummary(account);
};

const checkUser = function (account, pin) {
  if (!account) return 0;
  return account.pin === pin;
};

let currentAccount = {};
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const userAccount = accounts.find(function (account) {
    return account.username === inputLoginUsername.value;
  });

  if (!checkUser(userAccount, Number(inputLoginPin.value))) {
    containerApp.style.opacity = 0;
    alert('Invalid Username or Password');
    inputLoginUsername.value = inputLoginPin.value = '';
    return;
  }
  // welcome message
  labelWelcome.textContent = `Welcome back, ${userAccount.owner.split(' ')[0]}`;

  // Change opacity
  containerApp.style.opacity = 100;

  // clear fields
  inputLoginUsername.value = inputLoginPin.value = '';
  currentAccount = userAccount;
  // update UI
  updateUI(userAccount);
});

// Transfer Money

const checkdata = function (sender, receiver, amount) {
  console.log(amount, receiver, sender);
  if (amount <= 0) {
    alert('Amount must be greater than 0');
    return 0;
  }
  if (!receiver) {
    alert('Receiver not found');
    return 0;
  }
  if (receiver.username === sender.username) {
    alert('You can not transfer to yourself');
    return 0;
  }
  if (
    amount >
    sender.movements.reduce(function (acc, mov) {
      return acc + mov;
    }, 0)
  ) {
    alert('Insufficient Balance');
    return 0;
  }
  return 1;
};
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });
  const sender = currentAccount;

  inputTransferAmount.value = inputTransferTo.value = '';
  if (!checkdata(sender, receiver, amount)) return;

  sender.movements.push(-amount);
  receiver.movements.push(amount);
  updateUI(currentAccount);

  // clear fields
  inputTransferAmount.value = inputTransferTo.value = '';

  alert('Transfer Successful you send ' + amount + '€ to ' + receiver.owner);
});

// close account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value == currentAccount.username
  ) {
    const index = accounts.findIndex(function (account) {
      return account.username === currentAccount.username;
    });
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
    alert('Account Closed');
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

// Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  const balance = currentAccount.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  if (amount <= 0) {
    alert('Amount must be greater than 0');
    return;
  }

  if (amount > balance * 0.1) {
    alert('Loan not approved');
    return;
  }
  currentAccount.movements.push(-amount);
  inputLoanAmount.value = '';
  updateUI(currentAccount);
});

// Sorting
let sorted = 0;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});
