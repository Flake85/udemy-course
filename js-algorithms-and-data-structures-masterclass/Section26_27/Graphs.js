// Contains Sections 26 && 27
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344900#questions

// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this.adjacencyList;
    }
    addEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
        return this.adjacencyList;
    }
    removeEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            let newV1 = [];
            for (let i = 0; i < this.adjacencyList[v1].length; i++) {
                if(this.adjacencyList[v1][i] !== v2) newV1.push(this.adjacencyList[v1][i]);
            }
            this.adjacencyList[v1] = newV1;
            
            let newV2 = [];
            for (let i = 0; i < this.adjacencyList[v2].length; i++) {
                if(this.adjacencyList[v2][i] !== v1) newV2.push(this.adjacencyList[v2][i]);
            }
            this.adjacencyList[v2] = newV2;
        }
        return this.adjacencyList;
    }
    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            while(this.adjacencyList[vertex].length > 0) {
                let key = this.adjacencyList[vertex][0];
                this.removeEdge(key, vertex);
            }
        }
        delete this.adjacencyList[vertex];
        return this.adjacencyList;
    }
    dfsRecursive(vertex) {
        let result = [];
        let seen = {};
        let list = this.adjacencyList;
        function dfs(vertex) {
            if(!vertex) return;
            result.push(vertex);
            seen[vertex] = true;
            for (let i = 0; i < list[vertex].length; i++) {
                let adjacencyListVertex = list[vertex];
                if(!(seen.hasOwnProperty(adjacencyListVertex[i]))) dfs(adjacencyListVertex[i])
            }
        }
        dfs(vertex);
        return result;
    }
    dfsIterative(vertex) {
        let stack = [vertex];
        let result = [];
        let visited = {};
        let current;

        visited[vertex] = true;
        while(stack.length) {
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    bfs(vertex) {
        let queue = [vertex];
        let result = [];
        let visited = {};
        let current;
        
        visited[vertex] = true;
        while(queue.length) {
            current = queue.shift();
            result.push(current);
            // current code grabs neighbors from left to right.
            // commented out line shows how to do from right to left.
            // this.adjacencyList[current].slice().reverse().forEach(neighbor => {
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

          //   A
          //  / \
          // B   C
          // |   |  
          // D---E
          //  \ /
          //   F