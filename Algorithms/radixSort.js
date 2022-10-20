#!/usr/bin/env node

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => {
  let max = 0;
  arr.forEach((item) => {
    max = Math.max(max, digitCount(item));
  });
  return max;
};

const radixSort = (arr) => {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k <= maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

let num = 12768;
let arr = [1, 12, 112345342343, 1142, 1244, 9];

console.log(radixSort(arr));
