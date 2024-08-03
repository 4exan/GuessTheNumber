'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = `💯Score: ${score}`;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input-field').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
  } else if (guess === secretNumber && score >= 1) {
    document.querySelector('.message').textContent = '✅Correct number!';
    if (score > highscore) {
      highscore = score;
      document.querySelector(
        '.highscore'
      ).textContent = `🥇Highscore: ${highscore}`;
    } else {
      document.querySelector(
        '.highscore'
      ).textContent = `🥇Highscore: ${highscore}`;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#59af59';
  } else if (guess > secretNumber && score >= 1) {
    document.querySelector('.message').textContent = '⬆️Too high!';
    score--;
    document.querySelector('.score').textContent = `💯Score: ${score}`;
  } else if (guess < secretNumber && score >= 1) {
    document.querySelector('.message').textContent = '⬇️Too low!';
    score--;
    document.querySelector('.score').textContent = `💯Score: ${score}`;
  } else {
    document.querySelector('.message').textContent = '💀You lose!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = `💯Score: ${score}`;
  document.querySelector('body').style.backgroundColor = '#404040';
  document.querySelector('.message').textContent = 'Start guessing!';
});
