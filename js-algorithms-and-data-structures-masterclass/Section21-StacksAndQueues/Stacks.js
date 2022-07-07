// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344300#questions

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let oldFirst = this.first;
            this.first = node;
            node.next = oldFirst;
        }
        this.size++;
        return node;
    }
    pop() {
        if(!this.first) return null;
        let oldFirst = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFirst.next;
        }
        this.size--;
        return oldFirst.value;
    }
}

var stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)