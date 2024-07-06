'use strict';

const account1 = {
  owner: 'Steven Thomas Williams',
  movements: [
    [200, 0],
    [-200, 1],
    [340, 2],
    [-300, 3],
    [-20, 4],
    [50, 5],
    [400, 7],
    [-460, 8],
  ],
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],

  interestRate: 0.7,
  pin: 3333,
};

const account2 = {
  owner: 'Sarah Smith',
  movements: [
    [430, 0],
    [1000, 1],
    [700, 2],
    [50, 3],
    [90, 4],
  ],
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
  ],

  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2];

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
const configDate = function () {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth()).padStart(2, 0);
  const day = String(now.getDate()).padStart(2, 0);
  const hours = String(now.getHours()).padStart(2, 0);
  const minutes = String(now.getMinutes()).padStart(2, 0);

  const date = `${day}/${month}/${year}, ${hours}:${minutes}`;
  return date;
};

let currentAccount = {};

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  let new_movements = [];

  for (let i = 0; i < movements.length; i++) {
    new_movements.push(movements[i]);
  }

  if (sort) {
    new_movements = new_movements.sort(function (a, b) {
      return Math.abs(a[0]) - Math.abs(b[0]);
    });
  }

  // sort new_movements by first element

  new_movements.forEach(function (movement) {
    let mov = movement[0];
    let i = movement[1];
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    mov = Math.abs(mov);

    const now = new Date(currentAccount.movementsDates[i]);
    const year = now.getFullYear();
    const month = String(now.getMonth()).padStart(2, 0);
    const day = String(now.getDate()).padStart(2, 0);
    const hours = String(now.getHours()).padStart(2, 0);
    const minutes = String(now.getMinutes()).padStart(2, 0);

    const display_date = `${day}/${month}/${year}, ${hours}:${minutes}`;

    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${display_date}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  return;
};

// Calculate and display balance
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce(function (acc, mov) {
    return acc + mov[0];
  }, 0);
  return (labelBalance.textContent = `${balance.toFixed(2)}€`);
};

const calcDisplaySummary = function (account) {
  const movements = account.movements;
  const income = movements.reduce(function (acc, mov) {
    return mov[0] > 0 ? acc + mov[0] : acc;
  }, 0);

  const out = movements.reduce(function (acc, mov) {
    return mov[0] < 0 ? acc + mov[0] : acc;
  }, 0);
  const interest = movements.reduce(function (acc, mov) {
    return (mov[0] * account.interestRate) / 100 >= 1
      ? (acc += (mov[0] * account.interestRate) / 100)
      : acc;
  }, 0);
  labelSumIn.textContent = `${income.toFixed(2)}€`;
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  labelDate.textContent = configDate();
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
      return acc + mov[0];
    }, 0)
  ) {
    alert('Insufficient Balance');
    return 0;
  }
  return 1;
};
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiver = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });
  const sender = currentAccount;

  inputTransferAmount.value = inputTransferTo.value = '';
  if (!checkdata(sender, receiver, amount)) return;

  sender.movements.push([-amount, sender.movements.length]);
  receiver.movements.push([amount, receiver.movements.length]);
  updateUI(currentAccount);

  // clear fields
  inputTransferAmount.value = inputTransferTo.value = '';

  alert('Transfer Successful you send ' + amount + '€ to ' + receiver.owner);
});

// close account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    +inputClosePin.value === currentAccount.pin &&
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
  const amount = +inputLoanAmount.value;
  const balance = currentAccount.movements.reduce(function (acc, mov) {
    return acc + mov[0];
  }, 0);
  if (amount <= 0) {
    alert('Amount must be greater than 0');
    return;
  }

  if (amount > balance * 1.0) {
    alert('Loan not approved');
    return;
  }

  const now = new Date();
  currentAccount.movementsDates.push(now.toISOString());
  currentAccount.movements.push([-amount, currentAccount.movements.length]);
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
