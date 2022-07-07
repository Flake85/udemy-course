// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424852#questions

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
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let current = this.head;
        let count = 0;
        while(count !== idx) {
            current = current.next;
            count++;
        }
        return current;
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) {
            this.push(val);
            return true;
        }
        let newNode = new Node(val);
        if(idx === 0) {
            let temp = this.head;
            this.head = newNode;
            newNode.next = temp;
        }
        let prevNode = this.get(idx - 1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
}
