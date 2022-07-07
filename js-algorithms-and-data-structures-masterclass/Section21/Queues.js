// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11106376#questions

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }
    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.size === 1) this.last = null; 
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
