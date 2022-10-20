#!/usr/bin/env node

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = start;
  const pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);

  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let currentPivot = pivot(arr, left, right);
    quickSort(arr, left, currentPivot - 1);
    quickSort(arr, currentPivot + 1, right);
  }
  return arr;
};

let arr1 = [4, 8, 2, 1, 5, 7, 6, 3];

console.log(quickSort(arr1));
