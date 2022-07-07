// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344818#questions

class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }
    swap(a, b) {
        let temp = this.values[a];
        this.values[a] = this.values[b];
        this.values[b] = temp;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let el = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(el <= parent) break;
            this.swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
}

var heap = new MaxBinaryHeap();
heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(6)