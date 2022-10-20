#!/usr/bin/env node
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const selectionSort = (arr) => {
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
};

let arr = [2, 1, 2, 3, 99, 105, 16, 44, 13, 4, 6, 5, 7, 8];

console.log(selectionSort(arr));
