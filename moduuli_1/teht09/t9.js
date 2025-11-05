'use strict';

const num = +prompt('Enter a number');

let isPrime = true;

if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
} else {
  isPrime = false;
}

if (isPrime) {
  document.querySelector('#target').innerText = `${num} is prime number`;
} else {
  document.querySelector('#target').innerText = `${num} is not prime number`;
}
