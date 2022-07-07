// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424966#questions

function WeightedGraph() {
    Graph.call(this);
}

WeightedGraph.prototype = Object.create(Graph.prototype);

// over-rides Graph() addEdge function to add weight
WeightedGraph.prototype.addEdge = function (v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
};

WeightedGraph.prototype.Dijkstra = function (start, end) {
    const nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let smallest;
    for(let vertex in this.adjacencyList) {
        if(vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }
    while(nodes.values.length) {
        smallest = nodes.dequeue().val;
        if(smallest === end) {
            while(previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }
        if(smallest || distances[smallest] !== Infinity) {
            for(let neighbor in this.adjacencyList[smallest]){
                let nextNode = this.adjacencyList[smallest][neighbor];
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;
                if(candidate < distances[nextNeighbor]){
                    distances[nextNeighbor] = candidate;
                    previous[nextNeighbor] = smallest;
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    return distances[end], path.concat(smallest).reverse();
};
/*** 
   *** Use Graph as a constructor for WeightedGraph to inherit from! 
   ***
***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function() {
  let total = 0;

  Object.values(this.adjacencyList).forEach(list => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function(vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function(vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    v => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !== vertex1
  );
};

/*** 
   *** Use the following as a PriorityQueue (it's a min heap)! 
   ***
***/
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}