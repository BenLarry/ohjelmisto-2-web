'use strict';

const num1 = +prompt('Enter number');
const num2 = +prompt('Enter second number');
const num3 = +prompt('Enter third number');

const sum = num1 + num2 + num3;
const avg = sum / 3;
const mul = num1 * num2 * num3;

document.querySelector(
  '#target'
).innerText = `numeroista ${num1}, ${num2} ja ${num3}. Summa: ${sum} keskiarvo: ${avg} ja tulo: ${mul}`;
