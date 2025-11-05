'use strict';

const calculate = confirm('Should I calculate the square root?');

if (calculate) {
  const num = +prompt('Enter number:');
  if (num >= 0) {
    document.querySelector(
      '#target'
    ).innerText = `square root of ${num} is ${Math.sqrt(num)}`;
  } else {
    document.querySelector('#target').innerText =
      'The square root of a negative number is not defined';
  }
} else {
  document.querySelector('#target').innerText =
    'The square root is not calculated.';
}
