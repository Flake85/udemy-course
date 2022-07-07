// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424962#questions

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    breadthFirstSearch(vertex) {
        let queue = [vertex];
        let result = [];
        let visited = {};
        let current;
        
        visited[vertex] = true;
        function loopNeighbors(list, current) {
            list[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        while(queue.length) {
            current = queue.shift();
            result.push(current);
            let list = this.adjacencyList;
            loopNeighbors(list, current);
        }
        return result;
    }
}
