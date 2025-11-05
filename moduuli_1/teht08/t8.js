'use strict';

const ul = document.querySelector('#target');
console.log(ul);

const startYear = +prompt('Enter a year to begin with');
const endYear = +prompt('Enter a year to end with');

for (let i = startYear; i <= endYear; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    const li = document.createElement('li');
    li.innerText = i;
    ul.appendChild(li);
  }
}
