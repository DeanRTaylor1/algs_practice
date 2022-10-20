#!/usr/bin/env node

// function permutations(string) {
//   if (string.length === 1) {
//     return [string];
//   }
//   let arr = [];
//   for (let i = 0; i < string.length; i++) {
//     string = string[string.length - 1].concat(
//       string.substring(0, string.length - 1)
//     );
//     console.log(string);
//     if (string !== string.split().reverse().join()) {
//       arr.push(string);
//       arr.push(string.reverse().reverse().join());
//     } else {
//       arr.push(string);
//     }

//   }

//   return arr;
// }

function permutations(string) {
  if (string.length === 1) {
    return [string];
  }
  let arr = [string];
  for (let i = 0; i < string.length; i++) {
    let j = 0;
    while (j < string.length) {
      let tempString = string.split("");
      if (tempString[j] === string[i]) {
        tempString.shift();
        tempString.splice(j, 0, string[i]);
        console.log(tempString.join(""));
      } else {
        tempString.splice(j, 1, string[i]);
        console.log(tempString.join(""));
      }

      j++;
    }
  }

  return arr;
}

console.log(permutations("a"));
console.log(permutations("ab"));
console.log(permutations("abba"));

// get character 1
// if next character less than character + 1
// move character to 2
// if end of
