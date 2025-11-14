'use strict';

const p = document.querySelector('#target');
const form = document.querySelector('#source');
//FIX
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const names = document.querySelectorAll('form > [name]');
  const firstName = names[0].value;
  const lastName = names[1].value;
  if (firstName === '' || lastName === '') {
    return (p.textContent = 'Enter valid name');
  }

  p.textContent = `Your name is ${firstName} ${lastName}`;
});
