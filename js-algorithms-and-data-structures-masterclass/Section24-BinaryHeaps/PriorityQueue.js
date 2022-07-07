// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344820#questions

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let el = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(el.priority >= parent.priority) break;
            this.swap(parentIdx, idx)
            idx = parentIdx;
        } 
    }
    swap(idx1, idx2) {
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }
    dequeue() {
        let removed = this.values[0]
        this.swap(0, this.values.length - 1);
        this.values.pop();
        this.sinkDown();
        return removed;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const el = this.values[0];
        while(true) {
            let lChildIdx = (2*idx) + 1;
            let rChildIdx = (2*idx) + 2;
            let lChild, rChild;
            let swap = null;
            
            if(lChildIdx < length) {
                lChild = this.values[lChildIdx];
                if(lChild.priority < el.priority) swap = lChildIdx;
            }
            if(rChildIdx < length) {
                rChild = this.values[rChildIdx];
                if(
                    (swap === null && rChild.priority < el.priority) ||
                    (swap !== null && rChild.priority < lChild.priority)
                ) swap = rChildIdx;
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = el;
            idx = swap;
        }
    }
}

let priority = new PriorityQueue();
priority.enqueue("test2", 2);
priority.enqueue("test4", 2);
priority.enqueue("test3", 3);
priority.enqueue("test", 1);
priority.enqueue("test6", 2);
priority.enqueue("test5", 2);

