'use strict';

/*Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
Show the result in <p id="result"> when the button is clicked.*/

const calc = document.querySelector('#start');
const result = document.querySelector('#result');

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

calc.addEventListener('click', (e) => {
  const num1 = document.querySelector('#num1');
  const num2 = document.querySelector('#num2');

  if (
    isNaN(+num1.value) ||
    num1.value === '' ||
    isNaN(+num2.value) ||
    num2.value === ''
  ) {
    return (result.textContent =
      'Enter valid numbers for both text boxes!!!!!!');
  }

  const option = document.querySelector('#operation');

  if (option.value === 'add') {
    const total = sum(+num1.value, +num2.value);
    result.textContent = `Sum of ${num1.value} and ${num2.value} is ${total}`;
  } else if (option.value === 'sub') {
    const total = subtract(+num1.value, +num2.value);
    result.textContent = `Subtration of ${num1.value} and ${num2.value} is ${total}`;
  } else if (option.value === 'div') {
    if (+num1.value === 0 || +num2.value === 0) {
      return (result.textContent = `Cannot divide with 0`);
    }
    const total = divide(+num1.value, +num2.value);
    result.textContent = `division of ${num1.value} and ${num2.value} is ${total}`;
  } else {
    const total = multiply(+num1.value, +num2.value);
    result.textContent = `multiplication of ${num1.value} and ${num2.value} is ${total}`;
  }
});
