// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409502#questions

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
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        if(!current.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }
        let temp = null;
        while(current.next) {
            temp = current;
            current = current.next;
        }
        temp.next = null;
        this.tail = temp;
        
        this.length--;
        return current;
    }
}
