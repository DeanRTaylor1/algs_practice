#!/usr/bin/env node

// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// // Time: O(N)

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// interface StringArray {
//   [index: string]: number;
// }

const sameFrequency = (num1: number, num2: number) => {
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }
  let num1String: string = num1.toString();
  let num2String: string = num2.toString();
  let frequencyCounter: StringArray = {};
  for (let char of num1String) {
    frequencyCounter[char] = ++frequencyCounter[char] || 1;
  }
  for (let char of num2String) {
    if (!frequencyCounter[char]) {
      return false;
    }
    frequencyCounter[char]--;
  }
  return true;
};

// function areThereDuplicates1() {
//     return new Set(arguments).size !== arguments.length;
//   }

console.log(sameFrequency(18224, 28124));
