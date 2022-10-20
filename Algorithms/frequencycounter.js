#!/usr/bin/env node

//write a function called same which accepts two arrays.
//The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let num of arr1) {
    frequencyCounter1[num] = ++frequencyCounter1[num] || 1;
  }
  for (let num of arr2) {
    frequencyCounter2[num] = ++frequencyCounter2[num] || 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);
  for (let key in frequencyCounter1) {
    //if the squared value is not in the second array the arrays do not match
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      //if the number of squared values is not equal to the number of root values, the result is also false
      return false;
    }
  }
  return true;
};

let arr1 = [1, 2, 3, 1];
let arr2 = [4, 1, 9, 1];

console.log(same(arr1, arr2));
