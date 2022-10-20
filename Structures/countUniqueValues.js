#!/usr/bin/env node

//implement a cuntion called countUniqueValues, which
//accpets a sorted array, and counts the unique
// values in the Array. There can be negative numbers in the Array, but it will
// will always be sorted.

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let start = 0;
  let checker = 1;
  while (checker <= arr.length - 1) {
    if (arr[start] !== arr[checker]) {
      arr.splice(start + 1, 1, arr[checker]);
      checker++;
      start++;
      continue;
    }
    if (arr[start] === arr[checker]) {
      checker++;
      continue;
    }
  }
  return start + 1;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
