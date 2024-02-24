'use strict';
/*
// calling the element with the class name message & checking the text it holds.
console.log(document.querySelector('.message').
  textContent);
// manipulating the textcontent, changing the text of the element
document.querySelector('.message').textContent = '🎉 Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent =
    message;
}

document.querySelector('.check').addEventListener
  ('click', function () {
    const guess = Number(document.querySelector('.guess').
      value);
    console.log(guess, typeof guess)


    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent =
      //   '⛔ No Number';
      displayMessage('⛔ No Number');

      // When player wins 
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent =
      //   '🎉 Correct Number!'
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent =
        secretNumber;
      document.querySelector('body').style.
        backgroundColor = '#60b347';

      document.querySelector('.number').style.
        width = '20rem'


      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent =
          highscore;
      }
    }
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? '📈 Too High!' : '📈 Too low!';
        displayMessage(guess > secretNumber ? '📈 Too High!' :
          '📈 Too low!');
        score--;
        document.querySelector('.score').textContent =
          score;
      } else {
        // document.querySelector('.message').textContent =
        //   '💥 You Lost The Game';
        displayMessage('💥 You Lost The Game');
        document.querySelector('.score').textContent =
          0;
      }
    }

    document.querySelector('.again').addEventListener
      ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        // document.querySelector('.message').textContent =
        //   'Start Guessing....';
        displayMessage('Start Guessing....');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent =
          score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.
          backgroundColor = '#222';
        document.querySelector('.number').style.
          width = '20rem'
        document.querySelector('.number').style.
          width = '15rem'




      })
  })