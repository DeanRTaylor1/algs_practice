#!/usr/bin/env node

const capitalizedWords = (arr) => {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  return [arr[0].toUpperCase(), ...capitalizedWords(arr.slice(1))];
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words));
