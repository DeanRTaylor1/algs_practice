#!/usr/bin/env node

// function sum(num) {
//   if (num === 1) {
//     return 1;
//   }
//   let results = [num.toString()];
//   let temp = [num];
//   while (temp[0] > 1) {
//     console.log(results, temp);
//     temp[0] = temp[0] - 1;
//     temp.push(1);
//     results.push(temp.join());
//     if (temp.filter((item) => item === 1)) {
//       console.log(temp.filter((item) => item === 1));
//     }
//   }
//   return results;
// }

function sum(num) {
  const getResults = (num, arr = [1]) => {
    if (num === 1) {
      return arr;
    }
    if (num % 2 === 0) {
      arr.push(`${num / 2} + ${num / 2}`);
    }
    arr.push(num);
    return getResults(num - 1, arr);
  };
  results = getResults(num);
  return results.length;
}

console.log(sum(10));
