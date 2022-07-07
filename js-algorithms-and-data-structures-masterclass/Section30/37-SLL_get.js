// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409506#questions

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
    set(idx, val) {
        var node = this.get(idx);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
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
}