'use strict';

const diceAmount = +prompt('Enter number of dices');
const sumOfInterest = +prompt('enter sum of interest');

let sums = 0;

for (let i = 0; i < 10000; i++) {
  let total = 0;
  for (let j = 0; j < diceAmount; j++) {
    total += Math.floor(Math.random() * 6) + 1;
    if (total === sumOfInterest) {
      sums++;
    }
  }
}

const percentage = (sums / 10000) * 100;

document.querySelector(
  '#target'
).innerText = `${diceAmount}, sum ${sumOfInterest}, propability is about ${percentage.toFixed(
  2
)}%`;
