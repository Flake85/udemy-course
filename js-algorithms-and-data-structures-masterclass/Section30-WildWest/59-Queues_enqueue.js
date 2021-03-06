// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424886#questions

class Node{
    constructor(val){
        this.value = val;
        this.next = null;      
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    } 
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}