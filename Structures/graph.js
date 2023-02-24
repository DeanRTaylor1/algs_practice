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
    if (graph.adjacencyList[v1] && graph.adjacencyList[v2]) {
      graph.adjacencyList[v1].push(v2);
      graph.adjacencyList[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    if (graph.adjacencyList[v1] && graph.adjacencyList[v2]) {
      graph.adjacencyList[v1] = graph.adjacencyList[v1].filter((item) => {
        return item !== v2;
      });
      graph.adjacencyList[v2] = graph.adjacencyList[v2].filter((item) => {
        return item !== v1;
      });
    }
  }
  removeVertex(vertex) {
    if (graph.adjacencyList[vertex]) {
      for (let edge of graph.adjacencyList[vertex]) {
        this.removeEdge(edge, vertex);
      }
      delete this.adjacencyList[vertex];
      return true;
    }
  }
}

let graph = new Graph();
console.log(graph.adjacencyList);
graph.addVertex(2);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addVertex(9);
console.log(graph.addEdge(2, 3));
console.log(graph.addEdge(4, 3));
console.log(graph.addEdge(4, 2));
console.log(graph.addEdge(5, 9));
console.log(graph.addEdge(3, 9));
console.log(graph.adjacencyList);
console.log(graph.removeVertex(9));
console.log(graph.adjacencyList);
console.log(graph.removeVertex(8));
console.log(graph.adjacencyList);
