'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

// buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('btn--new');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

// Current score
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
