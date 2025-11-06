'use strict';

let num = +prompt('Enter a number, same value closes program');

const nums = [];
while (true) {
  if (nums.includes(num)) {
    alert(`Number ${num} has already been given`);
    break;
  }
  nums.push(num);
  num = +prompt('Enter a number, same value closes program');
}

nums.sort((a, b) => a - b);
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
