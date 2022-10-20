#!/usr/bin/env node

const recursiveRange = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6));
