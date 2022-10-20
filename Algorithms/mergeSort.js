#!/usr/bin/env node

const merge = (arr1, arr2) => {
  let tempArr = [];
  let i = 0;
  let j = 0;
  while (i <= arr1.length - 1 || j <= arr2.length - 1) {
    if (i > arr1.length - 1) {
      return (tempArr = [...tempArr, ...arr2.slice(j)]);
    }
    if (j > arr2.length - 1) {
      return (tempArr = [...tempArr, ...arr1.slice(i)]);
    }
    if (arr1[i] <= arr2[j]) {
      tempArr.push(arr1[i]);
      i++;
    }
    if (arr2[j] <= arr1[i]) {
      tempArr.push(arr2[j]);
      j++;
    }
  }
  return tempArr;
};

let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 16, 17, 18];
let arr2 = [2, 4, 6, 8, 10, 12, 14, 16];
let arr3 = [9, 2, 3, 4, 2, 12, 8, 19, 10];

function getData() {
  let data = [];

  for (let i = 0; i < 1000; i++) {
    data.push(Math.floor(Math.random() * (10000 - 1) + 1));
  }
  return data;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
};
let data = getData();
console.log(mergeSort(data));
