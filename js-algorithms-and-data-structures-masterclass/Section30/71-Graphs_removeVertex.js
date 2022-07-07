// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424960#questions

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
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            let newVertex1 = [];
            this.adjacencyList[vertex1].forEach(v => {
                if(v !== vertex2) newVertex1.push(v);
            });
            this.adjacencyList[vertex1] = newVertex1;
            let newVertex2 = [];
            this.adjacencyList[vertex2].forEach(v => {
                if(v !== vertex1) newVertex2.push(v);
            });
            this.adjacencyList[vertex2] = newVertex2;
        }
    }
    removeVertex(vertex){
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }
}
