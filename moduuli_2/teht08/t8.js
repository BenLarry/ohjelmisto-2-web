'use strict';

const p = document.querySelector('#target');
const names = ['Ben', 'Max', 'Charles', 'Samuli', 'Nico'];

function concat(arrStrings) {
  let concattedStrings = '';
  for (let i = 0; i < arrStrings.length; i++) {
    concattedStrings += arrStrings[i];
  }
  return (p.innerText = concattedStrings);
}

concat(names);
