// takes an array and a value
// loop through the array and check if the current array element is equal to the value
// if it is, return the index at which the element is found
// if the value is never found, return -1

const linearSearch = (arr, val) => {
  for (let [index, item] of arr.entries()) {
    console.log(index);
    if (item === val) {
      return index;
    }
  }
  return -1;
};

let arr = [123, 24, 3, 4, 5, 6666, 73, 8];
console.log(linearSearch(arr, 66626));
