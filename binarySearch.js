#!/usr/bin/env node

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  console.log(mid);
  console.log(left, right);
  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === val ? mid : -1;
};

console.log(binarySearch(arr, 222));
