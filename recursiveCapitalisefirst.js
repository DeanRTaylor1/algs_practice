#!/usr/bin/env node

const capitaliseFirst = (arr) => {
  if (arr.length === 1) {
    return [(arr[0] = arr[0][0].toUpperCase() + arr[0].substring(1))];
  }
  return [
    (arr[0] = arr[0][0].toUpperCase() + arr[0].substring(1)),
    ...capitaliseFirst(arr.splice(1)),
  ];
};

let temp = ["hello"];

console.log(capitaliseFirst(["car", "taco", "banana"]));
