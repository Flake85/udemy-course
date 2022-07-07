// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424956#questions

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        return !this.adjacencyList[vertex] ? this.adjacencyList[vertex] = [] : undefined;
    }
}
