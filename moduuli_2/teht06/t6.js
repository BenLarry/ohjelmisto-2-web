'use strict';

const ul = document.querySelector('#target');
console.log(ul);
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

let roll = null;

while (roll !== 6) {
  roll = diceRoll();
  let li = document.createElement('li');
  li.innerText = roll;
  ul.appendChild(li);
}
