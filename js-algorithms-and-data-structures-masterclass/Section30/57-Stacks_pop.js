// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409518#questions

class Node{
    constructor(val){
        this.val = val;
    }
}

class Stack{
    constructor(val){
        this.first = null;
        this.last = null;     
        this.size = 0;
    }
    push(val){
        var node = new Node(val);

        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first=node;
            this.first.next=tmp;
        }

        return ++this.size;
    }
    pop() {
        if(!this.first) return undefined;
        let removed = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removed.next;
        }
        this.size--;
        return removed.val;
    }
}
