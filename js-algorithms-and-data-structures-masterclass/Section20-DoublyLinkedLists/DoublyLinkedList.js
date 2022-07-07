// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11081926#questions

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        var currentTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return currentTail;
    }
    shift() {
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if(idx < 0 || idx >= this.length) return null;
        if(idx <= Math.floor(this.length / 2)) {
            let count = 0;
            let current = this.head;
            while(count < idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while(count > idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(val, idx) {
        let node = this.get(idx);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
    insert(val, idx) {
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);
        
        let indexNode = this.get(idx);
        let prevNode = this.get(idx - 1);
        var newNode = new Node(val);
        
        newNode.next = indexNode;
        newNode.prev = indexNode.prev;
        prevNode.next = newNode;
        indexNode.prev = newNode;
        this.count++;
        return newNode;
    }
    remove(idx) {
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift(idx);
        if(idx === this.length - 1) return this.pop(idx)
        let node = this.get(idx);
        let prevNode = this.get(idx-1);
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.next = null;
        node.prev = null;
        return node;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let prev = null;
        let count = 0;
        while(count < this.length) {
            let next = node.next;
            let prev = node.prev;
            node.next = prev;
            node.prev = next;
            current = next;
            count++;
        }
        return this;
    }
}

var list = new DoublyLinkedList()
list.push("Welcome")
list.push("to")
list.push("the")
list.push("jungle")


