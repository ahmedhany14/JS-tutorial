'use strict';

function generaqteRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
let gussNumber = generaqteRandomNumber(),
  score = 30,
  highscore = 0;

console.log(gussNumber);
if (score > 0) {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    function displayMessage(message) {
      document.querySelector('.message').textContent = message;
    }

    if (!guess) {
      displayMessage('⛔️ No number!');
    } else if (guess == gussNumber) {
      highscore = Math.max(score, highscore);

      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = gussNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (guess > gussNumber) {
      score--;
      displayMessage('Too high!');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score <= 0) {
      document.querySelector('.check').disabled = true;
      displayMessage('You lost the game!, press again to play again');
    }
  });
}

document.querySelector('.again').addEventListener('click', function () {
  gussNumber = generaqteRandomNumber();
  score = 30;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
});
