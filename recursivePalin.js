#!/usr/bin/env node

const isPalindrome = (string) => {
  if (string.length === 1) {
    return true;
  }
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  return isPalindrome(string.substring(1, string.length - 1));
};

console.log(isPalindrome("awesome"));
