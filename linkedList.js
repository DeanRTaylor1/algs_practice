#!/usr/bin/env node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    console.log(node.val);
    return node;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      let removed = current.next;
      current.next = null;
      this.tail = current;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      console.log("removed: " + removed.val);
      return removed;
    }
  }
  shift() {
    if (!this.head) {
      return false;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      oldHead.next = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return this;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insertInto(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode.val;
  }
  reverse() {
    let newTail = this.head;
    let newHead = this.tail;
    this.head = newHead;
    this.tail = newTail;
    let prev;
    let current = newTail;
    let next = current.next;
    for (let i = 0; i < this.length; i++) {
      prev = current;
      next = next.next;
      current = next;
      current.next = prev;
    }
    newTail.next = null;
  }
}

let linkedlist1 = new SinglyLinkedList();
console.log(linkedlist1);
linkedlist1.push(1);
console.log(linkedlist1);
linkedlist1.push(2);
console.log(linkedlist1);
linkedlist1.push(3);
console.log(linkedlist1);
linkedlist1.push(4);
console.log(linkedlist1);
linkedlist1.push(5);
console.log(linkedlist1);
linkedlist1.push(6);
console.log(linkedlist1);
console.log(linkedlist1.reverse());
console.log(linkedlist1);
