'use strict';

const diceAmount = +prompt('Enter how many dices:');

let total = 0;

for (let i = 0; i < diceAmount; i++) {
  total += Math.floor(Math.random() * 6) + 1;
}

document.querySelector(
  '#target'
).innerText = `Sum of the thrown dice is ${total}`;
