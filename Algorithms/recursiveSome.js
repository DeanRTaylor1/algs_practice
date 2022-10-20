#!/usr/bin/env node

const someRecursive = (arr, cb) => {
  if (arr.length === 0) {
    return false;
  }
  return cb(arr[0]) ? true : someRecursive(arr.slice(1), cb);
};
const isOdd = (val) => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd));
