#!/usr/bin/env node

//undirectional graph, for a directional graph don't addedge to both vertices

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((item) => {
        return item !== v2;
      });
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((item) => {
        return item !== v1;
      });
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let edge of this.adjacencyList[vertex]) {
        this.removeEdge(edge, vertex);
      }
      delete this.adjacencyList[vertex];
      return true;
    }
  }
  DFSRecursive(vertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!adjacencyList[vertex]) {
        return;
      }
      result.push(vertex);
      visited[vertex] = "true";
      for (let edge of adjacencyList[vertex]) {
        if (!visited[edge]) {
          dfs(edge);
        }
      }
    })(vertex);
    return result;
  }
  DFSIterative(vertex) {
    let stack = [];
    let result = [];
    let visited = {};
    stack.push(vertex);

    while (stack.length) {
      let current = stack.pop();
      if (!visited[current] && this.adjacencyList[current]) {
        result.push(current);
        visited[current] = "true";
        for (let edge of this.adjacencyList[current]) {
          stack.push(edge);
        }
      }
    }
    return result;
  }
  BFSIterative(vertex) {
    let queue = [];
    let result = [];
    let visited = {};
    queue.push(vertex);
    visited[vertex] = "true";
    while (queue.length) {
      let current = queue.pop();
      result.push(current);
      for (let edge of this.adjacencyList[current]) {
        if (!visited[edge]) {
          visited[edge] = "true";
          queue.unshift(edge);
        }
      }
    }
    return result;
  }
}

let graph = new Graph();
console.log(graph.adjacencyList);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
console.log(graph.addEdge("A", "B"));
console.log(graph.addEdge("A", "C"));
console.log(graph.addEdge("B", "D"));
console.log(graph.addEdge("C", "E"));
console.log(graph.addEdge("D", "E"));
console.log(graph.addEdge("D", "F"));
console.log(graph.addEdge("E", "F"));

console.log(graph.adjacencyList);
console.log(graph.DFSRecursive("A"));
console.log(graph.DFSIterative("A"));
console.log(graph.BFSIterative("A"));
