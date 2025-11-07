'use strict';

const ul = document.querySelector('#target');
const num = +prompt('enter how many sided die you want to be thrown');

function diceRoll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let roll = null;

while (roll !== num) {
  roll = diceRoll(num);
  let li = document.createElement('li');
  li.innerText = roll;
  ul.appendChild(li);
}
