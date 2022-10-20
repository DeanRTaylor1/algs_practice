"use strict";
// Implement a function called,
// areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
const areThereDuplicates = (...val) => {
    let frequencyCounter = {};
    for (let item of val) {
        if (frequencyCounter[item]) {
            return true;
        }
        frequencyCounter[item] = 1;
    }
    return false;
};
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
