#!/usr/bin/env node

function flatten(arr, result = []) {
  for (let i in arr) {
    if (typeof arr[i] === "object") {
      flatten(arr[i], result);
    } else result.push(arr[i]);
  }

  return result;
}
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
