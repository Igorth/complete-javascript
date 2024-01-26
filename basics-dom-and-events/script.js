'use strict';
/*
What is DOM?
DOM stands for Document Object Model.

Event listeners
functions that listen to events
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number in the input field
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ☹️!';

    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Win 😁!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '100%';

    // Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 📈!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#af3648';
      document.querySelector('.number').style.width = '30rem';
    }

    // Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 📉!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#af3648';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
