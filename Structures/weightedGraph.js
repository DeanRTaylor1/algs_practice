#!/usr/bin/env node

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2, weight) {
    if (graph.adjacencyList[v1] && graph.adjacencyList[v2]) {
      graph.adjacencyList[v1].push({ node: v2, weight });
      graph.adjacencyList[v2].push({ node: v1, weight });
    }
  }
  dijkstras(start, end) {
    let distances = {};
    let queue = new PriorityQueue();
    let previous = {};
    let smallest;
    let path = []; //to return at the end

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (queue.values.length) {
      smallest = queue.dequeue().val;

      if (smallest === end) {
        console.log(distances);
        console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          //find neighbour
          let nextNode = this.adjacencyList[smallest][neighbour];

          //calculate distance
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            //updating smallest distance to the next node
            distances[nextNeighbour] = candidate;
            //updating the node we were at before we got to the next node
            previous[nextNeighbour] = smallest;

            queue.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let graph = new WeightedGraph();
console.log(graph.adjacencyList);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
console.log(graph.addEdge("A", "B", 4));
console.log(graph.addEdge("A", "C", 2));
console.log(graph.addEdge("B", "E", 3));
console.log(graph.addEdge("C", "D", 2));
console.log(graph.addEdge("D", "E", 3));
console.log(graph.addEdge("D", "F", 1));
console.log(graph.addEdge("C", "F", 4));
console.log(graph.addEdge("E", "F", 1));
console.log(graph.adjacencyList);
console.log(graph.dijkstras("A", "E"));
