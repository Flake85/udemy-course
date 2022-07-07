// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424882#questions

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor(val){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return this.size;
        }
        let temp = this.first;
        this.first = newNode;
        newNode.next = temp;
        this.size++;
        return this.size;
    }
}