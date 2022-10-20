#!/usr/bin/env node

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    let nodeFound = false;
    while (!nodeFound) {
      if (newNode.val === temp.val) return undefined;
      if (newNode.val > temp.val) {
        if (!temp.right) {
          temp.right = newNode;
          nodeFound = true;
        } else {
          temp = temp.right;
        }
      } else {
        if (!temp.left) {
          temp.left = newNode;
          nodeFound = true;
        } else {
          temp = temp.left;
        }
      }
    }
    return this;
  }
  find(val) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;
    let nodeFound = false;
    while (!nodeFound) {
      if (val === temp.val) {
        nodeFound = true;
        return temp;
      }
      if (val > temp.val) {
        if (!temp.right) {
          nodeFound = true;
          return false;
        }
        temp = temp.right;
      }
      if (val < temp.val) {
        if (!temp.left) {
          nodeFound = true;
          return false;
        }
        temp = temp.left;
      }
    }
  }
}

let tree = new BinarySearchTree();
console.log(tree.insert(82));
console.log(tree.insert(24));
console.log(tree.insert(13));
console.log(tree.insert(4));
console.log(tree.insert(19));
console.log(tree.insert(224));
console.log(tree.insert(34));
console.log(tree.insert(46));
console.log(tree.insert(922));
console.log(tree.find(24));

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);
