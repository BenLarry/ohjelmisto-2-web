'use strict';

let num = +prompt('enter a number, zero stops asking');

const nums = [];
while (num !== 0) {
  nums.push(num);
  num = +prompt('enter a number, zero stops asking');
}

nums.sort((a, b) => b - a);
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
