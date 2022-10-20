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
  dfsPreOrder() {
    if (!this.root) {
      return undefined;
    }
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }
  dfsPostOrder() {
    if (!this.root) {
      return undefined;
    }
    let data = [];
    let current = this.root;
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }
  dfsInOrder() {
    if (!this.root) {
      return undefined;
    }
    let data = [];
    let current = this.root;
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(82);
tree.insert(24);
tree.insert(13);
tree.insert(4);
tree.insert(19);
tree.insert(224);
tree.insert(34);
tree.insert(46);
tree.insert(922);
console.log(tree);

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
console.log(tree.dfsInOrder());
