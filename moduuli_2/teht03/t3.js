'use strict';

const dogNames = [];
const ul = document.querySelector('#target');

for (let i = 0; i < 6; i++) {
  dogNames.push(prompt('Enter a dog name'));
}

dogNames.sort().reverse();
for (let i = 0; i < dogNames.length; i++) {
  let li = document.createElement('li');
  li.innerText = dogNames[i];
  ul.appendChild(li);
}
