#!/usr/bin/env node

const bubbleSort = (arr) => {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) {
      return arr;
    }
  }

  return arr;
};

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

let arr = [2, 1, 2, 3, 4, 6, 5, 7, 8];

console.log(bubbleSort(arr));

// function removeZeros(array) {
//   // Sort "array" so that all elements with the value of zero are moved to the
//   // end of the array, while the other elements maintain order.
//   // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
//   // Zero elements also maintain order in which they occurred.
//   // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

//   // Do not use any temporary arrays or objects. Additionally, you're not able
//   // to use any Array or Object prototype methods such as .shift(), .push(), etc

//   // the correctly sorted array should be returned.
//   console.log(array)
//   let noSwaps = false;
//   for (let i = array.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {

//       if ((array[j] === 0 || array[j] === '0') ) {
//         noSwaps = false;
//         swap(array, j, j + 1);
//       }
//     }
//     if (noSwaps) {
//       return array;
//     }
//   }

//   return array;

// }

// const swap = (arr, index1, index2) => {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };
