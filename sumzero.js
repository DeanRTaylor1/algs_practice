#!/usr/bin/env node

//Write a function called sumzero that takes a sorted array and return the first pair of values that when combined
//return zero

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, -1, 2, 3, 10]));
