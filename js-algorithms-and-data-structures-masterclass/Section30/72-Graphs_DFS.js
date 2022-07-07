// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424964#questions

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
    depthFirstSearch(start){
        let result = [];
        let visited = {};
        let list = this.adjacencyList;
        function dfs(vertex) {
            if(!vertex) return;
            result.push(vertex);
            visited[vertex] = true;
            list[vertex].forEach(v => {
                if(!visited.hasOwnProperty(v)) dfs(v);
            });
        }
        dfs(start);
        return result;
    }
}
