'use strict';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(arrNums) {
  const evenNums = [];
  for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] % 2 === 0) {
      evenNums.push(arrNums[i]);
    }
  }
  return evenNums;
}

console.log('Even numbers: ' + even(nums));
console.log('All numbers: ' + nums);
