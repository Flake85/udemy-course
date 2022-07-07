// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409508#questions

class Node{
    constructor(val){
        this.val = val;
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(){
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
    get(idx) {
        let count = 0;
        let current = this.head;
        while(count < idx) {
            current = current.next;
            count++;
        }
        return current;
    }
    shift() {
        if(!this.length) return undefined;
        let removed = this.head;
        if(removed.next) this.head = removed.next;
        else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return removed;
    }
    pop() {
        if(!this.head) return undefined;
        let removed = this.head;
        if(!removed.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }
        let temp = null;
        while(removed.next) {
            temp = removed;
            removed = removed.next;
        }
        temp.next = null;
        this.tail = temp;
        this.length--;
        return removed;
    }
    remove(idx){
        if(idx > this.length || idx < 0 || !this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        
        let current = this.get(idx);
        let previous = this.get(idx - 1);
        previous.next = current.next;
        this.length--;
        return current;
    }
}
