// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424842#questions

class Node{
    constructor(val){
        this.val = val;
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}