#!/usr/bin/env node

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    console.log(this.values, val);
    while (this.values[index] > this.values[parentIndex]) {
      this.swap(this.values, parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }
  extractMax() {
    let maxVal;
    if (!this.values.length) {
      return undefined;
    }
    if (this.values.length === 1) {
      maxVal = this.values.pop();
      return maxVal;
    }
    this.swap(this.values, 0, this.values.length - 1);
    maxVal = this.values.pop();
    if (this.values.length > 1) this.bubbleDown();
    return maxVal;
  }
  bubbleDown() {
    let sorted = false;
    let parentIndex = 0;
    let childIndex1 = parentIndex * 2 + 1;
    let childIndex2 = parentIndex * 2 + 2;

    while (sorted === false) {
      if (
        childIndex1 > this.values.length - 1 &&
        childIndex2 > this.values.length - 1
      ) {
        sorted = true;
        break;
      } else {
        let nextIndex =
          this.values[childIndex1] > this.values[childIndex2]
            ? childIndex1
            : childIndex2;
        if (this.values[nextIndex] < this.values[parentIndex]) {
          sorted = true;
          break;
        }
        this.swap(this.values, parentIndex, nextIndex);
        parentIndex = nextIndex;
        childIndex1 = parentIndex * 2 + 1;
        childIndex2 = parentIndex * 2 + 2;
      }
    }
  }
  swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
}

const printHeap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (2 * i + 2 < arr.length) {
      console.log(
        ` ${arr[2 * i + 1]}  <--      ${arr[i]} -->    ${arr[2 * i + 2]}`
      );
      continue;
    }
    if (2 * i + 1 < arr.length) {
      console.log(`   ${arr[2 * i + 1]}     <--     ${arr[i]}`);
      continue;
    }
  }
};

let maxHeap = new MaxBinaryHeap();

maxHeap.insert(1000);
console.log(maxHeap.values);
maxHeap.insert(200);
console.log(maxHeap.values);
maxHeap.insert(320);
console.log(maxHeap.values);
maxHeap.insert(400);
console.log(maxHeap.values);
maxHeap.insert(550);
console.log(maxHeap.values);
maxHeap.insert(3220);
console.log(maxHeap.values);
maxHeap.insert(4230);
console.log(maxHeap.values);
maxHeap.insert(5647);
console.log(maxHeap.values);
maxHeap.insert(40220);
console.log(maxHeap.values);
maxHeap.insert(5510);
console.log(maxHeap.values);
maxHeap.insert(314220);
console.log(maxHeap.values);
maxHeap.insert(1);
console.log(maxHeap.values);
maxHeap.insert(597);
console.log(maxHeap.values);
printHeap(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
printHeap(maxHeap.values);
