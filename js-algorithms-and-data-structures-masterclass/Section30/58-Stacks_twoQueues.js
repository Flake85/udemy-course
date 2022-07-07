// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413066#questions

class Stack {
    constructor() {
        this.qIn = new Queue();
        this.qOut = new Queue();
    }
    push(val) {
        this.qIn.enqueue(val);
        return this;
    }
    pop() {
        while(this.qIn.size > 1) {
            this.qOut.enqueue(this.qIn.dequeue());
        }
        let removed = this.qIn.dequeue();
        let tempQ = this.qIn;
        this.qIn = this.qOut;
        this.qOut = tempQ;
        return removed;
    }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
