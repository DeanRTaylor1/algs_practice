class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// using min heap -> priority 1 = highest priority
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp(idx = this.values.length - 1) {
    if (idx === 0) return;
    const parentIdx = Math.floor((idx - 1) / 2);
    if (this.values[idx].priority < this.values[parentIdx].priority) {
      const valueToSwap = this.values[parentIdx];
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = valueToSwap;
      this.bubbleUp(parentIdx);
    }
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);

    this.bubbleUp();

    return this.values;
  }

  sinkDown(idx = 0) {
    const leftIdx = idx * 2 + 1;
    const rightIdx = idx * 2 + 2;
    const node = this.values[idx];

    const higher =
      this.values[leftIdx]?.priority <= this.values[rightIdx]?.priority
        ? leftIdx
        : rightIdx;

    if (higher && this.values[higher].priority < node.priority) {
      this.values[idx] = this.values[higher];
      this.values[higher] = node;
      this.sinkDown(higher);
    }
    return;
  }

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      return this.values.pop();
    }
    const max = this.values[0];
    this.values[0] = this.values.pop();

    this.sinkDown();

    return max;
  }
}

const printHeap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (2 * i + 2 < arr.length) {
      console.log(
        ` ${arr[2 * i + 1].priority}  <--      ${arr[i].priority} -->    ${
          arr[2 * i + 2].priority
        }`
      );
      continue;
    }
    if (2 * i + 1 < arr.length) {
      console.log(
        `   ${arr[2 * i + 1].priority}     <--     ${arr[i].priority}`
      );
      continue;
    }
  }
};

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(200, 2);

priorityQueue.enqueue(320, 3);

priorityQueue.enqueue(550, 5);

priorityQueue.enqueue(4230, 1);

console.log(priorityQueue.values);

// console.log(priorityQueue.values);
// priorityQueue.enqueue(1, 2);
// console.log(priorityQueue.values);
// priorityQueue.enqueue(597, 1);
printHeap(priorityQueue.values);
priorityQueue.dequeue();
printHeap(priorityQueue.values);
// priorityQueue.dequeue();
// printHeap(priorityQueue.values);
// priorityQueue.dequeue();
console.log(priorityQueue.values);
