// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413070#questions

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
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
    rotate(idx) {
        if(idx > this.length) return this;
        let index = (idx + this.length) % this.length;
        let newTail = this.get(index - 1);
        let oldHead = this.head;
        let newHead = this.get(index);
        if(index === this.length - 1) {
            newTail.next = null;
            this.tail = newTail;
            this.head = newHead;
            newHead.next = oldHead;
            return this;
        }
        let oldTail = this.tail;
        newTail.next = null;
        oldTail.next = oldHead;
        this.head = newHead;
        this.tail = newTail;
        return this;
    }
}
